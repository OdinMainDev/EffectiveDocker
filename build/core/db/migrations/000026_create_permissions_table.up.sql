CREATE TABLE "permissions" (
    "id" bigserial,
    "name" varchar(255),
    PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "idx_permissions_name" ON "permissions" ("name");