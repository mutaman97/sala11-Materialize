import { resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { a as authV1LoginMaskDark, b as authV1LoginMaskLight } from "./auth-v1-login-mask-light-3FFWpCKr.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
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
import "./VAvatar-D2wIwigQ.js";
const _sfc_main = {
  __name: "verify-email-v1",
  __ssrInlineRender: true,
  setup(__props) {
    const authV1ThemeVerifyEmailMask = useGenerateImageVariant(authV1LoginMaskLight, authV1LoginMaskDark);
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
                  _push3(`<h4 class="text-h4 mb-1"${_scopeId2}> Verify your email ✉️ </h4><p class="mb-5"${_scopeId2}> Account activation link sent to your email address: <span class="text-high-emphasis font-weight-medium"${_scopeId2}>hello@example.com</span> Please follow the link inside to continue. </p>`);
                  _push3(ssrRenderComponent(VBtn, {
                    block: "",
                    to: "/",
                    class: "mb-5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Skip for now `);
                      } else {
                        return [
                          createTextVNode(" Skip for now ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-center"${_scopeId2}><span class="me-1"${_scopeId2}>Didn&#39;t get the mail? </span><a href="#"${_scopeId2}>Resend</a></div>`);
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
      }, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authV1ThemeVerifyEmailMask),
        class: "d-none d-md-block auth-footer-mask flip-in-rtl"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/verify-email-v1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
