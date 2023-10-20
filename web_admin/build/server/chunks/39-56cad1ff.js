import { a as api_url } from './app-be9291da.js';
import './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-973bd8f4.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

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

const index = 39;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-324dc000.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/bots/+page.server.js";
const imports = ["_app/immutable/nodes/39.47e027e0.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.a0957723.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/switch.692baf7c.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/ContainerTab.682c64d6.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/TabContent.aad917b4.js","_app/immutable/chunks/Repeater.c0ec88a4.js","_app/immutable/chunks/select.dfe3bbeb.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=39-56cad1ff.js.map
