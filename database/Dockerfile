FROM postgres:13
# LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

COPY ./database/init.sh /docker-entrypoint-initdb.d
COPY ./database/schema /docker-entrypoint-initdb.d/schema
