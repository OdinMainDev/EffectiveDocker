import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-10a00f9f.js';
import { C as Container, H as Header } from './Header-7cc35c68.js';
import { T as Text } from './text-84ad8c2f.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { S as Select } from './select-e2dfa640.js';
import { c as currenciesToSelect } from './currency-56b90870.js';
import './index2-3dbd9eb2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let bot = data.bot;
  let currencies = data.currencies;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-5nsxoq_START -->${$$result.title = `<title>Effective Solution - ${escape(bot ? $t("common.edit bot") : $t("common.add bots"))}</title>`, ""}<!-- HEAD_svelte-5nsxoq_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${!bot ? `${validate_component(Header, "Header").$$render($$result, { title: $t("common.add bots") }, {}, {
          default: () => {
            return `<div class="col-12 col-md-auto" data-svelte-h="svelte-i9aqnn"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button></div></div>`;
          }
        })} <div class="row"><div class="row g-3 mb-6"><div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "count",
            placeholder: $t("common.Enter count"),
            label: $t("common.Enter count"),
            error: form?.errors?.count
          },
          {},
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "language",
            name: "language",
            placeholder: $t("common.Select language bots"),
            label: $t("common.Select language bots"),
            items: ["en", "ru"],
            error: form?.errors?.language
          },
          {},
          {}
        )}</div> <div class="col-4 mb-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "currency",
            name: "currency",
            placeholder: $t("common.Select currency"),
            label: $t("common.Select currency"),
            items: currenciesToSelect(currencies),
            error: form?.errors?.currency
          },
          {},
          {}
        )}</div></div></div>` : ``} ${bot ? `${validate_component(Header, "Header").$$render($$result, { title: $t("common.edit bot") }, {}, {
          default: () => {
            return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-wgdiqp"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/users/bots/list">${escape($t("common.return to list"))}</a></li> <li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li></ul></div></div>`;
          }
        })} <div class="row"><div class="row g-3 mb-6"><input type="hidden" name="id"${add_attribute("value", bot.id, 0)}> <div class="col-md-8 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "full_name",
            placeholder: $t("common.Enter full_name"),
            label: $t("common.Enter full_name"),
            error: form?.errors?.full_name,
            value: bot.full_name
          },
          {
            value: ($$value) => {
              bot.full_name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "name",
            placeholder: $t("common.Enter name"),
            label: $t("common.Enter name"),
            error: form?.errors?.name,
            value: bot.name
          },
          {
            value: ($$value) => {
              bot.name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "username",
            placeholder: $t("common.Enter username"),
            label: $t("common.Enter username"),
            error: form?.errors?.username,
            value: bot.username
          },
          {
            value: ($$value) => {
              bot.username = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "email",
            placeholder: $t("common.Enter email"),
            label: $t("common.Enter email"),
            error: form?.errors?.email,
            value: bot.email
          },
          {
            value: ($$value) => {
              bot.email = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "currency",
            name: "currency",
            placeholder: $t("common.Select currency"),
            label: $t("common.Select currency"),
            items: currenciesToSelect(currencies),
            error: form?.errors?.currency,
            value: bot.currency
          },
          {
            value: ($$value) => {
              bot.currency = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div>` : ``} <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
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
        )}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a0f7d12a.js.map
