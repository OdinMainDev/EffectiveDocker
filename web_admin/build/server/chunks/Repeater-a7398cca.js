import { a as subscribe } from './utils-6799e008.js';
import { c as create_ssr_component, a as each, e as escape } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-57966412.js';

const Repeater = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { count } = $$props;
  let slots = [];
  if (!count) {
    count = 1;
  }
  for (let index = 0; index < count; index++) {
    slots.push("slot" + index.toString());
  }
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  $$unsubscribe_t();
  return `<div class="row"><div>${each(slots, (name, number) => {
    return `<div data-repeater-item><div class="row">${slots$1.default ? slots$1.default({ number, itemname: name }) : ``} ${slots.length > 1 ? `<div class="col-1"><button class="btn btn-soft-danger" type="button" data-svelte-h="svelte-13mfht7"><span class="fas fa-times"></span></button> </div>` : ``}</div> </div>`;
  })}</div> <div class="mb-4"><button class="btn btn-primary" type="button"><span class="align-middle">${escape($t("common.Add"))}</span></button></div></div>`;
});

export { Repeater as R };
//# sourceMappingURL=Repeater-a7398cca.js.map
