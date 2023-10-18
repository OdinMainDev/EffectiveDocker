FROM golang:latest
WORKDIR "/application"


RUN apt-get update; \
    apt-get upgrade -yqq; \
    pecl -q channel-update pecl.php.net; \
    apt-get install -yqq --no-install-recommends --show-progress \
          supervisor

RUN apt update; \
    apt install curl -y; \
    apt install -y nodejs

RUN apt install npm -y

RUN npm install pm2 -g

# RUN pm2 start /web_admin/index.js

RUN mkdir -p /var/log/supervisor

CMD ["/usr/bin/supervisord"]
# CMD ["node", "/web_admin/index.js"]
# CMD ["pm2-runtime", "/web_admin/index.js"]
EXPOSE 10600
EXPOSE 3000