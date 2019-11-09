FROM postgres:11

COPY ./heltin-postgres/init.sh /docker-entrypoint-initdb.d
COPY ./heltin-postgres/database /docker-entrypoint-initdb.d/database
