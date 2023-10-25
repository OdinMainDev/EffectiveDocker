import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-3e25f381.js';
import { C as Container, H as Header } from './Header-deb6fa10.js';
import { T as Text } from './text-9ccc1d17.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { S as Select } from './select-d7e7f7c7.js';
import { S as Switch } from './switch-a8bae24d.js';
import './index2-3dbd9eb2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let game_api = data.game_api;
  if (!game_api) {
    game_api = {};
  }
  let api_names = data.api_names;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1o2p744_START -->${$$result.title = `<title>Effective Solution - ${escape(game_api.id ? $t("common.edit game api") : $t("common.add game api"))}</title>`, ""}<!-- HEAD_svelte-1o2p744_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: game_api.id ? $t("common.edit game api") : $t("common.add game api")
          },
          {},
          {
            default: () => {
              return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-etm0ip"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/dev/currencies/list">${escape($t("common.return to list"))}</a></li> ${game_api.id ? `<li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li>` : ``}</ul></div></div>`;
            }
          }
        )} <div class="row"><div class="row g-3 mb-6">${game_api.id ? `<input type="hidden" name="id"${add_attribute("value", game_api.id, 0)}>` : ``} <div class="col-md-7"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "name",
            placeholder: $t("common.Enter title"),
            label: $t("common.Enter title"),
            error: form?.errors?.name,
            value: game_api.name
          },
          {
            value: ($$value) => {
              game_api.name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-3"><div class="form-floating mb-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            name: "api_name",
            label: $t("common.Enter Provider Name"),
            error: form?.errors?.api_name,
            items: api_names,
            value: game_api.api_name
          },
          {
            value: ($$value) => {
              game_api.api_name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-2"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
          $$result,
          {
            name: "enable",
            label: $t("common.enable"),
            checked: game_api.is_enabled
          },
          {
            checked: ($$value) => {
              game_api.is_enabled = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "external_id",
            placeholder: $t("common.Enter") + " Id",
            label: $t("common.Enter") + " Id",
            error: form?.errors?.external_id,
            value: game_api.external_id
          },
          {
            value: ($$value) => {
              game_api.external_id = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "external_key",
            placeholder: $t("common.Enter") + " Token",
            label: $t("common.Enter") + " Token",
            error: form?.errors?.external_key,
            value: game_api.external_key
          },
          {
            value: ($$value) => {
              game_api.external_key = $$value;
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
//# sourceMappingURL=_page.svelte-8b135b3a.js.map
