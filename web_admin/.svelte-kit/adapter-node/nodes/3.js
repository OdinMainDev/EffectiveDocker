import * as universal from '../entries/pages/_lang_/(protected)/bonuses/_layout.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[lang]/(protected)/bonuses/+layout.js";
export const imports = ["_app/immutable/nodes/3.0e2c1212.js","_app/immutable/chunks/layout.fdcff010.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js"];
export const stylesheets = [];
export const fonts = [];
