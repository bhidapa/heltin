---- client ----

---- select

create policy select_client_is_admin on public.client
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_client_is_created_by on public.client
  as permissive
  for select
  using (
    client.created_by = (select public.viewer_user_id())
  );

create policy select_client_is_assistant_and_not_discrete on public.client
  as permissive
  for select
  using (
    (select public.user_is_assistant(public.viewer()))
    and not client.discrete
  );

create policy select_client_is_assigned_therapist on public.client
  as permissive
  for select
  using (
    exists(select from public.client_assigned_therapist
        inner join public.therapist
        on therapist.id = client_assigned_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where client_id = client.id)
  );

create policy select_client_has_case_study_with_therapist_assigned on public.client
  as permissive
  for select
  using (
    exists(select from public.case_study_therapist
        inner join public.therapist
        on therapist.id = case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
        inner join public.case_study
        on case_study.id = case_study_therapist.case_study_id
      where case_study.client_id = client.id)
  );

---- insert

create policy insert_client_can_viewer_insert on public.client
  as permissive
  for insert
  with check (
    public.user_can_insert_client(public.viewer())
  );

---- update

create policy update_client_can_viewer_update on public.client
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    public.client_can_viewer_update(client)
  );

---- delete

create policy delete_client_can_viewer_delete on public.client
  as permissive
  for delete
  using (
    public.client_can_viewer_delete(client)
  );

----

alter table public.client enable row level security;

---- client_assigned_therapist ----

---- select

create policy select_client_assigned_therapist_always on public.client_assigned_therapist
  as permissive
  for select
  using (
    -- TODO: having access to assigned mental health therapists exposes nothing, or does it?
    true
  );

---- insert

create policy insert_client_assigned_therapist_is_admin on public.client_assigned_therapist
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_client_assigned_therapist_is_client_created_by on public.client_assigned_therapist
  as permissive
  for insert
  with check (
    exists (select from public.client
      where client.id = client_assigned_therapist.client_id
      and client.created_by = (select public.viewer_user_id()))
  );

create policy insert_client_assigned_therapist_is_assistant on public.client_assigned_therapist
  as permissive
  for insert
  with check (
    (select public.user_is_assistant(public.viewer()))
  );

---- delete

create policy delete_client_assigned_therapist_is_admin on public.client_assigned_therapist
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_client_assigned_therapist_is_client_created_by on public.client_assigned_therapist
  as permissive
  for delete
  using (
    exists (select from public.client
      where client.id = client_assigned_therapist.client_id
      and client.created_by = (select public.viewer_user_id()))
  );

create policy delete_client_assigned_therapist_is_assistant on public.client_assigned_therapist
  as permissive
  for delete
  using (
    (select public.user_is_assistant(public.viewer()))
  );

alter table public.client_assigned_therapist enable row level security;
