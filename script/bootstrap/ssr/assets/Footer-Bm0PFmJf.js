import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, a as VIcon } from "../ssr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
import "vue-router";
import "@casl/vue";
import "@casl/ability";
import "outvariant";
import "@open-draft/until";
import "@mswjs/cookies";
import "strict-event-emitter";
import "@sindresorhus/is";
import "@bundled-es-modules/statuses";
import "path-to-regexp";
import "@mswjs/interceptors";
import "@bundled-es-modules/cookie";
import "headers-polyfill";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@antfu/utils";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-100 d-flex align-center justify-space-between text-medium-emphasis" }, _attrs))}><div class="d-flex align-center text-base"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}, Made With `);
  _push(ssrRenderComponent(VIcon, {
    icon: "ri-heart-fill",
    color: "error",
    size: "1.25rem",
    class: "mx-1"
  }, null, _parent));
  _push(` By <a href="https://pixinvent.com" target="_blank" rel="noopener noreferrer" class="text-primary ms-1">Pixinvent</a></div><span class="d-md-flex gap-x-4 text-primary d-none"><a href="https://themeforest.net/licenses/standard" target="noopener noreferrer">License</a><a href="https://1.envato.market/pixinvent_portfolio" target="noopener noreferrer">More Themes</a><a href="https://demos.pixinvent.com/materialize-vuejs-admin-template/documentation/guide/laravel-integration/folder-structure.html" target="noopener noreferrer">Documentation</a><a href="https://pixinvent.ticksy.com/" target="noopener noreferrer">Support</a></span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Footer as default
};
