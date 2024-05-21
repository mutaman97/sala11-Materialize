import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as VIcon, H as avatar8, g as VProgressLinear, bo as xls, c as avatar1, d as avatar2, e as avatar3, _ as _export_sfc } from "../ssr.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { z as zipcar, b as bitbank, a as aviato } from "./zipcar-DdKyKqcm.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VRating } from "./VRating-BxS5q7bh.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
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
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
const TimelineRectangle1 = "/build/assets/TimelineRectangle1-DROJqW9g.png";
const TimelineRectangle2 = "/build/assets/TimelineRectangle2-BKgU8mxD.png";
const TimelineRectangle3 = "/build/assets/TimelineRectangle3-By8cJ_XW.png";
const TimelineRectangle4 = "/build/assets/TimelineRectangle4-B9d0u98F.png";
const _sfc_main$3 = {
  __name: "TimelineWithIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const albumImages = [
      TimelineRectangle1,
      TimelineRectangle2,
      TimelineRectangle3,
      TimelineRectangle4
    ];
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-6" }, _attrs))}><div><h5 class="text-h5 pb-5"> Timeline with icons </h5></div>`);
      _push(ssrRenderComponent(VTimeline, {
        align: "start",
        "line-inset": "16",
        "truncate-line": "start",
        justify: "center",
        density: _ctx.$vuetify.display.smAndDown ? "compact" : "default",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTimelineItem, {
              "fill-dot": "",
              size: "small"
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="app-timeline-meta"${_scopeId2}> 2 month&#39;s ago </span>`);
                } else {
                  return [
                    createVNode("span", { class: "app-timeline-meta" }, " 2 month's ago ")
                  ];
                }
              }),
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="v-timeline-avatar-wrapper rounded-circle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "32",
                    color: "error",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-file-word-line",
                          size: "20"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-file-word-line",
                            size: "20"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "error",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-file-word-line",
                            size: "20"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`You&#39;ve uploaded doc pdf to the Pixinvent project`);
                                  } else {
                                    return [
                                      createTextVNode("You've uploaded doc pdf to the Pixinvent project")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("You've uploaded doc pdf to the Pixinvent project")
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
                              _push5(`<p class="app-timeline-text mb-3"${_scopeId4}> he process of recording the key project details and producing the documents that are required to implement it successfully. Simply put, it&#39;s an umbrella term which includes all the documents created over the course of the project. </p><div class="d-inline-flex align-items-center timeline-chip"${_scopeId4}><img${ssrRenderAttr("src", unref(pdf))} height="20" class="me-2" alt="img"${_scopeId4}><span class="app-timeline-text font-weight-medium"${_scopeId4}> documentation.pdf </span></div>`);
                            } else {
                              return [
                                createVNode("p", { class: "app-timeline-text mb-3" }, " he process of recording the key project details and producing the documents that are required to implement it successfully. Simply put, it's an umbrella term which includes all the documents created over the course of the project. "),
                                createVNode("div", { class: "d-inline-flex align-items-center timeline-chip" }, [
                                  createVNode("img", {
                                    src: unref(pdf),
                                    height: "20",
                                    class: "me-2",
                                    alt: "img"
                                  }, null, 8, ["src"]),
                                  createVNode("span", { class: "app-timeline-text font-weight-medium" }, " documentation.pdf ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("You've uploaded doc pdf to the Pixinvent project")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "app-timeline-text mb-3" }, " he process of recording the key project details and producing the documents that are required to implement it successfully. Simply put, it's an umbrella term which includes all the documents created over the course of the project. "),
                              createVNode("div", { class: "d-inline-flex align-items-center timeline-chip" }, [
                                createVNode("img", {
                                  src: unref(pdf),
                                  height: "20",
                                  class: "me-2",
                                  alt: "img"
                                }, null, 8, ["src"]),
                                createVNode("span", { class: "app-timeline-text font-weight-medium" }, " documentation.pdf ")
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
                    createVNode(VCard, { class: "mb-10 mt-n4" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("You've uploaded doc pdf to the Pixinvent project")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "app-timeline-text mb-3" }, " he process of recording the key project details and producing the documents that are required to implement it successfully. Simply put, it's an umbrella term which includes all the documents created over the course of the project. "),
                            createVNode("div", { class: "d-inline-flex align-items-center timeline-chip" }, [
                              createVNode("img", {
                                src: unref(pdf),
                                height: "20",
                                class: "me-2",
                                alt: "img"
                              }, null, 8, ["src"]),
                              createVNode("span", { class: "app-timeline-text font-weight-medium" }, " documentation.pdf ")
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
            _push2(ssrRenderComponent(VTimelineItem, {
              "fill-dot": "",
              size: "small"
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="app-timeline-meta"${_scopeId2}> 24 day&#39;s ago </span>`);
                } else {
                  return [
                    createVNode("span", { class: "app-timeline-meta" }, " 24 day's ago ")
                  ];
                }
              }),
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="v-timeline-avatar-wrapper rounded-circle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "32",
                    color: "success",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "20",
                          icon: "ri-image-line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-image-line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "success",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-image-line"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Heather added 4 images to the Team album`);
                                  } else {
                                    return [
                                      createTextVNode("Heather added 4 images to the Team album")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Heather added 4 images to the Team album")
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
                              _push5(`<p class="mb-3"${_scopeId4}> In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section </p><div class="d-flex gap-4 flex-wrap"${_scopeId4}><!--[-->`);
                              ssrRenderList(albumImages, (img, i) => {
                                _push5(ssrRenderComponent(VImg, { src: img }, null, _parent5, _scopeId4));
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("p", { class: "mb-3" }, " In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section "),
                                createVNode("div", { class: "d-flex gap-4 flex-wrap" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(albumImages, (img, i) => {
                                    return createVNode(VImg, {
                                      key: i,
                                      src: img
                                    }, null, 8, ["src"]);
                                  }), 64))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Heather added 4 images to the Team album")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "mb-3" }, " In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section "),
                              createVNode("div", { class: "d-flex gap-4 flex-wrap" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(albumImages, (img, i) => {
                                  return createVNode(VImg, {
                                    key: i,
                                    src: img
                                  }, null, 8, ["src"]);
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
                    createVNode(VCard, { class: "mb-10 mt-n4" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Heather added 4 images to the Team album")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "mb-3" }, " In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section "),
                            createVNode("div", { class: "d-flex gap-4 flex-wrap" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(albumImages, (img, i) => {
                                return createVNode(VImg, {
                                  key: i,
                                  src: img
                                }, null, 8, ["src"]);
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
            _push2(ssrRenderComponent(VTimelineItem, {
              "fill-dot": "",
              size: "small"
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="app-timeline-meta"${_scopeId2}> 6 day&#39;s ago </span>`);
                } else {
                  return [
                    createVNode("span", { class: "app-timeline-meta" }, " 6 day's ago ")
                  ];
                }
              }),
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="v-timeline-avatar-wrapper rounded-circle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "32",
                    color: "warning",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "20",
                          icon: "ri-star-smile-line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-star-smile-line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "warning",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-star-smile-line"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Loretta write a review on Pixinvent `);
                                  } else {
                                    return [
                                      createTextVNode(" Loretta write a review on Pixinvent ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Loretta write a review on Pixinvent ")
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
                              _push5(`<div${_scopeId4}><div class="d-flex align-center mb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                size: "38",
                                class: "me-4",
                                image: unref(avatar8)
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h6 class="text-h6"${_scopeId4}> Loretta Moore </h6><div class="text-body-2"${_scopeId4}> CTO of Airbnb </div></div></div><div class="d-flex align-center justify-space-between flex-wrap mb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRating, {
                                "model-value": 5,
                                class: "timeline-rating"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VChip, {
                                color: "success",
                                size: "small"
                              }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAvatar, {
                                      start: "",
                                      image: unref(avatar8),
                                      size: "16"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VAvatar, {
                                        start: "",
                                        image: unref(avatar8),
                                        size: "16"
                                      }, null, 8, ["image"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` VERIFIED BUYER `);
                                  } else {
                                    return [
                                      createTextVNode(" VERIFIED BUYER ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="text-body-1"${_scopeId4}> I wish I could select more than one main reason for rating this. I love how they constantly work on to make the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate this for so many times. I highly recommend this template! </div></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("div", { class: "d-flex align-center mb-3" }, [
                                    createVNode(VAvatar, {
                                      size: "38",
                                      class: "me-4",
                                      image: unref(avatar8)
                                    }, null, 8, ["image"]),
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6" }, " Loretta Moore "),
                                      createVNode("div", { class: "text-body-2" }, " CTO of Airbnb ")
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mb-3" }, [
                                    createVNode(VRating, {
                                      "model-value": 5,
                                      class: "timeline-rating"
                                    }),
                                    createVNode(VChip, {
                                      color: "success",
                                      size: "small"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          start: "",
                                          image: unref(avatar8),
                                          size: "16"
                                        }, null, 8, ["image"])
                                      ]),
                                      default: withCtx(() => [
                                        createTextVNode(" VERIFIED BUYER ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "text-body-1" }, " I wish I could select more than one main reason for rating this. I love how they constantly work on to make the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate this for so many times. I highly recommend this template! ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Loretta write a review on Pixinvent ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex align-center mb-3" }, [
                                  createVNode(VAvatar, {
                                    size: "38",
                                    class: "me-4",
                                    image: unref(avatar8)
                                  }, null, 8, ["image"]),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, " Loretta Moore "),
                                    createVNode("div", { class: "text-body-2" }, " CTO of Airbnb ")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mb-3" }, [
                                  createVNode(VRating, {
                                    "model-value": 5,
                                    class: "timeline-rating"
                                  }),
                                  createVNode(VChip, {
                                    color: "success",
                                    size: "small"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        start: "",
                                        image: unref(avatar8),
                                        size: "16"
                                      }, null, 8, ["image"])
                                    ]),
                                    default: withCtx(() => [
                                      createTextVNode(" VERIFIED BUYER ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "text-body-1" }, " I wish I could select more than one main reason for rating this. I love how they constantly work on to make the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate this for so many times. I highly recommend this template! ")
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
                    createVNode(VCard, { class: "mb-10 mt-n4" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Loretta write a review on Pixinvent ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex align-center mb-3" }, [
                                createVNode(VAvatar, {
                                  size: "38",
                                  class: "me-4",
                                  image: unref(avatar8)
                                }, null, 8, ["image"]),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, " Loretta Moore "),
                                  createVNode("div", { class: "text-body-2" }, " CTO of Airbnb ")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mb-3" }, [
                                createVNode(VRating, {
                                  "model-value": 5,
                                  class: "timeline-rating"
                                }),
                                createVNode(VChip, {
                                  color: "success",
                                  size: "small"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      start: "",
                                      image: unref(avatar8),
                                      size: "16"
                                    }, null, 8, ["image"])
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" VERIFIED BUYER ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "text-body-1" }, " I wish I could select more than one main reason for rating this. I love how they constantly work on to make the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate this for so many times. I highly recommend this template! ")
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
            _push2(ssrRenderComponent(VTimelineItem, {
              "fill-dot": "",
              size: "small"
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="app-timeline-meta"${_scopeId2}> 2 day&#39;s ago </span>`);
                } else {
                  return [
                    createVNode("span", { class: "app-timeline-meta" }, " 2 day's ago ")
                  ];
                }
              }),
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="v-timeline-avatar-wrapper rounded-circle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "32",
                    color: "info",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "20",
                          icon: "ri-pie-chart-line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-pie-chart-line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "info",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-pie-chart-line"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Julia stiles shared an earnings report`);
                                  } else {
                                    return [
                                      createTextVNode("Julia stiles shared an earnings report")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Julia stiles shared an earnings report")
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
                              _push5(`<div class="mb-3"${_scopeId4}><div class="d-flex align-center"${_scopeId4}><h4 class="text-h4"${_scopeId4}> $24,895 </h4><span class="text-success d-flex"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "30",
                                icon: "ri-arrow-drop-up-fill"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="align-self-center text-body-2 font-weight-medium text-success"${_scopeId4}>10%</div></span></div><div class="text-body-2"${_scopeId4}> Compared to $84,325 last year </div></div>`);
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(earnings, (earning) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: earning.title
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              variant: "tonal",
                                              rounded: "",
                                              image: earning.avatar
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                variant: "tonal",
                                                rounded: "",
                                                image: earning.avatar
                                              }, null, 8, ["image"])
                                            ];
                                          }
                                        }),
                                        append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div${_scopeId6}><h6 class="text-h6 mb-2"${_scopeId6}>${ssrInterpolate(earning.amount)}</h6>`);
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              color: earning.progress,
                                              "model-value": "80",
                                              height: "4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", null, [
                                                createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                                createVNode(VProgressLinear, {
                                                  color: earning.progress,
                                                  "model-value": "80",
                                                  height: "4"
                                                }, null, 8, ["color"])
                                              ])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="text-body-1 font-weight-medium text-high-emphasis"${_scopeId7}>${ssrInterpolate(earning.title)}</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="text-body-2"${_scopeId7}>${ssrInterpolate(earning.subtitle)}</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
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
                                      (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                                        return createVNode(VListItem, {
                                          key: earning.title
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              variant: "tonal",
                                              rounded: "",
                                              image: earning.avatar
                                            }, null, 8, ["image"])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                              createVNode(VProgressLinear, {
                                                color: earning.progress,
                                                "model-value": "80",
                                                height: "4"
                                              }, null, 8, ["color"])
                                            ])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
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
                                createVNode("div", { class: "mb-3" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("h4", { class: "text-h4" }, " $24,895 "),
                                    createVNode("span", { class: "text-success d-flex" }, [
                                      createVNode(VIcon, {
                                        size: "30",
                                        icon: "ri-arrow-drop-up-fill"
                                      }),
                                      createVNode("div", { class: "align-self-center text-body-2 font-weight-medium text-success" }, "10%")
                                    ])
                                  ]),
                                  createVNode("div", { class: "text-body-2" }, " Compared to $84,325 last year ")
                                ]),
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                                      return createVNode(VListItem, {
                                        key: earning.title
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            variant: "tonal",
                                            rounded: "",
                                            image: earning.avatar
                                          }, null, 8, ["image"])
                                        ]),
                                        append: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                            createVNode(VProgressLinear, {
                                              color: earning.progress,
                                              "model-value": "80",
                                              height: "4"
                                            }, null, 8, ["color"])
                                          ])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
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
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Julia stiles shared an earnings report")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-3" }, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("h4", { class: "text-h4" }, " $24,895 "),
                                  createVNode("span", { class: "text-success d-flex" }, [
                                    createVNode(VIcon, {
                                      size: "30",
                                      icon: "ri-arrow-drop-up-fill"
                                    }),
                                    createVNode("div", { class: "align-self-center text-body-2 font-weight-medium text-success" }, "10%")
                                  ])
                                ]),
                                createVNode("div", { class: "text-body-2" }, " Compared to $84,325 last year ")
                              ]),
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                                    return createVNode(VListItem, {
                                      key: earning.title
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          variant: "tonal",
                                          rounded: "",
                                          image: earning.avatar
                                        }, null, 8, ["image"])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                          createVNode(VProgressLinear, {
                                            color: earning.progress,
                                            "model-value": "80",
                                            height: "4"
                                          }, null, 8, ["color"])
                                        ])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
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
                    createVNode(VCard, { class: "mb-10 mt-n4" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Julia stiles shared an earnings report")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-3" }, [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("h4", { class: "text-h4" }, " $24,895 "),
                                createVNode("span", { class: "text-success d-flex" }, [
                                  createVNode(VIcon, {
                                    size: "30",
                                    icon: "ri-arrow-drop-up-fill"
                                  }),
                                  createVNode("div", { class: "align-self-center text-body-2 font-weight-medium text-success" }, "10%")
                                ])
                              ]),
                              createVNode("div", { class: "text-body-2" }, " Compared to $84,325 last year ")
                            ]),
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                                  return createVNode(VListItem, {
                                    key: earning.title
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        rounded: "",
                                        image: earning.avatar
                                      }, null, 8, ["image"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                        createVNode(VProgressLinear, {
                                          color: earning.progress,
                                          "model-value": "80",
                                          height: "4"
                                        }, null, 8, ["color"])
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
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
            _push2(ssrRenderComponent(VTimelineItem, {
              "fill-dot": "",
              size: "small"
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="v-timeline-avatar-wrapper rounded-circle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "32",
                    color: "primary",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "18",
                          icon: "ri-folder-3-line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "18",
                            icon: "ri-folder-3-line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "primary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "18",
                            icon: "ri-folder-3-line"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="app-timeline-meta"${_scopeId2}> 2 day&#39;s ago </span>`);
                } else {
                  return [
                    createVNode("span", { class: "app-timeline-meta" }, " 2 day's ago ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Josh johnson shared Nuxt js project progress report`);
                                  } else {
                                    return [
                                      createTextVNode("Josh johnson shared Nuxt js project progress report")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Josh johnson shared Nuxt js project progress report")
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
                              _push5(`<p class="mb-3"${_scopeId4}> The structure and process are defined in the project organization considering the attainment of the corporate objectives and therefore also project objectives. The components of the project process are </p><div class="d-inline-flex align-items-center timeline-chip mb-3"${_scopeId4}><img${ssrRenderAttr("src", unref(xls))} height="20" class="me-2" alt="img"${_scopeId4}><span class="app-timeline-text font-weight-medium"${_scopeId4}> progress-report.xls </span></div><div class="d-flex gap-2 align-center"${_scopeId4}><div class="flex-grow-1"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VProgressLinear, {
                                "model-value": 34,
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="text-body-2 font-weight-medium"${_scopeId4}> 34% </div></div>`);
                            } else {
                              return [
                                createVNode("p", { class: "mb-3" }, " The structure and process are defined in the project organization considering the attainment of the corporate objectives and therefore also project objectives. The components of the project process are "),
                                createVNode("div", { class: "d-inline-flex align-items-center timeline-chip mb-3" }, [
                                  createVNode("img", {
                                    src: unref(xls),
                                    height: "20",
                                    class: "me-2",
                                    alt: "img"
                                  }, null, 8, ["src"]),
                                  createVNode("span", { class: "app-timeline-text font-weight-medium" }, " progress-report.xls ")
                                ]),
                                createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                  createVNode("div", { class: "flex-grow-1" }, [
                                    createVNode(VProgressLinear, {
                                      "model-value": 34,
                                      color: "primary"
                                    })
                                  ]),
                                  createVNode("div", { class: "text-body-2 font-weight-medium" }, " 34% ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Josh johnson shared Nuxt js project progress report")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "mb-3" }, " The structure and process are defined in the project organization considering the attainment of the corporate objectives and therefore also project objectives. The components of the project process are "),
                              createVNode("div", { class: "d-inline-flex align-items-center timeline-chip mb-3" }, [
                                createVNode("img", {
                                  src: unref(xls),
                                  height: "20",
                                  class: "me-2",
                                  alt: "img"
                                }, null, 8, ["src"]),
                                createVNode("span", { class: "app-timeline-text font-weight-medium" }, " progress-report.xls ")
                              ]),
                              createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                createVNode("div", { class: "flex-grow-1" }, [
                                  createVNode(VProgressLinear, {
                                    "model-value": 34,
                                    color: "primary"
                                  })
                                ]),
                                createVNode("div", { class: "text-body-2 font-weight-medium" }, " 34% ")
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
                    createVNode(VCard, { class: "mb-10 mt-n4" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Josh johnson shared Nuxt js project progress report")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "mb-3" }, " The structure and process are defined in the project organization considering the attainment of the corporate objectives and therefore also project objectives. The components of the project process are "),
                            createVNode("div", { class: "d-inline-flex align-items-center timeline-chip mb-3" }, [
                              createVNode("img", {
                                src: unref(xls),
                                height: "20",
                                class: "me-2",
                                alt: "img"
                              }, null, 8, ["src"]),
                              createVNode("span", { class: "app-timeline-text font-weight-medium" }, " progress-report.xls ")
                            ]),
                            createVNode("div", { class: "d-flex gap-2 align-center" }, [
                              createVNode("div", { class: "flex-grow-1" }, [
                                createVNode(VProgressLinear, {
                                  "model-value": 34,
                                  color: "primary"
                                })
                              ]),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, " 34% ")
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
              createVNode(VTimelineItem, {
                "fill-dot": "",
                size: "small"
              }, {
                opposite: withCtx(() => [
                  createVNode("span", { class: "app-timeline-meta" }, " 2 month's ago ")
                ]),
                icon: withCtx(() => [
                  createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                    createVNode(VAvatar, {
                      size: "32",
                      color: "error",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-file-word-line",
                          size: "20"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("You've uploaded doc pdf to the Pixinvent project")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "app-timeline-text mb-3" }, " he process of recording the key project details and producing the documents that are required to implement it successfully. Simply put, it's an umbrella term which includes all the documents created over the course of the project. "),
                          createVNode("div", { class: "d-inline-flex align-items-center timeline-chip" }, [
                            createVNode("img", {
                              src: unref(pdf),
                              height: "20",
                              class: "me-2",
                              alt: "img"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "app-timeline-text font-weight-medium" }, " documentation.pdf ")
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
              createVNode(VTimelineItem, {
                "fill-dot": "",
                size: "small"
              }, {
                opposite: withCtx(() => [
                  createVNode("span", { class: "app-timeline-meta" }, " 24 day's ago ")
                ]),
                icon: withCtx(() => [
                  createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                    createVNode(VAvatar, {
                      size: "32",
                      color: "success",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "20",
                          icon: "ri-image-line"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Heather added 4 images to the Team album")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "mb-3" }, " In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section "),
                          createVNode("div", { class: "d-flex gap-4 flex-wrap" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(albumImages, (img, i) => {
                              return createVNode(VImg, {
                                key: i,
                                src: img
                              }, null, 8, ["src"]);
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
              }),
              createVNode(VTimelineItem, {
                "fill-dot": "",
                size: "small"
              }, {
                opposite: withCtx(() => [
                  createVNode("span", { class: "app-timeline-meta" }, " 6 day's ago ")
                ]),
                icon: withCtx(() => [
                  createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                    createVNode(VAvatar, {
                      size: "32",
                      color: "warning",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "20",
                          icon: "ri-star-smile-line"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Loretta write a review on Pixinvent ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "d-flex align-center mb-3" }, [
                              createVNode(VAvatar, {
                                size: "38",
                                class: "me-4",
                                image: unref(avatar8)
                              }, null, 8, ["image"]),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, " Loretta Moore "),
                                createVNode("div", { class: "text-body-2" }, " CTO of Airbnb ")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mb-3" }, [
                              createVNode(VRating, {
                                "model-value": 5,
                                class: "timeline-rating"
                              }),
                              createVNode(VChip, {
                                color: "success",
                                size: "small"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    start: "",
                                    image: unref(avatar8),
                                    size: "16"
                                  }, null, 8, ["image"])
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" VERIFIED BUYER ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "text-body-1" }, " I wish I could select more than one main reason for rating this. I love how they constantly work on to make the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate this for so many times. I highly recommend this template! ")
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
              createVNode(VTimelineItem, {
                "fill-dot": "",
                size: "small"
              }, {
                opposite: withCtx(() => [
                  createVNode("span", { class: "app-timeline-meta" }, " 2 day's ago ")
                ]),
                icon: withCtx(() => [
                  createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                    createVNode(VAvatar, {
                      size: "32",
                      color: "info",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "20",
                          icon: "ri-pie-chart-line"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Julia stiles shared an earnings report")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("h4", { class: "text-h4" }, " $24,895 "),
                              createVNode("span", { class: "text-success d-flex" }, [
                                createVNode(VIcon, {
                                  size: "30",
                                  icon: "ri-arrow-drop-up-fill"
                                }),
                                createVNode("div", { class: "align-self-center text-body-2 font-weight-medium text-success" }, "10%")
                              ])
                            ]),
                            createVNode("div", { class: "text-body-2" }, " Compared to $84,325 last year ")
                          ]),
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                                return createVNode(VListItem, {
                                  key: earning.title
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      rounded: "",
                                      image: earning.avatar
                                    }, null, 8, ["image"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                      createVNode(VProgressLinear, {
                                        color: earning.progress,
                                        "model-value": "80",
                                        height: "4"
                                      }, null, 8, ["color"])
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(earning.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-2" }, toDisplayString(earning.subtitle), 1)
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
              }),
              createVNode(VTimelineItem, {
                "fill-dot": "",
                size: "small"
              }, {
                icon: withCtx(() => [
                  createVNode("div", { class: "v-timeline-avatar-wrapper rounded-circle" }, [
                    createVNode(VAvatar, {
                      size: "32",
                      color: "primary",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "18",
                          icon: "ri-folder-3-line"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                opposite: withCtx(() => [
                  createVNode("span", { class: "app-timeline-meta" }, " 2 day's ago ")
                ]),
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-10 mt-n4" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Josh johnson shared Nuxt js project progress report")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "mb-3" }, " The structure and process are defined in the project organization considering the attainment of the corporate objectives and therefore also project objectives. The components of the project process are "),
                          createVNode("div", { class: "d-inline-flex align-items-center timeline-chip mb-3" }, [
                            createVNode("img", {
                              src: unref(xls),
                              height: "20",
                              class: "me-2",
                              alt: "img"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "app-timeline-text font-weight-medium" }, " progress-report.xls ")
                          ]),
                          createVNode("div", { class: "d-flex gap-2 align-center" }, [
                            createVNode("div", { class: "flex-grow-1" }, [
                              createVNode(VProgressLinear, {
                                "model-value": 34,
                                color: "primary"
                              })
                            ]),
                            createVNode("div", { class: "text-body-2 font-weight-medium" }, " 34% ")
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/timeline/TimelineWithIcons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TimelineOutlined",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Outlined Timeline" }, _attrs), {
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
                    density: "compact",
                    class: "v-timeline--variant-outlined"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTimelineItem, {
                          "dot-color": "rgb(var(--v-theme-surface))",
                          size: "x-small"
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-circle-line",
                                color: "primary",
                                size: "16"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-circle-line",
                                  color: "primary",
                                  size: "16"
                                })
                              ];
                            }
                          }),
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
                          "dot-color": "rgb(var(--v-theme-surface))"
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-circle-line",
                                color: "success",
                                size: "16"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-circle-line",
                                  color: "success",
                                  size: "16"
                                })
                              ];
                            }
                          }),
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
                          "dot-color": "rgb(var(--v-theme-surface))"
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-circle-line",
                                color: "info",
                                size: "16"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-circle-line",
                                  color: "info",
                                  size: "16"
                                })
                              ];
                            }
                          }),
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
                            "dot-color": "rgb(var(--v-theme-surface))",
                            size: "x-small"
                          }, {
                            icon: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-circle-line",
                                color: "primary",
                                size: "16"
                              })
                            ]),
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
                            "dot-color": "rgb(var(--v-theme-surface))"
                          }, {
                            icon: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-circle-line",
                                color: "success",
                                size: "16"
                              })
                            ]),
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
                            "dot-color": "rgb(var(--v-theme-surface))"
                          }, {
                            icon: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-circle-line",
                                color: "info",
                                size: "16"
                              })
                            ]),
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
                      density: "compact",
                      class: "v-timeline--variant-outlined"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTimelineItem, {
                          "dot-color": "rgb(var(--v-theme-surface))",
                          size: "x-small"
                        }, {
                          icon: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-circle-line",
                              color: "primary",
                              size: "16"
                            })
                          ]),
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
                          "dot-color": "rgb(var(--v-theme-surface))"
                        }, {
                          icon: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-circle-line",
                              color: "success",
                              size: "16"
                            })
                          ]),
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
                          "dot-color": "rgb(var(--v-theme-surface))"
                        }, {
                          icon: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-circle-line",
                              color: "info",
                              size: "16"
                            })
                          ]),
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
                    density: "compact",
                    class: "v-timeline--variant-outlined"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTimelineItem, {
                        "dot-color": "rgb(var(--v-theme-surface))",
                        size: "x-small"
                      }, {
                        icon: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-circle-line",
                            color: "primary",
                            size: "16"
                          })
                        ]),
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
                        "dot-color": "rgb(var(--v-theme-surface))"
                      }, {
                        icon: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-circle-line",
                            color: "success",
                            size: "16"
                          })
                        ]),
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
                        "dot-color": "rgb(var(--v-theme-surface))"
                      }, {
                        icon: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-circle-line",
                            color: "info",
                            size: "16"
                          })
                        ]),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/timeline/TimelineOutlined.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TimelineBasic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Basic Timeline" }, _attrs), {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/timeline/TimelineBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TimelineBasic = _sfc_main$1;
  const _component_TimelineOutlined = _sfc_main$2;
  const _component_TimelineWithIcons = _sfc_main$3;
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TimelineBasic, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_TimelineBasic)
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
              _push3(ssrRenderComponent(_component_TimelineOutlined, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_TimelineOutlined)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TimelineWithIcons, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_TimelineWithIcons)
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
              createVNode(_component_TimelineBasic)
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(_component_TimelineOutlined)
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_TimelineWithIcons)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  timeline as default
};
