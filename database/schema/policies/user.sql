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
  using (true)
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
  using (
    public.user_is_admin(public.viewer())
  );

create policy update_assistant_is_self on public.assistant
  for update
  to viewer
  using (
    assistant.user_id = public.viewer_user_id()
  )
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

---- mental_health_professional ----

create policy select_mental_health_professional_anyone on public.mental_health_professional
  for select
  to viewer
  using (true);

create policy insert_mental_health_professional_only_admin on public.mental_health_professional
  for insert
  to viewer
  with check (
    public.user_is_admin(public.viewer())
  );

create policy update_mental_health_professional_is_admin on public.mental_health_professional
  for update
  to viewer
  using (
    public.user_is_admin(public.viewer())
  );

create policy update_mental_health_professional_is_self on public.mental_health_professional
  for update
  to viewer
  using (
    mental_health_professional.user_id = public.viewer_user_id()
  )
  with check (
    mental_health_professional.user_id = public.viewer_user_id()
  );

create policy delete_mental_health_professional_only_admin on public.mental_health_professional
  for delete
  to viewer
  using (
    public.user_is_admin(public.viewer())
  );

alter table public.mental_health_professional enable row level security;
