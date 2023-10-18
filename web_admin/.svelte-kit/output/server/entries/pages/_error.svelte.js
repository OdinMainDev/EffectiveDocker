import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { c as t } from "../../chunks/i18n.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const { status } = $page;
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<main class="main" id="top"><div class="content"><div class="d-flex flex-center content-min-h"><div class="text-center py-9"><h1 class="text-800 fw-normal mb-5">${escape($t("errors.error_title", { status }))}.</h1></div></div></div></main>`;
});
export {
  Error as default
};
