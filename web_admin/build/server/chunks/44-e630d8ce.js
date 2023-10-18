import { a as api_url } from './app-ac238baf.js';
import { f as fail, r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-d2286952.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-3c3b8125.js')).default;
const server_id = "src/routes/[lang]/login/[key]/+page.server.js";
const imports = ["_app/immutable/nodes/44.46b007e8.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.ab1ee0ba.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.47621342.js","_app/immutable/chunks/paths.fbeec06d.js","_app/immutable/chunks/navigation.3ae0ce1a.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.94b6fbc1.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=44-e630d8ce.js.map
