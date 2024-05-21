import { _ as __unplugin_components_0 } from "./ErrorHeader-7aY580Zd.js";
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { m as miscMaskDark, a as miscMaskLight } from "./misc-mask-light-C7JCN2q7.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VBtn } from "../ssr.js";
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
const pages404 = "/build/assets/404-D4QJtaIV.png";
const miscObj = "/build/assets/misc-404-object-03SP2Rta.png";
const _sfc_main = {
  __name: "[...error]",
  __ssrInlineRender: true,
  setup(__props) {
    const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ErrorHeader = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "misc-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ErrorHeader, {
        "status-code": "404",
        title: "Page Not Found ⚠️",
        description: "We couldn't find the page you are looking for.",
        class: "mb-10"
      }, null, _parent));
      _push(`<div class="misc-avatar w-100 text-center">`);
      _push(ssrRenderComponent(VImg, {
        src: unref(pages404),
        alt: "Coming Soon",
        height: _ctx.$vuetify.display.xs ? 400 : 500,
        class: "my-sm-5"
      }, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        to: "/",
        class: "mt-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to Home `);
          } else {
            return [
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authThemeMask),
        class: "d-none d-md-block footer-coming-soon flip-in-rtl",
        cover: ""
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(miscObj),
        class: "d-none d-md-block footer-coming-soon-obj",
        "max-width": 177,
        height: "160"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/[...error].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
