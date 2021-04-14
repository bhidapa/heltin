-- don't expose user passwords to the public
create table private.user (
  id         uuid primary key default uuid_generate_v4(),
  "password" text not null,
  admin      boolean not null default false,
  disabled   boolean not null default false
);

grant all on private.user to viewer;
