#!/bin/bash

environment=$1

if [ "$environment" = "generate" ]; then
  echo "Генерация ssl сертификатов"
  docker compose -f docker-compose-generate.yml up --abort-on-container-exit
  exit
fi

if [ "$environment" = "generate-stage" ]; then
  echo "Генерация ssl сертификатов"
  export SERVER_TYPE=-stage
  docker compose -f docker-compose-generate.yml up --abort-on-container-exit
  exit
fi

if [ "$environment" = "reload" ]; then
  echo "Перезагрузка nginx после генерации"
  docker compose -f docker-compose-prod.yml exec esnginx nginx -s reload
  exit
fi

if [ "$environment" = "stop" ]; then
  echo "Остановка сервера"
  docker compose -f docker-compose-common.yml down
  exit
fi

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
