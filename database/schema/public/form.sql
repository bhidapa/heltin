create table public.form (
  id uuid primary key default uuid_generate_v4(),

  -- TODO: allow_editing_response (if necessary?)

  name        text not null check(length(trim(name)) > 3),
  description text,

  enabled boolean not null default true,

  created_by uuid not null references public.user(id) on delete restrict,
  created_at created_timestamptz not null
);

grant all on public.form to viewer;

create index form_name_idx on public.form (name);
create index form_description_idx on public.form (description);
create index form_enabled_idx on public.form (enabled);

----

create type public.form_question_type as enum (
  'SHORT_ANSWER',
  'PARAGRAPH',
  'MULTIPLE_CHOICE',
  'CHECKBOXES',
  'DROPDOWN',
  'DATE',
  'DATE_TIME',
  'TIME'
  -- TODO: decide if FILE question type is even necessary (and implement accordingly)
);

create table public.form_question (
  id uuid primary key default uuid_generate_v4(),

  form_id uuid not null references public.form(id) on delete cascade,

  index int not null,
  constraint form_question_index_is_unique unique(form_id, index),

  required boolean not null,

  "type"  public.form_question_type not null,
  options jsonb, -- if an option is `null`, the user will be offered to enter it's own option

  constraint at_least_one_option_for_multiple_choice check(
    "type" <> 'MULTIPLE_CHOICE'
    or (options[0] is not null)
  ),
  constraint at_least_one_option_for_multiple_checkboxes check(
    "type" <> 'CHECKBOXES'
    or (options[0] is not null)
  ),
  constraint at_least_one_option_for_dropdown check(
    "type" <> 'DROPDOWN'
    or (options[0] is not null)
  ),
  constraint no_options_for_single_answer_types check(
    "type" = 'MULTIPLE_CHOICE'
    or "type" = 'CHECKBOXES'
    or "type" = 'DROPDOWN'
    or options is null
  ),
  constraint no_option_can_be_of_object_type check(
    not jsonb_path_exists(options, '$[*].type() ? (@ == "object")')
  ),

  -- TODO: how to more complex validation?

  name text not null check(length(trim(name)) > 1),
  constraint question_must_have_unique_name unique(name),

  description text,

  -- TODO: "page int not null" for multi page/stage responses?

  created_by uuid not null references public.user(id) on delete restrict,
  created_at created_timestamptz not null
);

comment on column public.form_question.index is 'The position of the question when filling in the form.';

grant all on public.form_question to viewer;

-- TODO: form questions shouldnt be changed when in use

create index form_question_form_id_idx on public.form_question (form_id);
create index form_question_index_idx on public.form_question (index);

----

create table public.form_response (
  id uuid primary key default uuid_generate_v4(),

  form_id uuid not null references public.form(id) on delete restrict, -- if you want to delete the form, make sure you delete all responses first

  case_study_id uuid not null references public.case_study(id) on delete cascade,

  created_by uuid not null references public.user(id) on delete restrict,
  created_at created_timestamptz not null
);

grant select, insert, delete on public.form_response to viewer;

create index form_response_form_id_idx on public.form_response (form_id);
create index form_response_case_study_id_idx on public.form_response (case_study_id);

