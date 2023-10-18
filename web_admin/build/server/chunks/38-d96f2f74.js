import { a as api_url } from './app-ac238baf.js';
import './index-a4865dbd.js';
import { f as formDataToJson, p as parseErrors } from './form-d2286952.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/finances",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    settings: settings.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    jsonData.withdraw_immediately = jsonData.withdraw_immediately === "on";
    jsonData.data_same_as_profile = jsonData.data_same_as_profile === "on";
    let response = await fetch(
      api_url + "api/settings/finances",
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

const index = 38;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4e75a1bc.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/finances/+page.server.js";
const imports = ["_app/immutable/nodes/38.776efad4.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.ab1ee0ba.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.47621342.js","_app/immutable/chunks/paths.fbeec06d.js","_app/immutable/chunks/navigation.3ae0ce1a.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/switch.a8140a1a.js","_app/immutable/chunks/form.94b6fbc1.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/ContainerTab.54051f07.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/TabContent.4f055fc5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=38-d96f2f74.js.map
