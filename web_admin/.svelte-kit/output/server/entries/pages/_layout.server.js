import { l as loadTranslations, t as translations } from "../../chunks/i18n.js";
const load = async ({ url, locals }) => {
  const { pathname } = url;
  const { lang } = locals;
  const route = pathname.replace(new RegExp(`^/${lang}`), "");
  await loadTranslations(lang, route);
  return { i18n: { route, lang }, translations: translations.get() };
};
export {
  load
};
