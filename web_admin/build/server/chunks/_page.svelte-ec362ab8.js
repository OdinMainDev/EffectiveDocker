import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { T as Text } from './text-da699eed.js';
import { S as Switch } from './switch-f2dcd47f.js';
import { B as Button } from './button-36a29707.js';
import './index-a4865dbd.js';
import 'toastr';
import { C as Container, H as Header } from './Header-15daf196.js';
import { C as ContainerTab } from './ContainerTab-b20d8de9.js';
import { T as TabContent } from './TabContent-b15f1635.js';
import { C as Combobox } from './combobox-fc675222.js';
import { e as emailTemplateToSelect } from './email_template-ca6ccafa.js';
import './index2-5f3880fe.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let settings = data.settings;
  let emails = data.emails;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-109v425_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.settings auth"))}</title>`, ""}<!-- HEAD_svelte-109v425_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render($$result, { title: $t("common.settings auth") }, {}, {})} <div class="row">${validate_component(ContainerTab, "ContainerTab").$$render(
          $$result,
          {
            tabs: [
              $t("common.login"),
              $t("common.register"),
              $t("common.reset password")
            ]
          },
          {},
          {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="row"><div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "field_email",
                      label: $t("common.field_email"),
                      checked: settings.settings.auth.login.email
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.login.email = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "field_phone",
                      label: $t("common.field_phone"),
                      checked: settings.settings.auth.login.phone
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.login.phone = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "field_remember",
                      label: $t("common.field_remember"),
                      checked: settings.settings.auth.login.remember
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.login.remember = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "ban_error",
                      label: $t("common.ban_error"),
                      checked: settings.settings.auth.login.ban_error
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.login.ban_error = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "field_captcha",
                      label: $t("common.field_captcha"),
                      checked: settings.settings.auth.login.captcha
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.login.captcha = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "throttle_error",
                      label: $t("common.throttle_error"),
                      checked: settings.settings.auth.login.throttle_error
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.login.throttle_error = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-12 mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      id: "throttle_count",
                      name: "throttle_count",
                      placeholder: $t("common.throttle_count"),
                      label: $t("common.throttle_count"),
                      error: void 0,
                      value: settings.settings.auth.login.throttle_count
                    },
                    {},
                    {}
                  )}</div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "2" }, {}, {
                default: () => {
                  return `<div class="row"><div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_email",
                      label: $t("common.field_email"),
                      checked: settings.settings.auth.register.email
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.email = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_indisposible",
                      label: $t("common.field_indisposible"),
                      checked: settings.settings.auth.register.no_disposible
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.no_disposible = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_phone",
                      label: $t("common.field_phone"),
                      checked: settings.settings.auth.register.phone
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.phone = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_username",
                      label: $t("common.field_username"),
                      checked: settings.settings.auth.register.username
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.username = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_full_name",
                      label: $t("common.full_name"),
                      checked: settings.settings.auth.register.full_name
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.full_name = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_city",
                      label: $t("common.field_city"),
                      checked: settings.settings.auth.register.city
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.city = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_address",
                      label: $t("common.field_address"),
                      checked: settings.settings.auth.register.address
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.address = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_dob",
                      label: $t("common.field_dob"),
                      checked: settings.settings.auth.register.dob
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.dob = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_gender",
                      label: $t("common.field_gender"),
                      checked: settings.settings.auth.register.gender
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.gender = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_promo",
                      label: $t("common.field_promo"),
                      checked: settings.settings.auth.register.promo
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.promo = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_field_captcha",
                      label: $t("common.field_captcha"),
                      checked: settings.settings.auth.register.captcha
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.captcha = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "register_throttle_error",
                      label: $t("common.throttle_error"),
                      checked: settings.settings.auth.register.throttle_error
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.register.throttle_error = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      id: "register_throttle_count",
                      name: "register_throttle_count",
                      placeholder: $t("common.throttle_count"),
                      label: $t("common.throttle_count"),
                      error: void 0,
                      value: settings.settings.auth.register.throttle_count
                    },
                    {},
                    {}
                  )}</div> <div class="col-md-6 mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "register_email",
                      placeholder: $t("common.Register email to send"),
                      items: emailTemplateToSelect(emails),
                      error: form?.errors?.blocked_countries,
                      value: settings.settings.auth.register.email_template
                    },
                    {
                      value: ($$value) => {
                        settings.settings.auth.register.email_template = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "3" }, {}, {
                default: () => {
                  return `<div class="row"><div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "reset_field_email",
                      label: $t("common.field_email"),
                      checked: settings.settings.auth.reset.email
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.reset.email = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "reset_field_phone",
                      label: $t("common.field_phone"),
                      checked: settings.settings.auth.reset.phone
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.reset.phone = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "reset_ban_error",
                      label: $t("common.ban_error"),
                      checked: settings.settings.auth.reset.ban_error
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.reset.ban_error = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "reset_field_captcha",
                      label: $t("common.field_captcha"),
                      checked: settings.settings.auth.reset.captcha
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.reset.captcha = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "reset_throttle_error",
                      label: $t("common.throttle_error"),
                      checked: settings.settings.auth.reset.throttle_error
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.auth.reset.throttle_error = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      id: "reset_throttle_count",
                      name: "reset_throttle_count",
                      placeholder: $t("common.throttle_count"),
                      label: $t("common.throttle_count"),
                      error: void 0,
                      value: settings.settings.auth.reset.throttle_count
                    },
                    {},
                    {}
                  )}</div> <div class="col-md-6 mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "reset_email",
                      placeholder: $t("common.Reset password email to send"),
                      items: emailTemplateToSelect(emails),
                      error: form?.errors?.reset_email_template,
                      value: settings.settings.auth.reset.email_template
                    },
                    {
                      value: ($$value) => {
                        settings.settings.auth.reset.email_template = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div>`;
                }
              })} <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
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
              )}</div>`;
            }
          }
        )}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ec362ab8.js.map
