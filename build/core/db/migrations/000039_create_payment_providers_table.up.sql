CREATE TABLE "payment_providers" (
    "id" bigserial,
    "name" varchar(255),
    "api_name" varchar(255),
    "casino_id" int,
    "is_enabled" boolean,
    "currency" varchar(255),
    "data" jsonb,
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)