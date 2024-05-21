import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, computed, openBlock, createBlock, Fragment, renderList, toDisplayString, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { c as avatar1, d as avatar2, e as avatar3, l as useTheme, k as useDisplay, O as hexToRgb, a as VIcon, _ as _export_sfc, V as VBtn } from "../ssr.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import __unplugin_components_0 from "vue3-apexcharts";
import { _ as _sfc_main$f } from "./MoreBtn-CtW8Gck8.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { C as Cellphone, A as AwesomeIcon, a as CleaningServiceIcon } from "./cleaning-service-icon-yq9XXZex.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
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
/* empty css               */
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main$e = {
  __name: "CardWidgetsActivityTimeline",
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsActivityTimeline.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const headingColor = "rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))";
const labelColor = "rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))";
const _sfc_main$d = {
  __name: "CardWidgetsDeliveryExceptions",
  __ssrInlineRender: true,
  setup(__props) {
    const chartColors = {
      donut: {
        series1: "#72E128",
        series2: "#8EE753",
        series3: "#AAED7E",
        series4: "#C7F3A9"
      }
    };
    const deliveryExceptionsChartSeries = [
      13,
      25,
      22,
      40
    ];
    const deliveryExceptionsChartConfig = {
      labels: [
        "Incorrect address",
        "Weather conditions",
        "Federal Holidays",
        "Damage during transit"
      ],
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series2,
        chartColors.donut.series3,
        chartColors.donut.series4
      ],
      stroke: { width: 0 },
      dataLabels: {
        enabled: false,
        formatter(val) {
          return `${Number.parseInt(val)}%`;
        }
      },
      legend: {
        show: true,
        position: "bottom",
        offsetY: 10,
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        },
        fontSize: "13px",
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        }
      },
      tooltip: { theme: false },
      grid: { padding: { top: 15 } },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              value: {
                fontSize: "24px",
                color: headingColor,
                fontWeight: 500,
                offsetY: -23,
                formatter(val) {
                  return `${Number.parseInt(val)}%`;
                }
              },
              name: { offsetY: 22 },
              total: {
                show: true,
                fontSize: "1rem",
                label: "AVG. Exceptions",
                color: labelColor,
                formatter() {
                  return "30%";
                }
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 420,
        options: { chart: { height: 400 } }
      }]
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
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Delivery exceptions" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { "menu-list": moreList })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "donut",
                    height: "428",
                    options: deliveryExceptionsChartConfig,
                    series: deliveryExceptionsChartSeries
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "donut",
                      height: "428",
                      options: deliveryExceptionsChartConfig,
                      series: deliveryExceptionsChartSeries
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { title: "Delivery exceptions" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "donut",
                    height: "428",
                    options: deliveryExceptionsChartConfig,
                    series: deliveryExceptionsChartSeries
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsDeliveryExceptions.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "CardWidgetsExternalLinks",
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
    const display = useDisplay();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const borderColor2 = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
      return {
        chart: {
          stacked: true,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "40%",
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "all"
          }
        },
        xaxis: {
          labels: { show: false },
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
          ]
        },
        yaxis: { show: false },
        colors: [
          `rgba(${hexToRgb(String(themeColors.primary))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.secondary))}, 1)`
        ],
        grid: {
          strokeDashArray: 10,
          borderColor: borderColor2,
          padding: {
            top: -12,
            left: -4,
            right: -5,
            bottom: -14
          }
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: {
          width: 6,
          curve: "smooth",
          lineCap: "round",
          colors: ["rgba(var(--v-theme-surface), 1)"]
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        responsive: [
          {
            breakpoint: display.thresholds.value.xl,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "40%",
                  borderRadius: 8
                }
              }
            }
          },
          {
            breakpoint: 1550,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "50%",
                  borderRadius: 8
                }
              }
            }
          },
          {
            breakpoint: display.thresholds.value.lg,
            options: { plotOptions: { bar: { columnWidth: "50%" } } }
          },
          {
            breakpoint: 690,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "60%",
                  borderRadius: 8
                }
              }
            }
          },
          {
            breakpoint: display.thresholds.value.sm,
            options: { plotOptions: { bar: { columnWidth: "35%" } } }
          },
          {
            breakpoint: 450,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "50%",
                  borderRadius: 8
                }
              }
            }
          }
        ]
      };
    });
    const series = [
      {
        name: "Google Analytics",
        data: [
          155,
          135,
          320,
          100,
          150,
          335,
          160
        ]
      },
      {
        name: "Facebook Ads",
        data: [
          110,
          235,
          125,
          230,
          215,
          115,
          200
        ]
      }
    ];
    const externalLinks = [
      {
        amount: "$845k",
        trendAmount: 82,
        color: "primary",
        title: "Google Analytics",
        icon: "ri-arrow-up-s-line"
      },
      {
        trendAmount: 52,
        amount: "$12.5k",
        color: "secondary",
        title: "Facebook Ads",
        icon: "ri-arrow-down-s-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "External Links" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-n2 me-n3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-n2 me-n3" }, [
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
                    height: "213",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTable, { class: "text-no-wrap mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(externalLinks, (link) => {
                          _push4(`<tr${_scopeId3}><td class="d-flex align-center border-0 gap-2 ps-0" style="${ssrRenderStyle({ "block-size": "33px" })}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-circle-fill",
                            color: link.color,
                            size: "14"
                          }, null, _parent4, _scopeId3));
                          _push4(`<h6 class="text-sm font-weight-medium"${_scopeId3}>${ssrInterpolate(link.title)}</h6></td><td class="border-0" style="${ssrRenderStyle({ "block-size": "33px" })}"${_scopeId3}><div class="text-body-2"${_scopeId3}>${ssrInterpolate(link.amount)}</div></td><td class="text-no-wrap border-0 pe-0" style="${ssrRenderStyle({ "block-size": "33px", "inline-size": "1rem" })}"${_scopeId3}><div class="text-sm font-weight-medium text-high-emphasis d-flex align-center gap-x-2"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(link.trendAmount)}% </div>`);
                          _push4(ssrRenderComponent(VIcon, {
                            size: "24",
                            color: link.trendAmount > 59 ? "success" : "error",
                            icon: link.trendAmount > 59 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(externalLinks, (link) => {
                              return createVNode("tr", {
                                key: link.title
                              }, [
                                createVNode("td", {
                                  class: "d-flex align-center border-0 gap-2 ps-0",
                                  style: { "block-size": "33px" }
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-circle-fill",
                                    color: link.color,
                                    size: "14"
                                  }, null, 8, ["color"]),
                                  createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(link.title), 1)
                                ]),
                                createVNode("td", {
                                  class: "border-0",
                                  style: { "block-size": "33px" }
                                }, [
                                  createVNode("div", { class: "text-body-2" }, toDisplayString(link.amount), 1)
                                ]),
                                createVNode("td", {
                                  class: "text-no-wrap border-0 pe-0",
                                  style: { "block-size": "33px", "inline-size": "1rem" }
                                }, [
                                  createVNode("div", { class: "text-sm font-weight-medium text-high-emphasis d-flex align-center gap-x-2" }, [
                                    createVNode("div", null, toDisplayString(link.trendAmount) + "% ", 1),
                                    createVNode(VIcon, {
                                      size: "24",
                                      color: link.trendAmount > 59 ? "success" : "error",
                                      icon: link.trendAmount > 59 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                    }, null, 8, ["color", "icon"])
                                  ])
                                ])
                              ]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      height: "213",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode(VTable, { class: "text-no-wrap mt-4" }, {
                      default: withCtx(() => [
                        createVNode("tbody", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(externalLinks, (link) => {
                            return createVNode("tr", {
                              key: link.title
                            }, [
                              createVNode("td", {
                                class: "d-flex align-center border-0 gap-2 ps-0",
                                style: { "block-size": "33px" }
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: link.color,
                                  size: "14"
                                }, null, 8, ["color"]),
                                createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(link.title), 1)
                              ]),
                              createVNode("td", {
                                class: "border-0",
                                style: { "block-size": "33px" }
                              }, [
                                createVNode("div", { class: "text-body-2" }, toDisplayString(link.amount), 1)
                              ]),
                              createVNode("td", {
                                class: "text-no-wrap border-0 pe-0",
                                style: { "block-size": "33px", "inline-size": "1rem" }
                              }, [
                                createVNode("div", { class: "text-sm font-weight-medium text-high-emphasis d-flex align-center gap-x-2" }, [
                                  createVNode("div", null, toDisplayString(link.trendAmount) + "% ", 1),
                                  createVNode(VIcon, {
                                    size: "24",
                                    color: link.trendAmount > 59 ? "success" : "error",
                                    icon: link.trendAmount > 59 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                  }, null, 8, ["color", "icon"])
                                ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    height: "213",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode(VTable, { class: "text-no-wrap mt-4" }, {
                    default: withCtx(() => [
                      createVNode("tbody", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(externalLinks, (link) => {
                          return createVNode("tr", {
                            key: link.title
                          }, [
                            createVNode("td", {
                              class: "d-flex align-center border-0 gap-2 ps-0",
                              style: { "block-size": "33px" }
                            }, [
                              createVNode(VIcon, {
                                icon: "ri-circle-fill",
                                color: link.color,
                                size: "14"
                              }, null, 8, ["color"]),
                              createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(link.title), 1)
                            ]),
                            createVNode("td", {
                              class: "border-0",
                              style: { "block-size": "33px" }
                            }, [
                              createVNode("div", { class: "text-body-2" }, toDisplayString(link.amount), 1)
                            ]),
                            createVNode("td", {
                              class: "text-no-wrap border-0 pe-0",
                              style: { "block-size": "33px", "inline-size": "1rem" }
                            }, [
                              createVNode("div", { class: "text-sm font-weight-medium text-high-emphasis d-flex align-center gap-x-2" }, [
                                createVNode("div", null, toDisplayString(link.trendAmount) + "% ", 1),
                                createVNode(VIcon, {
                                  size: "24",
                                  color: link.trendAmount > 59 ? "success" : "error",
                                  icon: link.trendAmount > 59 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                }, null, 8, ["color", "icon"])
                              ])
                            ])
                          ]);
                        }), 64))
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
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsExternalLinks.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "CardWidgetsMonthlyBudget",
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
      return {
        chart: {
          offsetY: -8,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
        stroke: {
          width: 5,
          curve: "smooth"
        },
        grid: {
          show: false,
          padding: {
            left: 10,
            top: -24,
            right: 12
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityTo: 0.7,
            opacityFrom: 0.5,
            shadeIntensity: 1,
            stops: [
              0,
              90,
              100
            ],
            colorStops: [[
              {
                offset: 0,
                opacity: 0.6,
                color: themeColors.success
              },
              {
                offset: 100,
                opacity: 0.1,
                color: "rgba(var(--v-theme-surface), 1)"
              }
            ]]
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 1,
            color: themeColors.success
          }
        },
        xaxis: {
          type: "numeric",
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { show: false },
        markers: {
          size: 1,
          offsetY: 1,
          offsetX: -5,
          strokeWidth: 4,
          strokeOpacity: 1,
          colors: ["transparent"],
          strokeColors: "transparent",
          discrete: [{
            size: 7,
            seriesIndex: 0,
            dataPointIndex: 7,
            strokeColor: themeColors.success,
            fillColor: "rgba(var(--v-theme-surface), 1)"
          }]
        }
      };
    });
    const series = [{
      name: "Traffic Rate",
      data: [
        0,
        85,
        25,
        125,
        90,
        250,
        200,
        350
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Monthly Budget" }, _attrs), {
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
                    type: "area",
                    height: "200",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="mb-0"${_scopeId2}> Last month you had $2.42 expense transactions, 12 savings entries and 4 bills. </p>`);
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "area",
                      height: "200",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode("p", { class: "mb-0" }, " Last month you had $2.42 expense transactions, 12 savings entries and 4 bills. ")
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
                    type: "area",
                    height: "200",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode("p", { class: "mb-0" }, " Last month you had $2.42 expense transactions, 12 savings entries and 4 bills. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsMonthlyBudget.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "CardWidgetsOrganicSessions",
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
      const primaryText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["high-emphasis-opacity"]})`;
      return {
        chart: { sparkline: { enabled: true } },
        colors: [
          `rgba(${hexToRgb(String(themeColors.warning))},1)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.8)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.6)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.4)`,
          `rgba(${hexToRgb(String(themeColors.warning))},0.2)`
        ],
        legend: { show: false },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
        stroke: {
          width: 3,
          lineCap: "round",
          colors: ["rgba(var(--v-theme-surface), 1)"]
        },
        labels: [
          "USA",
          "India",
          "Canada",
          "Japan",
          "France"
        ],
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        plotOptions: {
          pie: {
            endAngle: 130,
            startAngle: -130,
            customScale: 0.9,
            donut: {
              size: "83%",
              labels: {
                show: true,
                name: {
                  offsetY: 25,
                  fontSize: "0.9375rem",
                  color: secondaryText
                },
                value: {
                  offsetY: -15,
                  fontWeight: 500,
                  fontSize: "1.75rem",
                  lineHeight: 1.5,
                  formatter: (value) => `${value}k`,
                  color: primaryText
                },
                total: {
                  show: true,
                  label: "2022",
                  fontSize: "0.9375rem",
                  color: secondaryText,
                  formatter: (value) => `${value.globals.seriesTotals.reduce((total, num) => total + num)}k`
                }
              }
            }
          }
        },
        responsive: [{
          breakpoint: 1709,
          options: { chart: { height: 270 } }
        }]
      };
    });
    const series = [
      13,
      18,
      18,
      24,
      16
    ];
    const customChartLegends = [
      {
        title: "USA",
        opacity: 1
      },
      {
        title: "India",
        opacity: 0.8
      },
      {
        title: "Canada",
        opacity: 0.6
      },
      {
        title: "Japan",
        opacity: 0.4
      },
      {
        title: "France",
        opacity: 0.2
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Organic Sessions" }, _attrs), {
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
                    type: "donut",
                    height: "290",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-center flex-wrap gap-x-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(customChartLegends, (legend) => {
                    _push3(`<div class="d-flex align-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "ri-circle-fill",
                      size: "10",
                      color: "warning"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${ssrInterpolate(legend.title)}</span></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "donut",
                      height: "290",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode("div", { class: "d-flex align-center justify-center flex-wrap gap-x-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(customChartLegends, (legend) => {
                        return createVNode("div", {
                          key: legend.title,
                          class: "d-flex align-center gap-1"
                        }, [
                          createVNode(VIcon, {
                            icon: "ri-circle-fill",
                            size: "10",
                            color: "warning"
                          }),
                          createVNode("span", null, toDisplayString(legend.title), 1)
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "donut",
                    height: "290",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode("div", { class: "d-flex align-center justify-center flex-wrap gap-x-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(customChartLegends, (legend) => {
                      return createVNode("div", {
                        key: legend.title,
                        class: "d-flex align-center gap-1"
                      }, [
                        createVNode(VIcon, {
                          icon: "ri-circle-fill",
                          size: "10",
                          color: "warning"
                        }),
                        createVNode("span", null, toDisplayString(legend.title), 1)
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsOrganicSessions.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "CardWidgetsPerformance",
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
      const borderColor2 = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
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
            size: 110,
            polygons: {
              strokeColors: borderColor2,
              connectorColors: borderColor2
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
      const _component_MoreBtn = _sfc_main$f;
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
                    height: "294",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "radar",
                      height: "294",
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
                    height: "294",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsPerformance.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "CardWidgetsPerformanceOverview",
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
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        stroke: { curve: "stepline" },
        tooltip: { enabled: false },
        colors: [`rgba(${hexToRgb(String(themeColors.warning))}, 1)`],
        grid: { yaxis: { lines: { show: false } } },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { labels: { show: false } }
      };
    });
    const series = [{
      data: [
        7,
        65,
        40,
        7,
        40,
        80,
        45,
        65,
        65
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Performance Overview" }, _attrs), {
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
                    type: "line",
                    height: "202",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-center gap-2 mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-circle-fill",
                    size: "10",
                    color: "warning"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-disabled"${_scopeId2}>Average cost per interaction is $5.65</span></div>`);
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      height: "202",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode("div", { class: "d-flex align-center justify-center gap-2 mt-2" }, [
                      createVNode(VIcon, {
                        icon: "ri-circle-fill",
                        size: "10",
                        color: "warning"
                      }),
                      createVNode("span", { class: "text-disabled" }, "Average cost per interaction is $5.65")
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
                    type: "line",
                    height: "202",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode("div", { class: "d-flex align-center justify-center gap-2 mt-2" }, [
                    createVNode(VIcon, {
                      icon: "ri-circle-fill",
                      size: "10",
                      color: "warning"
                    }),
                    createVNode("span", { class: "text-disabled" }, "Average cost per interaction is $5.65")
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsPerformanceOverview.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CardWidgetsProjectTimeline",
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
    const projects = [
      {
        img: Cellphone,
        color: "primary",
        title: "IOS Application",
        task: "840/2.5k"
      },
      {
        img: AwesomeIcon,
        color: "success",
        title: "Web Application",
        task: "99/1.42k"
      },
      {
        img: CleaningServiceIcon,
        color: "info",
        title: "UI Kit Design",
        task: "120/350"
      }
    ];
    const labels = [
      "Development Apps",
      "UI Design",
      "IOS Application",
      "Web App Wireframing",
      "Prototyping"
    ];
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => {
      const themeColors = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const borderColor2 = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      const secondaryText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["medium-emphasis-opacity"]})`;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        plotOptions: {
          bar: {
            barHeight: "60%",
            horizontal: true,
            borderRadius: 12,
            distributed: true,
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "last",
            dataLabels: { hideOverflowingLabels: false }
          }
        },
        stroke: {
          width: -0.5,
          colors: ["rgba(var(--v-theme-surface), 1)"]
        },
        colors: [
          `rgba(${hexToRgb(String(themeColors.primary))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.success))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.secondary))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.info))}, 1)`,
          `rgba(${hexToRgb(String(themeColors.warning))}, 1)`
        ],
        dataLabels: {
          enabled: true,
          style: { fontWeight: 500 },
          formatter: (val, opts) => labels[opts.dataPointIndex]
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        legend: { show: false },
        grid: {
          strokeDashArray: 6,
          borderColor: borderColor2,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: {
            top: -32,
            left: 15,
            right: 18,
            bottom: 4
          }
        },
        xaxis: {
          type: "datetime",
          axisTicks: { show: false },
          axisBorder: { show: false },
          labels: {
            style: { colors: disabledText },
            datetimeFormatter: {
              year: "MMM",
              month: "MMM"
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              fontSize: "0.8125rem",
              colors: secondaryText
            }
          }
        },
        responsive: [{
          breakpoint: 500,
          options: {
            yaxis: { labels: { show: false } },
            grid: {
              padding: {
                top: -22,
                left: 0,
                right: -18,
                bottom: 4
              }
            }
          }
        }]
      };
    });
    const series = [{
      data: [
        {
          x: "Catherine",
          y: [
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-01-01`)).getTime(),
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-05-02`)).getTime()
          ]
        },
        {
          x: "Janelle",
          y: [
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-02-18`)).getTime(),
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-05-30`)).getTime()
          ]
        },
        {
          x: "Wellington",
          y: [
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-02-07`)).getTime(),
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-05-31`)).getTime()
          ]
        },
        {
          x: "Blake",
          y: [
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-01-14`)).getTime(),
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-06-30`)).getTime()
          ]
        },
        {
          x: "Quinn",
          y: [
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-04-01`)).getTime(),
            (/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-07-31`)).getTime()
          ]
        }
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      const _component_MoreBtn = _sfc_main$f;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8",
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
                                    _push6(`Project Timeline`);
                                  } else {
                                    return [
                                      createTextVNode("Project Timeline")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Total 840 Task Completed`);
                                  } else {
                                    return [
                                      createTextVNode("Total 840 Task Completed")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Project Timeline")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Total 840 Task Completed")
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
                                type: "rangeBar",
                                height: "240",
                                options: unref(chartConfig),
                                series
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VueApexCharts, {
                                  type: "rangeBar",
                                  height: "240",
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
                                  createTextVNode("Project Timeline")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Total 840 Task Completed")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_VueApexCharts, {
                                type: "rangeBar",
                                height: "240",
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
                    sm: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mt-n8 me-n4" data-v-c9596f68${_scopeId4}>`);
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
                                    _push6(`Project List`);
                                  } else {
                                    return [
                                      createTextVNode("Project List")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`3 Ongoing Projects`);
                                  } else {
                                    return [
                                      createTextVNode("3 Ongoing Projects")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Project List")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("3 Ongoing Projects")
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
                              _push5(ssrRenderComponent(VList, { class: "card-list mt-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(projects, (project) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: project.title
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              rounded: "",
                                              variant: "tonal",
                                              size: "40",
                                              color: project.color
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<img${ssrRenderAttr("src", project.img)} data-v-c9596f68${_scopeId7}>`);
                                                } else {
                                                  return [
                                                    createVNode("img", {
                                                      src: project.img
                                                    }, null, 8, ["src"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                rounded: "",
                                                variant: "tonal",
                                                size: "40",
                                                color: project.color
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: project.img
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(project.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(project.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Task ${ssrInterpolate(project.task)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(" Task " + toDisplayString(project.task), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(project.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Task " + toDisplayString(project.task), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                                        return createVNode(VListItem, {
                                          key: project.title
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              rounded: "",
                                              variant: "tonal",
                                              size: "40",
                                              color: project.color
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: project.img
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(project.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" Task " + toDisplayString(project.task), 1)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "card-list mt-4" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                                      return createVNode(VListItem, {
                                        key: project.title
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            rounded: "",
                                            variant: "tonal",
                                            size: "40",
                                            color: project.color
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: project.img
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(project.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Task " + toDisplayString(project.task), 1)
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
                                  createTextVNode("Project List")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("3 Ongoing Projects")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list mt-4" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                                    return createVNode(VListItem, {
                                      key: project.title
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          rounded: "",
                                          variant: "tonal",
                                          size: "40",
                                          color: project.color
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: project.img
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(project.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Task " + toDisplayString(project.task), 1)
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
                      sm: "8",
                      class: _ctx.$vuetify.display.xs ? "border-b" : "border-e"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Project Timeline")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Total 840 Task Completed")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_VueApexCharts, {
                              type: "rangeBar",
                              height: "240",
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
                      sm: "4"
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
                                createTextVNode("Project List")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("3 Ongoing Projects")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list mt-4" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                                  return createVNode(VListItem, {
                                    key: project.title
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        rounded: "",
                                        variant: "tonal",
                                        size: "40",
                                        color: project.color
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: project.img
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(project.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Task " + toDisplayString(project.task), 1)
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
                    sm: "8",
                    class: _ctx.$vuetify.display.xs ? "border-b" : "border-e"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Project Timeline")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Total 840 Task Completed")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_VueApexCharts, {
                            type: "rangeBar",
                            height: "240",
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
                    sm: "4"
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
                              createTextVNode("Project List")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("3 Ongoing Projects")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "card-list mt-4" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                                return createVNode(VListItem, {
                                  key: project.title
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      rounded: "",
                                      variant: "tonal",
                                      size: "40",
                                      color: project.color
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: project.img
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(project.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Task " + toDisplayString(project.task), 1)
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsProjectTimeline.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const CardWidgetsProjectTimeline = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-c9596f68"]]);
const _sfc_main$6 = {
  __name: "CardWidgetsSalesCountry",
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
      const borderColor2 = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
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
          borderColor: borderColor2,
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
      const _component_MoreBtn = _sfc_main$f;
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
              type: "bar",
              height: "294",
              options: unref(chartConfig),
              series
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VueApexCharts, {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsSalesCountry.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "CardWidgetsTotalTransactions",
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
      const borderColor2 = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
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
          borderColor: borderColor2,
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
      const _component_MoreBtn = _sfc_main$f;
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
                                height: "240",
                                options: unref(chartConfig),
                                series
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VueApexCharts, {
                                  id: "total-transactions-chart",
                                  type: "bar",
                                  height: "240",
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
                                height: "240",
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
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCardText, null, {
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
                        _push4(`</div>`);
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
                          createVNode("div", null, [
                            createVNode(VCardText, null, {
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
                          ])
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
                              height: "240",
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
                        createVNode("div", null, [
                          createVNode(VCardText, null, {
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
                            height: "240",
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
                      createVNode("div", null, [
                        createVNode(VCardText, null, {
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
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsTotalTransactions.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "CardWidgetsVisitsByDay",
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
      const _component_MoreBtn = _sfc_main$f;
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsVisitsByDay.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CardWidgetsWeeklyOverview",
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
      const borderColor2 = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`;
      const disabledText = `rgba(${hexToRgb(String(themeColors["on-background"]))},${variableTheme["disabled-opacity"]})`;
      return {
        chart: {
          offsetY: -9,
          offsetX: -16,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        plotOptions: {
          bar: {
            borderRadius: 9,
            columnWidth: "50%",
            endingShape: "rounded",
            startingShape: "rounded",
            colors: {
              ranges: [{
                to: 50,
                from: 40,
                color: `rgba(${hexToRgb(String(themeColors.primary))}, 1)`
              }]
            }
          }
        },
        markers: {
          size: 3.5,
          strokeWidth: 2,
          fillOpacity: 1,
          strokeOpacity: 1,
          colors: ["rgba(var(--v-theme-surface),1)"],
          strokeColors: `rgba(${hexToRgb(String(themeColors.primary))}, 1)`
        },
        stroke: {
          width: [
            0,
            2
          ],
          colors: [
            themeColors["grey-100"],
            themeColors.primary
          ]
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        colors: [`rgba(${hexToRgb(String(themeColors["grey-100"]))}, 1)`],
        grid: {
          strokeDashArray: 7,
          borderColor: borderColor2
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        xaxis: {
          categories: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          tickPlacement: "on",
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: {
          min: 0,
          max: 90,
          show: true,
          tickAmount: 3,
          labels: {
            formatter: (value) => `${value > 999 ? `${(value / 1e3).toFixed(0)}` : value}k`,
            style: {
              fontSize: "0.75rem",
              colors: disabledText
            }
          }
        }
      };
    });
    const series = [
      {
        name: "Sales",
        type: "column",
        data: [
          83,
          68,
          56,
          65,
          65,
          50,
          39
        ]
      },
      {
        type: "line",
        name: "Sales",
        data: [
          63,
          38,
          31,
          45,
          46,
          27,
          18
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Weekly Overview" }, _attrs), {
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
                    type: "line",
                    height: "208",
                    options: unref(chartConfig),
                    series
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center gap-4 mb-6"${_scopeId2}><h4 class="text-h4"${_scopeId2}> 62% </h4><p class="mb-0"${_scopeId2}> Your sales performance is 35% 😎 better compared to last month </p></div>`);
                  _push3(ssrRenderComponent(VBtn, { block: "" }, {
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
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      height: "208",
                      options: unref(chartConfig),
                      series
                    }, null, 8, ["options"]),
                    createVNode("div", { class: "d-flex align-center gap-4 mb-6" }, [
                      createVNode("h4", { class: "text-h4" }, " 62% "),
                      createVNode("p", { class: "mb-0" }, " Your sales performance is 35% 😎 better compared to last month ")
                    ]),
                    createVNode(VBtn, { block: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Details ")
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
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    height: "208",
                    options: unref(chartConfig),
                    series
                  }, null, 8, ["options"]),
                  createVNode("div", { class: "d-flex align-center gap-4 mb-6" }, [
                    createVNode("h4", { class: "text-h4" }, " 62% "),
                    createVNode("p", { class: "mb-0" }, " Your sales performance is 35% 😎 better compared to last month ")
                  ]),
                  createVNode(VBtn, { block: "" }, {
                    default: withCtx(() => [
                      createTextVNode(" Details ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsWeeklyOverview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CardWidgetsWeeklySales",
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
      const _component_MoreBtn = _sfc_main$f;
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
                  _push3(ssrRenderComponent(VRow, { class: "mb-2" }, {
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
                    createVNode(VRow, { class: "mb-2" }, {
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
                  createVNode(VRow, { class: "mb-2" }, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/CardWidgetsWeeklySales.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const borderColor = "rgba(var(--v-border-color), var(--v-border-opacity))";
const _sfc_main$1 = {
  __name: "cardWidgetsInterestedTopics",
  __ssrInlineRender: true,
  setup(__props) {
    const topicsChartConfig = {
      chart: {
        height: 270,
        type: "bar",
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "70%",
          distributed: true,
          borderRadius: 7,
          borderRadiusApplication: "end"
        }
      },
      colors: [
        "rgba(var(--v-theme-primary),1)",
        "rgba(var(--v-theme-info),1)",
        "rgba(var(--v-theme-success),1)",
        "rgba(var(--v-theme-secondary),1)",
        "rgba(var(--v-theme-error),1)",
        "rgba(var(--v-theme-warning),1)"
      ],
      grid: {
        borderColor,
        strokeDashArray: 10,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -35,
          bottom: -12
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"],
          fontWeight: 500,
          fontSize: "13px"
        },
        offsetX: 0,
        dropShadow: { enabled: false },
        formatter(val, opt) {
          return topicsChartConfig.labels[opt.dataPointIndex];
        }
      },
      labels: [
        "UI Design",
        "UX Design",
        "Music",
        "Animation",
        "Vue",
        "SEO"
      ],
      xaxis: {
        categories: [
          "6",
          "5",
          "4",
          "3",
          "2",
          "1"
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: "rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",
            fontSize: "13px"
          },
          formatter(val) {
            return `${val}%`;
          }
        }
      },
      yaxis: {
        max: 35,
        labels: {
          style: {
            colors: "rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",
            fontSize: "13px"
          }
        }
      },
      tooltip: {
        enabled: true,
        style: { fontSize: "12px" },
        onDatasetHover: { highlightDataSeries: false }
      },
      legend: { show: false }
    };
    const topicsChartSeries = [{
      data: [
        35,
        20,
        14,
        12,
        10,
        9
      ]
    }];
    const topicsData = [
      {
        title: "UI Design",
        value: 35,
        color: "primary"
      },
      {
        title: "UX Design",
        value: 20,
        color: "info"
      },
      {
        title: "Music",
        value: 14,
        color: "success"
      }
    ];
    const moreTopics = [
      {
        title: "Animation",
        value: 12,
        color: "secondary"
      },
      {
        title: "Vue",
        value: 10,
        color: "error"
      },
      {
        title: "SEO",
        value: 9,
        color: "warning"
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
      const _component_MoreBtn = _sfc_main$f;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Topic you are interested in" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { "menu-list": moreList })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VueApexCharts, {
                                type: "bar",
                                height: "268",
                                options: topicsChartConfig,
                                series: topicsChartSeries,
                                class: "mb-md-0 mb-6"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VueApexCharts, {
                                  type: "bar",
                                  height: "268",
                                  options: topicsChartConfig,
                                  series: topicsChartSeries,
                                  class: "mb-md-0 mb-6"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { class: "d-flex justify-space-around align-start" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column gap-y-12"${_scopeId4}><!--[-->`);
                              ssrRenderList(topicsData, (topic) => {
                                _push5(`<div class="d-flex gap-x-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div class="text-body-1" style="${ssrRenderStyle({ "min-inline-size": "90px" })}"${_scopeId4}>${ssrInterpolate(topic.title)}</div><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(topic.value)}% </h5></div></div>`);
                              });
                              _push5(`<!--]--></div><div class="d-flex flex-column gap-y-12"${_scopeId4}><!--[-->`);
                              ssrRenderList(moreTopics, (topic) => {
                                _push5(`<div class="d-flex gap-x-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div class="text-body-1" style="${ssrRenderStyle({ "min-inline-size": "90px" })}"${_scopeId4}>${ssrInterpolate(topic.title)}</div><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(topic.value)}% </h5></div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                                    return createVNode("div", {
                                      key: topic.title,
                                      class: "d-flex gap-x-2"
                                    }, [
                                      createVNode(VIcon, {
                                        icon: "ri-circle-fill",
                                        color: topic.color,
                                        size: "12",
                                        class: "mt-1"
                                      }, null, 8, ["color"]),
                                      createVNode("div", null, [
                                        createVNode("div", {
                                          class: "text-body-1",
                                          style: { "min-inline-size": "90px" }
                                        }, toDisplayString(topic.title), 1),
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                      ])
                                    ]);
                                  }), 64))
                                ]),
                                createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                                    return createVNode("div", {
                                      key: topic.title,
                                      class: "d-flex gap-x-2"
                                    }, [
                                      createVNode(VIcon, {
                                        icon: "ri-circle-fill",
                                        color: topic.color,
                                        size: "12",
                                        class: "mt-1"
                                      }, null, 8, ["color"]),
                                      createVNode("div", null, [
                                        createVNode("div", {
                                          class: "text-body-1",
                                          style: { "min-inline-size": "90px" }
                                        }, toDisplayString(topic.title), 1),
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                      ])
                                    ]);
                                  }), 64))
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
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VueApexCharts, {
                                type: "bar",
                                height: "268",
                                options: topicsChartConfig,
                                series: topicsChartSeries,
                                class: "mb-md-0 mb-6"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "d-flex justify-space-around align-start" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                                  return createVNode("div", {
                                    key: topic.title,
                                    class: "d-flex gap-x-2"
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-circle-fill",
                                      color: topic.color,
                                      size: "12",
                                      class: "mt-1"
                                    }, null, 8, ["color"]),
                                    createVNode("div", null, [
                                      createVNode("div", {
                                        class: "text-body-1",
                                        style: { "min-inline-size": "90px" }
                                      }, toDisplayString(topic.title), 1),
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                    ])
                                  ]);
                                }), 64))
                              ]),
                              createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                                  return createVNode("div", {
                                    key: topic.title,
                                    class: "d-flex gap-x-2"
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-circle-fill",
                                      color: topic.color,
                                      size: "12",
                                      class: "mt-1"
                                    }, null, 8, ["color"]),
                                    createVNode("div", null, [
                                      createVNode("div", {
                                        class: "text-body-1",
                                        style: { "min-inline-size": "90px" }
                                      }, toDisplayString(topic.title), 1),
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VueApexCharts, {
                              type: "bar",
                              height: "268",
                              options: topicsChartConfig,
                              series: topicsChartSeries,
                              class: "mb-md-0 mb-6"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "d-flex justify-space-around align-start" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                                return createVNode("div", {
                                  key: topic.title,
                                  class: "d-flex gap-x-2"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-circle-fill",
                                    color: topic.color,
                                    size: "12",
                                    class: "mt-1"
                                  }, null, 8, ["color"]),
                                  createVNode("div", null, [
                                    createVNode("div", {
                                      class: "text-body-1",
                                      style: { "min-inline-size": "90px" }
                                    }, toDisplayString(topic.title), 1),
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                  ])
                                ]);
                              }), 64))
                            ]),
                            createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                                return createVNode("div", {
                                  key: topic.title,
                                  class: "d-flex gap-x-2"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-circle-fill",
                                    color: topic.color,
                                    size: "12",
                                    class: "mt-1"
                                  }, null, 8, ["color"]),
                                  createVNode("div", null, [
                                    createVNode("div", {
                                      class: "text-body-1",
                                      style: { "min-inline-size": "90px" }
                                    }, toDisplayString(topic.title), 1),
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                  ])
                                ]);
                              }), 64))
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
              createVNode(VCardItem, { title: "Topic you are interested in" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VueApexCharts, {
                            type: "bar",
                            height: "268",
                            options: topicsChartConfig,
                            series: topicsChartSeries,
                            class: "mb-md-0 mb-6"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "d-flex justify-space-around align-start" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                              return createVNode("div", {
                                key: topic.title,
                                class: "d-flex gap-x-2"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, 8, ["color"]),
                                createVNode("div", null, [
                                  createVNode("div", {
                                    class: "text-body-1",
                                    style: { "min-inline-size": "90px" }
                                  }, toDisplayString(topic.title), 1),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                ])
                              ]);
                            }), 64))
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                              return createVNode("div", {
                                key: topic.title,
                                class: "d-flex gap-x-2"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, 8, ["color"]),
                                createVNode("div", null, [
                                  createVNode("div", {
                                    class: "text-body-1",
                                    style: { "min-inline-size": "90px" }
                                  }, toDisplayString(topic.title), 1),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                ])
                              ]);
                            }), 64))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-widgets/cardWidgetsInterestedTopics.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "card-widgets",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8)
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
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
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
              sm: "6",
              md: "4"
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
                  _push3(ssrRenderComponent(CardWidgetsProjectTimeline, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardWidgetsProjectTimeline)
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
              md: "4",
              sm: "6"
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
                  _push3(ssrRenderComponent(_sfc_main$c, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$c)
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
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
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
                  _push3(ssrRenderComponent(_sfc_main$e, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$e)
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
              md: "8"
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
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$d, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$d)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
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
                  createVNode(CardWidgetsProjectTimeline)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
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
                  createVNode(_sfc_main$c)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$e)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/cards/card-widgets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
