

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3b457194.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js","_app/immutable/chunks/stores.5444e3a3.js","_app/immutable/chunks/singletons.0a352c61.js","_app/immutable/chunks/index.22be00bf.js","_app/immutable/chunks/paths.44cf5e78.js","_app/immutable/chunks/i18n.ff0ccd42.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = [];
export const fonts = [];
