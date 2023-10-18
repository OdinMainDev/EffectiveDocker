CREATE TABLE "email_templates" (
    "id" bigserial,
    "name" varchar(255),
    "subject" varchar(255),
    "language" varchar(5),
    "casino_id" int,
    "template" text,
    "created_at" bigint,
    "updated_at" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)