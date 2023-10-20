import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-10a00f9f.js';
import { U as Uploader } from './uploader-6a63055f.js';
import { T as Text } from './text-84ad8c2f.js';
import { S as Switch } from './switch-a8bae24d.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { w as wager_types } from './app-4aa3511f.js';
import { C as Container, H as Header } from './Header-7cc35c68.js';
import { L as LeftBarImage, R as RightBarTab } from './RightBarTab-dd1343b3.js';
import { T as TabContent } from './TabContent-1d8de319.js';
import { R as Repeater } from './Repeater-c0111e06.js';
import { C as Combobox } from './combobox-e912e96a.js';
import { S as Select } from './select-e2dfa640.js';
import { c as currenciesToSelect } from './currency-56b90870.js';
import './index2-3dbd9eb2.js';

function gameCategoriesToSelect(data) {
  let response = [];
  data.forEach((element) => {
    response.push({
      label: element.id + ": " + element.name,
      value: element.id
    });
  });
  return response;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let imageUploading;
  let settings = data.settings;
  if (!settings.settings) {
    settings.settings = {};
  }
  if (!settings.settings.public) {
    settings.settings.public = {};
  }
  if (!settings.settings.public.names) {
    settings.settings.public.names = {};
  }
  let languages = data.languages;
  let countries = data.countries;
  let currencies = data.currencies;
  let categories = data.categories;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1oqahnx_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.settings general"))}</title>`, ""}<!-- HEAD_svelte-1oqahnx_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render($$result, { title: $t("common.settings general") }, {}, {})} <div class="row">${validate_component(LeftBarImage, "LeftBarImage").$$render(
          $$result,
          {
            image: settings.settings.public.logo,
            name: settings.name
          },
          {},
          {
            default: () => {
              return `<div class="card mb-3"><div class="card-body"><div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-chart"></span> <h5 class="text-1000 mb-0">${escape($t("common.systems_data"))}</h5></div> <p class="mb-0">Languages: ${escape(settings.settings.languages.join(", "))}</p> <p class="mb-0">Currencies: ${escape(settings.settings.currencies.join(", "))}</p></div></div></div>`;
            }
          }
        )} ${validate_component(RightBarTab, "RightBarTab").$$render(
          $$result,
          {
            tabs: [$t("common.info"), $t("common.texts")]
          },
          {},
          {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="row"><div class="col-md-6 mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "name",
                      placeholder: $t("common.Enter title"),
                      label: $t("common.Enter title"),
                      error: form?.errors?.name,
                      value: settings.name
                    },
                    {
                      value: ($$value) => {
                        settings.name = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-4 mb-4">${validate_component(Uploader, "Uploader").$$render(
                    $$result,
                    {
                      name: "image",
                      auth_token: data.auth_token,
                      error: form?.errors?.image,
                      is_uploading: imageUploading,
                      cdn_url: settings.settings.public.logo
                    },
                    {
                      is_uploading: ($$value) => {
                        imageUploading = $$value;
                        $$settled = false;
                      },
                      cdn_url: ($$value) => {
                        settings.settings.public.logo = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "enable",
                      label: $t("common.is maintenance"),
                      checked: settings.settings.system.maintenance
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.system.maintenance = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "main_url",
                      placeholder: $t("common.Enter main url"),
                      label: $t("common.Enter main url"),
                      error: form?.errors?.name,
                      value: settings.settings.system.main_url
                    },
                    {
                      value: ($$value) => {
                        settings.settings.system.main_url = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-4 mb-4">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "category_on_home",
                      name: "category_on_home",
                      placeholder: $t("common.Select home category games"),
                      label: $t("common.Select home category games"),
                      items: gameCategoriesToSelect(categories),
                      error: settings.settings.system.home_games_category,
                      value: settings.settings.system.home_games_category
                    },
                    {
                      value: ($$value) => {
                        settings.settings.system.home_games_category = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-4 mb-4">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "main_currency",
                      name: "main_currency",
                      placeholder: $t("common.Select main currency"),
                      label: $t("common.Select main currency"),
                      items: currenciesToSelect(currencies),
                      error: settings.settings.main_currency,
                      value: settings.settings.main_currency
                    },
                    {
                      value: ($$value) => {
                        settings.settings.main_currency = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-4 mb-4">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "wager_type",
                      name: "wager_type",
                      placeholder: $t("common.Select wager_type"),
                      label: $t("common.Select wager_type"),
                      items: wager_types,
                      error: settings.settings.system.wager_type,
                      value: settings.settings.system.wager_type
                    },
                    {
                      value: ($$value) => {
                        settings.settings.system.wager_type = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "wager_break",
                      label: $t("common.is wager_break"),
                      checked: settings.settings.system.wager_break
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.system.wager_break = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-4 mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "wager_apply_bonus_games",
                      label: $t("common.is wager_apply_bonus_games"),
                      checked: settings.settings.system.wager_apply_bonus_games
                    },
                    {
                      checked: ($$value) => {
                        settings.settings.system.wager_apply_bonus_games = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "blocked_countries",
                      placeholder: $t("common.Select blocked_countries"),
                      items: countries,
                      error: form?.errors?.blocked_countries,
                      value: settings.settings.system.blocked_countries
                    },
                    {
                      value: ($$value) => {
                        settings.settings.system.blocked_countries = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "allowed_countries",
                      placeholder: $t("common.Select allowed_countries"),
                      items: countries,
                      error: form?.errors?.allowed_countries,
                      value: settings.settings.system.allowed_countries
                    },
                    {
                      value: ($$value) => {
                        settings.settings.system.allowed_countries = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "2" }, {}, {
                default: () => {
                  return `${validate_component(Repeater, "Repeater").$$render(
                    $$result,
                    {
                      count: settings.settings.public.names?.length
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
                            value: settings.settings.public.names[number]?.language
                          },
                          {},
                          {}
                        )}</div> <div class="mb-3 col-lg-9 col-xl-9">${validate_component(Text, "Text").$$render(
                          $$result,
                          {
                            id: "text_" + number,
                            name: "texts[" + number + "][value]",
                            placeholder: $t("common.Enter title"),
                            label: $t("common.Enter title"),
                            error: void 0,
                            value: settings.settings.public.names[number]?.value
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
//# sourceMappingURL=_page.svelte-b47422d2.js.map
