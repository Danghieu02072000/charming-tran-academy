﻿import { select, on, addClass, hasClass, removeClass } from '../lib/dom'

const LANG_SELECTOR = '.js-langguage'
const LANG_TOOGLE_SELECTOR = '.js-language-toogle'
const LANG_DROPDOWN_SELECTOR = '.js-langguage-dropdown'
const LANG_DROPDOWN_ACTIVE_CLASS = 'navigation__langguage-dropdown--active'
var togger_on = document.querySelector('.nav-mobie__togger-link')
var togger_off = document.querySelector('.nav-mobie__menu-close')
var nav_mobie = document.querySelector('.nav-mobie__menu')
togger_on.onclick = function() {
  nav_mobie.classList.toggle("active");

}
togger_off.onclick = function() {
  nav_mobie.classList.toggle("active");
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild('loader');
  })
});
export default () => {

  const el = select(LANG_SELECTOR)
  if (el) {
    const toggleEl = select(LANG_TOOGLE_SELECTOR, el)
    const dropdownEl = select(LANG_DROPDOWN_SELECTOR, el)
    if (toggleEl && dropdownEl) {
      on('click', () => {
        if (!hasClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)) {
          addClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)
        } else {
          removeClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)
        }
      }, toggleEl)
    }
    on('click', (e) => {
      if (!el.contains(e.target)) {
        removeClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)
      }
    }, window)
  }
}
