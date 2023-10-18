import { c as create_ssr_component, b as add_attribute, e as escape } from './ssr-f419b600.js';

/* empty css                                      */const css = {
  code: "button.svelte-ckwve .spinner.svelte-ckwve{visibility:hidden}button.svelte-ckwve:disabled .spinner.svelte-ckwve{visibility:visible}button.svelte-ckwve:disabled .button-content.svelte-ckwve{visibility:hidden}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "button" } = $$props;
  let { title } = $$props;
  let { disabled = false } = $$props;
  let { class: className = "btn-primary" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css);
  return ` <button type="submit"${add_attribute("name", name, 0)} class="${"btn btn-soft-info position-relative " + escape(className, true) + " svelte-ckwve"}" ${disabled ? "disabled" : ""}><span class="spinner position-absolute top-50 start-50 translate-middle svelte-ckwve" data-svelte-h="svelte-s29pz6"><span class="button-spinner spinner-border spinner-border-sm" role="status"></span></span> <span class="button-content svelte-ckwve">${escape(title)}</span> </button>`;
});

export { Button as B };
//# sourceMappingURL=button-36a29707.js.map
