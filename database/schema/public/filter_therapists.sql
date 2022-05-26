create function public.filter_therapists(
  search_text text          = null,
  gender      public.gender = null,
  disabled    boolean       = null
) returns setof public.therapist as
$$
  select * from public.therapist
  where (filter_therapists.disabled is null
    or filter_therapists.disabled = therapist.disabled)
  and (coalesce(trim(filter_therapists.search_text), '') = ''
    or fulltext ilike '%' || filter_therapists.search_text || '%')
  and (filter_therapists.gender is null
    or gender = filter_therapists.gender)
$$
language sql stable;
