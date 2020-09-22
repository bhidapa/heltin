FROM postgres:12

COPY ./packages/postgres/init.sh /docker-entrypoint-initdb.d
COPY ./packages/postgres/database /docker-entrypoint-initdb.d/database
