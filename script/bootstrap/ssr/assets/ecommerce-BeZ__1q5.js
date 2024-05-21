import { i as illustration1, a as illustration2, _ as _sfc_main$d } from "./illustration-2-K6KOpGUD.js";
import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, toDisplayString, openBlock, createBlock, Fragment, renderList, ref, isRef, withAsyncContext, computed, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttrs } from "vue/server-renderer";
import { c as avatar1, d as avatar2, e as avatar3, l as useTheme, a as VIcon, V as VBtn, _ as _export_sfc, b as VProgressCircular, g as VProgressLinear, O as hexToRgb } from "../ssr.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import __unplugin_components_0 from "vue3-apexcharts";
import { V as VCarousel, a as VCarouselItem, m as marketingExpense, b as accountLogo, s as salesOverview, c as catImg1, d as catImg2, e as catImg3, f as mobile1, g as mobile2, h as mobile3, i as mobile4, j as desktop1, k as desktop2, l as desktop3, n as console1, o as console2, p as console3, q as appleIphone, r as ps4Joystick, t as appleWatch } from "./ps4-joystick-lg-BRHn33ZK.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { _ as _sfc_main$c } from "./MoreBtn-CtW8Gck8.js";
import { V as VSlideGroup } from "./VSlideGroup-Bvz86g7R.js";
import { V as VSlideGroupItem } from "./VSlideGroupItem-CIJ0uuo8.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
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
import "./VWindowItem-DbEW2JYm.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VMenu-KUYgjPyD.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VList-Bay5Fixr.js";
import "./index-D5WAZiYx.js";
import "./helpers-DX2i3Kdq.js";
import "ufo";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VSelect-5lJOBAar.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$b = {
  __name: "EcommerceActivityTimeline",
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
                              _push5(`<div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"${_scopeId4}><span class="app-timeline-title"${_scopeId4}> 12 Invoices have been paid </span><span class="app-timeline-meta"${_scopeId4}>12 min ago</span></div><div class="app-timeline-text mt-3"${_scopeId4}> Invoices have been paid to the company </div><div class="d-inline-flex align-center timeline-chip my-2"${_scopeId4}><img${ssrRenderAttr("src", unref(pdf))} height="20" class="me-2" alt="img"${_scopeId4}><span class="app-timeline-text font-weight-medium"${_scopeId4}> invoices.pdf </span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                  createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                  createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                ]),
                                createVNode("div", { class: "app-timeline-text mt-3" }, " Invoices have been paid to the company "),
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
                              _push5(`<div class="d-flex justify-space-between align-center flex-wrap mb-2"${_scopeId4}><div class="app-timeline-title"${_scopeId4}> Client Meeting </div><span class="app-timeline-meta"${_scopeId4}>45 min ago</span></div><div class="app-timeline-text mt-3"${_scopeId4}> Project meeting with john @10:15am </div><div class="d-flex justify-space-between align-center flex-wrap"${_scopeId4}><div class="d-flex align-center my-2"${_scopeId4}>`);
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
                                createVNode("div", { class: "app-timeline-text mt-3" }, " Project meeting with john @10:15am "),
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
                              _push5(`<div class="d-flex justify-space-between align-center flex-wrap mb-2"${_scopeId4}><span class="app-timeline-title"${_scopeId4}> Create a new project for client </span><span class="app-timeline-meta"${_scopeId4}>2 Day Ago</span></div><p class="app-timeline-text mt-3 mb-2"${_scopeId4}> 6 team members in a project </p><div class="v-avatar-group demo-avatar-group mb-5"${_scopeId4}>`);
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
                                createVNode("p", { class: "app-timeline-text mt-3 mb-2" }, " 6 team members in a project "),
                                createVNode("div", { class: "v-avatar-group demo-avatar-group mb-5" }, [
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
                              createVNode("div", { class: "app-timeline-text mt-3" }, " Invoices have been paid to the company "),
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
                              createVNode("div", { class: "app-timeline-text mt-3" }, " Project meeting with john @10:15am "),
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
                              createVNode("p", { class: "app-timeline-text mt-3 mb-2" }, " 6 team members in a project "),
                              createVNode("div", { class: "v-avatar-group demo-avatar-group mb-5" }, [
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
                            createVNode("div", { class: "app-timeline-text mt-3" }, " Invoices have been paid to the company "),
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
                            createVNode("div", { class: "app-timeline-text mt-3" }, " Project meeting with john @10:15am "),
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
                            createVNode("p", { class: "app-timeline-text mt-3 mb-2" }, " 6 team members in a project "),
                            createVNode("div", { class: "v-avatar-group demo-avatar-group mb-5" }, [
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
                          createVNode("div", { class: "app-timeline-text mt-3" }, " Invoices have been paid to the company "),
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
                          createVNode("div", { class: "app-timeline-text mt-3" }, " Project meeting with john @10:15am "),
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
                          createVNode("p", { class: "app-timeline-text mt-3 mb-2" }, " 6 team members in a project "),
                          createVNode("div", { class: "v-avatar-group demo-avatar-group mb-5" }, [
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceActivityTimeline.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "EcommerceLiveVisitors",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = vuetifyTheme.current.value.colors;
    const series = [{
      data: [
        70,
        118,
        92,
        49,
        19,
        49,
        23,
        82,
        65,
        23,
        49,
        65,
        65
      ]
    }];
    const chartOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -4,
          left: -20,
          right: -2,
          bottom: -7
        },
        yaxis: { lines: { show: false } }
      },
      legend: { show: false },
      dataLabels: { enabled: false },
      colors: [currentTheme.success],
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "43%",
          endingShape: "rounded",
          startingShape: "rounded"
        }
      },
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { labels: { show: false } }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-success text-body-1 font-weight-medium d-flex align-center mt-n7"${_scopeId2}><div${_scopeId2}>+78.2%</div>`);
                  _push3(ssrRenderComponent(VIcon, {
                    size: "20",
                    icon: "ri-arrow-up-s-line"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-success text-body-1 font-weight-medium d-flex align-center mt-n7" }, [
                      createVNode("div", null, "+78.2%"),
                      createVNode(VIcon, {
                        size: "20",
                        icon: "ri-arrow-up-s-line"
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Live Visitors`);
                      } else {
                        return [
                          createTextVNode("Live Visitors")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Total 890 Visitors Are Live`);
                      } else {
                        return [
                          createTextVNode("Total 890 Visitors Are Live")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Live Visitors")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Total 890 Visitors Are Live")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "bar",
                    height: 170,
                    options: chartOptions,
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      height: 170,
                      options: chartOptions,
                      series
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "text-success text-body-1 font-weight-medium d-flex align-center mt-n7" }, [
                    createVNode("div", null, "+78.2%"),
                    createVNode(VIcon, {
                      size: "20",
                      icon: "ri-arrow-up-s-line"
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Live Visitors")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Total 890 Visitors Are Live")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    height: 170,
                    options: chartOptions,
                    series
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceLiveVisitors.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "EcommerceMarketingSales",
  __ssrInlineRender: true,
  setup(__props) {
    const websiteAnalytics = [
      {
        name: "Marketing Expense",
        slideImg: marketingExpense,
        data: [
          {
            number: "5k",
            text: "Operating"
          },
          {
            number: "6k",
            text: "COGF"
          },
          {
            number: "2k",
            text: "Financial"
          },
          {
            number: "1k",
            text: "Expenses"
          }
        ]
      },
      {
        name: "Accounting",
        slideImg: accountLogo,
        data: [
          {
            number: "18",
            text: "Billing"
          },
          {
            number: "28",
            text: "Sales"
          },
          {
            number: "30",
            text: "Leads"
          },
          {
            number: "80",
            text: "Impression"
          }
        ]
      },
      {
        name: "Sales Overview",
        slideImg: salesOverview,
        data: [
          {
            number: "68",
            text: "Open"
          },
          {
            number: "52",
            text: "Converted"
          },
          {
            number: "04",
            text: "Lost"
          },
          {
            number: "12",
            text: "Quotations"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCarousel, {
              cycle: "",
              continuous: false,
              "show-arrows": false,
              "hide-delimiter-background": "",
              "delimiter-icon": "ri-circle-fill",
              height: "auto",
              class: "carousel-delimiter-top-end dots-active-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(websiteAnalytics, (item) => {
                    _push3(ssrRenderComponent(VCarouselItem, {
                      key: item.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Marketing &amp; Sales`);
                                    } else {
                                      return [
                                        createTextVNode("Marketing & Sales")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Total 245.8k Sales <div class="d-inline-block text-success font-weight-medium"${_scopeId5}><div class="d-flex align-center"${_scopeId5}> +24% `);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-arrow-up-s-line",
                                        size: "20"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></div>`);
                                    } else {
                                      return [
                                        createTextVNode(" Total 245.8k Sales "),
                                        createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createTextVNode(" +24% "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-up-s-line",
                                              size: "20"
                                            })
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Marketing & Sales")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Total 245.8k Sales "),
                                      createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createTextVNode(" +24% "),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-up-s-line",
                                            size: "20"
                                          })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "py-0" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-column flex-sm-row gap-6 mb-3"${_scopeId4}><div class="text-center"${_scopeId4}><img width="86" height="102"${ssrRenderAttr("src", item.slideImg)} class="rounded"${_scopeId4}></div><div${_scopeId4}><h6 class="text-h6 mb-2"${_scopeId4}>${ssrInterpolate(item.name)}</h6><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.data, (d) => {
                                        _push6(ssrRenderComponent(VCol, {
                                          key: d.number,
                                          cols: "6",
                                          class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div style="${ssrRenderStyle({ "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" })}" class="rounded px-2 py-1 text-body-1 font-weight-medium"${_scopeId6}>${ssrInterpolate(d.number)}</div><div class="text-body-1 text-truncate"${_scopeId6}>${ssrInterpolate(d.text)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", {
                                                  style: { "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" },
                                                  class: "rounded px-2 py-1 text-body-1 font-weight-medium"
                                                }, toDisplayString(d.number), 1),
                                                createVNode("div", { class: "text-body-1 text-truncate" }, toDisplayString(d.text), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: d.number,
                                            cols: "6",
                                            class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                style: { "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" },
                                                class: "rounded px-2 py-1 text-body-1 font-weight-medium"
                                              }, toDisplayString(d.number), 1),
                                              createVNode("div", { class: "text-body-1 text-truncate" }, toDisplayString(d.text), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-column flex-sm-row gap-6 mb-3" }, [
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode("img", {
                                        width: "86",
                                        height: "102",
                                        src: item.slideImg,
                                        class: "rounded"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                                      createVNode("div", null, [
                                        createVNode(VRow, { "no-gutters": "" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: d.number,
                                                cols: "6",
                                                class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", {
                                                    style: { "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" },
                                                    class: "rounded px-2 py-1 text-body-1 font-weight-medium"
                                                  }, toDisplayString(d.number), 1),
                                                  createVNode("div", { class: "text-body-1 text-truncate" }, toDisplayString(d.text), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardItem, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Marketing & Sales")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Total 245.8k Sales "),
                                    createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createTextVNode(" +24% "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-up-s-line",
                                          size: "20"
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "py-0" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column flex-sm-row gap-6 mb-3" }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("img", {
                                      width: "86",
                                      height: "102",
                                      src: item.slideImg,
                                      class: "rounded"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                                    createVNode("div", null, [
                                      createVNode(VRow, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: d.number,
                                              cols: "6",
                                              class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  style: { "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" },
                                                  class: "rounded px-2 py-1 text-body-1 font-weight-medium"
                                                }, toDisplayString(d.number), 1),
                                                createVNode("div", { class: "text-body-1 text-truncate" }, toDisplayString(d.text), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(websiteAnalytics, (item) => {
                      return createVNode(VCarouselItem, {
                        key: item.name
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardItem, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Marketing & Sales")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Total 245.8k Sales "),
                                  createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createTextVNode(" +24% "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-up-s-line",
                                        size: "20"
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "py-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column flex-sm-row gap-6 mb-3" }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("img", {
                                    width: "86",
                                    height: "102",
                                    src: item.slideImg,
                                    class: "rounded"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                                  createVNode("div", null, [
                                    createVNode(VRow, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: d.number,
                                            cols: "6",
                                            class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                style: { "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" },
                                                class: "rounded px-2 py-1 text-body-1 font-weight-medium"
                                              }, toDisplayString(d.number), 1),
                                              createVNode("div", { class: "text-body-1 text-truncate" }, toDisplayString(d.text), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pt-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    size: "small",
                    class: "me-4",
                    "prepend-icon": "ri-sticky-note-line"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Details `);
                      } else {
                        return [
                          createTextVNode(" Details ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    size: "small",
                    "prepend-icon": "ri-download-line"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Report `);
                      } else {
                        return [
                          createTextVNode(" Report ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "outlined",
                      size: "small",
                      class: "me-4",
                      "prepend-icon": "ri-sticky-note-line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Details ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      size: "small",
                      "prepend-icon": "ri-download-line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Report ")
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
              createVNode(VCarousel, {
                cycle: "",
                continuous: false,
                "show-arrows": false,
                "hide-delimiter-background": "",
                "delimiter-icon": "ri-circle-fill",
                height: "auto",
                class: "carousel-delimiter-top-end dots-active-primary"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(websiteAnalytics, (item) => {
                    return createVNode(VCarouselItem, {
                      key: item.name
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Marketing & Sales")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Total 245.8k Sales "),
                                createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createTextVNode(" +24% "),
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-up-s-line",
                                      size: "20"
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "py-0" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column flex-sm-row gap-6 mb-3" }, [
                              createVNode("div", { class: "text-center" }, [
                                createVNode("img", {
                                  width: "86",
                                  height: "102",
                                  src: item.slideImg,
                                  class: "rounded"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                                createVNode("div", null, [
                                  createVNode(VRow, { "no-gutters": "" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: d.number,
                                          cols: "6",
                                          class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              style: { "background-color": "rgba(var(--v-theme-on-surface), var(--v-selected-opacity))", "block-size": "30px", "inline-size": "34px" },
                                              class: "rounded px-2 py-1 text-body-1 font-weight-medium"
                                            }, toDisplayString(d.number), 1),
                                            createVNode("div", { class: "text-body-1 text-truncate" }, toDisplayString(d.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pt-0" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "outlined",
                    size: "small",
                    class: "me-4",
                    "prepend-icon": "ri-sticky-note-line"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Details ")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    size: "small",
                    "prepend-icon": "ri-download-line"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Report ")
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceMarketingSales.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center gap-4 py-9" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VProgressCircular, {
                size: 64,
                width: 6,
                "model-value": 70,
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      icon: "ri-macbook-line",
                      size: "24"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "ri-macbook-line",
                        size: "24"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><div class="d-flex align-center gap-1 mb-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> 84k </h5><div class="text-error d-flex align-center"${_scopeId2}><span class="text-sm"${_scopeId2}>-24%</span>`);
              _push3(ssrRenderComponent(VIcon, {
                icon: "ri-arrow-down-s-line",
                size: "20"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><div${_scopeId2}>Total Impressions</div></div>`);
            } else {
              return [
                createVNode(VProgressCircular, {
                  size: 64,
                  width: 6,
                  "model-value": 70,
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "ri-macbook-line",
                      size: "24"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                    createVNode("h5", { class: "text-h5" }, " 84k "),
                    createVNode("div", { class: "text-error d-flex align-center" }, [
                      createVNode("span", { class: "text-sm" }, "-24%"),
                      createVNode(VIcon, {
                        icon: "ri-arrow-down-s-line",
                        size: "20"
                      })
                    ])
                  ]),
                  createVNode("div", null, "Total Impressions")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center gap-4 py-9" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VProgressCircular, {
                size: 65,
                width: 6,
                "model-value": 40,
                color: "warning"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      icon: "ri-handbag-line",
                      size: "24"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "ri-handbag-line",
                        size: "24"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><div class="d-flex align-center gap-1 mb-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> 22k </h5><div class="d-flex align-center"${_scopeId2}><div class="text-sm text-success"${_scopeId2}> +15% </div>`);
              _push3(ssrRenderComponent(VIcon, {
                icon: "ri-arrow-up-s-line",
                size: "20",
                color: "success"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><span${_scopeId2}>Total Orders</span></div>`);
            } else {
              return [
                createVNode(VProgressCircular, {
                  size: 65,
                  width: 6,
                  "model-value": 40,
                  color: "warning"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "ri-handbag-line",
                      size: "24"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                    createVNode("h5", { class: "text-h5" }, " 22k "),
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("div", { class: "text-sm text-success" }, " +15% "),
                      createVNode(VIcon, {
                        icon: "ri-arrow-up-s-line",
                        size: "20",
                        color: "success"
                      })
                    ])
                  ]),
                  createVNode("span", null, "Total Orders")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, { class: "d-flex align-center gap-4 py-9" }, {
            default: withCtx(() => [
              createVNode(VProgressCircular, {
                size: 64,
                width: 6,
                "model-value": 70,
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-macbook-line",
                    size: "24"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                  createVNode("h5", { class: "text-h5" }, " 84k "),
                  createVNode("div", { class: "text-error d-flex align-center" }, [
                    createVNode("span", { class: "text-sm" }, "-24%"),
                    createVNode(VIcon, {
                      icon: "ri-arrow-down-s-line",
                      size: "20"
                    })
                  ])
                ]),
                createVNode("div", null, "Total Impressions")
              ])
            ]),
            _: 1
          }),
          createVNode(VDivider),
          createVNode(VCardText, { class: "d-flex align-center gap-4 py-9" }, {
            default: withCtx(() => [
              createVNode(VProgressCircular, {
                size: 65,
                width: 6,
                "model-value": 40,
                color: "warning"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-handbag-line",
                    size: "24"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                  createVNode("h5", { class: "text-h5" }, " 22k "),
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("div", { class: "text-sm text-success" }, " +15% "),
                    createVNode(VIcon, {
                      icon: "ri-arrow-up-s-line",
                      size: "20",
                      color: "success"
                    })
                  ])
                ]),
                createVNode("span", null, "Total Orders")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceOrdersImpressions.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const EcommerceOrdersImpressions = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {
  __name: "EcommerceSalesMonthCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = vuetifyTheme.current.value.colors;
    const series = [{
      data: [
        12,
        12,
        18,
        18,
        13,
        13,
        5,
        5,
        17,
        17,
        25,
        25
      ]
    }];
    const chartOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false },
        dropShadow: {
          top: 14,
          blur: 4,
          left: 0,
          enabled: true,
          opacity: 0.12,
          color: currentTheme.primary
        }
      },
      tooltip: { enabled: false },
      grid: {
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -12,
          left: -2,
          right: 8,
          bottom: -10
        }
      },
      stroke: {
        width: 5,
        lineCap: "round"
      },
      markers: { size: 0 },
      colors: [currentTheme.primary],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: {
        min: 0,
        labels: { show: false }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Sales this month" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-0"${_scopeId2}> Total Sales This Month </p><h5 class="text-h5"${_scopeId2}> $28,450 </h5>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "line",
                    height: 100,
                    options: chartOptions,
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", { class: "mb-0" }, " Total Sales This Month "),
                    createVNode("h5", { class: "text-h5" }, " $28,450 "),
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      height: 100,
                      options: chartOptions,
                      series
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
                  createVNode("p", { class: "mb-0" }, " Total Sales This Month "),
                  createVNode("h5", { class: "text-h5" }, " $28,450 "),
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    height: 100,
                    options: chartOptions,
                    series
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceSalesMonthCharts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "EcommerceSalesOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const statistics = [
      {
        title: "Customers",
        stats: "8,458",
        icon: "ri-user-star-line",
        color: "primary"
      },
      {
        title: "Total Profit",
        stats: "$28.5k",
        icon: "ri-pie-chart-2-line",
        color: "warning"
      },
      {
        title: "Transactions",
        stats: "2,450k",
        icon: "ri-arrow-left-right-line",
        color: "info"
      }
    ];
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
      const _component_MoreBtn = _sfc_main$c;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-n7 me-n3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-n7 me-n3" }, [
                      createVNode(_component_MoreBtn, { "menu-list": moreList })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sales Overview`);
                      } else {
                        return [
                          createTextVNode("Sales Overview")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, { class: "d-flex align-center gap-x-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total 42.5k Sales <div class="d-flex align-center text-success font-weight-medium"${_scopeId3}> +18% `);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-arrow-up-s-line",
                          size: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createTextVNode(" Total 42.5k Sales "),
                          createVNode("div", { class: "d-flex align-center text-success font-weight-medium" }, [
                            createTextVNode(" +18% "),
                            createVNode(VIcon, {
                              icon: "ri-arrow-up-s-line",
                              size: "20"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Sales Overview")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, { class: "d-flex align-center gap-x-2" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total 42.5k Sales "),
                        createVNode("div", { class: "d-flex align-center text-success font-weight-medium" }, [
                          createTextVNode(" +18% "),
                          createVNode(VIcon, {
                            icon: "ri-arrow-up-s-line",
                            size: "20"
                          })
                        ])
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
                  _push3(`<div class="d-flex justify-space-between flex-column flex-sm-row gap-4 flex-wrap"${_scopeId2}><!--[-->`);
                  ssrRenderList(statistics, (item) => {
                    _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      color: item.color,
                      rounded: "",
                      variant: "tonal",
                      size: "40",
                      class: "me-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            size: "24",
                            icon: item.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              size: "24",
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex flex-column"${_scopeId2}><h5 class="text-h5"${_scopeId2}>${ssrInterpolate(item.stats)}</h5><div class="text-body-1"${_scopeId2}>${ssrInterpolate(item.title)}</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 flex-wrap" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                        return createVNode("div", {
                          key: item.title,
                          class: "d-flex align-center"
                        }, [
                          createVNode(VAvatar, {
                            color: item.color,
                            rounded: "",
                            variant: "tonal",
                            size: "40",
                            class: "me-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "24",
                                icon: item.icon
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "mt-n7 me-n3" }, [
                    createVNode(_component_MoreBtn, { "menu-list": moreList })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Sales Overview")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, { class: "d-flex align-center gap-x-2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total 42.5k Sales "),
                      createVNode("div", { class: "d-flex align-center text-success font-weight-medium" }, [
                        createTextVNode(" +18% "),
                        createVNode(VIcon, {
                          icon: "ri-arrow-up-s-line",
                          size: "20"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 flex-wrap" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                      return createVNode("div", {
                        key: item.title,
                        class: "d-flex align-center"
                      }, [
                        createVNode(VAvatar, {
                          color: item.color,
                          rounded: "",
                          variant: "tonal",
                          size: "40",
                          class: "me-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "24",
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["color"]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1),
                          createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1)
                        ])
                      ]);
                    }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceSalesOverview.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "EcommerceTopReferralSources",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("mobile");
    const categories = [
      {
        title: "mobile",
        img: {
          src: catImg1,
          width: 30,
          height: 58
        }
      },
      {
        title: "desktop",
        img: {
          src: catImg2,
          width: 52,
          height: 42
        }
      },
      {
        title: "console",
        img: {
          src: catImg3,
          width: 60,
          height: 42
        }
      }
    ];
    const productData = {
      mobile: [
        {
          status: "Out of Stock",
          revenue: "12.5k",
          conversion: 24,
          product: "Samsung s22",
          image: mobile1
        },
        {
          status: "In Stock",
          revenue: "45k",
          conversion: -18,
          product: "Apple iPhone 13 Pro",
          image: mobile2
        },
        {
          status: "Comming Soon",
          revenue: "98.2k",
          conversion: 55,
          product: "Oneplus 9 Pro",
          image: mobile3
        },
        {
          status: "In Stock",
          revenue: "210k",
          conversion: 8,
          product: "Google Pixel 6",
          image: mobile4
        }
      ],
      desktop: [
        {
          status: "In Stock",
          revenue: "94.6k",
          conversion: 16,
          product: "Apple Mac Mini",
          image: desktop1
        },
        {
          status: "Comming Soon",
          revenue: "76.5k",
          conversion: 27,
          product: "Newest HP Envy x360",
          image: desktop2
        },
        {
          status: "Out of Stock",
          revenue: "69.3k",
          conversion: -9,
          product: "Dell Inspiron 3000",
          image: desktop3
        }
      ],
      console: [
        {
          status: "Comming Soon",
          revenue: "18.6k",
          conversion: 34,
          product: "Sony Play Station 5",
          image: console1
        },
        {
          status: "Out of Stock",
          revenue: "29.7k",
          conversion: -21,
          product: "XBOX Series X",
          image: console2
        },
        {
          status: "In Stock",
          revenue: "10.4k",
          conversion: 38,
          product: "Nintendo Switch",
          image: console3
        }
      ]
    };
    const resolveChipColor = (status) => {
      if (status === "In Stock")
        return "success";
      if (status === "Out of Stock")
        return "primary";
      if (status === "Comming Soon")
        return "warning";
    };
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
      const _component_MoreBtn = _sfc_main$c;
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Top Referral Sources",
        subtitle: "Number of Sales"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n8" data-v-c57ee77f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "me-n3 mt-n8" }, [
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
                            value: category.title
                          }, {
                            default: withCtx(({ isSelected, toggle }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"])}" style="${ssrRenderStyle({ "block-size": "5.375rem", "inline-size": "5.75rem" })}" data-v-c57ee77f${_scopeId4}>`);
                                _push5(ssrRenderComponent(VImg, mergeProps({ ref_for: true }, category.img, { alt: "slide-img" }), null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                    style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                                    onClick: toggle
                                  }, [
                                    createVNode(VImg, mergeProps({ ref_for: true }, category.img, { alt: "slide-img" }), null, 16)
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
                              _push5(`<div class="d-flex flex-column justify-center align-center rounded-xl me-4 cursor-pointer not-selected-category" style="${ssrRenderStyle({ "block-size": "5.375rem", "inline-size": "5.75rem" })}" data-v-c57ee77f${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                rounded: "",
                                size: "30",
                                color: "default",
                                variant: "tonal"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-add-line",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-add-line",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "d-flex flex-column justify-center align-center rounded-xl me-4 cursor-pointer not-selected-category",
                                  style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                                }, [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "30",
                                    color: "default",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-add-line",
                                        size: "22"
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
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                            return createVNode(VSlideGroupItem, {
                              key: category.title,
                              value: category.title
                            }, {
                              default: withCtx(({ isSelected, toggle }) => [
                                createVNode("div", {
                                  class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                  style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                                  onClick: toggle
                                }, [
                                  createVNode(VImg, mergeProps({ ref_for: true }, category.img, { alt: "slide-img" }), null, 16)
                                ], 10, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64)),
                          createVNode(VSlideGroupItem, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "d-flex flex-column justify-center align-center rounded-xl me-4 cursor-pointer not-selected-category",
                                style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                              }, [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: "30",
                                  color: "default",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-add-line",
                                      size: "22"
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
                            value: category.title
                          }, {
                            default: withCtx(({ isSelected, toggle }) => [
                              createVNode("div", {
                                class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                                onClick: toggle
                              }, [
                                createVNode(VImg, mergeProps({ ref_for: true }, category.img, { alt: "slide-img" }), null, 16)
                              ], 10, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64)),
                        createVNode(VSlideGroupItem, null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "d-flex flex-column justify-center align-center rounded-xl me-4 cursor-pointer not-selected-category",
                              style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                            }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "30",
                                color: "default",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-add-line",
                                    size: "22"
                                  })
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
            _push2(ssrRenderComponent(VTable, { class: "text-no-wrap text-sm referral-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead data-v-c57ee77f${_scopeId2}><tr data-v-c57ee77f${_scopeId2}><th scope="col" data-v-c57ee77f${_scopeId2}> IMAGE </th><th scope="col" data-v-c57ee77f${_scopeId2}> NAME </th><th scope="col" class="text-end" data-v-c57ee77f${_scopeId2}> STATUS </th><th scope="col" class="text-end" data-v-c57ee77f${_scopeId2}> REVENUE </th><th scope="col" class="text-end" data-v-c57ee77f${_scopeId2}> CONVERSION </th></tr></thead><tbody data-v-c57ee77f${_scopeId2}><!--[-->`);
                  ssrRenderList(productData[unref(currentTab)], (currentProduct) => {
                    _push3(`<tr data-v-c57ee77f${_scopeId2}><td data-v-c57ee77f${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      rounded: "",
                      image: currentProduct.image,
                      size: "34"
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td style="${ssrRenderStyle({ "inline-size": "20vw" })}" data-v-c57ee77f${_scopeId2}>${ssrInterpolate(currentProduct.product)}</td><td class="text-end" data-v-c57ee77f${_scopeId2}>`);
                    _push3(ssrRenderComponent(VChip, {
                      text: currentProduct.status,
                      color: resolveChipColor(currentProduct.status),
                      size: "small"
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="text-end font-weight-medium" data-v-c57ee77f${_scopeId2}> $${ssrInterpolate(currentProduct.revenue)}</td><td class="font-weight-medium text-end" data-v-c57ee77f${_scopeId2}><span class="${ssrRenderClass(currentProduct.conversion > 0 ? "text-success" : "text-error")}" data-v-c57ee77f${_scopeId2}>${ssrInterpolate(currentProduct.conversion > 0 ? `+${currentProduct.conversion}%` : `${currentProduct.conversion}%`)}</span></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, " IMAGE "),
                        createVNode("th", { scope: "col" }, " NAME "),
                        createVNode("th", {
                          scope: "col",
                          class: "text-end"
                        }, " STATUS "),
                        createVNode("th", {
                          scope: "col",
                          class: "text-end"
                        }, " REVENUE "),
                        createVNode("th", {
                          scope: "col",
                          class: "text-end"
                        }, " CONVERSION ")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(productData[unref(currentTab)], (currentProduct) => {
                        return openBlock(), createBlock("tr", {
                          key: currentProduct.product
                        }, [
                          createVNode("td", null, [
                            createVNode(VAvatar, {
                              rounded: "",
                              image: currentProduct.image,
                              size: "34"
                            }, null, 8, ["image"])
                          ]),
                          createVNode("td", { style: { "inline-size": "20vw" } }, toDisplayString(currentProduct.product), 1),
                          createVNode("td", { class: "text-end" }, [
                            createVNode(VChip, {
                              text: currentProduct.status,
                              color: resolveChipColor(currentProduct.status),
                              size: "small"
                            }, null, 8, ["text", "color"])
                          ]),
                          createVNode("td", { class: "text-end font-weight-medium" }, " $" + toDisplayString(currentProduct.revenue), 1),
                          createVNode("td", { class: "font-weight-medium text-end" }, [
                            createVNode("span", {
                              class: currentProduct.conversion > 0 ? "text-success" : "text-error"
                            }, toDisplayString(currentProduct.conversion > 0 ? `+${currentProduct.conversion}%` : `${currentProduct.conversion}%`), 3)
                          ])
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
                          value: category.title
                        }, {
                          default: withCtx(({ isSelected, toggle }) => [
                            createVNode("div", {
                              class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                              style: { "block-size": "5.375rem", "inline-size": "5.75rem" },
                              onClick: toggle
                            }, [
                              createVNode(VImg, mergeProps({ ref_for: true }, category.img, { alt: "slide-img" }), null, 16)
                            ], 10, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64)),
                      createVNode(VSlideGroupItem, null, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "d-flex flex-column justify-center align-center rounded-xl me-4 cursor-pointer not-selected-category",
                            style: { "block-size": "5.375rem", "inline-size": "5.75rem" }
                          }, [
                            createVNode(VAvatar, {
                              rounded: "",
                              size: "30",
                              color: "default",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-add-line",
                                  size: "22"
                                })
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
              createVNode(VTable, { class: "text-no-wrap text-sm referral-table" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, " IMAGE "),
                      createVNode("th", { scope: "col" }, " NAME "),
                      createVNode("th", {
                        scope: "col",
                        class: "text-end"
                      }, " STATUS "),
                      createVNode("th", {
                        scope: "col",
                        class: "text-end"
                      }, " REVENUE "),
                      createVNode("th", {
                        scope: "col",
                        class: "text-end"
                      }, " CONVERSION ")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(productData[unref(currentTab)], (currentProduct) => {
                      return openBlock(), createBlock("tr", {
                        key: currentProduct.product
                      }, [
                        createVNode("td", null, [
                          createVNode(VAvatar, {
                            rounded: "",
                            image: currentProduct.image,
                            size: "34"
                          }, null, 8, ["image"])
                        ]),
                        createVNode("td", { style: { "inline-size": "20vw" } }, toDisplayString(currentProduct.product), 1),
                        createVNode("td", { class: "text-end" }, [
                          createVNode(VChip, {
                            text: currentProduct.status,
                            color: resolveChipColor(currentProduct.status),
                            size: "small"
                          }, null, 8, ["text", "color"])
                        ]),
                        createVNode("td", { class: "text-end font-weight-medium" }, " $" + toDisplayString(currentProduct.revenue), 1),
                        createVNode("td", { class: "font-weight-medium text-end" }, [
                          createVNode("span", {
                            class: currentProduct.conversion > 0 ? "text-success" : "text-error"
                          }, toDisplayString(currentProduct.conversion > 0 ? `+${currentProduct.conversion}%` : `${currentProduct.conversion}%`), 3)
                        ])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceTopReferralSources.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const EcommerceTopReferralSources = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c57ee77f"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div class="text-body-1"${_scopeId2}> Total Visits </div><div class="d-flex justify-center"${_scopeId2}><span class="text-success"${_scopeId2}>+18.2%</span>`);
              _push3(ssrRenderComponent(VIcon, {
                icon: "ri-arrow-up-s-line",
                color: "success",
                size: "20"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><h4 class="text-h4"${_scopeId2}> $42.5k </h4>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                  createVNode("div", { class: "text-body-1" }, " Total Visits "),
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode("span", { class: "text-success" }, "+18.2%"),
                    createVNode(VIcon, {
                      icon: "ri-arrow-up-s-line",
                      color: "success",
                      size: "20"
                    })
                  ])
                ]),
                createVNode("h4", { class: "text-h4" }, " $42.5k ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { cols: "5" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="d-flex align-center mb-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VAvatar, {
                            rounded: "",
                            color: "warning",
                            variant: "tonal",
                            size: 24,
                            class: "me-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, {
                                  size: "16",
                                  icon: "ri-pie-chart-2-line"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-pie-chart-2-line"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<span${_scopeId4}>Mobile</span></div><h4 class="text-h4 mb-2"${_scopeId4}> 23.5% </h4><div class="text-body-1"${_scopeId4}> 2,890 </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center mb-2" }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                color: "warning",
                                variant: "tonal",
                                size: 24,
                                class: "me-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-pie-chart-2-line"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "Mobile")
                            ]),
                            createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                            createVNode("div", { class: "text-body-1" }, " 2,890 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { cols: "2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="d-flex flex-column justify-center align-center h-100"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "mx-auto mb-2"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VAvatar, {
                            size: "28",
                            variant: "tonal",
                            class: "text-body-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` VS `);
                              } else {
                                return [
                                  createTextVNode(" VS ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "mx-auto mt-2"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                              createVNode(VDivider, {
                                vertical: "",
                                class: "mx-auto mb-2"
                              }),
                              createVNode(VAvatar, {
                                size: "28",
                                variant: "tonal",
                                class: "text-body-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" VS ")
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                vertical: "",
                                class: "mx-auto mt-2"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "5",
                      class: "text-end"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="d-flex align-center justify-end mb-2"${_scopeId4}><span class="me-2"${_scopeId4}>Desktop</span>`);
                          _push5(ssrRenderComponent(VAvatar, {
                            rounded: "sm",
                            color: "primary",
                            variant: "tonal",
                            size: 24
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, {
                                  size: "16",
                                  icon: "ri-mac-line"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-mac-line"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div><h4 class="text-h4 mb-2"${_scopeId4}> 23.5% </h4><div class="text-body-1"${_scopeId4}> 2,890 </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                              createVNode("span", { class: "me-2" }, "Desktop"),
                              createVNode(VAvatar, {
                                rounded: "sm",
                                color: "primary",
                                variant: "tonal",
                                size: 24
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-mac-line"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                            createVNode("div", { class: "text-body-1" }, " 2,890 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { cols: "5" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center mb-2" }, [
                            createVNode(VAvatar, {
                              rounded: "",
                              color: "warning",
                              variant: "tonal",
                              size: 24,
                              class: "me-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "16",
                                  icon: "ri-pie-chart-2-line"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "Mobile")
                          ]),
                          createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                          createVNode("div", { class: "text-body-1" }, " 2,890 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "2" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                            createVNode(VDivider, {
                              vertical: "",
                              class: "mx-auto mb-2"
                            }),
                            createVNode(VAvatar, {
                              size: "28",
                              variant: "tonal",
                              class: "text-body-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" VS ")
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              vertical: "",
                              class: "mx-auto mt-2"
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "5",
                        class: "text-end"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                            createVNode("span", { class: "me-2" }, "Desktop"),
                            createVNode(VAvatar, {
                              rounded: "sm",
                              color: "primary",
                              variant: "tonal",
                              size: 24
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "16",
                                  icon: "ri-mac-line"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                          createVNode("div", { class: "text-body-1" }, " 2,890 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(VProgressLinear, {
                "model-value": "25",
                color: "warning",
                "bg-color": "primary",
                "bg-opacity": "1",
                "rounded-bar": false,
                height: "8",
                rounded: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode(VRow, { "no-gutters": "" }, {
                  default: withCtx(() => [
                    createVNode(VCol, { cols: "5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center mb-2" }, [
                          createVNode(VAvatar, {
                            rounded: "",
                            color: "warning",
                            variant: "tonal",
                            size: 24,
                            class: "me-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "16",
                                icon: "ri-pie-chart-2-line"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Mobile")
                        ]),
                        createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                        createVNode("div", { class: "text-body-1" }, " 2,890 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                          createVNode(VDivider, {
                            vertical: "",
                            class: "mx-auto mb-2"
                          }),
                          createVNode(VAvatar, {
                            size: "28",
                            variant: "tonal",
                            class: "text-body-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" VS ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, {
                            vertical: "",
                            class: "mx-auto mt-2"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "5",
                      class: "text-end"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                          createVNode("span", { class: "me-2" }, "Desktop"),
                          createVNode(VAvatar, {
                            rounded: "sm",
                            color: "primary",
                            variant: "tonal",
                            size: 24
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "16",
                                icon: "ri-mac-line"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                        createVNode("div", { class: "text-body-1" }, " 2,890 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(VProgressLinear, {
                    "model-value": "25",
                    color: "warning",
                    "bg-color": "primary",
                    "bg-opacity": "1",
                    "rounded-bar": false,
                    height: "8",
                    rounded: ""
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
              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                createVNode("div", { class: "text-body-1" }, " Total Visits "),
                createVNode("div", { class: "d-flex justify-center" }, [
                  createVNode("span", { class: "text-success" }, "+18.2%"),
                  createVNode(VIcon, {
                    icon: "ri-arrow-up-s-line",
                    color: "success",
                    size: "20"
                  })
                ])
              ]),
              createVNode("h4", { class: "text-h4" }, " $42.5k ")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center mb-2" }, [
                        createVNode(VAvatar, {
                          rounded: "",
                          color: "warning",
                          variant: "tonal",
                          size: 24,
                          class: "me-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "16",
                              icon: "ri-pie-chart-2-line"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Mobile")
                      ]),
                      createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                      createVNode("div", { class: "text-body-1" }, " 2,890 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                        createVNode(VDivider, {
                          vertical: "",
                          class: "mx-auto mb-2"
                        }),
                        createVNode(VAvatar, {
                          size: "28",
                          variant: "tonal",
                          class: "text-body-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" VS ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, {
                          vertical: "",
                          class: "mx-auto mt-2"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "5",
                    class: "text-end"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                        createVNode("span", { class: "me-2" }, "Desktop"),
                        createVNode(VAvatar, {
                          rounded: "sm",
                          color: "primary",
                          variant: "tonal",
                          size: 24
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "16",
                              icon: "ri-mac-line"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                      createVNode("div", { class: "text-body-1" }, " 2,890 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-4" }, [
                createVNode(VProgressLinear, {
                  "model-value": "25",
                  color: "warning",
                  "bg-color": "primary",
                  "bg-opacity": "1",
                  "rounded-bar": false,
                  height: "8",
                  rounded: ""
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
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceTotalVisits.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const EcommerceTotalVisits = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "EcommerceUserList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedRole = ref();
    const selectedPlan = ref();
    const selectedStatus = ref();
    const itemsPerPage = ref(7);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const headers = [
      {
        title: "User",
        key: "user",
        sortable: false
      },
      {
        title: "Email",
        key: "email",
        sortable: false
      },
      {
        title: "Role",
        key: "role",
        sortable: false
      },
      {
        title: "Status",
        key: "status",
        sortable: false
      }
    ];
    const { data: usersData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/users", {
      query: {
        q: searchQuery,
        status: selectedStatus,
        plan: selectedPlan,
        role: selectedRole,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const users = computed(() => usersData.value.users);
    const totalUsers = computed(() => usersData.value.totalUsers);
    const resolveUserRoleVariant = (role) => {
      const roleLowerCase = role.toLowerCase();
      if (roleLowerCase === "subscriber")
        return {
          color: "success",
          icon: "ri-user-line"
        };
      if (roleLowerCase === "author")
        return {
          color: "error",
          icon: "ri-computer-line"
        };
      if (roleLowerCase === "maintainer")
        return {
          color: "info",
          icon: "ri-pie-chart-line"
        };
      if (roleLowerCase === "editor")
        return {
          color: "warning",
          icon: "ri-edit-box-line"
        };
      if (roleLowerCase === "admin")
        return {
          color: "primary",
          icon: "ri-vip-crown-line"
        };
      return {
        color: "success",
        icon: "ri-user-line"
      };
    };
    const resolveUserStatusVariant = (stat) => {
      const statLowerCase = stat.toLowerCase();
      if (statLowerCase === "pending")
        return "warning";
      if (statLowerCase === "active")
        return "success";
      if (statLowerCase === "inactive")
        return "secondary";
      return "primary";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTableServer, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              page: unref(page),
              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
              items: unref(users),
              "item-value": "id",
              "items-length": unref(totalUsers),
              headers,
              class: "text-no-wrap rounded-0",
              "onUpdate:options": updateOptions
            }, {
              "item.user": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    variant: !item.avatar ? "tonal" : void 0,
                    color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0,
                    class: "me-3"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (item.avatar) {
                          _push4(ssrRenderComponent(VImg, {
                            src: item.avatar
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                        }
                      } else {
                        return [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-user-view-id", params: { id: item.id } },
                    class: "text-link text-base font-weight-medium"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.fullName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.fullName), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-sm text-medium-emphasis"${_scopeId2}>@${ssrInterpolate(item.username)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        variant: !item.avatar ? "tonal" : void 0,
                        color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                        ]),
                        _: 2
                      }, 1032, ["variant", "color"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_RouterLink, {
                          to: { name: "apps-user-view-id", params: { id: item.id } },
                          class: "text-link text-base font-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.fullName), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("span", { class: "text-sm text-medium-emphasis" }, "@" + toDisplayString(item.username), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.role": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: resolveUserRoleVariant(item.role).icon,
                    color: resolveUserRoleVariant(item.role).color,
                    size: "22"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-capitalize text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.role)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-2" }, [
                      createVNode(VIcon, {
                        icon: resolveUserRoleVariant(item.role).icon,
                        color: resolveUserRoleVariant(item.role).color,
                        size: "22"
                      }, null, 8, ["icon", "color"]),
                      createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.role), 1)
                    ])
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: resolveUserStatusVariant(item.status),
                    size: "small",
                    class: "text-capitalize"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: resolveUserStatusVariant(item.status),
                      size: "small",
                      class: "text-capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                items: unref(users),
                "item-value": "id",
                "items-length": unref(totalUsers),
                headers,
                class: "text-no-wrap rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "item.user": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      variant: !item.avatar ? "tonal" : void 0,
                      color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0,
                      class: "me-3"
                    }, {
                      default: withCtx(() => [
                        item.avatar ? (openBlock(), createBlock(VImg, {
                          key: 0,
                          src: item.avatar
                        }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                      ]),
                      _: 2
                    }, 1032, ["variant", "color"]),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_RouterLink, {
                        to: { name: "apps-user-view-id", params: { id: item.id } },
                        class: "text-link text-base font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.fullName), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("span", { class: "text-sm text-medium-emphasis" }, "@" + toDisplayString(item.username), 1)
                    ])
                  ])
                ]),
                "item.role": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-2" }, [
                    createVNode(VIcon, {
                      icon: resolveUserRoleVariant(item.role).icon,
                      color: resolveUserRoleVariant(item.role).color,
                      size: "22"
                    }, null, 8, ["icon", "color"]),
                    createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.role), 1)
                  ])
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: resolveUserStatusVariant(item.status),
                    size: "small",
                    class: "text-capitalize"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                bottom: withCtx(() => []),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceUserList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "EcommerceVisitsByDay",
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
          `rgba(${hexToRgb(String(themeColors.primary))},0.1)`,
          `rgba(${hexToRgb(String(themeColors.primary))},1)`,
          `rgba(${hexToRgb(String(themeColors.primary))},0.1)`,
          `rgba(${hexToRgb(String(themeColors.primary))},1)`,
          `rgba(${hexToRgb(String(themeColors.primary))},1)`,
          `rgba(${hexToRgb(String(themeColors.primary))},0.1)`,
          `rgba(${hexToRgb(String(themeColors.primary))},0.1)`
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
        38,
        55,
        48,
        65,
        80,
        38,
        48
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$c;
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
                    height: "234",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-space-between mt-6"${_scopeId2}><div${_scopeId2}><h6 class="text-h6"${_scopeId2}> Most Visited Day </h6><div class="text-body-2"${_scopeId2}> Total 62.4k Visits on Thursday </div></div>`);
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    color: "primary",
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
                      height: "234",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode("div", { class: "d-flex align-center justify-space-between mt-6" }, [
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-h6" }, " Most Visited Day "),
                        createVNode("div", { class: "text-body-2" }, " Total 62.4k Visits on Thursday ")
                      ]),
                      createVNode(_component_IconBtn, {
                        color: "primary",
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
                    height: "234",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode("div", { class: "d-flex align-center justify-space-between mt-6" }, [
                    createVNode("div", null, [
                      createVNode("h6", { class: "text-h6" }, " Most Visited Day "),
                      createVNode("div", { class: "text-body-2" }, " Total 62.4k Visits on Thursday ")
                    ]),
                    createVNode(_component_IconBtn, {
                      color: "primary",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceVisitsByDay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "EcommerceWeeklySalesBg",
  __ssrInlineRender: true,
  setup(__props) {
    const websiteAnalytics = [
      {
        name: "Mobiles & Computers",
        slideImg: appleIphone,
        data: [
          {
            number: "24",
            text: "Mobiles"
          },
          {
            number: "12",
            text: "Tablets"
          },
          {
            number: "50",
            text: "Accessories"
          },
          {
            number: "38",
            text: "Computers"
          }
        ]
      },
      {
        name: "Appliances & Electronics",
        slideImg: ps4Joystick,
        data: [
          {
            number: "16",
            text: "Tv's"
          },
          {
            number: "40",
            text: "Speakers"
          },
          {
            number: "19",
            text: "Cameras"
          },
          {
            number: "18",
            text: "Consoles"
          }
        ]
      },
      {
        name: "Fashion",
        slideImg: appleWatch,
        data: [
          {
            number: "16",
            text: "T-shirts"
          },
          {
            number: "29",
            text: "Watches"
          },
          {
            number: "43",
            text: "Shoes"
          },
          {
            number: "17",
            text: "SubGlasses"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ color: "primary" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCarousel, {
              cycle: "",
              continuous: false,
              "show-arrows": false,
              "hide-delimiter-background": "",
              "delimiter-icon": "ri-circle-fill",
              height: "auto",
              class: "carousel-delimiter-top-end weekly-sale-carousel"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(websiteAnalytics, (item) => {
                    _push3(ssrRenderComponent(VCarouselItem, {
                      key: item.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, { class: "text-white" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Weekly Sales `);
                                    } else {
                                      return [
                                        createTextVNode(" Weekly Sales ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardSubtitle, { class: "text-white" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Total 245.8k Sales <div class="d-inline-block text-success font-weight-medium"${_scopeId5}><div class="d-flex align-center"${_scopeId5}> +62% `);
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-arrow-up-s-line" }, null, _parent6, _scopeId5));
                                      _push6(`</div></div>`);
                                    } else {
                                      return [
                                        createTextVNode(" Total 245.8k Sales "),
                                        createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createTextVNode(" +62% "),
                                            createVNode(VIcon, { icon: "ri-arrow-up-s-line" })
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, { class: "text-white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Weekly Sales ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, { class: "text-white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Total 245.8k Sales "),
                                      createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createTextVNode(" +62% "),
                                          createVNode(VIcon, { icon: "ri-arrow-up-s-line" })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        sm: "8",
                                        lg: "7",
                                        order: "2",
                                        "order-sm": "1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCol, {
                                                    cols: "12",
                                                    class: "pb-0"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<h6 class="text-h6 text-white mb-3"${_scopeId8}>${ssrInterpolate(item.name)}</h6>`);
                                                      } else {
                                                        return [
                                                          createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(item.data, (d) => {
                                                    _push8(ssrRenderComponent(VCol, {
                                                      key: d.number,
                                                      cols: "6",
                                                      class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`<div style="${ssrRenderStyle({ "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" })}" class="rounded px-2 py-1 text-body-1 font-weight-medium text-white"${_scopeId8}>${ssrInterpolate(d.number)}</div><div class="text-body-1 text-white text-truncate"${_scopeId8}>${ssrInterpolate(d.text)}</div>`);
                                                        } else {
                                                          return [
                                                            createVNode("div", {
                                                              style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                              class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                            }, toDisplayString(d.number), 1),
                                                            createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      class: "pb-0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                                      return openBlock(), createBlock(VCol, {
                                                        key: d.number,
                                                        cols: "6",
                                                        class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", {
                                                            style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                            class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                          }, toDisplayString(d.number), 1),
                                                          createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VRow, { "no-gutters": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    class: "pb-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                                    return openBlock(), createBlock(VCol, {
                                                      key: d.number,
                                                      cols: "6",
                                                      class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", {
                                                          style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                          class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                        }, toDisplayString(d.number), 1),
                                                        createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        sm: "4",
                                        lg: "5",
                                        order: "1",
                                        "order-sm": "2",
                                        class: "position-relative text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img${ssrRenderAttr("src", item.slideImg)} class="card-weekly-sales-img" style="${ssrRenderStyle({ "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" })}"${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: item.slideImg,
                                                class: "card-weekly-sales-img",
                                                style: { "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" }
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "8",
                                          lg: "7",
                                          order: "2",
                                          "order-sm": "1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  class: "pb-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                                  return openBlock(), createBlock(VCol, {
                                                    key: d.number,
                                                    cols: "6",
                                                    class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", {
                                                        style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                        class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                      }, toDisplayString(d.number), 1),
                                                      createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4",
                                          lg: "5",
                                          order: "1",
                                          "order-sm": "2",
                                          class: "position-relative text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: item.slideImg,
                                              class: "card-weekly-sales-img",
                                              style: { "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" }
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "8",
                                        lg: "7",
                                        order: "2",
                                        "order-sm": "1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                class: "pb-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                                return openBlock(), createBlock(VCol, {
                                                  key: d.number,
                                                  cols: "6",
                                                  class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", {
                                                      style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                      class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                    }, toDisplayString(d.number), 1),
                                                    createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4",
                                        lg: "5",
                                        order: "1",
                                        "order-sm": "2",
                                        class: "position-relative text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: item.slideImg,
                                            class: "card-weekly-sales-img",
                                            style: { "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" }
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardItem, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Weekly Sales ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Total 245.8k Sales "),
                                    createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createTextVNode(" +62% "),
                                        createVNode(VIcon, { icon: "ri-arrow-up-s-line" })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "8",
                                      lg: "7",
                                      order: "2",
                                      "order-sm": "1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, { "no-gutters": "" }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pb-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: d.number,
                                                cols: "6",
                                                class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", {
                                                    style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                    class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                  }, toDisplayString(d.number), 1),
                                                  createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4",
                                      lg: "5",
                                      order: "1",
                                      "order-sm": "2",
                                      class: "position-relative text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.slideImg,
                                          class: "card-weekly-sales-img",
                                          style: { "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" }
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(websiteAnalytics, (item) => {
                      return createVNode(VCarouselItem, {
                        key: item.name
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardItem, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Weekly Sales ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Total 245.8k Sales "),
                                  createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createTextVNode(" +62% "),
                                      createVNode(VIcon, { icon: "ri-arrow-up-s-line" })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "8",
                                    lg: "7",
                                    order: "2",
                                    "order-sm": "1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pb-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: d.number,
                                              cols: "6",
                                              class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                  class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                                }, toDisplayString(d.number), 1),
                                                createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4",
                                    lg: "5",
                                    order: "1",
                                    "order-sm": "2",
                                    class: "position-relative text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: item.slideImg,
                                        class: "card-weekly-sales-img",
                                        style: { "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" }
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCarousel, {
                cycle: "",
                continuous: false,
                "show-arrows": false,
                "hide-delimiter-background": "",
                "delimiter-icon": "ri-circle-fill",
                height: "auto",
                class: "carousel-delimiter-top-end weekly-sale-carousel"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(websiteAnalytics, (item) => {
                    return createVNode(VCarouselItem, {
                      key: item.name
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode(" Weekly Sales ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode(" Total 245.8k Sales "),
                                createVNode("div", { class: "d-inline-block text-success font-weight-medium" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createTextVNode(" +62% "),
                                    createVNode(VIcon, { icon: "ri-arrow-up-s-line" })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "8",
                                  lg: "7",
                                  order: "2",
                                  "order-sm": "1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pb-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6 text-white mb-3" }, toDisplayString(item.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (d) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: d.number,
                                            cols: "6",
                                            class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                style: { "background-color": "rgba(var(--v-theme-primary-darken-1))", "block-size": "30px", "inline-size": "34px" },
                                                class: "rounded px-2 py-1 text-body-1 font-weight-medium text-white"
                                              }, toDisplayString(d.number), 1),
                                              createVNode("div", { class: "text-body-1 text-white text-truncate" }, toDisplayString(d.text), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4",
                                  lg: "5",
                                  order: "1",
                                  "order-sm": "2",
                                  class: "position-relative text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: item.slideImg,
                                      class: "card-weekly-sales-img",
                                      style: { "filter": "drop-shadow(0 4px 40px rgba(0, 0, 0, 40%))" }
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/dashboards/ecommerce/EcommerceWeeklySalesBg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ecommerce",
  __ssrInlineRender: true,
  setup(__props) {
    const statisticsWithImages = [
      {
        title: "Ratings",
        subtitle: "Year of 2021",
        stats: "8.14k",
        change: 15.6,
        image: illustration1,
        imgWidth: 99,
        color: "primary"
      },
      {
        title: "Sessions",
        subtitle: "Last Month",
        stats: "12.2k",
        change: -25.5,
        image: illustration2,
        imgWidth: 85,
        color: "success"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardStatisticsWithImages = _sfc_main$d;
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(statisticsWithImages, (statistics) => {
              _push2(ssrRenderComponent(VCol, {
                key: statistics.title,
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardStatisticsWithImages, mergeProps({ ref_for: true }, statistics), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardStatisticsWithImages, mergeProps({ ref_for: true }, statistics), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
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
              md: "3",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(EcommerceTotalVisits, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(EcommerceTotalVisits)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "3",
              sm: "6"
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
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(EcommerceTopReferralSources, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(EcommerceTopReferralSources)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "3",
              sm: "4",
              "order-md": "1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(EcommerceOrdersImpressions, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(EcommerceOrdersImpressions)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "5",
              sm: "12",
              "order-md": "2",
              order: "3"
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
              md: "4",
              sm: "8",
              "order-md": "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              order: "4"
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
              md: "4",
              order: "5"
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
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Fragment, null, renderList(statisticsWithImages, (statistics) => {
                return createVNode(VCol, {
                  key: statistics.title,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardStatisticsWithImages, mergeProps({ ref_for: true }, statistics), null, 16)
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(EcommerceTotalVisits)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(EcommerceTopReferralSources)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3",
                sm: "4",
                "order-md": "1"
              }, {
                default: withCtx(() => [
                  createVNode(EcommerceOrdersImpressions)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "5",
                sm: "12",
                "order-md": "2",
                order: "3"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "8",
                "order-md": "3"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8",
                order: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                order: "5"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/dashboards/ecommerce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
