import { a as api_url } from "../../../../../../../../chunks/app.js";
import { r as redirect } from "../../../../../../../../chunks/index.js";
import { p as parseErrors } from "../../../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  let currency = await fetch(
    api_url + "api/dev/currencies/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    currency: currency.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    jsonData.minor_units = parseInt(jsonData.minor_units);
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/dev/currencies/delete", {
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
        throw redirect(303, "/dev/currencies/list");
      }
      return;
    }
    let response = await fetch(
      api_url + "api/dev/currencies/process",
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
      throw redirect(303, "/dev/currencies/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "title", "code_alpha", "minor_units"]);
  }
};
export {
  actions,
  load
};
