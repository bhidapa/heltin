FROM postgres:14
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

# update apt pkg sources
RUN apt-get update

# pgBackRest
RUN apt-get install -y \
  # build deps
  curl make gcc libpq-dev libssl-dev libxml2-dev pkg-config liblz4-dev libzstd-dev libbz2-dev libz-dev libyaml-dev \
  # runtime deps
  libxml2
ENV PGBACKREST_REPO_PATH=/var/lib/pgbackrest \
  PGBACKREST_CONFIG_PATH=/etc/pgbackrest \
  PGBACKREST_LOCK_PATH=/tmp/pgbackrest \
  PGBACKREST_LOG_PATH=/var/log/pgbackrest
RUN set -eux; \
  mkdir -p -m 770 "$PGBACKREST_REPO_PATH"; chown postgres:postgres "$PGBACKREST_REPO_PATH"; \
  mkdir -p -m 770 "$PGBACKREST_CONFIG_PATH"; chown postgres:postgres "$PGBACKREST_CONFIG_PATH"; \
  mkdir -p -m 770 "$PGBACKREST_LOCK_PATH"; chown postgres:postgres "$PGBACKREST_LOCK_PATH"; \
  mkdir -p -m 770 "$PGBACKREST_LOG_PATH"; chown postgres:postgres "$PGBACKREST_LOG_PATH";
RUN set -eux; \
  mkdir -p /tmp/pgbackrest-release; cd /tmp/pgbackrest-release; \
  curl -s -L https://github.com/pgbackrest/pgbackrest/archive/release/2.39.tar.gz | tar xvzf - --strip-components=1; \
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
  apt-get clean all && rm -rf /var/lib/apt/lists/*

# configure pgBackRest
RUN echo "[global]" "\n" \
  "start-fast=y" "\n" \
  "repo1-retention-full=15" "\n" \
  "repo1-path=$PGBACKREST_REPO_PATH" "\n" \
  "\n" \
  "[global:archive-push]" "\n" \
  "compress-level=3" "\n" \
  "\n" \
  "[heltin]" "\n" \
  "pg1-path=/var/lib/postgresql/data" > $PGBACKREST_CONFIG_PATH/pgbackrest.conf; chown postgres:postgres $PGBACKREST_CONFIG_PATH/pgbackrest.conf
RUN echo "\n" "# pgBackRest #" "\n" \
  "archive_command = 'pgbackrest --stanza=heltin archive-push %p'" "\n" \
  "archive_mode = on" "\n" \
  "hot_standby = on" "\n" \
  "max_wal_senders = 3" "\n" \
  "wal_level = replica" >> /usr/share/postgresql/postgresql.conf.sample

# prepare the init scripts and database schema files
COPY database/init-pgbackrest.sh /docker-entrypoint-initdb.d/1-init-pgbackrest.sh
COPY database/init.sh /docker-entrypoint-initdb.d/2-init.sh
COPY database/schema /docker-entrypoint-initdb.d/schema
