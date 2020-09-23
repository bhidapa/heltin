create function public.viewer_user_id()
returns uuid as $$
begin
  return nullif(current_setting('session.user_id', true), '')::uuid;
end;
$$ language plpgsql stable;

----

create or replace function public.viewer()
returns public.user as $$
declare
  vwr public.user;
begin
  select * into vwr from public.user where id = public.viewer_user_id();
  return vwr;
end;
$$ language plpgsql stable
cost 100000; -- so that the planner calls the function as little as possible

comment on function public.viewer is 'Currently authenticated `User`.';
