CREATE TABLE "game_apis" (
    "id" bigserial,
    "name" varchar(255),
    "api_name" varchar(255),
    "casino_id" int,
    "is_enabled" boolean,
    "external_id" varchar(255),
    "external_key" varchar(255),
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)