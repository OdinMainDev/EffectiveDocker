import { a as api_url } from "../../../../../../chunks/app.js";
import { r as redirect } from "../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../chunks/form.js";
import { s as splitOrEmpty } from "../../../../../../chunks/array.js";
async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/general",
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
  let categories = await fetch(
    api_url + "api/get/games/categories",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  if (!categories.data || categories.data.length == 0) {
    throw redirect(300, "/dashboard");
  }
  return {
    settings: settings.data,
    languages: languages.data,
    countries: countries.data,
    currencies: currencies.data,
    categories: categories.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    jsonData.enable = jsonData.enable === "on";
    jsonData.category_on_home = parseInt(jsonData.category_on_home);
    jsonData.wager_break = jsonData.wager_break === "on";
    jsonData.wager_apply_bonus_games = jsonData.wager_apply_bonus_games === "on";
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
      api_url + "api/settings/general",
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
    return parseErrors(null, response?.errors, ["name", "image", "enable", "main_url", "category_on_home", "main_currency", "wager_type", "wager_break", "wager_apply_bonus_games", "blocked_countries", "allowed_countries"]);
  }
};
export {
  actions,
  load
};
