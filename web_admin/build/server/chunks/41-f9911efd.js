import { a as api_url } from './app-97010622.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-84b725c8.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/general",
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
  let currencies = await fetch(
    api_url + "api/get/casino_currencies/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let categories = await fetch(
    api_url + "api/get/games/categories",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  if (!categories.data || categories.data.length == 0) {
    throw redirect(300, "/dashboard");
  }
  return {
    settings: settings.data,
    languages: languages.data,
    countries: countries.data,
    currencies: currencies.data,
    categories: categories.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    jsonData.enable = jsonData.enable === "on";
    jsonData.category_on_home = parseInt(jsonData.category_on_home);
    jsonData.wager_break = jsonData.wager_break === "on";
    jsonData.wager_apply_bonus_games = jsonData.wager_apply_bonus_games === "on";
    jsonData.blocked_countries = splitOrEmpty(jsonData.blocked_countries, ",");
    jsonData.allowed_countries = splitOrEmpty(jsonData.allowed_countries, ",");
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
    console.log(JSON.stringify(jsonData));
    let response = await fetch(
      api_url + "api/settings/general",
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
      return {
        message: "action success"
      };
    }
    return parseErrors(null, response?.errors, ["name", "image", "enable", "main_url", "category_on_home", "main_currency", "wager_type", "wager_break", "wager_apply_bonus_games", "blocked_countries", "allowed_countries"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 41;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b1a38d41.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/general/+page.server.js";
const imports = ["_app/immutable/nodes/41.314d1ea7.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.10df2e92.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f2d38154.js","_app/immutable/chunks/paths.4927d571.js","_app/immutable/chunks/navigation.503dba62.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/uploader.be51c816.js","_app/immutable/chunks/app.5ddedf9c.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/switch.692baf7c.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/RightBarTab.695598d6.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/TabContent.aad917b4.js","_app/immutable/chunks/Repeater.c0ec88a4.js","_app/immutable/chunks/combobox.b5e33c6b.js","_app/immutable/chunks/select.dfe3bbeb.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=41-f9911efd.js.map
