#!/usr/bin/env bash

docker build . -t food2:latest

docker stop food2

docker run -v $PWD/public:/app/public -v $PWD/src/data:/app/src/data -p 3000:3000 -p 5000:5000 -d --rm --name food2 food2
