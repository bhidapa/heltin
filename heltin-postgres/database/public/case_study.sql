create table public.case_study (
  id uuid primary key default uuid_generate_v4(),

  client_id uuid references public.client(id) on delete cascade,
  group_id  uuid references public.group(id) on delete cascade,
  check ((client_id is null) <> (group_id is null)), -- only one can be set. one must be set

  description text,

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

create table public.case_study_relation (
  case_study_id uuid references public.case_study(id) on delete restrict,
  related_case_study_id uuid references public.case_study(id) on delete restrict,

  description text, -- why is it related?

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

----

create table public.case_study_mental_health_professional (
  id uuid primary key default uuid_generate_v4(),

  case_study_id                 uuid not null references public.case_study(id),
  mental_health_professional_id uuid not null references public.mental_health_professional(id),
  unique(case_study_id, mental_health_professional_id),

  "primary" boolean not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

-- only one primary mental health professional
create unique index case_study_mental_health_professional_primary on public.case_study_mental_health_professional (case_study_id) where ("primary");

----

create table public.case_study_session (
  id uuid primary key default uuid_generate_v4(),

  case_study_id uuid not null references public.case_study(id) on delete cascade,

  started_at timestamptz not null,
  ended_at   timestamptz not null,

  description text,

  score integer check(score >= 1 and score <= 5),

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

----

create type public.conclusion_type as enum (
  'ZAVRSETAK_TRETMANA',
  'ODUSTAJANJE_OD_STRANE_KLIJENTA',
  'ODUSTAJANJE_OD_STRANE_RODITELJA',
  'PREPORUKA_ZA_DALJE'
);

-- presence of conclusion locks all entries referencing the case study
create table public.case_study_conclusion (
  id uuid primary key default uuid_generate_v4(),

  case_study_id uuid not null references public.case_study(id) on delete cascade,

  description text,

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);
