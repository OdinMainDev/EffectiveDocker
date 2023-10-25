import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-3e25f381.js';
import { T as Text } from './text-9ccc1d17.js';
import { S as Switch } from './switch-a8bae24d.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { C as Container, H as Header } from './Header-deb6fa10.js';
import { C as ContainerTab } from './ContainerTab-3c3f42e7.js';
import { T as TabContent } from './TabContent-1d8de319.js';
import { R as Repeater } from './Repeater-313ceb20.js';
import { S as Select } from './select-d7e7f7c7.js';
import { c as currenciesToSelect } from './currency-56b90870.js';
import './index2-3dbd9eb2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let updateButton;
  let settings = data.settings;
  let currencies = data.currencies;
  let bots = {
    currency: {},
    probability: {},
    multiple_bet: {},
    time: {},
    bet_from: {},
    bet_to: {},
    intensity: {},
    intensity_tournament: {},
    intensity_lottery: {},
    count: 0
  };
  settings?.settings?.system?.bots?.forEach(function(entry, index) {
    bots.currency["slot" + index] = entry.currency;
    bots.probability["slot" + index] = entry.probability;
    bots.multiple_bet["slot" + index] = entry.multiple_bet;
    bots.time["slot" + index] = entry.time;
    bots.bet_from["slot" + index] = entry.bet_from;
    bots.bet_to["slot" + index] = entry.bet_to;
    bots.intensity["slot" + index] = entry.intensity;
    bots.intensity_tournament["slot" + index] = entry.intensity_tournament;
    bots.intensity_lottery["slot" + index] = entry.intensity_lottery;
    bots.count += 1;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-a1nw1v_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.settings bots"))}</title>`, ""}<!-- HEAD_svelte-a1nw1v_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render($$result, { title: $t("common.settings bots") }, {}, {})} <div class="row">${validate_component(ContainerTab, "ContainerTab").$$render($$result, { tabs: [] }, {}, {
          default: () => {
            return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Repeater, "Repeater").$$render($$result, { count: bots.count }, {}, {
                  default: ({ number, itemname }) => {
                    return `<div class="col-md-3"><div class="mb-3 col-12">${validate_component(Select, "Select").$$render(
                      $$result,
                      {
                        id: "currency_" + number,
                        name: "bots[" + number + "].currency",
                        label: $t("common.Language"),
                        items: currenciesToSelect(currencies),
                        error: null,
                        value: bots.currency[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.currency[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "probability_" + number,
                        name: "bots[" + number + "].probability",
                        placeholder: $t("common.Enter_probability"),
                        label: $t("common.Enter_probability"),
                        error: void 0,
                        value: bots.probability[itemname]
                      },
                      {},
                      {}
                    )}</div> <div class="mb-3 col-12">${validate_component(Switch, "Switch").$$render(
                      $$result,
                      {
                        name: "bots[" + number + "].multiple_bet",
                        label: $t("common.multiple_bet"),
                        checked: bots.multiple_bet[itemname]
                      },
                      {
                        checked: ($$value) => {
                          bots.multiple_bet[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div></div> <div class="col-md-4"><div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "time_" + number,
                        name: "bots[" + number + "].time",
                        placeholder: $t("common.Enter_time"),
                        label: $t("common.Enter_time"),
                        error: void 0,
                        value: bots.time[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.time[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "bet_from_" + number,
                        name: "bots[" + number + "].bet_from",
                        placeholder: $t("common.Enter_bet_from"),
                        label: $t("common.Enter_bet_from"),
                        error: void 0,
                        value: bots.bet_from[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.bet_from[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "bet_to_" + number,
                        name: "bots[" + number + "].bet_to",
                        placeholder: $t("common.Enter_bet_to"),
                        label: $t("common.Enter_bet_to"),
                        error: void 0,
                        value: bots.bet_to[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.bet_to[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div></div> <div class="col-md-4"><div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "intensity_" + number,
                        name: "bots[" + number + "].intensity",
                        placeholder: $t("common.Enter_intensity"),
                        label: $t("common.Enter_intensity"),
                        error: void 0,
                        value: bots.intensity[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.intensity[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "intensity_tournament_" + number,
                        name: "bots[" + number + "].intensity_tournament",
                        placeholder: $t("common.Enterintensity_tournament"),
                        label: $t("common.Enter_intensity_tournament"),
                        error: void 0,
                        value: bots.intensity_tournament[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.intensity_tournament[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="mb-3 col-12">${validate_component(Text, "Text").$$render(
                      $$result,
                      {
                        id: "intensity_lottery_" + number,
                        name: "bots[" + number + "].intensity_lottery",
                        placeholder: $t("common.Enter_intensity_lottery"),
                        label: $t("common.Enter_intensity_lottery"),
                        error: void 0,
                        value: bots.intensity_lottery[itemname]
                      },
                      {
                        value: ($$value) => {
                          bots.intensity_lottery[itemname] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div></div>`;
                  }
                })}`;
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
//# sourceMappingURL=_page.svelte-c83a1330.js.map
