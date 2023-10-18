function load() {
  return {
    submenu: [
      {
        "title": "Bonuses",
        "icon": "uil uil-gift",
        "url": "/bonuses"
      },
      {
        "title": "Bet tiers",
        "icon": "uil uil-list-ol",
        "url": "/bonuses/tiers"
      },
      {
        "title": "Statistics",
        "icon": "uil uil-chart-line",
        "url": "/bonuses/stat"
      }
    ]
  };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-90928951.js')).default;
const universal_id = "src/routes/[lang]/(protected)/bonuses/+layout.js";
const imports = ["_app/immutable/nodes/3.0e2c1212.js","_app/immutable/chunks/layout.fdcff010.js","_app/immutable/chunks/scheduler.1746c8b7.js","_app/immutable/chunks/index.ea9f66e7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-c3eb7616.js.map
