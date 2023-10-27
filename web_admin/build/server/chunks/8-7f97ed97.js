import { a as api_url } from './app-184eec4c.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-be9e8f60.js';
import 'toastr';
import './i18n-57966412.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/casino/events/list");
  let event = await fetch(
    api_url + "api/casino/events/get/" + params.id,
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
  let emails = await fetch(
    api_url + "api/get/email/templates",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let events = await fetch(
    api_url + "api/get/casino/events?trigger=1",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    event: event.data,
    languages: languages.data,
    countries: countries.data,
    currencies: currencies.data,
    emails: emails.data,
    events: events.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/casino/events/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/casino/events/list");
      }
      return;
    }
    jsonData.enable = jsonData.enable === "on";
    jsonData.reuse = jsonData.reuse === "on";
    let params = [
      "email_contains",
      "phone_contains",
      "username_contains",
      "active_currency",
      "has_currency",
      "has_currencies",
      "last_language",
      "last_country",
      "register_country",
      "register_type",
      "has_verifications",
      "methods_personal_add_verifications",
      "methods_personal_remove_verifications",
      "pusher_notifications"
    ];
    params.forEach((element) => {
      if (!jsonData[element]) {
        jsonData[element] = [];
      }
      if (typeof jsonData[element] === "string" || jsonData[element] instanceof String) {
        jsonData[element] = [jsonData[element]];
      }
    });
    jsonData.notifications = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 13) != "notifications") {
        continue;
      }
      if (key == "notifications") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.notifications[array[0][1]]) {
        jsonData.notifications[array[0][1]] = {};
      }
      if (array[1][1] == "email") {
        jsonData.notifications[array[0][1]][array[1][1]] = parseInt(value);
      } else {
        jsonData.notifications[array[0][1]][array[1][1]] = value;
      }
      delete jsonData[key];
    }
    jsonData.methods_after = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 13) != "methods_after") {
        continue;
      }
      if (key == "methods_after") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.methods_after[array[0][1]]) {
        jsonData.methods_after[array[0][1]] = {};
      }
      if (array[1][1] == "time_count" || array[1][1] == "time_type") {
        jsonData.methods_after[array[0][1]][array[1][1]] = parseInt(value);
      } else {
        if (!value) {
          jsonData.methods_after[array[0][1]][array[1][1]] = [];
          continue;
        }
        let value2 = value;
        if (typeof value2 === "string" || value instanceof String) {
          value2 = [value2];
        }
        value2.forEach((el2, key2) => {
          value2[key2] = parseInt(el2);
        });
        console.log(value2);
        jsonData.methods_after[array[0][1]][array[1][1]] = value2;
      }
      delete jsonData[key];
    }
    jsonData.methods_after2 = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 14) != "methods_after2") {
        continue;
      }
      if (key == "methods_after2") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.methods_after2[array[0][1]]) {
        jsonData.methods_after2[array[0][1]] = {};
      }
      if (array[1][1] == "time_count" || array[1][1] == "time_type") {
        jsonData.methods_after2[array[0][1]][array[1][1]] = parseInt(value);
      } else {
        if (!value) {
          jsonData.methods_after2[array[0][1]][array[1][1]] = [];
          continue;
        }
        let value2 = value;
        if (typeof value2 === "string" || value instanceof String) {
          value2 = [value2];
        }
        value2.forEach((el2, key2) => {
          value2[key2] = parseInt(el2);
        });
        console.log(value2);
        jsonData.methods_after2[array[0][1]][array[1][1]] = value2;
      }
      delete jsonData[key];
    }
    let paramsToInt = ["trigger", "register_date_from_count", "register_date_from_type", "methods_personal_ban_count", "methods_personal_ban_type"];
    paramsToInt.forEach((element) => {
      jsonData[element] = parseInt(jsonData[element]);
    });
    let paramsDateToInt = ["register_date_from", "register_date_to"];
    paramsDateToInt.forEach((element) => {
      if (!jsonData[element]) {
        jsonData[element] = 0;
        return;
      }
      jsonData[element] = Math.floor(new Date(jsonData[element]).getTime() / 1e3);
    });
    let paramsDateToIntArr = ["user_ids"];
    paramsDateToIntArr.forEach((element) => {
      if (!jsonData[element]) {
        jsonData[element] = [];
        return;
      }
      if (typeof jsonData[element] === "string" || jsonData[element] instanceof String) {
        jsonData[element] = [jsonData[element]];
      }
      jsonData[element].forEach((el2, key2) => {
        jsonData[element][key2] = parseInt(el2);
      });
    });
    let response = await fetch(
      api_url + "api/casino/events/process",
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
    console.log(JSON.stringify(jsonData));
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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7561c43e.js')).default;
const server_id = "src/routes/[lang]/(protected)/casino/events/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/8.478d7ac4.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.74240244.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.085d1f73.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/navigation.09ffbaf0.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/form.aa1bee2a.js","_app/immutable/chunks/Header.d967c584.js","_app/immutable/chunks/ContainerTab.4534ecfe.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/text.b6a0f3fb.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/TabContent.a6a533e5.js","_app/immutable/chunks/select.bfa7b0c5.js","_app/immutable/chunks/app.0a87c767.js","_app/immutable/chunks/currency.fd334ab5.js","_app/immutable/chunks/email_template.f0dad0c4.js","_app/immutable/chunks/Repeater.fe25be89.js"];
const stylesheets = ["_app/immutable/assets/8.4e8a9448.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-7f97ed97.js.map
