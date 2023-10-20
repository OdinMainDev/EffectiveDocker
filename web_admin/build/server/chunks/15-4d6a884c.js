import { a as api_url } from './app-be9291da.js';
import { r as redirect } from './index-0087e825.js';
import { p as parseErrors } from './form-973bd8f4.js';
import 'toastr';
import './i18n-10a00f9f.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-1976d7d5.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/games/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/15.8ed051f0.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.a0957723.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/uploader.cd71c370.js","_app/immutable/chunks/app.ecd095d2.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/switch.692baf7c.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/RightBarTab.695598d6.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/TabContent.aad917b4.js","_app/immutable/chunks/select.dfe3bbeb.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-4d6a884c.js.map
