create type private.jwt_token as (
  "role" text,    -- postgres role to be used when the user is authenticated
  exp    integer, -- expiry timestamp
  sub    uuid     -- holds the authenticated user `id`
);

----

-- don't expose user passwords to the public
create table private.user (
  id         uuid primary key default uuid_generate_v4(),
  "password" text not null,
  admin      boolean not null default false
);
