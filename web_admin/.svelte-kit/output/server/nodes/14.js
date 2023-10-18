import * as server from '../entries/pages/_lang_/(protected)/dev/games/list/_page.server.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/(protected)/dev/games/list/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang]/(protected)/dev/games/list/+page.server.js";
export const imports = ["_app/immutable/nodes/14.260b7b92.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/dayjs.d81eb1d6.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.dfd56485.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dafd1d08.js","_app/immutable/chunks/paths.09565203.js","_app/immutable/chunks/navigation.6ec8aef2.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/app.d278c19e.js"];
export const stylesheets = ["_app/immutable/assets/12.799788b5.css","_app/immutable/assets/dayjs.247d27c8.css","_app/immutable/assets/button.1f082a22.css"];
export const fonts = [];
