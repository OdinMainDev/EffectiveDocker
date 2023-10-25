import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-3e25f381.js';
import { C as Container, H as Header } from './Header-deb6fa10.js';
import { T as Text } from './text-9ccc1d17.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import './index2-3dbd9eb2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let currency = data.currency;
  if (!currency) {
    currency = {};
  }
  let deleteButton;
  let updateButton;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1in7cv6_START -->${$$result.title = `<title>Effective Solution - ${escape(currency.id ? $t("common.edit currency") : $t("common.add currency"))}</title>`, ""}<!-- HEAD_svelte-1in7cv6_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: currency.id ? $t("common.edit currency") + currency.title : $t("common.add currency")
          },
          {},
          {
            default: () => {
              return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-etm0ip"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/dev/currencies/list">${escape($t("common.return to list"))}</a></li> ${currency.id ? `<li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li>` : ``}</ul></div></div>`;
            }
          }
        )} <div class="row"><div class="row g-3 mb-6">${currency.id ? `<input type="hidden" name="id"${add_attribute("value", currency.id, 0)}>` : ``} <div class="col-md-12"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "title",
            placeholder: $t("common.Enter title"),
            label: $t("common.Enter title"),
            error: form?.errors?.title,
            value: currency.title
          },
          {
            value: ($$value) => {
              currency.title = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "code_alpha",
            placeholder: $t("common.Enter") + " Code Alpha",
            label: $t("common.Enter") + " Code Alpha",
            error: form?.errors?.code_alpha,
            value: currency.code_alpha
          },
          {
            value: ($$value) => {
              currency.code_alpha = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "minor_units",
            placeholder: $t("common.Enter") + " Minor Units",
            label: $t("common.Enter") + " Minor Units",
            error: form?.errors?.minor_units,
            value: currency.minor_units
          },
          {
            value: ($$value) => {
              currency.minor_units = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
          $$result,
          {
            title: $t("common.Confirm"),
            this: updateButton
          },
          {
            this: ($$value) => {
              updateButton = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fd148cc2.js.map
