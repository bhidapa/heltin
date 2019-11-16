create type public.case_history_accompanied_by_type as enum (
  'NONE',
  'FATHER',
  'MOTHER',
  'FAMILY'
);

create type public.case_history_lives_with_type as enum (
  'ALONE',
  'FATHER',
  'MOTHER',
  'GRANDFATHER',
  'GRANDMOTHER',
  'UNCLE',
  'AUNT',
  'COUSIN',
  'SISTER',
  'BROTHER',
  'STEP_FATHER',
  'STEP_MOTHER',
  'STEP_SISTER',
  'STEP_BROTHER',
  'FOSTER_MOTHER',
  'FOSTER_FATHER',
  'FOSTER_HOUSE'
);

create type public.case_history_divorced_parents_type as enum (
  'IN_PROCESS',
  'YES',
  'NO'
);

create type public.case_history_divorce_outcome_type as enum (
  'HIGH_CONFLICT',
  'MEDIUM_CONFLICT',
  'LOW_CONFLICT',
  'NO_CONFLICT',
  'UNKNOWN'
);

create type public.case_history_deceased_type as enum (
  'FATHER',
  'MOTHER',
  'SISTER',
  'BROTHER',
  'STEP_FATHER',
  'STEP_MOTHER',
  'STEP_SISTER',
  'STEP_BROTHER',
  'FOSTER_MOTHER',
  'FOSTER_FATHER'
);

create type public.case_history_reason_of_multiple_adoptions_type as enum (
  'ABUSE',
  'NEGLECTION',
  'LOSS_OF_FOSTER_PARENT',
  'OTHER'
);

create type public.case_history_arrival_reason_type as enum (
  'EMOTIONAL_PROBLEMS',
  'BEHAVIORAL_PROBLEMS',
  'ANXIETY',
  'LEARNING_PROBLEMS',
  'ATTENTION_PROBLEMS',
  'SUICIDAL_THOUGHTS',
  'DEPRESION_SYMPTOMS',
  'GRIEVE',
  'LOSS',
  'DIVORCE',
  'COMMUNICATION_PROBLEMS',
  'ADDICTION',
  'SLEEP_DEFICIENCY',
  'BEHAVIOURAL_PROBLEMS', -- promjene u ponasanju
  'TRAUMA',
  'SEXUAL_ABUSE',
  'PHYSICAL_ABUSE',
  'EMOTIONAL_ABUSE',
  'BULLYING',
  'CYBER_BULLYING',
  'NEGLECTION',
  'ABUSE_WITNESS',
  'ADHD',
  'TALKING_ISSUES',
  'NEURO_DEVELOPMENT_DISORDER',
  'DYSLEXIA',
  'DYSGRAPHIA',
  'PARENT_MANIPULATION',
  'COUPLE_PROBLEMS',
  'OTHER'
);

create type public.case_history_referral_type as enum (
  'SELF',
  'KINDERGARTEN',
  'SCHOOL',
  'SOCIAL_WORK_CENTER',
  'POLICE',
  'HOSPITAL',
  'PSYCHIATRIST',
  'PEDIATRIST',
  'COURT',
  'MENTAL_HEALTH_CENTER',
  'OTHER'
);

create type public.case_history_abuse_type as enum (
  'SEXUAL_ABUSE',
  'PHYSICAL_ABUSE',
  'EMOTIONAL_ABUSE',
  'BULLYING',
  'CYBER_BULLYING',
  'NEGLECTION',
  'ABUSE_WITNESS',
  'PARENT_MANIPULATION',
  'OTHER'
);

create type public.case_history_reported_abuse_type as enum (
  'SOCIAL_WORK_CENTER',
  'COURT', -- sud
  'NOT_REPORTED'
);

create type public.case_history_individual_type as enum (
  'FATHER',
  'MOTHER',
  'GRANDFATHER',
  'GRANDMOTHER',
  'UNCLE',
  'AUNT',
  'COUSIN',
  'SISTER',
  'BROTHER',
  'STEP_FATHER',
  'STEP_MOTHER',
  'STEP_SISTER',
  'STEP_BROTHER',
  'FOSTER_MOTHER',
  'FOSTER_FATHER',
  'FRIEND',
  'LOVER'
);

create type public.case_history_parents_in_jail_type as enum (
  'FATHER',
  'MOTHER',
  'FATHER_AND_MOTHER'
);

create table public.case_history (
  id uuid primary key default uuid_generate_v4(),

  case_study_id         uuid not null references public.case_study(id) on delete cascade,
  case_study_session_id uuid references public.case_study_session(id) on delete cascade,

  accompanied_by public.case_history_accompanied_by_type,

  lives_with public.case_history_lives_with_type[],

  divorced_parents public.case_history_divorced_parents_type,
  divorce_outcome public.case_history_divorce_outcome_type,

  deceased public.case_history_deceased_type,

  adoption_age float8,

  number_of_adoptions integer,
  reason_of_multiple_adoptions public.case_history_reason_of_multiple_adoptions_type[],

  arrival_reason public.case_history_arrival_reason_type[],

  earlier_professional_help public.mental_health_professional_type[],

  referral_diagnosis text,
  referral public.case_history_referral_type[],
  involved_referral boolean,

  previous_treatment text,

  attends_kindergarten boolean,

  school_mark integer check(school_mark >= 1 and school_mark <= 5),
  adapted_education_program boolean,
  individualized_education_program boolean,

  diagnosed_intelectual_development_problems boolean,

  further_abuses public.case_history_abuse_type[],
  reported_further_abuses public.case_history_reported_abuse_type,

  loss_of_close_individual public.case_history_individual_type[],
  age_during_loss_of_close_individual float8,

  family_heredity text,

  ptsp text,

  parents_in_jail public.case_history_parents_in_jail_type,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_history to viewer;

comment on column public.case_history.accompanied_by is 'With whom was the patient accopanied by.';
comment on column public.case_history.lives_with is 'With whom does the patient live with.';

----

create table public.case_history_earlier_medical_report (
  id uuid primary key default uuid_generate_v4(),

  case_history_id uuid not null references public.case_history(id) on delete cascade,
  file_id uuid not null references public.file(id) on delete cascade,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_history_earlier_medical_report to viewer;
