import { a as api_url } from './app-184eec4c.js';
import { r as redirect } from './index-0087e825.js';
import { p as parseErrors } from './form-be9e8f60.js';
import 'toastr';
import './i18n-57966412.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  let currencies = await fetch(
    api_url + "api/get/all_currencies",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  currencies = currencies.data.map(function(currency) {
    return currency.code_alpha;
  });
  if (params.id) {
    let casino = await fetch(
      api_url + "api/dev/casinos/" + params.id,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer: ${cookies.get("auth_token")}`
        }
      }
    ).then((r) => r.json());
    return {
      currencies,
      casino: casino.data
    };
  } else {
    return {
      currencies,
      casino: {
        apikey: crypto.randomUUID(),
        enable: true
      }
    };
  }
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    jsonData.enable = jsonData.enable === "on";
    jsonData.currencies = jsonData.currencies.split(",");
    jsonData.languages = jsonData.languages.split(",");
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/dev/casinos/delete/" + jsonData.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer: ${cookies.get("auth_token")}`
        }
      }).then((r) => r.json()).catch((error) => {
        console.log(error);
      });
      if (response2.success) {
        throw redirect(303, "/dev/casinos/");
      }
      return;
    }
    let response = await fetch(
      api_url + "api/dev/casinos/process",
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
      throw redirect(303, "/dev/casinos/edit/" + response.id);
    }
    return parseErrors(null, response?.errors, ["name", "apikey", "enable", "image", "currencies", "languages", "email", "password"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-14b0ffa8.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/casinos/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/12.4bd63ac1.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.74240244.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.085d1f73.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/navigation.09ffbaf0.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/uploader.8192adba.js","_app/immutable/chunks/app.0a87c767.js","_app/immutable/chunks/text.b6a0f3fb.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/combobox.5c55b7af.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/form.aa1bee2a.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/uploader.62e55eb0.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-61d13abb.js.map
