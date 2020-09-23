#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  echo "Data dump file must be provided as the first argument"
  exit 1
fi

CONTAINER=$(docker ps -q -f volume=heltin_postgres-data)
DUMP_NAME="$1"

if [ -z "$CONTAINER" ]; then
  echo "No matching container found, is it running?"
  exit 1
fi

echo "Copying dump to $CONTAINER..."
docker cp "$DUMP_NAME" "$CONTAINER:$DUMP_NAME"

# clean the container regardless of the outcome
set +e
echo "Restoring..."
docker exec "$CONTAINER" \
  psql -U postgres --single-transaction -v ON_ERROR_STOP=1 \
  -d heltin -f "$DUMP_NAME"

echo "Cleaning the container..."
docker exec "$CONTAINER" rm "$DUMP_NAME"
