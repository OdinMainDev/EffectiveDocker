function load(event) {
  return {
    user: event.locals.user,
    auth_token: event.cookies.get("auth_token")
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-09e30e0c.js')).default;
const server_id = "src/routes/[lang]/(protected)/+layout.server.js";
const imports = ["_app/immutable/nodes/2.95a70a44.js","_app/immutable/chunks/scheduler.53ea18db.js","_app/immutable/chunks/index.1d35485e.js","_app/immutable/chunks/each.dd3cb458.js","_app/immutable/chunks/stores.2750546f.js","_app/immutable/chunks/singletons.085d1f73.js","_app/immutable/chunks/index.5da54cac.js","_app/immutable/chunks/paths.3c16f0d1.js","_app/immutable/chunks/navigation.09ffbaf0.js","_app/immutable/chunks/i18n.691bb885.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-e7c9944c.js.map
