import { a as api_url } from "../../../../../../chunks/app.js";
import "../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../chunks/form.js";
import { s as splitOrEmpty } from "../../../../../../chunks/array.js";
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
export {
  actions,
  load
};
