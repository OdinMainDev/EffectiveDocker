import * as server from '../entries/pages/_lang_/(protected)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/(protected)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang]/(protected)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.9d685568.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/stores.5444e3a3.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = [];
export const fonts = [];
