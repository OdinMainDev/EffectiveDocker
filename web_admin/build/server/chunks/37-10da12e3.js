import { a as api_url } from './app-a6748f59.js';
import './index-a4865dbd.js';
import { f as formDataToJson, p as parseErrors } from './form-9b8c9ad5.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/bots",
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
  return {
    settings: settings.data,
    currencies: currencies.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    jsonData.bots = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 4) != "bots") {
        continue;
      }
      if (key == "bots") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.bots[array[0][1]]) {
        jsonData.bots[array[0][1]] = {};
      }
      switch (array[1][1]) {
        case "probability":
        case "bet_from":
        case "bet_to":
          jsonData.bots[array[0][1]][array[1][1]] = parseFloat(value);
          break;
        case "intensity":
        case "intensity_tournament":
        case "intensity_lottery":
          jsonData.bots[array[0][1]][array[1][1]] = parseInt(value);
          break;
        case "multiple_bet":
          jsonData.bots[array[0][1]][array[1][1]] = value === "on";
          break;
      }
      delete jsonData[key];
    }
    let response = await fetch(
      api_url + "api/settings/bots",
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
    return parseErrors(null, response?.errors, [Object.keys(jsonData)]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 37;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-21e11522.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/bots/+page.server.js";
const imports = ["_app/immutable/nodes/37.353e1907.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.c7c749a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/switch.a8140a1a.js","_app/immutable/chunks/form.565aad05.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/ContainerTab.54051f07.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/TabContent.4f055fc5.js","_app/immutable/chunks/Repeater.51e59292.js","_app/immutable/chunks/select.82ce38c6.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=37-10da12e3.js.map
