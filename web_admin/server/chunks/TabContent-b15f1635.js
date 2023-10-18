import { c as create_ssr_component, e as escape } from './ssr-f419b600.js';

const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { tab_id } = $$props;
  if (!tab_id) {
    tab_id = "pageFormTabId";
  }
  if (!id) {
    id = 1;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.tab_id === void 0 && $$bindings.tab_id && tab_id !== void 0)
    $$bindings.tab_id(tab_id);
  return `<div class="${["tab-pane fade", (id === 1 ? "show" : "") + " " + (id === 1 ? "active" : "")].join(" ").trim()}" id="${"tab-" + escape(tab_id, true) + "-" + escape(id - 1, true)}" role="tabpanel" aria-labelledby="${escape(tab_id, true) + "-" + escape(id - 1, true) + "-tab"}">${slots.default ? slots.default({}) : ``}</div>`;
});

export { TabContent as T };
//# sourceMappingURL=TabContent-b15f1635.js.map
