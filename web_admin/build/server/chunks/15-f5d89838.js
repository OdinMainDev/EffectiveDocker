import { a as api_url } from './app-184eec4c.js';
import { r as redirect } from './index-0087e825.js';
import { p as parseErrors } from './form-be9e8f60.js';
import 'toastr';
import './i18n-57966412.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/dev/games/list");
  let game = await fetch(
    api_url + "api/dev/games/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let providers = await fetch(
    api_url + "api/dev/get/game-providers",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    game: game.data,
    providers: providers.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    jsonData.id = parseInt(jsonData.id);
    jsonData.has_freerounds = jsonData.has_freerounds === "on";
    jsonData.desktop_enabled = jsonData.desktop_enabled === "on";
    jsonData.mobile_enabled = jsonData.mobile_enabled === "on";
    let response = await fetch(
      api_url + "api/dev/games/process",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer: ${cookies.get("auth_token")}`
        },
        body: JSON.stringify(jsonData)
      }
    ).then((r) => r.json()).catch((error) => {
      console.log(error);
    });
    if (response.success) {
      if (jsonData.id) {
        return {
          message: "action success"
        };
      }
      throw redirect(303, "/dev/games/edit/" + response.id);
    }
    return parseErrors(null, response?.errors, ["name", "system_name", "system_id", "image", "game_provider", "has_freerounds", "desktop_enabled", "mobile_enabled"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8e39731d.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/games/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/15.18dfb19f.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.74240244.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.085d1f73.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/navigation.09ffbaf0.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/uploader.8192adba.js","_app/immutable/chunks/app.0a87c767.js","_app/immutable/chunks/text.b6a0f3fb.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/form.aa1bee2a.js","_app/immutable/chunks/Header.d967c584.js","_app/immutable/chunks/RightBarTab.06d7f1f6.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/TabContent.a6a533e5.js","_app/immutable/chunks/select.bfa7b0c5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/uploader.62e55eb0.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-f5d89838.js.map
