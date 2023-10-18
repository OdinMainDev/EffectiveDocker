CREATE TABLE "sliders" (
    "id" bigserial,
    "url" varchar(255),
    "casino_id" int,
    "position" int,
    "is_enabled" boolean,
    "data" jsonb,
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)