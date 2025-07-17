#!/bin/sh

echo "=== Installing OpenSSL ==="
apk update && apk add --no-cache openssl

TARGET_PATH="/certbot/live"

echo "=== Generating cert for domain API ==="
mkdir -p ${TARGET_PATH}/api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -subj "/CN=api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com" \
  -keyout ${TARGET_PATH}/api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/privkey.pem \
  -out ${TARGET_PATH}/api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem

echo "=== Generating cert for domain CAPI ==="
mkdir -p ${TARGET_PATH}/capi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -subj "/CN=capi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com" \
  -keyout ${TARGET_PATH}/capi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/privkey.pem \
  -out ${TARGET_PATH}/capi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem

echo "=== Generating cert for domain GAPI ==="
mkdir -p ${TARGET_PATH}/gapi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -subj "/CN=gapi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com" \
  -keyout ${TARGET_PATH}/gapi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/privkey.pem \
  -out ${TARGET_PATH}/gapi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem

echo "=== Generating cert for domain GAPI ==="
mkdir -p ${TARGET_PATH}/aff-api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -subj "/CN=aff-api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com" \
  -keyout ${TARGET_PATH}/aff-api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/privkey.pem \
  -out ${TARGET_PATH}/aff-api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem

echo "=== Generating cert for domain GAPI ==="
mkdir -p ${TARGET_PATH}/metrics${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -subj "/CN=metrics${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com" \
  -keyout ${TARGET_PATH}/metrics${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/privkey.pem \
  -out ${TARGET_PATH}/metrics${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem

cp ${TARGET_PATH}/api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem \
   ${TARGET_PATH}/api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/chain.pem

cp ${TARGET_PATH}/capi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem \
   ${TARGET_PATH}/capi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/chain.pem

cp ${TARGET_PATH}/gapi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem \
   ${TARGET_PATH}/gapi${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/chain.pem

cp ${TARGET_PATH}/aff-api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem \
   ${TARGET_PATH}/aff-api${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/chain.pem

cp ${TARGET_PATH}/metrics${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/fullchain.pem \
   ${TARGET_PATH}/metrics${SERVER_TYPE}${DOMAIN_VERSION}.effective-solution.com/chain.pem

echo "=== DONE ==="
find ${TARGET_PATH}