import { a as subscribe } from './utils-b921a818.js';
import { c as create_ssr_component, v as validate_component, e as escape, a as each, b as add_attribute } from './ssr-f419b600.js';
import { p as page } from './stores-0db64f9a.js';
import { f as locale, e as t2, l as locales } from './i18n-f1b3a1ed.js';
import './index2-5f3880fe.js';

const BellIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-bell " + escape(customClass, true)}"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`;
});
const LockIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-lock " + escape(customClass, true)}"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
});
const LogOutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-log-out " + escape(customClass, true)}"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`;
});
const MoonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-moon " + escape(customClass, true)}"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
});
const SunIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-sun " + escape(customClass, true)}"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
});
const MainMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  let { user } = $$props;
  let menu;
  if (user.role === 1) {
    menu = [
      {
        "title": "Misc",
        "icon": "uil uil-dice-six",
        "children": [
          {
            "title": "Clear cache",
            "icon": "uil uil-trash-alt",
            "url": ""
          },
          {
            "title": "Create dev account",
            "icon": "uil uil-user-plus",
            "url": "/dev/users/add"
          }
        ]
      },
      {
        "title": "Casinos",
        "icon": "uil uil-club",
        "children": [
          {
            "title": "List",
            "icon": "uil uil-list-ul",
            "url": "/dev/casinos"
          }
        ]
      },
      {
        "title": "Games",
        "icon": "fas fa-gamepad",
        "children": [
          {
            "title": "List",
            "icon": "uil uil-list-ul",
            "url": "/dev/games/list"
          }
        ]
      },
      {
        "title": "Currencies",
        "icon": "fas fa-dollar-sign",
        "children": [
          {
            "title": "List",
            "icon": "uil uil-list-ul",
            "url": "/dev/currencies/list"
          },
          {
            "title": "Add",
            "icon": "uil uil-list-ul",
            "url": "/dev/currencies/edit/0"
          }
        ]
      }
    ];
  } else {
    menu = [
      {
        "title": "Users",
        "icon": "uil uil-users-alt",
        "children": [
          {
            "title": "Real",
            "icon": "uil uil-user-square",
            "url": ""
          },
          {
            "title": "Admins",
            "icon": "uil uil-book-reader",
            "url": ""
          },
          {
            "title": "Bots",
            "icon": "uil uil-robot",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/users/bots/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/users/bots/edit/0"
              }
            ]
          },
          {
            "title": "Verification",
            "icon": "uil uil-user-check",
            "url": ""
          }
        ]
      },
      {
        "title": "Finances",
        "icon": "uil uil-university",
        "children": [
          {
            "title": "Payment gateways",
            "icon": "uil uil-money-withdraw",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/finances/payments/providers/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/finances/payments/providers/edit/0"
              }
            ]
          },
          {
            "title": "Withdrawal gateways",
            "icon": "uil uil-money-insert",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/finances/withdraws/providers/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/finances/withdraws/providers/edit/0"
              }
            ]
          },
          {
            "title": "Payment transactions",
            "icon": "uil uil-bill",
            "url": "#/finances/payments/list"
          },
          {
            "title": "Withdrawal transactions",
            "icon": "uil uil-invoice",
            "url": "#/finances/withdraws/list"
          }
        ]
      },
      {
        "title": "Casino",
        "icon": "uil uil-club",
        "children": [
          {
            "title": "Casino events",
            "icon": "uil uil-code-branch",
            "url": ""
          },
          {
            "title": "Bonuses",
            "icon": "uil uil-gift",
            "url": "/bonuses"
          }
        ]
        // {
        //     'title': 'Tournaments',
      },
      //     'url': '',
      // },
      // {
      //     'title': 'Lotteries',
      //     'icon': 'uil uil-ticket',
      //     'url': '',
      // },
      // {
      //     'title': 'Jackpots',
      //     'icon': 'uil uil-game-structure',
      //     'url': '',
      // },
      // {
      //     'title': 'Loyalty program',
      //     'icon': 'uil uil-heart-medical',
      //     'url': '',
      // },
      // {
      //     'title': 'Promocodes',
      //     'icon': 'uil uil-qrcode-scan',
      //     'url': '',
      // },
      {
        "title": "Games",
        //     'icon': 'uil uil-trophy',
        "icon": "fas fa-gamepad",
        "children": [
          {
            "title": "Games",
            "icon": "uil uil-layer-group",
            "url": "/games/list"
          },
          {
            "title": "Providers",
            "icon": "uil uil-list-ui-alt",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/games/providers/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/games/providers/edit/0"
              }
            ]
          },
          {
            "title": "Categories",
            "icon": "uil uil-list-ui-alt",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/games/categories/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/games/categories/edit/0"
              }
            ]
          },
          {
            "title": "Vendors",
            "icon": "uil uil-external-link-alt",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/games/apis/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/games/apis/edit/0"
              }
            ]
          }
        ]
      },
      {
        "title": "Settings",
        "icon": "uil uil-cog",
        "children": [
          {
            "title": "Main",
            "icon": "uil uil-cog",
            "url": "/settings/general"
          },
          {
            "title": "Authentication",
            "icon": "uil uil-cog",
            "url": "/settings/auth"
          },
          {
            "title": "Finances",
            "icon": "uil uil-cog",
            "url": "/settings/finances"
          },
          {
            "title": "Verification",
            "icon": "uil uil-cog",
            "url": "/settings/verification"
          },
          {
            "title": "Bots",
            "icon": "uil uil-cog",
            "url": "/settings/bots"
          },
          {
            "title": "Api",
            "icon": "uil uil-cog",
            "url": "/settings/apis"
          },
          // {
          //     'title': 'Currency conversion',
          //     'icon': 'uil uil-cog',
          //     'url': '',
          // },
          {
            "title": "Notifications",
            "icon": "uil uil-cog",
            "url": "/settings/notifications"
          }
        ]
      },
      {
        "title": "Logs",
        "icon": "uil uil-chart-bar",
        "children": [
          {
            "title": "Casino",
            "icon": "uil uil-club",
            "children": [
              {
                "title": "Bonuses history",
                "icon": "",
                "url": ""
              },
              {
                "title": "Tournaments history",
                "icon": "",
                "url": ""
              },
              {
                "title": "Lotteries history",
                "icon": "",
                "url": ""
              },
              {
                "title": "Loyalty program history",
                "icon": "",
                "url": ""
              },
              {
                "title": "Promocodes history",
                "icon": "",
                "url": ""
              }
            ]
          },
          {
            "title": "Finances",
            "icon": "uil uil-university",
            "children": [
              {
                "title": "Payments",
                "icon": "",
                "url": ""
              },
              {
                "title": "Withdrawals",
                "icon": "",
                "url": ""
              }
            ]
          },
          {
            "title": "Games",
            "icon": "fas fa-gamepad",
            "children": [
              {
                "title": "Statistics",
                "icon": "",
                "url": ""
              },
              {
                "title": "Sessions",
                "icon": "",
                "url": ""
              },
              { "title": "Bets", "icon": "", "url": "" }
            ]
          },
          {
            "title": "Logs",
            "icon": "uil uil-heart-rate",
            "children": [
              { "title": "Games", "icon": "", "url": "" },
              {
                "title": "Admin actions",
                "icon": "",
                "url": ""
              },
              {
                "title": "Actions",
                "icon": "",
                "url": ""
              },
              { "title": "Api", "icon": "", "url": "" },
              {
                "title": "Bans history",
                "icon": "",
                "url": ""
              },
              { "title": "Events", "icon": "", "url": "" },
              {
                "title": "Mail events",
                "icon": "",
                "url": ""
              }
            ]
          }
        ]
      },
      {
        "title": "Other",
        "icon": "uil uil-plug",
        "children": [
          {
            "title": "Slider",
            "icon": "uil uil-airplay",
            "children": [
              {
                "title": "List",
                "icon": "uil-list-ul",
                "url": "/plugins/slider/list"
              },
              {
                "title": "Add",
                "icon": "uil-plus-circle",
                "url": "/plugins/slider/edit/0"
              }
            ]
          },
          {
            "title": "Email",
            "icon": "uil uil-envelope-upload",
            "url": "/plugins/email"
          }
        ]
      }
    ];
  }
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse"><ul class="navbar-nav navbar-nav-top" data-dropdown-on-hovar="data-dropdown-on-hovar">${each(menu, (item) => {
    return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span class="${"fs-0 me-2 " + escape(item.icon, true)}"></span>${escape($t("common." + item.title))}</a> ${item.children ? `<ul class="dropdown-menu navbar-dropdown-caret">${each(item.children, (child) => {
      return `${child.children ? `<li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside"><div class="dropdown-item-wrapper"><span class="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span> <span><span class="${"me-2 " + escape(child.icon, true)}"></span>${escape($t("common." + child.title))}</span> </div></a> <ul class="dropdown-menu">${each(child.children, (child2) => {
        return `<li><a class="dropdown-item" href="${"/" + escape($locale, true) + escape(child2.url, true)}"><div class="dropdown-item-wrapper"><span class="${"me-2 " + escape(child2.icon, true)}"></span>${escape($t("common." + child2.title))}</div></a> </li>`;
      })}</ul> </li>` : `<li><a class="dropdown-item" href="${"/" + escape($locale, true) + escape(child.url, true)}"><div class="dropdown-item-wrapper"><span class="${"me-2 " + escape(child.icon, true)}"></span>${escape($t("common." + child.title))} </div></a> </li>`}`;
    })} </ul>` : ``} </li>`;
  })}</ul></div>`;
});
const Submenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { menu } = $$props;
  function checkActiveItem(url) {
    return $page.url.pathname === "/" + $locale + url;
  }
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  $$unsubscribe_locale();
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<div class="navbar-collapse mt-3" id="navbarVerticalCollapse"><ul class="navbar-nav flex-column" id="navbarVerticalNav">${each(menu, (item) => {
    return `<li class="nav-item"><div class="nav-item-wrapper"><a class="${["nav-link label-1", checkActiveItem(item.url) ? "active" : ""].join(" ").trim()}" href="${"/" + escape($locale, true) + escape(item.url, true)}" role="button" data-bs-toggle="" aria-expanded="false"><div class="d-flex align-items-center"><span class="nav-link-icon me-2"><span${add_attribute("class", item.icon, 0)}></span></span> <span class="nav-link-text-wrapper"><span class="nav-link-text">${escape($t("common." + item.title))}</span></span></div> </a></div> </li>`;
  })}</ul></div> <div class="navbar-vertical-footer" data-svelte-h="svelte-y0yino"><button class="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"><span class="uil uil-left-arrow-to-left fs-0"></span><span class="uil uil-arrow-from-right fs-0"></span><span class="navbar-vertical-footer-text ms-2">Collapsed View</span></button></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let route;
  let $page, $$unsubscribe_page;
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  let $locales, $$unsubscribe_locales;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_locales = subscribe(locales, (value) => $locales = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ route } = $page.data);
  $$unsubscribe_page();
  $$unsubscribe_locale();
  $$unsubscribe_t();
  $$unsubscribe_locales();
  return `<main class="main img-dropdown" id="top"><div class="container-fluid px-0" data-layout="container">${$page.data.submenu ? `<nav class="navbar navbar-vertical navbar-expand-lg">${validate_component(Submenu, "Submenu").$$render($$result, { menu: $page.data.submenu }, {}, {})}</nav>` : ``} <nav class="navbar navbar-top navbar-slim justify-content-between navbar-expand-lg" id="navbarTopSlim"><div class="navbar-logo"><a class="navbar-brand navbar-brand" href="${"/" + escape($locale, true) + "/dashboard"}">Effective <span class="text-1000 d-none d-sm-inline" data-svelte-h="svelte-1tjpon1">Solution</span></a></div> ${validate_component(MainMenu, "MainMenu").$$render($$result, { user: data.user }, {}, {})} <ul class="navbar-nav navbar-nav-icons flex-row"><li class="nav-item"><div class="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="esplatformTheme" value="dark"> <label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme">${validate_component(MoonIcon, "MoonIcon").$$render($$result, { class: "icon me-1 d-none d-sm-block" }, {}, {})}<span class="fs--1 fw-bold">${escape($t("common.Dark"))}</span></label> <label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme">${validate_component(SunIcon, "SunIcon").$$render($$result, { class: "icon me-1 d-none d-sm-block" }, {}, {})}<span class="fs--1 fw-bold">${escape($t("common.Light"))}</span></label></div></li> <li class="nav-item dropdown"><a class="nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuLanguage" data-svelte-h="svelte-z3qjkp"><span class="uil uil-language"></span></a> <ul class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 shadow border border-300" aria-labelledby="dropdownMenuLanguage">${each($locales, (lc) => {
    return `<li><a href="${"/" + escape(lc, true) + escape(route, true)}" class="${["dropdown-item", lc === $locale ? "fw-bold" : ""].join(" ").trim()}" data-sveltekit-reload>${escape($t(`lang.${lc}`))}</a> </li>`;
  })}</ul></li> <li class="nav-item dropdown"><a class="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">${validate_component(BellIcon, "BellIcon").$$render($$result, { size: "12" }, {}, {})}</a> <div class="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication"><div class="card position-relative border-0"><div class="card-header p-2"><div class="d-flex justify-content-between"><h5 class="text-black mb-0">${escape($t("common.Notifications"))}</h5><button class="btn btn-link p-0 fs--1 fw-normal" type="button">${escape($t("common.Mark all as read"))}</button></div></div> <div class="card-body p-0" data-svelte-h="svelte-12c095x"><div class="scrollbar-overlay" style="height: 27rem;"><div class="border-300"></div></div></div> <div class="card-footer p-0 border-top border-0"><div class="my-2 text-center fw-bold fs--2 text-600"><a class="fw-bolder" href="undefined">${escape($t("common.Notification history"))}</a></div></div></div></div></li> <li class="nav-item dropdown"><a class="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">${escape($t("common.Profile"))} <span class="fa-solid fa-chevron-down fs--2"></span></a> <div class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser"><div class="card position-relative border-0"><div class="card-body p-0"><div class="text-center pt-4 pb-3"><h6 class="mt-2 text-black">${escape(data.user.username)}</h6></div></div> <div class="overflow-auto scrollbar"><ul class="nav d-flex flex-column mb-2 pb-1"><li class="nav-item"><a class="nav-link px-3" href="/profile">${validate_component(LockIcon, "LockIcon").$$render($$result, { class: "me-2 text-900" }, {}, {})} <span>${escape($t("common.Change password"))}</span></a></li></ul></div> <div class="card-footer p-0 border-top"><div class="px-3 py-3"><a class="btn btn-esplatform-secondary d-flex flex-center w-100" href="/logout">${validate_component(LogOutIcon, "LogOutIcon").$$render($$result, { class: "me-2" }, {}, {})}${escape($t("common.Sign out"))}</a></div></div></div></div></li></ul></nav> ${slots.default ? slots.default({}) : ``}</div></main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1e6c4a23.js.map
