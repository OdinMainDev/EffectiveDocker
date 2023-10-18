CREATE TABLE "user_roles" (
    "id" bigserial,
    "user_id" bigint,
    "role_id" bigint,
    PRIMARY KEY ("id"),
    CONSTRAINT "fk_users_user_role" FOREIGN KEY ("user_id") REFERENCES "users"("id")
);

CREATE INDEX IF NOT EXISTS "idx_user_roles_role_id" ON "user_roles" ("role_id");

CREATE INDEX IF NOT EXISTS "idx_user_roles_user_id" ON "user_roles" ("user_id");