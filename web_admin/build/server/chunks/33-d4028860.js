import { a as api_url } from './app-184eec4c.js';
import { r as redirect } from './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-be9e8f60.js';
import 'toastr';
import './i18n-57966412.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/plugins/email");
  let email = await fetch(
    api_url + "api/email/templates/get/" + params.id,
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
  return {
    email: email.data,
    languages: languages.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/email/templates/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/plugins/email");
      }
      return;
    }
    let response = await fetch(
      api_url + "api/email/templates/process",
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
      throw redirect(303, "/plugins/email/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "subject", "language", "template"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 33;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9b6f825c.js')).default;
const server_id = "src/routes/[lang]/(protected)/plugins/email/edit/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/33.01545d8e.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.74240244.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.085d1f73.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/navigation.09ffbaf0.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/text.b6a0f3fb.js","_app/immutable/chunks/form.aa1bee2a.js","_app/immutable/chunks/select.bfa7b0c5.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/Email.5e7b3eed.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=33-d4028860.js.map
