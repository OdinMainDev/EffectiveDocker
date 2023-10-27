import { a as subscribe, c as null_to_empty, d as set_store_value, r as run_all } from './utils-6799e008.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute, d as createEventDispatcher, a as each, m as missing_component, o as onDestroy, f as set_current_component, h as current_component } from './ssr-b90e13c7.js';
import { e as t2 } from './i18n-57966412.js';
import './index-0087e825.js';
import 'toastr';
import { C as Container, H as Header } from './Header-4a2505ee.js';
import { C as ContainerTab } from './ContainerTab-3c3f42e7.js';
import { T as Text } from './text-ddfa999a.js';
import { S as Switch } from './switch-a8bae24d.js';
import { T as TabContent } from './TabContent-1d8de319.js';
import { S as Select } from './select-c6a95792.js';
import { e as events_types, v as verifications, m as mail_domains, t as time_types, p as pusher_notifications } from './app-184eec4c.js';
import { w as writable } from './index2-3dbd9eb2.js';
import { c as currenciesToSelect } from './currency-56b90870.js';
import { e as emailTemplateToSelect } from './email_template-ca6ccafa.js';
import { R as Repeater } from './Repeater-a7398cca.js';
import { B as Button } from './button-b0972938.js';

const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const Tab1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_t();
  return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="row"><div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
        $$result,
        {
          id: "name",
          name: "name",
          placeholder: $t("common.name"),
          label: $t("common.name"),
          error: void 0,
          value: event.name
        },
        {},
        {}
      )}</div> <div class="col-md-4 mb-4">${validate_component(Select, "Select").$$render(
        $$result,
        {
          name: "trigger",
          id: "trigger",
          label: $t("common.Select trigger"),
          error: form?.errors?.trigger,
          value: event.trigger,
          items: events_types
        },
        {},
        {}
      )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
        $$result,
        {
          name: "enable",
          id: "enable",
          label: $t("common.enable"),
          checked: event.is_enabled
        },
        {},
        {}
      )}</div> <div class="col-md-2 mb-4">${validate_component(Switch, "Switch").$$render(
        $$result,
        {
          name: "reuse",
          id: "reuse",
          label: $t("common.reuse"),
          checked: event.reuse
        },
        {},
        {}
      )}</div></div>`;
    }
  })}`;
});
const Datetime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value2) => $t = value2);
  let { id } = $$props;
  let { name } = $$props;
  let { placeholder } = $$props;
  let { label } = $$props;
  let { error } = $$props;
  let { value = "" } = $$props;
  let inputId;
  if (id !== void 0) {
    inputId = id;
  } else {
    inputId = "input-" + name;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$unsubscribe_t();
  return `<div class="form-floating"><input class="${["form-control", error !== void 0 ? "is-invalid" : ""].join(" ").trim()}"${add_attribute("id", inputId, 0)}${add_attribute("data-name", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}> <label${add_attribute("for", inputId, 0)}>${escape(label)}</label> <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div></div>`;
});
var Sifter = function(items, settings2) {
  this.items = items;
  this.settings = settings2 || { diacritics: true };
};
Sifter.prototype.tokenize = function(query, respect_word_boundaries) {
  query = trim(String(query || "").toLowerCase());
  if (!query || !query.length)
    return [];
  var i, n, regex, letter;
  var tokens = [];
  var words = query.split(/ +/);
  for (i = 0, n = words.length; i < n; i++) {
    regex = escape_regex(words[i]);
    if (this.settings.diacritics) {
      for (letter in DIACRITICS) {
        if (DIACRITICS.hasOwnProperty(letter)) {
          regex = regex.replace(new RegExp(letter, "g"), DIACRITICS[letter]);
        }
      }
    }
    if (respect_word_boundaries)
      regex = "\\b" + regex;
    tokens.push({
      string: words[i],
      regex: new RegExp(regex, "i")
    });
  }
  return tokens;
};
Sifter.prototype.iterator = function(object, callback) {
  var iterator;
  if (Array.isArray(object)) {
    iterator = Array.prototype.forEach || function(callback2) {
      for (var i = 0, n = this.length; i < n; i++) {
        callback2(this[i], i, this);
      }
    };
  } else {
    iterator = function(callback2) {
      for (var key in this) {
        if (this.hasOwnProperty(key)) {
          callback2(this[key], key, this);
        }
      }
    };
  }
  iterator.apply(object, [callback]);
};
Sifter.prototype.getScoreFunction = function(search, options) {
  var self, fields, tokens, token_count, nesting;
  self = this;
  search = self.prepareSearch(search, options);
  tokens = search.tokens;
  fields = search.options.fields;
  token_count = tokens.length;
  nesting = search.options.nesting;
  var scoreValue = function(value, token) {
    var score, pos;
    if (!value)
      return 0;
    value = String(value || "");
    pos = value.search(token.regex);
    if (pos === -1)
      return 0;
    score = token.string.length / value.length;
    if (pos === 0)
      score += 0.5;
    return score;
  };
  var scoreObject = function() {
    var field_count = fields.length;
    if (!field_count) {
      return function() {
        return 0;
      };
    }
    if (field_count === 1) {
      return function(token, data) {
        return scoreValue(getattr(data, fields[0], nesting), token);
      };
    }
    return function(token, data) {
      for (var i = 0, sum = 0; i < field_count; i++) {
        sum += scoreValue(getattr(data, fields[i], nesting), token);
      }
      return sum / field_count;
    };
  }();
  if (!token_count) {
    return function() {
      return 0;
    };
  }
  if (token_count === 1) {
    return function(data) {
      return scoreObject(tokens[0], data);
    };
  }
  if (search.options.conjunction === "and") {
    return function(data) {
      var score;
      for (var i = 0, sum = 0; i < token_count; i++) {
        score = scoreObject(tokens[i], data);
        if (score <= 0)
          return 0;
        sum += score;
      }
      return sum / token_count;
    };
  } else {
    return function(data) {
      for (var i = 0, sum = 0; i < token_count; i++) {
        sum += scoreObject(tokens[i], data);
      }
      return sum / token_count;
    };
  }
};
Sifter.prototype.getSortFunction = function(search, options) {
  var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;
  self = this;
  search = self.prepareSearch(search, options);
  sort = !search.query && options.sort_empty || options.sort;
  get_field = function(name, result) {
    if (name === "$score")
      return result.score;
    return getattr(self.items[result.id], name, options.nesting);
  };
  fields = [];
  if (sort) {
    for (i = 0, n = sort.length; i < n; i++) {
      if (search.query || sort[i].field !== "$score") {
        fields.push(sort[i]);
      }
    }
  }
  if (search.query) {
    implicit_score = true;
    for (i = 0, n = fields.length; i < n; i++) {
      if (fields[i].field === "$score") {
        implicit_score = false;
        break;
      }
    }
    if (implicit_score) {
      fields.unshift({ field: "$score", direction: "desc" });
    }
  } else {
    for (i = 0, n = fields.length; i < n; i++) {
      if (fields[i].field === "$score") {
        fields.splice(i, 1);
        break;
      }
    }
  }
  multipliers = [];
  for (i = 0, n = fields.length; i < n; i++) {
    multipliers.push(fields[i].direction === "desc" ? -1 : 1);
  }
  fields_count = fields.length;
  if (!fields_count) {
    return null;
  } else if (fields_count === 1) {
    field = fields[0].field;
    multiplier = multipliers[0];
    return function(a, b) {
      return multiplier * cmp(
        get_field(field, a),
        get_field(field, b)
      );
    };
  } else {
    return function(a, b) {
      var i2, result, field2;
      for (i2 = 0; i2 < fields_count; i2++) {
        field2 = fields[i2].field;
        result = multipliers[i2] * cmp(
          get_field(field2, a),
          get_field(field2, b)
        );
        if (result)
          return result;
      }
      return 0;
    };
  }
};
Sifter.prototype.prepareSearch = function(query, options) {
  if (typeof query === "object")
    return query;
  options = extend({}, options);
  var option_fields = options.fields;
  var option_sort = options.sort;
  var option_sort_empty = options.sort_empty;
  if (option_fields && !Array.isArray(option_fields))
    options.fields = [option_fields];
  if (option_sort && !Array.isArray(option_sort))
    options.sort = [option_sort];
  if (option_sort_empty && !Array.isArray(option_sort_empty))
    options.sort_empty = [option_sort_empty];
  return {
    options,
    query: String(query || "").toLowerCase(),
    tokens: this.tokenize(query, options.respect_word_boundaries),
    total: 0,
    items: []
  };
};
Sifter.prototype.search = function(query, options) {
  var self = this, score, search;
  var fn_sort;
  var fn_score;
  search = this.prepareSearch(query, options);
  options = search.options;
  query = search.query;
  fn_score = options.score || self.getScoreFunction(search);
  if (query.length) {
    self.iterator(self.items, function(item, id) {
      score = fn_score(item);
      if (options.filter === false || score > 0) {
        search.items.push({ "score": score, "id": id });
      }
    });
  } else {
    self.iterator(self.items, function(item, id) {
      search.items.push({ "score": 1, "id": id });
    });
  }
  fn_sort = self.getSortFunction(search, options);
  if (fn_sort)
    search.items.sort(fn_sort);
  search.total = search.items.length;
  if (typeof options.limit === "number") {
    search.items = search.items.slice(0, options.limit);
  }
  return search;
};
var cmp = function(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  a = asciifold(String(a || ""));
  b = asciifold(String(b || ""));
  if (a > b)
    return 1;
  if (b > a)
    return -1;
  return 0;
};
var extend = function(a, b) {
  var i, n, k, object;
  for (i = 1, n = arguments.length; i < n; i++) {
    object = arguments[i];
    if (!object)
      continue;
    for (k in object) {
      if (object.hasOwnProperty(k)) {
        a[k] = object[k];
      }
    }
  }
  return a;
};
var getattr = function(obj, name, nesting) {
  if (!obj || !name)
    return;
  if (!nesting)
    return obj[name];
  var names = name.split(".");
  while (names.length && (obj = obj[names.shift()]))
    ;
  return obj;
};
var trim = function(str) {
  return (str + "").replace(/^\s+|\s+$|/g, "");
};
var escape_regex = function(str) {
  return (str + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};
var DIACRITICS = {
  "a": "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
  "b": "[b␢βΒB฿𐌁ᛒ]",
  "c": "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
  "d": "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
  "e": "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
  "f": "[fƑƒḞḟ]",
  "g": "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
  "h": "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
  "i": "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
  "j": "[jȷĴĵɈɉʝɟʲ]",
  "k": "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
  "l": "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
  "n": "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
  "o": "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
  "p": "[pṔṕṖṗⱣᵽƤƥᵱ]",
  "q": "[qꝖꝗʠɊɋꝘꝙq̃]",
  "r": "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
  "s": "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
  "t": "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
  "u": "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
  "v": "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
  "w": "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
  "x": "[xẌẍẊẋχ]",
  "y": "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
  "z": "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
};
const asciifold = function() {
  var i, n, k, chunk;
  var foreignletters = "";
  var lookup = {};
  for (k in DIACRITICS) {
    if (DIACRITICS.hasOwnProperty(k)) {
      chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
      foreignletters += chunk;
      for (i = 0, n = chunk.length; i < n; i++) {
        lookup[chunk.charAt(i)] = k;
      }
    }
  }
  var regexp = new RegExp("[" + foreignletters + "]", "g");
  return function(str) {
    return str.replace(regexp, function(foreignletter) {
      return lookup[foreignletter];
    }).toLowerCase();
  };
}();
function isOutOfViewport(elem) {
  if (!elem)
    return false;
  const parentBounding = elem.parentElement.parentElement.getBoundingClientRect();
  const bounding = elem.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + bounding.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
let xhr = null;
function fetchRemote(url) {
  return function(query, cb) {
    return new Promise((resolve, reject) => {
      xhr = new XMLHttpRequest();
      xhr.open("GET", `${url.replace("[query]", encodeURIComponent(query))}`);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            try {
              const resp = JSON.parse(this.response);
              resolve(cb ? cb(resp) : resp.data || resp.items || resp.options || resp);
            } catch (e) {
              console.warn("[Svelecte]:Fetch - error handling fetch response", e);
              reject();
            }
          } else {
            reject();
          }
        }
      };
    });
  };
}
function debounce(fn, delay) {
  let timeout;
  return function() {
    const self = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(self, args);
    }, delay);
  };
}
let itemHtml;
function highlightSearch(item, isSelected, $inputValue, formatter, disableHighlight) {
  const itemHtmlText = formatter ? formatter(item, isSelected, $inputValue) : item;
  if ($inputValue == "" || item.isSelected || disableHighlight) {
    return '<div class="sv-item-content">' + itemHtmlText + "</div>";
  }
  if (!itemHtml) {
    itemHtml = document.createElement("div");
    itemHtml.className = "sv-item-content";
  }
  itemHtml.innerHTML = itemHtmlText;
  const pattern = asciifold($inputValue);
  pattern.split(" ").filter((e) => e).forEach((pat) => {
    highlight(itemHtml, pat);
  });
  return itemHtml.outerHTML;
}
const highlight = function(node, regex) {
  let skip = 0;
  if (node.nodeType === 3) {
    const folded = asciifold(node.data);
    let pos = folded.indexOf(regex);
    pos -= folded.substr(0, pos).toUpperCase().length - folded.substr(0, pos).length;
    if (pos >= 0) {
      const spannode = document.createElement("span");
      spannode.className = "highlight";
      const middlebit = node.splitText(pos);
      middlebit.splitText(regex.length);
      const middleclone = middlebit.cloneNode(true);
      spannode.appendChild(middleclone);
      middlebit.parentNode.replaceChild(spannode, middlebit);
      skip = 1;
    }
  } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && (node.className !== "highlight" || node.tagName !== "SPAN")) {
    for (var i = 0; i < node.childNodes.length; ++i) {
      i += highlight(node.childNodes[i], regex);
    }
  }
  return skip;
};
function fieldInit(type, options, config2) {
  const isValue = type === "value";
  if (config2.isOptionArray)
    return isValue ? "value" : "label";
  let val = isValue ? "value" : "text";
  if (options && options.length) {
    const firstItem = options[0][config2.optItems] ? options[0][config2.optItems][0] : options[0];
    if (!firstItem)
      return val;
    const autoAddItem = isValue ? 0 : 1;
    const guessList = isValue ? ["id", "value", "ID"] : ["name", "title", "label"];
    val = Object.keys(firstItem).filter((prop) => guessList.includes(prop)).concat([Object.keys(firstItem)[autoAddItem]]).shift();
  }
  return val;
}
function defaultCreateFilter(val, options) {
  return (val || "").replace(/\t/g, " ").trim().split(" ").filter((ch) => ch).join(" ");
}
function defaultCreateTransform(inputValue, creatablePrefix, valueField, labelField) {
  return {
    [valueField]: inputValue,
    [labelField]: creatablePrefix + inputValue
  };
}
function escapeHtml(html) {
  return `${html}`.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const settings = {
  // html
  disabled: false,
  // basic
  valueField: null,
  labelField: null,
  groupLabelField: "label",
  groupItemsField: "options",
  disabledField: "$disabled",
  placeholder: "Select",
  valueAsObject: false,
  // ui
  searchable: true,
  clearable: false,
  highlightFirstItem: true,
  selectOnTab: null,
  // recognize values: null, truthy, 'select-navigate'
  resetOnBlur: true,
  resetOnSelect: true,
  fetchResetOnBlur: true,
  // multi
  multiple: false,
  closeAfterSelect: false,
  max: 0,
  collapseSelection: false,
  // enable collapsible multiple selection
  alwaysCollapsed: false,
  // create
  creatable: false,
  creatablePrefix: "*",
  keepCreated: true,
  allowEditing: false,
  delimiter: ",",
  // remote
  fetchCallback: null,
  minQuery: 1,
  // performance
  lazyDropdown: true,
  // virtual list
  virtualList: false,
  vlItemSize: null,
  vlHeight: null,
  // i18n
  i18n: {
    empty: "No options",
    nomatch: "No matching options",
    max: (num) => `Maximum items ${num} selected`,
    fetchBefore: "Type to start searching",
    fetchQuery: (minQuery, inputLength) => `Type ${minQuery > 1 && minQuery > inputLength ? `at least ${minQuery - inputLength} characters ` : ""}to start searching`,
    fetchInit: "Fetching data, please wait...",
    fetchEmpty: "No data related to your search",
    collapsedSelection: (count) => `${count} selected`,
    createRowLabel: (value) => `Create '${value}'`
  },
  // bound to 'i18n'
  collapseSelectionFn: function(selectionCount, selection) {
    return this.collapsedSelection(selectionCount);
  }
};
function initSelection(initialValue, valueAsObject, config2) {
  if (valueAsObject)
    return Array.isArray(initialValue) ? initialValue : [initialValue];
  const _initialValue = Array.isArray(initialValue) ? initialValue : [initialValue];
  const valueField = config2.labelAsValue ? config2.labelField : config2.valueField;
  const initialSelection = this.reduce((res, val, i) => {
    if (val[config2.optItems] && val[config2.optItems].length) {
      const selected = val[config2.optItems].reduce((res2, groupVal) => {
        if (_initialValue.includes(groupVal[valueField]))
          res2.push(groupVal);
        return res2;
      }, []);
      if (selected.length) {
        res.push(...selected);
        return res;
      }
    }
    if (_initialValue.includes(typeof val === "object" ? val[valueField] : config2.labelAsValue ? val : i)) {
      if (config2.isOptionArray) {
        val = {
          [config2.valueField]: i,
          [config2.labelField]: val
        };
      }
      res.push(val);
    }
    return res;
  }, []);
  return initialSelection.sort((a, b) => _initialValue.indexOf(a[valueField]) < _initialValue.indexOf(b[valueField]) ? -1 : 1);
}
function flatList(options, config2) {
  const flatOpts = options.reduce((res, opt, i) => {
    if (config2.isOptionArray) {
      res.push({
        [config2.valueField]: i,
        [config2.labelField]: opt
      });
      return res;
    }
    if (opt[config2.optItems] && Array.isArray(opt[config2.optItems])) {
      if (opt[config2.optItems].length) {
        config2.optionsWithGroups = true;
        res.push({ label: opt[config2.optLabel], $isGroupHeader: true });
        res.push(...opt[config2.optItems].map((_opt) => {
          _opt.$isGroupItem = true;
          return _opt;
        }));
      }
      return res;
    }
    res.push(opt);
    return res;
  }, []);
  updateOptionProps(flatOpts, config2);
  return flatOpts;
}
function updateOptionProps(options, config2) {
  if (config2.isOptionArray) {
    if (!config2.optionProps) {
      config2.optionProps = ["value", "label"];
    }
  }
  options.some((opt) => {
    if (opt.$isGroupHeader)
      return false;
    config2.optionProps = getFilterProps(opt);
    return true;
  });
}
function getFilterProps(object) {
  if (object.options)
    object = object.options[0];
  const exclude = ["$disabled", "$isGroupHeader", "$isGroupItem"];
  return Object.keys(object).filter((prop) => !exclude.includes(prop));
}
function filterList(options, inputValue, excludeSelected, sifterSearchField, sifterSortField, config2) {
  if (excludeSelected) {
    options = options.filter((opt) => !excludeSelected.has(opt[config2.valueField])).filter((opt, idx, self) => {
      if (opt.$isGroupHeader && (self[idx + 1] && self[idx + 1].$isGroupHeader || self.length <= 1 || self.length - 1 === idx))
        return false;
      return true;
    });
  }
  if (!inputValue)
    return options;
  const sifter = new Sifter(options);
  if (config2.optionsWithGroups) {
    sifter.getSortFunction = () => null;
  }
  let conjunction = "and";
  if (inputValue.startsWith("|| ")) {
    conjunction = "or";
    inputValue = inputValue.substr(2);
  }
  const result = sifter.search(inputValue, {
    fields: sifterSearchField || config2.optionProps,
    sort: createSifterSortField(sifterSortField || config2.labelField),
    conjunction
  });
  const mapped = config2.optionsWithGroups ? result.items.reduce((res, item) => {
    const opt = options[item.id];
    if (excludeSelected && opt.isSelected)
      return res;
    const lastPos = res.push(opt);
    if (opt.$isGroupItem) {
      const prevItems = options.slice(0, item.id);
      let prev = null;
      do {
        prev = prevItems.pop();
        prev && prev.$isGroupHeader && !res.includes(prev) && res.splice(lastPos - 1, 0, prev);
      } while (prev && !prev.$isGroupHeader);
    }
    return res;
  }, []) : result.items.map((item) => options[item.id]);
  return mapped;
}
function createSifterSortField(prop) {
  return [{ field: prop, direction: "asc" }];
}
function indexList(options, includeCreateRow, config2) {
  const map = config2.optionsWithGroups ? options.reduce((res, opt, index) => {
    res.push(opt.$isGroupHeader ? "" : index);
    return res;
  }, []) : Object.keys(options);
  return {
    map,
    first: map[0] !== "" ? 0 : 1,
    last: map.length ? map.length - (includeCreateRow ? 0 : 1) : 0,
    hasCreateRow: !!includeCreateRow,
    next(curr, prevOnUndefined) {
      const val = this.map[++curr];
      if (this.hasCreateRow && curr === this.last)
        return this.last;
      if (val === "")
        return this.next(curr);
      if (val === void 0) {
        if (!this.map.length)
          return 0;
        if (curr > this.map.length)
          curr = this.first - 1;
        return prevOnUndefined === true ? this.prev(curr) : this.next(curr);
      }
      return val;
    },
    prev(curr) {
      const val = this.map[--curr];
      if (this.hasCreateRow && curr === this.first)
        return this.first;
      if (val === "")
        return this.prev(curr);
      if (!val)
        return this.last;
      return val;
    }
  };
}
const css$5 = {
  code: ".inputBox.svelte-x1t6fd{box-sizing:content-box;width:19px;background:rgba(0, 0, 0, 0) none repeat scroll 0px center;border:0px none;font-size:inherit;font-family:inherit;opacity:1;outline:currentcolor none 0px;padding:0px;color:inherit;margin:-2px 0 0;height:20px}.inputBox.svelte-x1t6fd::placeholder{color:var(--sv-placeholder-color, #ccccd6)}.inputBox.svelte-x1t6fd:read-only{width:100%}.shadow-text.svelte-x1t6fd{opacity:0;position:absolute;left:100%;z-index:-100;min-width:24px;white-space:nowrap;top:0;left:0}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSingleFilled;
  let placeholderText;
  let shadowText;
  let widthAddition;
  let inputStyle;
  let enterHint;
  let $inputValue, $$unsubscribe_inputValue;
  let $$unsubscribe_hasDropdownOpened;
  const focus = () => inputRef.focus();
  let { inputId } = $$props;
  let { placeholder } = $$props;
  let { searchable } = $$props;
  let { disabled } = $$props;
  let { multiple } = $$props;
  let { inputValue } = $$props;
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  let { hasDropdownOpened } = $$props;
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value) => value);
  let { selectedOptions } = $$props;
  let { isAndroid } = $$props;
  let { inputMode = "text" } = $$props;
  let inputRef = null;
  let shadowWidth = 0;
  createEventDispatcher();
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.hasDropdownOpened === void 0 && $$bindings.hasDropdownOpened && hasDropdownOpened !== void 0)
    $$bindings.hasDropdownOpened(hasDropdownOpened);
  if ($$props.selectedOptions === void 0 && $$bindings.selectedOptions && selectedOptions !== void 0)
    $$bindings.selectedOptions(selectedOptions);
  if ($$props.isAndroid === void 0 && $$bindings.isAndroid && isAndroid !== void 0)
    $$bindings.isAndroid(isAndroid);
  if ($$props.inputMode === void 0 && $$bindings.inputMode && inputMode !== void 0)
    $$bindings.inputMode(inputMode);
  $$result.css.add(css$5);
  isSingleFilled = selectedOptions.length > 0 && multiple === false;
  placeholderText = selectedOptions.length > 0 ? "" : placeholder;
  shadowText = $inputValue || placeholderText;
  widthAddition = selectedOptions.length === 0 ? 19 : 12;
  inputStyle = `width: ${isSingleFilled ? 2 : shadowWidth + widthAddition}px`;
  enterHint = isSingleFilled ? null : "enter";
  $$unsubscribe_inputValue();
  $$unsubscribe_hasDropdownOpened();
  return ` <input type="text" class="inputBox svelte-x1t6fd" ${disabled ? "disabled" : ""} ${!searchable ? "readonly" : ""}${add_attribute("id", inputId, 0)}${add_attribute("style", inputStyle, 0)}${add_attribute("placeholder", placeholderText, 0)}${add_attribute("enterkeyhint", enterHint, 0)}${add_attribute("inputmode", inputMode, 0)}${add_attribute("this", inputRef, 0)}${add_attribute("value", $inputValue, 0)}> <div class="shadow-text svelte-x1t6fd">${escape(shadowText)}</div> `;
});
const css$4 = {
  code: '.sv-control.svelte-1l8hgl2{background-color:var(--sv-bg);border:var(--sv-border);border-radius:4px;min-height:var(--sv-min-height)}.sv-control.is-active.svelte-1l8hgl2{border:var(--sv-active-border);outline:var(--sv-active-outline)}.sv-control.is-disabled.svelte-1l8hgl2{background-color:var(--sv-disabled-bg);border-color:var(--sv-disabled-border-color);cursor:default;flex-wrap:wrap;justify-content:space-between;outline:currentcolor none 0px !important;position:relative;transition:all 100ms ease 0s}.sv-control.svelte-1l8hgl2{display:flex;align-items:center;box-sizing:border-box}.sv-content.svelte-1l8hgl2{align-items:center;display:flex;flex:1 1 0%;flex-wrap:nowrap;padding:0 0 0 6px;position:relative;overflow:hidden;box-sizing:border-box}.sv-content.sv-input-row.has-multiSelection.svelte-1l8hgl2{flex-flow:wrap}.indicator.svelte-1l8hgl2{position:relative;align-items:center;align-self:stretch;display:flex;flex-shrink:0;box-sizing:border-box}.indicator-container.svelte-1l8hgl2{color:var(--sv-icon-color);display:flex;padding:8px;transition:color 150ms ease 0s;box-sizing:border-box}.indicator-container.svelte-1l8hgl2:hover{color:var(--sv-icon-hover) }.indicator-separator.svelte-1l8hgl2{align-self:stretch;background-color:var(--sv-border-color);margin-bottom:8px;margin-top:8px;width:1px;box-sizing:border-box}.is-loading.svelte-1l8hgl2:after{animation:svelte-1l8hgl2-spinAround .5s infinite linear;border:var(--sv-loader-border);border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:20px;width:20px;right:8px;top:calc(50% - 10px);position:absolute !important;box-sizing:border-box}@keyframes svelte-1l8hgl2-spinAround{from{transform:rotate(0deg)\r\n  }to{transform:rotate(359deg)\r\n  }}',
  map: null
};
const Control = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hasDropdownOpened, $$unsubscribe_hasDropdownOpened;
  let $hasFocus, $$unsubscribe_hasFocus;
  let $inputValue, $$unsubscribe_inputValue;
  let { clearable } = $$props;
  let { searchable } = $$props;
  let { renderer } = $$props;
  let { disabled } = $$props;
  let { placeholder } = $$props;
  let { multiple } = $$props;
  let { resetOnBlur } = $$props;
  let { collapseSelection } = $$props;
  let { alwaysCollapsed } = $$props;
  let { inputId } = $$props;
  let { inputValue } = $$props;
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  let { hasFocus } = $$props;
  $$unsubscribe_hasFocus = subscribe(hasFocus, (value) => $hasFocus = value);
  let { hasDropdownOpened } = $$props;
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value) => $hasDropdownOpened = value);
  let { selectedOptions } = $$props;
  let { isFetchingData } = $$props;
  let { dndzone } = $$props;
  let { currentValueField } = $$props;
  let { itemComponent } = $$props;
  let { isAndroid } = $$props;
  let { isIOS } = $$props;
  let inputMode = "none";
  function focusControl(event) {
    if (disabled)
      return;
    if (!event) {
      !$hasFocus && refInput.focus();
      set_store_value(hasDropdownOpened, $hasDropdownOpened = true, $hasDropdownOpened);
      return;
    } else if (event?.target.tagName !== "INPUT") {
      event.preventDefault();
    }
    if (!$hasFocus) {
      refInput.focus();
    } else {
      if ((isAndroid || isIOS) && inputMode !== "text") {
        inputMode = "text";
        return;
      }
      if (event?.target.tagName === "INPUT" && $inputValue) {
        return;
      } else if (inputMode === "text") {
        inputMode = "none";
        set_store_value(hasDropdownOpened, $hasDropdownOpened = true, $hasDropdownOpened);
        return;
      }
      set_store_value(hasDropdownOpened, $hasDropdownOpened = !$hasDropdownOpened, $hasDropdownOpened);
    }
  }
  createEventDispatcher();
  let doCollapse = true;
  let refInput = void 0;
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.resetOnBlur === void 0 && $$bindings.resetOnBlur && resetOnBlur !== void 0)
    $$bindings.resetOnBlur(resetOnBlur);
  if ($$props.collapseSelection === void 0 && $$bindings.collapseSelection && collapseSelection !== void 0)
    $$bindings.collapseSelection(collapseSelection);
  if ($$props.alwaysCollapsed === void 0 && $$bindings.alwaysCollapsed && alwaysCollapsed !== void 0)
    $$bindings.alwaysCollapsed(alwaysCollapsed);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.hasFocus === void 0 && $$bindings.hasFocus && hasFocus !== void 0)
    $$bindings.hasFocus(hasFocus);
  if ($$props.hasDropdownOpened === void 0 && $$bindings.hasDropdownOpened && hasDropdownOpened !== void 0)
    $$bindings.hasDropdownOpened(hasDropdownOpened);
  if ($$props.selectedOptions === void 0 && $$bindings.selectedOptions && selectedOptions !== void 0)
    $$bindings.selectedOptions(selectedOptions);
  if ($$props.isFetchingData === void 0 && $$bindings.isFetchingData && isFetchingData !== void 0)
    $$bindings.isFetchingData(isFetchingData);
  if ($$props.dndzone === void 0 && $$bindings.dndzone && dndzone !== void 0)
    $$bindings.dndzone(dndzone);
  if ($$props.currentValueField === void 0 && $$bindings.currentValueField && currentValueField !== void 0)
    $$bindings.currentValueField(currentValueField);
  if ($$props.itemComponent === void 0 && $$bindings.itemComponent && itemComponent !== void 0)
    $$bindings.itemComponent(itemComponent);
  if ($$props.isAndroid === void 0 && $$bindings.isAndroid && isAndroid !== void 0)
    $$bindings.isAndroid(isAndroid);
  if ($$props.isIOS === void 0 && $$bindings.isIOS && isIOS !== void 0)
    $$bindings.isIOS(isIOS);
  if ($$props.focusControl === void 0 && $$bindings.focusControl && focusControl !== void 0)
    $$bindings.focusControl(focusControl);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="${[
      "sv-control svelte-1l8hgl2",
      ($hasFocus ? "is-active" : "") + " " + (disabled ? "is-disabled" : "")
    ].join(" ").trim()}">${slots.icon ? slots.icon({}) : ``}  <div class="${[
      "sv-content sv-input-row svelte-1l8hgl2",
      multiple ? "has-multiSelection" : ""
    ].join(" ").trim()}">${selectedOptions.length ? `${multiple && collapseSelection && doCollapse ? `<!-- HTML_TAG_START -->${collapseSelection(selectedOptions.length, selectedOptions)}<!-- HTML_TAG_END -->` : `${each(selectedOptions, (opt) => {
      return `<div>${validate_component(itemComponent || missing_component, "svelte:component").$$render(
        $$result,
        {
          formatter: renderer,
          item: opt,
          isSelected: true,
          isMultiple: multiple,
          inputValue: $inputValue
        },
        {},
        {}
      )} </div>`;
    })}`}` : ``}  ${validate_component(Input, "Input").$$render(
      $$result,
      {
        disabled,
        searchable,
        placeholder,
        multiple,
        inputId,
        inputValue,
        hasDropdownOpened,
        selectedOptions,
        isAndroid,
        inputMode,
        this: refInput
      },
      {
        this: ($$value) => {
          refInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  <div class="${["indicator svelte-1l8hgl2", isFetchingData ? "is-loading" : ""].join(" ").trim()}">${clearable && !disabled ? `<div aria-hidden="true" class="indicator-container close-icon svelte-1l8hgl2">${slots["clear-icon"] ? slots["clear-icon"]({}) : ``}</div>` : ``} ${clearable ? `<span class="indicator-separator svelte-1l8hgl2"></span>` : ``} <div aria-hidden="true" class="indicator-container svelte-1l8hgl2">${slots["indicator-icon"] ? slots["indicator-icon"]({ hasDropdownOpened: $hasDropdownOpened }) : ``}</div></div> ${slots["control-end"] ? slots["control-end"]({}) : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_hasDropdownOpened();
  $$unsubscribe_hasFocus();
  $$unsubscribe_inputValue();
  return $$rendered;
});
(() => {
  let result = false;
  try {
    const arg = Object.defineProperty({}, "passive", {
      get() {
        result = { passive: true };
        return true;
      }
    });
    window.addEventListener("testpassive", arg, arg);
    window.remove("testpassive", arg, arg);
  } catch (e) {
  }
  return result;
})();
const css$3 = {
  code: '.sv-dropdown.svelte-9227bl.svelte-9227bl{box-sizing:border-box;position:absolute;background-color:var(--sv-bg);width:100%;display:none;overflow-y:auto;overflow-x:hidden;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem;box-shadow:var(--sv-dropdown-shadow);z-index:2}.sv-dropdown.is-virtual.svelte-9227bl .sv-dropdown-scroll.svelte-9227bl{overflow-y:hidden}.sv-dropdown-scroll.svelte-9227bl.svelte-9227bl{padding:4px;box-sizing:border-box;max-height:var(--sv-dropdown-height);overflow-y:auto;overflow-x:hidden}.sv-dropdown-scroll.is-empty.svelte-9227bl.svelte-9227bl{padding:0}.sv-dropdown[aria-expanded="true"].svelte-9227bl.svelte-9227bl{display:block}.sv-dropdown-content.max-reached.svelte-9227bl.svelte-9227bl{opacity:0.75;cursor:not-allowed}.sv-dropdown-scroll.svelte-9227bl:not(.is-empty)+.creatable-row-wrap.svelte-9227bl{border-top:1px solid #efefef}.creatable-row-wrap.svelte-9227bl.svelte-9227bl{padding:4px}.creatable-row.svelte-9227bl.svelte-9227bl{box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;border-radius:2px;padding:3px 3px 3px 6px}.creatable-row.svelte-9227bl.svelte-9227bl:hover,.creatable-row.svelte-9227bl.svelte-9227bl:active,.creatable-row.active.svelte-9227bl.svelte-9227bl{background-color:var(--sv-item-active-bg)}.creatable-row.active.is-disabled.svelte-9227bl.svelte-9227bl{opacity:0.5;background-color:rgb(252, 186, 186)}.creatable-row.is-disabled.svelte-9227bl.svelte-9227bl{opacity:0.5;cursor:not-allowed}.shortcut.svelte-9227bl.svelte-9227bl{display:flex;align-items:center;align-content:center}.shortcut.svelte-9227bl>kbd.svelte-9227bl{border:1px solid #efefef;border-radius:4px;padding:0px 6px;margin:-1px 0;background-color:white;line-height:1.6;height:22px}.empty-list-row.svelte-9227bl.svelte-9227bl{min-width:0px;box-sizing:border-box;border-radius:2px;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box;border-radius:2px;overflow:hidden;padding:7px 7px 7px 10px;text-align:left}.alwaysCollapsed-selection.has-multiSelection.svelte-9227bl.svelte-9227bl{padding:4px 4px 0;display:flex;flex-wrap:wrap}',
  map: null
};
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_hasDropdownOpened;
  let { lazyDropdown } = $$props;
  let { creatable } = $$props;
  let { maxReached = false } = $$props;
  let { dropdownIndex = 0 } = $$props;
  let { renderer } = $$props;
  let { disableHighlight } = $$props;
  let { items = [] } = $$props;
  let { alreadyCreated } = $$props;
  let { virtualList } = $$props;
  let { vlItemSize } = $$props;
  let { vlHeight } = $$props;
  let { inputValue } = $$props;
  let { multiple } = $$props;
  let { listIndex } = $$props;
  let { hasDropdownOpened } = $$props;
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value) => value);
  let { listMessage } = $$props;
  let { disabledField } = $$props;
  let { createLabel } = $$props;
  let { metaKey } = $$props;
  let { itemComponent } = $$props;
  let { selection = null } = $$props;
  function scrollIntoView(params) {
    if (virtualList)
      return;
    if (dropdownIndex === null && scrollContainer) {
      scrollContainer.scrollTo(0, 0);
      return;
    }
    return;
  }
  function getDimensions() {
    if (virtualList) {
      return [scrollContainer.offsetHeight, vl_itemSize];
    }
    return [scrollContainer.offsetHeight, container.firstElementChild.offsetHeight];
  }
  createEventDispatcher();
  let container;
  let scrollContainer;
  let isMounted = false;
  let hasEmptyList = false;
  let renderDropdown = !lazyDropdown;
  let vl_height = vlHeight;
  let vl_itemSize = vlItemSize;
  let vl_autoMode = vlHeight === null && vlItemSize === null;
  function positionDropdown(val) {
    if (!renderDropdown)
      return;
    const outVp = isOutOfViewport(scrollContainer);
    if (outVp.bottom && !outVp.top) {
      scrollContainer.parentElement.style.bottom = scrollContainer.parentElement.parentElement.clientHeight + 1 + "px";
    } else if (!val || outVp.top) {
      scrollContainer.parentElement.style.bottom = "";
    }
  }
  function virtualListDimensionsResolver() {
    return;
  }
  let dropdownStateSubscription = () => {
  };
  onDestroy(() => dropdownStateSubscription());
  if ($$props.lazyDropdown === void 0 && $$bindings.lazyDropdown && lazyDropdown !== void 0)
    $$bindings.lazyDropdown(lazyDropdown);
  if ($$props.creatable === void 0 && $$bindings.creatable && creatable !== void 0)
    $$bindings.creatable(creatable);
  if ($$props.maxReached === void 0 && $$bindings.maxReached && maxReached !== void 0)
    $$bindings.maxReached(maxReached);
  if ($$props.dropdownIndex === void 0 && $$bindings.dropdownIndex && dropdownIndex !== void 0)
    $$bindings.dropdownIndex(dropdownIndex);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.disableHighlight === void 0 && $$bindings.disableHighlight && disableHighlight !== void 0)
    $$bindings.disableHighlight(disableHighlight);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.alreadyCreated === void 0 && $$bindings.alreadyCreated && alreadyCreated !== void 0)
    $$bindings.alreadyCreated(alreadyCreated);
  if ($$props.virtualList === void 0 && $$bindings.virtualList && virtualList !== void 0)
    $$bindings.virtualList(virtualList);
  if ($$props.vlItemSize === void 0 && $$bindings.vlItemSize && vlItemSize !== void 0)
    $$bindings.vlItemSize(vlItemSize);
  if ($$props.vlHeight === void 0 && $$bindings.vlHeight && vlHeight !== void 0)
    $$bindings.vlHeight(vlHeight);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.listIndex === void 0 && $$bindings.listIndex && listIndex !== void 0)
    $$bindings.listIndex(listIndex);
  if ($$props.hasDropdownOpened === void 0 && $$bindings.hasDropdownOpened && hasDropdownOpened !== void 0)
    $$bindings.hasDropdownOpened(hasDropdownOpened);
  if ($$props.listMessage === void 0 && $$bindings.listMessage && listMessage !== void 0)
    $$bindings.listMessage(listMessage);
  if ($$props.disabledField === void 0 && $$bindings.disabledField && disabledField !== void 0)
    $$bindings.disabledField(disabledField);
  if ($$props.createLabel === void 0 && $$bindings.createLabel && createLabel !== void 0)
    $$bindings.createLabel(createLabel);
  if ($$props.metaKey === void 0 && $$bindings.metaKey && metaKey !== void 0)
    $$bindings.metaKey(metaKey);
  if ($$props.itemComponent === void 0 && $$bindings.itemComponent && itemComponent !== void 0)
    $$bindings.itemComponent(itemComponent);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.scrollIntoView === void 0 && $$bindings.scrollIntoView && scrollIntoView !== void 0)
    $$bindings.scrollIntoView(scrollIntoView);
  if ($$props.getDimensions === void 0 && $$bindings.getDimensions && getDimensions !== void 0)
    $$bindings.getDimensions(getDimensions);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    items.length;
    {
      {
        hasEmptyList = items.length < 1 && (creatable ? !inputValue : true);
        if (virtualList && vl_autoMode && isMounted && renderDropdown) {
          if (hasEmptyList)
            dropdownIndex = null;
          vl_itemSize = 0;
          tick().then(virtualListDimensionsResolver).then(positionDropdown);
        }
      }
    }
    Math.min(vl_height, Array.isArray(vl_itemSize) ? vl_itemSize.reduce(
      (res, num) => {
        res += num;
        return res;
      },
      0
    ) : items.length * vl_itemSize);
    $$rendered = `${``}`;
  } while (!$$settled);
  $$unsubscribe_hasDropdownOpened();
  return $$rendered;
});
const css$2 = {
  code: ".sv-item-btn.svelte-w7c5vi.svelte-w7c5vi{position:relative;display:inline-flex;align-items:center;align-self:stretch;padding:0 4px;box-sizing:border-box;border-radius:2px;border-width:0;margin:0;cursor:pointer;background-color:var(--sv-item-btn-bg, var(--sv-item-selected-bg))}.sv-item-btn.svelte-w7c5vi.svelte-w7c5vi:hover{background-color:var(--sv-item-btn-bg-hover)}.sv-item-btn.svelte-w7c5vi>svg.svelte-w7c5vi{fill:var(--sv-item-btn-icon, var(--sv-icon-color))}",
  map: null
};
const ItemClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<button class="sv-item-btn svelte-w7c5vi" tabindex="-1" data-action="deselect" type="button" data-svelte-h="svelte-1l8fzrg"><svg height="16" width="16" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="svelte-w7c5vi"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg> </button>`;
});
const css$1 = {
  code: ".optgroup-header.svelte-1e087o6{padding:3px 3px 3px 6px;font-weight:bold}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inputValue } = $$props;
  let { index = -1 } = $$props;
  let { item = {} } = $$props;
  let { isSelected = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isMultiple = false } = $$props;
  let { formatter = null } = $$props;
  let { disableHighlight = false } = $$props;
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isMultiple === void 0 && $$bindings.isMultiple && isMultiple !== void 0)
    $$bindings.isMultiple(isMultiple);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.disableHighlight === void 0 && $$bindings.disableHighlight && disableHighlight !== void 0)
    $$bindings.disableHighlight(disableHighlight);
  $$result.css.add(css$1);
  return `${item.$isGroupHeader ? `<div class="optgroup-header svelte-1e087o6"><b>${escape(item.label)}</b></div>` : `<div class="${["sv-item", isDisabled ? "is-disabled" : ""].join(" ").trim()}"${add_attribute("title", item.$created ? "Created item" : "", 0)}><!-- HTML_TAG_START -->${isSelected ? `<div class="sv-item-content">${formatter(item, isSelected, inputValue)}</div>` : highlightSearch(item, isSelected, inputValue, formatter, disableHighlight)}<!-- HTML_TAG_END --> ${isSelected && isMultiple ? `${validate_component(ItemClose, "ItemClose").$$render($$result, {}, {}, {})}` : ``}</div>`}`;
});
const css = {
  code: ".svelecte-control.svelte-17904zl{--sv-bg:#fff;--sv-color:inherit;--sv-min-height:38px;--sv-border-color:#ccc;--sv-border:1px solid var(--sv-border-color);--sv-active-border:1px solid #555;--sv-active-outline:none;--sv-disabled-bg:#f2f2f2;--sv-disabled-border-color:#e6e6e6;--sv-placeholder-color:#ccccc6;--sv-icon-color:#ccc;--sv-icon-hover:#999;--sv-loader-border:3px solid #dbdbdb;--sv-dropdown-shadow:0 6px 12px rgba(0,0,0,0.175);--sv-dropdown-height:250px;--sv-item-selected-bg:#efefef;--sv-item-color:#333333;--sv-item-active-color:var(--sv-item-color);--sv-item-active-bg:#F2F5F8;--sv-item-btn-bg:var(--sv-item-selected-bg);--sv-item-btn-bg-hover:#ddd;--sv-item-btn-icon:var(--sv-item-color);--sv-highlight-bg:yellow;--sv-highlight-color:var(--sv-item-color)}.svelecte.svelte-17904zl{position:relative;flex:1 1 auto;color:var(--sv-color)}.svelecte.is-disabled.svelte-17904zl{pointer-events:none}.icon-slot.svelte-17904zl{display:flex}.sv-hidden-element.svelte-17904zl{opacity:0;position:absolute;z-index:-2;top:0;height:var(--sv-min-height)}.svelecte-control .has-multiSelection .sv-item,#dnd-action-dragged-el .sv-item{background-color:var(--sv-item-selected-bg);margin:2px 4px 2px 0}.svelecte-control .has-multiSelection .sv-item-content,.svelecte-control .sv-dropdown-content .sv-item,#dnd-action-dragged-el .sv-item-content{padding:3px 3px 3px 6px}.svelecte-control .sv-item,#dnd-action-dragged-el .sv-item{display:flex;min-width:0px;box-sizing:border-box;border-radius:2px;cursor:default}.svelecte-control .sv-item.is-disabled{opacity:0.5;cursor:not-allowed}.svelecte-control .sv-item-content,#dnd-action-dragged-el .sv-item-content{color:var(--sv-item-color, var(--sv-color));text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box;border-radius:2px;overflow:hidden;width:100%}.svelecte-control .sv-dd-item-active > .sv-item{background-color:var(--sv-item-active-bg)}.svelecte-control .sv-dd-item-active > .sv-item .sv-item-content{color:var(--sv-item-active-color, var(--sv-item-color))}.svelecte-control .highlight{background-color:var(--sv-highlight-bg);color:var(--sv-highlight-color, var(--sv-color))}.indicator-icon.svelte-17904zl{display:inline-block;fill:currentcolor;line-height:1;stroke:currentcolor;stroke-width:0px}",
  map: null
};
const formatterList = {
  default(item) {
    return escapeHtml(item[this.label]);
  }
};
const config = settings;
const Svelecte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let flatItems;
  let maxReached;
  let availableItems;
  let listIndex;
  let listMessage;
  let itemRenderer;
  let dropdownInputValue;
  let $inputValue, $$unsubscribe_inputValue;
  let $hasDropdownOpened, $$unsubscribe_hasDropdownOpened;
  let $hasFocus, $$unsubscribe_hasFocus;
  let { name = "svelecte" } = $$props;
  let { inputId = null } = $$props;
  let { required = false } = $$props;
  let { hasAnchor = false } = $$props;
  let { disabled = settings.disabled } = $$props;
  let { options = [] } = $$props;
  let { valueField = settings.valueField } = $$props;
  let { labelField = settings.labelField } = $$props;
  let { groupLabelField = settings.groupLabelField } = $$props;
  let { groupItemsField = settings.groupItemsField } = $$props;
  let { disabledField = settings.disabledField } = $$props;
  let { placeholder = "Select" } = $$props;
  let { searchable = settings.searchable } = $$props;
  let { clearable = settings.clearable } = $$props;
  let { renderer = null } = $$props;
  let { disableHighlight = false } = $$props;
  let { highlightFirstItem = settings.highlightFirstItem } = $$props;
  let { selectOnTab = settings.selectOnTab } = $$props;
  let { resetOnBlur = settings.resetOnBlur } = $$props;
  let { resetOnSelect = settings.resetOnSelect } = $$props;
  let { closeAfterSelect = settings.closeAfterSelect } = $$props;
  let { dndzone = () => ({
    noop: true,
    destroy: () => {
    }
  }) } = $$props;
  let { validatorAction = null } = $$props;
  let { dropdownItem = Item } = $$props;
  let { controlItem = Item } = $$props;
  let { multiple = settings.multiple } = $$props;
  let { max = settings.max } = $$props;
  let { collapseSelection = settings.collapseSelection } = $$props;
  let { alwaysCollapsed = settings.alwaysCollapsed } = $$props;
  let { creatable = settings.creatable } = $$props;
  let { creatablePrefix = settings.creatablePrefix } = $$props;
  let { allowEditing = settings.allowEditing } = $$props;
  let { keepCreated = settings.keepCreated } = $$props;
  let { delimiter = settings.delimiter } = $$props;
  let { createFilter = null } = $$props;
  let { createTransform = null } = $$props;
  let { fetch = null } = $$props;
  let { fetchMode = "auto" } = $$props;
  let { fetchCallback = settings.fetchCallback } = $$props;
  let { fetchResetOnBlur = true } = $$props;
  let { fetchDebounceTime = 500 } = $$props;
  let { minQuery = settings.minQuery } = $$props;
  let { lazyDropdown = settings.lazyDropdown } = $$props;
  let { virtualList = settings.virtualList } = $$props;
  let { vlHeight = settings.vlHeight } = $$props;
  let { vlItemSize = settings.vlItemSize } = $$props;
  let { searchField = null } = $$props;
  let { sortField = null } = $$props;
  let { disableSifter = false } = $$props;
  let { class: className = "svelecte-control" } = $$props;
  let { style = null } = $$props;
  let { i18n = null } = $$props;
  let { readSelection = null } = $$props;
  let { value = null } = $$props;
  let { labelAsValue = false } = $$props;
  let { valueAsObject = settings.valueAsObject } = $$props;
  const focus = (event) => {
    refControl.focusControl(event);
  };
  const getSelection = (onlyValues) => {
    if (!selectedOptions.length)
      return multiple ? [] : null;
    const _selection = selectedOptions.map((opt) => onlyValues ? opt[labelAsValue ? currentLabelField : currentValueField] : Object.assign({}, opt));
    return multiple ? _selection : _selection[0];
  };
  const setSelection = (selection, triggerChangeEvent) => {
    handleValueUpdate(selection);
    triggerChangeEvent && emitChangeEvent();
  };
  const clearByParent = (doDisable) => {
    clearSelection();
    emitChangeEvent();
    if (doDisable) {
      disabled = true;
      fetch = null;
    }
  };
  const __id = `sv-select-${Math.random()}`.replace(".", "");
  const dispatch = createEventDispatcher();
  const itemConfig = {
    optionsWithGroups: false,
    isOptionArray: options && options.length && typeof options[0] !== "object",
    optionProps: [],
    valueField,
    labelField,
    labelAsValue,
    optLabel: groupLabelField,
    optItems: groupItemsField
  };
  if (fetch && value && valueAsObject && (!options || options && options.length === 0)) {
    options = Array.isArray(value) ? value : [value];
  }
  let refDropdown;
  let refControl;
  let dropdownActiveIndex = null;
  let currentValueField = valueField || fieldInit("value", options, itemConfig);
  let currentLabelField = labelField || fieldInit("label", options, itemConfig);
  let isIOS = false;
  let isAndroid = false;
  validatorAction ? validatorAction.shift() : () => ({
    destroy: () => {
    }
  });
  itemConfig.valueField = currentValueField;
  itemConfig.labelField = currentLabelField;
  itemConfig.optionProps = value && valueAsObject && (multiple && Array.isArray(value) ? value.length > 0 : true) ? getFilterProps(multiple ? value.slice(0, 1).shift() : value) : [currentValueField, currentLabelField];
  multiple = name && !multiple ? name.endsWith("[]") : multiple;
  if (!createFilter)
    createFilter = defaultCreateFilter;
  const inputValue = writable("");
  $$unsubscribe_inputValue = subscribe(inputValue, (value2) => $inputValue = value2);
  const hasFocus = writable(false);
  $$unsubscribe_hasFocus = subscribe(hasFocus, (value2) => $hasFocus = value2);
  const hasDropdownOpened = writable(false);
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value2) => $hasDropdownOpened = value2);
  let isFetchingData = false;
  let initFetchOnly = fetchMode === "init" || fetchMode === "auto" && typeof fetch === "string" && fetch.indexOf("[query]") === -1;
  let fetchInitValue = initFetchOnly ? value : null;
  let fetchUnsubscribe = null;
  function createFetch(fetch2) {
    if (fetchUnsubscribe) {
      fetchUnsubscribe();
      fetchUnsubscribe = null;
    }
    if (!fetch2)
      return null;
    if (initFetchOnly && prevValue)
      fetchInitValue = prevValue;
    const fetchSource = typeof fetch2 === "string" ? fetchRemote(fetch2) : fetch2;
    initFetchOnly = fetchMode === "init" || fetchMode === "auto" && typeof fetch2 === "string" && fetch2.indexOf("[query]") === -1;
    const debouncedFetch = debounce(
      (query) => {
        if (query && !$inputValue.length) {
          isFetchingData = false;
          return;
        }
        fetchSource(query, fetchCallback).then((data) => {
          if (!Array.isArray(data)) {
            console.warn("[Svelecte]:Fetch - array expected, invalid property provided:", data);
            data = [];
          }
          options = data;
        }).catch(() => {
          options = [];
        }).finally(() => {
          isFetchingData = false;
          $hasFocus && hasDropdownOpened.set(true);
          listMessage = _i18n.fetchEmpty;
          tick().then(() => {
            if (initFetchOnly && fetchInitValue) {
              handleValueUpdate(fetchInitValue);
              fetchInitValue = null;
            }
            dispatch("fetch", options);
          });
        });
      },
      fetchDebounceTime
    );
    if (initFetchOnly) {
      if (typeof fetch2 === "string" && fetch2.indexOf("[parent]") !== -1)
        return null;
      isFetchingData = true;
      options = [];
      debouncedFetch(null);
      return null;
    }
    fetchUnsubscribe = inputValue.subscribe((value2) => {
      if (!value2) {
        return;
      }
      if (value2 && value2.length < minQuery)
        return;
      !initFetchOnly && hasDropdownOpened.set(false);
      isFetchingData = true;
      debouncedFetch(value2);
    });
    return debouncedFetch;
  }
  let prevValue = value;
  let _i18n = config.i18n;
  let selectedOptions = value !== null ? initSelection.call(options, value, valueAsObject, itemConfig) : [];
  let selectedKeys = selectedOptions.reduce(
    (set, opt) => {
      set.add(opt[currentValueField]);
      return set;
    },
    /* @__PURE__ */ new Set()
  );
  let alreadyCreated = [""];
  function emitChangeEvent() {
    tick().then(() => {
      dispatch("change", readSelection);
    });
  }
  function emitCreateEvent(createdOpt) {
    dispatch("createoption", createdOpt);
  }
  function handleValueUpdate(passedVal) {
    clearSelection();
    if (passedVal) {
      let _selection = Array.isArray(passedVal) ? passedVal : [passedVal];
      const valueProp = itemConfig.labelAsValue ? currentLabelField : currentValueField;
      _selection = _selection.reduce(
        (res, val) => {
          if (creatable && valueAsObject && val.$created) {
            res.push(val);
            return res;
          }
          const opt = flatItems.find((item) => valueAsObject ? item[valueProp] == val[valueProp] : item[valueProp] == val);
          opt && res.push(opt);
          return res;
        },
        []
      );
      let success = _selection.every(selectOption) && (multiple ? passedVal.length === _selection.length : _selection.length > 0);
      if (!success) {
        console.warn('[Svelecte]: provided "value" property is invalid', passedVal);
        value = multiple ? [] : null;
        readSelection = value;
        dispatch("invalidValue", passedVal);
        return;
      }
      readSelection = Array.isArray(passedVal) ? _selection : _selection.shift();
      if (!$hasDropdownOpened && virtualList) {
        let unsub = hasDropdownOpened.subscribe((val) => {
          if (!val)
            return;
          dropdownActiveIndex = dropdownActiveIndex;
          unsub && unsub();
        });
      }
    }
    prevValue = passedVal;
  }
  function selectOption(opt) {
    if (!opt || multiple && maxReached)
      return false;
    if (selectedKeys.has(opt[currentValueField]))
      return;
    if (typeof opt === "string") {
      if (!creatable)
        return;
      opt = createFilter(opt, options);
      if (alreadyCreated.includes(opt))
        return;
      !fetch && alreadyCreated.push(opt);
      opt = createTransform(opt, creatablePrefix, currentValueField, currentLabelField);
      opt.$created = true;
      if (keepCreated)
        options = [...options, opt];
      emitCreateEvent(opt);
    }
    if (multiple) {
      selectedOptions.push(opt);
      selectedOptions = selectedOptions;
      selectedKeys.add(opt[currentValueField]);
    } else {
      selectedOptions = [opt];
      selectedKeys.clear();
      selectedKeys.add(opt[currentValueField]);
      dropdownActiveIndex = options.indexOf(opt);
    }
    flatItems = flatItems;
    return true;
  }
  function clearSelection() {
    selectedKeys.clear();
    selectedOptions = [];
    maxReached = false;
    flatItems = flatItems;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.hasAnchor === void 0 && $$bindings.hasAnchor && hasAnchor !== void 0)
    $$bindings.hasAnchor(hasAnchor);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.valueField === void 0 && $$bindings.valueField && valueField !== void 0)
    $$bindings.valueField(valueField);
  if ($$props.labelField === void 0 && $$bindings.labelField && labelField !== void 0)
    $$bindings.labelField(labelField);
  if ($$props.groupLabelField === void 0 && $$bindings.groupLabelField && groupLabelField !== void 0)
    $$bindings.groupLabelField(groupLabelField);
  if ($$props.groupItemsField === void 0 && $$bindings.groupItemsField && groupItemsField !== void 0)
    $$bindings.groupItemsField(groupItemsField);
  if ($$props.disabledField === void 0 && $$bindings.disabledField && disabledField !== void 0)
    $$bindings.disabledField(disabledField);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.disableHighlight === void 0 && $$bindings.disableHighlight && disableHighlight !== void 0)
    $$bindings.disableHighlight(disableHighlight);
  if ($$props.highlightFirstItem === void 0 && $$bindings.highlightFirstItem && highlightFirstItem !== void 0)
    $$bindings.highlightFirstItem(highlightFirstItem);
  if ($$props.selectOnTab === void 0 && $$bindings.selectOnTab && selectOnTab !== void 0)
    $$bindings.selectOnTab(selectOnTab);
  if ($$props.resetOnBlur === void 0 && $$bindings.resetOnBlur && resetOnBlur !== void 0)
    $$bindings.resetOnBlur(resetOnBlur);
  if ($$props.resetOnSelect === void 0 && $$bindings.resetOnSelect && resetOnSelect !== void 0)
    $$bindings.resetOnSelect(resetOnSelect);
  if ($$props.closeAfterSelect === void 0 && $$bindings.closeAfterSelect && closeAfterSelect !== void 0)
    $$bindings.closeAfterSelect(closeAfterSelect);
  if ($$props.dndzone === void 0 && $$bindings.dndzone && dndzone !== void 0)
    $$bindings.dndzone(dndzone);
  if ($$props.validatorAction === void 0 && $$bindings.validatorAction && validatorAction !== void 0)
    $$bindings.validatorAction(validatorAction);
  if ($$props.dropdownItem === void 0 && $$bindings.dropdownItem && dropdownItem !== void 0)
    $$bindings.dropdownItem(dropdownItem);
  if ($$props.controlItem === void 0 && $$bindings.controlItem && controlItem !== void 0)
    $$bindings.controlItem(controlItem);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.collapseSelection === void 0 && $$bindings.collapseSelection && collapseSelection !== void 0)
    $$bindings.collapseSelection(collapseSelection);
  if ($$props.alwaysCollapsed === void 0 && $$bindings.alwaysCollapsed && alwaysCollapsed !== void 0)
    $$bindings.alwaysCollapsed(alwaysCollapsed);
  if ($$props.creatable === void 0 && $$bindings.creatable && creatable !== void 0)
    $$bindings.creatable(creatable);
  if ($$props.creatablePrefix === void 0 && $$bindings.creatablePrefix && creatablePrefix !== void 0)
    $$bindings.creatablePrefix(creatablePrefix);
  if ($$props.allowEditing === void 0 && $$bindings.allowEditing && allowEditing !== void 0)
    $$bindings.allowEditing(allowEditing);
  if ($$props.keepCreated === void 0 && $$bindings.keepCreated && keepCreated !== void 0)
    $$bindings.keepCreated(keepCreated);
  if ($$props.delimiter === void 0 && $$bindings.delimiter && delimiter !== void 0)
    $$bindings.delimiter(delimiter);
  if ($$props.createFilter === void 0 && $$bindings.createFilter && createFilter !== void 0)
    $$bindings.createFilter(createFilter);
  if ($$props.createTransform === void 0 && $$bindings.createTransform && createTransform !== void 0)
    $$bindings.createTransform(createTransform);
  if ($$props.fetch === void 0 && $$bindings.fetch && fetch !== void 0)
    $$bindings.fetch(fetch);
  if ($$props.fetchMode === void 0 && $$bindings.fetchMode && fetchMode !== void 0)
    $$bindings.fetchMode(fetchMode);
  if ($$props.fetchCallback === void 0 && $$bindings.fetchCallback && fetchCallback !== void 0)
    $$bindings.fetchCallback(fetchCallback);
  if ($$props.fetchResetOnBlur === void 0 && $$bindings.fetchResetOnBlur && fetchResetOnBlur !== void 0)
    $$bindings.fetchResetOnBlur(fetchResetOnBlur);
  if ($$props.fetchDebounceTime === void 0 && $$bindings.fetchDebounceTime && fetchDebounceTime !== void 0)
    $$bindings.fetchDebounceTime(fetchDebounceTime);
  if ($$props.minQuery === void 0 && $$bindings.minQuery && minQuery !== void 0)
    $$bindings.minQuery(minQuery);
  if ($$props.lazyDropdown === void 0 && $$bindings.lazyDropdown && lazyDropdown !== void 0)
    $$bindings.lazyDropdown(lazyDropdown);
  if ($$props.virtualList === void 0 && $$bindings.virtualList && virtualList !== void 0)
    $$bindings.virtualList(virtualList);
  if ($$props.vlHeight === void 0 && $$bindings.vlHeight && vlHeight !== void 0)
    $$bindings.vlHeight(vlHeight);
  if ($$props.vlItemSize === void 0 && $$bindings.vlItemSize && vlItemSize !== void 0)
    $$bindings.vlItemSize(vlItemSize);
  if ($$props.searchField === void 0 && $$bindings.searchField && searchField !== void 0)
    $$bindings.searchField(searchField);
  if ($$props.sortField === void 0 && $$bindings.sortField && sortField !== void 0)
    $$bindings.sortField(sortField);
  if ($$props.disableSifter === void 0 && $$bindings.disableSifter && disableSifter !== void 0)
    $$bindings.disableSifter(disableSifter);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.readSelection === void 0 && $$bindings.readSelection && readSelection !== void 0)
    $$bindings.readSelection(readSelection);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.labelAsValue === void 0 && $$bindings.labelAsValue && labelAsValue !== void 0)
    $$bindings.labelAsValue(labelAsValue);
  if ($$props.valueAsObject === void 0 && $$bindings.valueAsObject && valueAsObject !== void 0)
    $$bindings.valueAsObject(valueAsObject);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getSelection === void 0 && $$bindings.getSelection && getSelection !== void 0)
    $$bindings.getSelection(getSelection);
  if ($$props.setSelection === void 0 && $$bindings.setSelection && setSelection !== void 0)
    $$bindings.setSelection(setSelection);
  if ($$props.clearByParent === void 0 && $$bindings.clearByParent && clearByParent !== void 0)
    $$bindings.clearByParent(clearByParent);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!createTransform)
        createTransform = defaultCreateTransform;
    }
    {
      createFetch(fetch);
    }
    disabled && hasDropdownOpened.set(false);
    {
      {
        if (i18n && typeof i18n === "object") {
          _i18n = Object.assign({}, config.i18n, i18n);
        }
      }
    }
    {
      {
        itemConfig.labelAsValue = labelAsValue;
      }
    }
    flatItems = flatList(options, itemConfig);
    {
      {
        const _selectionArray = selectedOptions.map((opt) => {
          const { "$disabled": unused1, "$isGroupItem": unused2, ...obj } = opt;
          return obj;
        });
        const _unifiedSelection = multiple ? _selectionArray : _selectionArray.length ? _selectionArray[0] : null;
        const valueProp = itemConfig.labelAsValue ? currentLabelField : currentValueField;
        if (!valueAsObject) {
          prevValue = multiple ? _unifiedSelection.map((opt) => opt[valueProp]) : selectedOptions.length ? _unifiedSelection[valueProp] : null;
        } else {
          prevValue = _unifiedSelection;
        }
        value = prevValue;
        readSelection = _unifiedSelection;
      }
    }
    prevValue !== value && handleValueUpdate(value);
    maxReached = max && selectedOptions.length == max;
    availableItems = maxReached ? [] : filterList(flatItems, disableSifter ? null : $inputValue, multiple ? selectedKeys : false, searchField, sortField, itemConfig);
    creatable && $inputValue ? availableItems.length : availableItems.length - 1;
    listIndex = indexList(availableItems, creatable && $inputValue, itemConfig);
    {
      {
        if (dropdownActiveIndex === null && (highlightFirstItem || $inputValue)) {
          dropdownActiveIndex = listIndex.first;
        } else if (dropdownActiveIndex > listIndex.last) {
          dropdownActiveIndex = listIndex.last;
        } else if (dropdownActiveIndex < listIndex.first) {
          dropdownActiveIndex = listIndex.first;
        }
      }
    }
    {
      {
        if (!multiple && $hasDropdownOpened === false && selectedOptions.length) {
          dropdownActiveIndex = flatItems.findIndex((item) => item[currentValueField] === selectedOptions[0][currentValueField]);
          refDropdown && tick().then(refDropdown.scrollIntoView);
        }
      }
    }
    listMessage = maxReached ? _i18n.max(max) : $inputValue.length && availableItems.length === 0 && minQuery <= 1 ? _i18n.nomatch : fetch ? minQuery <= 1 ? initFetchOnly ? isFetchingData ? _i18n.fetchInit : _i18n.empty : _i18n.fetchBefore : _i18n.fetchQuery(minQuery, $inputValue.length) : _i18n.empty;
    itemRenderer = typeof renderer === "function" ? renderer : formatterList[renderer] || formatterList.default.bind({ label: currentLabelField });
    dropdownInputValue = createFilter($inputValue, options);
    $$rendered = `  <div class="${[
      escape(null_to_empty(`svelecte ${className}`), true) + " svelte-17904zl",
      disabled ? "is-disabled" : ""
    ].join(" ").trim()}"${add_attribute("style", style, 0)}>${validate_component(Control, "Control").$$render(
      $$result,
      {
        renderer: itemRenderer,
        disabled,
        clearable,
        searchable,
        placeholder,
        multiple,
        inputId: inputId || __id,
        resetOnBlur,
        collapseSelection: collapseSelection ? config.collapseSelectionFn.bind(_i18n) : null,
        inputValue,
        hasFocus,
        hasDropdownOpened,
        selectedOptions,
        isFetchingData,
        dndzone,
        currentValueField,
        isAndroid,
        isIOS,
        alwaysCollapsed,
        itemComponent: controlItem,
        this: refControl
      },
      {
        this: ($$value) => {
          refControl = $$value;
          $$settled = false;
        }
      },
      {
        "clear-icon": () => {
          return `${slots["clear-icon"] ? slots["clear-icon"]({
            slot: "clear-icon",
            selectedOptions,
            inputValue: $inputValue
          }) : ` ${selectedOptions.length ? `<svg class="indicator-icon svelte-17904zl" height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>` : ``} `}`;
        },
        "indicator-icon": () => {
          return `${slots["indicator-icon"] ? slots["indicator-icon"]({
            slot: "indicator-icon",
            hasDropdownOpened
          }) : ` <svg width="20" height="20" class="indicator-icon svelte-17904zl" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg> `}`;
        },
        "control-end": () => {
          return `<div slot="control-end">${slots["control-end"] ? slots["control-end"]({}) : ``}</div>`;
        },
        icon: () => {
          return `<div slot="icon" class="icon-slot svelte-17904zl">${slots.icon ? slots.icon({}) : ``}</div>`;
        }
      }
    )} ${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        renderer: itemRenderer,
        disableHighlight,
        creatable,
        maxReached,
        alreadyCreated,
        virtualList,
        vlHeight,
        vlItemSize,
        lazyDropdown: virtualList || lazyDropdown,
        multiple,
        dropdownIndex: dropdownActiveIndex,
        items: availableItems,
        listIndex,
        inputValue: dropdownInputValue,
        hasDropdownOpened,
        listMessage,
        disabledField,
        createLabel: _i18n.createRowLabel,
        metaKey: "Ctrl",
        selection: collapseSelection && alwaysCollapsed ? selectedOptions : null,
        itemComponent: dropdownItem,
        this: refDropdown
      },
      {
        this: ($$value) => {
          refDropdown = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${name && !hasAnchor ? `<select${add_attribute("id", __id, 0)}${add_attribute("name", name, 0)} ${multiple ? "multiple" : ""} class="sv-hidden-element svelte-17904zl" tabindex="-1" ${required ? "required" : ""} ${disabled ? "disabled" : ""}>${each(selectedOptions, (opt) => {
      return `<option${add_attribute("value", opt[labelAsValue ? currentLabelField : currentValueField], 0)} selected>${escape(opt[currentLabelField])}</option>`;
    })}</select>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_inputValue();
  $$unsubscribe_hasDropdownOpened();
  $$unsubscribe_hasFocus();
  return $$rendered;
});
const Combobox2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value2) => $t = value2);
  let { name } = $$props;
  let { placeholder } = $$props;
  let { value } = $$props;
  let { items } = $$props;
  let { error } = $$props;
  let { canTag } = $$props;
  let { isSingle } = $$props;
  let { url } = $$props;
  let { urlTransform } = $$props;
  let { method } = $$props;
  if (value && value.length) {
    if (typeof value[0] != "object") {
      value.forEach((val, key) => {
        value[key] = { label: val, value: val };
      });
    }
  }
  if (items && items.length) {
    if (typeof items[0] != "object") {
      items.forEach((val, key) => {
        items[key] = { label: val, value: val };
      });
    }
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.canTag === void 0 && $$bindings.canTag && canTag !== void 0)
    $$bindings.canTag(canTag);
  if ($$props.isSingle === void 0 && $$bindings.isSingle && isSingle !== void 0)
    $$bindings.isSingle(isSingle);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.urlTransform === void 0 && $$bindings.urlTransform && urlTransform !== void 0)
    $$bindings.urlTransform(urlTransform);
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${url ? `${validate_component(Svelecte, "Svelecte").$$render(
      $$result,
      {
        valueAsObject: true,
        minQuery: "2",
        placeholder,
        name,
        multiple: !isSingle,
        fetch: url,
        fetchCallback: (json) => {
          if (!urlTransform) {
            return json;
          }
          return urlTransform(json);
        },
        creatable: canTag,
        creatablePrefix: "",
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${!url ? `${validate_component(Svelecte, "Svelecte").$$render(
      $$result,
      {
        options: items,
        valueAsObject: true,
        minQuery: "2",
        placeholder,
        name,
        multiple: !isSingle,
        creatable: canTag,
        creatablePrefix: "",
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="invalid-feedback error errorRepeater">${error ? `${escape($t("errors." + error))}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
function testTransform(data) {
  return data;
}
const ConditionsPersonal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  $$unsubscribe_t();
  return `<div class="row"><div class="mb-4 col-6">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "user_ids",
      name: "user_ids",
      placeholder: $t("common.Select user Ids"),
      value: event.data.conditions.personal.user_ids,
      error: form?.errors?.user_ids,
      urlTransform: testTransform,
      url: "https://jsonplaceholder.typicode.com/users/?email_like=[query]"
    },
    {},
    {}
  )}</div> <div class="mb-4 col-6">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "has_verifications",
      name: "has_verifications",
      placeholder: $t("common.Select verifications"),
      value: event.data.conditions.personal.has_verifications,
      items: verifications,
      error: form?.errors?.has_verifications
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      name: "email_contains",
      id: "email_contains",
      placeholder: $t("common.Select email_contains"),
      value: event.data.conditions.email_contains,
      items: mail_domains,
      error: form?.errors?.email_contains,
      canTag: true
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      name: "phone_contains",
      id: "phone_contains",
      placeholder: $t("common.Select phone_contains"),
      value: event.data.conditions.phone_contains,
      items: ["+7", "+79"],
      error: form?.errors?.phone_contains,
      canTag: true
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      name: "username_contains",
      id: "username_contains",
      placeholder: $t("common.Select username_contains"),
      value: event.data.conditions.username_contains,
      items: [],
      error: form?.errors?.username_contains,
      canTag: true
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      name: "active_currency",
      id: "active_currency",
      placeholder: $t("common.Select active_currency"),
      value: event.data.conditions.active_currency,
      items: currenciesToSelect(currencies),
      error: form?.errors?.active_currency
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      name: "has_currency",
      id: "has_currency",
      placeholder: $t("common.Select has_currency"),
      value: event.data.conditions.has_currency,
      items: currenciesToSelect(currencies),
      error: form?.errors?.has_currency
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      name: "has_currencies",
      id: "has_currencies",
      placeholder: $t("common.Select has_currencies"),
      value: event.data.conditions.has_currencies,
      items: currenciesToSelect(currencies),
      error: form?.errors?.has_currencies
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "last_language",
      name: "last_language",
      placeholder: $t("common.Select last_language"),
      value: event.data.conditions.last_language,
      items: languages,
      error: form?.errors?.last_language
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "last_country",
      name: "last_country",
      placeholder: $t("common.Select last_country"),
      value: event.data.conditions.last_country,
      items: countries,
      error: form?.errors?.last_country
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "register_country",
      name: "register_country",
      placeholder: $t("common.Select register_country"),
      value: event.data.conditions.register_country,
      items: countries,
      error: form?.errors?.register_country
    },
    {},
    {}
  )}</div> <div class="mb-4 col-4">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "register_type",
      name: "register_type",
      placeholder: $t("common.Select register_type"),
      value: event.data.conditions.register_type,
      items: ["web"],
      error: form?.errors?.register_type
    },
    {},
    {}
  )}</div> <div class="col-md-3 mb-4">${validate_component(Datetime, "Datetime").$$render(
    $$result,
    {
      id: "register_date_from",
      name: "register_date_from",
      placeholder: $t("common.register_date_from"),
      label: $t("common.register_date_from"),
      error: void 0,
      value: event.register_date_from
    },
    {},
    {}
  )}</div> <div class="col-md-3 mb-4">${validate_component(Datetime, "Datetime").$$render(
    $$result,
    {
      id: "register_date_to",
      name: "register_date_to",
      placeholder: $t("common.register_date_to"),
      label: $t("common.register_date_to"),
      error: void 0,
      value: event.register_date_to
    },
    {},
    {}
  )}</div> <div class="col-md-3 mb-4">${validate_component(Text, "Text").$$render(
    $$result,
    {
      id: "register_date_from_count",
      name: "register_date_from_count",
      placeholder: $t("common.register_date_from_count"),
      label: $t("common.register_date_from_count"),
      error: void 0,
      value: event.register_date_from_count
    },
    {},
    {}
  )}</div> <div class="col-md-3 mb-4">${validate_component(Select, "Select").$$render(
    $$result,
    {
      id: "register_date_from_type",
      name: "register_date_from_type",
      label: $t("common.Select date_from_type"),
      error: form?.errors?.register_date_from_type,
      value: event.register_date_from_type,
      items: time_types
    },
    {},
    {}
  )}</div></div>`;
});
const Tab2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(TabContent, "TabContent").$$render($$result, { id: "2" }, {}, {
      default: () => {
        return `${validate_component(ContainerTab, "ContainerTab").$$render(
          $$result,
          {
            tab_id: "conditionsEventTab",
            tabs: [
              $t("common.personal conditions"),
              $t("common.payments conditions"),
              $t("common.withdraws conditions"),
              $t("common.games conditions")
            ]
          },
          {},
          {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "conditionsEventTab" }, {}, {
                default: () => {
                  return `${validate_component(ConditionsPersonal, "ConditionsPersonal").$$render(
                    $$result,
                    {
                      languages,
                      countries,
                      currencies,
                      form,
                      event
                    },
                    {
                      form: ($$value) => {
                        form = $$value;
                        $$settled = false;
                      },
                      event: ($$value) => {
                        event = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "conditionsEventTab", id: "2" }, {}, {
                default: () => {
                  return `2`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "conditionsEventTab", id: "3" }, {}, {
                default: () => {
                  return `3`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "conditionsEventTab", id: "4" }, {}, {
                default: () => {
                  return `4`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "conditionsEventTab", id: "5" }, {}, {
                default: () => {
                  return `5`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const MethodsPersonal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  let { emails } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  $$unsubscribe_t();
  return `<div class="row"><div class="mb-4 col-6">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "methods_personal_add_verifications",
      name: "methods_personal_add_verifications",
      placeholder: $t("common.Select add verifications"),
      value: event?.data?.methods?.personal?.add_verifications,
      items: verifications,
      error: form?.errors?.methods_personal_add_verifications
    },
    {},
    {}
  )}</div> <div class="mb-4 col-6">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "methods_personal_remove_verifications",
      name: "methods_personal_remove_verifications",
      placeholder: $t("common.Select remove verifications"),
      value: event?.data?.methods?.personal?.remove_verifications,
      items: verifications,
      error: form?.errors?.methods_personal_remove_verifications
    },
    {},
    {}
  )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
    $$result,
    {
      id: "methods_personal_ban_reason",
      name: "methods_personal_ban_reason",
      placeholder: $t("common.methods_personal_ban_reason"),
      label: $t("common.methods_personal_ban_reason"),
      error: void 0,
      value: event?.data?.methods?.personal?.ban_reason
    },
    {},
    {}
  )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
    $$result,
    {
      id: "methods_personal_ban_count",
      name: "methods_personal_ban_count",
      placeholder: $t("common.methods_personal_ban_count"),
      label: $t("common.methods_personal_ban_count"),
      error: void 0,
      value: event?.data?.methods?.personal?.ban_time_count
    },
    {},
    {}
  )}</div> <div class="col-md-4 mb-4">${validate_component(Select, "Select").$$render(
    $$result,
    {
      id: "methods_personal_ban_type",
      name: "methods_personal_ban_type",
      label: $t("common.Select date_from_type"),
      error: form?.errors?.methods_personal_ban_type,
      value: event?.data?.methods?.personal?.ban_time_type,
      items: time_types
    },
    {},
    {}
  )}</div></div>`;
});
const MethodsNotifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  let { emails } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  $$unsubscribe_t();
  return `<div class="row"><div class="mb-4 col-12">${validate_component(Combobox2, "ComboBox").$$render(
    $$result,
    {
      id: "pusher_notifications",
      name: "pusher_notifications",
      placeholder: $t("common.Select pusher_notifications"),
      value: event?.data?.methods?.notifications?.pusher_notifications,
      items: pusher_notifications,
      error: form?.errors?.pusher_notifications
    },
    {},
    {}
  )}</div> <div class="mb-4 col-12">${validate_component(Repeater, "Repeater").$$render(
    $$result,
    {
      count: event?.data?.methods?.notifications?.data?.length
    },
    {},
    {
      default: ({ number }) => {
        return `<div class="mb-3 col-md-2">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "language_" + number,
            name: "notifications[" + number + "][language]",
            label: $t("common.Language"),
            items: languages,
            error: null,
            value: event?.data?.methods?.notifications?.data[number]?.language
          },
          {},
          {}
        )}</div> <div class="mb-3 col-md-9"><div class="row"><div class="mb-3 col-md-6">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "email_" + number,
            name: "notifications[" + number + "][email]",
            label: $t("common.Email send"),
            items: emailTemplateToSelect(emails),
            error: null,
            value: event?.data?.methods?.notifications?.data[number]?.email
          },
          {},
          {}
        )}</div> <div class="col-md-6 mb-3">${validate_component(Text, "Text").$$render(
          $$result,
          {
            id: "sms_" + number,
            name: "notifications[" + number + "][sms]",
            placeholder: $t("common.sms text"),
            label: $t("common.sms text"),
            error: void 0,
            value: event?.data?.methods?.notifications?.data[number]?.sms
          },
          {},
          {}
        )}</div> <div class="col-md-6 mb-3">${validate_component(Text, "Text").$$render(
          $$result,
          {
            id: "user_notification_" + number,
            name: "notifications[" + number + "][user_notification]",
            placeholder: $t("common.user notification"),
            label: $t("common.user notification"),
            error: void 0,
            value: event?.data?.methods?.notifications?.data[number]?.user_notification
          },
          {},
          {}
        )}</div> <div class="col-md-6 mb-3">${validate_component(Text, "Text").$$render(
          $$result,
          {
            id: "admin_notify_" + number,
            name: "notifications[" + number + "][admin_notify]",
            placeholder: $t("common.admin_notify"),
            label: $t("common.admin_notify"),
            error: void 0,
            value: event?.data?.methods?.notifications?.data[number]?.admin_notify
          },
          {},
          {}
        )}</div></div></div>`;
      }
    }
  )}</div></div>`;
});
const Tab3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  let { emails } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(TabContent, "TabContent").$$render($$result, { id: "3" }, {}, {
      default: () => {
        return `${validate_component(ContainerTab, "ContainerTab").$$render(
          $$result,
          {
            tab_id: "methodsEventTab",
            tabs: [
              $t("common.personal methods"),
              $t("common.finances methods"),
              $t("common.bonuses methods"),
              $t("common.notifications methods")
            ]
          },
          {},
          {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "methodsEventTab" }, {}, {
                default: () => {
                  return `${validate_component(MethodsPersonal, "MethodsPersonal").$$render(
                    $$result,
                    {
                      languages,
                      countries,
                      currencies,
                      emails,
                      form,
                      event
                    },
                    {
                      form: ($$value) => {
                        form = $$value;
                        $$settled = false;
                      },
                      event: ($$value) => {
                        event = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "methodsEventTab", id: "2" }, {}, {
                default: () => {
                  return `2`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "methodsEventTab", id: "3" }, {}, {
                default: () => {
                  return `3`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { tab_id: "methodsEventTab", id: "4" }, {}, {
                default: () => {
                  return `${validate_component(MethodsNotifications, "MethodsNotifications").$$render(
                    $$result,
                    {
                      languages,
                      countries,
                      currencies,
                      emails,
                      form,
                      event
                    },
                    {
                      form: ($$value) => {
                        form = $$value;
                        $$settled = false;
                      },
                      event: ($$value) => {
                        event = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
function eventsToSelect(data) {
  let response = [];
  data.forEach((element) => {
    response.push({
      label: element.id + ": " + element.name + "(Enabled: " + element.is_enabled + ")",
      value: element.code_alpha
    });
  });
  return response;
}
const MethodsAfterFail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { events } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  $$unsubscribe_t();
  return `<div class="row"><div class="mb-4 col-12">${validate_component(Text, "Text").$$render(
    $$result,
    {
      id: "after_methods_notify2",
      name: "after_methods_notify2",
      placeholder: $t("common.after_methods_notify"),
      label: $t("common.after_methods_notify"),
      error: void 0,
      value: event?.data?.methods_after_fail?.admin_notify
    },
    {},
    {}
  )}</div> <hr> <div class="mb-4 col-12">${validate_component(Repeater, "Repeater").$$render(
    $$result,
    {
      count: event?.data?.methods_after_fail?.next_events?.length
    },
    {},
    {
      default: ({ number }) => {
        return `<div class="col-md-4 mb-4">${validate_component(Combobox2, "ComboBox").$$render(
          $$result,
          {
            id: "event_ids_2" + number,
            name: "methods_after2[" + number + "][event_ids]",
            placeholder: $t("common.Select event Ids"),
            value: event?.data?.methods_after_fail?.next_events[number]?.event_ids,
            items: eventsToSelect(events),
            error: void 0,
            canTag: true
          },
          {},
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            id: "after_time_count_2" + number,
            name: "methods_after[" + number + "][time_count]",
            placeholder: $t("common.time_count"),
            label: $t("common.time_count"),
            error: void 0,
            value: event?.data?.methods_after_fail?.next_events[number]?.time_count
          },
          {},
          {}
        )}</div> <div class="col-md-3 mb-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "after_time_type_2" + number,
            name: "methods_after[" + number + "][time_type]",
            label: $t("common.Select date_from_type"),
            error: form?.errors?.methods_personal_ban_type,
            value: event?.data?.methods_after_fail?.next_events[number]?.time_type,
            items: time_types
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div>`;
});
const MethodsAfterSuccess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { event } = $$props;
  let { form } = $$props;
  let { events } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  $$unsubscribe_t();
  return `<div class="row"><div class="mb-4 col-12">${validate_component(Text, "Text").$$render(
    $$result,
    {
      id: "after_methods_notify",
      name: "after_methods_notify",
      placeholder: $t("common.after_methods_notify"),
      label: $t("common.after_methods_notify"),
      error: void 0,
      value: event?.data?.methods_after_success?.admin_notify
    },
    {},
    {}
  )}</div> <hr> <div class="mb-4 col-12">${validate_component(Repeater, "Repeater").$$render(
    $$result,
    {
      count: event?.data?.methods_after_success?.next_events?.length
    },
    {},
    {
      default: ({ number }) => {
        return `<div class="col-md-4 mb-4">${validate_component(Combobox2, "ComboBox").$$render(
          $$result,
          {
            id: "event_ids_" + number,
            name: "methods_after[" + number + "][event_ids]",
            placeholder: $t("common.Select event Ids"),
            value: event?.data?.methods_after_success?.next_events[number]?.event_ids,
            items: eventsToSelect(events),
            error: void 0,
            canTag: true
          },
          {},
          {}
        )}</div> <div class="col-md-4 mb-4">${validate_component(Text, "Text").$$render(
          $$result,
          {
            id: "after_time_count_" + number,
            name: "methods_after[" + number + "][time_count]",
            placeholder: $t("common.time_count"),
            label: $t("common.time_count"),
            error: void 0,
            value: event?.data?.methods_after_success?.next_events[number]?.time_count
          },
          {},
          {}
        )}</div> <div class="col-md-3 mb-4">${validate_component(Select, "Select").$$render(
          $$result,
          {
            id: "after_time_type_" + number,
            name: "methods_after[" + number + "][time_type]",
            label: $t("common.Select date_from_type"),
            error: form?.errors?.methods_personal_ban_type,
            value: event?.data?.methods_after_success?.next_events[number]?.time_type,
            items: time_types
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div>`;
});
const Tab4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  let { emails } = $$props;
  let { events } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(TabContent, "TabContent").$$render($$result, { id: "4" }, {}, {
      default: () => {
        return `${validate_component(MethodsAfterSuccess, "MethodsAfterSuccess").$$render(
          $$result,
          {
            languages,
            countries,
            currencies,
            emails,
            events,
            form,
            event
          },
          {
            form: ($$value) => {
              form = $$value;
              $$settled = false;
            },
            event: ($$value) => {
              event = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Tab5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  let { form } = $$props;
  let { currencies } = $$props;
  let { languages } = $$props;
  let { countries } = $$props;
  let { emails } = $$props;
  let { events } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.currencies === void 0 && $$bindings.currencies && currencies !== void 0)
    $$bindings.currencies(currencies);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(TabContent, "TabContent").$$render($$result, { id: "5" }, {}, {
      default: () => {
        return `${validate_component(MethodsAfterFail, "MethodsAfterFail").$$render(
          $$result,
          {
            languages,
            countries,
            currencies,
            emails,
            events,
            form,
            event
          },
          {
            form: ($$value) => {
              form = $$value;
              $$settled = false;
            },
            event: ($$value) => {
              event = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let { form } = $$props;
  let deleteButton;
  let updateButton;
  let event = data.event;
  let languages = data.languages;
  let countries = data.countries;
  let currencies = data.currencies;
  let emails = data.emails;
  let events = data.events;
  if (!event) {
    event = {};
    event.data = {};
    event.data.conditions = {};
    event.data.conditions.personal = {};
    event.data.methods = {};
    event.data.methods.personal = {};
    event.data.methods.notifications = {};
    event.data.methods.notifications.pusher_notifications = [];
    event.data.methods.notifications.data = {};
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1s75dxm_START -->${$$result.title = `<title>Effective Solution - ${escape($t("common.event auth"))}</title>`, ""}<!-- HEAD_svelte-1s75dxm_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<form method="POST" enctype="multipart/form-data">${event.id ? `<input type="hidden" name="id"${add_attribute("value", event.id, 0)}>` : ``} ${validate_component(Header, "Header").$$render($$result, { title: $t("common.event auth") }, {}, {
          default: () => {
            return `<div class="col-12 col-md-auto"><div class="d-flex"><button class="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" data-svelte-h="svelte-qbten1"><span class="fa-solid fa-ellipsis"></span></button> <ul class="dropdown-menu dropdown-menu-end p-0" style="z-index: 9999;"><li><a class="dropdown-item" href="/casino/events/list">${escape($t("common.return to list"))}</a></li> ${event.id ? `<li><button class="dropdown-item text-danger" type="submit" name="delete"${add_attribute("this", deleteButton, 0)}>${escape($t("common.delete record"))}</button></li>` : ``}</ul></div></div>`;
          }
        })} <div class="row">${validate_component(ContainerTab, "ContainerTab").$$render(
          $$result,
          {
            tabs: [
              $t("common.info"),
              $t("common.conditions"),
              $t("common.methods"),
              $t("common.after methods on success"),
              $t("common.after methods on fail")
            ]
          },
          {},
          {
            default: () => {
              return `${validate_component(Tab1, "Tab1").$$render(
                $$result,
                {
                  languages,
                  countries,
                  currencies,
                  emails,
                  events,
                  form,
                  event
                },
                {
                  form: ($$value) => {
                    form = $$value;
                    $$settled = false;
                  },
                  event: ($$value) => {
                    event = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Tab2, "Tab2").$$render(
                $$result,
                {
                  languages,
                  countries,
                  currencies,
                  emails,
                  events,
                  form,
                  event
                },
                {
                  form: ($$value) => {
                    form = $$value;
                    $$settled = false;
                  },
                  event: ($$value) => {
                    event = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Tab3, "Tab3").$$render(
                $$result,
                {
                  languages,
                  countries,
                  currencies,
                  emails,
                  events,
                  form,
                  event
                },
                {
                  form: ($$value) => {
                    form = $$value;
                    $$settled = false;
                  },
                  event: ($$value) => {
                    event = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Tab4, "Tab4").$$render(
                $$result,
                {
                  languages,
                  countries,
                  currencies,
                  emails,
                  events,
                  form,
                  event
                },
                {
                  form: ($$value) => {
                    form = $$value;
                    $$settled = false;
                  },
                  event: ($$value) => {
                    event = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Tab5, "Tab5").$$render(
                $$result,
                {
                  languages,
                  countries,
                  currencies,
                  emails,
                  events,
                  form,
                  event
                },
                {
                  form: ($$value) => {
                    form = $$value;
                    $$settled = false;
                  },
                  event: ($$value) => {
                    event = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <div class="col-md-12 justify-content-end text-end">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  title: $t("common.Confirm"),
                  this: updateButton
                },
                {
                  this: ($$value) => {
                    updateButton = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>`;
            }
          }
        )}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7561c43e.js.map
