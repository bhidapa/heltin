create type public.client_sent_by as enum (
  'SCHOOL',
  'VRTIC',
  'CENTAR_ZA_SOCIJALNI_RAD',
  'CLINIC',
  'SAMO_INICIJATIVNO',
  'POLICE',
  'COURT', -- sud
  'CENTAR_ZA_MENTALNO_ZDRAVLJE',
  'PO_PREPORUCI_DRUGOGA',
  'PEDIJATAR',
  'PSIHIJATAR'
);

create table public.client (
  id uuid primary key default uuid_generate_v4(),

  "number" integer not null unique,

  first_name text not null,
  last_name text not null,
  date_of_birth date not null,
  unique(first_name, last_name, date_of_birth),

  telephone text not null,
  email email_address,

  gender public.gender not null,

  city text not null,
  address text not null,

  sent_by public.client_sent_by not null,

  created_by uuid not null references public.user(id),

  discrete boolean not null default false, -- not seen by public.assistant

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

----

create type public.client_relation_type as enum (
  'PARENT',
  'SIBLING',
  'FAMILY',
  'COUPLE'
);

-- relation between to clients (parent of related child)
create table public.client_relation (
  client_id         uuid references public.client(id) on delete cascade,
  "type"            public.client_relation_type not null,
  related_client_id uuid references public.client(id) on delete cascade
);

----

-- groups multiple clients
create table public.group (
  id uuid primary key default uuid_generate_v4(),

  "number" integer not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null  
);

create table public.group_client (
  group_id  uuid not null references public.group(id) on delete cascade,
  client_id uuid not null references public.client(id) on delete cascade
);
