import { s as simpleForm } from "../../../../../chunks/form.js";
const actions = {
  default: async ({ cookies, request }) => {
    return await simpleForm(
      cookies.get("auth_token"),
      "api/admin/profile",
      await request.formData(),
      ["oldpassword", "password", "repassword"]
    );
  }
};
export {
  actions
};
