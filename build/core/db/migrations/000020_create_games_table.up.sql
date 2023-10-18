CREATE TABLE "games" (
    "id" bigserial,
    "name" varchar(255),
    "system_name" varchar(255),
    "system_id" varchar(255),
    "api_name" varchar(255),
    "game_provider" varchar(255),
    "has_freerounds" boolean,
    "desktop_enabled" boolean,
    "mobile_enabled" boolean,
    "image" varchar(255),
    "created_at" bigint,
    "updated_at" bigint,
    PRIMARY KEY ("id")
)