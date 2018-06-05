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
echo '下記URLから開発環境にアクセスしてください'
echo 'URL: http://0.0.0.0:8080/'
