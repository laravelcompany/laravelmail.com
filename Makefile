#!/bin/sh
.PHONY: build dev down ssh publish
build:
	docker image rm -f izdrail/laravelmail.com:latest && docker --debug build -t izdrail/laravelmail.com:latest --no-cache --progress=plain . --build-arg CACHEBUST=$(date +%s) 
dev:
	docker-compose -f docker-compose.yml up  --remove-orphans
down:
	docker-compose down
ssh:
	docker exec -it laravelmail.com /bin/bash
publish:
	docker push izdrail/laravelmail.com:latest
