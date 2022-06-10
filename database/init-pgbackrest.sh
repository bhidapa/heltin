#!/usr/bin/env bash
set -eux

pgbackrest --stanza=heltin --log-level-console=info stanza-create
pgbackrest --stanza=heltin --log-level-console=info check
pgbackrest --stanza=heltin --log-level-console=info --type=full backup
