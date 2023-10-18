import { s as simpleForm } from './form-9b8c9ad5.js';
import './index-a4865dbd.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';
import './app-a6748f59.js';

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
const imports = ["_app/immutable/nodes/34.efa18eb7.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.c7c749a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.565aad05.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=34-3fa46eee.js.map
