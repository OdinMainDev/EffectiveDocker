import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1enh0dv_START -->${$$result.title = `<title>Casino-Home</title>`, ""}<!-- HEAD_svelte-1enh0dv_END -->`, ""} <div class="content"><div class="row g-3 mb-4"><div class="col-auto"><h2 class="mb-0">${escape($t("common.dashboard"))}</h2></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2329fa1c.js.map
