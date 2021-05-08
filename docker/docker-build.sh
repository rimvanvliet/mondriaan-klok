#!/usr/bin/env bash
mkdir -p ./www
cp ../index.* ./www
docker build  -t rimvanvliet/mondriaan-klok:latest .
# docker push rimvanvliet/mondriaan-klok:latest
