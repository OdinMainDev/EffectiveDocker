import { a as api_url } from './app-a6748f59.js';
import { r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-9b8c9ad5.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ac2481b1.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/games/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/13.0f808010.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.c7c749a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/uploader.7c823bfb.js","_app/immutable/chunks/app.8ed331e8.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/switch.a8140a1a.js","_app/immutable/chunks/form.565aad05.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/RightBarTab.78e32284.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/TabContent.4f055fc5.js","_app/immutable/chunks/select.82ce38c6.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-2a83ea83.js.map
