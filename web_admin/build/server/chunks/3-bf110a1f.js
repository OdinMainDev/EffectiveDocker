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
const component = async () => component_cache ??= (await import('./layout.svelte-2055d412.js')).default;
const universal_id = "src/routes/[lang]/(protected)/casino/bonuses/+layout.js";
const imports = ["_app/immutable/nodes/3.022eaf5e.js","_app/immutable/chunks/layout.ab771efa.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-bf110a1f.js.map
