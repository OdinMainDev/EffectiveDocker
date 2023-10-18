import { a as api_url } from "../../../../../../chunks/app.js";
import "../../../../../../chunks/index.js";
import { f as formDataToJson, p as parseErrors } from "../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  let settings = await fetch(
    api_url + "api/settings/bots",
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
  return {
    settings: settings.data,
    currencies: currencies.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const jsonData = formDataToJson(await request.formData());
    jsonData.bots = [];
    for (const [key, value] of Object.entries(jsonData)) {
      if (key.slice(0, 4) != "bots") {
        continue;
      }
      if (key == "bots") {
        continue;
      }
      const regexp = /\[(.*?)\]/g;
      const array = [...key.matchAll(regexp)];
      if (!jsonData.bots[array[0][1]]) {
        jsonData.bots[array[0][1]] = {};
      }
      switch (array[1][1]) {
        case "probability":
        case "bet_from":
        case "bet_to":
          jsonData.bots[array[0][1]][array[1][1]] = parseFloat(value);
          break;
        case "intensity":
        case "intensity_tournament":
        case "intensity_lottery":
          jsonData.bots[array[0][1]][array[1][1]] = parseInt(value);
          break;
        case "multiple_bet":
          jsonData.bots[array[0][1]][array[1][1]] = value === "on";
          break;
      }
      delete jsonData[key];
    }
    let response = await fetch(
      api_url + "api/settings/bots",
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
