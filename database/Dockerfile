FROM postgres:12

COPY ./database/init.sh /docker-entrypoint-initdb.d
COPY ./database/schema /docker-entrypoint-initdb.d/schema
