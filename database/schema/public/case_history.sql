create type public.case_history_accompanied_by_type as enum (
  'NO_ONE',
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

create type public.case_history_reason_of_multiple_adoptions_type as enum (
  'ABUSE',
  'NEGLECTION',
  'LOSS_OF_FOSTER_PARENT',
  'OTHER'
);

create type public.case_history_arrival_reason_type as enum (
  'EMOTIONAL_PROBLEMS',
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
  'BEHAVIOURAL_PROBLEMS',
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
  case_study_treatment_id uuid references public.case_study_treatment(id) on delete cascade,

  accompanied_by public.case_history_accompanied_by_type,

  lives_with public.case_history_lives_with_type[],

  divorced_parents public.case_history_divorced_parents_type,
  divorce_outcome  public.case_history_divorce_outcome_type,

  adoption_age float8,

  number_of_adoptions          integer,
  reason_of_multiple_adoptions public.case_history_reason_of_multiple_adoptions_type[],

  arrival_reason public.case_history_arrival_reason_type[],

  earlier_professional_help public.mental_health_professional_type[],

  referral_diagnosis text,
  referral           public.case_history_referral_type[],
  involved_referral  boolean,

  previous_treatment text,

  attends_kindergarten boolean,

  school_mark integer check(school_mark >= 1 and school_mark <= 5),
  adapted_education_program boolean,
  individualized_education_program boolean,

  diagnosed_intelectual_development_problems boolean,

  further_abuses          public.case_history_abuse_type[],
  reported_further_abuses public.case_history_reported_abuse_type,

  loss_of_close_individual            public.case_history_individual_type[],
  age_during_loss_of_close_individual float8,

  family_heredity text,

  ptsp text,

  parents_in_jail public.case_history_parents_in_jail_type,

  created_by uuid not null references public.user(id) on delete restrict,
  updated_by uuid references public.user(id) on delete restrict,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

grant all on public.case_history to viewer;

comment on column public.case_history.accompanied_by is 'With whom was the patient accopanied by.';
comment on column public.case_history.lives_with is 'With whom does the patient live with.';

create or replace function public.create_case_history(
  case_study_id                              uuid,
  case_study_treatment_id                    uuid = null,
  accompanied_by                             public.case_history_accompanied_by_type = null,
  lives_with                                 public.case_history_lives_with_type[] = null,
  divorced_parents                           public.case_history_divorced_parents_type = null,
  divorce_outcome                            public.case_history_divorce_outcome_type = null,
  adoption_age                               float8 = null,
  number_of_adoptions                        integer = null,
  reason_of_multiple_adoptions               public.case_history_reason_of_multiple_adoptions_type[] = null,
  arrival_reason                             public.case_history_arrival_reason_type[] = null,
  earlier_professional_help                  public.mental_health_professional_type[] = null,
  referral_diagnosis                         text = null,
  referral                                   public.case_history_referral_type[] = null,
  involved_referral                          boolean = null,
  previous_treatment                         text = null,
  attends_kindergarten                       boolean = null,
  school_mark                                integer = null,
  adapted_education_program                  boolean = null,
  individualized_education_program           boolean = null,
  diagnosed_intelectual_development_problems boolean = null,
  further_abuses                             public.case_history_abuse_type[] = null,
  reported_further_abuses                    public.case_history_reported_abuse_type = null,
  loss_of_close_individual                   public.case_history_individual_type[] = null,
  age_during_loss_of_close_individual        float8 = null,
  family_heredity                            text = null,
  ptsp                                       text = null,
  parents_in_jail                            public.case_history_parents_in_jail_type = null
) returns public.case_history as
$$
  insert into public.case_history (
    case_study_id,
    case_study_treatment_id,
    accompanied_by,
    lives_with,
    divorced_parents,
    divorce_outcome,
    adoption_age,
    number_of_adoptions,
    reason_of_multiple_adoptions,
    arrival_reason,
    earlier_professional_help,
    referral_diagnosis,
    referral,
    involved_referral,
    previous_treatment,
    attends_kindergarten,
    school_mark,
    adapted_education_program,
    individualized_education_program,
    diagnosed_intelectual_development_problems,
    further_abuses,
    reported_further_abuses,
    loss_of_close_individual,
    age_during_loss_of_close_individual,
    family_heredity,
    ptsp,
    parents_in_jail,
    created_by
  ) values (
    create_case_history.case_study_id,
    create_case_history.case_study_treatment_id,
    create_case_history.accompanied_by,
    create_case_history.lives_with,
    create_case_history.divorced_parents,
    create_case_history.divorce_outcome,
    create_case_history.adoption_age,
    create_case_history.number_of_adoptions,
    create_case_history.reason_of_multiple_adoptions,
    create_case_history.arrival_reason,
    create_case_history.earlier_professional_help,
    create_case_history.referral_diagnosis,
    create_case_history.referral,
    create_case_history.involved_referral,
    create_case_history.previous_treatment,
    create_case_history.attends_kindergarten,
    create_case_history.school_mark,
    create_case_history.adapted_education_program,
    create_case_history.individualized_education_program,
    create_case_history.diagnosed_intelectual_development_problems,
    create_case_history.further_abuses,
    create_case_history.reported_further_abuses,
    create_case_history.loss_of_close_individual,
    create_case_history.age_during_loss_of_close_individual,
    create_case_history.family_heredity,
    create_case_history.ptsp,
    create_case_history.parents_in_jail,
    public.viewer_user_id()
  )
  returning *
$$
language sql volatile;

create or replace function public.update_case_history(
  id                                         uuid,
  case_study_treatment_id                    uuid = null,
  accompanied_by                             public.case_history_accompanied_by_type = null,
  lives_with                                 public.case_history_lives_with_type[] = null,
  divorced_parents                           public.case_history_divorced_parents_type = null,
  divorce_outcome                            public.case_history_divorce_outcome_type = null,
  adoption_age                               float8 = null,
  number_of_adoptions                        integer = null,
  reason_of_multiple_adoptions               public.case_history_reason_of_multiple_adoptions_type[] = null,
  arrival_reason                             public.case_history_arrival_reason_type[] = null,
  earlier_professional_help                  public.mental_health_professional_type[] = null,
  referral_diagnosis                         text = null,
  referral                                   public.case_history_referral_type[] = null,
  involved_referral                          boolean = null,
  previous_treatment                         text = null,
  attends_kindergarten                       boolean = null,
  school_mark                                integer = null,
  adapted_education_program                  boolean = null,
  individualized_education_program           boolean = null,
  diagnosed_intelectual_development_problems boolean = null,
  further_abuses                             public.case_history_abuse_type[] = null,
  reported_further_abuses                    public.case_history_reported_abuse_type = null,
  loss_of_close_individual                   public.case_history_individual_type[] = null,
  age_during_loss_of_close_individual        float8 = null,
  family_heredity                            text = null,
  ptsp                                       text = null,
  parents_in_jail                            public.case_history_parents_in_jail_type = null
) returns public.case_history as
$$
  update public.case_history set
    case_study_treatment_id=update_case_history.case_study_treatment_id,
    accompanied_by=update_case_history.accompanied_by,
    lives_with=update_case_history.lives_with,
    divorced_parents=update_case_history.divorced_parents,
    divorce_outcome=update_case_history.divorce_outcome,
    adoption_age=update_case_history.adoption_age,
    number_of_adoptions=update_case_history.number_of_adoptions,
    reason_of_multiple_adoptions=update_case_history.reason_of_multiple_adoptions,
    arrival_reason=update_case_history.arrival_reason,
    earlier_professional_help=update_case_history.earlier_professional_help,
    referral_diagnosis=update_case_history.referral_diagnosis,
    referral=update_case_history.referral,
    involved_referral=update_case_history.involved_referral,
    previous_treatment=update_case_history.previous_treatment,
    attends_kindergarten=update_case_history.attends_kindergarten,
    school_mark=update_case_history.school_mark,
    adapted_education_program=update_case_history.adapted_education_program,
    individualized_education_program=update_case_history.individualized_education_program,
    diagnosed_intelectual_development_problems=update_case_history.diagnosed_intelectual_development_problems,
    further_abuses=update_case_history.further_abuses,
    reported_further_abuses=update_case_history.reported_further_abuses,
    loss_of_close_individual=update_case_history.loss_of_close_individual,
    age_during_loss_of_close_individual=update_case_history.age_during_loss_of_close_individual,
    family_heredity=update_case_history.family_heredity,
    ptsp=update_case_history.ptsp,
    parents_in_jail=update_case_history.parents_in_jail,
    updated_by=public.viewer_user_id(),
    updated_at=now()
  where id = update_case_history.id
  returning *
$$
language sql volatile;

create or replace function public.delete_case_history(
  id uuid
) returns public.case_history as
$$
  delete from public.case_history
  where id = delete_case_history.id
  returning *
$$
language sql volatile;

----

create table public.case_history_file (
  id uuid primary key default uuid_generate_v4(),

  case_history_id uuid not null references public.case_history(id) on delete cascade,
  file_id         uuid not null references public.file(id) on delete cascade,

  created_at created_timestamptz not null
);

grant select, insert, delete on public.case_history_file to viewer;

create or replace function public.create_case_history_file(
  case_history_id uuid,
  file_name       text,
  file_data       bytea
) returns public.case_history_file as
$$
  with created_file as (
    insert into public.file (name, data)
      values (create_case_history_file.file_name, create_case_history_file.file_data)
    returning *
  )
  insert into public.case_history_file (case_history_id, file_id)
    select create_case_history_file.case_history_id, id from created_file
  returning *
$$
language sql volatile;

create or replace function public.delete_case_history_file(
  id uuid
) returns public.case_history_file as
$$
  with deleted as (
    delete from public.case_history_file
    where id = delete_case_history_file.id
    returning *
  )
  delete from public.file
    using deleted
  where deleted.file_id = file.id
  returning deleted.*
$$
language sql volatile;
