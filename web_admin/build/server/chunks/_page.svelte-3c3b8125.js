import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { T as Text } from './text-da699eed.js';
import { B as Button } from './button-36a29707.js';
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1pxg5w3_START -->${$$result.title = `<title>Effective Solution - Login</title>`, ""}<!-- HEAD_svelte-1pxg5w3_END -->`, ""} <div class="app"><main class="main" id="top"><div class="container-fluid px-0"><div class="container"><div class="row flex-center min-vh-100 py-5"><div class="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3"><a class="d-flex flex-center text-decoration-none mb-4" href="/login" data-svelte-h="svelte-1s47mwm"><div class="d-flex align-items-center fw-bolder fs-5 d-inline-block"><img src="../../logo/logo.png" alt="esplatform" width="58"></div></a> <form method="post"><div class="text-center mb-3"><h3 class="text-1000">${escape($t("common.Authorization"))}</h3> <p class="text-700">${escape($t("common.sign in to your account to continue"))}</p></div> <div class="mb-3">${validate_component(Text, "Text").$$render(
      $$result,
      {
        name: "email",
        placeholder: "email@example.com",
        label: $t("common.Email"),
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
        label: $t("common.Password"),
        error: form?.errors?.password
      },
      {},
      {}
    )}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: $t("common.Sign in"),
        this: submitButton
      },
      {
        this: ($$value) => {
          submitButton = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form></div></div></div></div></main></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3c3b8125.js.map
