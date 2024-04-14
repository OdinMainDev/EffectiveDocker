#!/bin/bash

environment=$1

if [ "$environment" != "prod" ] && [ "$environment" != "stage" ] && [ "$environment" != "dev" ]; then
  echo "Надо указать тип окружения: prod, stage или dev."
  exit
fi

echo "Запуск в Docker проекта Effective Solution"
echo "Тип окружения $environment"

if [ "$environment" = "prod" ]; then
  docker compose -f docker-compose-prod.yml up -d
elif [ "$environment" = "stage" ]; then
  docker compose -f docker-compose-prod.yml -f docker-compose-stage.yml up -d
else
  docker compose -f docker-compose-dev.yml up -d
fi
