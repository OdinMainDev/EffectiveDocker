import { s as simpleForm } from './form-d2286952.js';
import './index-a4865dbd.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';
import './app-ac238baf.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-a36105ab.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/games/list/+page.server.js";
const imports = ["_app/immutable/nodes/14.2c17229b.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/dayjs.d81eb1d6.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.7e9e08f5.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.bfb6d3bd.js","_app/immutable/chunks/paths.6d30d7da.js","_app/immutable/chunks/navigation.350e8abc.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/app.4c0b1b8d.js"];
const stylesheets = ["_app/immutable/assets/12.799788b5.css","_app/immutable/assets/dayjs.247d27c8.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-4d6e1ea1.js.map
