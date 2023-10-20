import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-b90e13c7.js';
import { d as dayjs, V as View } from './dayjs-2c43be31.js';
import { f as locale, e as t2 } from './i18n-10a00f9f.js';
import 'toastr';
import { a as api_url } from './app-be9291da.js';
import { B as Button } from './button-b0972938.js';
import 'jquery';
import './index2-3dbd9eb2.js';

const css = {
  code: "div.svelte-1aq0jbp th[data-key=actions]{width:10%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let importButton;
  function mapCells(pageContent) {
    pageContent.forEach((row) => {
      row["name"] = `<img src="${row["image"]}" class="me-2 h-100">${row["name"]}`;
      row["created_at"] = dayjs(row["created_at"] * 1e3).format("DD MMMM YYYY, HH:mm");
      row["actions"] = `<a href="edit/${row["id"]}"><span class="uil uil-pen"></span></a>`;
    });
    return pageContent;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      dayjs.locale($locale);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1eb5dtg_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.games list"))}</title>`, ""}<!-- HEAD_svelte-1eb5dtg_END -->`, ""} <div class="content svelte-1aq0jbp"><div class="row svelte-1aq0jbp"><div class="col-auto svelte-1aq0jbp"><h2 class="mb-0">${escape($t("common.games list"))}</h2></div></div> <div class="row svelte-1aq0jbp">${validate_component(View, "DataTableView").$$render(
      $$result,
      {
        pathname: api_url + "api/dev/games/list",
        columns: [
          { key: "id", title: "ID" },
          { key: "name", parseAs: "unsafe-html" },
          { key: "game_provider" },
          { key: "created_at" },
          {
            key: "actions",
            sortable: false,
            searchable: false,
            filterable: false,
            parseAs: "unsafe-html"
          }
        ],
        map_cells: mapCells,
        auth_token: data.auth_token
      },
      {},
      {
        default: () => {
          return `<form class="d-inline-block" method="POST" action="?/import">${validate_component(Button, "Button").$$render(
            $$result,
            {
              title: $t("common.import games"),
              this: importButton
            },
            {
              this: ($$value) => {
                importButton = $$value;
                $$settled = false;
              }
            },
            {}
          )}</form> <form class="d-inline-block mx-3" method="POST" action="?/import_images">${validate_component(Button, "Button").$$render(
            $$result,
            {
              title: $t("common.import games images"),
              this: importButton
            },
            {
              this: ($$value) => {
                importButton = $$value;
                $$settled = false;
              }
            },
            {}
          )}</form>`;
        }
      }
    )}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_locale();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2a34ac43.js.map
