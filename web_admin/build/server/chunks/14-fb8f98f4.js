import { s as simpleForm } from './form-939eda5c.js';
import './index-0087e825.js';
import 'toastr';
import './i18n-3e25f381.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';
import './app-effdffe5.js';

const actions = {
  import: async ({ cookies, request }) => {
    return await simpleForm(
      cookies.get("auth_token"),
      "api/dev/import-games"
    );
  },
  import_images: async ({ cookies, request }) => {
    return await simpleForm(
      cookies.get("auth_token"),
      "api/dev/import-games-images"
    );
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c483add2.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/currencies/list/+page.server.js";
const imports = ["_app/immutable/nodes/14.f58dc6e6.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/dayjs.b4ce8163.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/i18n.9b2f9ea2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/paths.8cd3128c.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/app.bfcb1f96.js"];
const stylesheets = ["_app/immutable/assets/9.799788b5.css","_app/immutable/assets/dayjs.247d27c8.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-fb8f98f4.js.map
