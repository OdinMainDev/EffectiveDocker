import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { U as Uploader } from './uploader-56a8e9b3.js';
import { T as Text } from './text-da699eed.js';
import { S as Switch } from './switch-f2dcd47f.js';
import { B as Button } from './button-36a29707.js';
import './index-a4865dbd.js';
import 'toastr';
import { C as Container, H as Header } from './Header-15daf196.js';
import { L as LeftBarImage, R as RightBarTab } from './RightBarTab-38437685.js';
import { T as TabContent } from './TabContent-b15f1635.js';
import { R as Repeater } from './Repeater-d1d33d0f.js';
import { S as Select } from './select-5532be67.js';
import './index2-5f3880fe.js';
import './app-a6748f59.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let game = data.game;
  let languages = data.languages;
  let imageUploading;
  let game_data = game.game_data ? game.game_data : game;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1j1bkwo_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.edit game"))}</title>`, ""}<!-- HEAD_svelte-1j1bkwo_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: $t("common.edit game") + " " + game_data.name
          },
          {},
          {}
        )} <div class="row">${validate_component(LeftBarImage, "LeftBarImage").$$render(
          $$result,
          {
            image: game_data.image,
            name: game_data.name
          },
          {},
          {
            default: () => {
              return `<div class="card mb-3"><div class="card-body"><div class="d-flex align-items-center mb-5"><h3>${escape($t("common.information"))}</h3></div> <div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="fas fa-gamepad"></span> <h5 class="text-1000 mb-0 mx-2">${escape($t("common.provider"))}</h5></div> <p class="mb-0 text-800">${escape(game.game_provider)}</p></div> <div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-globe"></span> <h5 class="text-1000 mb-0">Api ${escape($t("common.provider"))}</h5></div> <p class="mb-0 text-800">${escape(game.api_name)}</p></div> <div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-chart"></span> <h5 class="text-1000 mb-0">${escape($t("common.systems_data"))}</h5></div> <p class="mb-0">Id: ${escape(game.id)}</p> <p class="mb-0">Original name: ${escape(game.name)}</p> <p class="mb-0">System name: ${escape(game.system_name)}</p> <p class="mb-0">System id: ${escape(game.system_id)}</p> <p class="mb-0">Has Freerounds: ${escape(game.has_freerounds ? "true" : "false")}</p></div></div></div>`;
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
              return `<form method="POST" enctype="multipart/form-data">${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="row"><input type="hidden" name="game_id"${add_attribute("value", game.id, 0)}> <div class="col-md-8"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                    $$result,
                    {
                      name: "name",
                      placeholder: $t("common.Enter title"),
                      label: $t("common.Enter title"),
                      error: form?.errors?.name,
                      value: game_data.name
                    },
                    {
                      value: ($$value) => {
                        game_data.name = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Uploader, "Uploader").$$render(
                    $$result,
                    {
                      name: "image",
                      auth_token: data.auth_token,
                      error: form?.errors?.image,
                      is_uploading: imageUploading,
                      cdn_url: game_data.image
                    },
                    {
                      is_uploading: ($$value) => {
                        imageUploading = $$value;
                        $$settled = false;
                      },
                      cdn_url: ($$value) => {
                        game_data.image = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "desktop_enabled",
                      label: $t("common.desktop_enabled"),
                      checked: game_data.desktop_enabled
                    },
                    {
                      checked: ($$value) => {
                        game_data.desktop_enabled = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="col-md-6"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                    $$result,
                    {
                      name: "mobile_enabled",
                      label: $t("common.mobile_enabled"),
                      checked: game_data.mobile_enabled
                    },
                    {
                      checked: ($$value) => {
                        game_data.mobile_enabled = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { id: "2" }, {}, {
                default: () => {
                  return `${validate_component(Repeater, "Repeater").$$render($$result, { count: game_data?.meta?.texts?.length }, {}, {
                    default: ({ number }) => {
                      return `<div class="mb-3 col-lg-2 col-xl-2">${validate_component(Select, "Select").$$render(
                        $$result,
                        {
                          id: "language_" + number,
                          name: "texts[" + number + "][language]",
                          label: $t("common.Language"),
                          items: languages,
                          error: null,
                          value: game_data?.meta?.texts[number]?.language
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
                          value: game_data?.meta?.texts[number]?.key
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
                          value: game_data?.meta?.texts[number]?.value
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
              )}</div></form>`;
            }
          }
        )}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1254ff67.js.map
