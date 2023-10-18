import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1enh0dv_START -->${$$result.title = `<title>Casino-Home</title>`, ""}<!-- HEAD_svelte-1enh0dv_END -->`, ""} <div class="content"><div class="row g-3 mb-4"><div class="col-auto"><h2 class="mb-0">${escape($t("common.dashboard"))}</h2></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-46898605.js.map
