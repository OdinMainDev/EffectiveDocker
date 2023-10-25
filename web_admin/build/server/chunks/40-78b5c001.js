import { a as api_url } from './app-effdffe5.js';
import './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-939eda5c.js';
import 'toastr';
import './i18n-3e25f381.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

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

const index = 40;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-344cf8f7.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/finances/+page.server.js";
const imports = ["_app/immutable/nodes/40.c1ab1062.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.9b2f9ea2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.3acf299b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.955c2af0.js","_app/immutable/chunks/paths.8cd3128c.js","_app/immutable/chunks/navigation.7943187f.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/form.4c716e7a.js","_app/immutable/chunks/Header.282c3d9a.js","_app/immutable/chunks/ContainerTab.4534ecfe.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/TabContent.a6a533e5.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=40-78b5c001.js.map
