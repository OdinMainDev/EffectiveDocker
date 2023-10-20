import { a as api_url } from './app-be9291da.js';
import './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-973bd8f4.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/verification",
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
    settings: settings.data,
    emails: emails.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    jsonData.documents_multiple = jsonData.documents_multiple === "on";
    jsonData.email_templates = splitOrEmpty(jsonData.email_templates, ",");
    jsonData.email_templates.forEach((element, idx) => {
      jsonData.email_templates[idx] = parseInt(element);
    });
    let response = await fetch(
      api_url + "api/settings/verification",
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

const index = 43;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-272235e7.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/verification/+page.server.js";
const imports = ["_app/immutable/nodes/43.8874322d.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.a0957723.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/switch.692baf7c.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/ContainerTab.682c64d6.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/TabContent.aad917b4.js","_app/immutable/chunks/email_template.f0dad0c4.js","_app/immutable/chunks/combobox.b5e33c6b.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=43-9e0eee93.js.map
