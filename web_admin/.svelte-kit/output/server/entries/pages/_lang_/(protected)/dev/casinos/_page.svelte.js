import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../chunks/ssr.js";
import "dayjs/locale/en.js";
import "dayjs/locale/ru.js";
import { f as locale, c as t } from "../../../../../../chunks/i18n.js";
import { a as api_url } from "../../../../../../chunks/app.js";
import { V as View } from "../../../../../../chunks/dayjs.js";
import dayjs from "dayjs";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1aq0jbp th[data-key=actions]{width:10%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { data } = $$props;
  function mapCells(pageContent) {
    pageContent.forEach((row) => {
      row["name"] = `<img src="${row["image"]}" class="me-2 h-100">${row["name"]}`;
      row["created_at"] = dayjs(row["created_at"] * 1e3).format("DD MMMM YYYY, HH:mm");
      row["actions"] = `<a href="edit/${row["id"]}"><span class="uil uil-pen"></span></a> <span class="uil uil-download-alt ms-2"></span>`;
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
  return `${$$result.head += `<!-- HEAD_svelte-10cuqhn_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.casinos list"))}</title>`, ""}<!-- HEAD_svelte-10cuqhn_END -->`, ""} <div class="content svelte-1aq0jbp"><div class="row g-3 mb-4 svelte-1aq0jbp"><div class="col-auto svelte-1aq0jbp"><h2 class="mb-0">${escape($t("common.casinos list"))}</h2></div></div> <div class="row svelte-1aq0jbp"><div class="col-xl-12 svelte-1aq0jbp">${validate_component(View, "DataTableView").$$render(
    $$result,
    {
      pathname: api_url + "api/dev/casinos/list",
      columns: [
        { key: "name", parseAs: "unsafe-html" },
        { key: "enable" },
        { key: "apikey", title: "API KEY" },
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
        return `<div class="svelte-1aq0jbp"><a href="${"/" + escape($locale, true) + "/dev/casinos/edit"}" class="btn btn-primary me-4"><span class="fas fa-plus me-2"></span> ${escape($t("common.add casino"))}</a></div>`;
      }
    }
  )}</div></div> </div>`;
});
export {
  Page as default
};
