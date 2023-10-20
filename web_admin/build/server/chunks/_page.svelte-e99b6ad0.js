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
import { S as Select } from './select-e2dfa640.js';
import './index2-3dbd9eb2.js';
import './app-4aa3511f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let updateButton;
  let game = data.game;
  let providers = data.providers;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1j1bkwo_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.edit game"))}</title>`, ""}<!-- HEAD_svelte-1j1bkwo_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: $t("common.edit game") + " " + game.name
          },
          {},
          {}
        )} <div class="row">${validate_component(LeftBarImage, "LeftBarImage").$$render($$result, { image: game.image, name: game.name }, {}, {
          default: () => {
            return `<div class="card mb-3"><div class="card-body"><div class="d-flex align-items-center mb-5"><h3>${escape($t("common.information"))}</h3></div> <div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="fas fa-gamepad"></span> <h5 class="text-1000 mb-0 mx-2">${escape($t("common.provider"))}</h5></div> <p class="mb-0 text-800">${escape(game.game_provider)}</p></div> <div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-globe"></span> <h5 class="text-1000 mb-0">Api ${escape($t("common.provider"))}</h5></div> <p class="mb-0 text-800">${escape(game.api_name)}</p></div> <div class="mb-4"><div class="d-flex align-items-center mb-1"><span class="me-2 uil uil-chart"></span> <h5 class="text-1000 mb-0">${escape($t("common.systems_data"))}</h5></div> <p class="mb-0">Id: ${escape(game.id)}</p> <p class="mb-0">System name: ${escape(game.system_name)}</p> <p class="mb-0">System id: ${escape(game.system_id)}</p></div></div></div>`;
          }
        })} ${validate_component(RightBarTab, "RightBarTab").$$render($$result, { tabs: [$t("common.info")] }, {}, {
          default: () => {
            return `<form method="POST" enctype="multipart/form-data">${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="row g-3 mb-6"><input type="hidden" name="id"${add_attribute("value", game.id, 0)}> <div class="col-md-8"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    name: "name",
                    placeholder: $t("common.Enter title"),
                    label: $t("common.Enter title"),
                    error: form?.errors?.name,
                    value: game.name
                  },
                  {
                    value: ($$value) => {
                      game.name = $$value;
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
                    cdn_url: game.image
                  },
                  {
                    is_uploading: ($$value) => {
                      imageUploading = $$value;
                      $$settled = false;
                    },
                    cdn_url: ($$value) => {
                      game.image = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    name: "system_name",
                    placeholder: $t("common.Enter") + " System Name",
                    label: $t("common.Enter") + " System Name",
                    error: form?.errors?.system_name,
                    value: game.system_name
                  },
                  {
                    value: ($$value) => {
                      game.system_name = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Text, "Text").$$render(
                  $$result,
                  {
                    name: "system_id",
                    placeholder: $t("common.Enter") + " System Id",
                    label: $t("common.Enter") + " System Id",
                    error: form?.errors?.system_id,
                    value: game.system_id
                  },
                  {
                    value: ($$value) => {
                      game.system_id = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-4"><div class="form-floating mb-4">${validate_component(Select, "Select").$$render(
                  $$result,
                  {
                    name: "game_provider",
                    label: $t("common.Enter Provider Name"),
                    error: form?.errors?.game_provider,
                    items: providers,
                    value: game.game_provider
                  },
                  {
                    value: ($$value) => {
                      game.game_provider = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-4"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "has_freerounds",
                    label: $t("common.has_freerounds"),
                    checked: game.has_freerounds
                  },
                  {
                    checked: ($$value) => {
                      game.has_freerounds = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-4"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "desktop_enabled",
                    label: $t("common.desktop_enabled"),
                    checked: game.desktop_enabled
                  },
                  {
                    checked: ($$value) => {
                      game.desktop_enabled = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-4"><div class="mb-4">${validate_component(Switch, "Switch").$$render(
                  $$result,
                  {
                    name: "mobile_enabled",
                    label: $t("common.mobile_enabled"),
                    checked: game.mobile_enabled
                  },
                  {
                    checked: ($$value) => {
                      game.mobile_enabled = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div></div> <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
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
                )}</div></div>`;
              }
            })}</form>`;
          }
        })}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e99b6ad0.js.map
