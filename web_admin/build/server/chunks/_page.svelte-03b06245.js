import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute, a as each } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-3e25f381.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import { C as Container, H as Header } from './Header-deb6fa10.js';
import 'sortablejs';
import './index2-3dbd9eb2.js';

const css = {
  code: ".grid-square.svelte-23yvvw{width:100px;height:100px;display:inline-block;background-color:#fff;border:solid 1px rgb(0,0,0,0.2);padding:10px;margin:12px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let grid;
  let updateButton;
  let provider = data.provider;
  if (!provider) {
    provider = {};
    provider.meta = {};
  }
  let sortVal;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-qzq56o_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.sort game provider games"))}</title>`, ""}<!-- HEAD_svelte-qzq56o_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: $t("common.sort game provider games") + " " + provider?.name
          },
          {},
          {}
        )} <input type="hidden" name="provider_id"${add_attribute("value", provider.id, 0)}> <input type="hidden" name="game_ids"${add_attribute("value", sortVal, 0)}> <div class="row"><div id="sortCont" class="col"${add_attribute("this", grid, 0)}>${each(provider.games, (game) => {
          return `<div class="grid-square svelte-23yvvw"${add_attribute("data-id", game.game_id, 0)} style="background-image: url('')">${escape(game.game_id)}</div>`;
        })}</div></div> <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
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
        )}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-03b06245.js.map
