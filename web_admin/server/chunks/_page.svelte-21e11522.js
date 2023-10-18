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
import { R as Repeater } from './Repeater-d1d33d0f.js';
import { S as Select } from './select-5532be67.js';
import { c as currenciesToSelect } from './currency-56b90870.js';
import './index2-5f3880fe.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let settings = data.settings;
  let currencies = data.currencies;
  if (!settings.settings) {
    settings.settings = {};
  }
  if (!settings.settings.system) {
    settings.settings.system = {};
  }
  if (!settings.settings.system.bots) {
    settings.settings.system.bots = [];
    settings.settings.system.bots[0] = {};
    settings.settings.system.bots[0].multiple_bet = true;
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
                return `${validate_component(Repeater, "Repeater").$$render(
                  $$result,
                  {
                    count: settings.settings.system.bots?.length
                  },
                  {},
                  {
                    default: ({ number }) => {
                      return `<div class="col-md-3"><div class="mb-3 col-12">${validate_component(Select, "Select").$$render(
                        $$result,
                        {
                          id: "currency_" + number,
                          name: "bots[" + number + "][currency]",
                          label: $t("common.Language"),
                          items: currenciesToSelect(currencies),
                          error: null,
                          value: settings.settings.system.bots[number]?.currency
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "probability_" + number,
                          name: "bots[" + number + "][probability]",
                          placeholder: $t("common.Enterprobability"),
                          label: $t("common.Enterprobability"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.probability
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3 col-12"> ${validate_component(Switch, "Switch").$$render(
                        $$result,
                        {
                          name: "bots[" + number + "][multiple_bet]",
                          label: $t("common.multiple_bet"),
                          checked: settings.settings.multiple_bet
                        },
                        {
                          checked: ($$value) => {
                            settings.settings.multiple_bet = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div></div> <div class="col-md-4"><div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "time_" + number,
                          name: "bots[" + number + "][time]",
                          placeholder: $t("common.Entertime"),
                          label: $t("common.Entertime"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.time
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "bet_from_" + number,
                          name: "bots[" + number + "][bet_from]",
                          placeholder: $t("common.Enterbet_from"),
                          label: $t("common.Enterbet_from"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.bet_from
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "bet_to_" + number,
                          name: "bots[" + number + "][bet_to]",
                          placeholder: $t("common.Enterbet_to"),
                          label: $t("common.Enterbet_to"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.bet_to
                        },
                        {},
                        {}
                      )}</div></div> <div class="col-md-4"><div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "intensity_" + number,
                          name: "bots[" + number + "][intensity]",
                          placeholder: $t("common.Enterintensity"),
                          label: $t("common.Enterintensity"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.intensity
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "intensity_tournament_" + number,
                          name: "bots[" + number + "][intensity_tournament]",
                          placeholder: $t("common.Enterintensity_tournament"),
                          label: $t("common.Enterintensity_tournament"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.intensity_tournament
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                        $$result,
                        {
                          id: "intensity_lottery_" + number,
                          name: "bots[" + number + "][intensity_lottery]",
                          placeholder: $t("common.Enterintensity_lottery"),
                          label: $t("common.Enterintensity_lottery"),
                          error: void 0,
                          value: settings.settings.system.bots[number]?.intensity_lottery
                        },
                        {},
                        {}
                      )}</div></div>`;
                    }
                  }
                )}`;
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
//# sourceMappingURL=_page.svelte-21e11522.js.map
