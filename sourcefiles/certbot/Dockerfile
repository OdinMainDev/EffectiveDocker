FROM certbot/certbot:latest

COPY ./certbot/local.sh /certbot/local.sh
RUN chmod +x /certbot/local.sh
COPY ./certbot/generate.sh /certbot/generate.sh
RUN chmod +x /certbot/generate.sh
COPY ./certbot/production.sh /certbot/production.sh
RUN chmod +x /certbot/production.sh
# RUN if [ ${CONFIG_TYPE} = "generate" ]; then \
#       certonly --webroot -w /var/www/certbot --force-renewal --email support@effective-solution.tech -d effective-solution.tech --agree-tos; \
#   fi
