(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.config = factory());
})(this, (function () { 'use strict';

  /* eslint-disable no-var */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-extra-boolean-cast */
  /* -------------------------------------------------------------------------- */
  /*                              Config                                        */
  /* -------------------------------------------------------------------------- */

  const configQueryMap = {
    'navbar-vertical-collapsed': 'esplatformIsNavbarVerticalCollapsed',
    'color-scheme': 'esplatformTheme',
    'navigation-type': 'esplatformNavbarPosition',
    'vertical-navbar-appearance': 'esplatformNavbarVerticalStyle',
    'horizontal-navbar-shape': 'esplatformNavbarTopShape',
    'horizontal-navbar-appearance': 'esplatformNavbarTopStyle'
  };

  const initialConfig = {
    esplatformIsNavbarVerticalCollapsed: true,
    esplatformTheme: 'dark',
    esplatformNavbarTopStyle: 'horizontal',
    esplatformNavbarVerticalStyle: 'default',
    esplatformNavbarPosition: 'horizontal',
    esplatformNavbarTopShape: 'slim',
    esplatformIsRTL: false
  };

  const CONFIG = { ...initialConfig };

  const setConfig = (payload, persist = true) => {
    Object.keys(payload).forEach(key => {
      CONFIG[key] = payload[key];
      if (persist) {
        localStorage.setItem(key, payload[key]);
      }
    });
  };

  const resetConfig = () => {
    Object.keys(initialConfig).forEach(key => {
      CONFIG[key] = initialConfig[key];
      localStorage.setItem(key, initialConfig[key]);
    });
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log({ params });

  if (
    Object.keys(params).length > 0 &&
    Object.keys(params).includes('theme-control')
  ) {
    resetConfig();

    Object.keys(params).forEach(param => {
      if (configQueryMap[param]) {
        // setConfig({
        //   [configQueryMap[param]]: params[param]
        // });
        localStorage.setItem(configQueryMap[param], params[param]);
      }
    });
  }

  Object.keys(CONFIG).forEach(key => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, CONFIG[key]);
    } else {
      try {
        setConfig({
          [key]: JSON.parse(localStorage.getItem(key))
        });
      } catch {
        setConfig({
          [key]: localStorage.getItem(key)
        });
      }
    }
  });

  if (!!JSON.parse(localStorage.getItem('esplatformIsNavbarVerticalCollapsed'))) {
    document.documentElement.classList.add('navbar-vertical-collapsed');
  }

  if (localStorage.getItem('esplatformTheme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  if (localStorage.getItem('esplatformNavbarPosition') === 'horizontal') {
    document.documentElement.classList.add('navbar-horizontal');
  }

  if (localStorage.getItem('esplatformNavbarPosition') === 'combo') {
    document.documentElement.classList.add('navbar-combo');
  }

  var config = {
    config: CONFIG,
    reset: resetConfig,
    set: setConfig
  };

  return config;

}));
//# sourceMappingURL=config.js.map
