import { a as api_url } from "../../../../../../chunks/app.js";
import "../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/apis",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let sms_providers = await fetch(
    api_url + "api/get/sms-providers/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let converter_provider = await fetch(
    api_url + "api/get/convert-currency-providers/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    settings: settings.data,
    sms_providers: sms_providers.data,
    converter_provider: converter_provider.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    let response = await fetch(
      api_url + "api/settings/apis",
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
export {
  actions,
  load
};
