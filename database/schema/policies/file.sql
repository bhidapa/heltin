---- file ----

---- select

create policy select_file_anyone on public.file
  for select
  using (true);
  -- TODO-db-051121 improve

---- insert

create policy insert_file_anyone on public.file
  for insert
  with check (true);

---- update

create policy update_file_disabled on public.file
  for update
  using (false);

---- delete

create policy delete_file_is_admin on public.file
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_file_disabled on public.file
  as permissive
  for delete
  using (false);
  -- TODO-db-051121 use "protected" field on file

----

alter table public.file enable row level security;
