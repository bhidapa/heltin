create table public.multidisciplinary_therapy (
  id uuid primary key default uuid_generate_v4(),

  case_study_id uuid not null references public.case_study(id) on delete cascade,
  session_id    uuid references public.session(id) on delete cascade,

  -- todo: add columns

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);
