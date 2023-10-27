import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, b as add_attribute, e as escape, a as each } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-57966412.js';

const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value2) => $t = value2);
  let { id } = $$props;
  let { name } = $$props;
  let { label } = $$props;
  let { error } = $$props;
  let { value } = $$props;
  let { items } = $$props;
  let inputId;
  if (id !== void 0) {
    inputId = id;
  } else {
    inputId = "select-" + name;
  }
  let maybe_invalid = "";
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  maybe_invalid = error !== void 0 && error !== null ? "is-invalid" : "";
  $$unsubscribe_t();
  return `<div class="form-floating"><select${add_attribute("data-name", name, 0)} class="${"form-select " + escape(maybe_invalid, true)}"${add_attribute("id", inputId, 0)}${add_attribute("name", name, 0)}>${each(items, (item) => {
    return `${typeof item == "object" ? `<option${add_attribute("value", item.value, 0)}>${escape(item.label)}</option>` : `<option${add_attribute("value", item, 0)}>${escape(item)}</option>`}`;
  })}</select> <label${add_attribute("for", inputId, 0)}>${escape(label)}</label> <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div></div>`;
});

export { Select as S };
//# sourceMappingURL=select-c6a95792.js.map
