import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-3e25f381.js';
import { S as Switch } from './switch-a8bae24d.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { C as Container, H as Header } from './Header-deb6fa10.js';
import { C as ContainerTab } from './ContainerTab-3c3f42e7.js';
import { T as TabContent } from './TabContent-1d8de319.js';
import { e as emailTemplateToSelect } from './email_template-ca6ccafa.js';
import { C as Combobox } from './combobox-50db4136.js';
import './index2-3dbd9eb2.js';

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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1xw08a0_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.settings verification"))}</title>`, ""}<!-- HEAD_svelte-1xw08a0_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: $t("common.settings verification")
          },
          {},
          {}
        )} <div class="row">${validate_component(ContainerTab, "ContainerTab").$$render($$result, { tabs: [$t("common.withdraw")] }, {}, {
          default: () => {
            return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="row"><div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "documents_multiple",
                    label: $t("common.verification_documents_allow_multiple"),
                    checked: settings.settings.system.verification.documents_multiple
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.verification.documents_multiple = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-6 mb-4">${validate_component(Combobox, "ComboBox").$$render(
                  $$result,
                  {
                    name: "email_templates",
                    placeholder: $t("common.Verification email to send"),
                    items: emailTemplateToSelect(emails),
                    error: form?.errors?.blocked_countries,
                    value: settings.settings.system.verification.email_templates
                  },
                  {
                    value: ($$value) => {
                      settings.settings.system.verification.email_templates = $$value;
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
//# sourceMappingURL=_page.svelte-5dcab36d.js.map
