#!/bin/bash

docker run -p 8080:8080 -v `pwd`:/usr/src/app -t -i node:4.2.2-onbuild /bin/bash
