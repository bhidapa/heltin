-- anonymous user cannot see any user
create policy anonymous_user_select_policy on public.user
  for select
  to anonymous
  using (false);

----

-- authenticated user can see all users
create policy viewer_user_select_policy on public.user
  for select
  to viewer
  using (true);

-- authenticated user can see all users
create policy viewer_user_update_policy on public.user
  for update
  to viewer
  using (true)
  with check (
    -- viewer is admin
    public.user_is_admin(public.viewer())
    -- or himself
    or "user".id = public.viewer_user_id()
  );

-- authenticated admin users can add new users
create policy viewer_user_insert_policy on public.user
  for insert
  to viewer
  with check (
    -- viewer is admin
    public.user_is_admin(public.viewer())
  );

-- authenticated admin users can add new users
create policy viewer_user_delete_policy on public.user
  for delete
  to viewer
  using (
     -- viewer is admin
    public.user_is_admin(public.viewer())
    -- or himself
    or "user".id = public.viewer_user_id()
  );

----

alter table public.user enable row level security;
