import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../../../chunks/ssr.js";
import { c as t } from "../../../../../../chunks/i18n.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1dwt15s_START -->${$$result.title = `<title>Casino-Home</title>`, ""}<!-- HEAD_svelte-1dwt15s_END -->`, ""} <div class="content"><div class="row g-3 mb-4"><div class="col-auto"><h2 class="mb-0">${escape($t("common.Bonuses"))} / ${escape($t("common.Statistics"))}</h2></div></div></div>`;
});
export {
  Page as default
};
