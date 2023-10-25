import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-b90e13c7.js';
import { d as dayjs, V as View } from './dayjs-3de21b24.js';
import { f as locale, e as t2 } from './i18n-3e25f381.js';
import 'toastr';
import { a as api_url } from './app-effdffe5.js';
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
  function mapCells(pageContent) {
    pageContent.forEach((row) => {
      row["created_at"] = dayjs(row["created_at"] * 1e3).format("DD MMMM YYYY, HH:mm");
      row["actions"] = `<a href="edit/${row["id"]}"><span class="uil uil-pen"></span></a>`;
    });
    return pageContent;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    dayjs.locale($locale);
  }
  $$unsubscribe_locale();
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-jhlh8h_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.game providers list"))}</title>`, ""}<!-- HEAD_svelte-jhlh8h_END -->`, ""} <div class="content svelte-1aq0jbp"><div class="row svelte-1aq0jbp"><div class="col-auto svelte-1aq0jbp"><h2 class="mb-0">${escape($t("common.game providers list"))}</h2></div></div> <div class="row svelte-1aq0jbp">${validate_component(View, "DataTableView").$$render(
    $$result,
    {
      pathname: api_url + "api/games/providers/list",
      columns: [
        { key: "id", title: "ID" },
        { key: "name" },
        { key: "url" },
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
    {}
  )}</div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c03e405f.js.map
