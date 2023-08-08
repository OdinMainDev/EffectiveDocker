FROM golang:latest
WORKDIR "/application"
LABEL maintainer="Vioriel"


RUN apt-get update; \
    apt-get upgrade -yqq; \
    pecl -q channel-update pecl.php.net; \
    apt-get install -yqq --no-install-recommends --show-progress \
          supervisor


RUN mkdir -p /var/log/supervisor
CMD ["/usr/bin/supervisord"]
EXPOSE 9000