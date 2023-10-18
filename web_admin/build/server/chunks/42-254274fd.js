import { a as api_url } from './app-2b3d771d.js';
import { r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-d22e46e1.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

async function load({ cookies, params }) {
  let data = await fetch(
    api_url + "api/users/bots/get/" + params.id,
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
    bot: data.data,
    currencies: currencies.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    if (jsonData.count !== void 0) {
      jsonData.count = parseInt(jsonData.count);
    }
    jsonData.enable = jsonData.enable === "on";
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/users/bots/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/users/bots/list");
      }
      return;
    }
    let response = await fetch(
      api_url + "api/users/bots/process",
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
      throw redirect(303, "/users/bots/list/");
    }
    return parseErrors(null, response?.errors, ["name", "api_name", "enable", "external_id", "external_key"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 42;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a9e4a96f.js')).default;
const server_id = "src/routes/[lang]/(protected)/users/bots/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/42.ce73e143.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.dfd56485.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dafd1d08.js","_app/immutable/chunks/paths.09565203.js","_app/immutable/chunks/navigation.6ec8aef2.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.94b6fbc1.js","_app/immutable/chunks/select.82ce38c6.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=42-254274fd.js.map
