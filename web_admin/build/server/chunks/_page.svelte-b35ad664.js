import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { B as Button } from './button-36a29707.js';
import { T as Text } from './text-da699eed.js';
import './index-a4865dbd.js';
import 'toastr';
import './index2-5f3880fe.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
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
        name: "email",
        placeholder: "example@mail.com",
        label: $t("common.Enter email"),
        error: form?.errors?.email
      },
      {},
      {}
    )}</div> <div class="mb-3">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "password",
        isPassword: true,
        placeholder: "*******",
        label: $t("common.Enter password"),
        error: form?.errors?.password
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

export { Page as default };
//# sourceMappingURL=_page.svelte-b35ad664.js.map
