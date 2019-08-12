create table public.multidisciplinary_diagnostic (
  id uuid primary key default uuid_generate_v4(),

  case_study_id         uuid not null references public.case_study(id) on delete cascade,
  case_study_session_id uuid references public.case_study_session(id) on delete cascade,

  "external" boolean not null,

  description text,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null

  -- will be added after creating `public.multidisciplinary_therapy` since they both reference each other
  -- multidisciplinary_therapy_id references public.multidisciplinary_therapy(id) on delete restrict
);

comment on column public.multidisciplinary_diagnostic."external" is 'If the diagnostics hasP been performed outside the institution in focus.';

----

create type public.multidisciplinary_diagnostic_report_type as enum (
  'MULTIDISCIPLINARY_REPORT',
  'PSYCHOTHERAPEUTIC_REPORT',
  'PSYCHOLOGICAL_REPORT',
  'PSYCHIATRIC_REPORT',
  'NEUROLOGIC_REPORT',
  'PEDIATRIC_REPORT',
  'SOCIAL_WORKER_REPORT',
  'DEFECTOLOGICAL_REPORT',
  'T_O_V_A'
);

create type public.multidisciplinary_diagnostic_report_issued_to_type as enum (
  'CLIENT',
  'PARENT',
  'KINDERGARTEN',
  'SCHOOL',
  'SOCIAL_WORK_CENTER',
  'POLICE',
  'HOSPITAL',
  'PSYCHIATRIST',
  'PEDIATRIST',
  'COURT',
  'MENTAL_HEALTH_CENTER',
  'FOSTER_HOUSE'
);

create table public.multidisciplinary_diagnostic_report (
  id uuid primary key default uuid_generate_v4(),

  multidisciplinary_diagnostic_id uuid not null references public.multidisciplinary_diagnostic(id) on delete cascade,

  report_type public.multidisciplinary_diagnostic_report_type not null,
  report_url  text not null, -- medical report arriving with the diagnostic

  issued_to public.multidisciplinary_diagnostic_report_issued_to_type[] check(array_length(issued_to, 1) is not null),
  issued_at timestamptz,
  check((issued_to is null) = (issued_at is null)), -- either both exist, or neither

  description text,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);
