import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, isRef, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { a as authV1RegisterMaskDark, b as authV1RegisterMaskLight } from "./auth-v1-register-mask-light-Df6G7hxY.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { useRouter } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VOtpInput } from "./VOtpInput-_4snpP1G.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
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
import "./VAvatar-D2wIwigQ.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
import "./VField-DXNiYeaA.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
const _sfc_main = {
  __name: "two-steps-v1",
  __ssrInlineRender: true,
  setup(__props) {
    const authV1ThemeTwoStepMask = useGenerateImageVariant(authV1RegisterMaskLight, authV1RegisterMaskDark);
    const router = useRouter();
    const otp = ref("");
    const isOtpInserted = ref(false);
    const onFinish = () => {
      isOtpInserted.value = true;
      setTimeout(() => {
        isOtpInserted.value = false;
        router.push("/");
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-wrapper d-flex align-center justify-center pa-4" }, _attrs))}>`);
      _push(ssrRenderComponent(VCard, {
        class: "auth-card pa-1 pa-sm-7",
        "max-width": "448"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "justify-center pb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="app-logo"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, _parent5, _scopeId4));
                              _push5(`<h1 class="app-logo-title"${_scopeId4}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "app-logo" }, [
                                  createVNode(unref(VNodeRenderer), {
                                    nodes: unref(themeConfig).app.logo
                                  }, null, 8, ["nodes"]),
                                  createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_RouterLink, { to: "/" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "app-logo" }, [
                                createVNode(unref(VNodeRenderer), {
                                  nodes: unref(themeConfig).app.logo
                                }, null, 8, ["nodes"]),
                                createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(_component_RouterLink, { to: "/" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "app-logo" }, [
                              createVNode(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, 8, ["nodes"]),
                              createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 mb-1"${_scopeId2}> Two Step Verification 💬 </h4><p class="mb-1"${_scopeId2}> We sent a verification code to your mobile. Enter the code from the mobile in the field below. </p><h6 class="text-h6"${_scopeId2}> ******1234 </h6>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 mb-1" }, " Two Step Verification 💬 "),
                    createVNode("p", { class: "mb-1" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                    createVNode("h6", { class: "text-h6" }, " ******1234 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: () => {
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h6 class="text-body-1"${_scopeId3}> Type your 6 digit security code </h6>`);
                        _push4(ssrRenderComponent(VOtpInput, {
                          modelValue: unref(otp),
                          "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                          disabled: unref(isOtpInserted),
                          type: "number",
                          autofocus: "",
                          class: "pa-0",
                          onFinish
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          loading: unref(isOtpInserted),
                          disabled: unref(isOtpInserted),
                          block: "",
                          type: "submit",
                          class: "mt-3 mb-5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Verify my account `);
                            } else {
                              return [
                                createTextVNode(" Verify my account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="d-flex justify-center align-center flex-wrap"${_scopeId3}><span class="me-1"${_scopeId3}>Didn&#39;t get the code?</span><a href="#"${_scopeId3}>Resend</a></div>`);
                      } else {
                        return [
                          createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                          createVNode(VOtpInput, {
                            modelValue: unref(otp),
                            "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                            disabled: unref(isOtpInserted),
                            type: "number",
                            autofocus: "",
                            class: "pa-0",
                            onFinish
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(VBtn, {
                            loading: unref(isOtpInserted),
                            disabled: unref(isOtpInserted),
                            block: "",
                            type: "submit",
                            class: "mt-3 mb-5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Verify my account ")
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled"]),
                          createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                            createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                            createVNode("a", { href: "#" }, "Resend")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                        createVNode(VOtpInput, {
                          modelValue: unref(otp),
                          "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                          disabled: unref(isOtpInserted),
                          type: "number",
                          autofocus: "",
                          class: "pa-0",
                          onFinish
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(VBtn, {
                          loading: unref(isOtpInserted),
                          disabled: unref(isOtpInserted),
                          block: "",
                          type: "submit",
                          class: "mt-3 mb-5"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Verify my account ")
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled"]),
                        createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                          createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                          createVNode("a", { href: "#" }, "Resend")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { class: "justify-center pb-6" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "app-logo" }, [
                            createVNode(unref(VNodeRenderer), {
                              nodes: unref(themeConfig).app.logo
                            }, null, 8, ["nodes"]),
                            createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4 mb-1" }, " Two Step Verification 💬 "),
                  createVNode("p", { class: "mb-1" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                  createVNode("h6", { class: "text-h6" }, " ******1234 ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                      createVNode(VOtpInput, {
                        modelValue: unref(otp),
                        "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                        disabled: unref(isOtpInserted),
                        type: "number",
                        autofocus: "",
                        class: "pa-0",
                        onFinish
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(VBtn, {
                        loading: unref(isOtpInserted),
                        disabled: unref(isOtpInserted),
                        block: "",
                        type: "submit",
                        class: "mt-3 mb-5"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Verify my account ")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                        createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                        createVNode("a", { href: "#" }, "Resend")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authV1ThemeTwoStepMask),
        class: "d-none d-md-block auth-footer-mask flip-in-rtl"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/two-steps-v1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
