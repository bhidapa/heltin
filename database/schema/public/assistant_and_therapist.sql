create table public.assistant (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid unique references public.user(id) on delete set null,

  telephone text,
  email email_address unique not null,

  first_name    text not null,
  last_name     text not null,
  date_of_birth date not null,
  unique(first_name, last_name, date_of_birth),

  gender public.gender not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant select, update on table public.assistant to viewer;

create index assistant_user_id_idx on public.assistant (user_id);

----

create function public.user_is_assistant(
  "user" public.user
) returns boolean as $$
  select exists(select from public.assistant where user_id = "user".id)
$$ language sql stable strict
cost 100000; -- used in RLS, have the planner call the function as little as possible

comment on function public.user_is_assistant is '@notNull';

create function public.assistant_full_name(
  assistant public.assistant
) returns text as
$$
  select
    assistant.first_name || ' ' ||
    assistant.last_name
$$
language sql immutable;

comment on function public.assistant_full_name is '@notNull';

----

create type public.therapist_type as enum (
  'PSYCHOTHERAPIST',
  'PSYCHOLOGIST',
  'PSYCHIATRIST',
  'NEUROLOGIST',
  'PEDIATRIST',
  'SOCIAL_WORKER',
  'PEDAGOGUE',
  'DEFECTOLOGIST',
  'PHONETICIAN',
  'NEUROPSYCHIATRIST', -- neuropsihijatar
  'CLINICAL_PSYCHOLOGIST',
  'SUPERVISOR',
  'LOGOPED',
  'OTHER'
);

create table public.therapist (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid unique references public.user(id) on delete set null,

  "type" public.therapist_type not null,

  telephone text,
  email email_address unique not null,

  title         text,
  first_name    text not null,
  last_name     text not null,
  date_of_birth date not null,
  unique(first_name, last_name, date_of_birth),

  gender public.gender not null,

  disabled boolean not null default false,

  fulltext text not null generated always as (
    email || ' ' ||
    coalesce(title || ' ', '') ||
    first_name || ' ' ||
    last_name
  ) stored,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

comment on column public.therapist.fulltext is '@omit';

grant all on table public.therapist to viewer;

create index therapist_user_id_idx on public.therapist (user_id);
create index therapist_fulltext_idx on public.therapist using gin (fulltext gin_trgm_ops);

----

create function public.therapist_enabled(
  therapist public.therapist
) returns boolean as $$
  select not therapist.disabled
$$ language sql immutable strict;

comment on function public.therapist_enabled is '@notNull';

----

create function public.user_is_therapist(
  "user" public.user
) returns boolean as $$
  select exists(select from public.therapist where user_id = "user".id)
$$ language sql stable strict
cost 100000; -- used in RLS, have the planner call the function as little as possible

comment on function public.user_is_therapist is '@notNull';

----

create function public.therapist_full_name(
  therapist public.therapist
) returns text as
$$
  select
    coalesce(therapist.title || ' ', '') ||
    therapist.first_name || ' ' ||
    therapist.last_name
$$
language sql immutable;

comment on function public.therapist_full_name is '@notNull';

----

create function public.user_can_insert_therapist(
  "user" public.user
)
returns boolean as $$
  select public.user_is_admin("user")
$$ language sql stable strict;
comment on function public.user_can_insert_therapist is '@notNull';

create function public.therapist_can_viewer_update(
  therapist public.therapist
) returns boolean as $$
  select
    therapist.user_id = public.viewer_user_id()
    or public.user_is_admin(public.viewer())
$$ language sql stable strict;
comment on function public.therapist_can_viewer_update is '@notNull';

create function public.therapist_can_viewer_delete(
  therapist public.therapist
) returns boolean as $$
  select public.user_is_admin(public.viewer())
$$ language sql stable strict;
comment on function public.therapist_can_viewer_delete is '@notNull';

----

create function public.create_therapist(
  "type"        public.therapist_type,
  email         email_address,
  first_name    text,
  last_name     text,
  date_of_birth date,
  gender        public.gender,
  disabled      boolean,
  telephone     text = null,
  title         text = null,
  user_id       uuid = null
) returns public.therapist as
$$
  insert into public.therapist (
    "type",
    email,
    title,
    first_name,
    last_name,
    date_of_birth,
    gender,
    disabled,
    telephone,
    user_id
  ) values (
    create_therapist."type",
    create_therapist.email,
    create_therapist.title,
    create_therapist.first_name,
    create_therapist.last_name,
    create_therapist.date_of_birth,
    create_therapist.gender,
    create_therapist.disabled,
    create_therapist.telephone,
    create_therapist.user_id
  )
  returning *
$$
language sql volatile;

----

create function public.update_therapist(
  id            uuid,
  "type"        public.therapist_type,
  email         email_address,
  first_name    text,
  last_name     text,
  date_of_birth date,
  gender        public.gender,
  disabled      boolean,
  telephone     text = null,
  title         text = null,
  user_id       uuid = null
) returns public.therapist as
$$
  update public.therapist
    set
      "type"=update_therapist."type",
      email=update_therapist.email,
      title=update_therapist.title,
      first_name=update_therapist.first_name,
      last_name=update_therapist.last_name,
      date_of_birth=update_therapist.date_of_birth,
      gender=update_therapist.gender,
      disabled=update_therapist.disabled,
      telephone=update_therapist.telephone,
      user_id=update_therapist.user_id,
      updated_at=now()
  where id = update_therapist.id
  returning *
$$
language sql volatile;

----

create function public.delete_therapist(
  id uuid
) returns public.therapist as
$$
  delete from public.therapist
  where id = delete_therapist.id
  returning *
$$
language sql volatile;

----

create function public.user_first_name(
  "user" public.user
) returns text as $$
  select coalesce(
    (select assistant.first_name
      from public.assistant
      where assistant.user_id = "user".id),
    (select therapist.first_name
      from public.therapist
      where therapist.user_id = "user".id),
    "user".email -- TODO: use first part of email address
  )
$$ language sql stable strict;
comment on function public.user_first_name is '@notNull';

create function public.user_full_name(
  "user" public.user
) returns text as $$
  select coalesce(
    (select public.assistant_full_name(assistant)
      from public.assistant
      where assistant.user_id = "user".id),
    (select public.therapist_full_name(therapist)
      from public.therapist
      where therapist.user_id = "user".id),
    "user".email
  )
$$ language sql stable strict;
comment on function public.user_full_name is '@notNull';
