create or replace function private.register(
  email    text,
  password text,
  id       uuid = NULL -- optional argument if you want a custom user id
) returns private.jwt_token as
$$
declare
  tokenduration interval := '7 days';
  new_user_id   uuid;
begin

  -- if not exists (select 1 from public.viewer() where public.user_is_admin(viewer)) then
  --   raise exception 'Unauthorized!';
  -- end if;

  -- create user
  with new_private_user as (
    insert into private.user as u (id, password)
      values (coalesce(register.id, uuid_generate_v4()), crypt(register.password, gen_salt('bf')))
    returning u.id
  )
  insert into public.user as u (id, email)
    values ((select new_private_user.id from new_private_user), register.email)
  returning u.id into new_user_id;

  -- make token
  return (
    'viewer',
    extract(epoch from (now() + tokenduration)),
    new_user_id
  )::private.jwt_token;

  -- catch unique violation and nicely report error
  exception when unique_violation then
    raise exception 'User already exists!';
end;
$$
language plpgsql volatile
security definer;

comment on function private.register is 'Creates a new `User`.';
