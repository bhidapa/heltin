create table public.case_study (
  id uuid primary key default uuid_generate_v4(),

  client_id uuid references public.client(id) on delete cascade,
  group_id  uuid references public.group(id) on delete cascade,
  check ((client_id is null) <> (group_id is null)), -- only one can be set. one must be set

  title text not null check(length(title) > 0),

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study to viewer;

create or replace function public.create_case_study(
  title text,
  -- either client or group, but not both
  client_id   uuid = null,
  group_id    uuid = null
) returns public.case_study as
$$
  insert into public.case_study (client_id, group_id, title)
    values (create_case_study.client_id, create_case_study.group_id, create_case_study.title)
  returning *
$$
language sql volatile;

create or replace function public.update_case_study(
  id          uuid,
  title text
) returns public.case_study as
$$
  update public.case_study set
    title=update_case_study.title,
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

create table public.case_study_treatment (
  id uuid primary key default uuid_generate_v4(),

  case_study_id uuid not null references public.case_study(id) on delete cascade,

  "external" boolean not null,

  started_at timestamptz not null,
  ended_at   timestamptz not null,

  title       text not null check(length(title) > 0),
  description text check(length(description) >= 3),

  score integer check(score >= 1 and score <= 5),

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_treatment to viewer;

create or replace function public.create_case_study_treatment(
  case_study_id uuid,
  "external"    boolean,
  started_at    timestamptz,
  ended_at      timestamptz,
  title         text,
  description   text = null,
  score         integer = null
) returns public.case_study_treatment as
$$
  insert into public.case_study_treatment (case_study_id, "external", started_at, ended_at, description, title, score)
    values (
      create_case_study_treatment.case_study_id,
      create_case_study_treatment."external",
      create_case_study_treatment.started_at,
      create_case_study_treatment.ended_at,
      create_case_study_treatment.description,
      create_case_study_treatment.title,
      create_case_study_treatment.score
    )
  returning *
$$
language sql volatile;

create or replace function public.update_case_study_treatment(
  id          uuid,
  "external"  boolean,
  started_at  timestamptz,
  ended_at    timestamptz,
  title       text,
  description text = null,
  score       integer = null
) returns public.case_study_treatment as
$$
  update public.case_study_treatment set
    "external"=update_case_study_treatment."external",
    started_at=update_case_study_treatment.started_at,
    ended_at=update_case_study_treatment.ended_at,
    title=update_case_study_treatment.title,
    description=update_case_study_treatment.description,
    score=update_case_study_treatment.score,
    updated_at=now()
  where id = update_case_study_treatment.id
  returning *
$$
language sql volatile;

create or replace function public.delete_case_study_treatment(
  id uuid
) returns public.case_study_treatment as
$$
  delete from public.case_study_treatment
  where id = delete_case_study_treatment.id
  returning *
$$
language sql volatile;

----

create table public.case_study_treatment_file (
  id uuid primary key default uuid_generate_v4(),

  case_study_treatment_id uuid not null references public.case_study_treatment(id) on delete cascade,
  file_id                 uuid not null references public.file(id) on delete cascade,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_treatment_file to viewer;

create or replace function public.create_case_study_treatment_file(
  case_study_treatment_id uuid,
  file_name               text,
  file_data               bytea
) returns public.case_study_treatment_file as
$$
  with created_file as (
    insert into public.file (name, data)
      values (create_case_study_treatment_file.file_name, create_case_study_treatment_file.file_data)
    returning *
  )
  insert into public.case_study_treatment_file (case_study_treatment_id, file_id)
    select create_case_study_treatment_file.case_study_treatment_id, id from created_file
  returning *
$$
language sql volatile;

create or replace function public.delete_case_study_treatment_file(
  id uuid
) returns public.case_study_treatment_file as
$$
  with deleted as (
    delete from public.case_study_treatment_file
    where id = delete_case_study_treatment_file.id
    returning *
  )
  delete from public.file
    using deleted
  where deleted.file_id = file.id
  returning deleted.*
$$
language sql volatile;

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

  description text not null check(length(description) >= 3),

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_conclusion to viewer;

create or replace function public.create_case_study_conclusion(
  case_study_id uuid,
  "type"        public.case_study_conclusion_type,
  description   text
) returns public.case_study_conclusion as
$$
  insert into public.case_study_conclusion (case_study_id, "type", description)
    values (create_case_study_conclusion.case_study_id, create_case_study_conclusion."type", create_case_study_conclusion.description)
  returning *
$$
language sql stable;

create or replace function public.update_case_study_conclusion(
  id          uuid,
  "type"      public.case_study_conclusion_type,
  description text
) returns public.case_study_conclusion as
$$
  update public.case_study_conclusion set
    "type"=update_case_study_conclusion."type",
    description=update_case_study_conclusion.description,
    updated_at=now()
  where id = update_case_study_conclusion.id
  returning *
$$
language sql stable;

create or replace function public.delete_case_study_conclusion(
  id uuid
) returns public.case_study_conclusion as
$$
  delete from public.case_study_conclusion
  where id = delete_case_study_conclusion.id
  returning *
$$
language sql stable;

----

create table public.case_study_conclusion_file (
  id uuid primary key default uuid_generate_v4(),

  case_study_conclusion_id uuid not null references public.case_study_conclusion(id) on delete cascade,
  file_id                  uuid not null references public.file(id) on delete cascade,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_study_conclusion_file to viewer;

create or replace function public.create_case_study_conclusion_file(
  case_study_conclusion_id uuid,
  file_name                text,
  file_data                bytea
) returns public.case_study_conclusion_file as
$$
  with created_file as (
    insert into public.file (name, data)
      values (create_case_study_conclusion_file.file_name, create_case_study_conclusion_file.file_data)
    returning *
  )
  insert into public.case_study_conclusion_file (case_study_conclusion_id, file_id)
    select create_case_study_conclusion_file.case_study_conclusion_id, id from created_file
  returning *
$$
language sql volatile;

create or replace function public.delete_case_study_conclusion_file(
  id uuid
) returns public.case_study_conclusion_file as
$$
  with deleted as (
    delete from public.case_study_conclusion_file
    where id = delete_case_study_conclusion_file.id
    returning *
  )
  delete from public.file
    using deleted
  where deleted.file_id = file.id
  returning deleted.*
$$
language sql volatile;
