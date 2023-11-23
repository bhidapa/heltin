FROM postgres:16
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

# pgBackRest
RUN apt-get update && \
  apt-get install -y \
  # build deps
  curl make gcc libpq-dev libssl-dev libxml2-dev pkg-config liblz4-dev libzstd-dev libbz2-dev libz-dev libyaml-dev \
  # runtime deps
  libxml2
ENV PGBACKREST_CONFIG_PATH=/etc/pgbackrest \
  PGBACKREST_LOCK_PATH=/tmp/pgbackrest \
  PGBACKREST_LOG_PATH=/var/log/pgbackrest
RUN set -eux; \
  mkdir -p -m 770 /var/lib/pgbackrest; chown postgres:postgres /var/lib/pgbackrest; \
  mkdir -p -m 770 "$PGBACKREST_CONFIG_PATH"; chown postgres:postgres "$PGBACKREST_CONFIG_PATH"; \
  mkdir -p -m 770 "$PGBACKREST_LOCK_PATH"; chown postgres:postgres "$PGBACKREST_LOCK_PATH"; \
  mkdir -p -m 770 "$PGBACKREST_LOG_PATH"; chown postgres:postgres "$PGBACKREST_LOG_PATH";
RUN set -eux; \
  mkdir -p /tmp/pgbackrest-release; cd /tmp/pgbackrest-release; \
  curl -s -L https://github.com/pgbackrest/pgbackrest/archive/release/2.48.tar.gz | tar xvzf - --strip-components=1; \
  cd src; \
  ./configure; make; \
  mv pgbackrest /usr/bin; chmod 755 /usr/bin/pgbackrest; \
  # test, will fail if wrongly set up
  pgbackrest version
# remove build sources and deps because we're done installing
RUN rm -rf /tmp/pgbackrest-release && \
  apt-get remove -y \
  curl make gcc libpq-dev libssl-dev libxml2-dev pkg-config liblz4-dev libzstd-dev libbz2-dev libz-dev libyaml-dev

# clean apt cache and temporary files
RUN apt-get autoremove -y && \
  rm -rf /var/lib/apt/lists/*

# configure Postgres for pgBackRest
COPY --chown=postgres:postgres database/pgbackrest.postgresql.conf $PGBACKREST_CONFIG_PATH
RUN cat $PGBACKREST_CONFIG_PATH/pgbackrest.postgresql.conf >> /usr/share/postgresql/postgresql.conf.sample

# prepare the init scripts and database schema files
COPY database/init-pgbackrest.sh /docker-entrypoint-initdb.d/1-init-pgbackrest.sh
COPY database/init.sh /docker-entrypoint-initdb.d/2-init.sh
COPY database/schema /docker-entrypoint-initdb.d/schema
