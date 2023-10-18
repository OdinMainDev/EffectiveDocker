import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { v as verifications } from './app-2b3d771d.js';
import { U as Uploader } from './uploader-230b30e7.js';
import { T as Text } from './text-da699eed.js';
import { S as Switch } from './switch-f2dcd47f.js';
import { B as Button } from './button-36a29707.js';
import './index-a4865dbd.js';
import 'toastr';
import { C as Container, H as Header } from './Header-15daf196.js';
import { L as LeftBarImage, R as RightBarTab } from './RightBarTab-38437685.js';
import { T as TabContent } from './TabContent-b15f1635.js';
import { R as Repeater } from './Repeater-d1d33d0f.js';
import { C as Combobox } from './combobox-fc675222.js';
import { S as Select } from './select-5532be67.js';
import { c as currenciesToSelect } from './currency-56b90870.js';
import './index2-5f3880fe.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let deleteButton;
  let provider = data.provider;
  if (!provider) {
    provider = {};
    provider.data = {};
    provider.data.rules = {};
    provider.data.conditions = {};
    provider.data.fees = {};
    provider.data.meta = {};
  }
  if (!provider.data.meta.texts) {
    provider.data.meta.texts = [];
    provider.data.meta.texts[0] = {};
  }
  let languages = data.languages;
  let countries = data.countries;
  let currencies = data.currencies;
  let paymentProviders = data.paymentProviders;
  let imageUploading;
  console.log(provider);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-aavnp0_START -->${$$result.title = `<title>Effective Solution - ${escape(provider.id ? $t("common.edit payment provider") : $t("common.add payment provider"))}</title>`, ""}<!-- HEAD_svelte-aavnp0_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: (provider.id ? $t("common.edit payment provider") : $t("common.add payment provider")) + " " + provider?.name
          },
          {},
          {
            default: () => {
              return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-etm0ip"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/games/categories/list">${escape($t("common.return to list"))}</a></li> ${provider.id ? `<li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li>` : ``}</ul></div></div>`;
            }
          }
        )} <div class="row">${validate_component(LeftBarImage, "LeftBarImage").$$render(
          $$result,
          {
            image: provider.data.meta.image,
            name: provider.name
          },
          {},
          {
            default: () => {
              return `${provider.id ? `<div class="card mb-3"><div class="card-body"><div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-chart"></span> <h5 class="text-1000 mb-0">${escape($t("common.systems_data"))}</h5></div> <p class="mb-0">Id: ${escape(provider.id)}</p></div></div></div>` : ``}`;
            }
          }
        )} ${validate_component(RightBarTab, "RightBarTab").$$render(
          $$result,
          {
            tabs: [
              $t("common.general data"),
              $t("common.provider data"),
              $t("common.conditions"),
              $t("common.texts")
            ]
          },
          {},
          {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="row">${provider.id ? `<input type="hidden" name="id"${add_attribute("value", provider.id, 0)}>` : ``} <div class="col-md-12"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "name",
                      placeholder: $t("common.Enter title"),
                      label: $t("common.Enter title"),
                      error: form?.errors?.name,
                      value: provider.name
                    },
                    {
                      value: ($$value) => {
                        provider.name = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-10"><div class="form-floating mb-4">${validate_component(Uploader, "Uploader").$$render(
                    $$result,
                    {
                      name: "image",
                      auth_token: data.auth_token,
                      error: form?.errors?.image,
                      is_uploading: imageUploading,
                      cdn_url: provider.data.meta.image
                    },
                    {
                      is_uploading: ($$value) => {
                        imageUploading = $$value;
                        $$settled = false;
                      },
                      cdn_url: ($$value) => {
                        provider.data.meta.image = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-2"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "enable",
                      label: $t("common.enable"),
                      checked: provider.is_enabled
                    },
                    {
                      checked: ($$value) => {
                        provider.is_enabled = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "2" }, {}, {
                default: () => {
                  return `<div class="row"><div class="col-md-6"><div class="form-floating mb-4">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      name: "currency",
                      label: $t("common.currency"),
                      error: form?.errors?.currency,
                      items: currenciesToSelect(currencies),
                      value: provider.currency
                    },
                    {
                      value: ($$value) => {
                        provider.currency = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      name: "api_name",
                      label: $t("common.Enter Provider Name"),
                      error: form?.errors?.api_name,
                      items: paymentProviders,
                      value: provider.api_name
                    },
                    {
                      value: ($$value) => {
                        provider.api_name = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-2"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "compencate_commission",
                      label: $t("common.compencate_commission"),
                      checked: provider.data.rules.compencate_commission
                    },
                    {
                      checked: ($$value) => {
                        provider.data.rules.compencate_commission = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-3"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "fee_percent",
                      placeholder: $t("common.fee_percent"),
                      label: $t("common.fee_percent"),
                      error: form?.errors?.fee_percent,
                      value: provider.data.fees.percent
                    },
                    {
                      value: ($$value) => {
                        provider.data.fees.percent = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-3"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "fee_fixed",
                      placeholder: $t("common.fee_fixed"),
                      label: $t("common.fee_fixed"),
                      error: form?.errors?.fee_fixed,
                      value: provider.data.fees.fixed
                    },
                    {
                      value: ($$value) => {
                        provider.data.fees.fixed = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "without_bonus_wager",
                      placeholder: $t("common.without_bonus_wager"),
                      label: $t("common.without_bonus_wager"),
                      error: form?.errors?.without_bonus_wager,
                      value: provider.data.rules.without_bonus_wager
                    },
                    {
                      value: ($$value) => {
                        provider.data.rules.without_bonus_wager = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <hr> <h4 class="mb-4" data-svelte-h="svelte-1nwq1n1">Provider settings</h4> ${["coinremitter"].includes(provider.api_name) ? `<div class="col-md-4"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "api_key",
                      placeholder: $t("common.Enter") + " Api key",
                      label: $t("common.Enter") + " Api key",
                      error: form?.errors?.api_key,
                      value: provider.data.external_key
                    },
                    {
                      value: ($$value) => {
                        provider.data.external_key = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "api_password",
                      placeholder: $t("common.Enter") + " Api password",
                      label: $t("common.Enter") + " Api password",
                      error: form?.errors?.api_password,
                      value: provider.data.external_password
                    },
                    {
                      value: ($$value) => {
                        provider.data.external_password = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      name: "api_currency",
                      label: $t("common.Enter Provider Name"),
                      error: form?.errors?.api_currency,
                      items: [
                        "BTC",
                        "LTC",
                        "BCH",
                        "ETH",
                        "DOGE",
                        "TCN",
                        "DASH",
                        "USDTERC20",
                        "BNB",
                        "TRX",
                        "USDTTRC20",
                        "XMR"
                      ],
                      value: provider.data.currency
                    },
                    {
                      value: ($$value) => {
                        provider.data.currency = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div>` : ``}</div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "3" }, {}, {
                default: () => {
                  return `<div class="row"><div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "limit_minimum",
                      placeholder: $t("common.limit_minimum"),
                      label: $t("common.limit_minimum"),
                      error: form?.errors?.limit_minimum,
                      value: provider.data.conditions.limit_minimum
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.limit_minimum = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "limit_maximum",
                      placeholder: $t("common.limit_maximum"),
                      label: $t("common.limit_maximum"),
                      error: form?.errors?.limit_maximum,
                      value: provider.data.conditions.limit_maximum
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.limit_maximum = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "minimum_transactions",
                      placeholder: $t("common.minimum_transactions"),
                      label: $t("common.minimum_transactions"),
                      error: form?.errors?.minimum_transactions,
                      value: provider.data.conditions.minimum_transactions
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.minimum_transactions = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "maximum_transactions",
                      placeholder: $t("common.maximum_transactions"),
                      label: $t("common.maximum_transactions"),
                      error: form?.errors?.maximum_transactions,
                      value: provider.data.conditions.maximum_transactions
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.maximum_transactions = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <hr> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "verifications",
                      placeholder: $t("common.Select verifications"),
                      items: verifications,
                      error: form?.errors?.verifications,
                      value: provider.data.conditions.verifications
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.verifications = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "blocked_countries",
                      placeholder: $t("common.Select blocked_countries"),
                      items: countries,
                      error: form?.errors?.blocked_countries,
                      value: provider.data.conditions.blocked_countries
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.blocked_countries = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "allowed_countries",
                      placeholder: $t("common.Select allowed_countries"),
                      items: countries,
                      error: form?.errors?.allowed_countries,
                      value: provider.data.conditions.allowed_countries
                    },
                    {
                      value: ($$value) => {
                        provider.data.conditions.allowed_countries = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "4" }, {}, {
                default: () => {
                  return `${validate_component(Repeater, "Repeater").$$render(
                    $$result,
                    {
                      count: provider?.data?.meta?.texts?.length
                    },
                    {},
                    {
                      default: ({ number }) => {
                        return `<div class="mb-3 col-lg-2 col-xl-2">${validate_component(Select, "Select").$$render(
                          $$result,
                          {
                            id: "language_" + number,
                            name: "texts[" + number + "][language]",
                            label: $t("common.Language"),
                            items: languages,
                            error: null,
                            value: provider?.data?.meta?.texts[number]?.language
                          },
                          {},
                          {}
                        )}</div> <div class="mb-3 col-lg-3 col-xl-3">${validate_component(Select, "Select").$$render(
                          $$result,
                          {
                            id: "key_" + number,
                            name: "texts[" + number + "][key]",
                            label: $t("common.Type"),
                            items: [
                              "title",
                              "description",
                              "seo_title",
                              "seo_keywords",
                              "seo_description"
                            ],
                            error: null,
                            value: provider?.data?.meta?.texts[number]?.key
                          },
                          {},
                          {}
                        )}</div> <div class="mb-3 col-lg-6 col-xl-6">${validate_component(Text, "Text").$$render(
                          $$result,
                          {
                            id: "text_" + number,
                            name: "texts[" + number + "][value]",
                            placeholder: $t("common.Text"),
                            label: $t("common.Text"),
                            error: void 0,
                            value: provider?.data?.meta?.texts[number]?.value
                          },
                          {},
                          {}
                        )}</div>`;
                      }
                    }
                  )}`;
                }
              })} <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  disabled: imageUploading,
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
//# sourceMappingURL=_page.svelte-9a5d82c3.js.map
