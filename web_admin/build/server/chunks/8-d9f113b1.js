import { a as api_url } from './app-97010622.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-84b725c8.js';
import 'toastr';
import './i18n-10a00f9f.js';
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
  return {
    event: event.data,
    languages: languages.data,
    countries: countries.data,
    currencies: currencies.data,
    emails: emails.data
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
    let params = ["email_contains", "phone_contains", "username_contains", "active_currency", "has_currency", "has_currencies", "last_language", "last_country", "register_country", "register_type", "has_verifications"];
    params.forEach((element) => {
      if (!jsonData[element]) {
        jsonData[element] = [];
      }
      if (typeof jsonData[element] === "string" || jsonData[element] instanceof String) {
        jsonData[element] = [jsonData[element]];
      }
    });
    let paramsToInt = ["trigger", "register_date_from_count", "register_date_from_type"];
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
const component = async () => component_cache ??= (await import('./_page.svelte-55884938.js')).default;
const server_id = "src/routes/[lang]/(protected)/casino/events/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/8.093515ef.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.10df2e92.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f2d38154.js","_app/immutable/chunks/paths.4927d571.js","_app/immutable/chunks/navigation.503dba62.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/ContainerTab.682c64d6.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/switch.692baf7c.js","_app/immutable/chunks/TabContent.aad917b4.js","_app/immutable/chunks/select.dfe3bbeb.js","_app/immutable/chunks/app.5ddedf9c.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/8.4e8a9448.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-d9f113b1.js.map
