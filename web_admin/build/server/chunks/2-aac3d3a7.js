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
const imports = ["_app/immutable/nodes/2.5b516bbf.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js","_app/immutable/chunks/each.fa3f05ac.js","_app/immutable/chunks/stores.3c84effa.js","_app/immutable/chunks/singletons.f2d38154.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/paths.4927d571.js","_app/immutable/chunks/navigation.503dba62.js","_app/immutable/chunks/i18n.b76ebe32.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-aac3d3a7.js.map
