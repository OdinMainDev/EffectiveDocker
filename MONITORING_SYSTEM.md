# Comprehensive Monitoring System

## Overview

Полная система мониторинга для Effective Solution включает:
- **Централизованное логирование** с Loki и Promtail
- **Distributed tracing** с Jaeger
- **Детальные алерты** с VictoriaMetrics и VMAlert
- **Telegram уведомления** с двумя уровнями (полные и ограниченные)
- **Health check мониторинг** с автоматическими уведомлениями
- **Запись логов приложения** в централизованную систему

## Архитектура системы

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Application   │───▶│   Logging       │───▶│   Alerting      │
│   (esapp)       │    │   (Loki)        │    │   (VMAlert)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Tracing       │    │   Visualization │    │   Notifications │
│   (Jaeger)      │    │   (Grafana)     │    │   (Telegram)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Компоненты системы

### 1. Централизованное логирование

#### Loki (Log Aggregation)
- **Порт**: 3100
- **Функция**: Централизованное хранение логов
- **Конфигурация**: `sourcefiles/loki/loki.yaml`
- **Интеграция**: Grafana для визуализации логов

#### Promtail (Log Collector)
- **Порт**: 9080
- **Функция**: Сбор логов из контейнеров
- **Конфигурация**: `sourcefiles/promtail/promtail.yaml`
- **Источники**: 
  - Логи контейнеров Docker
  - Логи приложения esapp
  - Логи nginx
  - Системные логи

#### Fluentd (Log Processor)
- **Порт**: 24224
- **Функция**: Обработка и маршрутизация логов
- **Конфигурация**: `sourcefiles/fluentd/fluent.conf`
- **Форматы**: JSON, multiline, nginx access logs

### 2. Distributed Tracing

#### Jaeger (All-in-One)
- **Порт UI**: 16686
- **Порт Collector**: 14268
- **Функция**: Трассировка запросов между сервисами
- **Интеграция**: OpenTelemetry Collector

#### Jaeger Collector
- **Порт OTLP**: 4317 (gRPC), 4318 (HTTP)
- **Функция**: Сбор трейсов от приложений
- **Конфигурация**: `sourcefiles/jaeger/jaeger.yaml`

### 3. Расширенные алерты

#### Группы алертов:
1. **application.alerts** - Алерты приложения
   - ApplicationDown
   - ApplicationHighMemory
   - ApplicationHighCPU
   - ApplicationSlowResponse

2. **infrastructure.alerts** - Алерты инфраструктуры
   - RedisDown, RedisMemoryHigh
   - RabbitMQDown, RabbitMQQueueHigh
   - DiskSpaceHigh

3. **monitoring.alerts** - Алерты мониторинга
   - GrafanaDown
   - VictoriaMetricsDown
   - LokiDown
   - JaegerDown

4. **health.alerts** - Алерты здоровья
   - ServiceHealthCheckFailed
   - ServiceRestarted

### 4. Telegram уведомления

#### Двухуровневая система:

**Уровень 1: Ограниченные уведомления** (по умолчанию)
- Только критические события
- Падение сервисов
- Восстановление сервисов

**Уровень 2: Полные уведомления**
- Регулярные отчеты о состоянии
- Все алерты
- Детальная статистика

#### Конфигурация:
```yaml
HEALTH_CHECK_FULL_NOTIFICATIONS=false  # ограниченные
HEALTH_CHECK_FULL_NOTIFICATIONS=true   # полные
```

#### Типы уведомлений:
- 🚨 **Critical Alerts** - немедленные уведомления
- ⚠️ **Warning Alerts** - предупреждения
- 🔥 **Application Alerts** - специфичные для приложения
- ✅ **Recovery Notifications** - восстановление сервисов
- 📊 **Status Reports** - регулярные отчеты (только в полном режиме)

### 5. Health Check мониторинг

#### Telegram Bot функционал:
- Автоматическая проверка здоровья сервисов
- Уведомления о падении/восстановлении
- Интеграция с AlertManager
- Поддержка двух режимов уведомлений

#### Мониторинг сервисов:
- **Критические**: esapp, nginx, redis, rabbitmq
- **Некритические**: grafana, victoriametrics, loki, jaeger

## Настройка и запуск

### 1. Конфигурация Telegram Bot

1. Создайте бота в Telegram через @BotFather
2. Получите токен бота и chat ID
3. Добавьте в `.env`:
```bash
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
HEALTH_CHECK_FULL_NOTIFICATIONS=false
```

### 2. Запуск системы

```bash
# Запуск с мониторингом
./run.sh prod

# Запуск stage окружения
./run.sh stage

# Запуск dev окружения
./run.sh dev
```

### 3. Доступ к интерфейсам

- **Grafana**: http://localhost:3000
- **Jaeger UI**: http://localhost:16686
- **Loki**: http://localhost:3100
- **VictoriaMetrics**: http://localhost:8428
- **AlertManager**: http://localhost:9093

## Логирование приложения

### Конфигурация в приложении esapp:

```javascript
// Пример логирования с метаданными
const logger = require('your-logger');

logger.info('Application started', {
  service: 'esapp',
  version: process.env.APP_VERSION,
  environment: process.env.NODE_ENV
});

logger.error('Database connection failed', {
  service: 'esapp',
  component: 'database',
  error: error.message
});
```

### Структура логов:
- **Timestamp**: ISO 8601 format
- **Level**: info, warn, error, debug
- **Message**: Human readable message
- **Service**: esapp, nginx, redis, etc.
- **Component**: database, auth, api, etc.
- **Metadata**: Additional context

## Alerting Rules

### Критические алерты (немедленные):
- Падение основных сервисов
- Недоступность приложения
- Критические ошибки

### Предупреждения (в течение 5 минут):
- Высокое использование ресурсов
- Медленные ответы
- Очереди сообщений

### Информационные (в течение часа):
- Падение некритических сервисов
- Перезапуски контейнеров

## Мониторинг производительности

### Метрики приложения:
- Response time (95th percentile)
- Request rate
- Error rate
- Memory usage
- CPU usage

### Метрики инфраструктуры:
- Redis connections
- RabbitMQ queue size
- Database connections
- Disk space usage

## Troubleshooting

### Проверка состояния сервисов:
```bash
# Статус всех контейнеров
docker ps --format "table {{.Names}}\t{{.Status}}"

# Логи конкретного сервиса
docker logs loki -f

# Проверка здоровья
curl http://localhost:3100/ready
```

### Общие проблемы:

1. **Loki не запускается**
   - Проверьте права доступа к директории данных
   - Убедитесь что порт 3100 свободен

2. **Telegram bot не отправляет уведомления**
   - Проверьте токен бота и chat ID
   - Убедитесь что бот добавлен в чат

3. **Jaeger не показывает трейсы**
   - Проверьте конфигурацию OpenTelemetry в приложении
   - Убедитесь что порты 4317/4318 доступны

## Масштабирование

### Для production:
- Используйте внешний Loki cluster
- Настройте Jaeger с внешним хранилищем
- Добавьте load balancer для алертов
- Настройте backup для метрик

### Рекомендации:
- Ротация логов каждые 30 дней
- Сжатие старых метрик
- Мониторинг размера хранилища
- Регулярные бэкапы конфигураций

## Безопасность

### Рекомендации:
- Используйте HTTPS для всех веб-интерфейсов
- Ограничьте доступ к портам мониторинга
- Регулярно обновляйте образы
- Используйте секреты для чувствительных данных

Эта система обеспечивает полный мониторинг и наблюдаемость для вашего приложения с автоматическими уведомлениями и детальной диагностикой проблем.