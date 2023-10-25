(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.config = factory());
})(this, (function () { 'use strict';

  const configQueryMap={"navbar-vertical-collapsed":"esplatformIsNavbarVerticalCollapsed","color-scheme":"esplatformTheme","navigation-type":"esplatformNavbarPosition","vertical-navbar-appearance":"esplatformNavbarVerticalStyle","horizontal-navbar-shape":"esplatformNavbarTopShape","horizontal-navbar-appearance":"esplatformNavbarTopStyle"},initialConfig={esplatformIsNavbarVerticalCollapsed:!1,esplatformTheme:"dark",esplatformNavbarTopStyle:"default",esplatformNavbarVerticalStyle:"default",esplatformNavbarPosition:"combo",esplatformNavbarTopShape:"slim",esplatformIsRTL:!1},CONFIG={...initialConfig},setConfig=(a,e=!0)=>{Object.keys(a).forEach((t=>{CONFIG[t]=a[t],e&&localStorage.setItem(t,a[t]);}));},resetConfig=()=>{Object.keys(initialConfig).forEach((a=>{CONFIG[a]=initialConfig[a],localStorage.setItem(a,initialConfig[a]);}));},urlSearchParams=new URLSearchParams(window.location.search),params=Object.fromEntries(urlSearchParams.entries());Object.keys(params).length>0&&Object.keys(params).includes("theme-control")&&(resetConfig(),Object.keys(params).forEach((a=>{configQueryMap[a]&&localStorage.setItem(configQueryMap[a],params[a]);}))),Object.keys(CONFIG).forEach((a=>{if(null===localStorage.getItem(a))localStorage.setItem(a,CONFIG[a]);else try{setConfig({[a]:JSON.parse(localStorage.getItem(a))});}catch{setConfig({[a]:localStorage.getItem(a)});}})),JSON.parse(localStorage.getItem("esplatformIsNavbarVerticalCollapsed"))&&document.documentElement.classList.add("navbar-vertical-collapsed"),"dark"===localStorage.getItem("esplatformTheme")&&document.documentElement.classList.add("dark"),"horizontal"===localStorage.getItem("esplatformNavbarPosition")&&document.documentElement.classList.add("navbar-horizontal"),"combo"===localStorage.getItem("esplatformNavbarPosition")&&document.documentElement.classList.add("navbar-combo");var config = {config:CONFIG,reset:resetConfig,set:setConfig};

  return config;

}));
//# sourceMappingURL=config.js.map
