create table public.case_study (
  id uuid primary key default uuid_generate_v4(),

  client_id uuid references public.client(id) on delete cascade,
  group_id  uuid references public.group(id) on delete cascade,
  check ((client_id is null) <> (group_id is null)), -- only one can be set. one must be set

  description text not null,

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study to viewer;

create or replace function public.create_case_study(
  description text,
  -- either client or group, but not both
  client_id   uuid = null,
  group_id    uuid = null
) returns public.case_study as
$$
  insert into public.case_study (client_id, group_id, description)
    values (create_case_study.client_id, create_case_study.group_id, create_case_study.description)
  returning *
$$
language sql volatile;

create or replace function public.update_case_study(
  id          uuid,
  description text
) returns public.case_study as
$$
  update public.case_study set
    description=update_case_study.description,
    updated_at=now()
  where id = update_case_study.id
  returning *
$$
language sql volatile;

create or replace function public.delete_case_study(
  id uuid
) returns public.case_study as
$$
  delete from public.case_study
  where id = delete_case_study.id
  returning *
$$
language sql volatile;

----

create table public.case_study_relation (
  case_study_id uuid not null references public.case_study(id) on delete restrict,
  related_case_study_id uuid not null references public.case_study(id) on delete restrict,

  description text, -- why is it related?

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_relation to viewer;

----

create table public.case_study_mental_health_professional (
  id uuid primary key default uuid_generate_v4(),

  case_study_id                 uuid not null references public.case_study(id) on delete cascade,
  mental_health_professional_id uuid not null references public.mental_health_professional(id),
  unique(case_study_id, mental_health_professional_id),

  "primary" boolean not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_mental_health_professional to viewer;

-- only one primary mental health professional
create unique index case_study_mental_health_professional_primary on public.case_study_mental_health_professional (case_study_id) where ("primary");

create or replace function public.create_case_study_mental_health_professional(
  case_study_id                 uuid,
  mental_health_professional_id uuid,
  "primary"                     boolean
) returns public.case_study_mental_health_professional as
$$
  insert into public.case_study_mental_health_professional (case_study_id, mental_health_professional_id, "primary")
    values (create_case_study_mental_health_professional.case_study_id, create_case_study_mental_health_professional.mental_health_professional_id, create_case_study_mental_health_professional."primary")
  returning *
$$
language sql volatile;

create or replace function public.update_case_study_mental_health_professional(
  id        uuid,
  "primary" boolean
) returns public.case_study_mental_health_professional as
$$
  update public.case_study_mental_health_professional set
    "primary"=update_case_study_mental_health_professional."primary",
    updated_at=now()
  where id = update_case_study_mental_health_professional.id
  returning *
$$
language sql volatile;

create or replace function public.delete_case_study_mental_health_professional(
  id uuid
) returns public.case_study_mental_health_professional as
$$
  delete from public.case_study_mental_health_professional
  where id = delete_case_study_mental_health_professional.id
  returning *
$$
language sql volatile;

----

create table public.case_study_session (
  id uuid primary key default uuid_generate_v4(),

  case_study_id uuid not null references public.case_study(id) on delete cascade,

  "external" boolean not null,

  started_at timestamptz not null,
  ended_at   timestamptz not null,

  description text,

  score integer check(score >= 1 and score <= 5),

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_session to viewer;

----

create type public.case_study_conclusion_type as enum (
  'TREATMENT_COMPLETION',
  'CANCELLATION_BY_CLIENT',
  'CANCELLATION_BY_PARENT',
  'FURTHER_REFERRAL'
);

-- presence of conclusion locks all entries referencing the case study
create table public.case_study_conclusion (
  id uuid primary key default uuid_generate_v4(),

  case_study_id uuid not null references public.case_study(id) on delete cascade,

  "type" public.case_study_conclusion_type not null,

  description text,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_conclusion to viewer;
