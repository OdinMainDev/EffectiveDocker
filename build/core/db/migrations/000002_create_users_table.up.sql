CREATE TABLE "users" (
    "id" bigserial,
    "username" varchar(255),
    "email" varchar(255),
    "phone" varchar(255),
    "banned" boolean,
    "casino_id" int,
    "password" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
)