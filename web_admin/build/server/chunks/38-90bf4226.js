import { a as api_url } from './app-effdffe5.js';
import './index-0087e825.js';
import { f as formDataToJson, p as parseErrors } from './form-939eda5c.js';
import { s as splitOrEmpty } from './array-ca4f25fd.js';
import 'toastr';
import './i18n-3e25f381.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/auth",
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
    jsonData.field_email = jsonData.field_email === "on";
    jsonData.field_phone = jsonData.field_phone === "on";
    jsonData.field_remember = jsonData.field_remember === "on";
    jsonData.ban_error = jsonData.ban_error === "on";
    jsonData.field_captcha = jsonData.field_captcha === "on";
    jsonData.throttle_error = jsonData.throttle_error === "on";
    jsonData.register_field_email = jsonData.register_field_email === "on";
    jsonData.register_field_indisposible = jsonData.register_field_indisposible === "on";
    jsonData.register_field_phone = jsonData.register_field_phone === "on";
    jsonData.register_field_username = jsonData.register_field_username === "on";
    jsonData.register_field_full_name = jsonData.register_field_full_name === "on";
    jsonData.register_field_city = jsonData.register_field_city === "on";
    jsonData.register_field_address = jsonData.register_field_address === "on";
    jsonData.register_field_dob = jsonData.register_field_dob === "on";
    jsonData.register_field_gender = jsonData.register_field_gender === "on";
    jsonData.register_field_promo = jsonData.register_field_promo === "on";
    jsonData.register_field_captcha = jsonData.register_field_captcha === "on";
    jsonData.register_throttle_error = jsonData.register_throttle_error === "on";
    jsonData.reset_field_email = jsonData.reset_field_email === "on";
    jsonData.reset_field_phone = jsonData.reset_field_phone === "on";
    jsonData.reset_ban_error = jsonData.reset_ban_error === "on";
    jsonData.reset_field_captcha = jsonData.reset_field_captcha === "on";
    jsonData.reset_throttle_error = jsonData.reset_throttle_error === "on";
    jsonData.throttle_count = parseInt(jsonData.throttle_count);
    jsonData.register_throttle_count = parseInt(jsonData.register_throttle_count);
    jsonData.reset_throttle_count = parseInt(jsonData.reset_throttle_count);
    jsonData.register_email = splitOrEmpty(jsonData.register_email, ",");
    jsonData.reset_email = splitOrEmpty(jsonData.reset_email, ",");
    jsonData.register_email.forEach((element, idx) => {
      jsonData.register_email[idx] = parseInt(element);
    });
    jsonData.reset_email.forEach((element, idx) => {
      jsonData.reset_email[idx] = parseInt(element);
    });
    let response = await fetch(
      api_url + "api/settings/auth",
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
const component = async () => component_cache ??= (await import('./_page.svelte-00b98e6d.js')).default;
const server_id = "src/routes/[lang]/(protected)/settings/auth/+page.server.js";
const imports = ["_app/immutable/nodes/38.a2d36f2e.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/i18n.9b2f9ea2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/button.3acf299b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.955c2af0.js","_app/immutable/chunks/paths.8cd3128c.js","_app/immutable/chunks/navigation.7943187f.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/switch.620d2f1d.js","_app/immutable/chunks/form.4c716e7a.js","_app/immutable/chunks/Header.282c3d9a.js","_app/immutable/chunks/ContainerTab.4534ecfe.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/TabContent.a6a533e5.js","_app/immutable/chunks/combobox.2c657af8.js","_app/immutable/chunks/email_template.f0dad0c4.js"];
const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css","_app/immutable/assets/Select.270a477f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=38-90bf4226.js.map
