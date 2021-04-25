#!/usr/bin/env bash
set -e

SCRIPT_DIR=$(cd -P -- "$(dirname -- "${0}")" && pwd -P)

if [ -z "$1" ]; then
  echo "Docker context must be provided as the first argument"
  exit 1
fi

echo "Checking docker context..."
docker context inspect "$1" 1> /dev/null # ignore stdout

# Export secrets
. "${SCRIPT_DIR}"/set-secrets.sh

# Change dir to docker-compose config location.
cd "${SCRIPT_DIR}/.." || exit 1

echo "Building server..."
docker-compose build server

echo "Pushing server..."
docker-compose push server

echo "Pulling server on $1..."
docker-compose -c "$1" -f docker-compose.yml -f docker-compose.prod.yml pull server

echo "Stopping server on $1..."
docker-compose -c "$1" -f docker-compose.yml -f docker-compose.prod.yml stop server

echo "Up server on $1..."
docker-compose -c "$1" -f docker-compose.yml -f docker-compose.prod.yml up -d server
