import { a as api_url } from "../../../../../../chunks/app.js";
import "../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/notifications",
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
    jsonData.payments = jsonData.payments === "on";
    jsonData.withdraws = jsonData.withdraws === "on";
    jsonData.verifications = jsonData.verifications === "on";
    jsonData.bonus = jsonData.bonus === "on";
    jsonData.user_bonus = jsonData.user_bonus === "on";
    let response = await fetch(
      api_url + "api/settings/notifications",
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
