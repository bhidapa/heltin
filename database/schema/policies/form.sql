---- form_response ----

---- select

create policy select_form_response_is_admin on public.form_response
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_form_response_has_access_to_case_study on public.form_response
  as permissive
  for select
  using (
    exists (select from public.case_study
      where case_study.id = form_response.case_study_id)
  );

---- insert

create policy insert_form_response_case_study_not_concluded on public.form_response
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy insert_form_response_is_admin on public.form_response
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_form_response_is_primary_therapist on public.form_response
  as permissive
  for insert
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

---- delete

create policy delete_form_response_case_study_not_concluded on public.form_response
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy delete_form_response_is_admin on public.form_response
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_form_response_is_primary_therapist on public.form_response
  as permissive
  for delete
  using (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

----

alter table public.form_response enable row level security;

---- form_response_answer ----

---- select

create policy select_form_response_answer_is_admin on public.form_response_answer
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_form_response_answer_has_access_to_response on public.form_response_answer
  as permissive
  for select
  using (
    exists (select from public.form_response
      where form_response.id = form_response_answer.form_response_id)
  );

---- insert

create policy insert_form_response_answer_case_study_not_concluded on public.form_response_answer
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
        inner join public.form_response on form_response.id = form_response_answer.form_response_id
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy insert_form_response_answer_is_admin on public.form_response_answer
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_form_response_answer_is_primary_therapist on public.form_response_answer
  as permissive
  for insert
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
      inner join public.form_response on form_response.id = form_response_answer.form_response_id
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

---- update

create policy update_form_response_answer_case_study_not_concluded on public.form_response_answer
  as restrictive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    not exists(select from public.case_study_conclusion
        inner join public.form_response on form_response.id = form_response_answer.form_response_id
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy update_form_response_answer_is_admin on public.form_response_answer
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy update_form_response_answer_is_primary_therapist on public.form_response_answer
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
      inner join public.form_response on form_response.id = form_response_answer.form_response_id
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

---- delete

create policy delete_form_response_answer_case_study_not_concluded on public.form_response_answer
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
        inner join public.form_response on form_response.id = form_response_answer.form_response_id
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy delete_form_response_answer_is_admin on public.form_response_answer
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_form_response_answer_is_primary_therapist on public.form_response_answer
  as permissive
  for delete
  using (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
      inner join public.form_response on form_response.id = form_response_answer.form_response_id
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

----

alter table public.form_response_answer enable row level security;

---- form_response_file ----

---- select

create policy select_form_response_file_is_admin on public.form_response_file
  as permissive
  for select
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy select_form_response_file_has_access_to_response on public.form_response_file
  as permissive
  for select
  using (
    exists (select from public.form_response
      where form_response.id = form_response_file.form_response_id)
  );

---- insert

create policy insert_form_response_file_case_study_not_concluded on public.form_response_file
  as restrictive
  for insert
  with check (
    not exists(select from public.case_study_conclusion
        inner join public.form_response on form_response.id = form_response_file.form_response_id
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy insert_form_response_file_is_admin on public.form_response_file
  as permissive
  for insert
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy insert_form_response_file_is_primary_therapist on public.form_response_file
  as permissive
  for insert
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
      inner join public.form_response on form_response.id = form_response_file.form_response_id
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

---- update

create policy update_form_response_file_case_study_not_concluded on public.form_response_file
  as restrictive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    not exists(select from public.case_study_conclusion
        inner join public.form_response on form_response.id = form_response_file.form_response_id
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy update_form_response_file_is_admin on public.form_response_file
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select public.user_is_admin(public.viewer()))
  );

create policy update_form_response_file_is_primary_therapist on public.form_response_file
  as permissive
  for update
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
      inner join public.form_response on form_response.id = form_response_file.form_response_id
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

---- delete

create policy delete_form_response_file_case_study_not_concluded on public.form_response_file
  as restrictive
  for delete
  using (
    not exists(select from public.case_study_conclusion
        inner join public.form_response on form_response.id = form_response_file.form_response_id
      where case_study_conclusion.case_study_id = form_response.case_study_id)
  );

create policy delete_form_response_file_is_admin on public.form_response_file
  as permissive
  for delete
  using (
    (select public.user_is_admin(public.viewer()))
  );

create policy delete_form_response_file_is_primary_therapist on public.form_response_file
  as permissive
  for delete
  using (
    (select case_study_therapist."primary" from public.case_study_therapist
      inner join public.therapist
      on therapist.id = case_study_therapist.therapist_id
      and therapist.user_id = public.viewer_user_id()
      inner join public.form_response on form_response.id = form_response_file.form_response_id
    where form_response.case_study_id = case_study_therapist.case_study_id)
  );

----

alter table public.form_response_file enable row level security;
