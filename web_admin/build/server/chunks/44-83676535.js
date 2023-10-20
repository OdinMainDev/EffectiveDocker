import { a as api_url } from './app-4aa3511f.js';
import { r as redirect } from './index-0087e825.js';
import { p as parseErrors } from './form-38800316.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

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

const index = 44;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a0f7d12a.js')).default;
const server_id = "src/routes/[lang]/(protected)/users/bots/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/44.7d409758.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.2abf70a7.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d1582c97.js","_app/immutable/chunks/paths.ac76c62c.js","_app/immutable/chunks/navigation.725ec0ee.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/select.dfe3bbeb.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/currency.fd334ab5.js"];
const stylesheets = ["_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=44-83676535.js.map
