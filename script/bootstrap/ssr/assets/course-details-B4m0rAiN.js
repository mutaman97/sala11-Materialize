import { ref, withAsyncContext, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { VideoPlayer } from "@videojs-player/vue";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem } from "./VCard-BPXR3fWJ.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VExpansionPanels, a as VExpansionPanel } from "./VExpansionPanel-BASkbcYj.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import "@vueuse/core";
import "destr";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "cookie-es";
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
import "./VImg-D-rbsD1g.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
import "./lazy-kVEey9ha.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
const instructorPosterImage = "/build/assets/instructor-poster-image-CO0QED00.png";
const _sfc_main = {
  __name: "course-details",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const courseDetails2 = ref();
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useApi("/apps/academy/course-details")), __temp = await __temp, __restore(), __temp);
    if (error.value)
      console.log(error.value);
    else if (data.value)
      courseDetails2.value = data.value;
    const panelStatus = ref(0);
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
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, {
                          title: "UI/UX Basic Fundamentals",
                          class: "pb-6"
                        }, {
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`<div class="text-body-1" data-v-6a0f245a${_scopeId4}> Prof. <span class="text-h6 d-inline-block" data-v-6a0f245a${_scopeId4}>${ssrInterpolate((_a = unref(courseDetails2)) == null ? void 0 : _a.title)}</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-body-1" }, [
                                  createTextVNode(" Prof. "),
                                  createVNode("span", { class: "text-h6 d-inline-block" }, toDisplayString((_b = unref(courseDetails2)) == null ? void 0 : _b.title), 1)
                                ])
                              ];
                            }
                          }),
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-4 align-center" data-v-6a0f245a${_scopeId4}>`);
                              _push5(ssrRenderComponent(VChip, {
                                variant: "tonal",
                                color: "error",
                                size: "small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` UI/UX `);
                                  } else {
                                    return [
                                      createTextVNode(" UI/UX ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VIcon, {
                                size: "24",
                                class: "cursor-pointer",
                                icon: "ri-share-forward-line"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VIcon, {
                                size: "24",
                                class: "cursor-pointer",
                                icon: "ri-bookmark-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-4 align-center" }, [
                                  createVNode(VChip, {
                                    variant: "tonal",
                                    color: "error",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" UI/UX ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VIcon, {
                                    size: "24",
                                    class: "cursor-pointer",
                                    icon: "ri-share-forward-line"
                                  }),
                                  createVNode(VIcon, {
                                    size: "24",
                                    class: "cursor-pointer",
                                    icon: "ri-bookmark-line"
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="px-2 pt-2" data-v-6a0f245a${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(VideoPlayer), {
                                      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                      poster: unref(instructorPosterImage),
                                      controls: "",
                                      "plays-inline": "",
                                      height: _ctx.$vuetify.display.mdAndUp ? 440 : 250,
                                      class: "w-100 rounded"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                                        if (_push7) {
                                          _push7(`<h5 class="text-h5 mb-4" data-v-6a0f245a${_scopeId6}> About this course </h5><p class="text-body-1" data-v-6a0f245a${_scopeId6}>${ssrInterpolate((_a = unref(courseDetails2)) == null ? void 0 : _a.about)}</p>`);
                                          _push7(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent7, _scopeId6));
                                          _push7(`<h5 class="text-h5 mb-4" data-v-6a0f245a${_scopeId6}> By the numbers </h5><div class="d-flex gap-x-12 gap-y-5 flex-wrap" data-v-6a0f245a${_scopeId6}><div data-v-6a0f245a${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VList, { class: "card-list text-medium-emphasis" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-check-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-check-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a2, _b2;
                                                          if (_push10) {
                                                            _push10(`Skill Level: ${ssrInterpolate((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Skill Level: " + toDisplayString((_b2 = unref(courseDetails2)) == null ? void 0 : _b2.skillLevel), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-group-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-group-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a2, _b2;
                                                          if (_push10) {
                                                            _push10(`Students: ${ssrInterpolate((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Students: " + toDisplayString((_b2 = unref(courseDetails2)) == null ? void 0 : _b2.totalStudents), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-global-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-global-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a2, _b2;
                                                          if (_push10) {
                                                            _push10(`Languages: ${ssrInterpolate((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Languages: " + toDisplayString((_b2 = unref(courseDetails2)) == null ? void 0 : _b2.language), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-pages-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-pages-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a2, _b2;
                                                          if (_push10) {
                                                            _push10(`Captions: ${ssrInterpolate((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Captions: " + toDisplayString((_b2 = unref(courseDetails2)) == null ? void 0 : _b2.isCaptions), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-check-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-group-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-global-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-pages-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div><div data-v-6a0f245a${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VList, { class: "card-list text-medium-emphasis" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-video-upload-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-video-upload-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a2, _b2;
                                                          if (_push10) {
                                                            _push10(`Lectures: ${ssrInterpolate((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Lectures: " + toDisplayString((_b2 = unref(courseDetails2)) == null ? void 0 : _b2.totalLectures), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-time-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-time-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a2, _b2;
                                                          if (_push10) {
                                                            _push10(`Video: ${ssrInterpolate((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Video: " + toDisplayString((_b2 = unref(courseDetails2)) == null ? void 0 : _b2.length), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-video-upload-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-time-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          _push7(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent7, _scopeId6));
                                          _push7(`<h5 class="text-h5 mb-4" data-v-6a0f245a${_scopeId6}> Description </h5><div data-v-6a0f245a${_scopeId6}>${((_b = unref(courseDetails2)) == null ? void 0 : _b.description) ?? ""}</div>`);
                                          _push7(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent7, _scopeId6));
                                          _push7(`<h5 class="text-h5 mb-4" data-v-6a0f245a${_scopeId6}> Instructor </h5><div class="d-flex align-center" data-v-6a0f245a${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VAvatar, {
                                            image: (_c = unref(courseDetails2)) == null ? void 0 : _c.instructorAvatar,
                                            size: "38",
                                            class: "me-4"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div data-v-6a0f245a${_scopeId6}><h6 class="text-h6 mb-1" data-v-6a0f245a${_scopeId6}>${ssrInterpolate((_d = unref(courseDetails2)) == null ? void 0 : _d.instructor)}</h6><div class="text-body-2" data-v-6a0f245a${_scopeId6}>${ssrInterpolate((_e = unref(courseDetails2)) == null ? void 0 : _e.instructorPosition)}</div></div></div>`);
                                        } else {
                                          return [
                                            createVNode("h5", { class: "text-h5 mb-4" }, " About this course "),
                                            createVNode("p", { class: "text-body-1" }, toDisplayString((_f = unref(courseDetails2)) == null ? void 0 : _f.about), 1),
                                            createVNode(VDivider, { class: "my-6" }),
                                            createVNode("h5", { class: "text-h5 mb-4" }, " By the numbers "),
                                            createVNode("div", { class: "d-flex gap-x-12 gap-y-5 flex-wrap" }, [
                                              createVNode("div", null, [
                                                createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-check-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-group-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-global-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-pages-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode("div", null, [
                                                createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-video-upload-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-time-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            createVNode(VDivider, { class: "my-6" }),
                                            createVNode("h5", { class: "text-h5 mb-4" }, " Description "),
                                            createVNode("div", {
                                              innerHTML: (_g = unref(courseDetails2)) == null ? void 0 : _g.description
                                            }, null, 8, ["innerHTML"]),
                                            createVNode(VDivider, { class: "my-6" }),
                                            createVNode("h5", { class: "text-h5 mb-4" }, " Instructor "),
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VAvatar, {
                                                image: (_h = unref(courseDetails2)) == null ? void 0 : _h.instructorAvatar,
                                                size: "38",
                                                class: "me-4"
                                              }, null, 8, ["image"]),
                                              createVNode("div", null, [
                                                createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString((_i = unref(courseDetails2)) == null ? void 0 : _i.instructor), 1),
                                                createVNode("div", { class: "text-body-2" }, toDisplayString((_j = unref(courseDetails2)) == null ? void 0 : _j.instructorPosition), 1)
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "px-2 pt-2" }, [
                                        createVNode(unref(VideoPlayer), {
                                          src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                          poster: unref(instructorPosterImage),
                                          controls: "",
                                          "plays-inline": "",
                                          height: _ctx.$vuetify.display.mdAndUp ? 440 : 250,
                                          class: "w-100 rounded"
                                        }, null, 8, ["poster", "height"])
                                      ]),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => {
                                          var _a, _b, _c, _d, _e;
                                          return [
                                            createVNode("h5", { class: "text-h5 mb-4" }, " About this course "),
                                            createVNode("p", { class: "text-body-1" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.about), 1),
                                            createVNode(VDivider, { class: "my-6" }),
                                            createVNode("h5", { class: "text-h5 mb-4" }, " By the numbers "),
                                            createVNode("div", { class: "d-flex gap-x-12 gap-y-5 flex-wrap" }, [
                                              createVNode("div", null, [
                                                createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-check-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-group-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-global-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-pages-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode("div", null, [
                                                createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-video-upload-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-time-line",
                                                          size: "20",
                                                          class: "me-n1"
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            createVNode(VDivider, { class: "my-6" }),
                                            createVNode("h5", { class: "text-h5 mb-4" }, " Description "),
                                            createVNode("div", {
                                              innerHTML: (_b = unref(courseDetails2)) == null ? void 0 : _b.description
                                            }, null, 8, ["innerHTML"]),
                                            createVNode(VDivider, { class: "my-6" }),
                                            createVNode("h5", { class: "text-h5 mb-4" }, " Instructor "),
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VAvatar, {
                                                image: (_c = unref(courseDetails2)) == null ? void 0 : _c.instructorAvatar,
                                                size: "38",
                                                class: "me-4"
                                              }, null, 8, ["image"]),
                                              createVNode("div", null, [
                                                createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString((_d = unref(courseDetails2)) == null ? void 0 : _d.instructor), 1),
                                                createVNode("div", { class: "text-body-2" }, toDisplayString((_e = unref(courseDetails2)) == null ? void 0 : _e.instructorPosition), 1)
                                              ])
                                            ])
                                          ];
                                        }),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "px-2 pt-2" }, [
                                      createVNode(unref(VideoPlayer), {
                                        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                        poster: unref(instructorPosterImage),
                                        controls: "",
                                        "plays-inline": "",
                                        height: _ctx.$vuetify.display.mdAndUp ? 440 : 250,
                                        class: "w-100 rounded"
                                      }, null, 8, ["poster", "height"])
                                    ]),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => {
                                        var _a, _b, _c, _d, _e;
                                        return [
                                          createVNode("h5", { class: "text-h5 mb-4" }, " About this course "),
                                          createVNode("p", { class: "text-body-1" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.about), 1),
                                          createVNode(VDivider, { class: "my-6" }),
                                          createVNode("h5", { class: "text-h5 mb-4" }, " By the numbers "),
                                          createVNode("div", { class: "d-flex gap-x-12 gap-y-5 flex-wrap" }, [
                                            createVNode("div", null, [
                                              createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-check-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-group-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-global-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-pages-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode("div", null, [
                                              createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-video-upload-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-time-line",
                                                        size: "20",
                                                        class: "me-n1"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          createVNode(VDivider, { class: "my-6" }),
                                          createVNode("h5", { class: "text-h5 mb-4" }, " Description "),
                                          createVNode("div", {
                                            innerHTML: (_b = unref(courseDetails2)) == null ? void 0 : _b.description
                                          }, null, 8, ["innerHTML"]),
                                          createVNode(VDivider, { class: "my-6" }),
                                          createVNode("h5", { class: "text-h5 mb-4" }, " Instructor "),
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode(VAvatar, {
                                              image: (_c = unref(courseDetails2)) == null ? void 0 : _c.instructorAvatar,
                                              size: "38",
                                              class: "me-4"
                                            }, null, 8, ["image"]),
                                            createVNode("div", null, [
                                              createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString((_d = unref(courseDetails2)) == null ? void 0 : _d.instructor), 1),
                                              createVNode("div", { class: "text-body-2" }, toDisplayString((_e = unref(courseDetails2)) == null ? void 0 : _e.instructorPosition), 1)
                                            ])
                                          ])
                                        ];
                                      }),
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
                          createVNode(VCardItem, {
                            title: "UI/UX Basic Fundamentals",
                            class: "pb-6"
                          }, {
                            subtitle: withCtx(() => {
                              var _a;
                              return [
                                createVNode("div", { class: "text-body-1" }, [
                                  createTextVNode(" Prof. "),
                                  createVNode("span", { class: "text-h6 d-inline-block" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.title), 1)
                                ])
                              ];
                            }),
                            append: withCtx(() => [
                              createVNode("div", { class: "d-flex gap-4 align-center" }, [
                                createVNode(VChip, {
                                  variant: "tonal",
                                  color: "error",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" UI/UX ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VIcon, {
                                  size: "24",
                                  class: "cursor-pointer",
                                  icon: "ri-share-forward-line"
                                }),
                                createVNode(VIcon, {
                                  size: "24",
                                  class: "cursor-pointer",
                                  icon: "ri-bookmark-line"
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "px-2 pt-2" }, [
                                    createVNode(unref(VideoPlayer), {
                                      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                      poster: unref(instructorPosterImage),
                                      controls: "",
                                      "plays-inline": "",
                                      height: _ctx.$vuetify.display.mdAndUp ? 440 : 250,
                                      class: "w-100 rounded"
                                    }, null, 8, ["poster", "height"])
                                  ]),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => {
                                      var _a, _b, _c, _d, _e;
                                      return [
                                        createVNode("h5", { class: "text-h5 mb-4" }, " About this course "),
                                        createVNode("p", { class: "text-body-1" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.about), 1),
                                        createVNode(VDivider, { class: "my-6" }),
                                        createVNode("h5", { class: "text-h5 mb-4" }, " By the numbers "),
                                        createVNode("div", { class: "d-flex gap-x-12 gap-y-5 flex-wrap" }, [
                                          createVNode("div", null, [
                                            createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-check-line",
                                                      size: "20",
                                                      class: "me-n1"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-group-line",
                                                      size: "20",
                                                      class: "me-n1"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-global-line",
                                                      size: "20",
                                                      class: "me-n1"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-pages-line",
                                                      size: "20",
                                                      class: "me-n1"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("div", null, [
                                            createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-video-upload-line",
                                                      size: "20",
                                                      class: "me-n1"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-time-line",
                                                      size: "20",
                                                      class: "me-n1"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        createVNode(VDivider, { class: "my-6" }),
                                        createVNode("h5", { class: "text-h5 mb-4" }, " Description "),
                                        createVNode("div", {
                                          innerHTML: (_b = unref(courseDetails2)) == null ? void 0 : _b.description
                                        }, null, 8, ["innerHTML"]),
                                        createVNode(VDivider, { class: "my-6" }),
                                        createVNode("h5", { class: "text-h5 mb-4" }, " Instructor "),
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode(VAvatar, {
                                            image: (_c = unref(courseDetails2)) == null ? void 0 : _c.instructorAvatar,
                                            size: "38",
                                            class: "me-4"
                                          }, null, 8, ["image"]),
                                          createVNode("div", null, [
                                            createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString((_d = unref(courseDetails2)) == null ? void 0 : _d.instructor), 1),
                                            createVNode("div", { class: "text-body-2" }, toDisplayString((_e = unref(courseDetails2)) == null ? void 0 : _e.instructorPosition), 1)
                                          ])
                                        ])
                                      ];
                                    }),
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, {
                          title: "UI/UX Basic Fundamentals",
                          class: "pb-6"
                        }, {
                          subtitle: withCtx(() => {
                            var _a;
                            return [
                              createVNode("div", { class: "text-body-1" }, [
                                createTextVNode(" Prof. "),
                                createVNode("span", { class: "text-h6 d-inline-block" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.title), 1)
                              ])
                            ];
                          }),
                          append: withCtx(() => [
                            createVNode("div", { class: "d-flex gap-4 align-center" }, [
                              createVNode(VChip, {
                                variant: "tonal",
                                color: "error",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" UI/UX ")
                                ]),
                                _: 1
                              }),
                              createVNode(VIcon, {
                                size: "24",
                                class: "cursor-pointer",
                                icon: "ri-share-forward-line"
                              }),
                              createVNode(VIcon, {
                                size: "24",
                                class: "cursor-pointer",
                                icon: "ri-bookmark-line"
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "px-2 pt-2" }, [
                                  createVNode(unref(VideoPlayer), {
                                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                    poster: unref(instructorPosterImage),
                                    controls: "",
                                    "plays-inline": "",
                                    height: _ctx.$vuetify.display.mdAndUp ? 440 : 250,
                                    class: "w-100 rounded"
                                  }, null, 8, ["poster", "height"])
                                ]),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => {
                                    var _a, _b, _c, _d, _e;
                                    return [
                                      createVNode("h5", { class: "text-h5 mb-4" }, " About this course "),
                                      createVNode("p", { class: "text-body-1" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.about), 1),
                                      createVNode(VDivider, { class: "my-6" }),
                                      createVNode("h5", { class: "text-h5 mb-4" }, " By the numbers "),
                                      createVNode("div", { class: "d-flex gap-x-12 gap-y-5 flex-wrap" }, [
                                        createVNode("div", null, [
                                          createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-check-line",
                                                    size: "20",
                                                    class: "me-n1"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-group-line",
                                                    size: "20",
                                                    class: "me-n1"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-global-line",
                                                    size: "20",
                                                    class: "me-n1"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-pages-line",
                                                    size: "20",
                                                    class: "me-n1"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-video-upload-line",
                                                    size: "20",
                                                    class: "me-n1"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-time-line",
                                                    size: "20",
                                                    class: "me-n1"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-6" }),
                                      createVNode("h5", { class: "text-h5 mb-4" }, " Description "),
                                      createVNode("div", {
                                        innerHTML: (_b = unref(courseDetails2)) == null ? void 0 : _b.description
                                      }, null, 8, ["innerHTML"]),
                                      createVNode(VDivider, { class: "my-6" }),
                                      createVNode("h5", { class: "text-h5 mb-4" }, " Instructor "),
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode(VAvatar, {
                                          image: (_c = unref(courseDetails2)) == null ? void 0 : _c.instructorAvatar,
                                          size: "38",
                                          class: "me-4"
                                        }, null, 8, ["image"]),
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString((_d = unref(courseDetails2)) == null ? void 0 : _d.instructor), 1),
                                          createVNode("div", { class: "text-body-2" }, toDisplayString((_e = unref(courseDetails2)) == null ? void 0 : _e.instructorPosition), 1)
                                        ])
                                      ])
                                    ];
                                  }),
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="course-content" data-v-6a0f245a${_scopeId2}>`);
                  _push3(ssrRenderComponent(VExpansionPanels, {
                    modelValue: unref(panelStatus),
                    "onUpdate:modelValue": ($event) => isRef(panelStatus) ? panelStatus.value = $event : null,
                    variant: "accordion"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList((_a = unref(courseDetails2)) == null ? void 0 : _a.content, (section, index) => {
                          _push4(ssrRenderComponent(VExpansionPanel, {
                            key: index,
                            elevation: "0",
                            "collapse-icon": "ri-arrow-down-s-line",
                            "expand-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                            value: index
                          }, {
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-6a0f245a${_scopeId4}><h5 class="text-h5" data-v-6a0f245a${_scopeId4}>${ssrInterpolate(section.title)}</h5><div class="text-body-1" data-v-6a0f245a${_scopeId4}>${ssrInterpolate(section.status)} | ${ssrInterpolate(section.time)}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(section.title), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(section.status) + " | " + toDisplayString(section.time), 1)
                                  ])
                                ];
                              }
                            }),
                            text: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(section.topics, (topic, id) => {
                                        _push6(ssrRenderComponent(VListItem, { key: id }, {
                                          prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCheckbox, {
                                                "model-value": topic.isCompleted,
                                                class: "me-3"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCheckbox, {
                                                  "model-value": topic.isCompleted,
                                                  class: "me-3"
                                                }, null, 8, ["model-value"])
                                              ];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<h6 class="text-h6" data-v-6a0f245a${_scopeId7}>${ssrInterpolate(topic.title)}</h6>`);
                                                  } else {
                                                    return [
                                                      createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="text-body-2" data-v-6a0f245a${_scopeId7}>${ssrInterpolate(topic.time)}</div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(section.topics, (topic, id) => {
                                          return openBlock(), createBlock(VListItem, { key: id }, {
                                            prepend: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                "model-value": topic.isCompleted,
                                                class: "me-3"
                                              }, null, 8, ["model-value"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
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
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(section.topics, (topic, id) => {
                                        return openBlock(), createBlock(VListItem, { key: id }, {
                                          prepend: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              "model-value": topic.isCompleted,
                                              class: "me-3"
                                            }, null, 8, ["model-value"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
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
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(courseDetails2)) == null ? void 0 : _b.content, (section, index) => {
                            return openBlock(), createBlock(VExpansionPanel, {
                              key: index,
                              elevation: "0",
                              "collapse-icon": "ri-arrow-down-s-line",
                              "expand-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                              value: index
                            }, {
                              title: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(section.title), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(section.status) + " | " + toDisplayString(section.time), 1)
                                ])
                              ]),
                              text: withCtx(() => [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(section.topics, (topic, id) => {
                                      return openBlock(), createBlock(VListItem, { key: id }, {
                                        prepend: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            "model-value": topic.isCompleted,
                                            class: "me-3"
                                          }, null, 8, ["model-value"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["expand-icon", "value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "course-content" }, [
                      createVNode(VExpansionPanels, {
                        modelValue: unref(panelStatus),
                        "onUpdate:modelValue": ($event) => isRef(panelStatus) ? panelStatus.value = $event : null,
                        variant: "accordion"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(courseDetails2)) == null ? void 0 : _a.content, (section, index) => {
                              return openBlock(), createBlock(VExpansionPanel, {
                                key: index,
                                elevation: "0",
                                "collapse-icon": "ri-arrow-down-s-line",
                                "expand-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                value: index
                              }, {
                                title: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(section.title), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(section.status) + " | " + toDisplayString(section.time), 1)
                                  ])
                                ]),
                                text: withCtx(() => [
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(section.topics, (topic, id) => {
                                        return openBlock(), createBlock(VListItem, { key: id }, {
                                          prepend: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              "model-value": topic.isCompleted,
                                              class: "me-3"
                                            }, null, 8, ["model-value"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["expand-icon", "value"]);
                            }), 128))
                          ];
                        }),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, {
                        title: "UI/UX Basic Fundamentals",
                        class: "pb-6"
                      }, {
                        subtitle: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "text-body-1" }, [
                              createTextVNode(" Prof. "),
                              createVNode("span", { class: "text-h6 d-inline-block" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.title), 1)
                            ])
                          ];
                        }),
                        append: withCtx(() => [
                          createVNode("div", { class: "d-flex gap-4 align-center" }, [
                            createVNode(VChip, {
                              variant: "tonal",
                              color: "error",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" UI/UX ")
                              ]),
                              _: 1
                            }),
                            createVNode(VIcon, {
                              size: "24",
                              class: "cursor-pointer",
                              icon: "ri-share-forward-line"
                            }),
                            createVNode(VIcon, {
                              size: "24",
                              class: "cursor-pointer",
                              icon: "ri-bookmark-line"
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "px-2 pt-2" }, [
                                createVNode(unref(VideoPlayer), {
                                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                  poster: unref(instructorPosterImage),
                                  controls: "",
                                  "plays-inline": "",
                                  height: _ctx.$vuetify.display.mdAndUp ? 440 : 250,
                                  class: "w-100 rounded"
                                }, null, 8, ["poster", "height"])
                              ]),
                              createVNode(VCardText, null, {
                                default: withCtx(() => {
                                  var _a, _b, _c, _d, _e;
                                  return [
                                    createVNode("h5", { class: "text-h5 mb-4" }, " About this course "),
                                    createVNode("p", { class: "text-body-1" }, toDisplayString((_a = unref(courseDetails2)) == null ? void 0 : _a.about), 1),
                                    createVNode(VDivider, { class: "my-6" }),
                                    createVNode("h5", { class: "text-h5 mb-4" }, " By the numbers "),
                                    createVNode("div", { class: "d-flex gap-x-12 gap-y-5 flex-wrap" }, [
                                      createVNode("div", null, [
                                        createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-check-line",
                                                  size: "20",
                                                  class: "me-n1"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode("Skill Level: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.skillLevel), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-group-line",
                                                  size: "20",
                                                  class: "me-n1"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode("Students: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalStudents), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-global-line",
                                                  size: "20",
                                                  class: "me-n1"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode("Languages: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.language), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-pages-line",
                                                  size: "20",
                                                  class: "me-n1"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode("Captions: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.isCaptions), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(VList, { class: "card-list text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-video-upload-line",
                                                  size: "20",
                                                  class: "me-n1"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode("Lectures: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.totalLectures), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-time-line",
                                                  size: "20",
                                                  class: "me-n1"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode("Video: " + toDisplayString((_a2 = unref(courseDetails2)) == null ? void 0 : _a2.length), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    createVNode(VDivider, { class: "my-6" }),
                                    createVNode("h5", { class: "text-h5 mb-4" }, " Description "),
                                    createVNode("div", {
                                      innerHTML: (_b = unref(courseDetails2)) == null ? void 0 : _b.description
                                    }, null, 8, ["innerHTML"]),
                                    createVNode(VDivider, { class: "my-6" }),
                                    createVNode("h5", { class: "text-h5 mb-4" }, " Instructor "),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(VAvatar, {
                                        image: (_c = unref(courseDetails2)) == null ? void 0 : _c.instructorAvatar,
                                        size: "38",
                                        class: "me-4"
                                      }, null, 8, ["image"]),
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString((_d = unref(courseDetails2)) == null ? void 0 : _d.instructor), 1),
                                        createVNode("div", { class: "text-body-2" }, toDisplayString((_e = unref(courseDetails2)) == null ? void 0 : _e.instructorPosition), 1)
                                      ])
                                    ])
                                  ];
                                }),
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
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "course-content" }, [
                    createVNode(VExpansionPanels, {
                      modelValue: unref(panelStatus),
                      "onUpdate:modelValue": ($event) => isRef(panelStatus) ? panelStatus.value = $event : null,
                      variant: "accordion"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(courseDetails2)) == null ? void 0 : _a.content, (section, index) => {
                            return openBlock(), createBlock(VExpansionPanel, {
                              key: index,
                              elevation: "0",
                              "collapse-icon": "ri-arrow-down-s-line",
                              "expand-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                              value: index
                            }, {
                              title: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(section.title), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(section.status) + " | " + toDisplayString(section.time), 1)
                                ])
                              ]),
                              text: withCtx(() => [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(section.topics, (topic, id) => {
                                      return openBlock(), createBlock(VListItem, { key: id }, {
                                        prepend: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            "model-value": topic.isCompleted,
                                            class: "me-3"
                                          }, null, 8, ["model-value"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, toDisplayString(topic.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-2" }, toDisplayString(topic.time), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["expand-icon", "value"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/academy/course-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const courseDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a0f245a"]]);
export {
  courseDetails as default
};
