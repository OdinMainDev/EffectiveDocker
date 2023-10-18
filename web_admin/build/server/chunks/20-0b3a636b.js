import { a as api_url } from './app-ac238baf.js';
import { r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-d2286952.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

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

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-aa361552.js')).default;
const server_id = "src/routes/[lang]/(protected)/games/apis/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/20.58468f3c.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.ab1ee0ba.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.47621342.js","_app/immutable/chunks/paths.fbeec06d.js","_app/immutable/chunks/navigation.3ae0ce1a.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.94b6fbc1.js","_app/immutable/chunks/select.82ce38c6.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/switch.a8140a1a.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-0b3a636b.js.map
