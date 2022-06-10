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

create function public.viewer_user_id()
returns uuid as $$
begin
  return nullif(current_setting('session.user_id', true), '')::uuid;
end;
$$ language plpgsql stable
cost 100000; -- so that the planner calls the function as little as possible

create function public.viewer()
returns public.user as $$
declare
  vwr public.user;
begin
  select * into vwr from public.user where id = public.viewer_user_id();
  return vwr;
end;
$$ language plpgsql stable
cost 100000; -- so that the planner calls the function as little as possible

comment on function public.viewer is 'Currently authenticated `User`.';

----

create function public.create_user(
  email    text,
  password text,
  admin    boolean,
  enabled  boolean,
  id       uuid = null -- optional argument if you want a custom user id
) returns public.user as
$$
declare
  created_user public.user;
begin
  if create_user.admin
  and not public.user_is_admin(public.viewer())
  then
    raise exception 'Only admins can manage admins';
  end if;

  if trim(create_user.password) = ''
  then
    raise exception 'Password cannot be empty';
  end if;

  with new_private_user as (
    insert into private.user as u (id, password, admin, disabled)
      values (coalesce(create_user.id, uuid_generate_v4()), crypt(create_user.password, gen_salt('bf')), admin, (not create_user.enabled))
    returning u.id
  )
  insert into public.user as u (id, email)
    values ((select new_private_user.id from new_private_user), create_user.email)
  returning u.* into created_user;

  return created_user;

  -- catch unique violation and nicely report error
  exception when unique_violation then
    raise exception 'User already exists';
end;
$$
language plpgsql volatile;
comment on function public.create_user is 'Creates a new `User` which can log in.';

create function public.update_user(
  id       uuid,
  email    text,
  enabled  boolean,
  admin    boolean,
  password text = null
) returns public.user as
$$
declare
  updated_user public.user;
begin
  if (select update_user.admin is distinct from "user".admin
    from private.user
    where "user".id = update_user.id)
  then
    if not public.user_is_admin(public.viewer())
    then
      raise exception 'Only admins can manage admins';
    end if;

    update private.user
    set admin=update_user.admin
    where "user".id = update_user.id;
  end if;

  if update_user.password is not null
  then
    if trim(update_user.password) = ''
    then
      raise exception 'New password cannot be empty';
    end if;

    update private.user
    set "password"=crypt(update_user.password, gen_salt('bf'))
    where "user".id = update_user.id;
  end if;

  update private.user
  set disabled=(not update_user.enabled)
  where "user".id = update_user.id;

  update public.user
  set email=update_user.email
  where "user".id = update_user.id
  returning * into updated_user;

  return updated_user;

  -- catch unique violation and nicely report error
  exception when unique_violation then
    raise exception 'User with that email already exists';
end;
$$
language plpgsql volatile;
comment on function public.update_user is 'Updates an existing `User` which can log in.';

create function public.delete_user(
  id uuid
) returns public.user as $$
  with private_user as (
    delete from private.user
    where "user".id = delete_user.id
    returning id
  )
  delete from public.user
  using private_user
  where "user".id = private_user.id
  returning "user".*
$$ language sql volatile;
comment on function public.delete_user is 'Deletes an existing `User`.';

----

create function public.user_enabled(
  "user" public.user
) returns boolean as $$
  select not disabled from private.user as private_user where private_user.id = "user".id
$$ language sql stable strict;
comment on function public.user_enabled is '@notNull';

create function public.user_is_admin(
  "user" public.user
) returns boolean as
$$
  select admin from private.user as private_user where private_user.id = "user".id
$$
language sql stable strict
cost 100000; -- used in RLS, have the planner call the function as little as possible

comment on function public.user_is_admin is '@notNull';

----

create function public.user_can_insert_user(
  "user" public.user
) returns boolean as $$
  select public.user_is_admin("user")
$$ language sql stable strict;
comment on function public.user_can_insert_user is '@notNull';

create function public.user_can_viewer_update(
  "user" public.user
) returns boolean as $$
  select public.user_is_admin(public.viewer())
    or "user".id = public.viewer_user_id()
$$ language sql stable strict;
comment on function public.user_can_viewer_update is '@notNull';

create function public.user_can_viewer_delete(
  "user" public.user
) returns boolean as $$
  select public.user_is_admin(public.viewer())
$$ language sql stable strict;
comment on function public.user_can_viewer_delete is '@notNull';
