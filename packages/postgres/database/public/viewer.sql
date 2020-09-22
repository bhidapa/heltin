create or replace function public.viewer() returns public.user as
$$select * from public.user where (id::text = current_setting('session.user_id', true))$$
language sql stable
cost 10000; -- so that the planner calls the function as little as possible

comment on function public.viewer is 'Currently authenticated `User`.';
