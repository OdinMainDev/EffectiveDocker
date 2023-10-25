import { a as api_url } from './app-effdffe5.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-939eda5c.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-3e25f381.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/games/providers/list");
  let provider = await fetch(
    api_url + "api/games/providers/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let languages = await fetch(
    api_url + "api/get/languages/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let countries = await fetch(
    api_url + "api/get/countries/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let games = await fetch(
    api_url + "api/get/games",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let gameProviders = await fetch(
    api_url + "api/get/games/providers",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    provider: provider.data,
    languages: languages.data,
    countries: countries.data,
    games: games.data,
    gameProviders: gameProviders.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/games/providers/delete/" + toString(jsonData.id), {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer: ${cookies.get("auth_token")}`
        }
      }).then((r) => r.json()).catch((error) => {
        console.log(error);
      });
      if (response2.success) {
        throw redirect(303, "/games/providers/list");
      }
      return;
    }
    jsonData.position = parseInt(jsonData.position);
    jsonData.enable = jsonData.enable === "on";
    jsonData.game_providers = splitOrEmpty(jsonData.game_providers, ",");
    jsonData.game_ids = splitOrEmpty(jsonData.game_ids, ",");
    jsonData.blocked_countries = splitOrEmpty(jsonData.blocked_countries, ",");
    jsonData.allowed_countries = splitOrEmpty(jsonData.allowed_countries, ",");
    jsonData.game_ids.forEach((element, idx) => {
      jsonData.game_ids[idx] = parseInt(element);
    });
    let response = await fetch(
      api_url + "api/games/providers/process",
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
      throw redirect(303, "/games/providers/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "image", "enable", "url", "position", "blocked_countries", "allowed_countries", "game_ids", "game_providers"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e9049b03.js')).default;
const server_id = "src/routes/[lang]/(protected)/games/providers/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/29.ae957976.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.9b2f9ea2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.3acf299b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.955c2af0.js","_app/immutable/chunks/paths.8cd3128c.js","_app/immutable/chunks/navigation.7943187f.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/uploader.50f6d23c.js","_app/immutable/chunks/app.bfcb1f96.js","_app/immutable/chunks/text.05200ca3.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/form.4c716e7a.js","_app/immutable/chunks/Header.282c3d9a.js","_app/immutable/chunks/RightBarTab.06d7f1f6.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/TabContent.a6a533e5.js","_app/immutable/chunks/Repeater.5884dd0e.js","_app/immutable/chunks/combobox.2c657af8.js","_app/immutable/chunks/select.01687984.js","_app/immutable/chunks/games.39ab7c7a.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=29-492116fa.js.map
