import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../chunks/ssr.js";
import { c as t } from "../../../../../../chunks/i18n.js";
import "devalue";
import { T as Text } from "../../../../../../chunks/text.js";
/* empty css                                                             */import { B as Button } from "../../../../../../chunks/button.js";
import "../../../../../../chunks/index.js";
import "toastr";
import { C as Container, H as Header } from "../../../../../../chunks/Header.js";
import { C as ContainerTab } from "../../../../../../chunks/ContainerTab.js";
import { T as TabContent } from "../../../../../../chunks/TabContent.js";
import { S as Select } from "../../../../../../chunks/select.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let settings = data.settings;
  let sms_providers = data.sms_providers;
  let converter_provider = data.converter_provider;
  if (!settings.settings) {
    settings.settings = {};
  }
  if (!settings.settings.system) {
    settings.settings.system = {};
  }
  if (!settings.settings.system.api) {
    settings.settings.system.api = [];
  }
  if (!settings.settings.system.api.sms) {
    settings.settings.system.api.sms = [];
  }
  if (!settings.settings.system.api.mail) {
    settings.settings.system.api.mail = [];
  }
  if (!settings.settings.system.api.currency_converter) {
    settings.settings.system.api.currency_converter = [];
  }
  if (!settings.settings.system.api.captcha) {
    settings.settings.system.api.captcha = [];
  }
  if (!settings.settings.system.api.pusher) {
    settings.settings.system.api.pusher = [];
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
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render($$result, { title: $t("common.settings auth") }, {}, {})} <div class="row">${validate_component(ContainerTab, "ContainerTab").$$render($$result, { tabs: [$t("common.withdraw")] }, {}, {
          default: () => {
            return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
              default: () => {
                return `<h5 class="mb-4" data-svelte-h="svelte-1w6kmb0">Sms api</h5> <div class="row"><div class="col-md-4 mb-4">${validate_component(Select, "Select").$$render(
                  $$result,
                  {
                    id: "sms_provider",
                    name: "sms_provider",
                    placeholder: $t("common.Select sms_providers"),
                    label: $t("common.Select sms_providers"),
                    items: sms_providers,
                    error: settings.settings.system.api.sms.provider,
                    value: settings.settings.system.api.sms.provider
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.sms.provider = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> ${settings.settings.system.api.sms.provider == "ClickaTell" ? `<div class="col-md-8 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "sms_api_key",
                    name: "sms_api_key",
                    placeholder: $t("common.Select clickatell api key"),
                    label: $t("common.Select clickatell api key"),
                    error: settings.settings.system.api.sms.api_key,
                    value: settings.settings.system.api.sms.api_key
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.sms.api_key = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>` : ``} ${settings.settings.system.api.sms.provider == "SendPulse" ? `<div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "sms_api_key",
                    name: "sms_api_key",
                    placeholder: $t("common.Select sendpulse api id"),
                    label: $t("common.Select sendpulse api id"),
                    error: settings.settings.system.api.sms.api_key,
                    value: settings.settings.system.api.sms.api_key
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.sms.api_key = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "sms_api_secret",
                    name: "sms_api_secret",
                    placeholder: $t("common.Select sendpulse api token"),
                    label: $t("common.Select sendpulse api token"),
                    error: settings.settings.system.api.sms.api_secret,
                    value: settings.settings.system.api.sms.api_secret
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.sms.api_secret = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>` : ``}</div> <hr class="container-m-nx"> <h5 class="mt-4 mb-4" data-svelte-h="svelte-dqwfel">Email smtp</h5> <div class="row"><div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_host",
                    name: "email_host",
                    placeholder: $t("common.Enter email_host"),
                    label: $t("common.Enter email_host"),
                    error: settings.settings.system.api.mail.host,
                    value: settings.settings.system.api.mail.host
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.host = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_port",
                    name: "email_port",
                    placeholder: $t("common.Enter email_port"),
                    label: $t("common.Enter email_port"),
                    error: settings.settings.system.api.mail.port,
                    value: settings.settings.system.api.mail.port
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.port = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_encryption",
                    name: "email_encryption",
                    placeholder: $t("common.Enter email_encryption"),
                    label: $t("common.Enter email_encryption"),
                    error: settings.settings.system.api.mail.encryption,
                    value: settings.settings.system.api.mail.encryption
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.encryption = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_username",
                    name: "email_username",
                    placeholder: $t("common.Enter email_username"),
                    label: $t("common.Enter email_username"),
                    error: settings.settings.system.api.mail.username,
                    value: settings.settings.system.api.mail.username
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.username = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_password",
                    name: "email_password",
                    placeholder: $t("common.Enter email_password"),
                    label: $t("common.Enter email_password"),
                    error: settings.settings.system.api.mail.password,
                    value: settings.settings.system.api.mail.password
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.password = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_from_address",
                    name: "email_from_address",
                    placeholder: $t("common.Enter from_address"),
                    label: $t("common.Enter from_address"),
                    error: settings.settings.system.api.mail.from_address,
                    value: settings.settings.system.api.mail.from_address
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.from_address = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "email_from_name",
                    name: "email_from_name",
                    placeholder: $t("common.Enter from_name"),
                    label: $t("common.Enter from_name"),
                    error: settings.settings.system.api.mail.from_name,
                    value: settings.settings.system.api.mail.from_name
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.mail.from_name = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <hr class="container-m-nx"> <h5 class="mt-4 mb-4" data-svelte-h="svelte-confvx">Currency convert api</h5> <div class="row"><div class="col-md-4 mb-4">${validate_component(Select, "Select").$$render(
                  $$result,
                  {
                    id: "converter_provider",
                    name: "converter_provider",
                    placeholder: $t("common.Select converter_provider"),
                    label: $t("common.Select converter_provider"),
                    items: converter_provider,
                    error: settings.settings.system.api.currency_converter.provider,
                    value: settings.settings.system.api.currency_converter.provider
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.currency_converter.provider = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> ${settings.settings.system.api.currency_converter.provider == "CryptoCompare" ? `<div class="col-md-8 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "converter_api_key",
                    name: "converter_api_key",
                    placeholder: $t("common.Enter CryptoCompare api key"),
                    label: $t("common.Enter CryptoCompare api key"),
                    error: settings.settings.system.api.currency_converter.api_key,
                    value: settings.settings.system.api.currency_converter.api_key
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.currency_converter.api_key = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>` : ``}</div> <hr class="container-m-nx"> <h5 class="mt-4 mb-4" data-svelte-h="svelte-149vlbz">Google recaptcha api</h5> <div class="row"><div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "recaptcha_key",
                    name: "recaptcha_key",
                    placeholder: $t("common.Enter recaptcha_key"),
                    label: $t("common.Enter recaptcha_key"),
                    error: settings.settings.system.api.captcha.key,
                    value: settings.settings.system.api.captcha.key
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.captcha.key = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "recaptcha_secret",
                    name: "recaptcha_secret",
                    placeholder: $t("common.Enter recaptcha_secret"),
                    label: $t("common.Enter recaptcha_secret"),
                    error: settings.settings.system.api.captcha.secret,
                    value: settings.settings.system.api.captcha.secret
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.captcha.secret = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <hr class="container-m-nx"> <h5 class="mt-4 mb-4" data-svelte-h="svelte-1hwm0oi">Pusher api</h5> <div class="row"><div class="col-md-3 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "pusher_id",
                    name: "pusher_id",
                    placeholder: $t("common.Enter pusher_id"),
                    label: $t("common.Enter pusher_id"),
                    error: settings.settings.system.api.pusher.id,
                    value: settings.settings.system.api.pusher.id
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.pusher.id = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-3 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "pusher_key",
                    name: "pusher_key",
                    placeholder: $t("common.Enter pusher_key"),
                    label: $t("common.Enter pusher_key"),
                    error: settings.settings.system.api.pusher.key,
                    value: settings.settings.system.api.pusher.key
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.pusher.key = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-3 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "pusher_secret",
                    name: "pusher_secret",
                    placeholder: $t("common.Enter pusher_secret"),
                    label: $t("common.Enter pusher_secret"),
                    error: settings.settings.system.api.pusher.secret,
                    value: settings.settings.system.api.pusher.secret
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.pusher.secret = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-3 mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    id: "pusher_cluster",
                    name: "pusher_cluster",
                    placeholder: $t("common.Enter pusher_cluster"),
                    label: $t("common.Enter pusher_cluster"),
                    error: settings.settings.system.api.pusher.cluster,
                    value: settings.settings.system.api.pusher.cluster
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.api.pusher.cluster = $$value;
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
export {
  Page as default
};
