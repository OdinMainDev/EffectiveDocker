import { s as simpleForm } from './form-be9e8f60.js';
import './index-0087e825.js';
import 'toastr';
import './i18n-57966412.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';
import './app-184eec4c.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-84586aa1.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/currencies/list/+page.server.js";
const imports = ["_app/immutable/nodes/14.7233be7c.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/dayjs.fd3264a3.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/app.0a87c767.js"];
const stylesheets = ["_app/immutable/assets/9.799788b5.css","_app/immutable/assets/dayjs.247d27c8.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-f03b4660.js.map
