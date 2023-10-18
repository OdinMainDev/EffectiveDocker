import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';

const EmailMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="col-lg-auto"><div class="email-sidebar email-sidebar-width bg-soft phoenix-offcanvas phoenix-offcanvas-fixed" id="emailSidebarColumn"><div class="email-content scrollbar-overlay"><ul class="nav flex-column border-top fs--1 vertical-nav mb-4"><li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom text-start outline-none" aria-current="page" href="/plugins/email"><div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-inbox"></span> <span class="flex-1">${escape($t("common.templates list"))}</span></div></a></li> <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom text-start outline-none" aria-current="page" href="/plugins/email/edit/0"><div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-location-arrow"></span> <span class="flex-1">${escape($t("common.create new"))}</span></div></a></li> <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom text-start outline-none" aria-current="page" href="#todo"><div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-inbox"></span> <span class="flex-1">${escape($t("common.sended emails"))}</span></div></a></li></ul></div></div> <div class="phoenix-offcanvas-backdrop d-lg-none" data-phoenix-backdrop="data-phoenix-backdrop" style="top: 0;"></div></div>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="row gx-lg-6 gx-3 py-4 z-index-2 position-sticky bg-soft email-header"><div class="col-auto"><a class="btn btn-primary email-sidebar-width d-none d-lg-block" href="#todo">${escape($t("common.send email"))}</a> <button class="btn px-3 btn-phoenix-secondary text-700 d-lg-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#emailSidebarColumn" data-svelte-h="svelte-8xc9p2"><span class="fa-solid fa-bars"></span></button></div> <div class="col-auto d-lg-none"><a class="btn btn-primary px-3 px-sm-4" href="#todo"><span class="d-none d-sm-inline-block">${escape($t("common.send email"))}</span> <span class="d-sm-none fas fa-plus"></span></a></div></div> <div class="row g-lg-6 mb-8">${validate_component(EmailMenu, "EmailMenu").$$render($$result, {}, {}, {})} <div class="col-lg">${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { Email as E };
//# sourceMappingURL=Email-47057eed.js.map
