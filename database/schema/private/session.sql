create table private.session (
  id uuid primary key default uuid_generate_v4(),

	user_id uuid not null references public.user(id) on delete cascade,
	cookie  jsonb not null,
	data    jsonb,

	expires_at timestamptz not null default now(), -- expire immediately if expires_at was not provided

	updated_at updated_timestamptz not null,
	created_at created_timestamptz not null
);

create index session_user_id_idx on private.session (user_id);
create index session_cookie_idx on private.session using gin (cookie);
create index session_data_idx on private.session using gin (data);
create index session_expires_at_idx on private.session (expires_at);