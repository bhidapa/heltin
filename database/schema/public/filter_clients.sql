create or replace function public.filter_clients(
  search_text text                  = null,
  gender      public.gender         = null,
  sent_by     public.client_sent_by = null
) returns setof public.client as
$$
  select * from public.client
  where (coalesce(trim(filter_clients.search_text), '') = ''
    or ((fulltext ilike '%' || filter_clients.search_text || '%')
      or (exists (select from public.client_assigned_mental_health_professional
          inner join public.mental_health_professional on mental_health_professional.id = client_assigned_mental_health_professional.mental_health_professional_id
        where client_assigned_mental_health_professional.client_id = client.id
        and mental_health_professional.fulltext ilike '%' || filter_clients.search_text || '%'))))
  and (filter_clients.gender is null
    or gender = filter_clients.gender)
  and (filter_clients.sent_by is null
    or sent_by = filter_clients.sent_by)
$$
language sql stable;
