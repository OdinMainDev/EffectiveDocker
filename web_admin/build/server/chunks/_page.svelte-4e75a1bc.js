import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
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
                return `<div class="row"><div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "withdraw_immediately",
                    label: $t("common.withdraw_immediately"),
                    checked: settings.settings.system.withdraw.withdraw_immediately
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.withdraw.withdraw_immediately = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "data_same_as_profile",
                    label: $t("common.data_same_as_profile"),
                    checked: settings.settings.system.withdraw.data_same_as_profile
                  },
                  {
                    checked: ($$value) => {
                      settings.settings.system.withdraw.data_same_as_profile = $$value;
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
//# sourceMappingURL=_page.svelte-4e75a1bc.js.map
