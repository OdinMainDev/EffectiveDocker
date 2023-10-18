CREATE TABLE "roles" (
    "id" bigserial,
    "name" varchar(255),
    "casino_id" int,
    "creator_id" bigint,
    "created_at" bigint,
    "updated_at" bigint,
    PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "idx_roles_casino_id" ON "roles" ("casino_id");

CREATE UNIQUE INDEX IF NOT EXISTS "idx_roles_name" ON "roles" ("name");

CREATE INDEX IF NOT EXISTS "idx_roles_creator_id" ON "roles" ("creator_id");