create table public.form_response_answer (
  id uuid primary key default uuid_generate_v4(),

  form_response_id uuid not null references public.form_response(id) on delete cascade,
  form_question_id uuid not null references public.form_question(id) on delete restrict, -- if you want to delete the question, make sure you delete all answers first
  constraint single_answer_for_response_question unique(form_response_id, form_question_id),

  value jsonb, -- must allow null to record answer updates removing the original answer

  created_by uuid not null references public.user(id) on delete restrict,
  updated_by uuid references public.user(id) on delete restrict,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.form_response_answer to viewer;

create index form_response_answer_form_response_id_idx on public.form_response_answer (form_response_id);
create index form_response_answer_form_question_id_idx on public.form_response_answer (form_question_id);
create index form_response_answer_value_idx on public.form_response_answer using gin (value);

create function public.check_form_response_answer()
returns trigger as $$
declare
  form_question public.form_question;
  answer_empty  boolean;
begin
  select * into form_question
  from public.form_question as fq
  where fq.id = new.form_question_id;

  answer_empty := new.value is null
    or new.value = '""'
    or (jsonb_typeof(new.value) = 'array'
      and new.value[0] is null);

  if form_question.required
  and answer_empty
  then
    raise exception '"%" is required', form_question.name;
  end if;

  if form_question."type" in ('MULTIPLE_CHOICE', 'CHECKBOXES', 'DROPDOWN')
  and not answer_empty
  and not form_question.options @> new.value -- operator @> supports both single and multi answers
  then
    raise exception 'Invalid value % received for "%"', new.value, form_question.name;
  end if;

  return null;
end
$$ language plpgsql stable strict;
create constraint trigger form_response_answer_insert_or_update
  after insert or update on public.form_response_answer
  for each row
  execute function public.check_form_response_answer();

create table public.form_response_file (
  id uuid primary key default uuid_generate_v4(),

  form_response_id uuid not null references public.form_response(id) on delete cascade,
  file_id          uuid not null references public.file(id) on delete cascade,
  unique(form_response_id, file_id),

  created_at created_timestamptz not null
);

grant select, insert, delete on public.form_response_file to viewer;

create index form_response_file_form_response_id_idx on public.form_response_file (form_response_id);
create index form_response_file_file_id_idx on public.form_response_file (file_id);

create function public.file_form_response_file(
  file public.file
) returns public.form_response_file as $$
  select * from public.form_response_file
  where form_response_file.file_id = file.id
  -- unnecessary limit 1, there's a constraint
$$ language sql stable strict;

----

create function public.create_form_response(
  form_id uuid,
  case_study_id uuid,
  answers jsonb -- must be in format { <form_question_id>: <payload> }
) returns public.form_response as $$
declare
  form_response public.form_response;
  form_question public.form_question;

  answer_value jsonb;
  answer_empty boolean;
begin
  insert into public.form_response (form_id, case_study_id, created_by)
  values (create_form_response.form_id, create_form_response.case_study_id, public.viewer_user_id())
  returning * into form_response;

  for form_question in
    select * from public.form_question as fq
    where fq.form_id = create_form_response.form_id
    order by fq.index asc -- validate in order
  loop
    answer_value := answers[form_question.id::text];

    if form_question.required
    and (answer_value is null
      or answer_value = '""'
      or (jsonb_typeof(answer_value) = 'array'
        and answer_value[0] is null))
    then
      raise exception '"%" is required', form_question.name;
    end if;

    insert into public.form_response_answer (form_response_id, form_question_id, value, created_by)
    values (form_response.id, form_question.id, answer_value, public.viewer_user_id());
  end loop;

  return form_response;
end
$$ language plpgsql volatile;

create function public.update_form_response(
  form_response_id uuid,
  answers jsonb -- must be in format { <form_question_id>: <payload> }
) returns public.form_response as $$
declare
  form_response public.form_response;
  form_question public.form_question;

  answer_value jsonb;
  answer_empty boolean;
begin
  select fs.* into form_response
  from public.form_response as fs
  where fs.id = update_form_response.form_response_id;

  for form_question in
    select fq.* from public.form_question as fq
    where form_response.form_id = fq.form_id
    order by fq.index asc -- validate in order
  loop
    answer_value := answers[form_question.id::text];

    if form_question.required
    and (answer_value is null
      or answer_value = '""'
      or (jsonb_typeof(answer_value) = 'array'
        and answer_value[0] is null))
    then
      raise exception '"%" is required', form_question.name;
    end if;

    if (
      select form_response_answer.value is not distinct from answer_value
      from public.form_response_answer
      where form_response_answer.form_response_id = update_form_response.form_response_id
      and form_response_answer.form_question_id = form_question.id
    ) then
      -- answer stayed the same
      continue;
    end if;

    -- we do upserts to handle cases where the form was extended
    insert into public.form_response_answer (form_response_id, form_question_id, value, created_by)
    values (update_form_response.form_response_id, form_question.id, answer_value, public.viewer_user_id())
    on conflict on constraint single_answer_for_response_question do update
      set
        value=answer_value,
        updated_by=public.viewer_user_id(),
        updated_at=now();
  end loop;

  return form_response;
end
$$ language plpgsql volatile;

create function public.delete_form_response(
  id uuid
) returns public.form_response as $$
  delete from public.form_response
  where id = delete_form_response.id
  returning *
$$ language sql volatile;

----

create function public.filter_forms(
  search_text text = null,
  enabled     boolean = true
) returns setof public.form as $$
  select * from public.form
  where (filter_forms.enabled is null
    or filter_forms.enabled = form.enabled)
  and (search_text is null
    or form.name ilike '%' || search_text || '%'
    or form.description ilike '%' || search_text || '%')
  order by created_at desc
$$ language sql stable;
