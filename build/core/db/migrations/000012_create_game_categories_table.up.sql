CREATE TABLE "game_categories" (
    "id" bigserial,
    "name" varchar(255),
    "casino_id" int,
    "is_enabled" boolean,
    "url" varchar(255),
    "meta" jsonb,
    "blocked_countries" jsonb,
    "allowed_countries" jsonb,
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)