import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape } from './ssr-b90e13c7.js';
import { p as page } from './stores-3dd3b3d1.js';
import { e as t2 } from './i18n-10a00f9f.js';
import './index2-3dbd9eb2.js';

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
//# sourceMappingURL=_error.svelte-a2a68b59.js.map
