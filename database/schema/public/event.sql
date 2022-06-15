create type public.event_type as enum (
  'CREATE_CLIENT',
  'CREATE_CASE_STUDY',
  'CREATE_CASE_STUDY_TREATMENT',
  'CONCLUDE_CASE_STUDY', -- TODO: maybe COMPLETE case study?
  'FORM_RESPONSE'
  -- TODO: 'FILE_UPLOAD'
  -- TODO: 'CREATE_REPORT'
  -- TODO: 'TREATMENT_RESERVATION'
  -- TODO: 'TREATMENT_CANCELLATION'
);

create view public."event" as (
  (
    select
      id,
      'CREATE_CLIENT'::public.event_type as "type",

      id as client_id,
      null::uuid as case_study_id,
      null::uuid as case_study_treatment_id,
      null::uuid as case_study_conclusion_id,
      null::uuid as form_response_id,

      created_at
    from public.client
  ) union all (
    select
      id,
      'CREATE_CASE_STUDY'::public.event_type as "type",

      client_id,
      id as case_study_id,
      null::uuid as case_study_treatment_id,
      null::uuid as case_study_conclusion_id,
      null::uuid as form_response_id,

      created_at
    from public.case_study
  ) union all (
    select
      case_study_treatment.id,
      'CREATE_CASE_STUDY_TREATMENT'::public.event_type as "type",

      case_study.client_id,
      case_study_treatment.case_study_id,
      case_study_treatment.id as case_study_treatment_id,
      null::uuid as case_study_conclusion_id,
      null::uuid as form_response_id,

      case_study_treatment.created_at
    from public.case_study_treatment
      inner join public.case_study on case_study.id = case_study_treatment.case_study_id
  ) union all (
    select
      case_study_conclusion.id,
      'CONCLUDE_CASE_STUDY'::public.event_type as "type",

      case_study.client_id,
      case_study_conclusion.case_study_id,
      null::uuid as case_study_treatment_id,
      case_study_conclusion.id as case_study_conclusion_id,
      null::uuid as form_response_id,

      case_study_conclusion.created_at
    from public.case_study_conclusion
      inner join public.case_study on case_study.id = case_study_conclusion.case_study_id
  ) union all (
    select
      form_response.id,
      'FORM_RESPONSE'::public.event_type as "type",

      case_study.client_id,
      form_response.case_study_id,
      null::uuid as case_study_treatment_id,
      null::uuid as case_study_conclusion_id,
      form_response.id as form_response_id,

      form_response.created_at
    from public.form_response
      inner join public.case_study on case_study.id = form_response.case_study_id
  )
);

grant select on public."event" to viewer;

comment on column public."event".id is '@notNull';
comment on column public."event"."type" is '@notNull';
comment on column public."event".client_id is '@notNull';
comment on column public."event".created_at is '@notNull';

comment on view public."event" is $$
@primaryKey id

@foreignKey (client_id) references public.client(id)
@foreignKey (case_study_id) references public.case_study(id)
@foreignKey (case_study_treatment_id) references public.case_study_treatment(id)
@foreignKey (case_study_conclusion_id) references public.case_study_conclusion(id)
@foreignKey (form_response_id) references public.form_response(id)

An event that can happen in heltin worth mentioning to the user.$$;

----

create function public.client_sorted_events(
  client public.client
) returns setof public."event" as $$
  select * from public."event"
  where "event".client_id = client.id
  order by "event".created_at asc
$$ language sql stable strict;

comment on function public.client_sorted_events is 'Events related to the client sorted by creation date in descending order (newest on the top).';

create function public.case_study_sorted_events(
  case_study public.case_study
) returns setof public."event" as $$
  select * from public."event"
  where "event".case_study_id = case_study.id
  order by "event".created_at asc
$$ language sql stable strict;

comment on function public.case_study_sorted_events is 'Events related to the case study sorted by creation date in descending order (newest on the top).';
