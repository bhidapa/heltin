create table public.file(
  id uuid primary key default uuid_generate_v4(),

  name text not null check(length(name) > 3),
  hash text not null,

  protected boolean not null default false,

  created_by uuid not null references public.user(id) on delete restrict,
  created_at created_timestamptz not null
);

grant select, insert, delete on public.file to viewer;

create index file_created_by_idx on public.file (created_by);

----

create function public.file_link(
  file public.file
) returns text as $$
  -- matches the route specified in server/routes/routes.go
  select '/api/file/' || file.id::text
$$ language sql stable strict;
comment on function public.file_link is '@notNull';

create function public.get_file_after_upload(
  id uuid
) returns public.file as $$
  select * from public.file where file.id = get_file_after_upload.id
$$ language sql volatile strict;

comment on function public.get_file_after_upload is 'Intentionally a mutation even though the it changes nothing. Useful for patching the store after a successful upload.';
