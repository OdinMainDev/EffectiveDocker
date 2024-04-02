# EffectiveDocker
Docker for effective solution projects

Перед сборкой не забываем положить .env в sourcefiles/app/!

After install add crontab worker
> 0 5 1 */2 *  /usr/bin/docker compose up -f /var/docker/docker-compose.yml certbot
