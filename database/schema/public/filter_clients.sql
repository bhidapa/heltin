create function public.filter_clients(
  search_text text          = null,
  gender      public.gender = null
) returns setof public.client as
$$
  select * from public.client
  where (coalesce(trim(filter_clients.search_text), '') = ''
    or ((fulltext ilike '%' || filter_clients.search_text || '%')
      or (exists (select from public.client_assigned_therapist
          inner join public.therapist on therapist.id = client_assigned_therapist.therapist_id
        where client_assigned_therapist.client_id = client.id
        and therapist.fulltext ilike '%' || filter_clients.search_text || '%'))))
  and (filter_clients.gender is null
    or gender = filter_clients.gender)
$$
language sql stable;

comment on function public.filter_clients is '@sortable';
