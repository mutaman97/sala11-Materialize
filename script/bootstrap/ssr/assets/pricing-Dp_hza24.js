import { _ as __unplugin_components_0 } from "./AppPricing-DLCFY0_b.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import "./form-DJQTvsmB.js";
import "./VChip-BFfBWJ68.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VSwitch-nG7fxOCQ.js";
import "./VInput-Bla8Vlgt.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VRow-DasIRXDq.js";
/* empty css               */
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
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
  const _component_AppPricing = __unplugin_components_0;
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, { class: "py-16 mx-sm-16 px-md-9" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AppPricing, {
                md: "4",
                cols: "12"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_AppPricing, {
                  md: "4",
                  cols: "12"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, { class: "py-16 mx-sm-16 px-md-9" }, {
            default: withCtx(() => [
              createVNode(_component_AppPricing, {
                md: "4",
                cols: "12"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  pricing as default
};
