CREATE TABLE "casinos" (
    "id" bigserial,
    "name" varchar(255),
    "token" varchar(255),
    "admin_id" bigint,
    "is_enabled" boolean,
    "settings" jsonb,
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)