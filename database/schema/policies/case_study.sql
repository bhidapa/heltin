---- case_study ----

---- select

create policy select_case_study_is_admin_policy on public.case_study
  as permissive
  for select
  using (
    public.user_is_admin(public.viewer())
  );

create policy select_case_study_has_professional_policy on public.case_study
  as permissive
  for select
  using (
    exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_study.id = case_study_mental_health_professional.case_study_id)
  );

---- insert

create policy insert_case_study_is_admin_policy on public.case_study
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_case_study_professional_has_access_to_client_policy on public.case_study
  as permissive
  for insert
  with check (
    public.user_is_mental_health_professional(public.viewer())
    and exists(select from public.client where id = case_study.client_id)
  );

---- update

create policy update_case_study_not_concluded_policy on public.case_study
  as restrictive
  for update
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study.id)
  );

create policy update_case_study_is_admin_policy on public.case_study
  as permissive
  for update
  using (
    public.user_is_admin(public.viewer())
  );

create policy update_case_study_is_created_by_policy on public.case_study
  as permissive
  for update
  using (
    case_study.created_by = public.viewer_user_id()
  );

create policy update_case_study_is_primary_professional_policy on public.case_study
  as permissive
  for update
  using (
    exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_study.id = case_study_mental_health_professional.case_study_id
      and case_study_mental_health_professional."primary")
  );

---- delete

create policy delete_case_study_not_concluded_policy on public.case_study
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study.id)
  );

create policy delete_case_study_is_admin_policy on public.case_study
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_case_study_is_created_by_policy on public.case_study
  as permissive
  for delete
  using (
    case_study.created_by = public.viewer_user_id()
  );

create policy delete_case_study_is_primary_professional_policy on public.case_study
  as permissive
  for delete
  using (
    exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_study.id = case_study_mental_health_professional.case_study_id
      and case_study_mental_health_professional."primary")
  );

----

alter table public.case_study enable row level security;

---- case_study_mental_health_professional ----

---- select

create policy select_case_study_professional_always_policy on public.case_study_mental_health_professional
  as permissive
  for select
  using (
    -- TODO-db-210425 having access to case study mental health professionals exposes nothing, or does it?
    true
  );

---- insert

create policy insert_case_study_professional_is_admin_policy on public.case_study_mental_health_professional
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_case_study_professional_is_case_study_created_by_policy on public.case_study_mental_health_professional
  as permissive
  for insert
  with check (
    exists (select from public.case_study
      where case_study.id = case_study_mental_health_professional.case_study_id
      and case_study.created_by = public.viewer_user_id())
  );

create policy insert_case_study_professional_is_primary_professional_policy on public.case_study_mental_health_professional
  as permissive
  for insert
  with check (
    exists (select from public.case_study_mental_health_professional as other_case_study_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = other_case_study_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where other_case_study_professional.case_study_id = case_study_mental_health_professional.case_study_id
      and other_case_study_professional."primary")
  );

---- delete

create policy delete_case_study_professional_is_admin_policy on public.case_study_mental_health_professional
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_case_study_professional_is_case_study_created_by_policy on public.case_study_mental_health_professional
  as permissive
  for delete
  using (
    exists (select from public.case_study
      where case_study.id = case_study_mental_health_professional.case_study_id
      and case_study.created_by = public.viewer_user_id())
  );

create policy delete_case_study_professional_is_primary_professional_policy on public.case_study_mental_health_professional
  as permissive
  for delete
  using (
    exists (select from public.case_study_mental_health_professional as other_case_study_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = other_case_study_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where other_case_study_professional.case_study_id = case_study_mental_health_professional.case_study_id
      and other_case_study_professional."primary")
  );

alter table public.case_study_mental_health_professional enable row level security;

---- case_study_treatment ----

---- select

create policy select_case_study_treatment_is_admin_policy on public.case_study_treatment
  as permissive
  for select
  using (
    public.user_is_admin(public.viewer())
  );

create policy select_case_study_treatment_has_access_to_case_study_policy on public.case_study_treatment
  as permissive
  for select
  using (
    exists (select from public.case_study
      where case_study.id = case_study_treatment.case_study_id)
  );

---- insert

create policy insert_case_study_treatment_not_concluded_policy on public.case_study_treatment
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study_treatment.case_study_id)
  );

create policy insert_case_study_treatment_is_admin_policy on public.case_study_treatment
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_case_study_treatment_professional_is_added_policy on public.case_study_treatment
  as permissive
  for insert
  with check (
    public.user_is_mental_health_professional(public.viewer())
    and exists (select from public.case_study_mental_health_professional
        inner join public.mental_health_professional
        on mental_health_professional.id = case_study_mental_health_professional.mental_health_professional_id
        and mental_health_professional.user_id = public.viewer_user_id()
      where case_study_treatment.case_study_id = case_study_mental_health_professional.case_study_id)
  );

---- update

create policy update_case_study_treatment_not_concluded_policy on public.case_study_treatment
  as restrictive
  for update
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study_treatment.case_study_id)
  );

create policy update_case_study_treatment_is_admin_policy on public.case_study_treatment
  as permissive
  for update
  using (
    public.user_is_admin(public.viewer())
  );

create policy update_case_study_treatment_is_created_by_policy on public.case_study_treatment
  as permissive
  for update
  using (
    case_study_treatment.created_by = public.viewer_user_id()
  );

---- delete

create policy delete_case_study_treatment_not_concluded_policy on public.case_study_treatment
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study_treatment.case_study_id)
  );

create policy delete_case_study_treatment_is_admin_policy on public.case_study_treatment
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_case_study_treatment_is_created_by_policy on public.case_study_treatment
  as permissive
  for delete
  using (
    case_study_treatment.created_by = public.viewer_user_id()
  );

----

alter table public.case_study_treatment enable row level security;

---- case_study_treatment_file ----

---- select

create policy select_case_study_treatment_file_is_admin_policy on public.case_study_treatment_file
  as permissive
  for select
  using (
    public.user_is_admin(public.viewer())
  );

create policy select_case_study_treatment_file_has_access_to_case_study_treatment_policy on public.case_study_treatment_file
  as permissive
  for select
  using (
    exists (select from public.case_study_treatment
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

---- insert

create policy insert_case_study_treatment_file_not_concluded_policy on public.case_study_treatment_file
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
        inner join public.case_study_treatment on case_study_treatment.case_study_id = case_study_conclusion.case_study_id
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

create policy insert_case_study_treatment_file_is_admin_policy on public.case_study_treatment_file
  as permissive
  for insert
  with check (
    public.user_is_admin(public.viewer())
  );

create policy insert_case_study_treatment_file_treatment_created_by_policy on public.case_study_treatment_file
  as permissive
  for insert
  with check (
    (select case_study_treatment.created_by = public.viewer_user_id() from public.case_study_treatment
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

---- delete

create policy delete_case_study_treatment_file_not_concluded_policy on public.case_study_treatment_file
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
        inner join public.case_study_treatment on case_study_treatment.case_study_id = case_study_conclusion.case_study_id
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

create policy delete_case_study_treatment_file_is_admin_policy on public.case_study_treatment_file
  as permissive
  for delete
  using (
    public.user_is_admin(public.viewer())
  );

create policy delete_case_study_treatment_file_is_created_by_policy on public.case_study_treatment_file
  as permissive
  for delete
  using (
    (select created_by = public.viewer_user_id() from public.file
      where file.id = case_study_treatment_file.file_id)
  );
  );
