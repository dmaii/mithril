#!/bin/bash

docker run -p 8080:8080 -v `pwd`:/usr/src/app -t -i mithril sh
