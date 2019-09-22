#!/usr/bin/env bash

DOTENV=$(cd -P -- "$(dirname -- "${0}")/.." && pwd -P)/.env

[ -f "${DOTENV}" ] && source "${DOTENV}"
