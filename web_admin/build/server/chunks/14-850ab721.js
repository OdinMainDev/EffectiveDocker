import { s as simpleForm } from './form-973bd8f4.js';
import './index-0087e825.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';
import './app-be9291da.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-35be0629.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/currencies/list/+page.server.js";
const imports = ["_app/immutable/nodes/14.acbf2fb8.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/dayjs.be8b20cf.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/app.ecd095d2.js"];
const stylesheets = ["_app/immutable/assets/9.799788b5.css","_app/immutable/assets/dayjs.247d27c8.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-850ab721.js.map
