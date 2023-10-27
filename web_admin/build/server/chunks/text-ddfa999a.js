import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, b as add_attribute, e as escape } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-57966412.js';

const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value2) => $t = value2);
  let { id } = $$props;
  let { name } = $$props;
  let { isPassword = false } = $$props;
  let { placeholder } = $$props;
  let { label } = $$props;
  let { error } = $$props;
  let { value = "" } = $$props;
  let inputId;
  if (id !== void 0) {
    inputId = id;
  } else {
    inputId = "input-" + name;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.isPassword === void 0 && $$bindings.isPassword && isPassword !== void 0)
    $$bindings.isPassword(isPassword);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$unsubscribe_t();
  return `<div class="form-floating"><input class="${["form-control", error !== void 0 ? "is-invalid" : ""].join(" ").trim()}"${add_attribute("id", inputId, 0)}${add_attribute("data-name", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}> <label${add_attribute("for", inputId, 0)}>${escape(label)}</label> <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div></div>`;
});

export { Text as T };
//# sourceMappingURL=text-ddfa999a.js.map
