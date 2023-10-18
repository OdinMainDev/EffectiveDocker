import { a as api_url } from "../../../../../../../../chunks/app.js";
import { r as redirect } from "../../../../../../../../chunks/index.js";
import { p as parseErrors } from "../../../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  let currencies = await fetch(
    api_url + "api/get/all_currencies",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  currencies = currencies.data.map(function(currency) {
    return currency.code_alpha;
  });
  if (params.id) {
    let casino = await fetch(
      api_url + "api/dev/casinos/" + params.id,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer: ${cookies.get("auth_token")}`
        }
      }
    ).then((r) => r.json());
    return {
      currencies,
      casino: casino.data
    };
  } else {
    return {
      currencies,
      casino: {
        apikey: crypto.randomUUID(),
        enable: true
      }
    };
  }
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    jsonData.enable = jsonData.enable === "on";
    jsonData.currencies = jsonData.currencies.split(",");
    jsonData.languages = jsonData.languages.split(",");
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/dev/casinos/delete/" + jsonData.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer: ${cookies.get("auth_token")}`
        }
      }).then((r) => r.json()).catch((error) => {
        console.log(error);
      });
      if (response2.success) {
        throw redirect(303, "/dev/casinos/");
      }
      return;
    }
    let response = await fetch(
      api_url + "api/dev/casinos/process",
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
      throw redirect(303, "/dev/casinos/edit/" + response.id);
    }
    return parseErrors(null, response?.errors, ["name", "apikey", "enable", "image", "currencies", "languages", "email", "password"]);
  }
};
export {
  actions,
  load
};
