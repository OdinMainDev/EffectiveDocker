import * as universal from '../entries/pages/_lang_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[lang]/+page.js";
export const imports = ["_app/immutable/nodes/4.a4a10d8d.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js"];
export const stylesheets = [];
export const fonts = [];
