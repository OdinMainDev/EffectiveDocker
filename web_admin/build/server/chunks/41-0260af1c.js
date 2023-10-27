import { a as api_url } from './app-184eec4c.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-be9e8f60.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-57966412.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-1deafd6d.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/general/+page.server.js";
const imports = ["_app/immutable/nodes/41.c0536e74.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.74240244.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.085d1f73.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/navigation.09ffbaf0.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/uploader.8192adba.js","_app/immutable/chunks/app.0a87c767.js","_app/immutable/chunks/text.b6a0f3fb.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/form.aa1bee2a.js","_app/immutable/chunks/Header.d967c584.js","_app/immutable/chunks/RightBarTab.06d7f1f6.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/TabContent.a6a533e5.js","_app/immutable/chunks/Repeater.fe25be89.js","_app/immutable/chunks/combobox.5c55b7af.js","_app/immutable/chunks/select.bfa7b0c5.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/uploader.62e55eb0.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=41-0260af1c.js.map
