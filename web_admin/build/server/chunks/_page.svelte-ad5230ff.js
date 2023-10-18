import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { U as Uploader } from './uploader-230b30e7.js';
import { T as Text } from './text-da699eed.js';
import { S as Switch } from './switch-f2dcd47f.js';
import { B as Button } from './button-36a29707.js';
import { C as Combobox } from './combobox-fc675222.js';
import './index-a4865dbd.js';
import 'toastr';
import './index2-5f3880fe.js';
import './app-2b3d771d.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let deleteButton;
  let updateButton;
  let casino = data.casino;
  let imageUploading;
  let isEditing = casino !== void 0 && casino.id !== void 0;
  let languages = [
    // TODO: получать список языков с сервера?
    { value: "RU", label: "RU" },
    { value: "EN", label: "EN" }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-49bty0_START -->${$$result.title = `<title>Effective Solution - ${escape(isEditing ? $t("common.edit casino") : $t("common.add casino"))}</title>`, ""}<!-- HEAD_svelte-49bty0_END -->`, ""} <div class="content"><div class="row g-3 mb-4"><div class="col-auto"><h2 class="mb-0">${escape(isEditing ? $t("common.edit casino") : $t("common.add casino"))}</h2></div></div> <div class="row"><form class="row g-3 mb-6" method="POST" enctype="multipart/form-data">${isEditing ? `<input type="hidden" name="id"${add_attribute("value", casino.id, 0)}>` : ``} <div class="col-md-8"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "name",
        placeholder: $t("common.Enter title"),
        label: $t("common.Enter title"),
        error: form?.errors?.name,
        value: casino.name
      },
      {
        value: ($$value) => {
          casino.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "apikey",
        placeholder: "API Key",
        label: "API Key",
        error: form?.errors?.apikey,
        value: casino.apikey
      },
      {
        value: ($$value) => {
          casino.apikey = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-md-3"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        name: "enable",
        label: $t("common.enable"),
        checked: casino.enable
      },
      {
        checked: ($$value) => {
          casino.enable = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-md-3"><div class="mb-4">${validate_component(Uploader, "Uploader").$$render(
      $$result,
      {
        name: "image",
        auth_token: data.auth_token,
        error: form?.errors?.image,
        is_uploading: imageUploading,
        cdn_url: casino.image
      },
      {
        is_uploading: ($$value) => {
          imageUploading = $$value;
          $$settled = false;
        },
        cdn_url: ($$value) => {
          casino.image = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-md-3"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
      $$result,
      {
        name: "currencies",
        placeholder: $t("common.Select currencies"),
        items: data.currencies,
        error: form?.errors?.currencies,
        value: casino.currencies
      },
      {
        value: ($$value) => {
          casino.currencies = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-md-3"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
      $$result,
      {
        name: "languages",
        placeholder: $t("common.Select languages"),
        items: languages,
        error: form?.errors?.languages,
        value: casino.languages
      },
      {
        value: ($$value) => {
          casino.languages = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> ${!isEditing ? `<div class="col-md-12">${escape($t("common.Casino admin account"))}:</div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "email",
        placeholder: $t("common.Enter email"),
        label: $t("common.Enter email"),
        error: form?.errors?.email,
        value: casino.email
      },
      {
        value: ($$value) => {
          casino.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "password",
        isPassword: true,
        placeholder: $t("common.Enter password"),
        label: $t("common.Enter password"),
        error: form?.errors?.password,
        value: casino.password
      },
      {
        value: ($$value) => {
          casino.password = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : ``} <div class="col-md-12 justify-content-end text-end">${isEditing ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        name: "todo:delete",
        class: "btn-danger me-2",
        title: $t("common.Delete"),
        this: deleteButton
      },
      {
        this: ($$value) => {
          deleteButton = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: imageUploading,
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
    )}</div></form></div></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ad5230ff.js.map
