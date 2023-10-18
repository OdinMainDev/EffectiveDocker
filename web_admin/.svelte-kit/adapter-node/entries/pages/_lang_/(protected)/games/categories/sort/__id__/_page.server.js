import { a as api_url } from "../../../../../../../../chunks/app.js";
import { r as redirect } from "../../../../../../../../chunks/index.js";
import { p as parseErrors } from "../../../../../../../../chunks/form.js";
async function load({ cookies, params }) {
  if (!params.id || params.id == 0)
    return redirect("/games/categories/list");
  let category = await fetch(
    api_url + "api/games/categories/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  if (!category.success)
    return redirect("/games/categories/list");
  return {
    category: category.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    jsonData.category_id = parseInt(jsonData.category_id);
    if (jsonData.game_ids.length > 0) {
      jsonData.game_ids = jsonData.game_ids.split(",");
    } else {
      jsonData.game_ids = [];
    }
    jsonData.game_ids.forEach((element, idx) => {
      jsonData.game_ids[idx] = parseInt(element);
    });
    let response = await fetch(
      api_url + "api/games/categories/sort",
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
    console.log(response);
    if (response.success) {
      throw redirect(303, "/games/categories/sort/" + jsonData.category_id.toString());
    }
    return parseErrors(null, response?.errors, []);
  }
};
export {
  actions,
  load
};
