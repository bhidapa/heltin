---- case_study ----

---- select

create policy select_case_study_is_admin on public.case_study
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_case_study_therapist_assigned on public.case_study
  as permissive
  for select
  using (
    exists (select from public.case_study_therapist
        inner join public.therapist
        on therapist.id = case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where case_study.id = case_study_therapist.case_study_id)
  );

---- insert

create policy insert_case_study_is_admin on public.case_study
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_case_study_has_access_to_client on public.case_study
  as permissive
  for insert
  with check (
    exists(select from public.client where id = case_study.client_id)
  );

---- update

create policy update_case_study_not_concluded on public.case_study
  as restrictive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study.id)
  );

create policy update_case_study_is_admin on public.case_study
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy update_case_study_is_primary_therapist on public.case_study
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    exists (select from public.case_study_therapist
        inner join public.therapist
        on therapist.id = case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where case_study.id = case_study_therapist.case_study_id
      and case_study_therapist."primary")
  );

---- delete

create policy delete_case_study_not_concluded on public.case_study
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study.id)
  );

create policy delete_case_study_is_admin on public.case_study
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_case_study_is_primary_therapist on public.case_study
  as permissive
  for delete
  using (
    exists (select from public.case_study_therapist
        inner join public.therapist
        on therapist.id = case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where case_study.id = case_study_therapist.case_study_id
      and case_study_therapist."primary")
  );

----

alter table public.case_study enable row level security;

---- case_study_therapist ----

---- select

create policy select_case_study_therapist_always on public.case_study_therapist
  as permissive
  for select
  using (
    -- TODO: having access to case study therapists exposes nothing, or does it?
    true
  );

---- insert

create policy insert_case_study_therapist_is_admin on public.case_study_therapist
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_case_study_therapist_is_primary_therapist on public.case_study_therapist
  as permissive
  for insert
  with check (
    exists (select from public.case_study_therapist as other_case_study_therapist
        inner join public.therapist
        on therapist.id = other_case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where other_case_study_therapist.case_study_id = case_study_therapist.case_study_id
      and other_case_study_therapist."primary")
  );

---- update

create policy update_case_study_therapist_is_admin on public.case_study_therapist
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy update_case_study_therapist_is_primary_therapist on public.case_study_therapist
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    exists (select from public.case_study_therapist as other_case_study_therapist
        inner join public.therapist
        on therapist.id = other_case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where other_case_study_therapist.case_study_id = case_study_therapist.case_study_id
      and other_case_study_therapist."primary")
  );

---- delete

create policy delete_case_study_therapist_is_admin on public.case_study_therapist
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_case_study_therapist_is_primary_therapist on public.case_study_therapist
  as permissive
  for delete
  using (
    exists (select from public.case_study_therapist as other_case_study_therapist
        inner join public.therapist
        on therapist.id = other_case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where other_case_study_therapist.case_study_id = case_study_therapist.case_study_id
      and other_case_study_therapist."primary")
  );

alter table public.case_study_therapist enable row level security;

---- case_study_treatment ----

---- select

create policy select_case_study_treatment_is_admin on public.case_study_treatment
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_case_study_treatment_has_access_to_case_study on public.case_study_treatment
  as permissive
  for select
  using (
    exists (select from public.case_study
      where case_study.id = case_study_treatment.case_study_id)
  );

---- insert

create policy insert_case_study_treatment_not_concluded on public.case_study_treatment
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study_treatment.case_study_id)
  );

create policy insert_case_study_treatment_is_admin on public.case_study_treatment
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_case_study_treatment_therapist_is_assigned on public.case_study_treatment
  as permissive
  for insert
  with check (
    exists(select from public.case_study_therapist
        inner join public.therapist
        on therapist.id = case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where case_study_treatment.case_study_id = case_study_therapist.case_study_id)
  );

---- update

create policy update_case_study_treatment_not_concluded on public.case_study_treatment
  as restrictive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study_treatment.case_study_id)
  );

create policy update_case_study_treatment_is_admin on public.case_study_treatment
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy update_case_study_treatment_is_created_by on public.case_study_treatment
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    case_study_treatment.created_by = (select public.viewer_user_id())
  );

---- delete

create policy delete_case_study_treatment_not_concluded on public.case_study_treatment
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = case_study_treatment.case_study_id)
  );

create policy delete_case_study_treatment_is_admin on public.case_study_treatment
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_case_study_treatment_is_created_by on public.case_study_treatment
  as permissive
  for delete
  using (
    case_study_treatment.created_by = (select public.viewer_user_id())
  );

