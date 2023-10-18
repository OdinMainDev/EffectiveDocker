import { c as create_ssr_component, e as escape } from './ssr-f419b600.js';
import './i18n-f1b3a1ed.js';

const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="content"><div class="pb-9">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="row"><div class="col-12"><div class="row align-items-center justify-content-between g-3 mb-3"><div class="col-12 col-md-auto"><h2 class="mb-0">${escape(title)}</h2></div> ${slots.default ? slots.default({}) : ``}</div></div></div>`;
});

export { Container as C, Header as H };
//# sourceMappingURL=Header-15daf196.js.map
