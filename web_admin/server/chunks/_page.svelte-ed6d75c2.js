import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute, a as each } from './ssr-f419b600.js';
import { e as t2 } from './i18n-f1b3a1ed.js';
import { B as Button } from './button-36a29707.js';
import './index-a4865dbd.js';
import 'toastr';
import { C as Container, H as Header } from './Header-15daf196.js';
import 'sortablejs';
import './index2-5f3880fe.js';

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
  let category = data.category;
  if (!category) {
    category = {};
    category.meta = {};
  }
  let sortVal;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1q2lf2h_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.sort game category games"))}</title>`, ""}<!-- HEAD_svelte-1q2lf2h_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: $t("common.sort game category games") + " " + category?.name
          },
          {},
          {}
        )} <input type="hidden" name="category_id"${add_attribute("value", category.id, 0)}> <input type="hidden" name="game_ids"${add_attribute("value", sortVal, 0)}> <div class="row"><div id="sortCont" class="col"${add_attribute("this", grid, 0)}>${each(category.games, (game) => {
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
//# sourceMappingURL=_page.svelte-ed6d75c2.js.map
