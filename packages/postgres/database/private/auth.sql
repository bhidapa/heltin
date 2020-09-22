create or replace function public.authenticate(
  email    text,
  password text
) returns public.user as
$$
declare
  authenticated_user public.user;
begin
  select
    public_user into authenticated_user
  from public.user as public_user
    inner join private.user as private_user on private_user.id = public_user.id
  where public_user.email = authenticate.email
  and private_user.password = crypt(authenticate.password, private_user.password);

  if authenticated_user is null then
    raise exception 'Wrong email or password.';
  end if;

  return authenticated_user;
end;
$$
language plpgsql volatile strict
security definer;

comment on function public.authenticate is E'@notNull\nAuthenticates a `User`.';

----

create or replace function private.register(
  email    text,
  password text,
  id       uuid = null -- optional argument if you want a custom user id
) returns public.user as
$$
declare
  registered_user public.user;
begin
  if session_user = 'anonymous'
  or (session_user = 'viewer'
    and not exists (select from public.viewer() where public.user_is_admin(viewer)))
  then
    raise exception 'Unauthorized!';
  end if;

  with new_private_user as (
    insert into private.user as u (id, password)
      values (coalesce(register.id, uuid_generate_v4()), crypt(register.password, gen_salt('bf')))
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
language plpgsql volatile
security definer;

comment on function private.register is 'Creates a new `User`.';
