import { a as api_url } from "../../../../../chunks/app.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
import { p as parseErrors } from "../../../../../chunks/form.js";
const actions = {
  default: async ({ cookies, request, params }) => {
    const data = await request.formData();
    let email = data.get("email");
    let password = data.get("password");
    let key = params.key;
    if (key === null || key.length === 0) {
      return fail(400, {
        email,
        error_toast: "data_fail"
      });
    }
    const res = await fetch(api_url + "auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        api_key: key
      })
    });
    if (res.status === 429) {
      return fail(400, {
        email,
        error_toast: "blocked_requests"
      });
    }
    let json;
    try {
      json = await res.json();
    } catch (e) {
      return fail(400, {
        email,
        error_toast: "bad_response"
      });
    }
    if (json.success) {
      cookies.set("auth_token", json.token, {
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 30
      });
      throw redirect(303, "/dashboard");
    }
    return parseErrors(null, json?.errors, ["email", "password"]);
  }
};
export {
  actions
};
