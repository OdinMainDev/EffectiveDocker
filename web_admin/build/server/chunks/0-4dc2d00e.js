import { a as addTranslations, s as setRoute, b as setLocale, c as loadTranslations, t as translations } from './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

const load$1 = async ({ data }) => {
  const { i18n, translations } = data;
  const { lang, route } = i18n;
  addTranslations(translations);
  await setRoute(route);
  await setLocale(lang);
  return i18n;
};
const ssr = false;

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1,
  ssr: ssr
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
const component = async () => component_cache ??= (await import('./layout.svelte-90928951.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.b25ce5c7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/layout.fdcff010.js","_app/immutable/chunks/index.ea9f66e7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-4dc2d00e.js.map
