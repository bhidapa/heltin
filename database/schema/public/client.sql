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

  note text,

  discrete boolean not null default false, -- not seen by public.assistant

  fulltext text not null generated always as (
    "number"::text || ' ' ||
    first_name || ' ' ||
    last_name || ' ' ||
    telephone || ' ' ||
    coalesce(email || ' ', '') ||
    city || ' ' ||
    address || ' ' ||
    coalesce(note, '')
  ) stored,

  created_by uuid not null references public.user(id) on delete restrict,
  updated_by uuid references public.user(id) on delete restrict,

  created_at created_timestamptz not null,
  updated_at updated_timestamptz not null
);

comment on column public.client.fulltext is '@omit';

grant all on public.client to viewer;

create index client_created_by_idx on public.client (created_by);
create index client_fulltext_idx on public.client using gin (fulltext gin_trgm_ops);

----

create function public.next_available_client_number()
returns integer as
$$
  select coalesce(
    (
      select "number" + 1 from public.client
      order by "number" desc
      limit 1
    ),
    1
  )
$$
language sql stable security definer; -- security definer to consider clients to which the might not have access to

comment on function public.next_available_client_number is E'@notNull\nNext auto-generated available `Client` number.';

create function public.client_full_name(
  client public.client
) returns text as
$$
  select client.first_name || ' ' || client.last_name
$$
language sql immutable;

comment on function public.client_full_name is '@notNull';

----

create table public.client_assigned_therapist (
  id uuid primary key default uuid_generate_v4(),

  client_id                 uuid not null references public.client(id) on delete cascade,
  therapist_id uuid not null references public.therapist(id),
  unique(client_id, therapist_id),

  created_by uuid not null references public.user(id) on delete restrict,
  created_at created_timestamptz not null
);

grant select, insert, delete on public.client_assigned_therapist to viewer;

create index client_assigned_therapist_client_id_idx on public.client_assigned_therapist (client_id);
create index client_assigned_therapist_professional_id_idx on public.client_assigned_therapist (therapist_id);
create index client_assigned_therapist_created_by_idx on public.client_assigned_therapist (created_by);

----

create function public.create_client_assigned_therapist(
  client_id                     uuid,
  therapist_id uuid
) returns public.client_assigned_therapist as
$$
  insert into public.client_assigned_therapist (
    client_id,
    therapist_id,
    created_by
  ) values (
    create_client_assigned_therapist.client_id,
    create_client_assigned_therapist.therapist_id,
    public.viewer_user_id()
  )
  returning *
$$
language sql volatile;

create function public.delete_client_assigned_therapist(
  id uuid
) returns public.client_assigned_therapist as
$$
  delete from public.client_assigned_therapist
  where id = delete_client_assigned_therapist.id
  returning *
$$
language sql volatile;

create function public.client_latest_assigned_therapist(
  client public.client
) returns public.client_assigned_therapist as $$
  select * from public.client_assigned_therapist
  where client_id = client.id
  order by created_at desc
  limit 1
$$ language sql stable;

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
  email         email_address = null,
  note          text = null,
  discrete      boolean = null -- not seen by public.assistant
) returns public.client as $$
declare
  created_client public.client;
begin
  insert into public.client (
    "number",
    first_name,
    last_name,
    date_of_birth,
    telephone,
    gender,
    city,
    address,
    email,
    note,
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
    create_client.email,
    create_client.note,
    coalesce(create_client.discrete, false),
    public.viewer_user_id()
  )
  returning * into created_client;

  -- if a therapist is creating a client, assign immediately
  if public.user_is_therapist(public.viewer())
  then
    insert into public.client_assigned_therapist (client_id, therapist_id, created_by)
    values (created_client.id, (select id from public.therapist where user_id = public.viewer_user_id()), public.viewer_user_id());
  end if;

  return created_client;
end
$$ language plpgsql volatile;

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
  email         email_address = null,
  note          text = null,
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
      email=update_client.email,
      note=update_client.note,
      discrete=update_client.discrete,
      updated_by=public.viewer_user_id(),
      updated_at=now()
  where id = update_client.id
  returning *
$$
language sql volatile;

create function public.delete_client(
  id uuid
) returns public.client as
$$
  delete from public.client
  where id = delete_client.id
  returning *
$$
language sql volatile;
