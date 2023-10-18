import { s as subscribe } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { c as t } from "../../../../../../../../chunks/i18n.js";
import "devalue";
import { T as Text } from "../../../../../../../../chunks/text.js";
import { B as Button } from "../../../../../../../../chunks/button.js";
import "../../../../../../../../chunks/index.js";
import "toastr";
import { S as Select } from "../../../../../../../../chunks/select.js";
import { E as Email } from "../../../../../../../../chunks/Email.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value2) => $t = value2);
  let { name } = $$props;
  let { label } = $$props;
  let { error } = $$props;
  let { value } = $$props;
  let { style } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$unsubscribe_t();
  return `<label for="${"input-" + escape(name, true)}" class="form-label">${escape(label)}</label> <textarea class="${["form-control", error !== void 0 ? "is-invalid" : ""].join(" ").trim()}" id="${"input-" + escape(name, true)}"${add_attribute("name", name, 0)} rows="3"${add_attribute("style", style, 0)}>${escape(value || "")}</textarea> <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let deleteButton;
  let email = data.email;
  let languages = data.languages;
  if (!email) {
    email = {};
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1t06hz_START -->${$$result.title = `<title>Effective Solution - ${escape(email.id ? $t("common.edit email template") : $t("common.add email template"))}</title>`, ""}<!-- HEAD_svelte-1t06hz_END -->`, ""} <div class="content"><div class="email-container"><div class="row"><div class="col-auto"><h2 class="mb-0">${escape(email.id ? $t("common.edit email template") : $t("common.add email template"))}</h2></div></div> ${validate_component(Email, "Email").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="card email-content"><div class="card-body"><form class="d-flex flex-column h-100" method="POST" enctype="multipart/form-data"><div class="row g-3 mb-2"><div class="col-8">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "name",
            placeholder: $t("common.Enter title"),
            label: $t("common.Enter title"),
            error: form?.errors?.name,
            value: email.name
          },
          {
            value: ($$value) => {
              email.name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "language",
            name: "language",
            placeholder: $t("common.Select language"),
            label: $t("common.Select language"),
            items: languages,
            error: email.language,
            value: email.language
          },
          {
            value: ($$value) => {
              email.language = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-12">${validate_component(Text, "Text").$$render(
          $$result,
          {
            name: "subject",
            placeholder: $t("common.Enter subject"),
            label: $t("common.Enter subject"),
            error: form?.errors?.subject,
            value: email.subject
          },
          {
            value: ($$value) => {
              email.subject = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <div class="mb-3 flex-1">${validate_component(Textarea, "TextArea").$$render(
          $$result,
          {
            name: "template",
            placeholder: $t("common.Email template"),
            label: $t("common.Email template"),
            error: form?.errors?.template,
            style: "height:98%",
            value: email.template
          },
          {
            value: ($$value) => {
              email.template = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="col-md-12 justify-content-end text-end">${email.id ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            name: "delete",
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
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
export {
  Page as default
};
