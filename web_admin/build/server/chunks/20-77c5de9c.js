import { a as api_url } from './app-be9291da.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-973bd8f4.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/finances/withdraws/providers/list");
  let provider = await fetch(
    api_url + "api/withdraws/providers/get/" + params.id,
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
  let withdrawProviders = await fetch(
    api_url + "api/get/withdraw/providers",
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
    currencies: currencies.data,
    withdrawProviders: withdrawProviders.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/withdraws/providers/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/finances/withdraws/providers/list");
      }
      return;
    }
    jsonData.enable = jsonData.enable === "on";
    jsonData.fee_percent = parseFloat(jsonData.fee_percent);
    jsonData.fee_fixed = parseFloat(jsonData.fee_fixed);
    jsonData.limit_minimum = parseFloat(jsonData.limit_minimum);
    jsonData.limit_maximum = parseFloat(jsonData.limit_maximum);
    jsonData.minimum_transactions = parseInt(jsonData.minimum_transactions);
    jsonData.maximum_transactions = parseInt(jsonData.maximum_transactions);
    jsonData.auto_withdraw = jsonData.auto_withdraw === "on";
    jsonData.compencate_commission = jsonData.compencate_commission === "on";
    jsonData.verifications = splitOrEmpty(jsonData.verifications, ",");
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
      api_url + "api/withdraws/providers/process",
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
      throw redirect(303, "/finances/withdraws/providers/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "image", "enable", "currency", "api_name", "fee_percent", "fee_fixed", "game_ids", "without_bonus_wager", "api_key", "api_password", "api_currency", "limit_minimum", "limit_maximum", "minimum_transactions", "maximum_transactions", "verifications", "blocked_countries", "allowed_countries", "language", "key", "value", "button"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8ea5be74.js')).default;
const server_id = "src/routes/[lang]/(protected)/finances/withdraws/providers/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/20.b7154d94.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/app.ecd095d2.js","_app/immutable/chunks/button.a0957723.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/uploader.cd71c370.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/switch.692baf7c.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/RightBarTab.695598d6.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/TabContent.aad917b4.js","_app/immutable/chunks/Repeater.c0ec88a4.js","_app/immutable/chunks/combobox.b5e33c6b.js","_app/immutable/chunks/select.dfe3bbeb.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-77c5de9c.js.map
