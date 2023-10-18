CREATE TABLE "currencies" (
    "id" bigserial,
    "title" varchar(255),
    "code_alpha" varchar(255),
    "minor_units" bigint,
    "deleted_at" timestamptz,
    PRIMARY KEY ("id")
)