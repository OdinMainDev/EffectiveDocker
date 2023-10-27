import { a as addTranslations, s as setRoute, b as setLocale, c as loadTranslations, t as translations } from './i18n-57966412.js';
import './index2-3dbd9eb2.js';
import './utils-6799e008.js';

const load$1 = async ({ data }) => {
  const { i18n, translations } = data;
  const { lang, route } = i18n;
  addTranslations(translations);
  await setRoute(route);
  await setLocale(lang);
  return i18n;
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = async ({ url, locals }) => {
  const { pathname } = url;
  const { lang } = locals;
  const route = pathname.replace(new RegExp(`^/${lang}`), "");
  await loadTranslations(lang, route);
  return { i18n: { route, lang }, translations: translations.get() };
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-2055d412.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.aff09437.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/layout.9c7d7edf.js","_app/immutable/chunks/index.1d35485e.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-93889e78.js.map
