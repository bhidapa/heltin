#!/usr/bin/env bash
set -e

CONTAINER=$(docker ps -q -f volume=heltin_postgres-data)
DUMP_NAME=postgres_data_dump_$(date +%d-%m-%Y-%H-%M-%S).sql

if [ -z "$CONTAINER" ]; then
  echo "No matching container found, is it running?"
  exit 1
fi

echo "Dumping from $CONTAINER..."
docker exec "$CONTAINER" \
  pg_dump --verbose -U postgres --data-only -d heltin -f "$DUMP_NAME"

echo "Copying..."
docker cp "$CONTAINER:$DUMP_NAME" .

echo "Cleaning the container..."
docker exec "$CONTAINER" rm "$DUMP_NAME"

echo "Prepending the truncate statements..."
docker exec "$CONTAINER" \
  psql -U postgres --single-transaction -v ON_ERROR_STOP=1 \
  -d heltin -c "COPY (
    SELECT 'TRUNCATE ' || input_table_name || ' CASCADE;' AS truncate_query
    FROM (SELECT table_schema || '.' || table_name AS input_table_name
      FROM information_schema.tables
      WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
      AND table_schema NOT LIKE 'pg_toast%'
      AND is_insertable_into::boolean) AS information
  ) TO STDOUT;" | cat - "$DUMP_NAME" > "locked_$DUMP_NAME" && mv "locked_$DUMP_NAME" "$DUMP_NAME"

echo "Prepending the session replication role..."
echo -e "SET LOCAL session_replication_role TO replica;\n" | cat - "$DUMP_NAME" > "locked_$DUMP_NAME" && mv "locked_$DUMP_NAME" "$DUMP_NAME"
