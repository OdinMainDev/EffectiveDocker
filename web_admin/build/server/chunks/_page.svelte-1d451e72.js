import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-10a00f9f.js';
import { U as Uploader } from './uploader-759935ce.js';
import { T as Text } from './text-84ad8c2f.js';
import { S as Switch } from './switch-a8bae24d.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { C as Container, H as Header } from './Header-7cc35c68.js';
import { L as LeftBarImage, R as RightBarTab } from './RightBarTab-dd1343b3.js';
import { T as TabContent } from './TabContent-1d8de319.js';
import { R as Repeater } from './Repeater-c0111e06.js';
import { C as Combobox } from './combobox-e912e96a.js';
import { S as Select } from './select-e2dfa640.js';
import { g as gamesToSelect } from './games-df2660b2.js';
import './index2-3dbd9eb2.js';
import './app-be9291da.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let deleteButton;
  let category = data.category;
  if (!category) {
    category = {};
    category.meta = {};
    category.meta.texts = {};
  }
  let languages = data.languages;
  let countries = data.countries;
  let games = data.games;
  let gameProviders = data.gameProviders;
  let imageUploading;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-ur7on1_START -->${$$result.title = `<title>Effective Solution - ${escape(category.id ? $t("common.edit game category") : $t("common.add game category"))}</title>`, ""}<!-- HEAD_svelte-ur7on1_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: (category.id ? $t("common.edit game category") : $t("common.add game category")) + " " + category?.name
          },
          {},
          {
            default: () => {
              return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-etm0ip"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/games/categories/list">${escape($t("common.return to list"))}</a></li> ${category.id ? `<li><a class="dropdown-item" href="${"/games/categories/sort/" + escape(category.id.toString(), true)}">${escape($t("common.sort games"))}</a></li> <li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li>` : ``}</ul></div></div>`;
            }
          }
        )} <div class="row">${validate_component(LeftBarImage, "LeftBarImage").$$render(
          $$result,
          {
            image: category.meta.image,
            name: category.name
          },
          {},
          {
            default: () => {
              return `${category.id ? `<div class="card mb-3"><div class="card-body"><div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-chart"></span> <h5 class="text-1000 mb-0">${escape($t("common.systems_data"))}</h5></div> <p class="mb-0">Id: ${escape(category.id)}</p> <p class="mb-0">Games count: ${escape(category.games.length ? category.games.length : 0)}</p></div></div></div>` : ``}`;
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
                  return `<div class="row">${category.id ? `<input type="hidden" name="id"${add_attribute("value", category.id, 0)}>` : ``} <div class="col-md-7"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "name",
                      placeholder: $t("common.Enter title"),
                      label: $t("common.Enter title"),
                      error: form?.errors?.name,
                      value: category.name
                    },
                    {
                      value: ($$value) => {
                        category.name = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-3"><div class="form-floating mb-4">${validate_component(Uploader, "Uploader").$$render(
                    $$result,
                    {
                      name: "image",
                      auth_token: data.auth_token,
                      error: form?.errors?.image,
                      is_uploading: imageUploading,
                      cdn_url: category.meta.image
                    },
                    {
                      is_uploading: ($$value) => {
                        imageUploading = $$value;
                        $$settled = false;
                      },
                      cdn_url: ($$value) => {
                        category.meta.image = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-2"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "enable",
                      label: $t("common.enable"),
                      checked: category.is_enabled
                    },
                    {
                      checked: ($$value) => {
                        category.is_enabled = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "url",
                      placeholder: $t("common.Enter") + " Url",
                      label: $t("common.Enter") + " Url",
                      error: form?.errors?.url,
                      value: category.url
                    },
                    {
                      value: ($$value) => {
                        category.url = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "position",
                      placeholder: $t("common.Enter position"),
                      label: $t("common.Enter position"),
                      error: form?.errors?.position,
                      value: category.position
                    },
                    {
                      value: ($$value) => {
                        category.position = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <hr> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "blocked_countries",
                      placeholder: $t("common.Select blocked_countries"),
                      items: countries,
                      error: form?.errors?.blocked_countries,
                      value: category.meta.blocked_countries
                    },
                    {
                      value: ($$value) => {
                        category.meta.blocked_countries = $$value;
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
                      value: category.meta.allowed_countries
                    },
                    {
                      value: ($$value) => {
                        category.meta.allowed_countries = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "game_ids",
                      placeholder: $t("common.Select games"),
                      bind: category.game_ids,
                      value: category.games,
                      items: gamesToSelect(games),
                      error: form?.errors?.game_ids
                    },
                    {},
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Combobox, "ComboBox").$$render(
                    $$result,
                    {
                      name: "game_providers",
                      placeholder: $t("common.Select game providers"),
                      items: gameProviders,
                      error: form?.errors?.game_providers,
                      value: category.game_providers
                    },
                    {
                      value: ($$value) => {
                        category.game_providers = $$value;
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
                      count: category?.data?.meta?.texts?.length
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
                            value: category?.data?.meta?.texts[number]?.language
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
                            value: category?.data?.meta?.texts[number]?.key
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
                            value: category?.data?.meta?.texts[number]?.value
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
//# sourceMappingURL=_page.svelte-1d451e72.js.map
