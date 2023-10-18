import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-f419b600.js';

/* empty css                                      */const css = {
  code: ".form-check-input.svelte-xou7rq.svelte-xou7rq{clear:left}.form-switch.form-switch-md.svelte-xou7rq.svelte-xou7rq{margin-bottom:1rem}.form-switch.form-switch-md.svelte-xou7rq .form-check-input.svelte-xou7rq{height:1.5rem;width:calc(2rem + 0.75rem);border-radius:3rem}.form-switch.form-switch-md.svelte-xou7rq .form-check-label.svelte-xou7rq{align-items:center}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label } = $$props;
  let { checked } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css);
  return `<div class="form-check form-switch form-switch-md svelte-xou7rq"><input class="form-check-input svelte-xou7rq" type="checkbox" id="${"flexSwitchCheckChecked-" + escape(name, true)}"${add_attribute("name", name, 0)}${add_attribute("checked", checked, 1)}> <label class="form-check-label align-bottom ms-2 svelte-xou7rq" for="${"flexSwitchCheckChecked-" + escape(name, true)}">${escape(label)}</label> </div>`;
});

export { Switch as S };
//# sourceMappingURL=switch-f2dcd47f.js.map
