import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-b90e13c7.js';
import { d as dayjs, V as View } from './dayjs-2c43be31.js';
import { f as locale, e as t2 } from './i18n-10a00f9f.js';
import { a as api_url } from './app-4aa3511f.js';
import { E as Email } from './Email-0b92e72e.js';
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
      row["actions"] = `<a href="email/edit/${row["id"]}"><span class="uil uil-pen"></span></a>`;
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
  return `${$$result.head += `<!-- HEAD_svelte-huxf20_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.email templates list"))}</title>`, ""}<!-- HEAD_svelte-huxf20_END -->`, ""} <div class="content svelte-1aq0jbp"><div class="email-container svelte-1aq0jbp"><div class="row svelte-1aq0jbp"><div class="col-auto svelte-1aq0jbp"><h2 class="mb-0">${escape($t("common.email templates list"))}</h2></div></div> ${validate_component(Email, "Email").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(View, "DataTableView").$$render(
        $$result,
        {
          pathname: api_url + "api/email/templates/list",
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
      )}`;
    }
  })}</div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9906d3a6.js.map
