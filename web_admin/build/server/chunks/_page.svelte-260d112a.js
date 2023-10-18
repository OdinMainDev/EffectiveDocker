import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-f419b600.js';
import { d as dayjs, V as View } from './dayjs-e3ec37ea.js';
import { f as locale, e as t2 } from './i18n-f1b3a1ed.js';
import 'toastr';
import { a as api_url } from './app-ac238baf.js';
import 'jquery';
import './index2-5f3880fe.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-1oih5fb_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.payment providers list"))}</title>`, ""}<!-- HEAD_svelte-1oih5fb_END -->`, ""} <div class="content svelte-1aq0jbp"><div class="row svelte-1aq0jbp"><div class="col-auto svelte-1aq0jbp"><h2 class="mb-0">${escape($t("common.payment providers list"))}</h2></div></div> <div class="row svelte-1aq0jbp">${validate_component(View, "DataTableView").$$render(
    $$result,
    {
      pathname: api_url + "api/users/bots/list",
      columns: [
        { key: "id", title: "ID" },
        { key: "name" },
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
//# sourceMappingURL=_page.svelte-260d112a.js.map
