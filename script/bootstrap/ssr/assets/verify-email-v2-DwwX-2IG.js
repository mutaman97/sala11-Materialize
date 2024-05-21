import { resolveComponent, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { a as authV2LoginMaskDark, b as authV2LoginMaskLight } from "./auth-v2-login-mask-light-C0LV4kb_.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
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
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
const authV2VerifyEmailIllustrationBorderedDark = "/build/assets/auth-v2-verify-email-illustration-bordered-dark-8K9Dpj3-.png";
const authV2VerifyEmailIllustrationBorderedLight = "/build/assets/auth-v2-verify-email-illustration-bordered-light-CoPrUJ2D.png";
const authV2VerifyEmailIllustrationDark = "/build/assets/auth-v2-verify-email-illustration-dark-BktbLxEX.png";
const authV2VerifyEmailIllustrationLight = "/build/assets/auth-v2-verify-email-illustration-light-BQ5rQYpk.png";
const _sfc_main = {
  __name: "verify-email-v2",
  __ssrInlineRender: true,
  setup(__props) {
    const authV1ThemeVerifyEmailMask = useGenerateImageVariant(authV2LoginMaskLight, authV2LoginMaskDark);
    const authV2VerifyEmailIllustration = useGenerateImageVariant(authV2VerifyEmailIllustrationLight, authV2VerifyEmailIllustrationDark, authV2VerifyEmailIllustrationBorderedLight, authV2VerifyEmailIllustrationBorderedDark, true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="app-logo auth-logo"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VNodeRenderer), {
              nodes: unref(themeConfig).app.logo
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="app-logo-title"${_scopeId}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div>`);
          } else {
            return [
              createVNode("div", { class: "app-logo auth-logo" }, [
                createVNode(unref(VNodeRenderer), {
                  nodes: unref(themeConfig).app.logo
                }, null, 8, ["nodes"]),
                createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, {
        class: "auth-wrapper",
        "no-gutters": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              md: "8",
              class: "d-none d-md-flex align-center justify-center position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center pa-10"${_scopeId2}><img${ssrRenderAttr("src", unref(authV2VerifyEmailIllustration))} class="auth-illustration w-100" alt="auth-illustration"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(authV1ThemeVerifyEmailMask),
                    class: "d-none d-md-flex auth-footer-mask",
                    alt: "auth-mask"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center pa-10" }, [
                      createVNode("img", {
                        src: unref(authV2VerifyEmailIllustration),
                        class: "auth-illustration w-100",
                        alt: "auth-illustration"
                      }, null, 8, ["src"])
                    ]),
                    createVNode(VImg, {
                      src: unref(authV1ThemeVerifyEmailMask),
                      class: "d-none d-md-flex auth-footer-mask",
                      alt: "auth-mask"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: "auth-card-v2 d-flex align-center justify-center",
              style: { "background-color": "rgb(var(--v-theme-surface))" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    "max-width": 500,
                    class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4 mb-1"${_scopeId4}> Verify your email ✉️ </h4><p class="mb-5"${_scopeId4}> Account activation link sent to your email address: <span class="text-high-emphasis font-weight-medium"${_scopeId4}>hello@example.com</span> Please follow the link inside to continue. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                to: "/",
                                class: "mb-5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Skip for now `);
                                  } else {
                                    return [
                                      createTextVNode(" Skip for now ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center justify-center"${_scopeId4}><span class="me-1"${_scopeId4}>Didn&#39;t get the mail? </span><a href="#"${_scopeId4}>Resend</a></div>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4 mb-1" }, " Verify your email ✉️ "),
                                createVNode("p", { class: "mb-5" }, [
                                  createTextVNode(" Account activation link sent to your email address: "),
                                  createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "hello@example.com"),
                                  createTextVNode(" Please follow the link inside to continue. ")
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  to: "/",
                                  class: "mb-5"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Skip for now ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex align-center justify-center" }, [
                                  createVNode("span", { class: "me-1" }, "Didn't get the mail? "),
                                  createVNode("a", { href: "#" }, "Resend")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 mb-1" }, " Verify your email ✉️ "),
                              createVNode("p", { class: "mb-5" }, [
                                createTextVNode(" Account activation link sent to your email address: "),
                                createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "hello@example.com"),
                                createTextVNode(" Please follow the link inside to continue. ")
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                to: "/",
                                class: "mb-5"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Skip for now ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex align-center justify-center" }, [
                                createVNode("span", { class: "me-1" }, "Didn't get the mail? "),
                                createVNode("a", { href: "#" }, "Resend")
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
                    createVNode(VCard, {
                      flat: "",
                      "max-width": 500,
                      class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4 mb-1" }, " Verify your email ✉️ "),
                            createVNode("p", { class: "mb-5" }, [
                              createTextVNode(" Account activation link sent to your email address: "),
                              createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "hello@example.com"),
                              createTextVNode(" Please follow the link inside to continue. ")
                            ]),
                            createVNode(VBtn, {
                              block: "",
                              to: "/",
                              class: "mb-5"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Skip for now ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex align-center justify-center" }, [
                              createVNode("span", { class: "me-1" }, "Didn't get the mail? "),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                md: "8",
                class: "d-none d-md-flex align-center justify-center position-relative"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center pa-10" }, [
                    createVNode("img", {
                      src: unref(authV2VerifyEmailIllustration),
                      class: "auth-illustration w-100",
                      alt: "auth-illustration"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(VImg, {
                    src: unref(authV1ThemeVerifyEmailMask),
                    class: "d-none d-md-flex auth-footer-mask",
                    alt: "auth-mask"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: "auth-card-v2 d-flex align-center justify-center",
                style: { "background-color": "rgb(var(--v-theme-surface))" }
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    "max-width": 500,
                    class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4 mb-1" }, " Verify your email ✉️ "),
                          createVNode("p", { class: "mb-5" }, [
                            createTextVNode(" Account activation link sent to your email address: "),
                            createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "hello@example.com"),
                            createTextVNode(" Please follow the link inside to continue. ")
                          ]),
                          createVNode(VBtn, {
                            block: "",
                            to: "/",
                            class: "mb-5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Skip for now ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex align-center justify-center" }, [
                            createVNode("span", { class: "me-1" }, "Didn't get the mail? "),
                            createVNode("a", { href: "#" }, "Resend")
                          ])
                        ]),
                        _: 1
                      })
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/verify-email-v2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
