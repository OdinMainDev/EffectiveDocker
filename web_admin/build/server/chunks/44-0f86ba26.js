import { a as api_url } from './app-a6748f59.js';
import { f as fail, r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-9b8c9ad5.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

const actions = {
  default: async ({ cookies, request, params }) => {
    const data = await request.formData();
    let email = data.get("email");
    let password = data.get("password");
    let key = params.key;
    if (key === null || key.length === 0) {
      return fail(400, {
        email,
        error_toast: "data_fail"
      });
    }
    const res = await fetch(api_url + "auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        api_key: key
      })
    });
    if (res.status === 429) {
      return fail(400, {
        email,
        error_toast: "blocked_requests"
      });
    }
    let json;
    try {
      json = await res.json();
    } catch (e) {
      return fail(400, {
        email,
        error_toast: "bad_response"
      });
    }
    if (json.success) {
      cookies.set("auth_token", json.token, {
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 30
      });
      throw redirect(303, "/dashboard");
    }
    return parseErrors(null, json?.errors, ["email", "password"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 44;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a0ba4472.js')).default;
const server_id = "src/routes/[lang]/login/[key]/+page.server.js";
const imports = ["_app/immutable/nodes/44.96217fc0.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.c7c749a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.565aad05.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=44-0f86ba26.js.map
