create table public.file(
  id uuid primary key default uuid_generate_v4(),

  name text not null check(length(name) > 3),
  data bytea not null,

  -- TODO-db-051121 for deleteion protection
  -- protected boolean not null default false

  created_by uuid not null references public.user(id) on delete restrict,
  created_at created_timestamptz not null
);

grant select, insert, delete on public.file to viewer;

create index file_created_by_idx on public.file (created_by);

----

create or replace function public.delete_file(
  id uuid
) returns public.file as
$$
  delete from public.file
  where id = delete_file.id
  returning *
$$
language sql volatile;
