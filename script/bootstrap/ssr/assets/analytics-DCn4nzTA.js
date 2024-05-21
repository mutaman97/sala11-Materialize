import { _ as _sfc_main$e } from "./CardStatisticsVertical-K3d494UI.js";
import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, computed, ref, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { c as avatar1, d as avatar2, e as avatar3, _ as _export_sfc, V as VBtn, l as useTheme, O as hexToRgb, a as VIcon } from "../ssr.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { i as illustrationJohnDark, a as illustrationJohnLight } from "./illustration-john-light-Bh1K1qhp.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import __unplugin_components_0 from "vue3-apexcharts";
import { _ as _sfc_main$d } from "./MoreBtn-CtW8Gck8.js";
import { s as square4Dark, a as square4Light, d as deltaWebAppDark, b as deltaWebAppLight, e as ecommerceWebsiteDark, c as ecommerceWebsiteLight, f as financeAppDesignDark, g as financeAppDesignLight, i as illustration3dDark, h as illustration3dLight } from "./finance-app-design-BX4_2Lvq.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VListItemAction } from "./VListItemAction-VqS_ibV2.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { f as facebookRound } from "./facebook-DKESF_u0.js";
import { V as VSlideGroup } from "./VSlideGroup-Bvz86g7R.js";
import { V as VSlideGroupItem } from "./VSlideGroupItem-CIJ0uuo8.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
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
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./VMenu-KUYgjPyD.js";
import "./dialog-transition-CtM2qLK8.js";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main$c = {
  __name: "AnalyticsActivityTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Activity Timeline" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTimeline, {
                    side: "end",
                    align: "start",
                    "line-inset": "9",
                    "truncate-line": "start",
                    density: "compact"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTimelineItem, {
                          "dot-color": "primary",
                          size: "x-small"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"${_scopeId4}><span class="app-timeline-title"${_scopeId4}> 12 Invoices have been paid </span><span class="app-timeline-meta"${_scopeId4}>12 min ago</span></div><div class="app-timeline-text mt-1"${_scopeId4}> Invoices have been paid to the company </div><div class="d-inline-flex align-center timeline-chip my-2"${_scopeId4}><img${ssrRenderAttr("src", unref(pdf))} height="20" class="me-2" alt="img"${_scopeId4}><span class="app-timeline-text font-weight-medium"${_scopeId4}> invoices.pdf </span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                  createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                  createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                ]),
                                createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                  createVNode("img", {
                                    src: unref(pdf),
                                    height: "20",
                                    class: "me-2",
                                    alt: "img"
                                  }, null, 8, ["src"]),
                                  createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTimelineItem, {
                          size: "x-small",
                          "dot-color": "success"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between align-center flex-wrap mb-2"${_scopeId4}><div class="app-timeline-title"${_scopeId4}> Client Meeting </div><span class="app-timeline-meta"${_scopeId4}>45 min ago</span></div><div class="app-timeline-text mt-1"${_scopeId4}> Project meeting with john @10:15am </div><div class="d-flex justify-space-between align-center flex-wrap"${_scopeId4}><div class="d-flex align-center my-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                size: "32",
                                class: "me-2",
                                image: unref(avatar1)
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-column"${_scopeId4}><p class="text-sm font-weight-medium text-medium-emphasis mb-0"${_scopeId4}> Lester McCarthy (Client) </p><span class="text-sm"${_scopeId4}>CEO of Pixinvent</span></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                  createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                  createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                ]),
                                createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                  createVNode("div", { class: "d-flex align-center my-2" }, [
                                    createVNode(VAvatar, {
                                      size: "32",
                                      class: "me-2",
                                      image: unref(avatar1)
                                    }, null, 8, ["image"]),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                      createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTimelineItem, {
                          size: "x-small",
                          "dot-color": "info"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between align-center flex-wrap mb-2"${_scopeId4}><span class="app-timeline-title"${_scopeId4}> Create a new project for client </span><span class="app-timeline-meta"${_scopeId4}>2 Day Ago</span></div><p class="app-timeline-text mt-1 mb-2"${_scopeId4}> 6 team members in a project </p><div class="v-avatar-group demo-avatar-group"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, { size: 40 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` John Doe `);
                                        } else {
                                          return [
                                            createTextVNode(" John Doe ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" John Doe ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VAvatar, { size: 40 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, { src: unref(avatar2) }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Jennie Obrien `);
                                        } else {
                                          return [
                                            createTextVNode(" Jennie Obrien ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Jennie Obrien ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VAvatar, { size: 40 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, { src: unref(avatar3) }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Peter Harper `);
                                        } else {
                                          return [
                                            createTextVNode(" Peter Harper ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Peter Harper ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VAvatar, {
                                size: 40,
                                color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` +3 `);
                                  } else {
                                    return [
                                      createTextVNode(" +3 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                  createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                  createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                ]),
                                createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                  createVNode(VAvatar, { size: 40 }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" John Doe ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, { size: 40 }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Jennie Obrien ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, { size: 40 }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Peter Harper ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, {
                                    size: 40,
                                    color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" +3 ")
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTimelineItem, {
                            "dot-color": "primary",
                            size: "x-small"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                              ]),
                              createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                              createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                createVNode("img", {
                                  src: unref(pdf),
                                  height: "20",
                                  class: "me-2",
                                  alt: "img"
                                }, null, 8, ["src"]),
                                createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VTimelineItem, {
                            size: "x-small",
                            "dot-color": "success"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                              ]),
                              createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                              createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                createVNode("div", { class: "d-flex align-center my-2" }, [
                                  createVNode(VAvatar, {
                                    size: "32",
                                    class: "me-2",
                                    image: unref(avatar1)
                                  }, null, 8, ["image"]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                    createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VTimelineItem, {
                            size: "x-small",
                            "dot-color": "info"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                              ]),
                              createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                              createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                createVNode(VAvatar, { size: 40 }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" John Doe ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, { size: 40 }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Jennie Obrien ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, { size: 40 }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Peter Harper ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, {
                                  size: 40,
                                  color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" +3 ")
                                  ]),
                                  _: 1
                                }, 8, ["color"])
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
                    createVNode(VTimeline, {
                      side: "end",
                      align: "start",
                      "line-inset": "9",
                      "truncate-line": "start",
                      density: "compact"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTimelineItem, {
                          "dot-color": "primary",
                          size: "x-small"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                              createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                              createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                            ]),
                            createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                            createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                              createVNode("img", {
                                src: unref(pdf),
                                height: "20",
                                class: "me-2",
                                alt: "img"
                              }, null, 8, ["src"]),
                              createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VTimelineItem, {
                          size: "x-small",
                          "dot-color": "success"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                              createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                              createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                            ]),
                            createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                              createVNode("div", { class: "d-flex align-center my-2" }, [
                                createVNode(VAvatar, {
                                  size: "32",
                                  class: "me-2",
                                  image: unref(avatar1)
                                }, null, 8, ["image"]),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                  createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VTimelineItem, {
                          size: "x-small",
                          "dot-color": "info"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                              createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                              createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                            ]),
                            createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                            createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                              createVNode(VAvatar, { size: 40 }, {
                                default: withCtx(() => [
                                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" John Doe ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, { size: 40 }, {
                                default: withCtx(() => [
                                  createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Jennie Obrien ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, { size: 40 }, {
                                default: withCtx(() => [
                                  createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Peter Harper ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, {
                                size: 40,
                                color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" +3 ")
                                ]),
                                _: 1
                              }, 8, ["color"])
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VTimeline, {
                    side: "end",
                    align: "start",
                    "line-inset": "9",
                    "truncate-line": "start",
                    density: "compact"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTimelineItem, {
                        "dot-color": "primary",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                            createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                            createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                          ]),
                          createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                          createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                            createVNode("img", {
                              src: unref(pdf),
                              height: "20",
                              class: "me-2",
                              alt: "img"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VTimelineItem, {
                        size: "x-small",
                        "dot-color": "success"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                            createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                            createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                          ]),
                          createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                            createVNode("div", { class: "d-flex align-center my-2" }, [
                              createVNode(VAvatar, {
                                size: "32",
                                class: "me-2",
                                image: unref(avatar1)
                              }, null, 8, ["image"]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VTimelineItem, {
                        size: "x-small",
                        "dot-color": "info"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                            createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                            createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                          ]),
                          createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                          createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                            createVNode(VAvatar, { size: 40 }, {
                              default: withCtx(() => [
                                createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" John Doe ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, { size: 40 }, {
                              default: withCtx(() => [
                                createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Jennie Obrien ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, { size: 40 }, {
                              default: withCtx(() => [
                                createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Peter Harper ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, {
                              size: 40,
                              color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" +3 ")
                              ]),
                              _: 1
                            }, 8, ["color"])
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
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsActivityTimeline.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "AnalyticsCongratulationsJohn",
  __ssrInlineRender: true,
  setup(__props) {
    const johnImage = useGenerateImageVariant(illustrationJohnLight, illustrationJohnDark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "overflow-visible" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8",
                    order: "2",
                    "order-sm": "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4 mt-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="text-h4 text-wrap" data-v-132ae39f${_scopeId5}> Congratulations <strong data-v-132ae39f${_scopeId5}>John!</strong> <span class="text-high-emphasis" data-v-132ae39f${_scopeId5}>🎉</span></h4>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "text-h4 text-wrap" }, [
                                        createTextVNode(" Congratulations "),
                                        createVNode("strong", null, "John!"),
                                        createTextVNode(),
                                        createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4 text-wrap" }, [
                                      createTextVNode(" Congratulations "),
                                      createVNode("strong", null, "John!"),
                                      createTextVNode(),
                                      createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p data-v-132ae39f${_scopeId4}> You have done 68% <span class="text-high-emphasis" data-v-132ae39f${_scopeId4}>😎</span> more sales today. <br data-v-132ae39f${_scopeId4}> Check your new raising badge in your profile. </p>`);
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`View Profile`);
                                  } else {
                                    return [
                                      createTextVNode("View Profile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" You have done 68% "),
                                  createVNode("span", { class: "text-high-emphasis" }, "😎"),
                                  createTextVNode(" more sales today. "),
                                  createVNode("br"),
                                  createTextVNode(" Check your new raising badge in your profile. ")
                                ]),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("View Profile")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-4 mt-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4 text-wrap" }, [
                                    createTextVNode(" Congratulations "),
                                    createVNode("strong", null, "John!"),
                                    createTextVNode(),
                                    createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" You have done 68% "),
                                createVNode("span", { class: "text-high-emphasis" }, "😎"),
                                createTextVNode(" more sales today. "),
                                createVNode("br"),
                                createTextVNode(" Check your new raising badge in your profile. ")
                              ]),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("View Profile")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "4",
                    order: "1",
                    "order-sm": "2",
                    class: "text-center mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(johnImage))}${ssrRenderAttr("height", _ctx.$vuetify.display.xs ? "165" : "186")} class="${ssrRenderClass([_ctx.$vuetify.display.xs ? "position-relative" : "position-absolute", "john-illustration"])}" alt="john-illustration" data-v-132ae39f${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(johnImage),
                            class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                            height: _ctx.$vuetify.display.xs ? "165" : "186",
                            alt: "john-illustration"
                          }, null, 10, ["src", "height"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "8",
                      order: "2",
                      "order-sm": "1"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4 mt-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-h4 text-wrap" }, [
                                  createTextVNode(" Congratulations "),
                                  createVNode("strong", null, "John!"),
                                  createTextVNode(),
                                  createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" You have done 68% "),
                              createVNode("span", { class: "text-high-emphasis" }, "😎"),
                              createTextVNode(" more sales today. "),
                              createVNode("br"),
                              createTextVNode(" Check your new raising badge in your profile. ")
                            ]),
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode("View Profile")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "4",
                      order: "1",
                      "order-sm": "2",
                      class: "text-center mt-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(johnImage),
                          class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                          height: _ctx.$vuetify.display.xs ? "165" : "186",
                          alt: "john-illustration"
                        }, null, 10, ["src", "height"])
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
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "8",
                    order: "2",
                    "order-sm": "1"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4 mt-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 text-wrap" }, [
                                createTextVNode(" Congratulations "),
                                createVNode("strong", null, "John!"),
                                createTextVNode(),
                                createVNode("span", { class: "text-high-emphasis" }, "🎉")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" You have done 68% "),
                            createVNode("span", { class: "text-high-emphasis" }, "😎"),
                            createTextVNode(" more sales today. "),
                            createVNode("br"),
                            createTextVNode(" Check your new raising badge in your profile. ")
                          ]),
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode("View Profile")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "4",
                    order: "1",
                    "order-sm": "2",
                    class: "text-center mt-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(johnImage),
                        class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                        height: _ctx.$vuetify.display.xs ? "165" : "186",
                        alt: "john-illustration"
                      }, null, 10, ["src", "height"])
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
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsCongratulationsJohn.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AnalyticsCongratulationsJohn = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-132ae39f"]]);
const _sfc_main$a = {
  __name: "AnalyticsOverviewRadialBarCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [64];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      return {
        chart: { sparkline: { enabled: true } },
        stroke: { lineCap: "round" },
        colors: [`rgba(${hexToRgb(String(currentTheme.primary))}, 1)`],
        plotOptions: {
          radialBar: {
            hollow: { size: "55%" },
            track: { background: `rgba(${hexToRgb(String(currentTheme["grey-100"]))}, 1)` },
            dataLabels: {
              name: { show: false },
              value: {
                offsetY: 5,
                fontWeight: 500,
                fontSize: "1rem",
                color: `rgba(${hexToRgb(currentTheme["on-surface"])},${variableTheme["high-emphasis-opacity"]})`
              }
            }
          }
        },
        grid: { padding: { bottom: -12 } },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $67.1k </h5><div class="text-body-1 text-success"${_scopeId2}> +49% </div></div><div class="text-subtitle-1"${_scopeId2}> Overview </div>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "radialBar",
                    options: unref(chartOptions),
                    series,
                    height: 119
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $67.1k "),
                      createVNode("div", { class: "text-body-1 text-success" }, " +49% ")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Overview "),
                    createVNode(_component_VueApexCharts, {
                      type: "radialBar",
                      options: unref(chartOptions),
                      series,
                      height: 119
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $67.1k "),
                    createVNode("div", { class: "text-body-1 text-success" }, " +49% ")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Overview "),
                  createVNode(_component_VueApexCharts, {
                    type: "radialBar",
                    options: unref(chartOptions),
                    series,
                    height: 119
                  }, null, 8, ["options"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsOverviewRadialBarCharts.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "AnalyticsPerformance",
  __ssrInlineRender: true,
  setup(__props) {
    const moreList = [
      {
        title: "Last 28 Days",
        value: "Last 28 Days"
      },
      {
        title: "Last Month",
        value: "Last Month"
      },
      {
        title: "Last Year",
        value: "Last Year"
      }
    ];
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const secondaryText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["medium-emphasis-opacity"]})`;
      const borderColor = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        legend: {
          fontSize: "15px",
          markers: {
            width: 10,
            height: 10,
            offsetX: -2
          },
          itemMargin: { horizontal: 10 },
          labels: { colors: secondaryText }
        },
        plotOptions: {
          radar: {
            size: 100,
            polygons: {
              strokeColors: borderColor,
              connectorColors: borderColor
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: [
              themeColors.warning,
              themeColors.primary
            ],
            shadeIntensity: 1,
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [
              0,
              100
            ]
          }
        },
        colors: [
          themeColors.warning,
          themeColors.primary
        ],
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun"
        ],
        markers: { size: 0 },
        xaxis: {
          labels: {
            show: true,
            style: {
              fontSize: "14px",
              colors: [
                disabledText,
                disabledText,
                disabledText,
                disabledText,
                disabledText,
                disabledText
              ]
            }
          }
        },
        yaxis: { show: false },
        grid: { show: false }
      };
    });
    const series = [
      {
        name: "Income",
        data: [
          70,
          90,
          80,
          95,
          75,
          90
        ]
      },
      {
        name: "Net Worth",
        data: [
          110,
          72,
          62,
          65,
          100,
          75
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$d;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Performance" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "me-n3 mt-n2" }, [
                createVNode(_component_MoreBtn, { "menu-list": moreList })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "radar",
                    height: "280",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "radar",
                      height: "280",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "radar",
                    height: "280",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsPerformance.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "AnalyticsProjectStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    const square4 = useGenerateImageVariant(square4Light, square4Dark);
    const deltaWebApp = useGenerateImageVariant(deltaWebAppLight, deltaWebAppDark);
    const ecommerceWebsite = useGenerateImageVariant(ecommerceWebsiteLight, ecommerceWebsiteDark);
    const financeAppDesign = useGenerateImageVariant(financeAppDesignLight, financeAppDesignDark);
    const illustration3d = useGenerateImageVariant(illustration3dLight, illustration3dDark);
    const projects = ref([
      {
        budget: "$6,500",
        title: "3D Illustration",
        subtitle: "Blender Illustration",
        img: illustration3d
      },
      {
        budget: "$4,290",
        title: "Finance App Design",
        subtitle: "Figma UI Kit",
        img: financeAppDesign
      },
      {
        budget: "$44,500",
        title: "4 Square",
        subtitle: "Android Application",
        img: square4
      },
      {
        budget: "$12,690",
        title: "Delta Web App",
        subtitle: "React Dashboard",
        img: deltaWebApp
      },
      {
        budget: "$10,850",
        title: "eCommerce Website",
        subtitle: "Vue + Laravel",
        img: ecommerceWebsite
      }
    ]);
    const moreList = [
      {
        title: "Last 28 Days",
        value: "Last 28 Days"
      },
      {
        title: "Last Month",
        value: "Last Month"
      },
      {
        title: "Last Year",
        value: "Last Year"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$d;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Project Statistics" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n2" data-v-4d6a65ed${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "me-n3 mt-n2" }, [
                createVNode(_component_MoreBtn, { "menu-list": moreList })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, { class: "pb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, { class: "d-flex justify-space-between font-weight-medium" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-overline text-medium-emphasis" data-v-4d6a65ed${_scopeId5}> NAME </span><span class="text-overline text-medium-emphasis" data-v-4d6a65ed${_scopeId5}>BUDGET</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-overline text-medium-emphasis" }, " NAME "),
                                      createVNode("span", { class: "text-overline text-medium-emphasis" }, "BUDGET")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, { class: "d-flex justify-space-between font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-overline text-medium-emphasis" }, " NAME "),
                                    createVNode("span", { class: "text-overline text-medium-emphasis" }, "BUDGET")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, { class: "pb-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "d-flex justify-space-between font-weight-medium" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-overline text-medium-emphasis" }, " NAME "),
                                  createVNode("span", { class: "text-overline text-medium-emphasis" }, "BUDGET")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        createVNode(VListItem, { class: "pb-0" }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "d-flex justify-space-between font-weight-medium" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-overline text-medium-emphasis" }, " NAME "),
                                createVNode("span", { class: "text-overline text-medium-emphasis" }, "BUDGET")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(projects), (project) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: project.title
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: project.img,
                                  height: "auto",
                                  width: "auto",
                                  class: "me-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: project.img,
                                    height: "auto",
                                    width: "auto",
                                    class: "me-4"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemAction, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VChip, {
                                        text: project.budget,
                                        color: "primary",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VChip, {
                                          text: project.budget,
                                          color: "primary",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, null, 8, ["text"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemAction, null, {
                                    default: withCtx(() => [
                                      createVNode(VChip, {
                                        text: project.budget,
                                        color: "primary",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, null, 8, ["text"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(project.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(project.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, { class: "text-xs" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(project.subtitle)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(project.subtitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(project.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "text-xs" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(project.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project) => {
                            return openBlock(), createBlock(VListItem, {
                              key: project.title
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VImg, {
                                  src: project.img,
                                  height: "auto",
                                  width: "auto",
                                  class: "me-4"
                                }, null, 8, ["src"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VListItemAction, null, {
                                  default: withCtx(() => [
                                    createVNode(VChip, {
                                      text: project.budget,
                                      color: "primary",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, null, 8, ["text"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(project.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(project.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project) => {
                          return openBlock(), createBlock(VListItem, {
                            key: project.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VImg, {
                                src: project.img,
                                height: "auto",
                                width: "auto",
                                class: "me-4"
                              }, null, 8, ["src"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VListItemAction, null, {
                                default: withCtx(() => [
                                  createVNode(VChip, {
                                    text: project.budget,
                                    color: "primary",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, null, 8, ["text"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(project.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-xs" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(project.subtitle), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
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
              createVNode(VCardText, { class: "py-4" }, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      createVNode(VListItem, { class: "pb-0" }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, { class: "d-flex justify-space-between font-weight-medium" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-overline text-medium-emphasis" }, " NAME "),
                              createVNode("span", { class: "text-overline text-medium-emphasis" }, "BUDGET")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project) => {
                        return openBlock(), createBlock(VListItem, {
                          key: project.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VImg, {
                              src: project.img,
                              height: "auto",
                              width: "auto",
                              class: "me-4"
                            }, null, 8, ["src"])
                          ]),
                          append: withCtx(() => [
                            createVNode(VListItemAction, null, {
                              default: withCtx(() => [
                                createVNode(VChip, {
                                  text: project.budget,
                                  color: "primary",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, null, 8, ["text"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium text-sm" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(project.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "text-xs" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(project.subtitle), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsProjectStatistics.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AnalyticsProjectStatistics = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-4d6a65ed"]]);
const _sfc_main$7 = {
  __name: "AnalyticsSalesCountry",
  __ssrInlineRender: true,
  setup(__props) {
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const borderColor = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      const primaryText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["high-emphasis-opacity"]})`;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        plotOptions: {
          bar: {
            borderRadius: 8,
            barHeight: "60%",
            horizontal: true,
            distributed: true,
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last"
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: 6,
          style: {
            fontSize: "0.8125rem",
            fontWeight: 500
          }
        },
        grid: {
          strokeDashArray: 8,
          borderColor,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: {
            top: -18,
            left: 21,
            right: 33,
            bottom: 10
          }
        },
        colors: [
          `rgba(${hexToRgb(String(themeColors.primary))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.success))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.warning))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.info))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.error))}, 1)`
        ],
        legend: { show: false },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        xaxis: {
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "US",
            "IN",
            "JA",
            "CA",
            "AU"
          ],
          labels: {
            formatter: (val) => `${Number(val) / 1e3}k`,
            style: {
              fontSize: "0.8125rem",
              colors: disabledText
            }
          }
        },
        yaxis: {
          labels: {
            align: "right",
            style: {
              fontWeight: 500,
              fontSize: "0.9375rem",
              colors: primaryText
            }
          }
        }
      };
    });
    const series = [{
      name: "Sales",
      data: [
        17165,
        13850,
        12375,
        9567,
        7880
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$d;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Sales Country",
        subtitle: "Total $42,580 Sales"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-n8 me-n3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-n8 me-n3" }, [
                createVNode(_component_MoreBtn, { "menu-list": moreList })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VueApexCharts, {
              class: "mt-9",
              type: "bar",
              height: "294",
              options: unref(chartConfig),
              series
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VueApexCharts, {
                class: "mt-9",
                type: "bar",
                height: "294",
                options: unref(chartConfig),
                series
              }, null, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsSalesCountry.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const googleLogo = "/build/assets/google-DPRoWoeF.png";
const instagramLogo = "/build/assets/instagram-D0-tpJ5d.png";
const redditLogo = "/build/assets/reddit-o0rl7oj6.png";
const _sfc_main$6 = {
  __name: "AnalyticsTopReferralSources",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("google");
    const categories = [
      {
        title: "Google",
        img: { src: googleLogo }
      },
      {
        title: "Facebook",
        img: { src: facebookRound }
      },
      {
        title: "Instagram",
        img: { src: instagramLogo }
      },
      {
        title: "Reddit",
        img: { src: redditLogo }
      }
    ];
    const productData = {
      google: [
        {
          title: "Email Marketing Campaign",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: 24,
          totalRevenue: "42,857"
        },
        {
          title: "Google Workspace",
          status: {
            text: "Completed",
            color: "warning"
          },
          conversion: -12,
          totalRevenue: "850"
        },
        {
          title: "Affiliation Program",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: 24,
          totalRevenue: "5,576"
        },
        {
          title: "Google AdSense",
          status: {
            text: "In Draft",
            color: "info"
          },
          conversion: 0,
          totalRevenue: "0"
        }
      ],
      facebook: [
        {
          title: "Create Audiences in Ads Manager",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: -8,
          totalRevenue: "322"
        },
        {
          title: "Facebook page advertising",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: 19,
          totalRevenue: "5,634"
        },
        {
          title: "Messenger advertising",
          status: {
            text: "Expired",
            color: "error"
          },
          conversion: -23,
          totalRevenue: "751"
        },
        {
          title: "Video campaign",
          status: {
            text: "Completed",
            color: "warning"
          },
          conversion: 21,
          totalRevenue: "3,585"
        }
      ],
      instagram: [
        {
          title: "Create shopping advertising",
          status: {
            text: "In Draft",
            color: "info"
          },
          conversion: -15,
          totalRevenue: "599"
        },
        {
          title: "IGTV advertising",
          status: {
            text: "Completed",
            color: "warning"
          },
          conversion: 37,
          totalRevenue: "1,467"
        },
        {
          title: "Collection advertising",
          status: {
            text: "In Draft",
            color: "info"
          },
          conversion: 0,
          totalRevenue: "0"
        },
        {
          title: "Stories advertising",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: 29,
          totalRevenue: "4,546"
        }
      ],
      reddit: [
        {
          title: "Interests advertising",
          status: {
            text: "Expired",
            color: "error"
          },
          conversion: 2,
          totalRevenue: "404"
        },
        {
          title: "Community advertising",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: 25,
          totalRevenue: "399"
        },
        {
          title: "Device advertising",
          status: {
            text: "Completed",
            color: "warning"
          },
          conversion: 21,
          totalRevenue: "177"
        },
        {
          title: "Campaigning",
          status: {
            text: "Active",
            color: "primary"
          },
          conversion: -5,
          totalRevenue: "1,139"
        }
      ]
    };
    const selectedProduct = computed(() => {
      return productData[currentTab.value];
    });
    const moreList = [
      {
        title: "Last 28 Days",
        value: "Last 28 Days"
      },
      {
        title: "Last Month",
        value: "Last Month"
      },
      {
        title: "Last Year",
        value: "Last Year"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$d;
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Top Referral Sources",
        subtitle: "Number of Sales"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n2 mt-n8" data-v-eb852849${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "me-n2 mt-n8" }, [
                createVNode(_component_MoreBtn, { "menu-list": moreList })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "pb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSlideGroup, {
                    modelValue: unref(currentTab),
                    "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
                    "show-arrows": "",
                    mandatory: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(categories, (category) => {
                          _push4(ssrRenderComponent(VSlideGroupItem, {
                            key: category.title,
                            value: category.title.toLowerCase()
                          }, {
                            default: withCtx(({ isSelected, toggle }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"])}" style="${ssrRenderStyle({ "block-size": "5.375rem", "inline-size": "5.75rem" })}" data-v-eb852849${_scopeId4}>`);
                                _push5(ssrRenderComponent(VImg, mergeProps({ ref_for: true }, category.img, {
                                  alt: "slide-img",
                                  width: "34",
                                  height: "34"
                                }), null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                    style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                                    onClick: toggle
                                  }, [
                                    createVNode(VImg, mergeProps({ ref_for: true }, category.img, {
                                      alt: "slide-img",
                                      width: "34",
                                      height: "34"
                                    }), null, 16)
                                  ], 10, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                        _push4(ssrRenderComponent(VSlideGroupItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column justify-center align-center rounded me-4 not-selected-category" style="${ssrRenderStyle({ "block-size": "5.375rem", "inline-size": "5.75rem" })}" data-v-eb852849${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                rounded: "",
                                size: "30",
                                color: "default",
                                variant: "tonal"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-add-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-add-line" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "d-flex flex-column justify-center align-center rounded me-4 not-selected-category",
                                  style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                                }, [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "30",
                                    color: "default",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-add-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                            return createVNode(VSlideGroupItem, {
                              key: category.title,
                              value: category.title.toLowerCase()
                            }, {
                              default: withCtx(({ isSelected, toggle }) => [
                                createVNode("div", {
                                  class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                  style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                                  onClick: toggle
                                }, [
                                  createVNode(VImg, mergeProps({ ref_for: true }, category.img, {
                                    alt: "slide-img",
                                    width: "34",
                                    height: "34"
                                  }), null, 16)
                                ], 10, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64)),
                          createVNode(VSlideGroupItem, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "d-flex flex-column justify-center align-center rounded me-4 not-selected-category",
                                style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                              }, [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: "30",
                                  color: "default",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-add-line" })
                                  ]),
                                  _: 1
                                })
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
                    createVNode(VSlideGroup, {
                      modelValue: unref(currentTab),
                      "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
                      "show-arrows": "",
                      mandatory: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                          return createVNode(VSlideGroupItem, {
                            key: category.title,
                            value: category.title.toLowerCase()
                          }, {
                            default: withCtx(({ isSelected, toggle }) => [
                              createVNode("div", {
                                class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                                onClick: toggle
                              }, [
                                createVNode(VImg, mergeProps({ ref_for: true }, category.img, {
                                  alt: "slide-img",
                                  width: "34",
                                  height: "34"
                                }), null, 16)
                              ], 10, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64)),
                        createVNode(VSlideGroupItem, null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "d-flex flex-column justify-center align-center rounded me-4 not-selected-category",
                              style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                            }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "30",
                                color: "default",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-add-line" })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTable, { class: "text-no-wrap referral-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead data-v-eb852849${_scopeId2}><tr data-v-eb852849${_scopeId2}><th scope="col" class="w-50" data-v-eb852849${_scopeId2}> PARAMETER </th><th scope="col" data-v-eb852849${_scopeId2}> STATUS </th><th scope="col" class="text-end" data-v-eb852849${_scopeId2}> PROFIT </th><th scope="col" data-v-eb852849${_scopeId2}> TOTAL REVENUE </th></tr></thead><tbody class="text-high-emphasis" data-v-eb852849${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(selectedProduct), (currentProduct) => {
                    _push3(`<tr data-v-eb852849${_scopeId2}><td data-v-eb852849${_scopeId2}><span class="text-body-1" data-v-eb852849${_scopeId2}>${ssrInterpolate(currentProduct.title)}</span></td><td class="font-weight-medium" data-v-eb852849${_scopeId2}>`);
                    _push3(ssrRenderComponent(VChip, {
                      size: "small",
                      color: currentProduct.status.color
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(currentProduct.status.text)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(currentProduct.status.text), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td><td class="text-end" data-v-eb852849${_scopeId2}><span class="${ssrRenderClass([Math.sign(currentProduct.conversion) > 0 ? "text-success" : "text-error", "font-weight-medium text-sm"])}" data-v-eb852849${_scopeId2}>${ssrInterpolate(Math.sign(currentProduct.conversion) > 0 ? `+${currentProduct.conversion}` : currentProduct.conversion)}% </span></td><td style="${ssrRenderStyle({ "inline-size": "1rem" })}" class="font-weight-medium text-end text-body-1" data-v-eb852849${_scopeId2}> $${ssrInterpolate(currentProduct.totalRevenue)}</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", {
                          scope: "col",
                          class: "w-50"
                        }, " PARAMETER "),
                        createVNode("th", { scope: "col" }, " STATUS "),
                        createVNode("th", {
                          scope: "col",
                          class: "text-end"
                        }, " PROFIT "),
                        createVNode("th", { scope: "col" }, " TOTAL REVENUE ")
                      ])
                    ]),
                    createVNode("tbody", { class: "text-high-emphasis" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedProduct), (currentProduct) => {
                        return openBlock(), createBlock("tr", {
                          key: currentProduct.title
                        }, [
                          createVNode("td", null, [
                            createVNode("span", { class: "text-body-1" }, toDisplayString(currentProduct.title), 1)
                          ]),
                          createVNode("td", { class: "font-weight-medium" }, [
                            createVNode(VChip, {
                              size: "small",
                              color: currentProduct.status.color
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(currentProduct.status.text), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("td", { class: "text-end" }, [
                            createVNode("span", {
                              class: ["font-weight-medium text-sm", Math.sign(currentProduct.conversion) > 0 ? "text-success" : "text-error"]
                            }, toDisplayString(Math.sign(currentProduct.conversion) > 0 ? `+${currentProduct.conversion}` : currentProduct.conversion) + "% ", 3)
                          ]),
                          createVNode("td", {
                            style: { "inline-size": "1rem" },
                            class: "font-weight-medium text-end text-body-1"
                          }, " $" + toDisplayString(currentProduct.totalRevenue), 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "pb-6" }, {
                default: withCtx(() => [
                  createVNode(VSlideGroup, {
                    modelValue: unref(currentTab),
                    "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
                    "show-arrows": "",
                    mandatory: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                        return createVNode(VSlideGroupItem, {
                          key: category.title,
                          value: category.title.toLowerCase()
                        }, {
                          default: withCtx(({ isSelected, toggle }) => [
                            createVNode("div", {
                              class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                              style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                              onClick: toggle
                            }, [
                              createVNode(VImg, mergeProps({ ref_for: true }, category.img, {
                                alt: "slide-img",
                                width: "34",
                                height: "34"
                              }), null, 16)
                            ], 10, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64)),
                      createVNode(VSlideGroupItem, null, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "d-flex flex-column justify-center align-center rounded me-4 not-selected-category",
                            style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                          }, [
                            createVNode(VAvatar, {
                              rounded: "",
                              size: "30",
                              color: "default",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-add-line" })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VTable, { class: "text-no-wrap referral-table" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", {
                        scope: "col",
                        class: "w-50"
                      }, " PARAMETER "),
                      createVNode("th", { scope: "col" }, " STATUS "),
                      createVNode("th", {
                        scope: "col",
                        class: "text-end"
                      }, " PROFIT "),
                      createVNode("th", { scope: "col" }, " TOTAL REVENUE ")
                    ])
                  ]),
                  createVNode("tbody", { class: "text-high-emphasis" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedProduct), (currentProduct) => {
                      return openBlock(), createBlock("tr", {
                        key: currentProduct.title
                      }, [
                        createVNode("td", null, [
                          createVNode("span", { class: "text-body-1" }, toDisplayString(currentProduct.title), 1)
                        ]),
                        createVNode("td", { class: "font-weight-medium" }, [
                          createVNode(VChip, {
                            size: "small",
                            color: currentProduct.status.color
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(currentProduct.status.text), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("td", { class: "text-end" }, [
                          createVNode("span", {
                            class: ["font-weight-medium text-sm", Math.sign(currentProduct.conversion) > 0 ? "text-success" : "text-error"]
                          }, toDisplayString(Math.sign(currentProduct.conversion) > 0 ? `+${currentProduct.conversion}` : currentProduct.conversion) + "% ", 3)
                        ]),
                        createVNode("td", {
                          style: { "inline-size": "1rem" },
                          class: "font-weight-medium text-end text-body-1"
                        }, " $" + toDisplayString(currentProduct.totalRevenue), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsTopReferralSources.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AnalyticsTopReferralSources = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-eb852849"]]);
const _sfc_main$5 = {
  __name: "AnalyticsTotalProfitLineCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [{
      data: [
        0,
        20,
        5,
        30,
        15,
        45
      ]
    }];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        grid: {
          borderColor: `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`,
          strokeDashArray: 6,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: {
            top: -15,
            left: -7,
            right: 7,
            bottom: -15
          }
        },
        stroke: { width: 3 },
        colors: [currentTheme.info],
        markers: {
          size: 6,
          offsetY: 2,
          offsetX: -1,
          strokeWidth: 3,
          colors: ["transparent"],
          strokeColors: "transparent",
          discrete: [{
            size: 6,
            seriesIndex: 0,
            strokeColor: currentTheme.info,
            fillColor: currentTheme.surface,
            dataPointIndex: series[0].data.length - 1
          }],
          hover: { size: 7 }
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { labels: { show: false } }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1 mb-5"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $38.5k </h5><span class="text-success text-body-1"${_scopeId2}>+62%</span></div><div class="text-subtitle-1"${_scopeId2}> Sessions </div>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "line",
                    options: unref(chartOptions),
                    series,
                    height: 98
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1 mb-5" }, [
                      createVNode("h5", { class: "text-h5" }, " $38.5k "),
                      createVNode("span", { class: "text-success text-body-1" }, "+62%")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Sessions "),
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      options: unref(chartOptions),
                      series,
                      height: 98
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1 mb-5" }, [
                    createVNode("h5", { class: "text-h5" }, " $38.5k "),
                    createVNode("span", { class: "text-success text-body-1" }, "+62%")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Sessions "),
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    options: unref(chartOptions),
                    series,
                    height: 98
                  }, null, 8, ["options"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsTotalProfitLineCharts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AnalyticsTotalRevenueBarCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const series = [
      {
        name: "Earning",
        data: [
          120,
          200,
          150,
          120
        ]
      },
      {
        name: "Expense",
        data: [
          72,
          120,
          50,
          65
        ]
      }
    ];
    const chartOptions = computed(() => {
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        grid: {
          padding: {
            top: -15,
            left: -14,
            right: -4,
            bottom: -15
          },
          yaxis: { lines: { show: false } }
        },
        legend: { show: false },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
        colors: [
          "rgba(var(--v-theme-primary),1)",
          "rgba(var(--v-theme-warning),1)"
        ],
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "48%",
            borderRadiusApplication: "start",
            borderRadiusWhenStacked: "last"
          }
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr"
          ]
        },
        yaxis: { labels: { show: false } },
        responsive: [
          {
            breakpoint: 1330,
            options: { plotOptions: { bar: { columnWidth: "60%" } } }
          },
          {
            breakpoint: 960,
            options: { plotOptions: { bar: { columnWidth: "40%" } } }
          },
          {
            breakpoint: 448,
            options: { plotOptions: { bar: { columnWidth: "60%" } } }
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $42.5k </h5><div class="text-error text-body-1"${_scopeId2}> -22% </div></div><div class="text-subtitle-1 mb-2"${_scopeId2}> Total Revenue </div>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "bar",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $42.5k "),
                      createVNode("div", { class: "text-error text-body-1" }, " -22% ")
                    ]),
                    createVNode("div", { class: "text-subtitle-1 mb-2" }, " Total Revenue "),
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      options: unref(chartOptions),
                      series,
                      height: 108
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $42.5k "),
                    createVNode("div", { class: "text-error text-body-1" }, " -22% ")
                  ]),
                  createVNode("div", { class: "text-subtitle-1 mb-2" }, " Total Revenue "),
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, 8, ["options"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsTotalRevenueBarCharts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AnalyticsTotalTransactions",
  __ssrInlineRender: true,
  setup(__props) {
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    const reports = [
      {
        title: "This Week",
        stats: 82.45
      },
      {
        title: "Last Week",
        stats: -24.86
      }
    ];
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const borderColor = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      return {
        chart: {
          stacked: true,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { y: { formatter: (val) => `${Math.abs(val)}` } },
        legend: { show: false },
        dataLabels: { enabled: false },
        colors: [
          `rgba(${hexToRgb(String(themeColors.primary))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.success))}, 1)`
        ],
        grid: {
          borderColor,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: {
            top: -5,
            bottom: -25
          }
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            barHeight: "30%",
            horizontal: true,
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "end"
          }
        },
        xaxis: {
          position: "top",
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ],
          labels: {
            formatter: (val) => `${Math.abs(Number(val))}`,
            style: { colors: disabledText }
          }
        },
        yaxis: { labels: { show: false } }
      };
    });
    const series = [
      {
        name: "Last Week",
        data: [
          83,
          153,
          213,
          279,
          213,
          153,
          83
        ]
      },
      {
        name: "This Week",
        data: [
          -84,
          -156,
          -216,
          -282,
          -216,
          -156,
          -84
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      const _component_MoreBtn = _sfc_main$d;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7",
                    class: _ctx.$vuetify.display.xs ? "border-b" : "border-e"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Total Transactions`);
                                  } else {
                                    return [
                                      createTextVNode("Total Transactions")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Total Transactions")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VueApexCharts, {
                                id: "total-transactions-chart",
                                type: "bar",
                                height: "278",
                                options: unref(chartConfig),
                                series
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VueApexCharts, {
                                  id: "total-transactions-chart",
                                  type: "bar",
                                  height: "278",
                                  options: unref(chartConfig),
                                  series
                                }, null, 8, ["options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Total Transactions")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_VueApexCharts, {
                                id: "total-transactions-chart",
                                type: "bar",
                                height: "278",
                                options: unref(chartConfig),
                                series
                              }, null, 8, ["options"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mt-n8 me-n4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mt-n8 me-n4" }, [
                                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Report`);
                                  } else {
                                    return [
                                      createTextVNode("Report")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Last month transactions $234.40k`);
                                  } else {
                                    return [
                                      createTextVNode("Last month transactions $234.40k")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Report")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Last month transactions $234.40k")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "pt-10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(reports, (report, index) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        key: report.title,
                                        cols: "6",
                                        class: ["text-center", index === 0 ? "border-e" : ""]
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              rounded: "lg",
                                              variant: "tonal",
                                              color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                                    }, null, 8, ["icon"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<p class="mt-3 mb-0"${_scopeId6}>${ssrInterpolate(report.title)}</p><h6 class="text-h6"${_scopeId6}>${ssrInterpolate(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats)}</h6>`);
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                rounded: "lg",
                                                variant: "tonal",
                                                color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                                  }, null, 8, ["icon"])
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("p", { class: "mt-3 mb-0" }, toDisplayString(report.title), 1),
                                              createVNode("h6", { class: "text-h6" }, toDisplayString(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(reports, (report, index) => {
                                        return createVNode(VCol, {
                                          key: report.title,
                                          cols: "6",
                                          class: ["text-center", index === 0 ? "border-e" : ""]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              rounded: "lg",
                                              variant: "tonal",
                                              color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("p", { class: "mt-3 mb-0" }, toDisplayString(report.title), 1),
                                            createVNode("h6", { class: "text-h6" }, toDisplayString(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center justify-space-around flex-wrap gap-y-2 text-center"${_scopeId4}><div class="px-4"${_scopeId4}><p class="mb-0"${_scopeId4}> Performance </p><h6 class="text-h6"${_scopeId4}> +94.15% </h6></div><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`View Report`);
                                  } else {
                                    return [
                                      createTextVNode("View Report")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode(VRow, { "no-gutters": "" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(reports, (report, index) => {
                                      return createVNode(VCol, {
                                        key: report.title,
                                        cols: "6",
                                        class: ["text-center", index === 0 ? "border-e" : ""]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAvatar, {
                                            rounded: "lg",
                                            variant: "tonal",
                                            color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("p", { class: "mt-3 mb-0" }, toDisplayString(report.title), 1),
                                          createVNode("h6", { class: "text-h6" }, toDisplayString(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-5" }),
                                createVNode("div", { class: "d-flex align-center justify-space-around flex-wrap gap-y-2 text-center" }, [
                                  createVNode("div", { class: "px-4" }, [
                                    createVNode("p", { class: "mb-0" }, " Performance "),
                                    createVNode("h6", { class: "text-h6" }, " +94.15% ")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("View Report")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, null, {
                            append: withCtx(() => [
                              createVNode("div", { class: "mt-n8 me-n4" }, [
                                createVNode(_component_MoreBtn, { "menu-list": moreList })
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Report")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Last month transactions $234.40k")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "pt-10" }, {
                            default: withCtx(() => [
                              createVNode(VRow, { "no-gutters": "" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(reports, (report, index) => {
                                    return createVNode(VCol, {
                                      key: report.title,
                                      cols: "6",
                                      class: ["text-center", index === 0 ? "border-e" : ""]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAvatar, {
                                          rounded: "lg",
                                          variant: "tonal",
                                          color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("p", { class: "mt-3 mb-0" }, toDisplayString(report.title), 1),
                                        createVNode("h6", { class: "text-h6" }, toDisplayString(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]);
                                  }), 64))
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-5" }),
                              createVNode("div", { class: "d-flex align-center justify-space-around flex-wrap gap-y-2 text-center" }, [
                                createVNode("div", { class: "px-4" }, [
                                  createVNode("p", { class: "mb-0" }, " Performance "),
                                  createVNode("h6", { class: "text-h6" }, " +94.15% ")
                                ]),
                                createVNode("div", null, [
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("View Report")
                                    ]),
                                    _: 1
                                  })
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
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7",
                      class: _ctx.$vuetify.display.xs ? "border-b" : "border-e"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Total Transactions")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_VueApexCharts, {
                              id: "total-transactions-chart",
                              type: "bar",
                              height: "278",
                              options: unref(chartConfig),
                              series
                            }, null, 8, ["options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          append: withCtx(() => [
                            createVNode("div", { class: "mt-n8 me-n4" }, [
                              createVNode(_component_MoreBtn, { "menu-list": moreList })
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Report")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Last month transactions $234.40k")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "pt-10" }, {
                          default: withCtx(() => [
                            createVNode(VRow, { "no-gutters": "" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(reports, (report, index) => {
                                  return createVNode(VCol, {
                                    key: report.title,
                                    cols: "6",
                                    class: ["text-center", index === 0 ? "border-e" : ""]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, {
                                        rounded: "lg",
                                        variant: "tonal",
                                        color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode("p", { class: "mt-3 mb-0" }, toDisplayString(report.title), 1),
                                      createVNode("h6", { class: "text-h6" }, toDisplayString(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 64))
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-5" }),
                            createVNode("div", { class: "d-flex align-center justify-space-around flex-wrap gap-y-2 text-center" }, [
                              createVNode("div", { class: "px-4" }, [
                                createVNode("p", { class: "mb-0" }, " Performance "),
                                createVNode("h6", { class: "text-h6" }, " +94.15% ")
                              ]),
                              createVNode("div", null, [
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("View Report")
                                  ]),
                                  _: 1
                                })
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
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7",
                    class: _ctx.$vuetify.display.xs ? "border-b" : "border-e"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Total Transactions")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_VueApexCharts, {
                            id: "total-transactions-chart",
                            type: "bar",
                            height: "278",
                            options: unref(chartConfig),
                            series
                          }, null, 8, ["options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        append: withCtx(() => [
                          createVNode("div", { class: "mt-n8 me-n4" }, [
                            createVNode(_component_MoreBtn, { "menu-list": moreList })
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Report")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Last month transactions $234.40k")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pt-10" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(reports, (report, index) => {
                                return createVNode(VCol, {
                                  key: report.title,
                                  cols: "6",
                                  class: ["text-center", index === 0 ? "border-e" : ""]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAvatar, {
                                      rounded: "lg",
                                      variant: "tonal",
                                      color: Math.sign(report.stats) === 1 ? "success" : "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: Math.sign(report.stats) === 1 ? "ri-pie-chart-2-line" : "ri-money-dollar-circle-line"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("p", { class: "mt-3 mb-0" }, toDisplayString(report.title), 1),
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(Math.sign(report.stats) === 1 ? `+${report.stats}` : report.stats), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode("div", { class: "d-flex align-center justify-space-around flex-wrap gap-y-2 text-center" }, [
                            createVNode("div", { class: "px-4" }, [
                              createVNode("p", { class: "mb-0" }, " Performance "),
                              createVNode("h6", { class: "text-h6" }, " +94.15% ")
                            ]),
                            createVNode("div", null, [
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("View Report")
                                ]),
                                _: 1
                              })
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
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsTotalTransactions.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AnalyticsVisitsByDay",
  __ssrInlineRender: true,
  setup(__props) {
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: { enabled: false },
        colors: [
          `rgba(${hexToRgb(String(themeColors.warning))},0.16)`,
          `rgba(${hexToRgb(String(themeColors.warning))},1)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.16)`,
          `rgba(${hexToRgb(String(themeColors.warning))},1)`,
          `rgba(${hexToRgb(String(themeColors.warning))},1)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.16)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.16)`
        ],
        grid: {
          show: false,
          padding: {
            top: -15,
            left: -7,
            right: -4
          }
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            distributed: true,
            columnWidth: "55%",
            endingShape: "rounded",
            startingShape: "rounded"
          }
        },
        xaxis: {
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          labels: { style: { colors: disabledText } }
        },
        yaxis: { show: false }
      };
    });
    const series = [{
      data: [
        47,
        55,
        48,
        65,
        80,
        38,
        52
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$d;
      const _component_VueApexCharts = __unplugin_components_0;
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Visits by Day",
        subtitle: "Total 248.5k Visits"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-n8 me-n3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-n8 me-n3" }, [
                createVNode(_component_MoreBtn, { "menu-list": moreList })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "bar",
                    height: "222",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-space-between mt-5"${_scopeId2}><div${_scopeId2}><h6 class="text-h6"${_scopeId2}> Most Visited Day </h6><div class="text-body-2"${_scopeId2}> Total 62.4k Visits on Thursday </div></div>`);
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    color: "warning",
                    variant: "tonal",
                    class: "rounded"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-arrow-right-s-line",
                          class: "flip-in-rtl"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-arrow-right-s-line",
                            class: "flip-in-rtl"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      height: "222",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode("div", { class: "d-flex align-center justify-space-between mt-5" }, [
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-h6" }, " Most Visited Day "),
                        createVNode("div", { class: "text-body-2" }, " Total 62.4k Visits on Thursday ")
                      ]),
                      createVNode(_component_IconBtn, {
                        color: "warning",
                        variant: "tonal",
                        class: "rounded"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-arrow-right-s-line",
                            class: "flip-in-rtl"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    height: "222",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode("div", { class: "d-flex align-center justify-space-between mt-5" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "text-h6" }, " Most Visited Day "),
                      createVNode("div", { class: "text-body-2" }, " Total 62.4k Visits on Thursday ")
                    ]),
                    createVNode(_component_IconBtn, {
                      color: "warning",
                      variant: "tonal",
                      class: "rounded"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-arrow-right-s-line",
                          class: "flip-in-rtl"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsVisitsByDay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AnalyticsWeeklySales",
  __ssrInlineRender: true,
  setup(__props) {
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      return {
        chart: {
          stacked: true,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        markers: {
          size: 4,
          strokeWidth: 3,
          fillOpacity: 1,
          strokeOpacity: 1,
          colors: "rgba(var(--v-theme-surface), 1)",
          strokeColors: themeColors.warning
        },
        stroke: {
          curve: "smooth",
          width: [
            0,
            0,
            3
          ],
          colors: [themeColors.warning]
        },
        colors: [
          `rgba(${hexToRgb(String(themeColors.primary))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.primary))}, 0.12)`
        ],
        dataLabels: { enabled: false },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        legend: { show: false },
        grid: {
          yaxis: { lines: { show: false } },
          padding: {
            top: -28,
            left: -6,
            right: -8,
            bottom: -5
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "57%",
            endingShape: "flat",
            borderRadiusApplication: "start",
            borderRadiusWhenStacked: "all"
          }
        },
        xaxis: {
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul"
          ],
          labels: {
            style: {
              fontSize: "13px",
              colors: disabledText,
              letterSpacing: "0.4px"
            }
          }
        },
        yaxis: {
          max: 100,
          min: -100,
          show: false
        }
      };
    });
    const series = [
      {
        type: "column",
        name: "Earning",
        data: [
          90,
          52,
          67,
          45,
          75,
          55,
          48
        ]
      },
      {
        type: "column",
        name: "Expense",
        data: [
          -53,
          -29,
          -67,
          -84,
          -60,
          -40,
          -77
        ]
      },
      {
        type: "line",
        name: "Expense",
        data: [
          73,
          20,
          50,
          -20,
          58,
          15,
          31
        ]
      }
    ];
    const salesReport = [
      {
        title: "Net Income",
        amount: "$438.5k",
        avatarColor: "primary",
        avatarIcon: "ri-funds-line"
      },
      {
        title: "Expense",
        amount: "$22.4k",
        avatarColor: "warning",
        avatarIcon: "ri-money-dollar-circle-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$d;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Weekly Sales",
        subtitle: "Total 85.4k Sales"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-n8 me-n3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-n8 me-n3" }, [
                createVNode(_component_MoreBtn, { "menu-list": moreList })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { class: "mb-12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(salesReport, (sale) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: sale.title,
                            cols: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center gap-x-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: sale.avatarColor
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: sale.avatarIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: sale.avatarIcon
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div class="text-body-1"${_scopeId4}>${ssrInterpolate(sale.title)}</div><h6 class="text-h6"${_scopeId4}>${ssrInterpolate(sale.amount)}</h6></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                    createVNode(VAvatar, {
                                      rounded: "",
                                      variant: "tonal",
                                      color: sale.avatarColor
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: sale.avatarIcon
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(sale.title), 1),
                                      createVNode("h6", { class: "text-h6" }, toDisplayString(sale.amount), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(salesReport, (sale) => {
                            return createVNode(VCol, {
                              key: sale.title,
                              cols: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    variant: "tonal",
                                    color: sale.avatarColor
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: sale.avatarIcon
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(sale.title), 1),
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(sale.amount), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    id: "weekly-sales-chart",
                    type: "line",
                    height: "225",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { class: "mb-12" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(salesReport, (sale) => {
                          return createVNode(VCol, {
                            key: sale.title,
                            cols: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: sale.avatarColor
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: sale.avatarIcon
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(sale.title), 1),
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(sale.amount), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VueApexCharts, {
                      id: "weekly-sales-chart",
                      type: "line",
                      height: "225",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "mb-12" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(salesReport, (sale) => {
                        return createVNode(VCol, {
                          key: sale.title,
                          cols: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                variant: "tonal",
                                color: sale.avatarColor
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: sale.avatarIcon
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-body-1" }, toDisplayString(sale.title), 1),
                                createVNode("h6", { class: "text-h6" }, toDisplayString(sale.amount), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VueApexCharts, {
                    id: "weekly-sales-chart",
                    type: "line",
                    height: "225",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/analytics/AnalyticsWeeklySales.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const statisticsVertical = [
      {
        title: "Total Orders",
        color: "primary",
        icon: "ri-shopping-cart-line",
        stats: "155k",
        change: 22,
        subtitle: "Last 4 Month"
      },
      {
        title: "Total Sales",
        color: "success",
        icon: "ri-handbag-line",
        stats: "$13.4k",
        change: 38,
        subtitle: "Last Six Months"
      },
      {
        title: "Total Impression",
        color: "info",
        icon: "ri-link",
        stats: "142.8k",
        change: 62,
        subtitle: "Last One Year"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardStatisticsVertical = _sfc_main$e;
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AnalyticsCongratulationsJohn, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AnalyticsCongratulationsJohn)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "2",
              lg: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardStatisticsVertical, statisticsVertical[0], null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardStatisticsVertical, statisticsVertical[0], null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "2",
              lg: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AnalyticsProjectStatistics, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AnalyticsProjectStatistics)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CardStatisticsVertical, statisticsVertical[1], null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CardStatisticsVertical, statisticsVertical[1], null, 16)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CardStatisticsVertical, statisticsVertical[2], null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CardStatisticsVertical, statisticsVertical[2], null, 16)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$a, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$a)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_component_CardStatisticsVertical, statisticsVertical[1], null, 16)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_component_CardStatisticsVertical, statisticsVertical[2], null, 16)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a)
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
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode(_component_CardStatisticsVertical, statisticsVertical[1], null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode(_component_CardStatisticsVertical, statisticsVertical[2], null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$a)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AnalyticsTopReferralSources, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AnalyticsTopReferralSources)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$c, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$c)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "8",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(AnalyticsCongratulationsJohn)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "2",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CardStatisticsVertical, statisticsVertical[0], null, 16)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "2",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(AnalyticsProjectStatistics)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_CardStatisticsVertical, statisticsVertical[1], null, 16)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_CardStatisticsVertical, statisticsVertical[2], null, 16)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$a)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(AnalyticsTopReferralSources)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$c)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/dashboards/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
