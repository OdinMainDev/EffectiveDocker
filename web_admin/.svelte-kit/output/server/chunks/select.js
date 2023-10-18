import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as add_attribute, b as each, e as escape } from "./ssr.js";
import { c as t } from "./i18n.js";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value2) => $t = value2);
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
  $$unsubscribe_t();
  return `<div class="form-floating"><select${add_attribute("data-name", name, 0)} class="form-select"${add_attribute("id", inputId, 0)}${add_attribute("name", name, 0)}>${each(items, (item) => {
    return `${typeof item == "object" ? `<option${add_attribute("value", item.value, 0)}>${escape(item.label)}</option>` : `<option${add_attribute("value", item, 0)}>${escape(item)}</option>`}`;
  })}</select> <label${add_attribute("for", inputId, 0)}>${escape(label)}</label> <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div></div>`;
});
export {
  Select as S
};
