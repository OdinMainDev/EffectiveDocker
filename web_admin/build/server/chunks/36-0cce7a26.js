import { s as simpleForm } from './form-973bd8f4.js';
import './index-0087e825.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';
import './app-be9291da.js';

const actions = {
  default: async ({ cookies, request }) => {
    return await simpleForm(
      cookies.get("auth_token"),
      "api/admin/profile",
      await request.formData(),
      ["oldpassword", "password", "repassword"]
    );
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 36;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b4ed7a82.js')).default;
const server_id = "src/routes/[lang]/(protected)/profile/+page.server.js";
const imports = ["_app/immutable/nodes/36.fe00ba81.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.a0957723.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/form.0317e850.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=36-0cce7a26.js.map
