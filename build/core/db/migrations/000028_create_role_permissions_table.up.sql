CREATE TABLE "role_permissions" (
    "id" bigserial,
    "role_id" bigint,
    "permission_id" bigint,
    PRIMARY KEY ("id")
    -- CONSTRAINT "fk_role_permissions_permission" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id"),
    -- CONSTRAINT "fk_roles_role_permission" FOREIGN KEY ("role_id") REFERENCES "roles"("id")
);

CREATE INDEX IF NOT EXISTS "idx_role_permissions_permission_id" ON "role_permissions" ("permission_id");

CREATE INDEX IF NOT EXISTS "idx_role_permissions_role_id" ON "role_permissions" ("role_id");