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
