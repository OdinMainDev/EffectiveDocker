import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-10a00f9f.js';
import { U as Uploader } from './uploader-6a63055f.js';
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
import './index2-3dbd9eb2.js';
import './app-4aa3511f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let deleteButton;
  let slider = data.slider;
  let languages = data.languages;
  let countries = data.countries;
  if (!slider) {
    slider = {};
    slider.data = {};
  }
  if (!slider.data.texts) {
    slider.data.texts = [];
    slider.data.texts[0] = {};
  }
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-64wjzg_START -->${$$result.title = `<title>Effective Solution - ${escape(slider.id ? $t("common.edit slider") : $t("common.add slider"))}</title>`, ""}<!-- HEAD_svelte-64wjzg_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: slider.id ? $t("common.edit slider") : $t("common.add slider")
          },
          {},
          {
            default: () => {
              return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-etm0ip"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/games/categories/list">${escape($t("common.return to list"))}</a></li> ${slider.id ? `<li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li>` : ``}</ul></div></div>`;
            }
          }
        )} <div class="row">${validate_component(LeftBarImage, "LeftBarImage").$$render($$result, { image: slider.data.image, name: "" }, {}, {
          default: () => {
            return `${slider.id ? `<div class="card mb-3"><div class="card-body"><div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-chart"></span> <h5 class="text-1000 mb-0">${escape($t("common.systems_data"))}</h5></div> <p class="mb-0">Id: ${escape(slider.id)}</p></div></div></div>` : ``}`;
          }
        })} ${validate_component(RightBarTab, "RightBarTab").$$render(
          $$result,
          {
            tabs: [$t("common.general data"), $t("common.texts")]
          },
          {},
          {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="row">${slider.id ? `<input type="hidden" name="id"${add_attribute("value", slider.id, 0)}>` : ``} <div class="col-md-10"><div class="form-floating mb-4">${validate_component(Uploader, "Uploader").$$render(
                    $$result,
                    {
                      name: "image",
                      auth_token: data.auth_token,
                      error: form?.errors?.image,
                      is_uploading: imageUploading,
                      cdn_url: slider.data.image
                    },
                    {
                      is_uploading: ($$value) => {
                        imageUploading = $$value;
                        $$settled = false;
                      },
                      cdn_url: ($$value) => {
                        slider.data.image = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-2"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "enable",
                      label: $t("common.enable"),
                      checked: slider.is_enabled
                    },
                    {
                      checked: ($$value) => {
                        slider.is_enabled = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "url",
                      placeholder: $t("common.Enter") + " URL",
                      label: $t("common.Enter") + " URL",
                      error: form?.errors?.url,
                      value: slider.url
                    },
                    {
                      value: ($$value) => {
                        slider.url = $$value;
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
                      value: slider.position
                    },
                    {
                      value: ($$value) => {
                        slider.position = $$value;
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
                      value: slider.data.blocked_countries
                    },
                    {
                      value: ($$value) => {
                        slider.data.blocked_countries = $$value;
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
                      value: slider.data.allowed_countries
                    },
                    {
                      value: ($$value) => {
                        slider.data.allowed_countries = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "2" }, {}, {
                default: () => {
                  return `${validate_component(Repeater, "Repeater").$$render($$result, { count: slider?.data?.texts?.length }, {}, {
                    default: ({ number }) => {
                      return `<div class="mb-3 col-lg-2 col-xl-2">${validate_component(Select, "Select").$$render(
                        $$result,
                        {
                          id: "language_" + number,
                          name: "texts[" + number + "][language]",
                          label: $t("common.Language"),
                          items: languages,
                          error: null,
                          value: slider?.data?.texts[number]?.language
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
                            "button_text",
                            "seo_title",
                            "seo_keywords",
                            "seo_description"
                          ],
                          error: null,
                          value: slider?.data?.texts[number]?.key
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
                          value: slider?.data?.texts[number]?.value
                        },
                        {},
                        {}
                      )}</div>`;
                    }
                  })}`;
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
//# sourceMappingURL=_page.svelte-2c8ff185.js.map
