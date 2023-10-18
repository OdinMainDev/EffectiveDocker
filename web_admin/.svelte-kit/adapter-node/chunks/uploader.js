import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
import * as Toastr from "toastr";
import { a as api_url } from "./app.js";
import { c as t } from "./i18n.js";
const Uploader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { name } = $$props;
  let { auth_token } = $$props;
  let { cdn_url } = $$props;
  let { is_uploading = false } = $$props;
  let { error } = $$props;
  let file;
  function uploadFile(file2) {
    if (!file2) {
      return;
    }
    is_uploading = true;
    const formData = new FormData();
    formData.append("file", file2[0]);
    fetch(api_url + "api/file/upload", {
      method: "POST",
      body: formData,
      headers: { "Authorization": `Bearer: ${auth_token}` }
    }).then((response) => {
      return response.json();
    }).then((result) => {
      if (!result.success) {
        Toastr.error($t("errors.uploading"));
        console.log(result);
      } else {
        cdn_url = result.url;
      }
      is_uploading = false;
    }).catch((error2) => {
      Toastr.error($t("errors.uploading"));
      console.log(error2);
      is_uploading = false;
    });
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.auth_token === void 0 && $$bindings.auth_token && auth_token !== void 0)
    $$bindings.auth_token(auth_token);
  if ($$props.cdn_url === void 0 && $$bindings.cdn_url && cdn_url !== void 0)
    $$bindings.cdn_url(cdn_url);
  if ($$props.is_uploading === void 0 && $$bindings.is_uploading && is_uploading !== void 0)
    $$bindings.is_uploading(is_uploading);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  {
    uploadFile(file);
  }
  $$unsubscribe_t();
  return `<div class="${["position-relative", error !== void 0 ? "is-invalid" : ""].join(" ").trim()}">${is_uploading ? `<div class="position-absolute d-flex align-items-center gap-2 h-100 ms-2"><div class="spinner-border" role="status"></div> <span>${escape($t("common.Loading, please wait"))}</span></div>` : `${cdn_url ? `<div class="position-absolute d-flex align-items-center gap-2 w-100 h-100 ms-2"><img class="h-100"${add_attribute("src", cdn_url, 0)} alt=""> <span>${escape($t("common.File loaded"))}</span> <button class="btn btn-close ms-auto"></button></div>` : ``}`} <input type="hidden"${add_attribute("name", name, 0)}${add_attribute("value", cdn_url, 0)}> <input data-name="image" type="file" class="${[
    "form-control form-control-lg",
    (error !== void 0 ? "is-invalid" : "") + " " + (is_uploading || cdn_url ? "invisible" : "")
  ].join(" ").trim()}" accept="image/gif,image/jpeg,image/pjpeg,image/png,image/svg+xml,image/jpg"></div> <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div>`;
});
export {
  Uploader as U
};
