create or replace function public.filter_clients(
  search_text text                  = null,
  gender      public.gender         = null,
  sent_by     public.client_sent_by = null
) returns setof public.client as
$$
  select * from public.client
  where (
    (coalesce(lower(filter_clients.search_text), '') = '') or (
      to_tsvector('english',
        "number" || ' ' ||
        first_name || ' ' ||
        last_name || ' ' ||
        telephone || ' ' ||
        coalesce(email, '') || ' ' ||
        city || ' ' ||
        address
      ) @@ plainto_tsquery('english', filter_clients.search_text)
    )
  ) and (
    (filter_clients.gender is null) or (
      gender = filter_clients.gender
    )
  ) and (
    (filter_clients.sent_by is null) or (
      sent_by = filter_clients.sent_by
    )
  )
$$
language sql stable;
