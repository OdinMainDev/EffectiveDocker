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
import './index2-5f3880fe.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let settings = data.settings;
  if (!settings.settings) {
    settings.settings = {};
  }
  if (!settings.settings.system) {
    settings.settings.system = {};
  }
  if (!settings.settings.system.notification) {
    settings.settings.system.notification = {};
  }
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
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render($$result, { title: $t("common.settings auth") }, {}, {})} <div class="row">${validate_component(ContainerTab, "ContainerTab").$$render($$result, { tabs: [] }, {}, {
          default: () => {
            return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
              default: () => {
                return `<h5 class="mt-4 mb-4" data-svelte-h="svelte-3gnysa">Telegram bot creds</h5> <div class="row"><div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "chat_id",
                    name: "chat_id",
                    placeholder: $t("common.Enter telegram chat_id"),
                    label: $t("common.Enter telegram chat_id"),
                    error: form?.chat_id,
                    value: settings.settings.system.notification.telegram_chat_id
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.notification.telegram_chat_id = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-8 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "token",
                    name: "token",
                    placeholder: $t("common.Enter token"),
                    label: $t("common.Enter token"),
                    error: form?.token,
                    value: settings.settings.system.notification.telegram_token
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.notification.telegram_token = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "payments",
                    label: $t("common.payments"),
                    checked: settings.settings.system.notification.payments
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.notification.payments = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "withdraws",
                    label: $t("common.withdraws"),
                    checked: settings.settings.system.notification.withdraws
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.notification.withdraws = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "verifications",
                    label: $t("common.verifications"),
                    checked: settings.settings.system.notification.verifications
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.notification.verifications = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "bonus",
                    label: $t("common.bonus"),
                    checked: settings.settings.system.notification.bonus
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.notification.bonus = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "user_bonus",
                    label: $t("common.user_bonus"),
                    checked: settings.settings.system.notification.user_bonus
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.notification.user_bonus = $$value;
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
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-afbc9d0d.js.map
