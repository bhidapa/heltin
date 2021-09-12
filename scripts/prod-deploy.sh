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

echo "Building ${2:-everything}..."
docker compose build $2

echo "Pushing ${2:-everything}..."
docker compose push $2

echo "Pulling ${2:-everything} on $1..."
docker -c "$CTX" compose -f docker-compose.yml -f docker-compose.prod.yml pull $2

echo "Down ${2:-everything} on $1..."
docker -c "$CTX" compose -f docker-compose.yml -f docker-compose.prod.yml stop $2

echo "Up ${2:-everything} on $1..."
docker -c "$CTX" compose -f docker-compose.yml -f docker-compose.prod.yml up -d $2
