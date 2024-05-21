import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, openBlock, createBlock, Fragment, renderList, toDisplayString, ref, isRef } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { c as avatar1, d as avatar2, e as avatar3, a as VIcon, g as VProgressLinear, h as avatar5, f as avatar4, V as VBtn, _ as _export_sfc, H as avatar8, i as avatar7, m as flagUsa, bq as flagIndia, br as flagBrazil, bs as flagAus, bt as flagFr, bu as flagChina, b as VProgressCircular } from "../ssr.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { _ as _sfc_main$m } from "./MoreBtn-CtW8Gck8.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VCarousel, a as VCarouselItem, m as marketingExpense, b as accountLogo, s as salesOverview, c as catImg1, d as catImg2, e as catImg3, f as mobile1, g as mobile2, h as mobile3, i as mobile4, j as desktop1, k as desktop2, l as desktop3, n as console1, o as console2, p as console3, q as appleIphone, r as ps4Joystick, t as appleWatch } from "./ps4-joystick-lg-BRHn33ZK.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VListItemAction } from "./VListItemAction-VqS_ibV2.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { m as mastercardDark, a as mastercardLight, b as americanExpressDark, c as americanExpressLight } from "./mastercard-D11GxT9q.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { s as square4Dark, a as square4Light, d as deltaWebAppDark, b as deltaWebAppLight, e as ecommerceWebsiteDark, c as ecommerceWebsiteLight, f as financeAppDesignDark, g as financeAppDesignLight, i as illustration3dDark, h as illustration3dLight } from "./finance-app-design-BX4_2Lvq.js";
import { d as dribbleLogo } from "./dribbble-C_GJZU6f.js";
import { t as twitterRound, i as instagramLogo } from "./twitter-Cl84YMqb.js";
import { f as facebookRound } from "./facebook-DKESF_u0.js";
import { V as VSlideGroup } from "./VSlideGroup-Bvz86g7R.js";
import { V as VSlideGroupItem } from "./VSlideGroupItem-CIJ0uuo8.js";
import { z as zipcar, b as bitbank, a as aviato } from "./zipcar-DdKyKqcm.js";
import { f as faqIllustration } from "./faq-illustration-Ctip7u9F.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
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
/* empty css               */
import "./ssrBoot-Co4_dNdy.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
const _sfc_main$l = {
  __name: "CardActivityTimeline",
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
                                          _push7(` Jennie O&#39;Brien `);
                                        } else {
                                          return [
                                            createTextVNode(" Jennie O'Brien ")
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
                                          createTextVNode(" Jennie O'Brien ")
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
                                          createTextVNode(" Jennie O'Brien ")
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
                                        createTextVNode(" Jennie O'Brien ")
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
                                      createTextVNode(" Jennie O'Brien ")
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
                                    createTextVNode(" Jennie O'Brien ")
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
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardActivityTimeline.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "CardAdvanceGeneralStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    const trends = [
      {
        title: "Profit",
        amount: "$54,234",
        trendNumber: 85
      },
      {
        title: "Sales",
        amount: "8,657",
        trendNumber: 42
      },
      {
        title: "User",
        amount: "16,456",
        trendNumber: -12
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
    const resolveDotColor = (title) => {
      if (title === "User")
        return "info";
      else if (title === "Sales")
        return "warning";
      else
        return "primary";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "General Statistics" }, _attrs), {
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
                  _push3(`<div class="d-flex align-center mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    rounded: "",
                    variant: "tonal",
                    color: "primary",
                    size: "50",
                    class: "me-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-bank-card-line",
                          size: "24"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-bank-card-line",
                            size: "24"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h3 class="text-h3"${_scopeId2}> $89,522 </h3><p class="mb-0"${_scopeId2}> Last 6 Month profit </p></div></div><div class="py-3"${_scopeId2}><h6 class="text-h6 mb-1"${_scopeId2}> Current Activity </h6>`);
                  _push3(ssrRenderComponent(VProgressLinear, {
                    rounded: "",
                    "model-value": 85,
                    color: "primary",
                    height: "6"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VTable, { class: "text-no-wrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<tbody class="text-high-emphasis"${_scopeId3}><!--[-->`);
                        ssrRenderList(trends, (trend) => {
                          _push4(`<tr${_scopeId3}><td class="ps-0"${_scopeId3}><div class="d-flex align-center gap-x-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-circle-fill",
                            color: resolveDotColor(trend.title),
                            size: 14
                          }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(trend.title)}</div></td><td class="font-weight-medium text-end"${_scopeId3}>${ssrInterpolate(trend.amount)}</td><td class="d-flex align-center justify-end font-weight-medium text-end pe-0 gap-x-2"${_scopeId3}>${ssrInterpolate(trend.trendNumber > 0 ? `+${trend.trendNumber}%` : `${trend.trendNumber}%`)} `);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: trend.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                            color: trend.trendNumber > 0 ? "success" : "error",
                            size: "24"
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("tbody", { class: "text-high-emphasis" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(trends, (trend) => {
                              return createVNode("tr", {
                                key: trend.trendNumber
                              }, [
                                createVNode("td", { class: "ps-0" }, [
                                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-circle-fill",
                                      color: resolveDotColor(trend.title),
                                      size: 14
                                    }, null, 8, ["color"]),
                                    createTextVNode(" " + toDisplayString(trend.title), 1)
                                  ])
                                ]),
                                createVNode("td", { class: "font-weight-medium text-end" }, toDisplayString(trend.amount), 1),
                                createVNode("td", { class: "d-flex align-center justify-end font-weight-medium text-end pe-0 gap-x-2" }, [
                                  createTextVNode(toDisplayString(trend.trendNumber > 0 ? `+${trend.trendNumber}%` : `${trend.trendNumber}%`) + " ", 1),
                                  createVNode(VIcon, {
                                    icon: trend.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                    color: trend.trendNumber > 0 ? "success" : "error",
                                    size: "24"
                                  }, null, 8, ["icon", "color"])
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
                    createVNode("div", { class: "d-flex align-center mb-6" }, [
                      createVNode(VAvatar, {
                        rounded: "",
                        variant: "tonal",
                        color: "primary",
                        size: "50",
                        class: "me-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-bank-card-line",
                            size: "24"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-h3" }, " $89,522 "),
                        createVNode("p", { class: "mb-0" }, " Last 6 Month profit ")
                      ])
                    ]),
                    createVNode("div", { class: "py-3" }, [
                      createVNode("h6", { class: "text-h6 mb-1" }, " Current Activity "),
                      createVNode(VProgressLinear, {
                        rounded: "",
                        "model-value": 85,
                        color: "primary",
                        height: "6"
                      })
                    ]),
                    createVNode(VTable, { class: "text-no-wrap" }, {
                      default: withCtx(() => [
                        createVNode("tbody", { class: "text-high-emphasis" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(trends, (trend) => {
                            return createVNode("tr", {
                              key: trend.trendNumber
                            }, [
                              createVNode("td", { class: "ps-0" }, [
                                createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-circle-fill",
                                    color: resolveDotColor(trend.title),
                                    size: 14
                                  }, null, 8, ["color"]),
                                  createTextVNode(" " + toDisplayString(trend.title), 1)
                                ])
                              ]),
                              createVNode("td", { class: "font-weight-medium text-end" }, toDisplayString(trend.amount), 1),
                              createVNode("td", { class: "d-flex align-center justify-end font-weight-medium text-end pe-0 gap-x-2" }, [
                                createTextVNode(toDisplayString(trend.trendNumber > 0 ? `+${trend.trendNumber}%` : `${trend.trendNumber}%`) + " ", 1),
                                createVNode(VIcon, {
                                  icon: trend.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                  color: trend.trendNumber > 0 ? "success" : "error",
                                  size: "24"
                                }, null, 8, ["icon", "color"])
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
                  createVNode("div", { class: "d-flex align-center mb-6" }, [
                    createVNode(VAvatar, {
                      rounded: "",
                      variant: "tonal",
                      color: "primary",
                      size: "50",
                      class: "me-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-bank-card-line",
                          size: "24"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-h3" }, " $89,522 "),
                      createVNode("p", { class: "mb-0" }, " Last 6 Month profit ")
                    ])
                  ]),
                  createVNode("div", { class: "py-3" }, [
                    createVNode("h6", { class: "text-h6 mb-1" }, " Current Activity "),
                    createVNode(VProgressLinear, {
                      rounded: "",
                      "model-value": 85,
                      color: "primary",
                      height: "6"
                    })
                  ]),
                  createVNode(VTable, { class: "text-no-wrap" }, {
                    default: withCtx(() => [
                      createVNode("tbody", { class: "text-high-emphasis" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(trends, (trend) => {
                          return createVNode("tr", {
                            key: trend.trendNumber
                          }, [
                            createVNode("td", { class: "ps-0" }, [
                              createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                createVNode(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: resolveDotColor(trend.title),
                                  size: 14
                                }, null, 8, ["color"]),
                                createTextVNode(" " + toDisplayString(trend.title), 1)
                              ])
                            ]),
                            createVNode("td", { class: "font-weight-medium text-end" }, toDisplayString(trend.amount), 1),
                            createVNode("td", { class: "d-flex align-center justify-end font-weight-medium text-end pe-0 gap-x-2" }, [
                              createTextVNode(toDisplayString(trend.trendNumber > 0 ? `+${trend.trendNumber}%` : `${trend.trendNumber}%`) + " ", 1),
                              createVNode(VIcon, {
                                icon: trend.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                color: trend.trendNumber > 0 ? "success" : "error",
                                size: "24"
                              }, null, 8, ["icon", "color"])
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceGeneralStatistics.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const iphoneImg = "/build/assets/iPhone-bg-DrdXfvHE.png";
const _sfc_main$j = {
  __name: "CardAdvanceIosFinanceApp",
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
    const avatarGroup = [
      {
        avatar: avatar3,
        tooltip: "Peter Harper"
      },
      {
        avatar: avatar5,
        tooltip: "Scott Wells"
      },
      {
        avatar: avatar4,
        tooltip: "Vivian Padilla"
      },
      {
        avatar: avatar2,
        tooltip: "Jennie O'Brien"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, {
              src: unref(iphoneImg),
              height: "162",
              cover: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between mb-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VChip, {
                    text: "UI Design",
                    size: "small",
                    color: "success",
                    class: "me-4"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VChip, {
                    text: "React",
                    size: "small",
                    color: "error"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="me-n3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div${_scopeId2}><h5 class="text-h5 mb-1"${_scopeId2}> Finance iOS App </h5><p class="text-body-2 font-weight-medium"${_scopeId2}> Due Date: 20/Dec/2022 </p><p class="text-body-2 mb-4"${_scopeId2}> Managing your money isn&#39;t the easiest thing to do. Now that many of us no longer balance a checkbook, tracking and expenses. </p><div class="d-flex justify-space-between font-weight-medium text-sm text-high-emphasis mb-2"${_scopeId2}><span${_scopeId2}>Progress</span><span${_scopeId2}>68%</span></div>`);
                  _push3(ssrRenderComponent(VProgressLinear, {
                    rounded: "",
                    height: "8",
                    color: "success",
                    "model-value": 68,
                    class: "mb-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex justify-space-between align-center"${_scopeId2}><div class="v-avatar-group"${_scopeId2}><!--[-->`);
                  ssrRenderList(avatarGroup, (item) => {
                    _push3(ssrRenderComponent(VAvatar, {
                      key: item.avatar,
                      size: 32
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: item.avatar
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VTooltip, {
                            activator: "parent",
                            location: "bottom"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.tooltip)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.tooltip), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: item.avatar
                            }, null, 8, ["src"]),
                            createVNode(VTooltip, {
                              activator: "parent",
                              location: "bottom"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.tooltip), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="d-flex align-center text-disabled"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-attachment-line",
                    size: "24",
                    class: "me-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="font-weight-medium me-3"${_scopeId2}>24</span>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-checkbox-circle-line",
                    class: "me-1",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="font-weight-medium"${_scopeId2}>74/180</span></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                      createVNode("div", null, [
                        createVNode(VChip, {
                          text: "UI Design",
                          size: "small",
                          color: "success",
                          class: "me-4"
                        }),
                        createVNode(VChip, {
                          text: "React",
                          size: "small",
                          color: "error"
                        })
                      ]),
                      createVNode("div", { class: "me-n3" }, [
                        createVNode(_component_MoreBtn, { "menu-list": moreList })
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1" }, " Finance iOS App "),
                      createVNode("p", { class: "text-body-2 font-weight-medium" }, " Due Date: 20/Dec/2022 "),
                      createVNode("p", { class: "text-body-2 mb-4" }, " Managing your money isn't the easiest thing to do. Now that many of us no longer balance a checkbook, tracking and expenses. "),
                      createVNode("div", { class: "d-flex justify-space-between font-weight-medium text-sm text-high-emphasis mb-2" }, [
                        createVNode("span", null, "Progress"),
                        createVNode("span", null, "68%")
                      ]),
                      createVNode(VProgressLinear, {
                        rounded: "",
                        height: "8",
                        color: "success",
                        "model-value": 68,
                        class: "mb-4"
                      }),
                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                        createVNode("div", { class: "v-avatar-group" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(avatarGroup, (item) => {
                            return createVNode(VAvatar, {
                              key: item.avatar,
                              size: 32
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: item.avatar
                                }, null, 8, ["src"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "bottom"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.tooltip), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        createVNode("div", { class: "d-flex align-center text-disabled" }, [
                          createVNode(VIcon, {
                            icon: "ri-attachment-line",
                            size: "24",
                            class: "me-1"
                          }),
                          createVNode("span", { class: "font-weight-medium me-3" }, "24"),
                          createVNode(VIcon, {
                            icon: "ri-checkbox-circle-line",
                            class: "me-1",
                            size: "24"
                          }),
                          createVNode("span", { class: "font-weight-medium" }, "74/180")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, {
                src: unref(iphoneImg),
                height: "162",
                cover: ""
              }, null, 8, ["src"]),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                    createVNode("div", null, [
                      createVNode(VChip, {
                        text: "UI Design",
                        size: "small",
                        color: "success",
                        class: "me-4"
                      }),
                      createVNode(VChip, {
                        text: "React",
                        size: "small",
                        color: "error"
                      })
                    ]),
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn, { "menu-list": moreList })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-h5 mb-1" }, " Finance iOS App "),
                    createVNode("p", { class: "text-body-2 font-weight-medium" }, " Due Date: 20/Dec/2022 "),
                    createVNode("p", { class: "text-body-2 mb-4" }, " Managing your money isn't the easiest thing to do. Now that many of us no longer balance a checkbook, tracking and expenses. "),
                    createVNode("div", { class: "d-flex justify-space-between font-weight-medium text-sm text-high-emphasis mb-2" }, [
                      createVNode("span", null, "Progress"),
                      createVNode("span", null, "68%")
                    ]),
                    createVNode(VProgressLinear, {
                      rounded: "",
                      height: "8",
                      color: "success",
                      "model-value": 68,
                      class: "mb-4"
                    }),
                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                      createVNode("div", { class: "v-avatar-group" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(avatarGroup, (item) => {
                          return createVNode(VAvatar, {
                            key: item.avatar,
                            size: 32
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: item.avatar
                              }, null, 8, ["src"]),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "bottom"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.tooltip), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      createVNode("div", { class: "d-flex align-center text-disabled" }, [
                        createVNode(VIcon, {
                          icon: "ri-attachment-line",
                          size: "24",
                          class: "me-1"
                        }),
                        createVNode("span", { class: "font-weight-medium me-3" }, "24"),
                        createVNode(VIcon, {
                          icon: "ri-checkbox-circle-line",
                          class: "me-1",
                          size: "24"
                        }),
                        createVNode("span", { class: "font-weight-medium" }, "74/180")
                      ])
                    ])
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceIosFinanceApp.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "CardAdvanceMarketingSales",
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceMarketingSales.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "CardAdvanceMeetingSchedule",
  __ssrInlineRender: true,
  setup(__props) {
    const meetingSchedules = [
      {
        profile: avatar4,
        with: "Call with Woods",
        dateTime: "21 Jul | 08:20-10:30",
        type: "Business"
      },
      {
        profile: avatar8,
        with: "Call with hilda",
        dateTime: "24 Jul | 11:30-12:00",
        type: "Meditation"
      },
      {
        profile: avatar7,
        with: "Conference call",
        dateTime: "28 Jul | 05:00-6:45",
        type: "Dinner"
      },
      {
        profile: avatar3,
        with: "Meeting with Mark",
        dateTime: "03 Aug | 07:00-8:30",
        type: "Meetup"
      },
      {
        profile: avatar2,
        with: "Meeting in Oakland",
        dateTime: "14 Aug | 04:15-05:30",
        type: "Dinner"
      },
      {
        profile: avatar1,
        with: "Meeting with Carl",
        dateTime: "05 Oct | 10:00-12:45",
        type: "Business"
      }
    ];
    const meetingTypeUiColors = {
      Business: "primary",
      Meditation: "success",
      Meetup: "secondary",
      Dinner: "error"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-n3" data-v-741e3dcf${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Meeting Schedule`);
                      } else {
                        return [
                          createTextVNode("Meeting Schedule")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Meeting Schedule")
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
                  _push3(ssrRenderComponent(VList, {
                    lines: "two",
                    class: "card-list"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(meetingSchedules, (meeting) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: meeting.type
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "lg",
                                  start: "",
                                  size: 38,
                                  image: meeting.profile,
                                  class: "me-1"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "lg",
                                    start: "",
                                    size: 38,
                                    image: meeting.profile,
                                    class: "me-1"
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemAction, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VChip, {
                                        size: "small",
                                        color: meetingTypeUiColors[meeting.type]
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(meeting.type)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(meeting.type), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VChip, {
                                          size: "small",
                                          color: meetingTypeUiColors[meeting.type]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(meeting.type), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
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
                                        size: "small",
                                        color: meetingTypeUiColors[meeting.type]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(meeting.type), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(meeting.with)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(meeting.with), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, { class: "me-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "16",
                                        start: "",
                                        icon: "ri-calendar-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(` ${ssrInterpolate(meeting.dateTime)}`);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          size: "16",
                                          start: "",
                                          icon: "ri-calendar-line"
                                        }),
                                        createTextVNode(" " + toDisplayString(meeting.dateTime), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(meeting.with), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "me-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "16",
                                        start: "",
                                        icon: "ri-calendar-line"
                                      }),
                                      createTextVNode(" " + toDisplayString(meeting.dateTime), 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(meetingSchedules, (meeting) => {
                            return createVNode(VListItem, {
                              key: meeting.type
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "lg",
                                  start: "",
                                  size: 38,
                                  image: meeting.profile,
                                  class: "me-1"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VListItemAction, null, {
                                  default: withCtx(() => [
                                    createVNode(VChip, {
                                      size: "small",
                                      color: meetingTypeUiColors[meeting.type]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(meeting.type), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(meeting.with), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "me-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "16",
                                      start: "",
                                      icon: "ri-calendar-line"
                                    }),
                                    createTextVNode(" " + toDisplayString(meeting.dateTime), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      lines: "two",
                      class: "card-list"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(meetingSchedules, (meeting) => {
                          return createVNode(VListItem, {
                            key: meeting.type
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "lg",
                                start: "",
                                size: 38,
                                image: meeting.profile,
                                class: "me-1"
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VListItemAction, null, {
                                default: withCtx(() => [
                                  createVNode(VChip, {
                                    size: "small",
                                    color: meetingTypeUiColors[meeting.type]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(meeting.type), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(meeting.with), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "me-2" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "16",
                                    start: "",
                                    icon: "ri-calendar-line"
                                  }),
                                  createTextVNode(" " + toDisplayString(meeting.dateTime), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Meeting Schedule")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, {
                    lines: "two",
                    class: "card-list"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(meetingSchedules, (meeting) => {
                        return createVNode(VListItem, {
                          key: meeting.type
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "lg",
                              start: "",
                              size: 38,
                              image: meeting.profile,
                              class: "me-1"
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode(VListItemAction, null, {
                              default: withCtx(() => [
                                createVNode(VChip, {
                                  size: "small",
                                  color: meetingTypeUiColors[meeting.type]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(meeting.type), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(meeting.with), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "me-2" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "16",
                                  start: "",
                                  icon: "ri-calendar-line"
                                }),
                                createTextVNode(" " + toDisplayString(meeting.dateTime), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceMeetingSchedule.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const CardAdvanceMeetingSchedule = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-741e3dcf"]]);
const _sfc_main$g = {
  __name: "CardAdvanceMostSalesInCountries",
  __ssrInlineRender: true,
  setup(__props) {
    const countrySales = [
      {
        sales: "18,879",
        title: "Australia",
        trendNumber: -15
      },
      {
        sales: "10,357",
        title: "Canada",
        trendNumber: 85
      },
      {
        sales: "4,860",
        title: "India",
        trendNumber: 48
      },
      {
        sales: "899",
        title: "US",
        trendNumber: -16
      },
      {
        sales: "43",
        title: "Japan",
        trendNumber: 35
      },
      {
        sales: "18",
        title: "Brazil",
        trendNumber: 12
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
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Most Sales in Countries" }, _attrs), {
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
                  _push3(`<div class="d-flex align-center"${_scopeId2}><h1 class="text-h1 me-2"${_scopeId2}> $22,842 </h1>`);
                  _push3(ssrRenderComponent(VChip, {
                    text: "+42%",
                    size: "small",
                    color: "success"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mb-6"${_scopeId2}> Sales Last 90 Days </p>`);
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTable, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<tbody class="text-high-emphasis text-no-wrap"${_scopeId3}><!--[-->`);
                        ssrRenderList(countrySales, (sale) => {
                          _push4(`<tr${_scopeId3}><td class="ps-0"${_scopeId3}>${ssrInterpolate(sale.title)}</td><td class="text-end font-weight-medium"${_scopeId3}>${ssrInterpolate(sale.sales)}</td><td class="d-flex align-center justify-end text-end font-weight-medium pe-0 gap-x-2"${_scopeId3}>${ssrInterpolate(Math.abs(sale.trendNumber))}% `);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: sale.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                            color: sale.trendNumber > 0 ? "success" : "error",
                            size: "24"
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("tbody", { class: "text-high-emphasis text-no-wrap" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(countrySales, (sale) => {
                              return createVNode("tr", {
                                key: sale.title
                              }, [
                                createVNode("td", { class: "ps-0" }, toDisplayString(sale.title), 1),
                                createVNode("td", { class: "text-end font-weight-medium" }, toDisplayString(sale.sales), 1),
                                createVNode("td", { class: "d-flex align-center justify-end text-end font-weight-medium pe-0 gap-x-2" }, [
                                  createTextVNode(toDisplayString(Math.abs(sale.trendNumber)) + "% ", 1),
                                  createVNode(VIcon, {
                                    icon: sale.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                    color: sale.trendNumber > 0 ? "success" : "error",
                                    size: "24"
                                  }, null, 8, ["icon", "color"])
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
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("h1", { class: "text-h1 me-2" }, " $22,842 "),
                      createVNode(VChip, {
                        text: "+42%",
                        size: "small",
                        color: "success"
                      })
                    ]),
                    createVNode("p", { class: "mb-6" }, " Sales Last 90 Days "),
                    createVNode(VDivider),
                    createVNode(VTable, null, {
                      default: withCtx(() => [
                        createVNode("tbody", { class: "text-high-emphasis text-no-wrap" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(countrySales, (sale) => {
                            return createVNode("tr", {
                              key: sale.title
                            }, [
                              createVNode("td", { class: "ps-0" }, toDisplayString(sale.title), 1),
                              createVNode("td", { class: "text-end font-weight-medium" }, toDisplayString(sale.sales), 1),
                              createVNode("td", { class: "d-flex align-center justify-end text-end font-weight-medium pe-0 gap-x-2" }, [
                                createTextVNode(toDisplayString(Math.abs(sale.trendNumber)) + "% ", 1),
                                createVNode(VIcon, {
                                  icon: sale.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                  color: sale.trendNumber > 0 ? "success" : "error",
                                  size: "24"
                                }, null, 8, ["icon", "color"])
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
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("h1", { class: "text-h1 me-2" }, " $22,842 "),
                    createVNode(VChip, {
                      text: "+42%",
                      size: "small",
                      color: "success"
                    })
                  ]),
                  createVNode("p", { class: "mb-6" }, " Sales Last 90 Days "),
                  createVNode(VDivider),
                  createVNode(VTable, null, {
                    default: withCtx(() => [
                      createVNode("tbody", { class: "text-high-emphasis text-no-wrap" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(countrySales, (sale) => {
                          return createVNode("tr", {
                            key: sale.title
                          }, [
                            createVNode("td", { class: "ps-0" }, toDisplayString(sale.title), 1),
                            createVNode("td", { class: "text-end font-weight-medium" }, toDisplayString(sale.sales), 1),
                            createVNode("td", { class: "d-flex align-center justify-end text-end font-weight-medium pe-0 gap-x-2" }, [
                              createTextVNode(toDisplayString(Math.abs(sale.trendNumber)) + "% ", 1),
                              createVNode(VIcon, {
                                icon: sale.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                color: sale.trendNumber > 0 ? "success" : "error",
                                size: "24"
                              }, null, 8, ["icon", "color"])
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceMostSalesInCountries.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "CardAdvanceOrderByCountries",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("New");
    const tabsData = [
      "New",
      "Preparing",
      "Shipping"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Orders by countries",
              subtitle: "62 deliveries in progress"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { class: "mt-n5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { class: "mt-n5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(currentTab),
              "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
              grow: "",
              class: "disable-tab-transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tabsData, (tab, index) => {
                    _push3(ssrRenderComponent(VTab, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tab)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tab), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tab, index) => {
                      return createVNode(VTab, { key: index }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tab), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(currentTab),
                    "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Myrtle Ullrich </div><div class="text-body-2 mb-1"${_scopeId6}> 101 Boulder, California(CA), 95959 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                            createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Barry Schowalter </div><div class="text-body-2"${_scopeId6}> 939 Orange, California(CA), 92118 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                            createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Veronica Herman </div><div class="text-body-2 mb-1"${_scopeId6}> 162 Windsor, California(CA), 95492 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                            createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Helen Jacobs </div><div class="text-body-2"${_scopeId6}> 487 Sunset, California(CA), 94043 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                            createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                                createVNode("div", null, [
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, {
                                    class: "my-4",
                                    style: { "border-style": "dashed" }
                                  }),
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Barry Schowalter </div><div class="text-body-2"${_scopeId6}> 939 Orange, California(CA), 92118 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                            createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Myrtle Ullrich </div><div class="text-body-2"${_scopeId6}> 101 Boulder, California(CA), 95959 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                            createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Veronica Herman </div><div class="text-body-2"${_scopeId6}> 162 Windsor, California(CA), 95492 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                            createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Helen Jacobs </div><div class="text-body-2"${_scopeId6}> 487 Sunset, California(CA), 94043 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                            createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                                createVNode("div", null, [
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, {
                                    class: "my-4",
                                    style: { "border-style": "dashed" }
                                  }),
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Myrtle Ullrich </div><div class="text-body-2"${_scopeId6}> 101 Boulder, California(CA), 95959 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                            createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Barry Schowalter </div><div class="text-body-2"${_scopeId6}> 939 Orange, California(CA), 92118 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                            createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Veronica Herman </div><div class="text-body-2"${_scopeId6}> 162 Windsor, California(CA), 95492 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                            createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Helen Jacobs </div><div class="text-body-2"${_scopeId6}> 487 Sunset, California(CA), 94043 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                            createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                                createVNode("div", null, [
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, {
                                    class: "my-4",
                                    style: { "border-style": "dashed" }
                                  }),
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                      } else {
                        return [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                        createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                        createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  class: "my-4",
                                  style: { "border-style": "dashed" }
                                }),
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                        createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                        createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                        createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                        createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  class: "my-4",
                                  style: { "border-style": "dashed" }
                                }),
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                        createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                        createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                        createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                        createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  class: "my-4",
                                  style: { "border-style": "dashed" }
                                }),
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                        createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                        createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                      ]),
                                      _: 1
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
                    createVNode(VWindow, {
                      modelValue: unref(currentTab),
                      "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                      createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                      createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }),
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                      createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                      createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                      createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                      createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }),
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                      createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                      createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                      createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                      createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }),
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                      createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                      createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                    ]),
                                    _: 1
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
          } else {
            return [
              createVNode(VCardItem, {
                title: "Orders by countries",
                subtitle: "62 deliveries in progress"
              }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { class: "mt-n5" })
                ]),
                _: 1
              }),
              createVNode(VTabs, {
                modelValue: unref(currentTab),
                "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
                grow: "",
                class: "disable-tab-transition"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tab, index) => {
                    return createVNode(VTab, { key: index }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tab), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(currentTab),
                    "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                    createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                    createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              class: "my-4",
                              style: { "border-style": "dashed" }
                            }),
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                    createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                    createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                    createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                    createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              class: "my-4",
                              style: { "border-style": "dashed" }
                            }),
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                    createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                    createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
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
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                    createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                    createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              class: "my-4",
                              style: { "border-style": "dashed" }
                            }),
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                    createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                    createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                  ]),
                                  _: 1
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceOrderByCountries.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const visaDark = "/build/assets/visa-dark-C8KhEbJg.png";
const visaLight = "/build/assets/visa-light-CxdGFs5e.png";
const _sfc_main$e = {
  __name: "CardAdvancePaymentHistory",
  __ssrInlineRender: true,
  setup(__props) {
    const visa = useGenerateImageVariant(visaLight, visaDark);
    const mastercard = useGenerateImageVariant(mastercardLight, mastercardDark);
    const americanExpress = useGenerateImageVariant(americanExpressLight, americanExpressDark);
    const payments = ref([
      {
        lastDigits: "4399",
        method: "Credit Card",
        date: "05/Jan",
        debitAmount: "2,820",
        balance: "10,450",
        logo: visa
      },
      {
        lastDigits: "5545",
        method: "Debit Card",
        date: "12/Feb",
        debitAmount: "345",
        balance: "8,709",
        logo: mastercard
      },
      {
        lastDigits: "9860",
        method: "ATM Card",
        date: "24/Feb",
        debitAmount: "999",
        balance: "25,900",
        logo: americanExpress
      },
      {
        lastDigits: "4300",
        method: "Credit Card",
        date: "08/Mar",
        debitAmount: "8,453",
        balance: "9,233",
        logo: visa
      },
      {
        lastDigits: "5545",
        method: "Debit Card",
        date: "15/Apr",
        debitAmount: "24",
        balance: "500",
        logo: mastercard
      },
      {
        lastDigits: "4399",
        method: "Credit Card",
        date: "28/Apr",
        debitAmount: "299",
        balance: "1,380",
        logo: visa
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
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Payment History" }, _attrs), {
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
            _push2(ssrRenderComponent(VTable, { class: "payment-history-table text-no-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead class="text-capitalize"${_scopeId2}><tr${_scopeId2}><th scope="col"${_scopeId2}><div class="text-overline"${_scopeId2}> Card </div></th><th scope="col" class="text-start text-sm"${_scopeId2}><div class="text-overline"${_scopeId2}> Date </div></th><th scope="col" class="text-end"${_scopeId2}><div class="text-overline"${_scopeId2}> Spend </div></th></tr></thead><tbody class="text-sm py-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(payments), (payment) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div class="me-4"${_scopeId2}><div class="rounded-lg d-flex align-center justify-center"${_scopeId2}><img${ssrRenderAttr("src", payment.logo)} alt="payment-card"${_scopeId2}></div></div><div class="d-flex flex-column"${_scopeId2}><h6 class="text-h6"${_scopeId2}> *${ssrInterpolate(payment.lastDigits)}</h6><span class="text-body-2"${_scopeId2}>${ssrInterpolate(payment.method)}</span></div></div></td><td${_scopeId2}><span class="text-body-2"${_scopeId2}>${ssrInterpolate(payment.date)}</span></td><td class="text-end"${_scopeId2}><div class="d-flex flex-column"${_scopeId2}><h6 class="text-h6"${_scopeId2}> -$${ssrInterpolate(payment.debitAmount)}</h6><span class="text-body-2"${_scopeId2}>$${ssrInterpolate(payment.balance)}</span></div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", { class: "text-capitalize" }, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, [
                          createVNode("div", { class: "text-overline" }, " Card ")
                        ]),
                        createVNode("th", {
                          scope: "col",
                          class: "text-start text-sm"
                        }, [
                          createVNode("div", { class: "text-overline" }, " Date ")
                        ]),
                        createVNode("th", {
                          scope: "col",
                          class: "text-end"
                        }, [
                          createVNode("div", { class: "text-overline" }, " Spend ")
                        ])
                      ])
                    ]),
                    createVNode("tbody", { class: "text-sm py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(payments), (payment) => {
                        return openBlock(), createBlock("tr", {
                          key: payment.lastDigits
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "me-4" }, [
                                createVNode("div", { class: "rounded-lg d-flex align-center justify-center" }, [
                                  createVNode("img", {
                                    src: payment.logo,
                                    alt: "payment-card"
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("h6", { class: "text-h6" }, " *" + toDisplayString(payment.lastDigits), 1),
                                createVNode("span", { class: "text-body-2" }, toDisplayString(payment.method), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("span", { class: "text-body-2" }, toDisplayString(payment.date), 1)
                          ]),
                          createVNode("td", { class: "text-end" }, [
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("h6", { class: "text-h6" }, " -$" + toDisplayString(payment.debitAmount), 1),
                              createVNode("span", { class: "text-body-2" }, "$" + toDisplayString(payment.balance), 1)
                            ])
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
              createVNode(VTable, { class: "payment-history-table text-no-wrap" }, {
                default: withCtx(() => [
                  createVNode("thead", { class: "text-capitalize" }, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, [
                        createVNode("div", { class: "text-overline" }, " Card ")
                      ]),
                      createVNode("th", {
                        scope: "col",
                        class: "text-start text-sm"
                      }, [
                        createVNode("div", { class: "text-overline" }, " Date ")
                      ]),
                      createVNode("th", {
                        scope: "col",
                        class: "text-end"
                      }, [
                        createVNode("div", { class: "text-overline" }, " Spend ")
                      ])
                    ])
                  ]),
                  createVNode("tbody", { class: "text-sm py-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(payments), (payment) => {
                      return openBlock(), createBlock("tr", {
                        key: payment.lastDigits
                      }, [
                        createVNode("td", null, [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode("div", { class: "me-4" }, [
                              createVNode("div", { class: "rounded-lg d-flex align-center justify-center" }, [
                                createVNode("img", {
                                  src: payment.logo,
                                  alt: "payment-card"
                                }, null, 8, ["src"])
                              ])
                            ]),
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("h6", { class: "text-h6" }, " *" + toDisplayString(payment.lastDigits), 1),
                              createVNode("span", { class: "text-body-2" }, toDisplayString(payment.method), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", null, [
                          createVNode("span", { class: "text-body-2" }, toDisplayString(payment.date), 1)
                        ]),
                        createVNode("td", { class: "text-end" }, [
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("h6", { class: "text-h6" }, " -$" + toDisplayString(payment.debitAmount), 1),
                            createVNode("span", { class: "text-body-2" }, "$" + toDisplayString(payment.balance), 1)
                          ])
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvancePaymentHistory.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "CardAdvancePopularInstructors",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Popular Instructors" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="text-overline d-flex justify-space-between px-5 py-4 text-high-emphasis" data-v-e3167e41${_scopeId}><div data-v-e3167e41${_scopeId}>instructors</div><div data-v-e3167e41${_scopeId}>Courses</div></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList([
                          { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                          { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                          { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                          { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                        ], (instructor) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: instructor.name
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "34",
                                  image: instructor.avatar,
                                  class: "me-1"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    size: "34",
                                    image: instructor.avatar,
                                    class: "me-1"
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-high-emphasis" data-v-e3167e41${_scopeId4}>${ssrInterpolate(instructor.totalCourses)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6" data-v-e3167e41${_scopeId4}>${ssrInterpolate(instructor.name)}</h6><div class="text-caption text-medium-emphasis" data-v-e3167e41${_scopeId4}>${ssrInterpolate(instructor.profession)}</div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList([
                            { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                            { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                            { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                            { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                          ], (instructor) => {
                            return openBlock(), createBlock(VListItem, {
                              key: instructor.name
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "34",
                                  image: instructor.avatar,
                                  class: "me-1"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", { class: "text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
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
                        (openBlock(true), createBlock(Fragment, null, renderList([
                          { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                          { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                          { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                          { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                        ], (instructor) => {
                          return openBlock(), createBlock(VListItem, {
                            key: instructor.name
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "34",
                                image: instructor.avatar,
                                class: "me-1"
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode("div", { class: "text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
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
              createVNode(VCardItem, { title: "Popular Instructors" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn)
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode("div", { class: "text-overline d-flex justify-space-between px-5 py-4 text-high-emphasis" }, [
                createVNode("div", null, "instructors"),
                createVNode("div", null, "Courses")
              ]),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList([
                        { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                        { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                        { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                        { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                      ], (instructor) => {
                        return openBlock(), createBlock(VListItem, {
                          key: instructor.name
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              size: "34",
                              image: instructor.avatar,
                              class: "me-1"
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode("div", { class: "text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvancePopularInstructors.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const CardAdvancedPopularInstructors = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-e3167e41"]]);
const _sfc_main$c = {
  __name: "CardAdvanceProjectStatistics",
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
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Project Statistics" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n2" data-v-bf4e3c1c${_scopeId}>`);
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
                                    _push6(`<span class="text-overline text-medium-emphasis" data-v-bf4e3c1c${_scopeId5}> NAME </span><span class="text-overline text-medium-emphasis" data-v-bf4e3c1c${_scopeId5}>BUDGET</span>`);
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceProjectStatistics.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CardAdvancedProjectStatistics = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-bf4e3c1c"]]);
const linkedInLogo = "/build/assets/linkedin-CmtbYN49.png";
const _sfc_main$b = {
  __name: "CardAdvanceSocialNetworkVisits",
  __ssrInlineRender: true,
  setup(__props) {
    const visits = [
      {
        visits: "12,348",
        progress: 12,
        siteName: "Facebook",
        category: "Social Media",
        logo: facebookRound
      },
      {
        visits: "8,450",
        progress: 32,
        siteName: "Dribbble",
        category: "Community",
        logo: dribbleLogo
      },
      {
        visits: "350",
        progress: -18,
        siteName: "Twitter",
        category: "Social Media",
        logo: twitterRound
      },
      {
        visits: "25,566",
        progress: 45,
        siteName: "Instagram",
        category: "Social Media",
        logo: instagramLogo
      },
      {
        visits: "1,456",
        progress: 8,
        siteName: "LinkedIn",
        category: "Social Media",
        logo: linkedInLogo
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
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Social Network Visits" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n2" data-v-5fab4452${_scopeId}>`);
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
                  _push3(`<div class="d-flex align-center" data-v-5fab4452${_scopeId2}><h4 class="text-h4" data-v-5fab4452${_scopeId2}> $24,895 </h4>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-arrow-up-s-line",
                    color: "success",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-success" data-v-5fab4452${_scopeId2}>62%</span></div><p class="mb-7" data-v-5fab4452${_scopeId2}> last 1 year visits </p>`);
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(visits, (item) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: item.siteName
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  size: "34"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        src: item.logo
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          src: item.logo
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "34"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: item.logo
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center gap-x-2 font-weight-medium" data-v-5fab4452${_scopeId4}><span data-v-5fab4452${_scopeId4}>${ssrInterpolate(item.visits)}</span>`);
                                _push5(ssrRenderComponent(VChip, {
                                  color: item.progress > 0 ? "success" : "error",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.progress > 0 ? `+${item.progress}%` : `${item.progress}%`)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.progress > 0 ? `+${item.progress}%` : `${item.progress}%`), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center gap-x-2 font-weight-medium" }, [
                                    createVNode("span", null, toDisplayString(item.visits), 1),
                                    createVNode(VChip, {
                                      color: item.progress > 0 ? "success" : "error",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.progress > 0 ? `+${item.progress}%` : `${item.progress}%`), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.siteName)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.siteName), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-base" data-v-5fab4452${_scopeId5}>${ssrInterpolate(item.category)}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-base" }, toDisplayString(item.category), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.siteName), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-base" }, toDisplayString(item.category), 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(visits, (item) => {
                            return createVNode(VListItem, {
                              key: item.siteName
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: "34"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: item.logo
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              append: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center gap-x-2 font-weight-medium" }, [
                                  createVNode("span", null, toDisplayString(item.visits), 1),
                                  createVNode(VChip, {
                                    color: item.progress > 0 ? "success" : "error",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.progress > 0 ? `+${item.progress}%` : `${item.progress}%`), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.siteName), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-base" }, toDisplayString(item.category), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("h4", { class: "text-h4" }, " $24,895 "),
                      createVNode(VIcon, {
                        icon: "ri-arrow-up-s-line",
                        color: "success",
                        size: "24"
                      }),
                      createVNode("span", { class: "text-success" }, "62%")
                    ]),
                    createVNode("p", { class: "mb-7" }, " last 1 year visits "),
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(visits, (item) => {
                          return createVNode(VListItem, {
                            key: item.siteName
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "34"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: item.logo
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            append: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center gap-x-2 font-weight-medium" }, [
                                createVNode("span", null, toDisplayString(item.visits), 1),
                                createVNode(VChip, {
                                  color: item.progress > 0 ? "success" : "error",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.progress > 0 ? `+${item.progress}%` : `${item.progress}%`), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.siteName), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-base" }, toDisplayString(item.category), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("h4", { class: "text-h4" }, " $24,895 "),
                    createVNode(VIcon, {
                      icon: "ri-arrow-up-s-line",
                      color: "success",
                      size: "24"
                    }),
                    createVNode("span", { class: "text-success" }, "62%")
                  ]),
                  createVNode("p", { class: "mb-7" }, " last 1 year visits "),
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(visits, (item) => {
                        return createVNode(VListItem, {
                          key: item.siteName
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              size: "34"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: item.logo
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          append: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center gap-x-2 font-weight-medium" }, [
                              createVNode("span", null, toDisplayString(item.visits), 1),
                              createVNode(VChip, {
                                color: item.progress > 0 ? "success" : "error",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.progress > 0 ? `+${item.progress}%` : `${item.progress}%`), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.siteName), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-base" }, toDisplayString(item.category), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceSocialNetworkVisits.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CardAdvancedSocialNetworkVisits = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5fab4452"]]);
const _sfc_main$a = {
  __name: "CardAdvanceSubscribersByCountry",
  __ssrInlineRender: true,
  setup(__props) {
    const subscribers = [
      {
        country: "USA",
        subscribers: "22,450",
        trendNumber: 22.5,
        flag: flagUsa
      },
      {
        country: "India",
        subscribers: "18,568",
        trendNumber: 18.5,
        flag: flagIndia
      },
      {
        country: "Brazil",
        subscribers: "8,457",
        trendNumber: -8.3,
        flag: flagBrazil
      },
      {
        country: "Australia",
        subscribers: "2,850",
        trendNumber: 15.2,
        flag: flagAus
      },
      {
        country: "France",
        subscribers: "1,930",
        trendNumber: -12.6,
        flag: flagFr
      },
      {
        country: "China",
        subscribers: "852",
        trendNumber: -2.4,
        flag: flagChina
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
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Subscribers By Countries" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n2" data-v-de8ab570${_scopeId}>`);
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
            _push2(ssrRenderComponent(VTable, { class: "subscriber-table text-no-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead data-v-de8ab570${_scopeId2}><tr data-v-de8ab570${_scopeId2}><th scope="col" data-v-de8ab570${_scopeId2}><div class="text-overline" data-v-de8ab570${_scopeId2}> Countries </div></th><th scope="col" data-v-de8ab570${_scopeId2}><div class="text-overline" data-v-de8ab570${_scopeId2}> Subscribers </div></th><th scope="col" class="text-end" data-v-de8ab570${_scopeId2}><div class="text-overline" data-v-de8ab570${_scopeId2}> Percent </div></th></tr></thead><tbody class="font-weight-medium text-base text-high-emphasis" data-v-de8ab570${_scopeId2}><!--[-->`);
                  ssrRenderList(subscribers, (subscriber) => {
                    _push3(`<tr data-v-de8ab570${_scopeId2}><td data-v-de8ab570${_scopeId2}><div class="d-flex align-center" data-v-de8ab570${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      image: subscriber.flag,
                      size: 30,
                      class: "me-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-de8ab570${_scopeId2}>${ssrInterpolate(subscriber.country)}</span></div></td><td class="text-center text-medium-emphasis" data-v-de8ab570${_scopeId2}>${ssrInterpolate(subscriber.subscribers)}</td><td data-v-de8ab570${_scopeId2}><div class="${ssrRenderClass([subscriber.trendNumber > 0 ? "text-success" : "text-error", "d-flex justify-end align-center"])}" data-v-de8ab570${_scopeId2}><span class="me-1" data-v-de8ab570${_scopeId2}>${ssrInterpolate(subscriber.trendNumber > 0 ? `+${subscriber.trendNumber}` : subscriber.trendNumber)}%</span>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: subscriber.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                      size: "24"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, [
                          createVNode("div", { class: "text-overline" }, " Countries ")
                        ]),
                        createVNode("th", { scope: "col" }, [
                          createVNode("div", { class: "text-overline" }, " Subscribers ")
                        ]),
                        createVNode("th", {
                          scope: "col",
                          class: "text-end"
                        }, [
                          createVNode("div", { class: "text-overline" }, " Percent ")
                        ])
                      ])
                    ]),
                    createVNode("tbody", { class: "font-weight-medium text-base text-high-emphasis" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(subscribers, (subscriber) => {
                        return createVNode("tr", {
                          key: subscriber.country
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                image: subscriber.flag,
                                size: 30,
                                class: "me-4"
                              }, null, 8, ["image"]),
                              createVNode("span", null, toDisplayString(subscriber.country), 1)
                            ])
                          ]),
                          createVNode("td", { class: "text-center text-medium-emphasis" }, toDisplayString(subscriber.subscribers), 1),
                          createVNode("td", null, [
                            createVNode("div", {
                              class: ["d-flex justify-end align-center", subscriber.trendNumber > 0 ? "text-success" : "text-error"]
                            }, [
                              createVNode("span", { class: "me-1" }, toDisplayString(subscriber.trendNumber > 0 ? `+${subscriber.trendNumber}` : subscriber.trendNumber) + "%", 1),
                              createVNode(VIcon, {
                                icon: subscriber.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                size: "24"
                              }, null, 8, ["icon"])
                            ], 2)
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
              createVNode(VTable, { class: "subscriber-table text-no-wrap" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, [
                        createVNode("div", { class: "text-overline" }, " Countries ")
                      ]),
                      createVNode("th", { scope: "col" }, [
                        createVNode("div", { class: "text-overline" }, " Subscribers ")
                      ]),
                      createVNode("th", {
                        scope: "col",
                        class: "text-end"
                      }, [
                        createVNode("div", { class: "text-overline" }, " Percent ")
                      ])
                    ])
                  ]),
                  createVNode("tbody", { class: "font-weight-medium text-base text-high-emphasis" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(subscribers, (subscriber) => {
                      return createVNode("tr", {
                        key: subscriber.country
                      }, [
                        createVNode("td", null, [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VAvatar, {
                              image: subscriber.flag,
                              size: 30,
                              class: "me-4"
                            }, null, 8, ["image"]),
                            createVNode("span", null, toDisplayString(subscriber.country), 1)
                          ])
                        ]),
                        createVNode("td", { class: "text-center text-medium-emphasis" }, toDisplayString(subscriber.subscribers), 1),
                        createVNode("td", null, [
                          createVNode("div", {
                            class: ["d-flex justify-end align-center", subscriber.trendNumber > 0 ? "text-success" : "text-error"]
                          }, [
                            createVNode("span", { class: "me-1" }, toDisplayString(subscriber.trendNumber > 0 ? `+${subscriber.trendNumber}` : subscriber.trendNumber) + "%", 1),
                            createVNode(VIcon, {
                              icon: subscriber.trendNumber > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                              size: "24"
                            }, null, 8, ["icon"])
                          ], 2)
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceSubscribersByCountry.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CardAdvanceSubscribersByCountry = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-de8ab570"]]);
const _sfc_main$9 = {
  __name: "CardAdvanceTopCourses",
  __ssrInlineRender: true,
  setup(__props) {
    const coursesData = [
      {
        title: "Videography Basic Design Course",
        views: "1.2k",
        icon: "ri-video-download-line",
        color: "primary"
      },
      {
        title: "Basic Front-end Development Course",
        views: "834",
        icon: "ri-code-view",
        color: "info"
      },
      {
        title: "Basic Fundamentals of Photography",
        views: "3.7k",
        icon: "ri-image-2-line",
        color: "success"
      },
      {
        title: "Advance Dribble Base Visual Design",
        views: "2.5k",
        icon: "ri-palette-line",
        color: "warning"
      },
      {
        title: "Your First Singing Lesson",
        views: "948",
        icon: "ri-music-2-line",
        color: "error"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Top Courses" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(coursesData, (course, index) => {
                          _push4(ssrRenderComponent(VListItem, { key: index }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: course.color,
                                  class: "me-1"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: course.icon,
                                        size: "24"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: course.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    variant: "tonal",
                                    color: course.color,
                                    class: "me-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: course.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h6 clamp-text text-wrap me-4"${_scopeId4}>${ssrInterpolate(course.title)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  variant: "tonal",
                                  size: "small",
                                  color: "secondary"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(course.views)} Views `);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(course.views) + " Views ", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    variant: "tonal",
                                    size: "small",
                                    color: "secondary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(coursesData, (course, index) => {
                            return createVNode(VListItem, { key: index }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: course.color,
                                  class: "me-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: course.icon,
                                      size: "24"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              title: withCtx(() => [
                                createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                              ]),
                              append: withCtx(() => [
                                createVNode(VChip, {
                                  variant: "tonal",
                                  size: "small",
                                  color: "secondary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(coursesData, (course, index) => {
                          return createVNode(VListItem, { key: index }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                variant: "tonal",
                                color: course.color,
                                class: "me-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: course.icon,
                                    size: "24"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            title: withCtx(() => [
                              createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                            ]),
                            append: withCtx(() => [
                              createVNode(VChip, {
                                variant: "tonal",
                                size: "small",
                                color: "secondary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { title: "Top Courses" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(coursesData, (course, index) => {
                        return createVNode(VListItem, { key: index }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              variant: "tonal",
                              color: course.color,
                              class: "me-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: course.icon,
                                  size: "24"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          title: withCtx(() => [
                            createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                          ]),
                          append: withCtx(() => [
                            createVNode(VChip, {
                              variant: "tonal",
                              size: "small",
                              color: "secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceTopCourses.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "CardAdvanceTopReferralSources",
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
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Top Referral Sources",
        subtitle: "Number of Sales"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n8" data-v-d6e9d2f2${_scopeId}>`);
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
                                _push5(`<div class="${ssrRenderClass([isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"])}" style="${ssrRenderStyle({ "block-size": "6rem", "inline-size": "7rem" })}" data-v-d6e9d2f2${_scopeId4}>`);
                                _push5(ssrRenderComponent(VImg, mergeProps({ ref_for: true }, category.img, { alt: "slide-img" }), null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [isSelected ? "selected-category" : "not-selected-category", "d-flex flex-column justify-center align-center cursor-pointer rounded-xl px-5 py-2 me-4"],
                                    style: { "block-size": "6rem", "inline-size": "7rem" },
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
                              _push5(`<div class="d-flex flex-column justify-center align-center rounded-xl me-4 cursor-pointer not-selected-category" style="${ssrRenderStyle({ "block-size": "6rem", "inline-size": "7rem" })}" data-v-d6e9d2f2${_scopeId4}>`);
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
                                  style: { "block-size": "6rem", "inline-size": "7rem" }
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
                                  style: { "block-size": "6rem", "inline-size": "7rem" },
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
                                style: { "block-size": "6rem", "inline-size": "7rem" }
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
                                style: { "block-size": "6rem", "inline-size": "7rem" },
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
                              style: { "block-size": "6rem", "inline-size": "7rem" }
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
                  _push3(`<thead data-v-d6e9d2f2${_scopeId2}><tr data-v-d6e9d2f2${_scopeId2}><th scope="col" data-v-d6e9d2f2${_scopeId2}> IMAGE </th><th scope="col" data-v-d6e9d2f2${_scopeId2}> NAME </th><th scope="col" class="text-end" data-v-d6e9d2f2${_scopeId2}> STATUS </th><th scope="col" class="text-end" data-v-d6e9d2f2${_scopeId2}> REVENUE </th><th scope="col" class="text-end" data-v-d6e9d2f2${_scopeId2}> CONVERSION </th></tr></thead><tbody data-v-d6e9d2f2${_scopeId2}><!--[-->`);
                  ssrRenderList(productData[unref(currentTab)], (currentProduct) => {
                    _push3(`<tr data-v-d6e9d2f2${_scopeId2}><td data-v-d6e9d2f2${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      rounded: "",
                      image: currentProduct.image,
                      size: "34"
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td style="${ssrRenderStyle({ "inline-size": "20vw" })}" data-v-d6e9d2f2${_scopeId2}>${ssrInterpolate(currentProduct.product)}</td><td class="text-end" data-v-d6e9d2f2${_scopeId2}>`);
                    _push3(ssrRenderComponent(VChip, {
                      text: currentProduct.status,
                      color: resolveChipColor(currentProduct.status),
                      size: "small"
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="text-end font-weight-medium" data-v-d6e9d2f2${_scopeId2}> $${ssrInterpolate(currentProduct.revenue)}</td><td class="font-weight-medium text-end" data-v-d6e9d2f2${_scopeId2}><span class="${ssrRenderClass(currentProduct.conversion > 0 ? "text-success" : "text-error")}" data-v-d6e9d2f2${_scopeId2}>${ssrInterpolate(currentProduct.conversion > 0 ? `+${currentProduct.conversion}%` : `${currentProduct.conversion}%`)}</span></td></tr>`);
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
                              style: { "block-size": "6rem", "inline-size": "7rem" },
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
                            style: { "block-size": "6rem", "inline-size": "7rem" }
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceTopReferralSources.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const CardAdvancedTopReferralSources = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d6e9d2f2"]]);
const _sfc_main$7 = {
  __name: "CardAdvanceTotalEarning",
  __ssrInlineRender: true,
  setup(__props) {
    const earnings = [
      {
        avatar: zipcar,
        title: "Zipcar",
        subtitle: "Vuejs, React & HTML",
        amount: "$24,895.65",
        progress: "primary"
      },
      {
        avatar: bitbank,
        title: "Bitbank",
        subtitle: "Sketch, Figma & XD",
        amount: "$8,6500.20",
        progress: "info"
      },
      {
        avatar: aviato,
        title: "Aviato",
        subtitle: "HTML & Anguler",
        amount: "$1,2450.80",
        progress: "secondary"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-n3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Total Earning`);
                      } else {
                        return [
                          createTextVNode("Total Earning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Total Earning")
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
                  _push3(`<div class="d-flex align-center"${_scopeId2}><h3 class="text-h3"${_scopeId2}> $24,895 </h3>`);
                  _push3(ssrRenderComponent(VIcon, {
                    size: "24",
                    icon: "ri-arrow-up-s-line",
                    color: "success"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-success"${_scopeId2}> 10% </div></div><div class="text-body-1 mb-6"${_scopeId2}> Compared to $84,325 last year </div>`);
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(earnings, (earning) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: earning.title
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  image: earning.avatar,
                                  variant: "tonal"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    image: earning.avatar,
                                    variant: "tonal"
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><h6 class="text-h6 mb-2"${_scopeId4}>${ssrInterpolate(earning.amount)}</h6>`);
                                _push5(ssrRenderComponent(VProgressLinear, {
                                  color: earning.progress,
                                  "model-value": "80",
                                  height: "4",
                                  rounded: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                    createVNode(VProgressLinear, {
                                      color: earning.progress,
                                      "model-value": "80",
                                      height: "4",
                                      rounded: ""
                                    }, null, 8, ["color"])
                                  ])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(earning.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(earning.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-body-1"${_scopeId5}>${ssrInterpolate(earning.subtitle)}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(earning.subtitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(earning.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(earning.subtitle), 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                            return createVNode(VListItem, {
                              key: earning.title
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  image: earning.avatar,
                                  variant: "tonal"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                  createVNode(VProgressLinear, {
                                    color: earning.progress,
                                    "model-value": "80",
                                    height: "4",
                                    rounded: ""
                                  }, null, 8, ["color"])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(earning.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(earning.subtitle), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("h3", { class: "text-h3" }, " $24,895 "),
                      createVNode(VIcon, {
                        size: "24",
                        icon: "ri-arrow-up-s-line",
                        color: "success"
                      }),
                      createVNode("div", { class: "text-success" }, " 10% ")
                    ]),
                    createVNode("div", { class: "text-body-1 mb-6" }, " Compared to $84,325 last year "),
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                          return createVNode(VListItem, {
                            key: earning.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                image: earning.avatar,
                                variant: "tonal"
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                createVNode(VProgressLinear, {
                                  color: earning.progress,
                                  "model-value": "80",
                                  height: "4",
                                  rounded: ""
                                }, null, 8, ["color"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(earning.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(earning.subtitle), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Total Earning")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("h3", { class: "text-h3" }, " $24,895 "),
                    createVNode(VIcon, {
                      size: "24",
                      icon: "ri-arrow-up-s-line",
                      color: "success"
                    }),
                    createVNode("div", { class: "text-success" }, " 10% ")
                  ]),
                  createVNode("div", { class: "text-body-1 mb-6" }, " Compared to $84,325 last year "),
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                        return createVNode(VListItem, {
                          key: earning.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              image: earning.avatar,
                              variant: "tonal"
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                              createVNode(VProgressLinear, {
                                color: earning.progress,
                                "model-value": "80",
                                height: "4",
                                rounded: ""
                              }, null, 8, ["color"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(earning.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-body-1" }, toDisplayString(earning.subtitle), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceTotalEarning.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "CardAdvanceTransactions",
  __ssrInlineRender: true,
  setup(__props) {
    const transactions = [
      {
        amount: -850,
        paymentMethod: "Credit Card",
        description: "Digital  Ocean",
        icon: "ri-bank-card-line"
      },
      {
        paymentMethod: "PayPal",
        amount: 34456,
        description: "Received Money",
        icon: "ri-paypal-line"
      },
      {
        amount: -199,
        paymentMethod: "Mastercard",
        description: "Netflix",
        icon: "ri-mastercard-line"
      },
      {
        paymentMethod: "Wallet",
        amount: -156,
        description: "Mac'D",
        icon: "ri-wallet-3-line"
      },
      {
        paymentMethod: "PayPal",
        amount: 12872,
        description: "Refund",
        icon: "ri-paypal-line"
      },
      {
        paymentMethod: "Stripe",
        amount: -299,
        description: "Buy Apple Watch",
        icon: "ri-bank-card-2-line"
      }
    ];
    const moreList = [
      {
        title: "Last 28 Days",
        value: "Last 28 Days",
        class: "text-error"
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
    const resolveAvatarColor = (paymentMethod) => {
      if (paymentMethod === "Stripe")
        return "warning";
      if (paymentMethod === "PayPal")
        return "primary";
      if (paymentMethod === "Wallet")
        return "error";
      if (paymentMethod === "Mastercard")
        return "info";
      if (paymentMethod === "Credit Card")
        return "success";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Transactions" }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n3 mt-n2" data-v-0114be36${_scopeId}>`);
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
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(transactions, (item) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: item.paymentMethod
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: resolveAvatarColor(item.paymentMethod),
                                  class: "me-1"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: item.icon,
                                        size: "24"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    variant: "tonal",
                                    color: resolveAvatarColor(item.paymentMethod),
                                    class: "me-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemAction, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="me-2" data-v-0114be36${_scopeId5}>${ssrInterpolate(item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`)}</span>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: 24,
                                        color: item.amount > 0 ? "success" : "error",
                                        icon: item.amount > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("span", { class: "me-2" }, toDisplayString(item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`), 1),
                                        createVNode(VIcon, {
                                          size: 24,
                                          color: item.amount > 0 ? "success" : "error",
                                          icon: item.amount > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                        }, null, 8, ["color", "icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemAction, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "me-2" }, toDisplayString(item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`), 1),
                                      createVNode(VIcon, {
                                        size: 24,
                                        color: item.amount > 0 ? "success" : "error",
                                        icon: item.amount > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                      }, null, 8, ["color", "icon"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.paymentMethod)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.paymentMethod), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.description)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.description), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.paymentMethod), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.description), 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(transactions, (item) => {
                            return createVNode(VListItem, {
                              key: item.paymentMethod
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: resolveAvatarColor(item.paymentMethod),
                                  class: "me-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: item.icon,
                                      size: "24"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VListItemAction, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "me-2" }, toDisplayString(item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`), 1),
                                    createVNode(VIcon, {
                                      size: 24,
                                      color: item.amount > 0 ? "success" : "error",
                                      icon: item.amount > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                    }, null, 8, ["color", "icon"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.paymentMethod), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.description), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(transactions, (item) => {
                          return createVNode(VListItem, {
                            key: item.paymentMethod
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                variant: "tonal",
                                color: resolveAvatarColor(item.paymentMethod),
                                class: "me-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: item.icon,
                                    size: "24"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VListItemAction, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "me-2" }, toDisplayString(item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`), 1),
                                  createVNode(VIcon, {
                                    size: 24,
                                    color: item.amount > 0 ? "success" : "error",
                                    icon: item.amount > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                  }, null, 8, ["color", "icon"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.paymentMethod), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.description), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(transactions, (item) => {
                        return createVNode(VListItem, {
                          key: item.paymentMethod
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              variant: "tonal",
                              color: resolveAvatarColor(item.paymentMethod),
                              class: "me-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: item.icon,
                                  size: "24"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          append: withCtx(() => [
                            createVNode(VListItemAction, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "me-2" }, toDisplayString(item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`), 1),
                                createVNode(VIcon, {
                                  size: 24,
                                  color: item.amount > 0 ? "success" : "error",
                                  icon: item.amount > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                }, null, 8, ["color", "icon"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.paymentMethod), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.description), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceTransactions.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CardAdvanceTransactions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0114be36"]]);
const _sfc_main$5 = {
  __name: "CardAdvanceUpcomingWebinar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-center align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(faqIllustration),
                    width: "145",
                    height: "140"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><h5 class="text-h5 mb-1"${_scopeId2}> Upcoming Webinar </h5><div class="text-body-1"${_scopeId2}> Next Generation Frontend Architecture Using Layout Engine And Vue. </div><div class="d-flex justify-space-between my-6 gap-4 flex-wrap"${_scopeId2}><!--[-->`);
                  ssrRenderList([{ icon: "ri-calendar-line", title: "17 Nov 23", value: "Date" }, { icon: "ri-time-line", title: "32 Minutes", value: "Duration" }], ({ icon, title, value }) => {
                    _push3(`<div class="d-flex gap-x-4 align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      color: "primary",
                      variant: "tonal",
                      rounded: "lg"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><div class="text-body-1 text-high-emphasis"${_scopeId2}>${ssrInterpolate(title)}</div><div class="text-caption text-medium-emphasis"${_scopeId2}>${ssrInterpolate(value)}</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(VBtn, { block: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Join the event `);
                      } else {
                        return [
                          createTextVNode(" Join the event ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-center align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded" }, [
                      createVNode(VImg, {
                        src: unref(faqIllustration),
                        width: "145",
                        height: "140"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1" }, " Upcoming Webinar "),
                      createVNode("div", { class: "text-body-1" }, " Next Generation Frontend Architecture Using Layout Engine And Vue. "),
                      createVNode("div", { class: "d-flex justify-space-between my-6 gap-4 flex-wrap" }, [
                        (openBlock(), createBlock(Fragment, null, renderList([{ icon: "ri-calendar-line", title: "17 Nov 23", value: "Date" }, { icon: "ri-time-line", title: "32 Minutes", value: "Duration" }], ({ icon, title, value }) => {
                          return createVNode("div", {
                            key: title,
                            class: "d-flex gap-x-4 align-center"
                          }, [
                            createVNode(VAvatar, {
                              color: "primary",
                              variant: "tonal",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(title), 1),
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(value), 1)
                            ])
                          ]);
                        }), 64))
                      ]),
                      createVNode(VBtn, { block: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Join the event ")
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
                  createVNode("div", { class: "d-flex justify-center align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded" }, [
                    createVNode(VImg, {
                      src: unref(faqIllustration),
                      width: "145",
                      height: "140"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-h5 mb-1" }, " Upcoming Webinar "),
                    createVNode("div", { class: "text-body-1" }, " Next Generation Frontend Architecture Using Layout Engine And Vue. "),
                    createVNode("div", { class: "d-flex justify-space-between my-6 gap-4 flex-wrap" }, [
                      (openBlock(), createBlock(Fragment, null, renderList([{ icon: "ri-calendar-line", title: "17 Nov 23", value: "Date" }, { icon: "ri-time-line", title: "32 Minutes", value: "Duration" }], ({ icon, title, value }) => {
                        return createVNode("div", {
                          key: title,
                          class: "d-flex gap-x-4 align-center"
                        }, [
                          createVNode(VAvatar, {
                            color: "primary",
                            variant: "tonal",
                            rounded: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(title), 1),
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(value), 1)
                          ])
                        ]);
                      }), 64))
                    ]),
                    createVNode(VBtn, { block: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Join the event ")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceUpcomingWebinar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const logoCreditCard2 = "/build/assets/logo-credit-card-2-BGHNOM-E.png";
const logoMastercardSmall = "/build/assets/logo-mastercard-small-DEZ9xLF-.png";
const _sfc_main$4 = {
  __name: "CardAdvanceUpgradeYourPlan",
  __ssrInlineRender: true,
  setup(__props) {
    const savedCards = [
      {
        logo: logoMastercardSmall,
        type: "Credit card",
        number: "2566 xxxx xxxx 8908"
      },
      {
        logo: logoCreditCard2,
        type: "Credit card",
        number: "8990 xxxx xxxx 6852"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-n3" data-v-59486e63${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Upgrade Your Plan`);
                      } else {
                        return [
                          createTextVNode("Upgrade Your Plan")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Upgrade Your Plan")
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
                  _push3(`<p class="text-body-2" data-v-59486e63${_scopeId2}> Please make the payment to start enjoying all the features of our premium plan as soon as possible. </p><div class="plan-upgrade-banner pa-4 d-flex rounded-xl align-center" data-v-59486e63${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    rounded: "lg",
                    size: "40",
                    class: "plan-details me-4 border-opacity-100 border-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-trophy-line",
                          color: "primary",
                          alt: "briefcase"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-trophy-line",
                            color: "primary",
                            alt: "briefcase"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column" data-v-59486e63${_scopeId2}><h6 class="text-h6" data-v-59486e63${_scopeId2}> Platinum </h6><span class="text-primary text-body-2" data-v-59486e63${_scopeId2}>Upgrade Plan</span></div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center" data-v-59486e63${_scopeId2}><sup data-v-59486e63${_scopeId2}><div class="text-body-2 text-high-emphasis" data-v-59486e63${_scopeId2}>$</div></sup><h4 class="text-h4" data-v-59486e63${_scopeId2}> 5250 </h4><sub data-v-59486e63${_scopeId2}><div class="text-body-2 text-high-emphasis" data-v-59486e63${_scopeId2}>/Year</div></sub></div></div>`);
                  _push3(ssrRenderComponent(VList, { class: "card-list mt-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h6 class="text-h6 my-2" data-v-59486e63${_scopeId3}> Payment details </h6><!--[-->`);
                        ssrRenderList(savedCards, (card) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: card.logo,
                            class: "mb-2"
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", card.logo)} height="30" width="42" class="me-3" data-v-59486e63${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: card.logo,
                                    height: "30",
                                    width: "42",
                                    class: "me-3"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemAction, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTextField, {
                                        density: "compact",
                                        placeholder: "CVV",
                                        style: { "inline-size": "5rem" }
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          density: "compact",
                                          placeholder: "CVV",
                                          style: { "inline-size": "5rem" }
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemAction, null, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        density: "compact",
                                        placeholder: "CVV",
                                        style: { "inline-size": "5rem" }
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(card.type)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(card.type), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, { class: "me-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(card.number)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(card.number), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.type), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "me-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.number), 1)
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
                          createVNode("h6", { class: "text-h6 my-2" }, " Payment details "),
                          (openBlock(), createBlock(Fragment, null, renderList(savedCards, (card) => {
                            return createVNode(VListItem, {
                              key: card.logo,
                              class: "mb-2"
                            }, {
                              prepend: withCtx(() => [
                                createVNode("img", {
                                  src: card.logo,
                                  height: "30",
                                  width: "42",
                                  class: "me-3"
                                }, null, 8, ["src"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VListItemAction, null, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      density: "compact",
                                      placeholder: "CVV",
                                      style: { "inline-size": "5rem" }
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(card.type), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "me-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(card.number), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(`<a href="javascript:void(0)" class="d-inline-block text-sm mb-3" data-v-59486e63${_scopeId2}>Add Payment Method</a>`);
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "Email Address",
                                      density: "compact",
                                      class: "mb-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, { block: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Contact Now `);
                                        } else {
                                          return [
                                            createTextVNode(" Contact Now ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "Email Address",
                                        density: "compact",
                                        class: "mb-3"
                                      }),
                                      createVNode(VBtn, { block: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Contact Now ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "Email Address",
                                      density: "compact",
                                      class: "mb-3"
                                    }),
                                    createVNode(VBtn, { block: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Contact Now ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "Email Address",
                                    density: "compact",
                                    class: "mb-3"
                                  }),
                                  createVNode(VBtn, { block: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Contact Now ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", { class: "text-body-2" }, " Please make the payment to start enjoying all the features of our premium plan as soon as possible. "),
                    createVNode("div", { class: "plan-upgrade-banner pa-4 d-flex rounded-xl align-center" }, [
                      createVNode(VAvatar, {
                        rounded: "lg",
                        size: "40",
                        class: "plan-details me-4 border-opacity-100 border-primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-trophy-line",
                            color: "primary",
                            alt: "briefcase"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode("h6", { class: "text-h6" }, " Platinum "),
                        createVNode("span", { class: "text-primary text-body-2" }, "Upgrade Plan")
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode("sup", null, [
                          createVNode("div", { class: "text-body-2 text-high-emphasis" }, "$")
                        ]),
                        createVNode("h4", { class: "text-h4" }, " 5250 "),
                        createVNode("sub", null, [
                          createVNode("div", { class: "text-body-2 text-high-emphasis" }, "/Year")
                        ])
                      ])
                    ]),
                    createVNode(VList, { class: "card-list mt-1" }, {
                      default: withCtx(() => [
                        createVNode("h6", { class: "text-h6 my-2" }, " Payment details "),
                        (openBlock(), createBlock(Fragment, null, renderList(savedCards, (card) => {
                          return createVNode(VListItem, {
                            key: card.logo,
                            class: "mb-2"
                          }, {
                            prepend: withCtx(() => [
                              createVNode("img", {
                                src: card.logo,
                                height: "30",
                                width: "42",
                                class: "me-3"
                              }, null, 8, ["src"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VListItemAction, null, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    density: "compact",
                                    placeholder: "CVV",
                                    style: { "inline-size": "5rem" }
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(card.type), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "me-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(card.number), 1)
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
                    createVNode("a", {
                      href: "javascript:void(0)",
                      class: "d-inline-block text-sm mb-3"
                    }, "Add Payment Method"),
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "Email Address",
                                  density: "compact",
                                  class: "mb-3"
                                }),
                                createVNode(VBtn, { block: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Contact Now ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Upgrade Your Plan")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-body-2" }, " Please make the payment to start enjoying all the features of our premium plan as soon as possible. "),
                  createVNode("div", { class: "plan-upgrade-banner pa-4 d-flex rounded-xl align-center" }, [
                    createVNode(VAvatar, {
                      rounded: "lg",
                      size: "40",
                      class: "plan-details me-4 border-opacity-100 border-primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-trophy-line",
                          color: "primary",
                          alt: "briefcase"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode("h6", { class: "text-h6" }, " Platinum "),
                      createVNode("span", { class: "text-primary text-body-2" }, "Upgrade Plan")
                    ]),
                    createVNode(VSpacer),
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("sup", null, [
                        createVNode("div", { class: "text-body-2 text-high-emphasis" }, "$")
                      ]),
                      createVNode("h4", { class: "text-h4" }, " 5250 "),
                      createVNode("sub", null, [
                        createVNode("div", { class: "text-body-2 text-high-emphasis" }, "/Year")
                      ])
                    ])
                  ]),
                  createVNode(VList, { class: "card-list mt-1" }, {
                    default: withCtx(() => [
                      createVNode("h6", { class: "text-h6 my-2" }, " Payment details "),
                      (openBlock(), createBlock(Fragment, null, renderList(savedCards, (card) => {
                        return createVNode(VListItem, {
                          key: card.logo,
                          class: "mb-2"
                        }, {
                          prepend: withCtx(() => [
                            createVNode("img", {
                              src: card.logo,
                              height: "30",
                              width: "42",
                              class: "me-3"
                            }, null, 8, ["src"])
                          ]),
                          append: withCtx(() => [
                            createVNode(VListItemAction, null, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  density: "compact",
                                  placeholder: "CVV",
                                  style: { "inline-size": "5rem" }
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(card.type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "me-2" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(card.number), 1)
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
                  createVNode("a", {
                    href: "javascript:void(0)",
                    class: "d-inline-block text-sm mb-3"
                  }, "Add Payment Method"),
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "Email Address",
                                density: "compact",
                                class: "mb-3"
                              }),
                              createVNode(VBtn, { block: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Contact Now ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceUpgradeYourPlan.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CardAdvanceUpgradeYourPlan = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-59486e63"]]);
const _sfc_main$3 = {
  __name: "CardAdvanceWeeklySalesBg",
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
                                                      class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                                        class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                                      class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                                    class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                                  class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                                class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                              class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
                                            class: "text-no-wrap text-truncate text-xs d-flex align-center gap-x-3 pb-3"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvanceWeeklySalesBg.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CardAdvancedAssignmentProgress",
  __ssrInlineRender: true,
  setup(__props) {
    const assignmentData = [
      {
        title: "User Experience Design",
        tasks: 120,
        progress: 72,
        color: "primary"
      },
      {
        title: "Basic fundamentals",
        tasks: 32,
        progress: 48,
        color: "success"
      },
      {
        title: "React Native components",
        tasks: 182,
        progress: 15,
        color: "error"
      },
      {
        title: "Basic of music theory",
        tasks: 56,
        progress: 24,
        color: "info"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Assignment progress" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(assignmentData, (assignment) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: assignment.title
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VProgressCircular, {
                                  modelValue: assignment.progress,
                                  "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                  size: 54,
                                  class: "me-4",
                                  color: assignment.color
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-h6" data-v-b97de094${_scopeId5}>${ssrInterpolate(assignment.progress)}% </h6>`);
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VProgressCircular, {
                                    modelValue: assignment.progress,
                                    "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                    size: 54,
                                    class: "me-4",
                                    color: assignment.color
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h6 me-4 mb-2 text-truncate" data-v-b97de094${_scopeId4}>${ssrInterpolate(assignment.title)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "tonal",
                                  color: "secondary",
                                  class: "rounded",
                                  size: "34"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-arrow-right-s-line",
                                        size: "20",
                                        class: "flip-in-rtl"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-s-line",
                                          size: "20",
                                          class: "flip-in-rtl"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    variant: "tonal",
                                    color: "secondary",
                                    class: "rounded",
                                    size: "34"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-s-line",
                                        size: "20",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(assignment.tasks)} Tasks`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(assignmentData, (assignment) => {
                            return createVNode(VListItem, {
                              key: assignment.title
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VProgressCircular, {
                                  modelValue: assignment.progress,
                                  "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                  size: 54,
                                  class: "me-4",
                                  color: assignment.color
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                              ]),
                              title: withCtx(() => [
                                createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                              ]),
                              append: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  color: "secondary",
                                  class: "rounded",
                                  size: "34"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-s-line",
                                      size: "20",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(assignmentData, (assignment) => {
                          return createVNode(VListItem, {
                            key: assignment.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VProgressCircular, {
                                modelValue: assignment.progress,
                                "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                size: 54,
                                class: "me-4",
                                color: assignment.color
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                            ]),
                            title: withCtx(() => [
                              createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                            ]),
                            append: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "secondary",
                                class: "rounded",
                                size: "34"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-right-s-line",
                                    size: "20",
                                    class: "flip-in-rtl"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { title: "Assignment progress" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(assignmentData, (assignment) => {
                        return createVNode(VListItem, {
                          key: assignment.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VProgressCircular, {
                              modelValue: assignment.progress,
                              "onUpdate:modelValue": ($event) => assignment.progress = $event,
                              size: 54,
                              class: "me-4",
                              color: assignment.color
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                          ]),
                          title: withCtx(() => [
                            createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                          ]),
                          append: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "secondary",
                              class: "rounded",
                              size: "34"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-s-line",
                                  size: "20",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvancedAssignmentProgress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardAdvancedAssignmentProgress = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b97de094"]]);
const _sfc_main$1 = {
  __name: "CardAdvancedDeliveryPerformance",
  __ssrInlineRender: true,
  setup(__props) {
    const deliveryData = [
      {
        title: "Packages in transit",
        value: "10k",
        change: 25.8,
        icon: "ri-gift-line",
        color: "primary"
      },
      {
        title: "Packages out for delivery",
        value: "5k",
        change: 4.3,
        icon: "ri-car-line",
        color: "info"
      },
      {
        title: "Packages delivered",
        value: "15k",
        change: -12.5,
        icon: "ri-check-line",
        color: "success"
      },
      {
        title: "Delivery success rate",
        value: "95%",
        change: 35.6,
        icon: "ri-home-line",
        color: "warning"
      },
      {
        title: "Average delivery time",
        value: "2.5 Days",
        change: -2.15,
        icon: "ri-timer-line",
        color: "secondary"
      },
      {
        title: "Customer satisfaction",
        value: "4.5/5",
        change: 5.7,
        icon: "ri-user-line",
        color: "error"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$m;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Delivery performance",
              subtitle: "12% increase in this month"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { class: "mt-n5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { class: "mt-n5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(deliveryData, (data, index) => {
                          _push4(ssrRenderComponent(VListItem, { key: index }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: data.color,
                                  variant: "tonal",
                                  rounded: "",
                                  size: "40"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    color: data.color,
                                    variant: "tonal",
                                    rounded: "",
                                    size: "40"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-high-emphasis text-body-1 font-weight-medium"${_scopeId4}>${ssrInterpolate(data.value)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "me-3" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="${ssrRenderClass([data.change > 0 ? "text-success" : "text-error", "d-flex align-center"])}"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                        size: "24",
                                        class: "me-1"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(data.change)}%</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", {
                                          class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                        }, [
                                          createVNode(VIcon, {
                                            icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                            size: "24",
                                            class: "me-1"
                                          }, null, 8, ["icon"]),
                                          createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                        ], 2)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "me-3" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                      }, [
                                        createVNode(VIcon, {
                                          icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                          size: "24",
                                          class: "me-1"
                                        }, null, 8, ["icon"]),
                                        createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                      ], 2)
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
                          (openBlock(), createBlock(Fragment, null, renderList(deliveryData, (data, index) => {
                            return createVNode(VListItem, { key: index }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  color: data.color,
                                  variant: "tonal",
                                  rounded: "",
                                  size: "40"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.icon,
                                      size: "24"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "me-3" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                    }, [
                                      createVNode(VIcon, {
                                        icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                        size: "24",
                                        class: "me-1"
                                      }, null, 8, ["icon"]),
                                      createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                    ], 2)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(deliveryData, (data, index) => {
                          return createVNode(VListItem, { key: index }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                color: data.color,
                                variant: "tonal",
                                rounded: "",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: data.icon,
                                    size: "24"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            append: withCtx(() => [
                              createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "me-3" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                  }, [
                                    createVNode(VIcon, {
                                      icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                      size: "24",
                                      class: "me-1"
                                    }, null, 8, ["icon"]),
                                    createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                  ], 2)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, {
                title: "Delivery performance",
                subtitle: "12% increase in this month"
              }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { class: "mt-n5" })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(deliveryData, (data, index) => {
                        return createVNode(VListItem, { key: index }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              color: data.color,
                              variant: "tonal",
                              rounded: "",
                              size: "40"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: data.icon,
                                  size: "24"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          append: withCtx(() => [
                            createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "me-3" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                }, [
                                  createVNode(VIcon, {
                                    icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                    size: "24",
                                    class: "me-1"
                                  }, null, 8, ["icon"]),
                                  createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                ], 2)
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-advance/CardAdvancedDeliveryPerformance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "card-advance",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvanceTransactions, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvanceTransactions)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvanceUpgradeYourPlan, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvanceUpgradeYourPlan)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvanceMeetingSchedule, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvanceMeetingSchedule)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvancedProjectStatistics, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvancedProjectStatistics)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvancedTopReferralSources, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvancedTopReferralSources)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
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
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$k, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$k)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvancedPopularInstructors, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvancedPopularInstructors)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
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
              md: "6",
              lg: "4"
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
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvancedAssignmentProgress, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvancedAssignmentProgress)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$g, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$g)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
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
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvanceSubscribersByCountry, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvanceSubscribersByCountry)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$f, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$f)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
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
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardAdvancedSocialNetworkVisits, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardAdvancedSocialNetworkVisits)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$l, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$l)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$j, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$j)
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
                  _push3(ssrRenderComponent(_sfc_main$i, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$i)
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
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvanceTransactions)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvanceUpgradeYourPlan)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvanceMeetingSchedule)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvancedProjectStatistics)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvancedTopReferralSources)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$k)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvancedPopularInstructors)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvancedAssignmentProgress)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$g)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$e)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvanceSubscribersByCountry)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$f)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(CardAdvancedSocialNetworkVisits)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$l)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$j)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$i)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/cards/card-advance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
