-- here we grant select to the anonymous user. we do so
-- that we can use the graphql query `{ viewer { id } }`
-- and its result `viewer: { 'someid'} OR viewer: null`
-- to indicate whether the user is logged in or not
-- without the grant the query would raise an exception.
-- take a look at: `policies/user.sql` to see how we
-- hide the table rows to prevent data leakage
grant select on table public.user to anonymous;

----

create or replace function public.register(
  email    text,
  password text
) returns private.jwt_token as
$$
declare
  tokenduration interval := '7 days';
  new_user_id   uuid;
begin
  if not exists (select 1 from public.viewer() where public.user_is_admin(viewer)) then
    raise exception 'Unauthorized!';
  end if;

  -- create user
  with new_private_user as (
    insert into private.user (password)
      values (crypt(register.password, gen_salt('bf')))
    returning id
  )
  insert into public.user (id, email)
    values ((select id from new_private_user), register.email)
  returning id into new_user_id;

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

comment on function public.register is 'Creates a new `User`.';

----

create or replace function public.authenticate(
  email    text,
  password text
) returns private.jwt_token as
$$
declare
  tokenduration interval := '7 days';
  token         private.jwt_token;
begin
  token := (
    select
      (
        'viewer',
        extract(epoch from (now() + tokenduration)),
        public_user.id
      )
    from public.user as public_user
      inner join private.user as private_user on (private_user.id = public_user.id)
    where (
      public_user.email = authenticate.email
    ) and (
      private_user.password = crypt(authenticate.password, private_user.password)
    )
  );

  if token is null then
    raise exception 'Wrong email or password.';
  end if;

  return token;
end;
$$
language plpgsql volatile strict
security definer;

comment on function public.authenticate is 'Authenticates a `User`.';
