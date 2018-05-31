#!/bin/bash

###
# Vue.jsの開発環境を止めるScript
###

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${SCRIPT_DIR}"

echo 'RUN docker-compose stop'
docker-compose stop
