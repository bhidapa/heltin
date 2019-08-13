#!/bin/bash

# Setup the script directory (script location) and the exec directory (executable location)
SCRIPT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
if [ ! -z "$1" ]; then
  EXEC_DIR=$(cd -P -- "$1" && pwd -P)
else
  EXEC_DIR=$SCRIPT_DIR
fi

cd $EXEC_DIR

POSTGRES_HOST=localhost \
POSTGRES_PORT=5432 \
POSTGRES_USER=postgres \
POSTGRES_DB=heltin \
POSTGRES_SCHEMAS=public \
GRAPHQL_ROUTE=/graphql \
GRAPHIQL_ROUTE=/graphiql \
JWT_POSTGRES_TYPE_IDENTIFIER=private.jwt_token \
PORT=5000 \
JWT_SECRET=a347988782164b20856e28aa2e4d63b2 \
WATCH=true \
npm start
