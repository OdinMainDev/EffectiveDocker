import { s as simpleForm } from './form-d2286952.js';
import './index-a4865dbd.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';
import './app-ac238baf.js';

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

const index = 34;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fa2f02d7.js')).default;
const server_id = "src/routes/[lang]/(protected)/profile/+page.server.js";
const imports = ["_app/immutable/nodes/34.f1fb6af6.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.ab1ee0ba.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.47621342.js","_app/immutable/chunks/paths.fbeec06d.js","_app/immutable/chunks/navigation.3ae0ce1a.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.94b6fbc1.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=34-e77fb76d.js.map
