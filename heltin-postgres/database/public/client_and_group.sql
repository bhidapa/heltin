create type public.client_sent_by as enum (
  'SCHOOL',
  'KINDERGARTEN',
  'SOCIAL_WORK_CENTER',
  'CLINIC',
  'SELF_INITIATIVE',
  'POLICE',
  'COURT',
  'MENTAL_HEALTH_CENTER',
  'REFERAL',
  'PEDIATRICIAN',
  'PSYCHIATRIST'
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

grant all on public.client to viewer;

create index client_fulltext_idx on public.client using gin(
  to_tsvector('english',
    "number" || ' ' ||
    first_name || ' ' ||
    last_name || ' ' ||
    telephone || ' ' ||
    coalesce(email, '') || ' ' ||
    city || ' ' ||
    address
  )
);

----

create or replace function public.next_available_client_number()
returns integer as
$$
  select "number" + 1 from public.client
  order by "number" desc
  limit 1
$$
language sql stable security definer; -- security definer to consider clients to which the might not have access to

comment on function public.next_available_client_number is E'@notNull\nNext auto-generated available `Client` number.';

----

-- groups multiple clients
create table public.group (
  id uuid primary key default uuid_generate_v4(),

  "number" integer not null,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null  
);

grant all on public.group to viewer;

create table public.group_client (
  group_id  uuid not null references public.group(id) on delete cascade,
  client_id uuid not null references public.client(id) on delete cascade
);

grant all on public.group_client to viewer;

----

create function public.create_client(
  "number"      integer,
  first_name    text,
  last_name     text,
  date_of_birth date,
  telephone     text,
  gender        public.gender,
  city          text,
  address       text,
  sent_by       public.client_sent_by,
  email         email_address = null,
  discrete      boolean = null -- not seen by public.assistant
) returns public.client as
$$
  insert into public.client (
    "number",
    first_name,
    last_name,
    date_of_birth,
    telephone,
    gender,
    city,
    address,
    sent_by,
    email,
    discrete,
    created_by
  ) values (
    create_client."number",
    create_client.first_name,
    create_client.last_name,
    create_client.date_of_birth,
    create_client.telephone,
    create_client.gender,
    create_client.city,
    create_client.address,
    create_client.sent_by,
    create_client.email,
    coalesce(create_client.discrete, false),
    (select id from public.viewer())
  )
  returning *
$$
language sql volatile;

----

create function public.update_client(
  id            uuid,
  "number"      integer,
  first_name    text,
  last_name     text,
  date_of_birth date,
  telephone     text,
  gender        public.gender,
  city          text,
  address       text,
  sent_by       public.client_sent_by,
  email         email_address = null,
  discrete      boolean = null -- not seen by public.assistant
) returns public.client as
$$
  update public.client
    set
      "number"=update_client."number",
      first_name=update_client.first_name,
      last_name=update_client.last_name,
      date_of_birth=update_client.date_of_birth,
      telephone=update_client.telephone,
      gender=update_client.gender,
      city=update_client.city,
      address=update_client.address,
      sent_by=update_client.sent_by,
      email=update_client.email,
      discrete=update_client.discrete,
      updated_at=now()
  where id = update_client.id
  returning *
$$
language sql volatile;

----

create function public.delete_client(
  id uuid
) returns public.client as
$$
  delete from public.client
  returning *
$$
language sql volatile;

----

create function public.client_full_name(
  client public.client
) returns text as
$$
  select client.first_name || ' ' || client.last_name
$$
language sql immutable;

comment on function public.client_full_name is '@notNull';
