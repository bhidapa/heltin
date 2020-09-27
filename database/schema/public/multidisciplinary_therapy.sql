create type public.multidisciplinary_therapy_type as enum (
  'INDIVIDUAL_INTEGRATIVE_THERAPY',
  'INDIVIDUAL_GESTALT_THERAPY',
  'INDIVIDUAL_COGNITIVE_BEHAVIOURAL_THERAPY',
  'INDIVIDUAL_PSYCHOANALYTIC_THERAPY',
  'COUPLE_THERAPY',
  'FAMILY_THERAPY',
  'GROUP_THERAPY',
  'OCUPATIONAL_THERAPY',
  'COUNSELING_THERAPY',
  'PSYCHOEDUCATIONAL_THERAPY',
  'ATTACHMENT_THERAPY',
  'ATTACHMENT_BASIC_FAMILY_THERAPY',
  'EYE_MOVEMENT_DESENSITIZATION_AND_REPROCESSING_THERAPY',
  'TRAUMA_FOCUS_COGNITIVE_BEHAVIOURAL_THERAPY',
  'FORENSICALLY_SENSITIVE_THERAPY',
  'ANTIPSYCHOTIC_PSYCHOPHARMACOTHERAPY',
  'ANTIDEPRESIVE_PSYCHOPHARMACOTHERAPY',
  'ANXIOLYTIC_PSYCHOPHARMACOTHERAPY',
  'MOOD_STABILIZER_PSYCHOPHARMACOTHERAPY',
  'ANTIEPILEPTIC_PHARMACOTHERAPY',
  'PHARMACOTHERAPY',
  'PLAY_ATTENTION_THERAPY',
  'DEFECTOLOGY_THERAPY',
  'PHONETIC_THERAPY',
  'PARENTAL_THERAPY',
  -- external educational therapy
  'SCHOOL_EDUCATION',
  'KINDERGARTEN_EDUCATION',
  'SOCIAL_CENTER_EDUCATION',
  'COURT_EDUCATION'
);

create table public.multidisciplinary_therapy (
  id uuid primary key default uuid_generate_v4(),

  case_study_id           uuid not null references public.case_study(id) on delete cascade,
  case_study_treatment_id uuid references public.case_study_treatment(id) on delete cascade,

  multidisciplinary_diagnostic_id uuid references public.multidisciplinary_diagnostic(id) on delete restrict,

  "type" public.multidisciplinary_therapy_type not null,

  "external" boolean not null,

  description text,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

comment on column public.multidisciplinary_therapy."external" is 'If the therapy has been performed outside the institution in focus.';

----

alter table public.multidisciplinary_diagnostic
  add column multidisciplinary_therapy_id uuid,
  add constraint multidisciplinary_diagnostic_multidisciplinary_therapy_id_fkey
    foreign key (multidisciplinary_therapy_id)
    references public.multidisciplinary_therapy(id) on delete restrict;
