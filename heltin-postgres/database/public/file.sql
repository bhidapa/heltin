create table public.file(
  id uuid primary key default uuid_generate_v4(),

  name text not null check(length(name) > 3),
  data bytea not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.file to viewer;

create or replace function public.delete_file(
  id uuid
) returns public.file as
$$
  delete from public.file
  where id = delete_file.id
  returning *
$$
language sql volatile;
