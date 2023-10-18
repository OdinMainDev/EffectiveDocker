import { a as api_url } from './app-ac238baf.js';
import { r as redirect } from './index-a4865dbd.js';
import { f as formDataToJson, p as parseErrors } from './form-d2286952.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/games/categories/list");
  let category = await fetch(
    api_url + "api/games/categories/get/" + params.id,
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
    category: category.data,
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
      let response2 = await fetch(api_url + "api/games/categories/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/games/categories/list");
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
    jsonData.texts = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 5) != "texts") {
        continue;
      }
      if (key == "texts") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.texts[array[0][1]]) {
        jsonData.texts[array[0][1]] = {};
      }
      jsonData.texts[array[0][1]][array[1][1]] = value;
      delete jsonData[key];
    }
    let response = await fetch(
      api_url + "api/games/categories/process",
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
    console.log(response);
    if (response.success) {
      if (jsonData.id) {
        return {
          message: "action success"
        };
      }
      throw redirect(303, "/games/categories/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "image", "enable", "url", "position", "blocked_countries", "allowed_countries", "game_ids", "game_providers"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-cd504d3b.js')).default;
const server_id = "src/routes/[lang]/(protected)/games/categories/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/22.69727751.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.7e9e08f5.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.bfb6d3bd.js","_app/immutable/chunks/paths.6d30d7da.js","_app/immutable/chunks/navigation.350e8abc.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/uploader.92c9ca64.js","_app/immutable/chunks/app.4c0b1b8d.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/switch.a8140a1a.js","_app/immutable/chunks/form.94b6fbc1.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/RightBarTab.78e32284.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/TabContent.4f055fc5.js","_app/immutable/chunks/Repeater.51e59292.js","_app/immutable/chunks/combobox.2e6380e6.js","_app/immutable/chunks/select.82ce38c6.js","_app/immutable/chunks/games.39ab7c7a.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/combobox.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=22-2a1b049f.js.map
