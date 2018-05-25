#!/bin/bash

###
# Vue.jsの開発環境を立ち上げるScript
###

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${SCRIPT_DIR}"

echo 'RUN docker-compose up'
docker-compose up -d

echo ''
echo '----------------'
echo 'URL: http://localhost:8080/'
