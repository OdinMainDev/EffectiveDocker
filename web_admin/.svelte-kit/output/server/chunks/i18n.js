import { w as writable, d as derived } from "./index2.js";
import { g as get_store_value } from "./utils.js";
import C$1 from "@sveltekit-i18n/parser-default";
var H = Object.defineProperty, q = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var j = (o, t3, e) => t3 in o ? H(o, t3, { enumerable: true, configurable: true, writable: true, value: e }) : o[t3] = e, n$1 = (o, t3) => {
  for (var e in t3 || (t3 = {}))
    A.call(t3, e) && j(o, e, t3[e]);
  if (S)
    for (var e of S(t3))
      N.call(t3, e) && j(o, e, t3[e]);
  return o;
}, u$1 = (o, t3) => q(o, B(t3));
var T = (o, t3) => {
  var e = {};
  for (var a in o)
    A.call(o, a) && t3.indexOf(a) < 0 && (e[a] = o[a]);
  if (o != null && S)
    for (var a of S(o))
      t3.indexOf(a) < 0 && N.call(o, a) && (e[a] = o[a]);
  return e;
};
var C = ["error", "warn", "debug"], z = ({ logger: o = console, level: t3 = C[1], prefix: e = "[i18n]: " }) => C.reduce((a, r, s2) => u$1(n$1({}, a), { [r]: (i2) => C.indexOf(t3) >= s2 && o[r](`${e}${i2}`) }), {}), d$1 = z({}), V = (o) => {
  d$1 = o;
};
var F = (l2) => {
  var c = l2, { parser: o, key: t3, params: e, translations: a, locale: r, fallbackLocale: s2 } = c, i2 = T(c, ["parser", "key", "params", "translations", "locale", "fallbackLocale"]);
  if (!t3)
    return d$1.warn(`No translation key provided ('${r}' locale). Skipping translation...`), "";
  if (!r)
    return d$1.warn(`No locale provided for '${t3}' key. Skipping translation...`), "";
  let f2 = (a[r] || {})[t3];
  return s2 && f2 === void 0 && (f2 = (a[s2] || {})[t3]), i2.hasOwnProperty("fallbackValue") && f2 === void 0 ? i2.fallbackValue : o.parse(f2, e, r, t3);
}, h = (...o) => o.length ? o.filter((t3) => !!t3).map((t3) => {
  let e = `${t3}`.toLowerCase();
  try {
    let [a] = Intl.Collator.supportedLocalesOf(t3);
    if (!a)
      throw new Error();
    e = a;
  } catch (a) {
    d$1.warn(`'${t3}' locale is non-standard.`);
  }
  return e;
}) : [], x = (o, t3, e) => Object.keys(o || {}).reduce((a, r) => {
  let s2 = o[r], i2 = e ? `${e}.${r}` : `${r}`;
  return t3 && Array.isArray(s2) ? u$1(n$1({}, a), { [i2]: s2.map((l2) => x(l2, t3)) }) : s2 && typeof s2 == "object" ? n$1(n$1({}, a), x(s2, t3, i2)) : u$1(n$1({}, a), { [i2]: s2 });
}, {}), G = (o) => o.reduce((t3, { key: e, data: a, locale: r }) => {
  if (!a)
    return t3;
  let [s2] = h(r), i2 = u$1(n$1({}, t3[s2] || {}), { [e]: a });
  return u$1(n$1({}, t3), { [s2]: i2 });
}, {}), E = async (o) => {
  try {
    let t3 = await Promise.all(o.map((r) => {
      var s2 = r, { loader: e } = s2, a = T(s2, ["loader"]);
      return new Promise(async (i2) => {
        let l2;
        try {
          l2 = await e();
        } catch (c) {
          d$1.error(`Failed to load translation. Verify your '${a.locale}' > '${a.key}' Loader.`), d$1.error(c);
        }
        i2(u$1(n$1({ loader: e }, a), { data: l2 }));
      });
    }));
    return G(t3);
  } catch (t3) {
    d$1.error(t3);
  }
  return {};
}, W = (o) => (t3) => {
  try {
    if (typeof t3 == "string")
      return t3 === o;
    if (typeof t3 == "object")
      return t3.test(o);
  } catch (e) {
    d$1.error("Invalid route config!");
  }
  return false;
}, O = (o, t3) => {
  let e = true;
  try {
    e = Object.keys(o).filter((a) => o[a] !== void 0).every((a) => o[a] === t3[a]);
  } catch (a) {
  }
  return e;
};
var D$1 = 1e3 * 60 * 60 * 24, K = class {
  constructor(t3) {
    this.cachedAt = 0;
    this.loadedKeys = {};
    this.currentRoute = writable();
    this.config = writable();
    this.isLoading = writable(false);
    this.promises = /* @__PURE__ */ new Set();
    this.loading = { subscribe: this.isLoading.subscribe, toPromise: (t4, e) => {
      let { fallbackLocale: a } = get_store_value(this.config), r = Array.from(this.promises).filter((s2) => {
        let i2 = O({ locale: h(t4)[0], route: e }, s2);
        return a && (i2 = i2 || O({ locale: h(a)[0], route: e }, s2)), i2;
      }).map(({ promise: s2 }) => s2);
      return Promise.all(r);
    }, get: () => get_store_value(this.isLoading) };
    this.privateRawTranslations = writable({});
    this.rawTranslations = { subscribe: this.privateRawTranslations.subscribe, get: () => get_store_value(this.rawTranslations) };
    this.privateTranslations = writable({});
    this.translations = { subscribe: this.privateTranslations.subscribe, get: () => get_store_value(this.translations) };
    this.locales = u$1(n$1({}, derived([this.config, this.privateTranslations], ([t4, e]) => {
      if (!t4)
        return [];
      let { loaders: a = [] } = t4, r = a.map(({ locale: i2 }) => i2), s2 = Object.keys(e).map((i2) => i2);
      return Array.from(/* @__PURE__ */ new Set([...h(...r), ...h(...s2)]));
    }, [])), { get: () => get_store_value(this.locales) });
    this.internalLocale = writable();
    this.loaderTrigger = derived([this.internalLocale, this.currentRoute], ([t4, e], a) => {
      var r, s2;
      t4 !== void 0 && e !== void 0 && !(t4 === ((r = get_store_value(this.loaderTrigger)) == null ? void 0 : r[0]) && e === ((s2 = get_store_value(this.loaderTrigger)) == null ? void 0 : s2[1])) && (d$1.debug("Triggering translation load..."), a([t4, e]));
    }, []);
    this.localeHelper = writable();
    this.locale = { subscribe: this.localeHelper.subscribe, forceSet: this.localeHelper.set, set: this.internalLocale.set, update: this.internalLocale.update, get: () => get_store_value(this.locale) };
    this.initialized = derived([this.locale, this.currentRoute, this.privateTranslations], ([t4, e, a], r) => {
      get_store_value(this.initialized) || r(t4 !== void 0 && e !== void 0 && !!Object.keys(a).length);
    });
    this.translation = derived([this.privateTranslations, this.locale, this.isLoading], ([t4, e, a], r) => {
      let s2 = t4[e];
      s2 && Object.keys(s2).length && !a && r(s2);
    }, {});
    this.t = u$1(n$1({}, derived([this.config, this.translation], (r) => {
      var [s2] = r, i2 = s2, { parser: t4, fallbackLocale: e } = i2, a = T(i2, ["parser", "fallbackLocale"]);
      return (l2, ...c) => F(n$1({ parser: t4, key: l2, params: c, translations: this.translations.get(), locale: this.locale.get(), fallbackLocale: e }, a.hasOwnProperty("fallbackValue") ? { fallbackValue: a.fallbackValue } : {}));
    })), { get: (t4, ...e) => get_store_value(this.t)(t4, ...e) });
    this.l = u$1(n$1({}, derived([this.config, this.translations], (s2) => {
      var [i2, ...l2] = s2, c = i2, { parser: t4, fallbackLocale: e } = c, a = T(c, ["parser", "fallbackLocale"]), [r] = l2;
      return (f2, b, ...R) => F(n$1({ parser: t4, key: b, params: R, translations: r, locale: f2, fallbackLocale: e }, a.hasOwnProperty("fallbackValue") ? { fallbackValue: a.fallbackValue } : {}));
    })), { get: (t4, e, ...a) => get_store_value(this.l)(t4, e, ...a) });
    this.getLocale = (t4) => {
      let { fallbackLocale: e } = get_store_value(this.config) || {}, a = t4 || e;
      if (!a)
        return;
      let r = this.locales.get();
      return r.find((i2) => h(a).includes(i2)) || r.find((i2) => h(e).includes(i2));
    };
    this.setLocale = (t4) => {
      if (t4 && t4 !== get_store_value(this.internalLocale))
        return d$1.debug(`Setting '${t4}' locale.`), this.internalLocale.set(t4), this.loading.toPromise(t4, get_store_value(this.currentRoute));
    };
    this.setRoute = (t4) => {
      if (t4 !== get_store_value(this.currentRoute)) {
        d$1.debug(`Setting '${t4}' route.`), this.currentRoute.set(t4);
        let e = get_store_value(this.internalLocale);
        return this.loading.toPromise(e, t4);
      }
    };
    this.loadConfig = async (t4) => {
      await this.configLoader(t4);
    };
    this.getTranslationProps = async (t4 = this.locale.get(), e = get_store_value(this.currentRoute)) => {
      let a = get_store_value(this.config);
      if (!a || !t4)
        return [];
      let r = this.translations.get(), { loaders: s2, fallbackLocale: i2 = "", cache: l2 = D$1 } = a || {}, c = Number.isNaN(+l2) ? D$1 : +l2;
      this.cachedAt ? Date.now() > c + this.cachedAt && (d$1.debug("Refreshing cache."), this.loadedKeys = {}, this.cachedAt = 0) : (d$1.debug("Setting cache timestamp."), this.cachedAt = Date.now());
      let [f2, b] = h(t4, i2), R = r[f2], I = r[b], k = (s2 || []).map(($) => {
        var L = $, { locale: p2 } = L, y = T(L, ["locale"]);
        return u$1(n$1({}, y), { locale: h(p2)[0] });
      }).filter(({ routes: p2 }) => !p2 || (p2 || []).some(W(e))).filter(({ key: p2, locale: y }) => y === f2 && (!R || !(this.loadedKeys[f2] || []).includes(p2)) || i2 && y === b && (!I || !(this.loadedKeys[b] || []).includes(p2)));
      if (k.length) {
        this.isLoading.set(true), d$1.debug("Fetching translations...");
        let p2 = await E(k);
        this.isLoading.set(false);
        let y = Object.keys(p2).reduce((L, P2) => u$1(n$1({}, L), { [P2]: Object.keys(p2[P2]) }), {}), $ = k.filter(({ key: L, locale: P2 }) => (y[P2] || []).some((w) => `${w}`.startsWith(L))).reduce((L, { key: P2, locale: w }) => u$1(n$1({}, L), { [w]: [...L[w] || [], P2] }), {});
        return [p2, $];
      }
      return [];
    };
    this.addTranslations = (t4, e) => {
      if (!t4)
        return;
      let a = get_store_value(this.config), { preprocess: r } = a || {};
      d$1.debug("Adding translations...");
      let s2 = Object.keys(t4 || {});
      this.privateRawTranslations.update((i2) => s2.reduce((l2, c) => u$1(n$1({}, l2), { [c]: n$1(n$1({}, l2[c] || {}), t4[c]) }), i2)), this.privateTranslations.update((i2) => s2.reduce((l2, c) => {
        let f2 = true, b = t4[c];
        return typeof r == "function" && (b = r(b)), (typeof r == "function" || r === "none") && (f2 = false), u$1(n$1({}, l2), { [c]: n$1(n$1({}, l2[c] || {}), f2 ? x(b, r === "preserveArrays") : b) });
      }, i2)), s2.forEach((i2) => {
        let l2 = Object.keys(t4[i2]).map((c) => `${c}`.split(".")[0]);
        e && (l2 = e[i2]), this.loadedKeys[i2] = Array.from(/* @__PURE__ */ new Set([...this.loadedKeys[i2] || [], ...l2 || []]));
      });
    };
    this.loader = async ([t4, e]) => {
      let a = this.getLocale(t4) || void 0;
      d$1.debug(`Adding loader promise for '${a}' locale and '${e}' route.`);
      let r = (async () => {
        let s2 = await this.getTranslationProps(a, e);
        s2.length && this.addTranslations(...s2);
      })();
      this.promises.add({ locale: a, route: e, promise: r }), r.then(() => {
        a && this.locale.get() !== a && this.locale.forceSet(a);
      });
    };
    this.loadTranslations = (t4, e = get_store_value(this.currentRoute) || "") => {
      let a = this.getLocale(t4);
      if (a)
        return this.setRoute(e), this.setLocale(a), this.loading.toPromise(a, e);
    };
    this.loaderTrigger.subscribe(this.loader), this.isLoading.subscribe(async (e) => {
      e && this.promises.size && (await this.loading.toPromise(), this.promises.clear(), d$1.debug("Loader promises have been purged."));
    }), t3 && this.loadConfig(t3);
  }
  async configLoader(t3) {
    if (!t3)
      return d$1.error("No config provided!");
    let l2 = t3, { initLocale: e, fallbackLocale: a, translations: r, log: s2 } = l2, i2 = T(l2, ["initLocale", "fallbackLocale", "translations", "log"]);
    s2 && V(z(s2)), [e] = h(e), [a] = h(a), d$1.debug("Setting config."), this.config.set(n$1({ initLocale: e, fallbackLocale: a, translations: r }, i2)), r && this.addTranslations(r), e && await this.loadTranslations(e);
  }
};
var n = Object.defineProperty, M = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var i = (r, o, e) => o in r ? n(r, o, { enumerable: true, configurable: true, writable: true, value: e }) : r[o] = e, p = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && i(r, e, o[e]);
  if (s)
    for (var e of s(o))
      P.call(o, e) && i(r, e, o[e]);
  return r;
}, d = (r, o) => M(r, u(o));
var l = (r, o) => {
  var e = {};
  for (var a in r)
    f.call(r, a) && o.indexOf(a) < 0 && (e[a] = r[a]);
  if (r != null && s)
    for (var a of s(r))
      o.indexOf(a) < 0 && P.call(r, a) && (e[a] = r[a]);
  return e;
};
var m = (e) => {
  var a = e, { parserOptions: r = {} } = a, o = l(a, ["parserOptions"]);
  return d(p({}, o), { parser: C$1(r) });
}, t$1 = class t extends K {
  constructor(e) {
    super(e && m(e));
    this.loadConfig = (e2) => super.configLoader(m(e2));
  }
}, D = t$1;
const config = {
  translations: {
    en: {
      "en": "English",
      "ru": "Русский"
    },
    ru: {
      "en": "English",
      "ru": "Русский"
    }
  },
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./common.js")).default
    },
    {
      locale: "en",
      key: "errors",
      loader: async () => (await import("./errors.js")).default
    },
    {
      locale: "en",
      key: "lang",
      loader: async () => (await import("./lang.js")).default
    },
    {
      locale: "ru",
      key: "common",
      loader: async () => (await import("./common2.js")).default
    },
    {
      locale: "ru",
      key: "errors",
      loader: async () => (await import("./errors2.js")).default
    },
    {
      locale: "ru",
      key: "lang",
      loader: async () => (await import("./lang2.js")).default
    }
  ]
};
const defaultLocale = "en";
const { t: t2, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new D(config);
loading.subscribe(async ($loading) => {
  if ($loading) {
    await loading.toPromise();
    console.log("Translations loaded");
  }
});
export {
  addTranslations as a,
  setLocale as b,
  t2 as c,
  locales as d,
  defaultLocale as e,
  locale as f,
  loadTranslations as l,
  setRoute as s,
  translations as t
};
