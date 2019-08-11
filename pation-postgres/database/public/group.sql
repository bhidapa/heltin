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

create table public.group_mental_health_professional (
  id uuid primary key default uuid_generate_v4(),

  group_id                      uuid not null references public.group(id),
  mental_health_professional_id uuid not null references public.mental_health_professional(id),
  unique(group_id, mental_health_professional_id),

  "primary" boolean not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

-- only one primary mental health professional
create unique index group_mental_health_professional_primary on public.group_mental_health_professional (group_id) where ("primary");
