#!/usr/bin/env bash
set -e

SCRIPT_DIR=$(cd -P -- "$(dirname -- "${0}")" && pwd -P)

CTX="$1"
if [ -z "$CTX" ]; then
  echo "Docker context not provided"
  exit 1
fi

echo "Checking docker context..."
docker context inspect "$CTX" 1> /dev/null # ignore stdout

# Export secrets
. "${SCRIPT_DIR}"/set-secrets.sh

# Change dir to docker compose config location.
cd "${SCRIPT_DIR}/.." || exit 1

echo "Up on $CTX..."
docker -c "$CTX" compose -f docker-compose.yml -f docker-compose.prod.yml up "${@:2}"
