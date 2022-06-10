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

create function public.register(
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

create function public.user_is_admin(
  "user" public.user
) returns boolean as
$$
  select admin from private.user as private_user where private_user.id = "user".id
$$
language sql stable strict
cost 100000; -- used in RLS, have the planner call the function as little as possible

comment on function public.user_is_admin is '@notNull';
