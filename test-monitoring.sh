#!/bin/bash

# Test script for monitoring system
# Usage: ./test-monitoring.sh

echo "🔍 Testing Effective Solution Monitoring System"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to test service
test_service() {
    local service_name=$1
    local url=$2
    local expected_status=${3:-200}
    
    echo -n "Testing $service_name... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ "$response" -eq "$expected_status" ]; then
        echo -e "${GREEN}✅ OK${NC}"
        return 0
    else
        echo -e "${RED}❌ FAILED (HTTP $response)${NC}"
        return 1
    fi
}

# Function to test docker service
test_docker_service() {
    local service_name=$1
    
    echo -n "Testing Docker service $service_name... "
    
    if docker ps --format "{{.Names}}" | grep -q "^$service_name$"; then
        status=$(docker inspect --format='{{.State.Health.Status}}' "$service_name" 2>/dev/null)
        if [ "$status" = "healthy" ] || [ "$status" = "" ]; then
            echo -e "${GREEN}✅ OK${NC}"
            return 0
        else
            echo -e "${YELLOW}⚠️ UNHEALTHY${NC}"
            return 1
        fi
    else
        echo -e "${RED}❌ NOT RUNNING${NC}"
        return 1
    fi
}

echo ""
echo "🔄 Testing Core Application Services"
echo "-----------------------------------"

test_docker_service "esapp"
test_service "nginx" "http://localhost:80/" 200
test_service "redis" "http://localhost:6379/" 000  # Redis doesn't respond to HTTP
test_docker_service "esrabbitmq"

echo ""
echo "📊 Testing Monitoring Services"
echo "-----------------------------"

test_service "VictoriaMetrics" "http://localhost:8428/health" 200
test_service "Grafana" "http://localhost:3000/api/health" 200
test_service "AlertManager" "http://localhost:9093/-/healthy" 200
test_service "VMAlert" "http://localhost:8880/health" 200

echo ""
echo "📋 Testing Logging Services"
echo "-------------------------"

test_service "Loki" "http://localhost:3100/ready" 200
test_docker_service "promtail"
test_docker_service "fluentd"

echo ""
echo "🔍 Testing Tracing Services"
echo "-------------------------"

test_service "Jaeger UI" "http://localhost:16686/" 200
test_docker_service "jaeger"
test_docker_service "jaeger-collector"

echo ""
echo "🤖 Testing Notification Services"
echo "------------------------------"

test_docker_service "telegram-bot"

echo ""
echo "🔧 Testing Exporters"
echo "------------------"

test_service "Nginx Exporter" "http://localhost:9113/metrics" 200
test_service "Redis Exporter" "http://localhost:9121/metrics" 200

echo ""
echo "📈 Testing Metrics Collection"
echo "----------------------------"

# Test if metrics are being collected
metrics_count=$(curl -s "http://localhost:8428/api/v1/label/__name__/values" 2>/dev/null | jq '.data | length' 2>/dev/null)

if [ "$metrics_count" ] && [ "$metrics_count" -gt 0 ]; then
    echo -e "Metrics collection: ${GREEN}✅ OK ($metrics_count metrics)${NC}"
else
    echo -e "Metrics collection: ${RED}❌ FAILED${NC}"
fi

echo ""
echo "🚨 Testing Alerting"
echo "----------------"

# Test if alerting rules are loaded
rules_count=$(curl -s "http://localhost:8880/api/v1/rules" 2>/dev/null | jq '.data.groups | length' 2>/dev/null)

if [ "$rules_count" ] && [ "$rules_count" -gt 0 ]; then
    echo -e "Alert rules: ${GREEN}✅ OK ($rules_count rule groups)${NC}"
else
    echo -e "Alert rules: ${RED}❌ FAILED${NC}"
fi

echo ""
echo "📊 System Overview"
echo "================="

# Container health summary
echo "Container Health Status:"
docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "(esapp|nginx|redis|rabbitmq|grafana|loki|jaeger|telegram-bot)"

echo ""
echo "Storage Usage:"
docker system df

echo ""
echo "🔗 Access URLs"
echo "============="
echo "Grafana:        http://localhost:3000"
echo "Jaeger:         http://localhost:16686"
echo "AlertManager:   http://localhost:9093"
echo "VictoriaMetrics: http://localhost:8428"
echo "Loki:           http://localhost:3100"

echo ""
echo "🎯 Quick Actions"
echo "==============="
echo "View logs:      docker logs <service_name> -f"
echo "Check health:   docker inspect <service_name> | grep Health"
echo "Restart service: docker restart <service_name>"
echo "View metrics:   curl http://localhost:8428/api/v1/label/__name__/values"

echo ""
echo "✅ Monitoring system test completed!"
echo "Check the output above for any failed services."