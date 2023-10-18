import { a as api_url } from './app-a6748f59.js';
import { r as redirect } from './index-a4865dbd.js';
import { p as parseErrors } from './form-9b8c9ad5.js';
import 'toastr';
import './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

async function load({ cookies, params }) {
  if (!params.id || params.id == 0)
    return redirect("/games/providers/list");
  let provider = await fetch(
    api_url + "api/games/providers/get/" + params.id,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer: ${cookies.get("auth_token")}`
      }
    }
  ).then((r) => r.json());
  if (!provider.success)
    return redirect("/games/providers/list");
  return {
    provider: provider.data
  };
}
const actions = {
  default: async ({ cookies, event, request }) => {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());
    jsonData.provider_id = parseInt(jsonData.provider_id);
    if (jsonData.game_ids.length > 0) {
      jsonData.game_ids = jsonData.game_ids.split(",");
    } else {
      jsonData.game_ids = [];
    }
    jsonData.game_ids.forEach((element, idx) => {
      jsonData.game_ids[idx] = parseInt(element);
    });
    let response = await fetch(
      api_url + "api/games/providers/sort",
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
      throw redirect(303, "/games/providers/sort/" + jsonData.provider_id.toString());
    }
    return parseErrors(null, response?.errors, []);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1f1a57f5.js')).default;
const server_id = "src/routes/[lang]/(protected)/games/providers/sort/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/29.a9720d99.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.c7c749a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/form.565aad05.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/sortable.esm.c592a60a.js"];
const stylesheets = ["_app/immutable/assets/24.f18c888d.css","_app/immutable/assets/button.1f082a22.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=29-2fbbf9eb.js.map
