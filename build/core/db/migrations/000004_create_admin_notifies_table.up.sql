CREATE TABLE "admin_notifies" (
    "id" bigserial,
    "casino_id" int,
    "viewed" boolean,
    "text" text,
    "created_at" bigint,
    PRIMARY KEY ("id")
)