import * as server from '../entries/pages/_lang_/login/_key_/_page.server.js';

export const index = 44;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/login/_key_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang]/login/[key]/+page.server.js";
export const imports = ["_app/immutable/nodes/44.96217fc0.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.c7c749a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/navigation.8dfe8603.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.ca40e683.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/form.565aad05.js"];
export const stylesheets = ["_app/immutable/assets/button.1f082a22.css"];
export const fonts = [];
