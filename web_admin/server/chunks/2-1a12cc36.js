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
const component = async () => component_cache ??= (await import('./_layout.svelte-453d809e.js')).default;
const server_id = "src/routes/[lang]/(protected)/+layout.server.js";
const imports = ["_app/immutable/nodes/2.939e6543.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/stores.4f80bc3e.js","_app/immutable/chunks/singletons.bfb6d3bd.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/paths.6d30d7da.js","_app/immutable/chunks/navigation.350e8abc.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-1a12cc36.js.map
