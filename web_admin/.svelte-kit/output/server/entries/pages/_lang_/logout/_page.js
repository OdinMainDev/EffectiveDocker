import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ cookies }) => {
  cookies.set("auth_token", "", {
    path: "/",
    expires: /* @__PURE__ */ new Date(0)
  });
  throw redirect(303, "/");
};
const actions = {
  default({ cookies }) {
    cookies.set("auth_token", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
