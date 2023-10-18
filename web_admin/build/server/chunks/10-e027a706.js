import { a as api_url } from './app-ac238baf.js';
import { r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-d2286952.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a67112b2.js')).default;
const server_id = "src/routes/[lang]/(protected)/dev/casinos/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/10.a66b5e07.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.7e9e08f5.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.bfb6d3bd.js","_app/immutable/chunks/paths.6d30d7da.js","_app/immutable/chunks/navigation.350e8abc.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/uploader.92c9ca64.js","_app/immutable/chunks/app.4c0b1b8d.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/switch.a8140a1a.js","_app/immutable/chunks/combobox.2e6380e6.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/form.94b6fbc1.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/combobox.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-e027a706.js.map
