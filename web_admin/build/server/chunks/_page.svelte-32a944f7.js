import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, a as each, b as add_attribute } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-57966412.js';
import { C as Container, H as Header } from './Header-4a2505ee.js';
import { T as Text } from './text-ddfa999a.js';
import { B as Button } from './button-b0972938.js';
import './index-0087e825.js';
import 'toastr';
import './index2-3dbd9eb2.js';

/* empty css                                                                   */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let verifications = data.verifications;
  data.currencies;
  let deleteButton;
  let updateButton;
  let iframe_url = "";
  let { form } = $$props;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1em1w4y_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.user verification documents"))}</title>`, ""}<!-- HEAD_svelte-1em1w4y_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Header, "Header").$$render(
          $$result,
          {
            title: $t("common.user verification documents")
          },
          {},
          {
            default: () => {
              return `<div class="col-12 col-md-auto" data-svelte-h="svelte-ua6rub"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button></div></div>`;
            }
          }
        )} <div class="row gx-5"><div class="col-12 col-xl-8 col-xxl-9"><div class="row">${each(verifications, (item, index) => {
          return `<div class="col"><div class="card h-100 hover-actions-trigger"><form method="POST" class="card-body" enctype="multipart/form-data"><div class="d-flex align-items-center mb-4"><h4 class="mb-2 line-clamp-1 lh-sm flex-1 me-5">${escape(item.tag)}</h4></div> <div class="d-flex align-items-center mb-2"><p class="fw-bold mb-0 text-truncate lh-1">Номер документа : <span class="fw-semi-bold text-primary ms-1">${escape(index + 1)}</span></p></div> <div class="d-flex align-items-center mb-3"><p class="fw-bold mb-0 text-truncate lh-1">Создан : <span class="fw-semi-bold text-primary ms-1">${escape(item.created_at)}</span></p></div> <button class="btn btn-esplatform-primary mb-5" type="button" data-bs-toggle="modal" data-bs-target="#changePasswordModal" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-409bkv">Показать документ</button> <input type="hidden" name="id"${add_attribute("value", item.id, 0)}> ${validate_component(Text, "Text").$$render(
            $$result,
            {
              name: "reason",
              placeholder: $t("common.Enter reason"),
              label: $t("common.Enter reason"),
              error: form?.errors?.reason
            },
            {},
            {}
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              name: "delete",
              title: $t("common.Confirm document decline"),
              class: "mt-2",
              this: deleteButton
            },
            {
              this: ($$value) => {
                deleteButton = $$value;
                $$settled = false;
              }
            },
            {}
          )} </form></div> </div>`;
        })}</div></div> <div class="col-12 col-xl-4 col-xxl-3"><div class="row"><div class="col-12"><div class="card"><form method="POST" class="card-body" enctype="multipart/form-data"><h4 class="card-title mb-4" data-svelte-h="svelte-51yop8">Данные юзера</h4> <p class="fs--4 mb-1" data-svelte-h="svelte-1c2pbk3">Блах1</p> <p class="fs--4 mb-1" data-svelte-h="svelte-1c2pbk3">Блах1</p> <p class="fs--4 mb-1" data-svelte-h="svelte-1c2pbk3">Блах1</p> <p class="fs--4 mb-1" data-svelte-h="svelte-1c2pbk3">Блах1</p> <input type="hidden" name="id"${add_attribute("value", data.id, 0)}> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            title: $t("common.Confirm verification"),
            class: "w-100 mt-7",
            this: updateButton
          },
          {
            this: ($$value) => {
              updateButton = $$value;
              $$settled = false;
            }
          },
          {}
        )}</form></div></div></div></div></div> <div class="modal fade" id="changePasswordModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="changePasswordModal" aria-hidden="true"><div class="modal-dialog modal-md modal-dialog-centered"><div class="modal-content bg-100 p-6"><div class="modal-header border-0 p-0 mb-2" data-svelte-h="svelte-10nb7if"><h3 class="mb-0"></h3> <button class="btn btn-sm btn-esplatform-secondary" data-bs-dismiss="modal" aria-label="Close"><span class="fas fa-times text-danger"></span></button></div> <div class="modal-body px-0"><div class="row flex-center pb-5"><div class="col-12"><a class="d-flex flex-center text-decoration-none mb-7" href="/" data-svelte-h="svelte-1aue178"><div class="d-flex align-items-center fw-bolder fs-5 d-inline-block"><img src="/assets/img/icons/logo.png" alt="escasino" width="58"></div></a> <div class="text-center mb-3" data-svelte-h="svelte-1cwlfv9"><h3 class="text-1000">Просмотр документа</h3></div> <iframe${add_attribute("src", iframe_url, 0)} class="w-100" height="600" title="document"></iframe></div></div></div></div></div></div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-32a944f7.js.map
