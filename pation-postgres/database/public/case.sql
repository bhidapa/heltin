create table public.anamnesis (
  id uuid primary key default uuid_generate_v4(),

  client_id uuid not null references public.client(id) on delete cascade,

  description text,

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

----

create table public.session (
  id uuid primary key default uuid_generate_v4(),

  anamnesis_id uuid not null references public.anamnesis(id) on delete cascade,

  started_at timestamptz not null,
  ended_at   timestamptz not null,

  description text,

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

-- presence of conclusion locks all entries between the anamnesis and the conclusion
create table public.conclusion (
  id uuid primary key default uuid_generate_v4(),

  anamnesis_id uuid not null references public.anamnesis(id) on delete cascade,

  description text,

  -- todo: add more columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);
