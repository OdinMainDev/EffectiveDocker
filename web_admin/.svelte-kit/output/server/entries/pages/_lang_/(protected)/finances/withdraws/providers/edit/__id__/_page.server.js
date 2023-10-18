import { a as api_url } from "../../../../../../../../../chunks/app.js";
import { r as redirect } from "../../../../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../../../../chunks/form.js";
import { s as splitOrEmpty } from "../../../../../../../../../chunks/array.js";
async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/finances/withdraws/providers/list");
  let provider = await fetch(
    api_url + "api/withdraws/providers/get/" + params.id,
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
  let countries = await fetch(
    api_url + "api/get/countries/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let currencies = await fetch(
    api_url + "api/get/casino_currencies/",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let withdrawProviders = await fetch(
    api_url + "api/get/withdraw/providers",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    provider: provider.data,
    languages: languages.data,
    countries: countries.data,
    currencies: currencies.data,
    withdrawProviders: withdrawProviders.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    if (jsonData.id !== void 0) {
      jsonData.id = parseInt(jsonData.id);
    }
    if (jsonData.delete !== void 0) {
      let response2 = await fetch(api_url + "api/withdraws/providers/delete/" + toString(jsonData.id), {
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
        throw redirect(303, "/finances/withdraws/providers/list");
      }
      return;
    }
    jsonData.enable = jsonData.enable === "on";
    jsonData.fee_percent = parseFloat(jsonData.fee_percent);
    jsonData.fee_fixed = parseFloat(jsonData.fee_fixed);
    jsonData.limit_minimum = parseFloat(jsonData.limit_minimum);
    jsonData.limit_maximum = parseFloat(jsonData.limit_maximum);
    jsonData.minimum_transactions = parseInt(jsonData.minimum_transactions);
    jsonData.maximum_transactions = parseInt(jsonData.maximum_transactions);
    jsonData.auto_withdraw = jsonData.auto_withdraw === "on";
    jsonData.compencate_commission = jsonData.compencate_commission === "on";
    jsonData.verifications = splitOrEmpty(jsonData.verifications, ",");
    jsonData.blocked_countries = splitOrEmpty(jsonData.blocked_countries, ",");
    jsonData.allowed_countries = splitOrEmpty(jsonData.allowed_countries, ",");
    jsonData.texts = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 5) != "texts") {
        continue;
      }
      if (key == "texts") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.texts[array[0][1]]) {
        jsonData.texts[array[0][1]] = {};
      }
      jsonData.texts[array[0][1]][array[1][1]] = value;
      delete jsonData[key];
    }
    console.log(JSON.stringify(jsonData));
    let response = await fetch(
      api_url + "api/withdraws/providers/process",
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
      throw redirect(303, "/finances/withdraws/providers/edit/" + response.data.id);
    }
    return parseErrors(null, response?.errors, ["name", "image", "enable", "currency", "api_name", "fee_percent", "fee_fixed", "game_ids", "without_bonus_wager", "api_key", "api_password", "api_currency", "limit_minimum", "limit_maximum", "minimum_transactions", "maximum_transactions", "verifications", "blocked_countries", "allowed_countries", "language", "key", "value", "button"]);
  }
};
export {
  actions,
  load
};
