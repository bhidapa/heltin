---- user ----

-- anonymous user cannot see any user
create policy anonymous_user_select on public.user
  for select
  to anonymous
  using (false);

----

create policy viewer_user_select on public.user
  for select
  to viewer
  using (true);

create policy viewer_user_update on public.user
  for update
  to viewer
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    public.user_is_admin(public.viewer())
    or "user".id = public.viewer_user_id()
  );

create policy viewer_user_insert on public.user
  for insert
  to viewer
  with check (
    public.user_is_admin(public.viewer())
  );

create policy viewer_user_delete on public.user
  for delete
  to viewer
  using (
     -- viewer is admin
    public.user_is_admin(public.viewer())
    -- or himself
    or "user".id = public.viewer_user_id()
  );

alter table public.user enable row level security;

---- assistant ----

create policy select_assistant_anyone on public.assistant
  for select
  to viewer
  using (true);

create policy insert_assistant_only_admin on public.assistant
  for insert
  to viewer
  with check (
    public.user_is_admin(public.viewer())
  );

create policy update_assistant_is_admin on public.assistant
  for update
  to viewer
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    public.user_is_admin(public.viewer())
  );

create policy update_assistant_is_self on public.assistant
  for update
  to viewer
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    assistant.user_id = public.viewer_user_id()
  );

create policy delete_assistant_only_admin on public.assistant
  for delete
  to viewer
  using (
    public.user_is_admin(public.viewer())
  );

alter table public.assistant enable row level security;

---- therapist ----

create policy select_therapist_anyone on public.therapist
  for select
  to viewer
  using (true);

create policy insert_therapist_only_admin on public.therapist
  for insert
  to viewer
  with check (
    public.user_is_admin(public.viewer())
  );

create policy update_therapist_is_admin on public.therapist
  for update
  to viewer
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    public.user_is_admin(public.viewer())
  );

create policy update_therapist_is_self on public.therapist
  for update
  to viewer
  using (true) -- always allow row access, otherwise no row will be provided to "with check" and the operation will succeed without providing results
  with check (
    therapist.user_id = public.viewer_user_id()
  );

create policy delete_therapist_only_admin on public.therapist
  for delete
  to viewer
  using (
    public.user_is_admin(public.viewer())
  );

alter table public.therapist enable row level security;
