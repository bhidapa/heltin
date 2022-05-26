#!/usr/bin/env bash
set -eux

echo $"[global]
start-fast=y
repo1-retention-full=15
repo1-path=$PGBACKREST_REPO_PATH

[global:archive-push]
compress-level=3

[heltin]
pg1-path=/var/lib/postgresql/data
" > "$PGBACKREST_CONFIG_PATH/pgbackrest.conf"

pgbackrest --stanza=heltin --log-level-console=info stanza-create
pgbackrest --stanza=heltin --log-level-console=info check
pgbackrest --stanza=heltin --log-level-console=info --type=full backup
