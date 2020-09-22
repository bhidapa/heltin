#!/usr/bin/env bash

SCRIPT_DIR=$(cd -P -- "$(dirname -- "${0}")" && pwd -P)

# Change dir to docker-compose config location.
cd "${SCRIPT_DIR}/.." || exit 1

docker-compose -f docker-compose.yml -f docker-compose.prod.yml "$@"
