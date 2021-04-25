---- case_history ----

---- select

create policy select_case_history_is_admin_policy on public.case_history
  as permissive
  for select
  using (
    public.user_is_admin(public.viewer())
  );

create policy select_case_history_has_access_to_case_study_policy on public.case_history
  as permissive
  for select
  using (
    exists (select from public.case_study
      where case_study.id = case_history.case_study_id)
  );

---- insert

create policy insert_case_history_not_concluded_policy on public.case_history
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_history.case_study_id)
  );

create policy insert_case_history_is_admin_policy on public.case_history
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_case_history_professional_is_primary_professional_policy on public.case_history
  as permissive
  for insert
  with check (
    public.user_is_mental_health_professional(public.viewer())
    and exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_history.case_study_id = case_study_mental_health_professional.case_study_id
      and case_study_mental_health_professional."primary")
  );

---- update

create policy update_case_history_not_concluded_policy on public.case_history
  as restrictive
  for update
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_history.case_study_id)
  );

create policy update_case_history_is_admin_policy on public.case_history
  as permissive
  for update
  using (
    public.user_is_admin(public.viewer())
  );

create policy update_case_history_is_created_by_policy on public.case_history
  as permissive
  for update
  using (
    case_history.created_by = public.viewer_user_id()
  );

create policy update_case_history_is_primary_professional_policy on public.case_history
  as permissive
  for update
  using (
    exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_history.case_study_id = case_study_mental_health_professional.case_study_id
      and case_study_mental_health_professional."primary")
  );

---- delete

create policy delete_case_history_not_concluded_policy on public.case_history
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_history.case_study_id)
  );

create policy delete_case_history_is_admin_policy on public.case_history
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_case_history_is_created_by_policy on public.case_history
  as permissive
  for delete
  using (
    case_history.created_by = public.viewer_user_id()
  );

create policy delete_case_history_is_primary_professional_policy on public.case_history
  as permissive
  for delete
  using (
    exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_history.case_study_id = case_study_mental_health_professional.case_study_id
      and case_study_mental_health_professional."primary")
  );

----

alter table public.case_history enable row level security;

---- case_history_file ----

---- select

create policy select_case_history_file_is_admin_policy on public.case_history_file
  as permissive
  for select
  using (
    public.user_is_admin(public.viewer())
  );

create policy select_case_history_file_has_access_to_case_history_policy on public.case_history_file
  as permissive
  for select
  using (
    exists (select from public.case_history
      where case_history.id = case_history_file.case_history_id)
  );

-- TODO-db-210425 create policies for rest of case history file actions
