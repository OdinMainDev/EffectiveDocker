import * as server from '../entries/pages/_lang_/(protected)/plugins/email/_page.server.js';

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/(protected)/plugins/email/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang]/(protected)/plugins/email/+page.server.js";
export const imports = ["_app/immutable/nodes/30.d4ff939d.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/dayjs.88d564ad.js","_app/immutable/chunks/jquery.db378c02.js","_app/immutable/chunks/each.1f9debe5.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/app.8ed331e8.js","_app/immutable/chunks/Email.4b3ea29b.js"];
export const stylesheets = ["_app/immutable/assets/12.799788b5.css","_app/immutable/assets/dayjs.247d27c8.css"];
export const fonts = [];
