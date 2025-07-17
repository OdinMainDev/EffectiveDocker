#!/bin/bash

run_stage() {
  docker compose -f docker-compose-prod.yml -f docker-compose-stage.yml up -d $1
}

run_prod() {
  docker compose -f docker-compose-prod.yml up -d $1
}

environment=$1
command=$2

if [ "$environment" != "prod" ] && [ "$environment" != "stage" ] && [ "$environment" != "dev" ]; then
  echo "Надо указать тип окружения: prod, stage или dev."
  exit
fi

echo "Проект Effective Solution"
echo "Тип окружения $environment"

if [ "$command" = "generate" ]; then
  echo "Генерация ssl сертификатов"
  if [ "$environment" = "stage" ]; then
    export SERVER_TYPE=-stage
    export DOMAIN_VERSION=-v2
    docker compose -f docker-compose-generate.yml up --abort-on-container-exit
  fi
  if [ "$environment" = "prod" ]; then
    docker compose -f docker-compose-generate.yml up --abort-on-container-exit
  fi
  docker exec -it esnginx nginx -s reload
  exit
fi

if [ "$command" = "stop" ]; then
  echo "Остановка сервера"
  docker compose -f docker-compose-common.yml down
  exit
fi

if [ "$command" = "update" ]; then
  echo "Обновление сервера"
  if [ "$environment" = "stage" ]; then
    run_stage '--no-deps esapp'
  fi
  if [ "$environment" = "prod" ]; then
    run_prod '--no-deps esapp'
  fi
  exit
fi

echo "Запуск"

if [ "$environment" = "prod" ]; then
  run_prod
elif [ "$environment" = "stage" ]; then
  run_stage
else
  docker compose -f docker-compose-dev.yml up -d
fi
