CREATE TABLE "log_apis" (
    "id" bigserial,
    "casino_id" int,
    "action" varchar(255),
    "url" varchar(255),
    "request" text,
    "response" text,
    "created_at" bigint,
    PRIMARY KEY ("id")
)