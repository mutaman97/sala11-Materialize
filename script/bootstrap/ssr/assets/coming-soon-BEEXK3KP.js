import { ref, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { m as miscMaskDark, a as miscMaskLight } from "./misc-mask-light-C7JCN2q7.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VBtn } from "../ssr.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
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
const miscComingSoonObj = "/build/assets/misc-coming-soon-object-BKgfMoEJ.png";
const miscComingSoon = "/build/assets/misc-coming-soon-PWgmKJz7.png";
const _sfc_main = {
  __name: "coming-soon",
  __ssrInlineRender: true,
  setup(__props) {
    const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark);
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "misc-wrapper" }, _attrs))}><div><div class="text-center mb-10"><h4 class="text-h4 mb-2"> We are launching soon 🚀 </h4><p class="text-body-1"> Our website is opening soon. Please register to get notified when it&#39;s ready! </p></div>`);
      _push(ssrRenderComponent(VForm, {
        class: "d-flex align-center justify-center flex-wrap gap-4",
        onSubmit: () => {
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              autofocus: "",
              placeholder: "Enter your email or username",
              class: "misc-email-input",
              density: "compact"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Notify `);
                } else {
                  return [
                    createTextVNode(" Notify ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextField, {
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                autofocus: "",
                placeholder: "Enter your email or username",
                class: "misc-email-input",
                density: "compact"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VBtn, { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode(" Notify ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="misc-avatar w-100 mt-10">`);
      _push(ssrRenderComponent(VImg, {
        src: unref(miscComingSoon),
        alt: "Coming Soon",
        height: _ctx.$vuetify.display.xs ? 400 : 500
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authThemeMask),
        class: "d-none d-md-block footer-coming-soon flip-in-rtl",
        cover: ""
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(miscComingSoonObj),
        class: "d-none d-md-block footer-coming-soon-obj",
        "max-width": 173,
        height: "158"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/misc/coming-soon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
