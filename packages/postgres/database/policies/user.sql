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
  using (true) -- can see all users
  with check (
    -- can update only itself
    "user".id = public.viewer_user_id()
  );

-- other policies are not required since functions
-- which create users are behind a `security definer`

----

alter table public.user enable row level security;
