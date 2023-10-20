import { s as simpleForm } from './form-84b725c8.js';
import './index-0087e825.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';
import './app-97010622.js';

const actions = {
  default: async ({ cookies, request }) => {
    return await simpleForm(
      cookies.get("auth_token"),
      "api/dev/users/add",
      await request.formData(),
      ["email", "password"]
    );
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b7f3e751.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/users/add/+page.server.js";
const imports = ["_app/immutable/nodes/17.518150c4.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.10df2e92.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f2d38154.js","_app/immutable/chunks/paths.4927d571.js","_app/immutable/chunks/navigation.503dba62.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/form.0317e850.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-813d61ee.js.map
