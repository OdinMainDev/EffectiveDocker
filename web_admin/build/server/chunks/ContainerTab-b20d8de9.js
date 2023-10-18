import { c as create_ssr_component, b as add_attribute, a as each, e as escape } from './ssr-f419b600.js';

const ContainerTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tabs } = $$props;
  let { tab_id } = $$props;
  if (!tab_id) {
    tab_id = "pageFormTabId";
  }
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.tab_id === void 0 && $$bindings.tab_id && tab_id !== void 0)
    $$bindings.tab_id(tab_id);
  return `<div class="col-md-12"><div class="container"><ul class="nav nav-underline"${add_attribute("id", tab_id, 0)} role="tablist">${each(tabs, (tab, i) => {
    return `<li class="nav-item"><a class="${["nav-link", i === 0 ? "active" : ""].join(" ").trim()}" id="${escape(tab_id, true) + "-" + escape(i, true) + "-tab"}" data-bs-toggle="tab" href="${"#tab-" + escape(tab_id, true) + "-" + escape(i, true)}" role="tab" aria-controls="${"tab-" + escape(tab_id, true) + "-" + escape(i, true)}"${add_attribute("aria-selected", i === 0 ? "true" : "false", 0)}>${escape(tab)}</a> </li>`;
  })}</ul> <div class="tab-content mt-3" id="${escape(tab_id, true) + "Content"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});

export { ContainerTab as C };
//# sourceMappingURL=ContainerTab-b20d8de9.js.map
