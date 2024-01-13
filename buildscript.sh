#!/bin/bash
#
docker logout
docker login

docker-compose down
docker build --no-cache -t mintos:latest .
docker tag mintos:latest ansism/mintos:latest
docker push ansism/mintos:latest
docker-compose up


