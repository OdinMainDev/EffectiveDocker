# Health Checks Documentation

## Overview

All services in the Docker Compose setup now have comprehensive health checks configured. Health checks help Docker monitor the status of containers and enable proper dependency management.

## Health Check Configuration

Each service has the following health check parameters:

- **interval**: How often to run the check (default: 30s)
- **timeout**: How long to wait for a response (default: 10s)
- **retries**: Number of consecutive failures before marking as unhealthy (default: 3)
- **start_period**: Time to wait before first check (varies by service)

## Service Health Checks

### Application Services

#### esapp (Main Application)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:10600/health"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
```
- **Endpoint**: `http://localhost:10600/health`
- **Note**: Application must implement `/health` endpoint

#### nginx (Web Server)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:80/"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 10s
```
- **Endpoint**: `http://localhost:80/`
- **Note**: Checks if nginx is responding to HTTP requests

### Data Services

#### redis (Cache)
```yaml
healthcheck:
  test: ["CMD", "redis-cli", "ping"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 10s
```
- **Command**: `redis-cli ping`
- **Expected Response**: `PONG`

#### rabbitmq (Message Queue)
```yaml
healthcheck:
  test: ["CMD", "rabbitmq-diagnostics", "ping"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 30s
```
- **Command**: `rabbitmq-diagnostics ping`
- **Note**: Longer start period due to RabbitMQ initialization time

### Monitoring Services

#### grafana (Visualization)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/api/health"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 30s
```
- **Endpoint**: `http://localhost:3000/api/health`
- **Note**: Uses Grafana's built-in health API

#### victoriametrics (Metrics Database)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8428/health"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 20s
```
- **Endpoint**: `http://localhost:8428/health`

#### vmagent (Metrics Collector)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8429/health"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 20s
```
- **Endpoint**: `http://localhost:8429/health`

#### vmalert (Alerting)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8880/health"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 20s
```
- **Endpoint**: `http://localhost:8880/health`

#### alertmanager (Alert Management)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:9093/-/healthy"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 20s
```
- **Endpoint**: `http://localhost:9093/-/healthy`

### Utility Services

#### clamav (Antivirus)
```yaml
healthcheck:
  test: ["CMD", "clamdtop", "-c", "1"]
  interval: 60s
  timeout: 30s
  retries: 3
  start_period: 120s
```
- **Command**: `clamdtop -c 1`
- **Note**: Longer intervals due to resource-intensive nature

#### otel-collector (Telemetry)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:13133/"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 20s
```
- **Endpoint**: `http://localhost:13133/`
- **Note**: Uses collector's health check endpoint

#### tempo (Tracing)
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3200/ready"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 30s
```
- **Endpoint**: `http://localhost:3200/ready`

### Exporter Services

#### nginx-prometheus-exporter
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:9113/metrics"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 10s
```
- **Endpoint**: `http://localhost:9113/metrics`

#### redis_exporter
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:9121/metrics"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 10s
```
- **Endpoint**: `http://localhost:9121/metrics`

## Health Check Commands

### Check Container Health Status
```bash
# Check all container health
docker ps --format "table {{.Names}}\t{{.Status}}"

# Check specific container
docker inspect <container_name> | grep -A 20 "Health"

# Follow health check logs
docker logs <container_name> -f
```

### Manual Health Check Testing
```bash
# Test esapp health
curl -f http://localhost:10600/health

# Test nginx health
curl -f http://localhost:80/

# Test redis health
docker exec esredis redis-cli ping

# Test rabbitmq health
docker exec esrabbitmq rabbitmq-diagnostics ping

# Test grafana health
curl -f http://localhost:3000/api/health
```

## Monitoring Health Checks

### Docker Compose Health Status
```bash
# View service health in docker-compose
docker-compose ps

# Show only unhealthy services
docker-compose ps | grep -v "Up"
```

### Automated Health Monitoring
Use the included `health-check.sh` script:

```bash
# Run health check for all services
./health-check.sh

# Check specific service
./health-check.sh esapp

# Continuous monitoring
watch -n 5 ./health-check.sh
```

## Troubleshooting

### Common Issues

1. **Service shows as unhealthy**
   - Check container logs: `docker logs <container_name>`
   - Verify service is listening on expected port
   - Check network connectivity between containers

2. **Long startup times**
   - Increase `start_period` in health check configuration
   - Check for resource constraints
   - Review container startup logs

3. **Health check timeouts**
   - Increase `timeout` value
   - Check if service is overloaded
   - Verify endpoint responds quickly

### Health Check Debugging

```bash
# Run health check command manually
docker exec <container_name> <health_check_command>

# Example: Test redis health check
docker exec esredis redis-cli ping

# Example: Test nginx health check
docker exec esnginx wget --no-verbose --tries=1 --spider http://localhost:80/
```

## Integration with Orchestration

Health checks work seamlessly with:

- **Docker Swarm**: Services marked as unhealthy are restarted
- **Kubernetes**: Can be converted to readiness/liveness probes
- **Load Balancers**: Can use health endpoints for routing decisions
- **Monitoring Systems**: Can alert on unhealthy containers

## Best Practices

1. **Implement Application Health Endpoints**
   - Return JSON with service status
   - Include dependency checks (database, external APIs)
   - Keep checks lightweight and fast

2. **Configure Appropriate Intervals**
   - Critical services: 10-30 seconds
   - Resource-intensive services: 60+ seconds
   - Adjust based on service characteristics

3. **Set Realistic Timeouts**
   - Consider network latency
   - Account for service load
   - Don't set too aggressive timeouts

4. **Monitor Health Check Performance**
   - Track health check success rates
   - Monitor response times
   - Set up alerts for failing checks

## Application Health Endpoint Implementation

For the main application (esapp), implement a health endpoint that checks:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z",
  "checks": {
    "database": "healthy",
    "redis": "healthy",
    "rabbitmq": "healthy",
    "external_apis": "healthy"
  }
}
```

This comprehensive health check system ensures high availability and quick detection of issues across all services.