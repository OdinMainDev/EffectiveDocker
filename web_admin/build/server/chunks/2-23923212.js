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
const component = async () => component_cache ??= (await import('./_layout.svelte-8aab73cd.js')).default;
const server_id = "src/routes/[lang]/(protected)/+layout.server.js";
const imports = ["_app/immutable/nodes/2.1c00f9c7.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/stores.b9d683eb.js","_app/immutable/chunks/singletons.3d5b3557.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/paths.3e91463a.js","_app/immutable/chunks/navigation.b97ff1ce.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-23923212.js.map
