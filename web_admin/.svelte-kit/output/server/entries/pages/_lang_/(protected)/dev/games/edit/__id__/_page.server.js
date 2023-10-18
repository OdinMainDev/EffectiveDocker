import { a as api_url } from "../../../../../../../../chunks/app.js";
import { r as redirect } from "../../../../../../../../chunks/index.js";
import { p as parseErrors } from "../../../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  if (!params.id)
    return redirect("/dev/games/list");
  let game = await fetch(
    api_url + "api/dev/games/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  let providers = await fetch(
    api_url + "api/dev/get/game-providers",
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  return {
    game: game.data,
    providers: providers.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    jsonData.id = parseInt(jsonData.id);
    jsonData.has_freerounds = jsonData.has_freerounds === "on";
    jsonData.desktop_enabled = jsonData.desktop_enabled === "on";
    jsonData.mobile_enabled = jsonData.mobile_enabled === "on";
    let response = await fetch(
      api_url + "api/dev/games/process",
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
      throw redirect(303, "/dev/games/edit/" + response.id);
    }
    return parseErrors(null, response?.errors, ["name", "system_name", "system_id", "image", "game_provider", "has_freerounds", "desktop_enabled", "mobile_enabled"]);
  }
};
export {
  actions,
  load
};
