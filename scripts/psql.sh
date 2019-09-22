#!/usr/bin/env bash

SCRIPT_DIR=$(cd -P -- "$(dirname -- "${0}")" && pwd -P)

# Load dotenv variables.
source "${SCRIPT_DIR}"/dotenv.sh

# Change dir to docker-compose config location.
cd "${SCRIPT_DIR}/.." || exit 1

docker-compose exec --user "${POSTGRES_USER}" postgres \
    psql --pset expanded=auto --dbname="${POSTGRES_DB}"
