import { c as create_ssr_component, b as add_attribute, e as escape, a as each } from './ssr-f419b600.js';

const Icon = "/_app/immutable/assets/placeholder.abe13e4d.jpg";
const LeftBarImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { name } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="col-md-4"><div class="sticky-leads-sidebar"><div class="lead-details-offcanvas bg-soft scrollbar phoenix-offcanvas phoenix-offcanvas-fixed"><div class="card mb-3"><div class="card-body"><div class="row align-items-center g-3 text-center text-xxl-start"><div class="col-12 col-xxl-auto"><div class="avatar avatar-5xl"><img class="rounded-circle"${add_attribute("src", image ? image : Icon, 0)}${add_attribute("alt", name, 0)}></div></div> <div class="col-12 col-sm-auto flex-1"><h3 class="fw-bolder mb-2">${escape(name)}</h3></div></div></div></div> ${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const RightBarTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tabs } = $$props;
  let { tab_id } = $$props;
  if (!tab_id) {
    tab_id = "pageFormTabId";
  }
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.tab_id === void 0 && $$bindings.tab_id && tab_id !== void 0)
    $$bindings.tab_id(tab_id);
  return `<div class="col-md-8"><div class="container"><ul class="nav nav-underline"${add_attribute("id", tab_id, 0)} role="tablist">${each(tabs, (tab, i) => {
    return `<li class="nav-item"><a class="${["nav-link", i === 0 ? "active" : ""].join(" ").trim()}" id="${escape(tab_id, true) + "-" + escape(i, true) + "-tab"}" data-bs-toggle="tab" href="${"#tab-" + escape(tab_id, true) + "-" + escape(i, true)}" role="tab" aria-controls="${"tab-" + escape(tab_id, true) + "-" + escape(i, true)}"${add_attribute("aria-selected", i === 0 ? "true" : "false", 0)}>${escape(tab)}</a> </li>`;
  })}</ul> <div class="tab-content mt-3" id="${escape(tab_id, true) + "Content"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});

export { LeftBarImage as L, RightBarTab as R };
//# sourceMappingURL=RightBarTab-38437685.js.map
