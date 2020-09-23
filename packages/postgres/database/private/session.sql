-- This table MUST look like this because of the graphql session manager `connect-pg-simple`
create table private.session (
  sid varchar primary key,
	sess json not null,
	expire timestamp(6) not null
);

create index session_expire_idx on private.session (expire);
