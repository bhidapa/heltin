#!/bin/bash
set -e

SCRIPT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $SCRIPT_DIR

POSTGRES_USER=${1:-postgres} \
POSTGRES_DB=heltin \
../../heltin-postgres/init.sh
