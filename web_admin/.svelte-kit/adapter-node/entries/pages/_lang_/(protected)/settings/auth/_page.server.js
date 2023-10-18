import { a as api_url } from "../../../../../../chunks/app.js";
import "../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../chunks/form.js";
import { s as splitOrEmpty } from "../../../../../../chunks/array.js";
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
export {
  actions,
  load
};
