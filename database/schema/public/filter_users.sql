create or replace function public.filter_users(
  search_text text = null,
  disabled    boolean = null
) returns setof public.user as
$$
  select "user".* from public.user
    inner join private.user as priv_user on priv_user.id = "user".id
  where (filter_users.disabled is null
    or filter_users.disabled = priv_user.disabled)
  and (coalesce(lower(filter_users.search_text), '') = ''
    or "user".email ilike '%' || filter_users.search_text || '%')
$$
language sql stable;
