import { s as simpleForm } from './form-939eda5c.js';
import './index-0087e825.js';
import 'toastr';
import './i18n-3e25f381.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';
import './app-effdffe5.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-40e4dd7b.js')).default;
const server_id = "src/routes/[lang]/(protected)/profile/+page.server.js";
const imports = ["_app/immutable/nodes/36.45821536.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.9b2f9ea2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.3acf299b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.955c2af0.js","_app/immutable/chunks/paths.8cd3128c.js","_app/immutable/chunks/navigation.7943187f.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/text.05200ca3.js","_app/immutable/chunks/form.4c716e7a.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=36-dc029a1f.js.map
