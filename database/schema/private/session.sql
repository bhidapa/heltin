create table private.session (
  sid varchar primary key,
	sess jsonb not null,
	expire timestamptz(6) not null,
	updated_at updated_timestamptz not null,
	created_at created_timestamptz not null
);

create index session_sess_idx on private.session using gin (sess);
create index session_sess_user_id_idx on private.session ((sess->>'user_id'));
create index session_expire_idx on private.session (expire);
