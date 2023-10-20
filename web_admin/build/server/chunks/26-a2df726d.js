import { a as api_url } from './app-be9291da.js';
import { r as redirect } from './index-0087e825.js';
import { p as parseErrors } from './form-973bd8f4.js';
import 'toastr';
import './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-79174c4c.js')).default;
const server_id = "src/routes/[lang]/(protected)/games/categories/sort/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/26.821962bc.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/button.a0957723.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/form.0317e850.js","_app/immutable/chunks/Header.3f7441e2.js","_app/immutable/chunks/sortable.esm.c592a60a.js"];
const stylesheets = ["_app/immutable/assets/26.f18c888d.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=26-a2df726d.js.map
