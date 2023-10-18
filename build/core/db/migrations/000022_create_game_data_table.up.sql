CREATE TABLE "game_data" (
    "id" bigserial,
    "name" varchar(255),
    "game_id" bigint,
    "casino_id" int,
    "has_freerounds" boolean,
    "desktop_enabled" boolean,
    "mobile_enabled" boolean,
    "image" varchar(255),
    "meta" varchar(255),
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id"),
    CONSTRAINT "fk_games_game_data" FOREIGN KEY ("game_id") REFERENCES "games"("id")
)