----

alter table public.case_study_treatment enable row level security;

---- case_study_treatment_file ----

---- select

create policy select_case_study_treatment_file_is_admin on public.case_study_treatment_file
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_case_study_treatment_file_has_access_to_treatment on public.case_study_treatment_file
  as permissive
  for select
  using (
    exists (select from public.case_study_treatment
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

---- insert

create policy insert_case_study_treatment_file_not_concluded on public.case_study_treatment_file
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
        inner join public.case_study_treatment on case_study_treatment.case_study_id = case_study_conclusion.case_study_id
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

create policy insert_case_study_treatment_file_is_admin on public.case_study_treatment_file
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_case_study_treatment_file_treatment_created_by on public.case_study_treatment_file
  as permissive
  for insert
  with check (
    (select case_study_treatment.created_by = (select public.viewer_user_id()) from public.case_study_treatment
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

---- delete

create policy delete_case_study_treatment_file_not_concluded on public.case_study_treatment_file
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
        inner join public.case_study_treatment on case_study_treatment.case_study_id = case_study_conclusion.case_study_id
      where case_study_treatment.id = case_study_treatment_file.case_study_treatment_id)
  );

create policy delete_case_study_treatment_file_is_admin on public.case_study_treatment_file
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_case_study_treatment_file_is_created_by on public.case_study_treatment_file
  as permissive
  for delete
  using (
    (select created_by = (select public.viewer_user_id()) from public.file
      where file.id = case_study_treatment_file.file_id)
  );

alter table public.case_study_treatment_file enable row level security;

---- case_study_conclusion ----

---- select

create policy select_case_study_conclusion_is_admin on public.case_study_conclusion
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_case_study_conclusion_therapist_is_assigned on public.case_study_conclusion
  as permissive
  for select
  using (
    exists (select from public.case_study_therapist
        inner join public.therapist
        on therapist.id = case_study_therapist.therapist_id
        and therapist.user_id = (select public.viewer_user_id())
      where case_study_conclusion.case_study_id = case_study_therapist.case_study_id)
  );

---- insert

create policy insert_case_study_conclusion_is_admin on public.case_study_conclusion
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_case_study_conclusion_is_primary_therapist on public.case_study_conclusion
  as permissive
  for insert
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = (select public.viewer_user_id())
    where case_study_conclusion.case_study_id = case_study_therapist.case_study_id)
  );

---- update

create policy update_case_study_conclusion_is_admin on public.case_study_conclusion
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy update_case_study_conclusion_is_primary_therapist on public.case_study_conclusion
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = (select public.viewer_user_id())
    where case_study_conclusion.case_study_id = case_study_therapist.case_study_id)
  );

---- delete

create policy delete_case_study_conclusion_is_admin on public.case_study_conclusion
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_case_study_conclusion_is_primary_therapist on public.case_study_conclusion
  as permissive
  for delete
  using (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = (select public.viewer_user_id())
    where case_study_conclusion.case_study_id = case_study_therapist.case_study_id)
  );

----

alter table public.case_study_conclusion enable row level security;

---- case_study_conclusion_file ----

---- select

create policy select_case_study_conclusion_file_is_admin on public.case_study_conclusion_file
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_case_study_conclusion_file_has_access_to_conclusion on public.case_study_conclusion_file
  as permissive
  for select
  using (
    exists (select from public.case_study_conclusion
      where case_study_conclusion.id = case_study_conclusion_file.case_study_conclusion_id)
  );

---- insert

create policy insert_case_study_conclusion_file_is_admin on public.case_study_conclusion_file
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_case_study_conclusion_file_conclusion_is_primary_therapist on public.case_study_conclusion_file
  as permissive
  for insert
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = (select public.viewer_user_id())
      inner join public.case_study_conclusion on case_study_conclusion.id = case_study_conclusion_file.case_study_conclusion_id
    where case_study_conclusion.case_study_id = case_study_therapist.case_study_id)
  );

---- delete

create policy delete_case_study_conclusion_file_is_admin on public.case_study_conclusion_file
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_case_study_conclusion_file_is_primary_therapist on public.case_study_conclusion_file
  as permissive
  for delete
  using (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = (select public.viewer_user_id())
      inner join public.case_study_conclusion on case_study_conclusion.id = case_study_conclusion_file.case_study_conclusion_id
    where case_study_conclusion.case_study_id = case_study_therapist.case_study_id)
  );

alter table public.case_study_conclusion enable row level security;
