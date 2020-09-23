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

echo "Building containers..."
docker-compose build

echo "Pushing containers..."
docker-compose push

echo "Setting docker context..."
export DOCKER_CONTEXT=$1

echo "Pulling containers..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull

echo "Down..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

echo "Up..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
