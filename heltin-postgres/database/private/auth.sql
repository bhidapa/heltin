create type private.jwt_token as (
  "role" text,    -- postgres role to be used when the user is authenticated
  exp    integer, -- expiry timestamp
  sub    uuid     -- holds the authenticated user `id`
);
