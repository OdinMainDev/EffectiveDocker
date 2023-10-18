CREATE TABLE "bots" (
    "id" bigserial,
    "name" varchar(20),
    "full_name" varchar(70),
    "username" varchar(50),
    "email" varchar(50),
    "currency" varchar(10),
    "casino_id" int,
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)