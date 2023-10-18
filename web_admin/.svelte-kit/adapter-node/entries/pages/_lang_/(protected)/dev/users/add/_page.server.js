import { s as simpleForm } from "../../../../../../../chunks/form.js";
const actions = {
  default: async ({ cookies, request }) => {
    return await simpleForm(
      cookies.get("auth_token"),
      "api/dev/users/add",
      await request.formData(),
      ["email", "password"]
    );
  }
};
export {
  actions
};
