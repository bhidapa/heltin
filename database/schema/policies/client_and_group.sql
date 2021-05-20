---- client ----

---- select

create policy select_client_is_admin on public.client
  as permissive
  for select
  using (
    public.user_is_admin(public.viewer())
  );

create policy select_client_is_created_by on public.client
  as permissive
  for select
  using (
    client.created_by = public.viewer_user_id()
  );

create policy select_client_is_assistant_and_not_discrete on public.client
  as permissive
  for select
  using (
    public.user_is_assistant(public.viewer())
    and not client.discrete
  );

create policy select_client_is_assigned_mental_health_professional on public.client
  as permissive
  for select
  using (
    exists(select from public.client_assigned_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = client_assigned_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where client_id = client.id)
  );

create policy select_client_has_case_study_mental_health_professional on public.client
  as permissive
  for select
  using (
    exists(select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
        inner join public.case_study
        on case_study.id = case_study_mental_health_professional.case_study_id
      where case_study.client_id = client.id)
  );

---- insert

create policy insert_client_is_admin on public.client
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_client_is_assistant on public.client
  as permissive
  for insert
  with check (
    public.user_is_assistant(public.viewer())
  );

create policy insert_client_is_professional on public.client
  as permissive
  for insert
  with check (
    public.user_is_mental_health_professional(public.viewer())
  );

---- update

create policy update_client_is_admin on public.client
  as permissive
  for update
  using (
    public.user_is_admin(public.viewer())
  );

create policy update_client_is_assistant on public.client
  as permissive
  for update
  using (
    public.user_is_assistant(public.viewer())
  );

create policy update_client_is_created_by on public.client
  as permissive
  for update
  using (
    client.created_by = public.viewer_user_id()
  );

---- delete

create policy delete_client_is_admin on public.client
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

----

alter table public.client enable row level security;

---- client_assigned_mental_health_professional ----

---- select

create policy select_client_assigned_professional_always on public.client_assigned_mental_health_professional
  as permissive
  for select
  using (
    -- TODO-db-210425 having access to assigned mental health professionals exposes nothing, or does it?
    true
  );

---- insert

create policy insert_client_assigned_professional_is_admin on public.client_assigned_mental_health_professional
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_client_assigned_professional_is_client_created_by on public.client_assigned_mental_health_professional
  as permissive
  for insert
  with check (
    exists (select from public.client
      where client.id = client_assigned_mental_health_professional.client_id
      and client.created_by = public.viewer_user_id())
  );

create policy insert_client_assigned_professional_is_assistant on public.client_assigned_mental_health_professional
  as permissive
  for insert
  with check (
    public.user_is_assistant(public.viewer())
  );

---- delete

create policy delete_client_assigned_professional_is_admin on public.client_assigned_mental_health_professional
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_client_assigned_professional_is_client_created_by on public.client_assigned_mental_health_professional
  as permissive
  for delete
  using (
    exists (select from public.client
      where client.id = client_assigned_mental_health_professional.client_id
      and client.created_by = public.viewer_user_id())
  );

create policy delete_client_assigned_professional_is_assistant on public.client_assigned_mental_health_professional
  as permissive
  for delete
  using (
    public.user_is_assistant(public.viewer())
  );

alter table public.client_assigned_mental_health_professional enable row level security;
