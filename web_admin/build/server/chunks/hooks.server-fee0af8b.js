import { l as locales, d as defaultLocale } from './i18n-f1b3a1ed.js';
import jwtDecode from 'jwt-decode';
import './index2-5f3880fe.js';
import './utils-b921a818.js';

async function handle({ event, resolve }) {
  if (event.route.id != null && event.route.id.startsWith("/[lang]/(protected)")) {
    let auth_token = event.cookies.get("auth_token");
    if (!auth_token) {
      return new Response(null, {
        status: 303,
        headers: { location: "/login" }
      });
    }
    let jwt = jwtDecode(auth_token);
    if (Date.now() >= jwt.eat * 1e3) {
      return new Response(null, {
        status: 303,
        headers: { location: "/login" }
      });
    }
    event.locals.user = {
      "username": jwt.sub,
      "role": jwt.role
    };
  }
  const { url, request } = event;
  const { pathname } = url;
  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());
  if (!locale) {
    locale = `${`${request.headers.get("accept-language")}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
    if (!supportedLocales.includes(locale))
      locale = defaultLocale;
    return new Response(void 0, { headers: { "location": `/${locale}${pathname}` }, status: 303 });
  }
  event.locals.lang = locale;
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
  });
}

export { handle };
//# sourceMappingURL=hooks.server-fee0af8b.js.map
