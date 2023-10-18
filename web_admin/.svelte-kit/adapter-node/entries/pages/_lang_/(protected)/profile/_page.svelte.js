import { s as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { c as t } from "../../../../../chunks/i18n.js";
import "devalue";
import { T as Text } from "../../../../../chunks/text.js";
import { B as Button } from "../../../../../chunks/button.js";
import "../../../../../chunks/index.js";
import "toastr";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { form } = $$props;
  let submitButton;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1vb3298_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.profile"))}</title>`, ""}<!-- HEAD_svelte-1vb3298_END -->`, ""} <div class="content"><div class="row"><form class="row g-3 mb-6"><div class="card shadow-none border border-300 my-4 p-0"><div class="card-header p-4 border-bottom border-300 bg-soft w-100"><div class="row g-3 justify-content-between align-items-center"><div class="col-12 col-md"><h4 class="text-900 mb-0">${escape($t("common.Profile settings"))}</h4></div></div></div> <div class="card-body p-4"><form method="post"><div class="mb-3">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "oldpassword",
        isPassword: true,
        placeholder: "*******",
        label: $t("common.Enter old password"),
        error: form?.errors?.oldpassword
      },
      {},
      {}
    )}</div> <div class="mb-3">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "password",
        isPassword: true,
        placeholder: "*******",
        label: $t("common.Enter new password"),
        error: form?.errors?.password
      },
      {},
      {}
    )}</div> <div class="mb-3">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "repassword",
        isPassword: true,
        placeholder: "*******",
        label: $t("common.Repeat new password"),
        error: form?.errors?.repassword
      },
      {},
      {}
    )}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: $t("common.Confirm"),
        this: submitButton
      },
      {
        this: ($$value) => {
          submitButton = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form></div></div></form></div></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
export {
  Page as default
};
