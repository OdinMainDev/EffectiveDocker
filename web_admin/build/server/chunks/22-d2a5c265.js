import { a as api_url } from './app-97010622.js';
import { r as redirect } from './index-0087e825.js';
import { p as parseErrors } from './form-84b725c8.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  let data = await fetch(
    api_url + "api/games/apis/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let api_names = await fetch(
    api_url + "api/get/game-api-providers",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    game_api: data.data,
    api_names: api_names.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    jsonData.enable = jsonData.enable === "on";
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/games/apis/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/games/apis/list");
      }
      return;
    }
    let response = await fetch(
      api_url + "api/games/apis/process",
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
      throw redirect(303, "/games/apis/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "api_name", "enable", "external_id", "external_key"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a9141f0b.js')).default;
const server_id = "src/routes/[lang]/(protected)/games/apis/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/22.d59fe4b7.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.10df2e92.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f2d38154.js","_app/immutable/chunks/paths.4927d571.js","_app/immutable/chunks/navigation.503dba62.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/text.b9d5ccdf.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/select.dfe3bbeb.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/switch.692baf7c.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=22-d2a5c265.js.map
