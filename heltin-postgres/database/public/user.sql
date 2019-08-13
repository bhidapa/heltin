create table public.user (
  id uuid primary key references private.user(id) on delete cascade,

  email email_address unique not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on table public.user to viewer;

----

create or replace function public.user_is_admin(
  "user" public.user
) returns boolean as
$$
  select admin from private.user as private_user where private_user.id = "user".id
$$
language sql stable;

comment on function public.user_is_admin is '@notNull';

----

create table public.assistant (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid unique references public.user(id) on delete set null,

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

----

create type public.mental_health_professional_type as enum (
  'PSYCHOTHERAPIST',
  'PSYCHOLOGIST',
  'PSYCHIATRIST',
  'NEUROLOGIST',
  'PEDIATRIST',
  'SOCIAL_WORKER',
  'PEDAGOGUE',
  'DEFECTOLOGIST',
  'PHONETICIAN',
  'OTHER'
);

create table public.mental_health_professional (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid unique references public.user(id) on delete set null,

  "type" public.mental_health_professional_type not null,

  email email_address unique not null,

  first_name    text not null,
  last_name     text not null,
  date_of_birth date not null,
  unique(first_name, last_name, date_of_birth),

  gender public.gender not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant select, update on table public.mental_health_professional to viewer;
