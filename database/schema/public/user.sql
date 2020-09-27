create table public.user (
  id uuid primary key references private.user(id) on delete cascade,

  email email_address unique not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on table public.user to viewer;

-- here we grant select to the anonymous user. we do so
-- that we can use the graphql query `{ viewer { id } }`
-- and its result `viewer: { 'someid' } OR viewer: null`
-- to indicate whether the user is logged in or not
-- without the grant the query would raise an exception.
-- take a look at: `policies/user.sql` to see how we
-- hide the table rows to prevent data leakage
grant select on table public.user to anonymous;

----

create or replace function public.register(
  email    text,
  password text,
  is_admin boolean = false,
  id       uuid = null -- optional argument if you want a custom user id
) returns public.user as
$$
declare
  registered_user public.user;
begin
  with new_private_user as (
    insert into private.user as u (id, password, admin)
      values (coalesce(register.id, uuid_generate_v4()), crypt(register.password, gen_salt('bf')), is_admin)
    returning u.id
  )
  insert into public.user as u (id, email)
    values ((select new_private_user.id from new_private_user), register.email)
  returning u.* into registered_user;

  return registered_user;

  -- catch unique violation and nicely report error
  exception when unique_violation then
    raise exception 'User already exists!';
end;
$$
language plpgsql volatile;

comment on function public.register is 'Creates a new `User` which can log in.';

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

  title         text,
  first_name    text not null,
  last_name     text not null,
  date_of_birth date not null,
  unique(first_name, last_name, date_of_birth),

  gender public.gender not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on table public.mental_health_professional to viewer;

----

create or replace function public.mental_health_professional_full_name(
  mental_health_professional public.mental_health_professional
) returns text as
$$
  select  
    coalesce(mental_health_professional.title || ' ', '') ||
    mental_health_professional.first_name || ' ' ||
    mental_health_professional.last_name
$$
language sql immutable;

comment on function public.mental_health_professional_full_name is '@notNull';

----

create or replace function public.create_mental_health_professional(
  "type"        public.mental_health_professional_type,
  email         email_address,
  first_name    text,
  last_name     text,
  date_of_birth date,
  gender        public.gender,
  title         text = null,
  user_id       uuid = null
) returns public.mental_health_professional as
$$
  insert into public.mental_health_professional (
    "type",
    email,
    title,
    first_name,
    last_name,
    date_of_birth,
    gender,
    user_id
  ) values (
    create_mental_health_professional."type",
    create_mental_health_professional.email,
    create_mental_health_professional.title,
    create_mental_health_professional.first_name,
    create_mental_health_professional.last_name,
    create_mental_health_professional.date_of_birth,
    create_mental_health_professional.gender,
    create_mental_health_professional.user_id
  )
  returning *
$$
language sql volatile;

----

create or replace function public.update_mental_health_professional(
  id            uuid,
  "type"        public.mental_health_professional_type,
  email         email_address,
  first_name    text,
  last_name     text,
  date_of_birth date,
  gender        public.gender,
  title         text = null,
  user_id       uuid = null
) returns public.mental_health_professional as
$$
  update public.mental_health_professional
    set
      "type"=update_mental_health_professional."type",
      email=update_mental_health_professional.email,
      title=update_mental_health_professional.title,
      first_name=update_mental_health_professional.first_name,
      last_name=update_mental_health_professional.last_name,
      date_of_birth=update_mental_health_professional.date_of_birth,
      gender=update_mental_health_professional.gender,
      user_id=update_mental_health_professional.user_id,
      updated_at=now()
  where id = update_mental_health_professional.id
  returning *
$$
language sql volatile;

----

create or replace function public.delete_mental_health_professional(
  id uuid
) returns public.mental_health_professional as
$$
  delete from public.mental_health_professional
  where id = delete_mental_health_professional.id
  returning *
$$
language sql volatile;
