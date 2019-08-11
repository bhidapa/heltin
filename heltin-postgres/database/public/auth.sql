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
  email      text,
  first_name text,
  last_name  text,
  password   text
) returns private.jwt_token as
$$
declare
  tokenduration   interval := '7 days';
  new_user_id uuid;
begin
  -- create user
  with new_private_user as (
    insert into private.user (password)
      values (crypt(register.password, gen_salt('bf')))
    returning id
  )
  insert into public.user (id, email, first_name, last_name)
    values ((select id from new_private_user), register.email, register.first_name, register.last_name)
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

comment on function public.register is 'Creates a new `user`.';

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
        new_public_user.id
      )
    from public.user as new_public_user
      inner join private.user as private_user on (private_user.id = new_public_user.id)
    where (
      new_public_user.email = authenticate.email
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

----

create or replace function public.viewer() returns public.user as
$$
  select * from public.user where (id::text = current_setting('jwt.claims.sub', true))
$$
language sql stable
cost 10000; -- so that the planner calls the function as little as possible

comment on function public.viewer is 'Currently authenticated `user`.';
