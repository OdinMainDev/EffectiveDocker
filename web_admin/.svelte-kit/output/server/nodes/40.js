import * as server from '../entries/pages/_lang_/(protected)/settings/notifications/_page.server.js';

export const index = 40;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/(protected)/settings/notifications/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang]/(protected)/settings/notifications/+page.server.js";
export const imports = ["_app/immutable/nodes/40.c76676b9.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/button.dfd56485.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dafd1d08.js","_app/immutable/chunks/paths.09565203.js","_app/immutable/chunks/navigation.6ec8aef2.js","_app/immutable/chunks/button.svelte_svelte_type_style_lang.9a409d68.js","_app/immutable/chunks/jquery.44ad52d1.js","_app/immutable/chunks/text.bc459b15.js","_app/immutable/chunks/switch.a8140a1a.js","_app/immutable/chunks/form.94b6fbc1.js","_app/immutable/chunks/Header.78e40f6e.js","_app/immutable/chunks/ContainerTab.54051f07.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/TabContent.4f055fc5.js"];
export const stylesheets = ["_app/immutable/assets/button.1f082a22.css","_app/immutable/assets/switch.1d5e4d9e.css"];
export const fonts = [];
