create or replace function public.filter_mental_health_professionals(
  search_text text          = null,
  gender      public.gender = null,
  disabled    boolean       = null
) returns setof public.mental_health_professional as
$$
  select * from public.mental_health_professional
  where (filter_mental_health_professionals.disabled is null
    or filter_mental_health_professionals.disabled = mental_health_professional.disabled)
  and (
    (coalesce(lower(filter_mental_health_professionals.search_text), '') = '') or (
      (
        filter_mental_health_professionals.search_text ilike '%' || first_name || '%'
      ) or (
        filter_mental_health_professionals.search_text ilike '%' || last_name || '%'
      ) or (
        filter_mental_health_professionals.search_text ilike '%' || email || '%'
      )
    )
  ) and (
    (filter_mental_health_professionals.gender is null) or (
      gender = filter_mental_health_professionals.gender
    )
  )
$$
language sql stable;
