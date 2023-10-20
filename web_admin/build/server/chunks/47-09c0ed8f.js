import { r as redirect } from './index-0087e825.js';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 47;
const server_id = "src/routes/[lang]/logout/+page.server.js";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=47-09c0ed8f.js.map
