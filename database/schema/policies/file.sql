---- file ----

---- select

create policy select_file_anyone on public.file
  for select
  using (true);
  -- TODO: improve

---- insert

create policy insert_file_anyone on public.file
  for insert
  with check (true);

---- delete

create policy delete_file_is_admin on public.file
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_file_not_protected on public.file
  as permissive
  for delete
  using (not file.protected);

----

alter table public.file enable row level security;
