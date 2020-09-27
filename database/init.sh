#!/bin/bash
set -e

if [ -d /docker-entrypoint-initdb.d ]; then
  INIT_DIR=/docker-entrypoint-initdb.d
else
  INIT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
  if [ ! -z "$1" ]; then
    INIT_DIR=$(cd -P -- "$1" && pwd -P)
  fi
fi

psql -X -v ON_ERROR_STOP=1 --username "${POSTGRES_USER}" <<-EOSQL
\echo
\echo 'Killing the database...'
\echo

select pg_terminate_backend(pg_stat_activity.pid) from pg_stat_activity where pg_stat_activity.datname = '${POSTGRES_DB}' and pid <> pg_backend_pid();

\echo
\echo 'Initializing database...'
\echo

drop database if exists ${POSTGRES_DB};
create database ${POSTGRES_DB} with template=template0 encoding='utf8';
\c ${POSTGRES_DB}

BEGIN;

\echo
\echo 'Creating extensions...'
\echo

\i ${INIT_DIR}/schema/extensions.sql

\echo
\echo 'Creating domains...'
\echo

\i ${INIT_DIR}/schema/domains.sql

\echo
\echo 'Creating roles...'
\echo

drop role if exists anonymous;
create role anonymous;

drop role if exists viewer;
create role viewer;

\echo
\echo 'Setting up schemas...'
\echo

grant usage on schema public to viewer;
grant usage on schema public to anonymous;

create schema private;
grant usage on schema private to viewer;
grant usage on schema private to anonymous;

\echo
\echo 'Setting up enums...'
\echo

\i ${INIT_DIR}/schema/enums.sql

\echo
\echo 'Setting up tables...'
\echo

\i ${INIT_DIR}/schema/tables.sql

\echo
\echo 'Setting up policies...'
\echo

\i ${INIT_DIR}/schema/policies.sql
commit;

\echo
\echo 'Database setup done.'
\echo

begin;

\echo
\echo 'Applying seed...'
\echo

\i ${INIT_DIR}/schema/seed.sql

commit;

\echo
\echo 'Seed applied.'
\echo
EOSQL
