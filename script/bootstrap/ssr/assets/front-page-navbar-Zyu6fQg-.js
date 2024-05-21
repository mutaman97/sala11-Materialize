import { resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext, ref, shallowRef, computed, watch, onMounted, onBeforeUnmount, toRef, watchEffect, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, z as VNodeRenderer, B as themeConfig, V as VBtn, a as VIcon, C as propsFactory, aO as clamp, aJ as consoleWarn, E as genericComponent, av as useProxiedModel, aH as useToggleScope, F as useRender, bg as makeVBtnProps, k as useDisplay } from "../ssr.js";
import { V as VSheet } from "./VSheet-BoIzvRsi.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { useWindowScroll } from "@vueuse/core";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import _sfc_main$2 from "./NavbarThemeSwitcher-CmYbn-Kr.js";
import { useRoute, useRouter } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { a as makeLayoutItemProps, b as useLayoutItem, V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { m as makeVToolbarProps, V as VToolbar, b as makeVToolbarTitleProps, a as VToolbarTitle } from "./VToolbar-BfF0JSVH.js";
import { u as useSsrBoot } from "./ssrBoot-Co4_dNdy.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
const appleImg = "/build/assets/apple-icon-B_-p32MS.png";
const googlePlayImg = "/build/assets/google-play-icon-CFgC8fGg.png";
const _sfc_main$1 = {
  __name: "front-page-footer",
  __ssrInlineRender: true,
  setup(__props) {
    const menus = [
      {
        name: "Pricing",
        to: { name: "front-pages-pricing" }
      },
      {
        name: "Payment",
        to: { name: "front-pages-payment" },
        isNew: true
      },
      {
        name: "Maintenance",
        to: { name: "pages-misc-under-maintenance" }
      },
      {
        name: "Comming Soon",
        to: { name: "pages-misc-coming-soon" }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-3eba251e>`);
      _push(ssrRenderComponent(VSheet, {
        class: "footer-top pt-8 pb-4",
        theme: "dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="footer-form" data-v-3eba251e${_scopeId4}><div class="d-flex gap-2 py-1 mb-6" data-v-3eba251e${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, _parent5, _scopeId4));
                              _push5(`<h1 class="footer-title" data-v-3eba251e${_scopeId4}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div><div class="text-body-1 footer-text mb-6" data-v-3eba251e${_scopeId4}> Most Powerful &amp; Comprehensive <span class="text-high-emphasis" data-v-3eba251e${_scopeId4}>🤩</span> Vuejs Admin Template with Elegant Material Design &amp; Unique Layouts. </div>`);
                              _push5(ssrRenderComponent(VForm, { class: "subscribe-form d-flex align-center gap-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      label: "Subscribe to newsletter",
                                      placeholder: "john@email.com",
                                      theme: "dark",
                                      density: "compact",
                                      class: "footer-text"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, { size: "large" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Subscribe `);
                                        } else {
                                          return [
                                            createTextVNode(" Subscribe ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        label: "Subscribe to newsletter",
                                        placeholder: "john@email.com",
                                        theme: "dark",
                                        density: "compact",
                                        class: "footer-text"
                                      }),
                                      createVNode(VBtn, { size: "large" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Subscribe ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "footer-form" }, [
                                  createVNode("div", { class: "d-flex gap-2 py-1 mb-6" }, [
                                    createVNode(unref(VNodeRenderer), {
                                      nodes: unref(themeConfig).app.logo
                                    }, null, 8, ["nodes"]),
                                    createVNode("h1", { class: "footer-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                                  ]),
                                  createVNode("div", { class: "text-body-1 footer-text mb-6" }, [
                                    createTextVNode(" Most Powerful & Comprehensive "),
                                    createVNode("span", { class: "text-high-emphasis" }, "🤩"),
                                    createTextVNode(" Vuejs Admin Template with Elegant Material Design & Unique Layouts. ")
                                  ]),
                                  createVNode(VForm, { class: "subscribe-form d-flex align-center gap-4" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Subscribe to newsletter",
                                        placeholder: "john@email.com",
                                        theme: "dark",
                                        density: "compact",
                                        class: "footer-text"
                                      }),
                                      createVNode(VBtn, { size: "large" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Subscribe ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          md: "2",
                          sm: "4",
                          xs: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="footer-links" data-v-3eba251e${_scopeId4}><div class="footer-heading mb-6" data-v-3eba251e${_scopeId4}> Pages </div><ul style="${ssrRenderStyle({ "list-style": "none" })}" data-v-3eba251e${_scopeId4}><!--[-->`);
                              ssrRenderList(menus, (item, index) => {
                                _push5(`<li class="mb-4" data-v-3eba251e${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_RouterLink, {
                                  class: "text-body-1 footer-text text-no-wrap",
                                  to: item.to
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex align-center" data-v-3eba251e${_scopeId5}><div data-v-3eba251e${_scopeId5}>${ssrInterpolate(item.name)}</div>`);
                                      if (item.isNew) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: "primary",
                                          variant: "elevated",
                                          size: "small",
                                          class: "ms-2"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` New `);
                                            } else {
                                              return [
                                                createTextVNode(" New ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode("div", null, toDisplayString(item.name), 1),
                                          item.isNew ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            color: "primary",
                                            variant: "elevated",
                                            size: "small",
                                            class: "ms-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" New ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</li>`);
                              });
                              _push5(`<!--]--></ul></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "footer-links" }, [
                                  createVNode("div", { class: "footer-heading mb-6" }, " Pages "),
                                  createVNode("ul", { style: { "list-style": "none" } }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(menus, (item, index) => {
                                      return createVNode("li", {
                                        key: index,
                                        class: "mb-4"
                                      }, [
                                        createVNode(_component_RouterLink, {
                                          class: "text-body-1 footer-text text-no-wrap",
                                          to: item.to
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode("div", null, toDisplayString(item.name), 1),
                                              item.isNew ? (openBlock(), createBlock(VChip, {
                                                key: 0,
                                                color: "primary",
                                                variant: "elevated",
                                                size: "small",
                                                class: "ms-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" New ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]);
                                    }), 64))
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          md: "2",
                          sm: "4",
                          xs: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="footer-links" data-v-3eba251e${_scopeId4}><div class="footer-heading mb-6" data-v-3eba251e${_scopeId4}> Products </div><ul data-v-3eba251e${_scopeId4}><!--[-->`);
                              ssrRenderList(["Page Builder", "Admin Dashboards", "UI Kits", "Illustrations"], (item, index) => {
                                _push5(`<li class="mb-4 text-body-1" style="${ssrRenderStyle({ "list-style": "none" })}" data-v-3eba251e${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_RouterLink, {
                                  to: "",
                                  class: "footer-text text-no-wrap"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</li>`);
                              });
                              _push5(`<!--]--></ul></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "footer-links" }, [
                                  createVNode("div", { class: "footer-heading mb-6" }, " Products "),
                                  createVNode("ul", null, [
                                    (openBlock(), createBlock(Fragment, null, renderList(["Page Builder", "Admin Dashboards", "UI Kits", "Illustrations"], (item, index) => {
                                      return createVNode("li", {
                                        key: index,
                                        class: "mb-4 text-body-1",
                                        style: { "list-style": "none" }
                                      }, [
                                        createVNode(_component_RouterLink, {
                                          to: "",
                                          class: "footer-text text-no-wrap"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 64))
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div data-v-3eba251e${_scopeId4}><div class="footer-heading mb-6" data-v-3eba251e${_scopeId4}> Download our app </div><div data-v-3eba251e${_scopeId4}><!--[-->`);
                              ssrRenderList([
                                { image: unref(appleImg), store: "App Store" },
                                { image: unref(googlePlayImg), store: "Google Play" }
                              ], (item, index) => {
                                _push5(ssrRenderComponent(VBtn, {
                                  key: index,
                                  color: "#211B2C",
                                  height: "56",
                                  size: "large",
                                  class: "mb-4 d-block"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex gap-x-6 footer-logo-buttons align-center" data-v-3eba251e${_scopeId5}><div data-v-3eba251e${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VImg, {
                                        src: item.image,
                                        height: "34",
                                        width: "34"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div><div class="d-flex flex-column align-start" data-v-3eba251e${_scopeId5}><div class="text-body-2 footer-text" data-v-3eba251e${_scopeId5}> Download on the </div><div class="text-body-1 font-weight-medium footer-heading" data-v-3eba251e${_scopeId5}>${ssrInterpolate(item.store)}</div></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex gap-x-6 footer-logo-buttons align-center" }, [
                                          createVNode("div", null, [
                                            createVNode(VImg, {
                                              src: item.image,
                                              height: "34",
                                              width: "34"
                                            }, null, 8, ["src"])
                                          ]),
                                          createVNode("div", { class: "d-flex flex-column align-start" }, [
                                            createVNode("div", { class: "text-body-2 footer-text" }, " Download on the "),
                                            createVNode("div", { class: "text-body-1 font-weight-medium footer-heading" }, toDisplayString(item.store), 1)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]--></div></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("div", { class: "footer-heading mb-6" }, " Download our app "),
                                  createVNode("div", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList([
                                      { image: unref(appleImg), store: "App Store" },
                                      { image: unref(googlePlayImg), store: "Google Play" }
                                    ], (item, index) => {
                                      return openBlock(), createBlock(VBtn, {
                                        key: index,
                                        color: "#211B2C",
                                        height: "56",
                                        size: "large",
                                        class: "mb-4 d-block"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex gap-x-6 footer-logo-buttons align-center" }, [
                                            createVNode("div", null, [
                                              createVNode(VImg, {
                                                src: item.image,
                                                height: "34",
                                                width: "34"
                                              }, null, 8, ["src"])
                                            ]),
                                            createVNode("div", { class: "d-flex flex-column align-start" }, [
                                              createVNode("div", { class: "text-body-2 footer-text" }, " Download on the "),
                                              createVNode("div", { class: "text-body-1 font-weight-medium footer-heading" }, toDisplayString(item.store), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "footer-form" }, [
                                createVNode("div", { class: "d-flex gap-2 py-1 mb-6" }, [
                                  createVNode(unref(VNodeRenderer), {
                                    nodes: unref(themeConfig).app.logo
                                  }, null, 8, ["nodes"]),
                                  createVNode("h1", { class: "footer-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                                ]),
                                createVNode("div", { class: "text-body-1 footer-text mb-6" }, [
                                  createTextVNode(" Most Powerful & Comprehensive "),
                                  createVNode("span", { class: "text-high-emphasis" }, "🤩"),
                                  createTextVNode(" Vuejs Admin Template with Elegant Material Design & Unique Layouts. ")
                                ]),
                                createVNode(VForm, { class: "subscribe-form d-flex align-center gap-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Subscribe to newsletter",
                                      placeholder: "john@email.com",
                                      theme: "dark",
                                      density: "compact",
                                      class: "footer-text"
                                    }),
                                    createVNode(VBtn, { size: "large" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Subscribe ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            md: "2",
                            sm: "4",
                            xs: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "footer-links" }, [
                                createVNode("div", { class: "footer-heading mb-6" }, " Pages "),
                                createVNode("ul", { style: { "list-style": "none" } }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(menus, (item, index) => {
                                    return createVNode("li", {
                                      key: index,
                                      class: "mb-4"
                                    }, [
                                      createVNode(_component_RouterLink, {
                                        class: "text-body-1 footer-text text-no-wrap",
                                        to: item.to
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode("div", null, toDisplayString(item.name), 1),
                                            item.isNew ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              color: "primary",
                                              variant: "elevated",
                                              size: "small",
                                              class: "ms-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" New ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]);
                                  }), 64))
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            md: "2",
                            sm: "4",
                            xs: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "footer-links" }, [
                                createVNode("div", { class: "footer-heading mb-6" }, " Products "),
                                createVNode("ul", null, [
                                  (openBlock(), createBlock(Fragment, null, renderList(["Page Builder", "Admin Dashboards", "UI Kits", "Illustrations"], (item, index) => {
                                    return createVNode("li", {
                                      key: index,
                                      class: "mb-4 text-body-1",
                                      style: { "list-style": "none" }
                                    }, [
                                      createVNode(_component_RouterLink, {
                                        to: "",
                                        class: "footer-text text-no-wrap"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]);
                                  }), 64))
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("div", { class: "footer-heading mb-6" }, " Download our app "),
                                createVNode("div", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList([
                                    { image: unref(appleImg), store: "App Store" },
                                    { image: unref(googlePlayImg), store: "Google Play" }
                                  ], (item, index) => {
                                    return openBlock(), createBlock(VBtn, {
                                      key: index,
                                      color: "#211B2C",
                                      height: "56",
                                      size: "large",
                                      class: "mb-4 d-block"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex gap-x-6 footer-logo-buttons align-center" }, [
                                          createVNode("div", null, [
                                            createVNode(VImg, {
                                              src: item.image,
                                              height: "34",
                                              width: "34"
                                            }, null, 8, ["src"])
                                          ]),
                                          createVNode("div", { class: "d-flex flex-column align-start" }, [
                                            createVNode("div", { class: "text-body-2 footer-text" }, " Download on the "),
                                            createVNode("div", { class: "text-body-1 font-weight-medium footer-heading" }, toDisplayString(item.store), 1)
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "footer-form" }, [
                              createVNode("div", { class: "d-flex gap-2 py-1 mb-6" }, [
                                createVNode(unref(VNodeRenderer), {
                                  nodes: unref(themeConfig).app.logo
                                }, null, 8, ["nodes"]),
                                createVNode("h1", { class: "footer-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                              ]),
                              createVNode("div", { class: "text-body-1 footer-text mb-6" }, [
                                createTextVNode(" Most Powerful & Comprehensive "),
                                createVNode("span", { class: "text-high-emphasis" }, "🤩"),
                                createTextVNode(" Vuejs Admin Template with Elegant Material Design & Unique Layouts. ")
                              ]),
                              createVNode(VForm, { class: "subscribe-form d-flex align-center gap-4" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Subscribe to newsletter",
                                    placeholder: "john@email.com",
                                    theme: "dark",
                                    density: "compact",
                                    class: "footer-text"
                                  }),
                                  createVNode(VBtn, { size: "large" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Subscribe ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          md: "2",
                          sm: "4",
                          xs: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "footer-links" }, [
                              createVNode("div", { class: "footer-heading mb-6" }, " Pages "),
                              createVNode("ul", { style: { "list-style": "none" } }, [
                                (openBlock(), createBlock(Fragment, null, renderList(menus, (item, index) => {
                                  return createVNode("li", {
                                    key: index,
                                    class: "mb-4"
                                  }, [
                                    createVNode(_component_RouterLink, {
                                      class: "text-body-1 footer-text text-no-wrap",
                                      to: item.to
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode("div", null, toDisplayString(item.name), 1),
                                          item.isNew ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            color: "primary",
                                            variant: "elevated",
                                            size: "small",
                                            class: "ms-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" New ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]);
                                }), 64))
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          md: "2",
                          sm: "4",
                          xs: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "footer-links" }, [
                              createVNode("div", { class: "footer-heading mb-6" }, " Products "),
                              createVNode("ul", null, [
                                (openBlock(), createBlock(Fragment, null, renderList(["Page Builder", "Admin Dashboards", "UI Kits", "Illustrations"], (item, index) => {
                                  return createVNode("li", {
                                    key: index,
                                    class: "mb-4 text-body-1",
                                    style: { "list-style": "none" }
                                  }, [
                                    createVNode(_component_RouterLink, {
                                      to: "",
                                      class: "footer-text text-no-wrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]);
                                }), 64))
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "footer-heading mb-6" }, " Download our app "),
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList([
                                  { image: unref(appleImg), store: "App Store" },
                                  { image: unref(googlePlayImg), store: "Google Play" }
                                ], (item, index) => {
                                  return openBlock(), createBlock(VBtn, {
                                    key: index,
                                    color: "#211B2C",
                                    height: "56",
                                    size: "large",
                                    class: "mb-4 d-block"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex gap-x-6 footer-logo-buttons align-center" }, [
                                        createVNode("div", null, [
                                          createVNode(VImg, {
                                            src: item.image,
                                            height: "34",
                                            width: "34"
                                          }, null, 8, ["src"])
                                        ]),
                                        createVNode("div", { class: "d-flex flex-column align-start" }, [
                                          createVNode("div", { class: "text-body-2 footer-text" }, " Download on the "),
                                          createVNode("div", { class: "text-body-1 font-weight-medium footer-heading" }, toDisplayString(item.store), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
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
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "footer-form" }, [
                            createVNode("div", { class: "d-flex gap-2 py-1 mb-6" }, [
                              createVNode(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, 8, ["nodes"]),
                              createVNode("h1", { class: "footer-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                            ]),
                            createVNode("div", { class: "text-body-1 footer-text mb-6" }, [
                              createTextVNode(" Most Powerful & Comprehensive "),
                              createVNode("span", { class: "text-high-emphasis" }, "🤩"),
                              createTextVNode(" Vuejs Admin Template with Elegant Material Design & Unique Layouts. ")
                            ]),
                            createVNode(VForm, { class: "subscribe-form d-flex align-center gap-4" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Subscribe to newsletter",
                                  placeholder: "john@email.com",
                                  theme: "dark",
                                  density: "compact",
                                  class: "footer-text"
                                }),
                                createVNode(VBtn, { size: "large" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Subscribe ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        md: "2",
                        sm: "4",
                        xs: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "footer-links" }, [
                            createVNode("div", { class: "footer-heading mb-6" }, " Pages "),
                            createVNode("ul", { style: { "list-style": "none" } }, [
                              (openBlock(), createBlock(Fragment, null, renderList(menus, (item, index) => {
                                return createVNode("li", {
                                  key: index,
                                  class: "mb-4"
                                }, [
                                  createVNode(_component_RouterLink, {
                                    class: "text-body-1 footer-text text-no-wrap",
                                    to: item.to
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode("div", null, toDisplayString(item.name), 1),
                                        item.isNew ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "primary",
                                          variant: "elevated",
                                          size: "small",
                                          class: "ms-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" New ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]);
                              }), 64))
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        md: "2",
                        sm: "4",
                        xs: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "footer-links" }, [
                            createVNode("div", { class: "footer-heading mb-6" }, " Products "),
                            createVNode("ul", null, [
                              (openBlock(), createBlock(Fragment, null, renderList(["Page Builder", "Admin Dashboards", "UI Kits", "Illustrations"], (item, index) => {
                                return createVNode("li", {
                                  key: index,
                                  class: "mb-4 text-body-1",
                                  style: { "list-style": "none" }
                                }, [
                                  createVNode(_component_RouterLink, {
                                    to: "",
                                    class: "footer-text text-no-wrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]);
                              }), 64))
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "footer-heading mb-6" }, " Download our app "),
                            createVNode("div", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList([
                                { image: unref(appleImg), store: "App Store" },
                                { image: unref(googlePlayImg), store: "Google Play" }
                              ], (item, index) => {
                                return openBlock(), createBlock(VBtn, {
                                  key: index,
                                  color: "#211B2C",
                                  height: "56",
                                  size: "large",
                                  class: "mb-4 d-block"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex gap-x-6 footer-logo-buttons align-center" }, [
                                      createVNode("div", null, [
                                        createVNode(VImg, {
                                          src: item.image,
                                          height: "34",
                                          width: "34"
                                        }, null, 8, ["src"])
                                      ]),
                                      createVNode("div", { class: "d-flex flex-column align-start" }, [
                                        createVNode("div", { class: "text-body-2 footer-text" }, " Download on the "),
                                        createVNode("div", { class: "text-body-1 font-weight-medium footer-heading" }, toDisplayString(item.store), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
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
      _push(`<div class="footer-line w-100" data-v-3eba251e>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-space-between flex-wrap gap-y-4" data-v-3eba251e${_scopeId}><span class="d-flex align-center text-body-2 footer-heading font-weight-regular" data-v-3eba251e${_scopeId}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}, Made with <span data-v-3eba251e${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-heart-fill",
              color: "#FF4D49"
            }, null, _parent2, _scopeId));
            _push2(`</span> by <a href="https://pixinvent.com/" target="_blank" rel="noopener noreferrer" class="ms-1 footer-heading font-weight-regular" style="${ssrRenderStyle({ "color": "rgba(255, 255, 255, var(--v-high-emphasis-opacity))" })}" data-v-3eba251e${_scopeId}>Pixinvent</a></span><div class="d-flex gap-x-1" data-v-3eba251e${_scopeId}><!--[-->`);
            ssrRenderList([
              { title: "github", icon: "bxl-github", href: "https://github.com/pixinvent" },
              { title: "facebook", icon: "bxl-facebook", href: "https://www.facebook.com/pixinvents/" },
              { title: "twitter", icon: "bxl-twitter", href: "https://twitter.com/pixinvents" },
              { title: "instagram", icon: "bxl-linkedin", href: "https://www.linkedin.com/company/pixinvent" }
            ], (item, index) => {
              _push2(ssrRenderComponent(_component_IconBtn, {
                href: item.href,
                size: "x-small",
                target: "_blank",
                color: "#fff",
                rel: "noopener noreferrer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: item.icon,
                      size: "16",
                      color: "white"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: item.icon,
                        size: "16",
                        color: "white"
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-y-4" }, [
                createVNode("span", { class: "d-flex align-center text-body-2 footer-heading font-weight-regular" }, [
                  createTextVNode(" © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + ", Made with ", 1),
                  createVNode("span", null, [
                    createVNode(VIcon, {
                      icon: "ri-heart-fill",
                      color: "#FF4D49"
                    })
                  ]),
                  createTextVNode(" by "),
                  createVNode("a", {
                    href: "https://pixinvent.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "ms-1 footer-heading font-weight-regular",
                    style: { "color": "rgba(255, 255, 255, var(--v-high-emphasis-opacity))" }
                  }, "Pixinvent")
                ]),
                createVNode("div", { class: "d-flex gap-x-1" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList([
                    { title: "github", icon: "bxl-github", href: "https://github.com/pixinvent" },
                    { title: "facebook", icon: "bxl-facebook", href: "https://www.facebook.com/pixinvents/" },
                    { title: "twitter", icon: "bxl-twitter", href: "https://twitter.com/pixinvents" },
                    { title: "instagram", icon: "bxl-linkedin", href: "https://www.linkedin.com/company/pixinvent" }
                  ], (item, index) => {
                    return openBlock(), createBlock(_component_IconBtn, {
                      key: index,
                      href: item.href,
                      size: "x-small",
                      target: "_blank",
                      color: "#fff",
                      rel: "noopener noreferrer"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: item.icon,
                          size: "16",
                          color: "white"
                        }, null, 8, ["icon"])
                      ]),
                      _: 2
                    }, 1032, ["href"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/front-page-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3eba251e"]]);
const navImg = "/build/assets/nav-img-9d0QBmkf.png";
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value)
      return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  onMounted(() => {
    watch(() => props.scrollTarget, (scrollTarget) => {
      var _a;
      const newTarget = scrollTarget ? document.querySelector(scrollTarget) : window;
      if (!newTarget) {
        consoleWarn(`Unable to locate element with identifier ${scrollTarget}`);
        return;
      }
      if (newTarget === target.value)
        return;
      (_a = target.value) == null ? void 0 : _a.removeEventListener("scroll", onScroll);
      target.value = newTarget;
      target.value.addEventListener("scroll", onScroll, {
        passive: true
      });
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(() => {
    var _a;
    (_a = target.value) == null ? void 0 : _a.removeEventListener("scroll", onScroll);
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a;
      const behavior = new Set(((_a = props.scrollBehavior) == null ? void 0 : _a.split(" ")) ?? []);
      return {
        hide: behavior.has("hide"),
        // fullyHide: behavior.has('fully-hide'),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || // behavior.fullyHide ||
      behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      var _a, _b;
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted)
        return 0;
      const height2 = ((_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) ?? 0;
      const extensionHeight = ((_b = vToolbarRef.value) == null ? void 0 : _b.extensionHeight) ?? 0;
      return height2 + extensionHeight;
    });
    useToggleScope(computed(() => !!props.scrollBehavior), () => {
      watchEffect(() => {
        if (scrollBehavior.value.hide) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(props, "location"),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVAppBarNavIconProps = propsFactory({
  ...makeVBtnProps({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const VAppBarTitle = genericComponent()({
  name: "VAppBarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VToolbarTitle, mergeProps(props, {
      "class": "v-app-bar-title"
    }), slots));
    return {};
  }
});
const _sfc_main = {
  __name: "front-page-navbar",
  __ssrInlineRender: true,
  props: {
    activeId: {
      type: String,
      required: false
    },
    navbarInitialOpacity: {
      type: Number,
      required: false,
      default: 0.64
    }
  },
  setup(__props) {
    const props = __props;
    const display = useDisplay();
    const route = useRoute();
    const router = useRouter();
    const { y } = useWindowScroll();
    const sidebar = ref(false);
    watch(() => display, () => {
      return display.mdAndUp ? sidebar.value = false : sidebar.value;
    }, { deep: true });
    const isMenuOpen = ref(false);
    const menuItems = [
      {
        listTitle: "Page",
        listIcon: "ri-layout-grid-line",
        navItems: [
          {
            name: "Pricing",
            to: { name: "front-pages-pricing" }
          },
          {
            name: "Payment",
            to: { name: "front-pages-payment" }
          },
          {
            name: "Checkout",
            to: { name: "front-pages-checkout" }
          },
          {
            name: "Help Center",
            to: { name: "front-pages-help-center" }
          }
        ]
      },
      {
        listTitle: "Auth Demo",
        listIcon: "ri-lock-unlock-line",
        navItems: [
          {
            name: "Login (Basic)",
            to: { name: "pages-authentication-login-v1" }
          },
          {
            name: "Login (Cover)",
            to: { name: "pages-authentication-login-v2" }
          },
          {
            name: "Register (Basic)",
            to: { name: "pages-authentication-register-v1" }
          },
          {
            name: "Register (Cover)",
            to: { name: "pages-authentication-register-v2" }
          },
          {
            name: "Register (Multi-steps)",
            to: { name: "pages-authentication-register-multi-steps" }
          },
          {
            name: "Forgot Password (Basic)",
            to: { name: "pages-authentication-forgot-password-v1" }
          },
          {
            name: "Forgot Password (Cover)",
            to: { name: "pages-authentication-forgot-password-v2" }
          },
          {
            name: "Reset Password (Basic)",
            to: { name: "pages-authentication-reset-password-v1" }
          },
          {
            name: "Reset Password (cover  )",
            to: { name: "pages-authentication-reset-password-v2" }
          }
        ]
      },
      {
        listTitle: "Other",
        listIcon: "ri-image-line",
        navItems: [
          {
            name: "Under Maintenance",
            to: { name: "pages-misc-under-maintenance" }
          },
          {
            name: "Coming Soon",
            to: { name: "pages-misc-coming-soon" }
          },
          {
            name: "Not Authorized",
            to: { path: "/not-authorized" }
          },
          {
            name: "Verify Email (Basic)",
            to: { name: "pages-authentication-verify-email-v1" }
          },
          {
            name: "Verify Email (Cover)",
            to: { name: "pages-authentication-verify-email-v2" }
          },
          {
            name: "Two Steps (Basic)",
            to: { name: "pages-authentication-two-steps-v1" }
          },
          {
            name: "Two Steps (Cover)",
            to: { name: "pages-authentication-two-steps-v2" }
          }
        ]
      }
    ];
    const isCurrentRoute = (to) => {
      return route.matched.some((_route) => _route.path.startsWith(router.resolve(to).path));
    };
    const isPageActive = computed(() => menuItems.some((item) => item.navItems.some((listItem) => isCurrentRoute(listItem.to))));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VNavigationDrawer, {
        modelValue: unref(sidebar),
        "onUpdate:modelValue": ($event) => isRef(sidebar) ? sidebar.value = $event : null,
        "disable-resize-watcher": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PerfectScrollbar), {
              options: { wheelPropagation: false },
              class: "h-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-a809cb7b${_scopeId2}><div class="d-flex flex-column gap-y-4 pa-4" data-v-a809cb7b${_scopeId2}><!--[-->`);
                  ssrRenderList(["Home", "Features", "Team", "FAQ", "Contact us"], (item, index) => {
                    var _a;
                    _push3(ssrRenderComponent(_component_RouterLink, {
                      key: index,
                      to: { name: "front-pages-landing-page", hash: `#${item.toLowerCase().replace(" ", "-")}` },
                      class: ["font-weight-medium", [((_a = props.activeId) == null ? void 0 : _a.toLocaleLowerCase().replace("-", " ")) === item.toLocaleLowerCase() ? "active-link" : "text-high-emphasis"]]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><div class="${ssrRenderClass([unref(isPageActive) ? "active-link" : "text-high-emphasis", "text-high-emphasis font-weight-medium cursor-pointer"])}" data-v-a809cb7b${_scopeId2}><div class="${ssrRenderClass(unref(isMenuOpen) ? "mb-6" : "")}" data-v-a809cb7b${_scopeId2}> Pages `);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: unref(isMenuOpen) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(menuItems, (item, index) => {
                    _push3(`<div class="${ssrRenderClass(unref(isMenuOpen) ? "d-block" : "d-none")}" data-v-a809cb7b${_scopeId2}><div class="d-flex align-center gap-x-3 mb-4" data-v-a809cb7b${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      variant: "tonal",
                      color: "primary",
                      rounded: "",
                      icon: item.listIcon
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-body-1 text-high-emphasis font-weight-medium" data-v-a809cb7b${_scopeId2}>${ssrInterpolate(item.listTitle)}</div></div><ul class="mb-6" data-v-a809cb7b${_scopeId2}><!--[-->`);
                    ssrRenderList(item.navItems, (listItem) => {
                      _push3(`<li style="${ssrRenderStyle({ "list-style": "none" })}" class="text-body-1 mb-4" data-v-a809cb7b${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_RouterLink, {
                        to: listItem.to,
                        target: item.listTitle === "Page" ? "_self" : "_blank",
                        class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-circle-line",
                              size: 10,
                              class: "me-2"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span data-v-a809cb7b${_scopeId3}>${ssrInterpolate(listItem.name)}</span>`);
                          } else {
                            return [
                              createVNode(VIcon, {
                                icon: "ri-circle-line",
                                size: 10,
                                class: "me-2"
                              }),
                              createVNode("span", null, toDisplayString(listItem.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: "/",
                    target: "_blank",
                    class: "text-body-1 font-weight-medium nav-link px-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Admin `);
                      } else {
                        return [
                          createTextVNode(" Admin ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(VIcon, {
                    id: "navigation-drawer-close-btn",
                    icon: "ri-close-line",
                    size: "20",
                    onClick: ($event) => sidebar.value = !unref(sidebar)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "d-flex flex-column gap-y-4 pa-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(["Home", "Features", "Team", "FAQ", "Contact us"], (item, index) => {
                          var _a;
                          return createVNode(_component_RouterLink, {
                            key: index,
                            to: { name: "front-pages-landing-page", hash: `#${item.toLowerCase().replace(" ", "-")}` },
                            class: ["font-weight-medium", [((_a = props.activeId) == null ? void 0 : _a.toLocaleLowerCase().replace("-", " ")) === item.toLocaleLowerCase() ? "active-link" : "text-high-emphasis"]]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["to", "class"]);
                        }), 64)),
                        createVNode("div", {
                          class: ["text-high-emphasis font-weight-medium cursor-pointer", unref(isPageActive) ? "active-link" : "text-high-emphasis"]
                        }, [
                          createVNode("div", {
                            class: unref(isMenuOpen) ? "mb-6" : "",
                            onClick: ($event) => isMenuOpen.value = !unref(isMenuOpen)
                          }, [
                            createTextVNode(" Pages "),
                            createVNode(VIcon, {
                              icon: unref(isMenuOpen) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                            }, null, 8, ["icon"])
                          ], 10, ["onClick"]),
                          (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, index) => {
                            return createVNode("div", {
                              key: index,
                              class: unref(isMenuOpen) ? "d-block" : "d-none"
                            }, [
                              createVNode("div", { class: "d-flex align-center gap-x-3 mb-4" }, [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  rounded: "",
                                  icon: item.listIcon
                                }, null, 8, ["icon"]),
                                createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(item.listTitle), 1)
                              ]),
                              createVNode("ul", { class: "mb-6" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.navItems, (listItem) => {
                                  return openBlock(), createBlock("li", {
                                    key: listItem.name,
                                    style: { "list-style": "none" },
                                    class: "text-body-1 mb-4"
                                  }, [
                                    createVNode(_component_RouterLink, {
                                      to: listItem.to,
                                      target: item.listTitle === "Page" ? "_self" : "_blank",
                                      class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-circle-line",
                                          size: 10,
                                          class: "me-2"
                                        }),
                                        createVNode("span", null, toDisplayString(listItem.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "target", "class"])
                                  ]);
                                }), 128))
                              ])
                            ], 2);
                          }), 64))
                        ], 2),
                        createVNode(_component_RouterLink, {
                          to: "/",
                          target: "_blank",
                          class: "text-body-1 font-weight-medium nav-link px-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Admin ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(VIcon, {
                      id: "navigation-drawer-close-btn",
                      icon: "ri-close-line",
                      size: "20",
                      onClick: ($event) => sidebar.value = !unref(sidebar)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PerfectScrollbar), {
                options: { wheelPropagation: false },
                class: "h-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column gap-y-4 pa-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(["Home", "Features", "Team", "FAQ", "Contact us"], (item, index) => {
                        var _a;
                        return createVNode(_component_RouterLink, {
                          key: index,
                          to: { name: "front-pages-landing-page", hash: `#${item.toLowerCase().replace(" ", "-")}` },
                          class: ["font-weight-medium", [((_a = props.activeId) == null ? void 0 : _a.toLocaleLowerCase().replace("-", " ")) === item.toLocaleLowerCase() ? "active-link" : "text-high-emphasis"]]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"]);
                      }), 64)),
                      createVNode("div", {
                        class: ["text-high-emphasis font-weight-medium cursor-pointer", unref(isPageActive) ? "active-link" : "text-high-emphasis"]
                      }, [
                        createVNode("div", {
                          class: unref(isMenuOpen) ? "mb-6" : "",
                          onClick: ($event) => isMenuOpen.value = !unref(isMenuOpen)
                        }, [
                          createTextVNode(" Pages "),
                          createVNode(VIcon, {
                            icon: unref(isMenuOpen) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                          }, null, 8, ["icon"])
                        ], 10, ["onClick"]),
                        (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, index) => {
                          return createVNode("div", {
                            key: index,
                            class: unref(isMenuOpen) ? "d-block" : "d-none"
                          }, [
                            createVNode("div", { class: "d-flex align-center gap-x-3 mb-4" }, [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "primary",
                                rounded: "",
                                icon: item.listIcon
                              }, null, 8, ["icon"]),
                              createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(item.listTitle), 1)
                            ]),
                            createVNode("ul", { class: "mb-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.navItems, (listItem) => {
                                return openBlock(), createBlock("li", {
                                  key: listItem.name,
                                  style: { "list-style": "none" },
                                  class: "text-body-1 mb-4"
                                }, [
                                  createVNode(_component_RouterLink, {
                                    to: listItem.to,
                                    target: item.listTitle === "Page" ? "_self" : "_blank",
                                    class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-circle-line",
                                        size: 10,
                                        class: "me-2"
                                      }),
                                      createVNode("span", null, toDisplayString(listItem.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "target", "class"])
                                ]);
                              }), 128))
                            ])
                          ], 2);
                        }), 64))
                      ], 2),
                      createVNode(_component_RouterLink, {
                        to: "/",
                        target: "_blank",
                        class: "text-body-1 font-weight-medium nav-link px-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Admin ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(VIcon, {
                    id: "navigation-drawer-close-btn",
                    icon: "ri-close-line",
                    size: "20",
                    onClick: ($event) => sidebar.value = !unref(sidebar)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="front-page-navbar" data-v-a809cb7b>`);
      _push(ssrRenderComponent(VAppBar, {
        class: [unref(y) > 20 ? "front-page-navbar-box-shadow" : "", "rounded-b-xl"],
        border: unref(y) < 20 ? "1px solid rgba(var(--v-theme-surface), 0.78)" : "none",
        elevation: "0",
        style: unref(y) > 20 ? "" : `background-color: rgba(var(--v-theme-surface),${props.navbarInitialOpacity})`,
        height: "62"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBarNavIcon, {
              class: [_ctx.$vuetify.display.mdAndUp ? "d-none" : "d-inline-block", "ms-0 me-1"],
              color: "high-emphasis",
              onClick: () => sidebar.value = !unref(sidebar)
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex align-center" data-v-a809cb7b${_scopeId}>`);
            _push2(ssrRenderComponent(VAppBarTitle, { class: "me-3 me-sm-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: "/",
                    class: ["d-flex gap-x-4", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex gap-x-3 align-center" data-v-a809cb7b${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(VNodeRenderer), {
                          nodes: unref(themeConfig).app.logo
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="${ssrRenderClass([[_ctx.$vuetify.display.lgAndUp ? "d-block" : "d-none", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"], "nav-title text-truncate"])}" data-v-a809cb7b${_scopeId3}>${ssrInterpolate(unref(themeConfig).app.title)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                            createVNode(unref(VNodeRenderer), {
                              nodes: unref(themeConfig).app.logo
                            }, null, 8, ["nodes"]),
                            createVNode("div", {
                              class: ["nav-title text-truncate", [_ctx.$vuetify.display.lgAndUp ? "d-block" : "d-none", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"]]
                            }, toDisplayString(unref(themeConfig).app.title), 3)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouterLink, {
                      to: "/",
                      class: ["d-flex gap-x-4", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"]
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                          createVNode(unref(VNodeRenderer), {
                            nodes: unref(themeConfig).app.logo
                          }, null, 8, ["nodes"]),
                          createVNode("div", {
                            class: ["nav-title text-truncate", [_ctx.$vuetify.display.lgAndUp ? "d-block" : "d-none", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"]]
                          }, toDisplayString(unref(themeConfig).app.title), 3)
                        ])
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass([_ctx.$vuetify.display.mdAndUp ? "d-flex" : "d-none", "text-base align-center gap-x-2"])}" data-v-a809cb7b${_scopeId}><!--[-->`);
            ssrRenderList(["Home", "Features", "Team", "FAQ", "Contact us"], (item, index) => {
              var _a;
              _push2(ssrRenderComponent(_component_RouterLink, {
                key: index,
                to: { name: "front-pages-landing-page", hash: `#${item.toLowerCase().replace(" ", "-")}` },
                class: ["nav-link font-weight-medium", [((_a = props.activeId) == null ? void 0 : _a.toLocaleLowerCase().replace("-", " ")) === item.toLocaleLowerCase() ? "active-link" : ""]]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><span class="${ssrRenderClass([unref(isPageActive) ? "active-link" : "text-high-emphasis", "font-weight-medium cursor-pointer nav-link"])}" data-v-a809cb7b${_scopeId}> Pages `);
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-arrow-down-s-line",
              size: "20",
              class: "ms-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              "open-on-hover": "",
              activator: "parent",
              transition: "slide-y-transition",
              location: "bottom center",
              offset: "16",
              "content-class": "mega-menu",
              "location-strategy": "static",
              "close-on-content-click": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { "max-width": "1000" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "pa-8" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="nav-menu" data-v-a809cb7b${_scopeId4}><!--[-->`);
                              ssrRenderList(menuItems, (item, index) => {
                                _push5(`<div data-v-a809cb7b${_scopeId4}><div class="d-flex align-center gap-x-3 mb-6" data-v-a809cb7b${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  rounded: "",
                                  icon: item.listIcon
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="text-body-1 text-high-emphasis font-weight-medium" data-v-a809cb7b${_scopeId4}>${ssrInterpolate(item.listTitle)}</div></div><ul data-v-a809cb7b${_scopeId4}><!--[-->`);
                                ssrRenderList(item.navItems, (listItem) => {
                                  _push5(`<li style="${ssrRenderStyle({ "list-style": "none" })}" class="text-body-1 mb-4 text-no-wrap" data-v-a809cb7b${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_RouterLink, {
                                    class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""],
                                    to: listItem.to,
                                    target: item.listTitle === "Page" ? "_self" : "_blank"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="d-flex align-center" data-v-a809cb7b${_scopeId5}>`);
                                        _push6(ssrRenderComponent(VIcon, {
                                          icon: "ri-circle-line",
                                          size: 10,
                                          class: "me-2"
                                        }, null, _parent6, _scopeId5));
                                        _push6(`<span data-v-a809cb7b${_scopeId5}>${ssrInterpolate(listItem.name)}</span></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode(VIcon, {
                                              icon: "ri-circle-line",
                                              size: 10,
                                              class: "me-2"
                                            }),
                                            createVNode("span", null, toDisplayString(listItem.name), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</li>`);
                                });
                                _push5(`<!--]--></ul></div>`);
                              });
                              _push5(`<!--]--><img${ssrRenderAttr("src", unref(navImg))} alt="Navigation Image" class="d-inline-block rounded-lg" style="${ssrRenderStyle({ "border": "10px solid rgb(var(--v-theme-background))" })}"${ssrRenderAttr("width", _ctx.$vuetify.display.lgAndUp ? "330" : "250")}${ssrRenderAttr("height", _ctx.$vuetify.display.lgAndUp ? "330" : "250")} data-v-a809cb7b${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "nav-menu" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, index) => {
                                    return createVNode("div", { key: index }, [
                                      createVNode("div", { class: "d-flex align-center gap-x-3 mb-6" }, [
                                        createVNode(VAvatar, {
                                          variant: "tonal",
                                          color: "primary",
                                          rounded: "",
                                          icon: item.listIcon
                                        }, null, 8, ["icon"]),
                                        createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(item.listTitle), 1)
                                      ]),
                                      createVNode("ul", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.navItems, (listItem) => {
                                          return openBlock(), createBlock("li", {
                                            key: listItem.name,
                                            style: { "list-style": "none" },
                                            class: "text-body-1 mb-4 text-no-wrap"
                                          }, [
                                            createVNode(_component_RouterLink, {
                                              class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""],
                                              to: listItem.to,
                                              target: item.listTitle === "Page" ? "_self" : "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center" }, [
                                                  createVNode(VIcon, {
                                                    icon: "ri-circle-line",
                                                    size: 10,
                                                    class: "me-2"
                                                  }),
                                                  createVNode("span", null, toDisplayString(listItem.name), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "target", "class"])
                                          ]);
                                        }), 128))
                                      ])
                                    ]);
                                  }), 64)),
                                  createVNode("img", {
                                    src: unref(navImg),
                                    alt: "Navigation Image",
                                    class: "d-inline-block rounded-lg",
                                    style: { "border": "10px solid rgb(var(--v-theme-background))" },
                                    width: _ctx.$vuetify.display.lgAndUp ? "330" : "250",
                                    height: _ctx.$vuetify.display.lgAndUp ? "330" : "250"
                                  }, null, 8, ["src", "width", "height"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "pa-8" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "nav-menu" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, index) => {
                                  return createVNode("div", { key: index }, [
                                    createVNode("div", { class: "d-flex align-center gap-x-3 mb-6" }, [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        color: "primary",
                                        rounded: "",
                                        icon: item.listIcon
                                      }, null, 8, ["icon"]),
                                      createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(item.listTitle), 1)
                                    ]),
                                    createVNode("ul", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.navItems, (listItem) => {
                                        return openBlock(), createBlock("li", {
                                          key: listItem.name,
                                          style: { "list-style": "none" },
                                          class: "text-body-1 mb-4 text-no-wrap"
                                        }, [
                                          createVNode(_component_RouterLink, {
                                            class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""],
                                            to: listItem.to,
                                            target: item.listTitle === "Page" ? "_self" : "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-circle-line",
                                                  size: 10,
                                                  class: "me-2"
                                                }),
                                                createVNode("span", null, toDisplayString(listItem.name), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "target", "class"])
                                        ]);
                                      }), 128))
                                    ])
                                  ]);
                                }), 64)),
                                createVNode("img", {
                                  src: unref(navImg),
                                  alt: "Navigation Image",
                                  class: "d-inline-block rounded-lg",
                                  style: { "border": "10px solid rgb(var(--v-theme-background))" },
                                  width: _ctx.$vuetify.display.lgAndUp ? "330" : "250",
                                  height: _ctx.$vuetify.display.lgAndUp ? "330" : "250"
                                }, null, 8, ["src", "width", "height"])
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
                    createVNode(VCard, { "max-width": "1000" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-8" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "nav-menu" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, index) => {
                                return createVNode("div", { key: index }, [
                                  createVNode("div", { class: "d-flex align-center gap-x-3 mb-6" }, [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      color: "primary",
                                      rounded: "",
                                      icon: item.listIcon
                                    }, null, 8, ["icon"]),
                                    createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(item.listTitle), 1)
                                  ]),
                                  createVNode("ul", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.navItems, (listItem) => {
                                      return openBlock(), createBlock("li", {
                                        key: listItem.name,
                                        style: { "list-style": "none" },
                                        class: "text-body-1 mb-4 text-no-wrap"
                                      }, [
                                        createVNode(_component_RouterLink, {
                                          class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""],
                                          to: listItem.to,
                                          target: item.listTitle === "Page" ? "_self" : "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VIcon, {
                                                icon: "ri-circle-line",
                                                size: 10,
                                                class: "me-2"
                                              }),
                                              createVNode("span", null, toDisplayString(listItem.name), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "target", "class"])
                                      ]);
                                    }), 128))
                                  ])
                                ]);
                              }), 64)),
                              createVNode("img", {
                                src: unref(navImg),
                                alt: "Navigation Image",
                                class: "d-inline-block rounded-lg",
                                style: { "border": "10px solid rgb(var(--v-theme-background))" },
                                width: _ctx.$vuetify.display.lgAndUp ? "330" : "250",
                                height: _ctx.$vuetify.display.lgAndUp ? "330" : "250"
                              }, null, 8, ["src", "width", "height"])
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
            _push2(`</span>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              target: "_blank",
              class: "nav-link font-weight-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Admin `);
                } else {
                  return [
                    createTextVNode(" Admin ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`<div class="d-flex gap-x-4 align-center" data-v-a809cb7b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { class: "me-0 me-sm-2" }, null, _parent2, _scopeId));
            if (_ctx.$vuetify.display.lgAndUp) {
              _push2(ssrRenderComponent(VBtn, {
                "prepend-icon": "ri-shopping-cart-line",
                variant: "elevated",
                color: "primary",
                href: "https://1.envato.market/materialize_admin",
                target: "_blank",
                rel: "noopener noreferrer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Purchase Now `);
                  } else {
                    return [
                      createTextVNode(" Purchase Now ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VBtn, {
                icon: "",
                rounded: "",
                variant: "elevated",
                color: "primary",
                href: "https://1.envato.market/materialize_admin",
                target: "_blank",
                rel: "noopener noreferrer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-shopping-cart-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(VAppBarNavIcon, {
                class: [_ctx.$vuetify.display.mdAndUp ? "d-none" : "d-inline-block", "ms-0 me-1"],
                color: "high-emphasis",
                onClick: () => sidebar.value = !unref(sidebar)
              }, null, 8, ["class", "onClick"]),
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAppBarTitle, { class: "me-3 me-sm-6" }, {
                  default: withCtx(() => [
                    createVNode(_component_RouterLink, {
                      to: "/",
                      class: ["d-flex gap-x-4", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"]
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                          createVNode(unref(VNodeRenderer), {
                            nodes: unref(themeConfig).app.logo
                          }, null, 8, ["nodes"]),
                          createVNode("div", {
                            class: ["nav-title text-truncate", [_ctx.$vuetify.display.lgAndUp ? "d-block" : "d-none", _ctx.$vuetify.display.mdAndUp ? "d-none" : "d-block"]]
                          }, toDisplayString(unref(themeConfig).app.title), 3)
                        ])
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                }),
                createVNode("div", {
                  class: [_ctx.$vuetify.display.mdAndUp ? "d-flex" : "d-none", "text-base align-center gap-x-2"]
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(["Home", "Features", "Team", "FAQ", "Contact us"], (item, index) => {
                    var _a;
                    return createVNode(_component_RouterLink, {
                      key: index,
                      to: { name: "front-pages-landing-page", hash: `#${item.toLowerCase().replace(" ", "-")}` },
                      class: ["nav-link font-weight-medium", [((_a = props.activeId) == null ? void 0 : _a.toLocaleLowerCase().replace("-", " ")) === item.toLocaleLowerCase() ? "active-link" : ""]]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "class"]);
                  }), 64)),
                  createVNode("span", {
                    class: ["font-weight-medium cursor-pointer nav-link", unref(isPageActive) ? "active-link" : "text-high-emphasis"]
                  }, [
                    createTextVNode(" Pages "),
                    createVNode(VIcon, {
                      icon: "ri-arrow-down-s-line",
                      size: "20",
                      class: "ms-2"
                    }),
                    createVNode(VMenu, {
                      "open-on-hover": "",
                      activator: "parent",
                      transition: "slide-y-transition",
                      location: "bottom center",
                      offset: "16",
                      "content-class": "mega-menu",
                      "location-strategy": "static",
                      "close-on-content-click": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, { "max-width": "1000" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "pa-8" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "nav-menu" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, index) => {
                                    return createVNode("div", { key: index }, [
                                      createVNode("div", { class: "d-flex align-center gap-x-3 mb-6" }, [
                                        createVNode(VAvatar, {
                                          variant: "tonal",
                                          color: "primary",
                                          rounded: "",
                                          icon: item.listIcon
                                        }, null, 8, ["icon"]),
                                        createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(item.listTitle), 1)
                                      ]),
                                      createVNode("ul", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.navItems, (listItem) => {
                                          return openBlock(), createBlock("li", {
                                            key: listItem.name,
                                            style: { "list-style": "none" },
                                            class: "text-body-1 mb-4 text-no-wrap"
                                          }, [
                                            createVNode(_component_RouterLink, {
                                              class: ["mega-menu-item", isCurrentRoute(listItem.to) ? "active-link" : ""],
                                              to: listItem.to,
                                              target: item.listTitle === "Page" ? "_self" : "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center" }, [
                                                  createVNode(VIcon, {
                                                    icon: "ri-circle-line",
                                                    size: 10,
                                                    class: "me-2"
                                                  }),
                                                  createVNode("span", null, toDisplayString(listItem.name), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "target", "class"])
                                          ]);
                                        }), 128))
                                      ])
                                    ]);
                                  }), 64)),
                                  createVNode("img", {
                                    src: unref(navImg),
                                    alt: "Navigation Image",
                                    class: "d-inline-block rounded-lg",
                                    style: { "border": "10px solid rgb(var(--v-theme-background))" },
                                    width: _ctx.$vuetify.display.lgAndUp ? "330" : "250",
                                    height: _ctx.$vuetify.display.lgAndUp ? "330" : "250"
                                  }, null, 8, ["src", "width", "height"])
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
                  ], 2),
                  createVNode(_component_RouterLink, {
                    to: "/",
                    target: "_blank",
                    class: "nav-link font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Admin ")
                    ]),
                    _: 1
                  })
                ], 2)
              ]),
              createVNode(VSpacer),
              createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                createVNode(_sfc_main$2, { class: "me-0 me-sm-2" }),
                _ctx.$vuetify.display.lgAndUp ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  "prepend-icon": "ri-shopping-cart-line",
                  variant: "elevated",
                  color: "primary",
                  href: "https://1.envato.market/materialize_admin",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Purchase Now ")
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(VBtn, {
                  key: 1,
                  icon: "",
                  rounded: "",
                  variant: "elevated",
                  color: "primary",
                  href: "https://1.envato.market/materialize_admin",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                  ]),
                  _: 1
                }))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/front-page-navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a809cb7b"]]);
export {
  Footer as F,
  Navbar as N
};
