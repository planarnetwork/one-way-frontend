#!/usr/bin/env bash

wget https://s3.eu-west-2.amazonaws.com/feeds.planar.network/gb-rail-latest.zip -O ./data/output.zip
docker pull planarnetwork/one-way-api
docker run -p 8008:8080 --env-file .env -v ${PWD}/data:/usr/src/data planarnetwork/one-way-api
