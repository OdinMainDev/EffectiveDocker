import { f as fail } from './index-0087e825.js';
import 'toastr';
import './i18n-57966412.js';
import { a as api_url } from './app-184eec4c.js';

function formDataToJson(data) {
  let result = {};
  data.forEach(function(value, key) {
    setDeepValue(result, key, value);
  });
  result = renumberArrays(result);
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
function setDeepValue(obj, path, value) {
  if (typeof path === "string") {
    path = path.split(".");
  }
  if (path.length > 1) {
    const pathItem = path.shift();
    const matches = [...pathItem.matchAll(/(.*)\[(\d*?)]$/g)];
    if (matches.length === 0) {
      if (obj[pathItem] == null || typeof obj[pathItem] !== "object") {
        obj[pathItem] = {};
      }
      setDeepValue(obj[pathItem], path, value);
    } else {
      const key = matches[0][1];
      let index = matches[0][2];
      if (index === void 0 || index === null || index === "") {
        index = 0;
      } else {
        index = parseInt(index);
      }
      if (obj[key] == null) {
        obj[key] = Array(index).fill(null);
      } else if (!Array.isArray(obj[key])) {
        const val = obj[key];
        obj[key] = Array(index).fill(null);
        obj[0] = val;
      }
      if (obj[key][index] == null) {
        obj[key][index] = {};
      }
      setDeepValue(obj[key][index], path, value);
    }
  } else {
    assignOrAppend(obj, path[0], value);
  }
}
function assignOrAppend(obj, key, value) {
  const matches = [...key.matchAll(/(.*)\[(\d*?)]$/g)];
  if (matches.length > 0) {
    let key2 = matches[0][1];
    let index = matches[0][2];
    if (index === void 0 || index === null) {
      index = 0;
    } else {
      index = parseInt(index);
    }
    if (!obj.hasOwnProperty(key2)) {
      obj[key2] = Array(index).fill(null);
    } else if (!Array.isArray(obj[key2])) {
      const val = obj[key2];
      obj[key2] = Array(index).fill(null);
      obj[key2][0] = val;
    }
    obj[key2][index] = value;
  } else {
    if (!obj.hasOwnProperty(key)) {
      obj[key] = value;
    } else {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    }
  }
}
function renumberArrays(source) {
  if (Array.isArray(source)) {
    return source.map(function(element) {
      return renumberArrays(element);
    }).filter(function(element) {
      return element;
    });
  } else if (source !== null && typeof source === "object") {
    for (const key of Object.keys(source)) {
      source[key] = renumberArrays(source[key]);
    }
    return source;
  }
  return source;
}

export { formDataToJson as f, parseErrors as p, simpleForm as s };
//# sourceMappingURL=form-be9e8f60.js.map
