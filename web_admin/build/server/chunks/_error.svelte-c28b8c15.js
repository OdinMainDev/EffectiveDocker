import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape } from './ssr-f419b600.js';
import { p as page } from './stores-0db64f9a.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  const { status } = $page;
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<main class="main" id="top"><div class="content"><div class="d-flex flex-center content-min-h"><div class="text-center py-9"><h1 class="text-800 fw-normal mb-5">${escape($t("errors.error_title", { status }))}.</h1></div></div></div></main>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-c28b8c15.js.map
