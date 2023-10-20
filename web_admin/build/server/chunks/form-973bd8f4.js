import { f as fail } from './index-0087e825.js';
import 'toastr';
import './i18n-10a00f9f.js';
import { a as api_url } from './app-be9291da.js';

function formDataToJson(data) {
  let result = {};
  data.forEach(function(value, key) {
    if (!result.hasOwnProperty(key)) {
      result[key] = value;
      return;
    }
    if (!Array.isArray(result[key])) {
      result[key] = [result[key]];
    }
    result[key].push(value);
  });
  return result;
}
function parseErrors(message, errors, valid_fields) {
  if (typeof errors == "object" && Object.keys(errors).length > 0) {
    let toast = void 0;
    for (const key of Object.keys(errors)) {
      const newKey = key.replace(/\[.*]/, "");
      errors[newKey] = errors[key];
      if (valid_fields.length > 0 && !valid_fields.includes(newKey)) {
        toast = "data_fail";
      }
    }
    return fail(400, {
      errors,
      error_toast: toast
    });
  }
  if (message !== void 0) {
    return fail(400, {
      error_toast: message
    });
  } else {
    return fail(400, {
      error_toast: "bad_response"
    });
  }
}
async function simpleForm(token, url, form = {}, fields = []) {
  var jsonData = {};
  if (form.entries)
    jsonData = Object.fromEntries(form.entries());
  let response = await fetch(
    api_url + url,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer: ${token}`
      },
      body: JSON.stringify(jsonData)
    }
  ).then((r) => r.json()).catch((error) => {
    console.log(error);
  });
  if (response.success) {
    if (response.message !== void 0) {
      return {
        message: response.message
      };
    } else {
      return {
        message: "action success"
      };
    }
  }
  return parseErrors(response.message, response?.errors, fields);
}

export { formDataToJson as f, parseErrors as p, simpleForm as s };
//# sourceMappingURL=form-973bd8f4.js.map
