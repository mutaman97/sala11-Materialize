import { ref, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, watch, resolveComponent, openBlock, createBlock, Fragment, renderList, mergeProps, createCommentVNode, computed, isRef } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon, V as VBtn, _ as _export_sfc, c as avatar1, d as avatar2, e as avatar3, g as VProgressLinear, K as react, H as avatar8, j as avatar6, L as figma, h as avatar5, M as vue, f as avatar4, i as avatar7, N as html5 } from "../ssr.js";
import { _ as _sfc_main$b } from "./MoreBtn-CtW8Gck8.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { x as xamarin, p as python, s as sketch } from "./xamarin-CDkJpFqb.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import "@vueuse/core";
import "destr";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "cookie-es";
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
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "ofetch";
/* empty css               */
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
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
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$a = {
  __name: "UserProfileHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const profileHeaderData = ref();
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useApi("/pages/profile/header")), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      console.log(error.value);
    } else {
      if (data.value)
        profileHeaderData.value = data.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(profileHeaderData)) {
        _push(ssrRenderComponent(VCard, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VImg, {
                src: unref(profileHeaderData).coverImg,
                "min-height": "125",
                "max-height": "250",
                cover: ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCardText, { class: "d-flex align-bottom flex-sm-row flex-column justify-center gap-x-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex h-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      rounded: "",
                      size: "130",
                      image: unref(profileHeaderData).profileImg,
                      class: "user-profile-avatar mx-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: unref(profileHeaderData).profileImg,
                            height: "120",
                            width: "120"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: unref(profileHeaderData).profileImg,
                              height: "120",
                              width: "120"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0"${_scopeId2}><h4 class="text-h4 text-center text-sm-start mb-2"${_scopeId2}>${ssrInterpolate(unref(profileHeaderData).fullName)}</h4><div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-6"${_scopeId2}><div class="d-flex flex-wrap justify-center justify-sm-start flex-grow-1 gap-6"${_scopeId2}><div class="d-flex align-center gap-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      size: "24",
                      icon: "ri-palette-line"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-body-1 font-weight-medium"${_scopeId2}>${ssrInterpolate(unref(profileHeaderData).designation)}</div></div><div class="d-flex align-center gap-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      size: "24",
                      icon: "ri-map-pin-line"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-body-1 font-weight-medium"${_scopeId2}>${ssrInterpolate(unref(profileHeaderData).location)}</div></div><div class="d-flex align-center gap-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      size: "24",
                      icon: "ri-calendar-line"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-body-1 font-weight-medium"${_scopeId2}>${ssrInterpolate(unref(profileHeaderData).joiningDate)}</div></div></div>`);
                    _push3(ssrRenderComponent(VBtn, { "prepend-icon": "ri-user-follow-line" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Connected `);
                        } else {
                          return [
                            createTextVNode(" Connected ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex h-0" }, [
                        createVNode(VAvatar, {
                          rounded: "",
                          size: "130",
                          image: unref(profileHeaderData).profileImg,
                          class: "user-profile-avatar mx-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: unref(profileHeaderData).profileImg,
                              height: "120",
                              width: "120"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }, 8, ["image"])
                      ]),
                      createVNode("div", { class: "user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0" }, [
                        createVNode("h4", { class: "text-h4 text-center text-sm-start mb-2" }, toDisplayString(unref(profileHeaderData).fullName), 1),
                        createVNode("div", { class: "d-flex align-center justify-center justify-sm-space-between flex-wrap gap-6" }, [
                          createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-start flex-grow-1 gap-6" }, [
                            createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                              createVNode(VIcon, {
                                size: "24",
                                icon: "ri-palette-line"
                              }),
                              createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(unref(profileHeaderData).designation), 1)
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                              createVNode(VIcon, {
                                size: "24",
                                icon: "ri-map-pin-line"
                              }),
                              createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(unref(profileHeaderData).location), 1)
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                              createVNode(VIcon, {
                                size: "24",
                                icon: "ri-calendar-line"
                              }),
                              createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(unref(profileHeaderData).joiningDate), 1)
                            ])
                          ]),
                          createVNode(VBtn, { "prepend-icon": "ri-user-follow-line" }, {
                            default: withCtx(() => [
                              createTextVNode(" Connected ")
                            ]),
                            _: 1
                          })
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
                  src: unref(profileHeaderData).coverImg,
                  "min-height": "125",
                  "max-height": "250",
                  cover: ""
                }, null, 8, ["src"]),
                createVNode(VCardText, { class: "d-flex align-bottom flex-sm-row flex-column justify-center gap-x-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex h-0" }, [
                      createVNode(VAvatar, {
                        rounded: "",
                        size: "130",
                        image: unref(profileHeaderData).profileImg,
                        class: "user-profile-avatar mx-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: unref(profileHeaderData).profileImg,
                            height: "120",
                            width: "120"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }, 8, ["image"])
                    ]),
                    createVNode("div", { class: "user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0" }, [
                      createVNode("h4", { class: "text-h4 text-center text-sm-start mb-2" }, toDisplayString(unref(profileHeaderData).fullName), 1),
                      createVNode("div", { class: "d-flex align-center justify-center justify-sm-space-between flex-wrap gap-6" }, [
                        createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-start flex-grow-1 gap-6" }, [
                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                            createVNode(VIcon, {
                              size: "24",
                              icon: "ri-palette-line"
                            }),
                            createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(unref(profileHeaderData).designation), 1)
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                            createVNode(VIcon, {
                              size: "24",
                              icon: "ri-map-pin-line"
                            }),
                            createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(unref(profileHeaderData).location), 1)
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                            createVNode(VIcon, {
                              size: "24",
                              icon: "ri-calendar-line"
                            }),
                            createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(unref(profileHeaderData).joiningDate), 1)
                          ])
                        ]),
                        createVNode(VBtn, { "prepend-icon": "ri-user-follow-line" }, {
                          default: withCtx(() => [
                            createTextVNode(" Connected ")
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/UserProfileHeader.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute("pages-user-profile-tab");
    const connectionData = ref([]);
    const fetchProjectData = async () => {
      if (router.params.tab === "connections") {
        const data = await $api("/pages/profile", { query: { tab: router.params.tab } }).catch((err) => console.log(err));
        connectionData.value = data;
      }
    };
    watch(router, fetchProjectData, { immediate: true });
    const moreBtnList = [
      {
        title: "Share connection",
        value: "Share connection"
      },
      {
        title: "Block connection",
        value: "Block connection"
      },
      {
        type: "divider",
        class: "my-2"
      },
      {
        title: "Delete",
        value: "Delete",
        class: "text-error"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$b;
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(connectionData), (data) => {
              _push2(ssrRenderComponent(VCol, {
                key: data.name,
                sm: "6",
                lg: "4",
                cols: "12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="vertical-more"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_MoreBtn, {
                            "item-props": "",
                            "menu-list": moreBtnList,
                            class: "text-disabled"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-column align-center justify-center mt-5"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "100",
                                  image: data.avatar,
                                  class: "mb-6"
                                }, null, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h5"${_scopeId4}>${ssrInterpolate(data.name)}</h5><div class="text-body-1"${_scopeId4}>${ssrInterpolate(data.designation)}</div><div class="d-flex align-center flex-wrap gap-4 my-6"${_scopeId4}><!--[-->`);
                                ssrRenderList(data.chips, (chip) => {
                                  _push5(ssrRenderComponent(VChip, {
                                    key: chip.title,
                                    color: chip.color,
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(chip.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(chip.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--></div></div><div class="d-flex justify-space-around"${_scopeId4}><div class="text-center"${_scopeId4}><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(data.projects)}</h5><div class="text-body-1"${_scopeId4}> Projects </div></div><div class="text-center"${_scopeId4}><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(data.tasks)}</h5><div class="text-body-1"${_scopeId4}> Tasks </div></div><div class="text-center"${_scopeId4}><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(data.connections)}</h5><div class="text-body-1"${_scopeId4}> Connections </div></div></div><div class="d-flex justify-center gap-4 mt-6"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  "prepend-icon": data.isConnected ? "ri-user-follow-line" : "ri-user-add-line",
                                  variant: data.isConnected ? "elevated" : "outlined"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.isConnected ? "connected" : "connect")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.isConnected ? "connected" : "connect"), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  rounded: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-mail-open-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-mail-open-line" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-column align-center justify-center mt-5" }, [
                                    createVNode(VAvatar, {
                                      size: "100",
                                      image: data.avatar,
                                      class: "mb-6"
                                    }, null, 8, ["image"]),
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(data.designation), 1),
                                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4 my-6" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(data.chips, (chip) => {
                                        return openBlock(), createBlock(VChip, {
                                          key: chip.title,
                                          color: chip.color,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(chip.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]);
                                      }), 128))
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-around" }, [
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(data.projects), 1),
                                      createVNode("div", { class: "text-body-1" }, " Projects ")
                                    ]),
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(data.tasks), 1),
                                      createVNode("div", { class: "text-body-1" }, " Tasks ")
                                    ]),
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(data.connections), 1),
                                      createVNode("div", { class: "text-body-1" }, " Connections ")
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex justify-center gap-4 mt-6" }, [
                                    createVNode(VBtn, {
                                      "prepend-icon": data.isConnected ? "ri-user-follow-line" : "ri-user-add-line",
                                      variant: data.isConnected ? "elevated" : "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(data.isConnected ? "connected" : "connect"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["prepend-icon", "variant"]),
                                    createVNode(_component_IconBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      rounded: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-mail-open-line" })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", { class: "vertical-more" }, [
                              createVNode(_component_MoreBtn, {
                                "item-props": "",
                                "menu-list": moreBtnList,
                                class: "text-disabled"
                              })
                            ]),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column align-center justify-center mt-5" }, [
                                  createVNode(VAvatar, {
                                    size: "100",
                                    image: data.avatar,
                                    class: "mb-6"
                                  }, null, 8, ["image"]),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(data.designation), 1),
                                  createVNode("div", { class: "d-flex align-center flex-wrap gap-4 my-6" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(data.chips, (chip) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: chip.title,
                                        color: chip.color,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(chip.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex justify-space-around" }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(data.projects), 1),
                                    createVNode("div", { class: "text-body-1" }, " Projects ")
                                  ]),
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(data.tasks), 1),
                                    createVNode("div", { class: "text-body-1" }, " Tasks ")
                                  ]),
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(data.connections), 1),
                                    createVNode("div", { class: "text-body-1" }, " Connections ")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex justify-center gap-4 mt-6" }, [
                                  createVNode(VBtn, {
                                    "prepend-icon": data.isConnected ? "ri-user-follow-line" : "ri-user-add-line",
                                    variant: data.isConnected ? "elevated" : "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.isConnected ? "connected" : "connect"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["prepend-icon", "variant"]),
                                  createVNode(_component_IconBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    rounded: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-mail-open-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "vertical-more" }, [
                            createVNode(_component_MoreBtn, {
                              "item-props": "",
                              "menu-list": moreBtnList,
                              class: "text-disabled"
                            })
                          ]),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column align-center justify-center mt-5" }, [
                                createVNode(VAvatar, {
                                  size: "100",
                                  image: data.avatar,
                                  class: "mb-6"
                                }, null, 8, ["image"]),
                                createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(data.designation), 1),
                                createVNode("div", { class: "d-flex align-center flex-wrap gap-4 my-6" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(data.chips, (chip) => {
                                    return openBlock(), createBlock(VChip, {
                                      key: chip.title,
                                      color: chip.color,
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(chip.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "d-flex justify-space-around" }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(data.projects), 1),
                                  createVNode("div", { class: "text-body-1" }, " Projects ")
                                ]),
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(data.tasks), 1),
                                  createVNode("div", { class: "text-body-1" }, " Tasks ")
                                ]),
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(data.connections), 1),
                                  createVNode("div", { class: "text-body-1" }, " Connections ")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex justify-center gap-4 mt-6" }, [
                                createVNode(VBtn, {
                                  "prepend-icon": data.isConnected ? "ri-user-follow-line" : "ri-user-add-line",
                                  variant: data.isConnected ? "elevated" : "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.isConnected ? "connected" : "connect"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["prepend-icon", "variant"]),
                                createVNode(_component_IconBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  rounded: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-mail-open-line" })
                                  ]),
                                  _: 1
                                })
                              ])
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(connectionData), (data) => {
                return openBlock(), createBlock(VCol, {
                  key: data.name,
                  sm: "6",
                  lg: "4",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "vertical-more" }, [
                          createVNode(_component_MoreBtn, {
                            "item-props": "",
                            "menu-list": moreBtnList,
                            class: "text-disabled"
                          })
                        ]),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column align-center justify-center mt-5" }, [
                              createVNode(VAvatar, {
                                size: "100",
                                image: data.avatar,
                                class: "mb-6"
                              }, null, 8, ["image"]),
                              createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(data.designation), 1),
                              createVNode("div", { class: "d-flex align-center flex-wrap gap-4 my-6" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(data.chips, (chip) => {
                                  return openBlock(), createBlock(VChip, {
                                    key: chip.title,
                                    color: chip.color,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(chip.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]);
                                }), 128))
                              ])
                            ]),
                            createVNode("div", { class: "d-flex justify-space-around" }, [
                              createVNode("div", { class: "text-center" }, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(data.projects), 1),
                                createVNode("div", { class: "text-body-1" }, " Projects ")
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(data.tasks), 1),
                                createVNode("div", { class: "text-body-1" }, " Tasks ")
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(data.connections), 1),
                                createVNode("div", { class: "text-body-1" }, " Connections ")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex justify-center gap-4 mt-6" }, [
                              createVNode(VBtn, {
                                "prepend-icon": data.isConnected ? "ri-user-follow-line" : "ri-user-add-line",
                                variant: data.isConnected ? "elevated" : "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.isConnected ? "connected" : "connect"), 1)
                                ]),
                                _: 2
                              }, 1032, ["prepend-icon", "variant"]),
                              createVNode(_component_IconBtn, {
                                color: "secondary",
                                variant: "outlined",
                                rounded: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-mail-open-line" })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 2
                        }, 1024)
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
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/connections/index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    data: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-body-2 mb-4 text-disabled" data-v-7f713b67${_scopeId2}> ABOUT </div><div class="d-flex flex-column gap-y-4" data-v-7f713b67${_scopeId2}><!--[-->`);
                  ssrRenderList(props.data.about, (item) => {
                    _push3(`<div class="d-flex align-center gap-x-2" data-v-7f713b67${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: item.icon,
                      size: "24"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="font-weight-medium" data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.property)}: </div><div data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.value)}</div></div>`);
                  });
                  _push3(`<!--]--></div><div class="text-body-2 text-disabled mt-6 mb-4" data-v-7f713b67${_scopeId2}> CONTACTS </div><div class="d-flex flex-column gap-y-4" data-v-7f713b67${_scopeId2}><!--[-->`);
                  ssrRenderList(props.data.contacts, (item) => {
                    _push3(`<div class="d-flex align-center gap-x-2" data-v-7f713b67${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: item.icon,
                      size: "24"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="font-weight-medium" data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.property)}: </div><div class="text-truncate" data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.value)}</div></div>`);
                  });
                  _push3(`<!--]--></div><div class="text-body-2 text-disabled mt-6 mb-4" data-v-7f713b67${_scopeId2}> TEAMS </div><div class="d-flex flex-column gap-y-4" data-v-7f713b67${_scopeId2}><!--[-->`);
                  ssrRenderList(props.data.teams, (item) => {
                    _push3(`<div data-v-7f713b67${_scopeId2}><div class="d-flex align-center gap-x-2" data-v-7f713b67${_scopeId2}><div class="font-weight-medium text-no-wrap" data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.property)}</div><div class="text-no-wrap text-truncate" data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.value)}</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-body-2 mb-4 text-disabled" }, " ABOUT "),
                    createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.data.about, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.property,
                          class: "d-flex align-center gap-x-2"
                        }, [
                          createVNode(VIcon, {
                            icon: item.icon,
                            size: "24"
                          }, null, 8, ["icon"]),
                          createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.property) + ": ", 1),
                          createVNode("div", null, toDisplayString(item.value), 1)
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "text-body-2 text-disabled mt-6 mb-4" }, " CONTACTS "),
                    createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.data.contacts, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.property,
                          class: "d-flex align-center gap-x-2"
                        }, [
                          createVNode(VIcon, {
                            icon: item.icon,
                            size: "24"
                          }, null, 8, ["icon"]),
                          createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.property) + ": ", 1),
                          createVNode("div", { class: "text-truncate" }, toDisplayString(item.value), 1)
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "text-body-2 text-disabled mt-6 mb-4" }, " TEAMS "),
                    createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.data.teams, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.property
                        }, [
                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                            createVNode("div", { class: "font-weight-medium text-no-wrap" }, toDisplayString(item.property), 1),
                            createVNode("div", { class: "text-no-wrap text-truncate" }, toDisplayString(item.value), 1)
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-body-2 mb-4 text-disabled" }, " ABOUT "),
                  createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data.about, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.property,
                        class: "d-flex align-center gap-x-2"
                      }, [
                        createVNode(VIcon, {
                          icon: item.icon,
                          size: "24"
                        }, null, 8, ["icon"]),
                        createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.property) + ": ", 1),
                        createVNode("div", null, toDisplayString(item.value), 1)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "text-body-2 text-disabled mt-6 mb-4" }, " CONTACTS "),
                  createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data.contacts, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.property,
                        class: "d-flex align-center gap-x-2"
                      }, [
                        createVNode(VIcon, {
                          icon: item.icon,
                          size: "24"
                        }, null, 8, ["icon"]),
                        createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.property) + ": ", 1),
                        createVNode("div", { class: "text-truncate" }, toDisplayString(item.value), 1)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "text-body-2 text-disabled mt-6 mb-4" }, " TEAMS "),
                  createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data.teams, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.property
                      }, [
                        createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                          createVNode("div", { class: "font-weight-medium text-no-wrap" }, toDisplayString(item.property), 1),
                          createVNode("div", { class: "text-no-wrap text-truncate" }, toDisplayString(item.value), 1)
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
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-body-2 text-disabled mb-4" data-v-7f713b67${_scopeId2}> OVERVIEW </div><div class="d-flex flex-column gap-y-4" data-v-7f713b67${_scopeId2}><!--[-->`);
                  ssrRenderList(props.data.overview, (item) => {
                    _push3(`<div class="d-flex gap-x-2 align-center" data-v-7f713b67${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: item.icon,
                      size: "24"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="font-weight-medium" data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.property)}: </div><div data-v-7f713b67${_scopeId2}>${ssrInterpolate(item.value)}</div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-body-2 text-disabled mb-4" }, " OVERVIEW "),
                    createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.data.overview, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.property,
                          class: "d-flex gap-x-2 align-center"
                        }, [
                          createVNode(VIcon, {
                            icon: item.icon,
                            size: "24"
                          }, null, 8, ["icon"]),
                          createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.property) + ": ", 1),
                          createVNode("div", null, toDisplayString(item.value), 1)
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-body-2 text-disabled mb-4" }, " OVERVIEW "),
                  createVNode("div", { class: "d-flex flex-column gap-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data.overview, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.property,
                        class: "d-flex gap-x-2 align-center"
                      }, [
                        createVNode(VIcon, {
                          icon: item.icon,
                          size: "24"
                        }, null, 8, ["icon"]),
                        createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.property) + ": ", 1),
                        createVNode("div", null, toDisplayString(item.value), 1)
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/profile/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7f713b67"]]);
const _sfc_main$7 = {
  __name: "ActivityTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-bar-chart-2-line",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-bar-chart-2-line",
                      size: "24"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Activity Timeline`);
                      } else {
                        return [
                          createTextVNode("Activity Timeline")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Activity Timeline")
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
                                color: _ctx.$vuetify.theme.current.dark ? "#373b50" : "#eeedf0"
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
                                    color: _ctx.$vuetify.theme.current.dark ? "#373b50" : "#eeedf0"
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
                                  color: _ctx.$vuetify.theme.current.dark ? "#373b50" : "#eeedf0"
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
                                color: _ctx.$vuetify.theme.current.dark ? "#373b50" : "#eeedf0"
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
              createVNode(VCardItem, null, {
                prepend: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-bar-chart-2-line",
                    size: "24"
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Activity Timeline")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
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
                              color: _ctx.$vuetify.theme.current.dark ? "#373b50" : "#eeedf0"
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/profile/ActivityTimeline.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Connection",
  __ssrInlineRender: true,
  props: {
    connectionsData: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const moreList = [
      {
        title: "Share connections",
        value: "Share connections"
      },
      {
        title: "Suggest edits",
        value: "Suggest edits"
      },
      {
        title: "Report Bug",
        value: "Report Bug"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$b;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Connection",
        class: "connectionCard"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n2" data-v-3cf12a57${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "me-n2" }, [
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
                        ssrRenderList(props.connectionsData, (data) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: data.name
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "38",
                                  image: data.avatar
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    size: "38",
                                    image: data.avatar
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "",
                                  rounded: "",
                                  variant: data.isFriend ? "elevated" : "outlined"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.isFriend ? "ri-user-line" : "ri-user-add-line"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.isFriend ? "ri-user-line" : "ri-user-add-line"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    icon: "",
                                    rounded: "",
                                    variant: data.isFriend ? "elevated" : "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.isFriend ? "ri-user-line" : "ri-user-add-line"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["variant"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.connections)} Connections`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.connections) + " Connections", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.connections) + " Connections", 1)
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
                        _push4(ssrRenderComponent(VListItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, { class: "pt-1 text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "connections" } } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="mb-0" data-v-3cf12a57${_scopeId6}> View all connections </p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "mb-0" }, " View all connections ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "connections" } } }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "mb-0" }, " View all connections ")
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
                                createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "connections" } } }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "mb-0" }, " View all connections ")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(props.connectionsData, (data) => {
                            return openBlock(), createBlock(VListItem, {
                              key: data.name
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "38",
                                  image: data.avatar
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VBtn, {
                                  icon: "",
                                  rounded: "",
                                  variant: data.isFriend ? "elevated" : "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.isFriend ? "ri-user-line" : "ri-user-add-line"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["variant"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.connections) + " Connections", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "connections" } } }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "mb-0" }, " View all connections ")
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
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.connectionsData, (data) => {
                          return openBlock(), createBlock(VListItem, {
                            key: data.name
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "38",
                                image: data.avatar
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "",
                                rounded: "",
                                variant: data.isFriend ? "elevated" : "outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: data.isFriend ? "ri-user-line" : "ri-user-add-line"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["variant"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.connections) + " Connections", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        createVNode(VListItem, null, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "connections" } } }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "mb-0" }, " View all connections ")
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.connectionsData, (data) => {
                        return openBlock(), createBlock(VListItem, {
                          key: data.name
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              size: "38",
                              image: data.avatar
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "",
                              rounded: "",
                              variant: data.isFriend ? "elevated" : "outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: data.isFriend ? "ri-user-line" : "ri-user-add-line"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["variant"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.connections) + " Connections", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(VListItem, null, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "connections" } } }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "mb-0" }, " View all connections ")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/profile/Connection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Connection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-3cf12a57"]]);
const _sfc_main$5 = {
  __name: "ProjectList",
  __ssrInlineRender: true,
  setup(__props) {
    const projectTableHeaders = [
      {
        title: "PROJECT",
        key: "project"
      },
      {
        title: "LEADER",
        key: "leader"
      },
      {
        title: "Team",
        key: "team"
      },
      {
        title: "PROGRESS",
        key: "progress"
      },
      {
        title: "Action",
        key: "Action",
        sortable: false
      }
    ];
    const projects = [
      {
        logo: react,
        name: "BGC eCommerce App",
        project: "React Project",
        leader: "Eileen",
        progress: 78,
        hours: "18:42",
        team: [
          avatar1,
          avatar8,
          avatar6
        ],
        extraMembers: 3
      },
      {
        logo: figma,
        name: "Falcon Logo Design",
        project: "Figma Project",
        leader: "Owen",
        progress: 25,
        hours: "20:42",
        team: [
          avatar5,
          avatar2
        ]
      },
      {
        logo: vue,
        name: "Dashboard Design",
        project: "Vuejs Project",
        leader: "Keith",
        progress: 62,
        hours: "120:87",
        team: [
          avatar8,
          avatar2,
          avatar1
        ]
      },
      {
        logo: xamarin,
        name: "Foodista mobile app",
        project: "Xamarin Project",
        leader: "Merline",
        progress: 8,
        hours: "120:87",
        team: [
          avatar3,
          avatar4,
          avatar7
        ],
        extraMembers: 8
      },
      {
        logo: python,
        name: "Dojo Email App",
        project: "Python Project",
        leader: "Harmonia",
        progress: 51,
        hours: "230:10",
        team: [
          avatar4,
          avatar3,
          avatar1
        ],
        extraMembers: 5
      },
      {
        logo: sketch,
        name: "Blockchain Website",
        project: "Sketch Project",
        leader: "Allyson",
        progress: 92,
        hours: "342:41",
        team: [
          avatar1,
          avatar8
        ]
      },
      {
        logo: html5,
        name: "Hoffman Website",
        project: "HTML Project",
        leader: "Georgie",
        progress: 80,
        hours: "12:45",
        team: [
          avatar1,
          avatar8,
          avatar6
        ]
      }
    ];
    const moreList = [
      {
        title: "Download",
        value: "Download"
      },
      {
        title: "Delete",
        value: "Delete"
      },
      {
        title: "View",
        value: "View"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$b;
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Project List",
        class: "projectList"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              headers: projectTableHeaders,
              items: projects,
              "hide-default-footer": "",
              "show-select": "",
              "item-value": "name"
            }, {
              "item.project": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: 34,
                    image: item.logo
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="text-h6 text-no-wrap"${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="text-body-2"${_scopeId2}>${ssrInterpolate(item.project)}</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                      createVNode(VAvatar, {
                        size: 34,
                        image: item.logo
                      }, null, 8, ["image"]),
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-h6 text-no-wrap" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(item.project), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.leader": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-base text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.leader)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-base text-high-emphasis" }, toDisplayString(item.leader), 1)
                  ];
                }
              }),
              "item.team": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex"${_scopeId2}><div class="v-avatar-group"${_scopeId2}><!--[-->`);
                  ssrRenderList(item.team, (data, index) => {
                    _push3(ssrRenderComponent(VAvatar, {
                      key: index,
                      size: "30"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, { src: data }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, { src: data }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (item.extraMembers) {
                    _push3(ssrRenderComponent(VAvatar, {
                      color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                      size: 30
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-caption text-high-emphasis"${_scopeId3}> +${ssrInterpolate(item.extraMembers)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-caption text-high-emphasis" }, " +" + toDisplayString(item.extraMembers), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex" }, [
                      createVNode("div", { class: "v-avatar-group" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.team, (data, index) => {
                          return openBlock(), createBlock(VAvatar, {
                            key: index,
                            size: "30"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, { src: data }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        item.extraMembers ? (openBlock(), createBlock(VAvatar, {
                          key: 0,
                          color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                          size: 30
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-high-emphasis" }, " +" + toDisplayString(item.extraMembers), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              "item.progress": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-3"${_scopeId2}><div class="flex-grow-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VProgressLinear, {
                    height: 6,
                    "model-value": item.progress,
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.progress)}% </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-3" }, [
                      createVNode("div", { class: "flex-grow-1" }, [
                        createVNode(VProgressLinear, {
                          height: 6,
                          "model-value": item.progress,
                          rounded: ""
                        }, null, 8, ["model-value"])
                      ]),
                      createVNode("div", { class: "text-high-emphasis" }, toDisplayString(item.progress) + "% ", 1)
                    ])
                  ];
                }
              }),
              "item.Action": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, {
                    "menu-list": moreList,
                    class: "text-medium-emphasis"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, {
                      "menu-list": moreList,
                      class: "text-medium-emphasis"
                    })
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
              createVNode(VDataTable, {
                headers: projectTableHeaders,
                items: projects,
                "hide-default-footer": "",
                "show-select": "",
                "item-value": "name"
              }, {
                "item.project": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                    createVNode(VAvatar, {
                      size: 34,
                      image: item.logo
                    }, null, 8, ["image"]),
                    createVNode("div", null, [
                      createVNode("h6", { class: "text-h6 text-no-wrap" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(item.project), 1)
                    ])
                  ])
                ]),
                "item.leader": withCtx(({ item }) => [
                  createVNode("div", { class: "text-base text-high-emphasis" }, toDisplayString(item.leader), 1)
                ]),
                "item.team": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex" }, [
                    createVNode("div", { class: "v-avatar-group" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.team, (data, index) => {
                        return openBlock(), createBlock(VAvatar, {
                          key: index,
                          size: "30"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, { src: data }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      item.extraMembers ? (openBlock(), createBlock(VAvatar, {
                        key: 0,
                        color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                        size: 30
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-caption text-high-emphasis" }, " +" + toDisplayString(item.extraMembers), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                "item.progress": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center gap-3" }, [
                    createVNode("div", { class: "flex-grow-1" }, [
                      createVNode(VProgressLinear, {
                        height: 6,
                        "model-value": item.progress,
                        rounded: ""
                      }, null, 8, ["model-value"])
                    ]),
                    createVNode("div", { class: "text-high-emphasis" }, toDisplayString(item.progress) + "% ", 1)
                  ])
                ]),
                "item.Action": withCtx(() => [
                  createVNode(_component_MoreBtn, {
                    "menu-list": moreList,
                    class: "text-medium-emphasis"
                  })
                ]),
                bottom: withCtx(() => []),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/profile/ProjectList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Teams",
  __ssrInlineRender: true,
  props: {
    teamsData: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const moreList = [
      {
        title: "Share connections",
        value: "Share connections"
      },
      {
        title: "Suggest edits",
        value: "Suggest edits"
      },
      {
        title: "Report Bug",
        value: "Report Bug"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$b;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(VCard, mergeProps({
        title: "Teams",
        class: "teamsCard"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="me-n2" data-v-97199807${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "me-n2" }, [
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
                        ssrRenderList(props.teamsData, (data) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: data.title
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "38",
                                  image: data.avatar
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    size: "38",
                                    image: data.avatar
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  color: data.ChipColor,
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.chipText)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.chipText), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    color: data.ChipColor,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.chipText), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium mb-1" }, {
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
                                      _push6(`${ssrInterpolate(data.members)} Members`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.members) + " Members", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.members) + " Members", 1)
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
                        _push4(ssrRenderComponent(VListItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, { class: "pt-1 text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "teams" } } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="mb-0" data-v-97199807${_scopeId6}> View all Teams </p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "mb-0" }, " View all Teams ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "teams" } } }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "mb-0" }, " View all Teams ")
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
                                createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "teams" } } }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "mb-0" }, " View all Teams ")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(props.teamsData, (data) => {
                            return openBlock(), createBlock(VListItem, {
                              key: data.title
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "38",
                                  image: data.avatar
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VChip, {
                                  color: data.ChipColor,
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.chipText), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.members) + " Members", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "teams" } } }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "mb-0" }, " View all Teams ")
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
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.teamsData, (data) => {
                          return openBlock(), createBlock(VListItem, {
                            key: data.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "38",
                                image: data.avatar
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VChip, {
                                color: data.ChipColor,
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.chipText), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.members) + " Members", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        createVNode(VListItem, null, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "teams" } } }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "mb-0" }, " View all Teams ")
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.teamsData, (data) => {
                        return openBlock(), createBlock(VListItem, {
                          key: data.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              size: "38",
                              image: data.avatar
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode(VChip, {
                              color: data.ChipColor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.chipText), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.members) + " Members", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(VListItem, null, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, { class: "pt-1 text-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "teams" } } }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "mb-0" }, " View all Teams ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/profile/Teams.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Teams = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-97199807"]]);
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute("pages-user-profile-tab");
    const profileTabData = ref();
    const fetchAboutData = async () => {
      if (router.params.tab === "profile") {
        const data = await $api("/pages/profile", { query: { tab: router.params.tab } }).catch((err) => console.log(err));
        profileTabData.value = data;
      }
    };
    watch(router, fetchAboutData, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(profileTabData)) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                md: "4",
                cols: "12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(About, { data: unref(profileTabData) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(About, { data: unref(profileTabData) }, null, 8, ["data"])
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
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$7, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$7)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(Connection, {
                                  "connections-data": unref(profileTabData).connections
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(Connection, {
                                    "connections-data": unref(profileTabData).connections
                                  }, null, 8, ["connections-data"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(Teams, {
                                  "teams-data": unref(profileTabData).teamsTech
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(Teams, {
                                    "teams-data": unref(profileTabData).teamsTech
                                  }, null, 8, ["teams-data"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$5)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
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
                                createVNode(Connection, {
                                  "connections-data": unref(profileTabData).connections
                                }, null, 8, ["connections-data"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(Teams, {
                                  "teams-data": unref(profileTabData).teamsTech
                                }, null, 8, ["teams-data"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5)
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
                          createVNode(VCol, { cols: "12" }, {
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
                              createVNode(Connection, {
                                "connections-data": unref(profileTabData).connections
                              }, null, 8, ["connections-data"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(Teams, {
                                "teams-data": unref(profileTabData).teamsTech
                              }, null, 8, ["teams-data"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
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
                  md: "4",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(About, { data: unref(profileTabData) }, null, 8, ["data"])
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
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
                            createVNode(Connection, {
                              "connections-data": unref(profileTabData).connections
                            }, null, 8, ["connections-data"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(Teams, {
                              "teams-data": unref(profileTabData).teamsTech
                            }, null, 8, ["teams-data"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/profile/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute("pages-user-profile-tab");
    const projectData = ref([]);
    const fetchProjectData = async () => {
      if (router.params.tab === "projects") {
        const data = await $api("/pages/profile", { query: { tab: router.params.tab } }).catch((err) => console.log(err));
        projectData.value = data;
      }
    };
    watch(router, fetchProjectData, { immediate: true });
    const moreList = [
      {
        title: "Rename Project",
        value: "Rename Project"
      },
      {
        title: "View Details",
        value: "View Details"
      },
      {
        title: "Add to favorites",
        value: "Add to favorites"
      },
      {
        type: "divider",
        class: "my-2"
      },
      {
        title: "Leave Project",
        value: "Leave Project",
        class: "text-error"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$b;
      if (unref(projectData)) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(projectData), (data) => {
                _push2(ssrRenderComponent(VCol, {
                  key: data.title,
                  cols: "12",
                  sm: "6",
                  lg: "4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCard, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                              prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VAvatar, {
                                    image: data.avatar,
                                    size: "38",
                                    class: "me-2"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VAvatar, {
                                      image: data.avatar,
                                      size: "38",
                                      class: "me-2"
                                    }, null, 8, ["image"])
                                  ];
                                }
                              }),
                              append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_MoreBtn, {
                                    "item-props": "",
                                    "menu-list": moreList,
                                    class: "text-disabled"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", null, [
                                      createVNode(_component_MoreBtn, {
                                        "item-props": "",
                                        "menu-list": moreList,
                                        class: "text-disabled"
                                      })
                                    ])
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCardTitle, null, {
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
                                  _push5(`<div class="text-body-1"${_scopeId4}><span class="font-weight-medium"${_scopeId4}>Client:</span> ${ssrInterpolate(data.client)}</div>`);
                                } else {
                                  return [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(data.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "text-body-1" }, [
                                      createVNode("span", { class: "font-weight-medium" }, "Client:"),
                                      createTextVNode(" " + toDisplayString(data.client), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCardText, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4"${_scopeId4}><div class="py-2 px-3 bg-var-theme-background rounded-lg"${_scopeId4}><div${_scopeId4}><span class="text-high-emphasis font-weight-medium"${_scopeId4}>${ssrInterpolate(data.budgetSpent)}</span>/${ssrInterpolate(data.budget)}</div><div${_scopeId4}>Total Budget</div></div><div${_scopeId4}><div${_scopeId4}><span class="text-high-emphasis font-weight-medium"${_scopeId4}>Start Date:</span> ${ssrInterpolate(data.startDate)}</div><h6 class="text-base font-weight-medium"${_scopeId4}> Deadline: <span class="text-body-1"${_scopeId4}>${ssrInterpolate(data.deadline)}</span></h6></div></div><p class="mt-4 mb-0 clamp-text"${_scopeId4}>${ssrInterpolate(data.description)}</p>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4" }, [
                                      createVNode("div", { class: "py-2 px-3 bg-var-theme-background rounded-lg" }, [
                                        createVNode("div", null, [
                                          createVNode("span", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(data.budgetSpent), 1),
                                          createTextVNode("/" + toDisplayString(data.budget), 1)
                                        ]),
                                        createVNode("div", null, "Total Budget")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", null, [
                                          createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "Start Date:"),
                                          createTextVNode(" " + toDisplayString(data.startDate), 1)
                                        ]),
                                        createVNode("h6", { class: "text-base font-weight-medium" }, [
                                          createTextVNode(" Deadline: "),
                                          createVNode("span", { class: "text-body-1" }, toDisplayString(data.deadline), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("p", { class: "mt-4 mb-0 clamp-text" }, toDisplayString(data.description), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCardText, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex align-center justify-space-between flex-wrap gap-2"${_scopeId4}><div${_scopeId4}><span class="font-weight-medium text-high-emphasis"${_scopeId4}>All Hours:</span> ${ssrInterpolate(data.hours)}</div>`);
                                  _push5(ssrRenderComponent(VChip, {
                                    color: data.chipColor,
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(data.chipText)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(data.chipText), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div><div class="d-flex align-center justify-space-between flex-wrap text-caption text-medium-emphasis mt-4 mb-2"${_scopeId4}><div${_scopeId4}>Tasks: ${ssrInterpolate(data.tasks)}</div><div${_scopeId4}>${ssrInterpolate(Math.round(data.completedTask / data.totalTask * 100))}% Completed</div></div>`);
                                  _push5(ssrRenderComponent(VProgressLinear, {
                                    rounded: "",
                                    height: "8",
                                    "model-value": data.completedTask,
                                    max: data.totalTask,
                                    color: "primary"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<div class="d-flex align-center justify-space-between flex-wrap gap-2 mt-4"${_scopeId4}><div class="d-flex align-center"${_scopeId4}><div class="v-avatar-group me-3"${_scopeId4}><!--[-->`);
                                  ssrRenderList(data.avatarGroup, (avatar) => {
                                    _push5(ssrRenderComponent(VAvatar, {
                                      key: avatar.name,
                                      image: avatar.avatar,
                                      size: 32
                                    }, null, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]--></div><div class="text-sm text-disabled"${_scopeId4}>${ssrInterpolate(data.members)}</div></div><div class="d-flex gap-x-1 align-center text-disabled"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-wechat-line",
                                    size: "24"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<div${_scopeId4}>${ssrInterpolate(data.comments)}</div></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-weight-medium text-high-emphasis" }, "All Hours:"),
                                        createTextVNode(" " + toDisplayString(data.hours), 1)
                                      ]),
                                      createVNode(VChip, {
                                        color: data.chipColor,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(data.chipText), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap text-caption text-medium-emphasis mt-4 mb-2" }, [
                                      createVNode("div", null, "Tasks: " + toDisplayString(data.tasks), 1),
                                      createVNode("div", null, toDisplayString(Math.round(data.completedTask / data.totalTask * 100)) + "% Completed", 1)
                                    ]),
                                    createVNode(VProgressLinear, {
                                      rounded: "",
                                      height: "8",
                                      "model-value": data.completedTask,
                                      max: data.totalTask,
                                      color: "primary"
                                    }, null, 8, ["model-value", "max"]),
                                    createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2 mt-4" }, [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode("div", { class: "v-avatar-group me-3" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(data.avatarGroup, (avatar) => {
                                            return openBlock(), createBlock(VAvatar, {
                                              key: avatar.name,
                                              image: avatar.avatar,
                                              size: 32
                                            }, null, 8, ["image"]);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "text-sm text-disabled" }, toDisplayString(data.members), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex gap-x-1 align-center text-disabled" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-wechat-line",
                                          size: "24"
                                        }),
                                        createVNode("div", null, toDisplayString(data.comments), 1)
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCardItem, { class: "pb-4" }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    image: data.avatar,
                                    size: "38",
                                    class: "me-2"
                                  }, null, 8, ["image"])
                                ]),
                                append: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode(_component_MoreBtn, {
                                      "item-props": "",
                                      "menu-list": moreList,
                                      class: "text-disabled"
                                    })
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "text-body-1" }, [
                                    createVNode("span", { class: "font-weight-medium" }, "Client:"),
                                    createTextVNode(" " + toDisplayString(data.client), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4" }, [
                                    createVNode("div", { class: "py-2 px-3 bg-var-theme-background rounded-lg" }, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(data.budgetSpent), 1),
                                        createTextVNode("/" + toDisplayString(data.budget), 1)
                                      ]),
                                      createVNode("div", null, "Total Budget")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "Start Date:"),
                                        createTextVNode(" " + toDisplayString(data.startDate), 1)
                                      ]),
                                      createVNode("h6", { class: "text-base font-weight-medium" }, [
                                        createTextVNode(" Deadline: "),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(data.deadline), 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode("p", { class: "mt-4 mb-0 clamp-text" }, toDisplayString(data.description), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VDivider),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "font-weight-medium text-high-emphasis" }, "All Hours:"),
                                      createTextVNode(" " + toDisplayString(data.hours), 1)
                                    ]),
                                    createVNode(VChip, {
                                      color: data.chipColor,
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(data.chipText), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap text-caption text-medium-emphasis mt-4 mb-2" }, [
                                    createVNode("div", null, "Tasks: " + toDisplayString(data.tasks), 1),
                                    createVNode("div", null, toDisplayString(Math.round(data.completedTask / data.totalTask * 100)) + "% Completed", 1)
                                  ]),
                                  createVNode(VProgressLinear, {
                                    rounded: "",
                                    height: "8",
                                    "model-value": data.completedTask,
                                    max: data.totalTask,
                                    color: "primary"
                                  }, null, 8, ["model-value", "max"]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2 mt-4" }, [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode("div", { class: "v-avatar-group me-3" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(data.avatarGroup, (avatar) => {
                                          return openBlock(), createBlock(VAvatar, {
                                            key: avatar.name,
                                            image: avatar.avatar,
                                            size: 32
                                          }, null, 8, ["image"]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "text-sm text-disabled" }, toDisplayString(data.members), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex gap-x-1 align-center text-disabled" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-wechat-line",
                                        size: "24"
                                      }),
                                      createVNode("div", null, toDisplayString(data.comments), 1)
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
                    } else {
                      return [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pb-4" }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  image: data.avatar,
                                  size: "38",
                                  class: "me-2"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode(_component_MoreBtn, {
                                    "item-props": "",
                                    "menu-list": moreList,
                                    class: "text-disabled"
                                  })
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "text-body-1" }, [
                                  createVNode("span", { class: "font-weight-medium" }, "Client:"),
                                  createTextVNode(" " + toDisplayString(data.client), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4" }, [
                                  createVNode("div", { class: "py-2 px-3 bg-var-theme-background rounded-lg" }, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(data.budgetSpent), 1),
                                      createTextVNode("/" + toDisplayString(data.budget), 1)
                                    ]),
                                    createVNode("div", null, "Total Budget")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "Start Date:"),
                                      createTextVNode(" " + toDisplayString(data.startDate), 1)
                                    ]),
                                    createVNode("h6", { class: "text-base font-weight-medium" }, [
                                      createTextVNode(" Deadline: "),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(data.deadline), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("p", { class: "mt-4 mb-0 clamp-text" }, toDisplayString(data.description), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VDivider),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "font-weight-medium text-high-emphasis" }, "All Hours:"),
                                    createTextVNode(" " + toDisplayString(data.hours), 1)
                                  ]),
                                  createVNode(VChip, {
                                    color: data.chipColor,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.chipText), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap text-caption text-medium-emphasis mt-4 mb-2" }, [
                                  createVNode("div", null, "Tasks: " + toDisplayString(data.tasks), 1),
                                  createVNode("div", null, toDisplayString(Math.round(data.completedTask / data.totalTask * 100)) + "% Completed", 1)
                                ]),
                                createVNode(VProgressLinear, {
                                  rounded: "",
                                  height: "8",
                                  "model-value": data.completedTask,
                                  max: data.totalTask,
                                  color: "primary"
                                }, null, 8, ["model-value", "max"]),
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2 mt-4" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("div", { class: "v-avatar-group me-3" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(data.avatarGroup, (avatar) => {
                                        return openBlock(), createBlock(VAvatar, {
                                          key: avatar.name,
                                          image: avatar.avatar,
                                          size: 32
                                        }, null, 8, ["image"]);
                                      }), 128))
                                    ]),
                                    createVNode("div", { class: "text-sm text-disabled" }, toDisplayString(data.members), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex gap-x-1 align-center text-disabled" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-wechat-line",
                                      size: "24"
                                    }),
                                    createVNode("div", null, toDisplayString(data.comments), 1)
                                  ])
                                ])
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
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(projectData), (data) => {
                  return openBlock(), createBlock(VCol, {
                    key: data.title,
                    cols: "12",
                    sm: "6",
                    lg: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                image: data.avatar,
                                size: "38",
                                class: "me-2"
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(_component_MoreBtn, {
                                  "item-props": "",
                                  "menu-list": moreList,
                                  class: "text-disabled"
                                })
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "text-body-1" }, [
                                createVNode("span", { class: "font-weight-medium" }, "Client:"),
                                createTextVNode(" " + toDisplayString(data.client), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4" }, [
                                createVNode("div", { class: "py-2 px-3 bg-var-theme-background rounded-lg" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(data.budgetSpent), 1),
                                    createTextVNode("/" + toDisplayString(data.budget), 1)
                                  ]),
                                  createVNode("div", null, "Total Budget")
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "text-high-emphasis font-weight-medium" }, "Start Date:"),
                                    createTextVNode(" " + toDisplayString(data.startDate), 1)
                                  ]),
                                  createVNode("h6", { class: "text-base font-weight-medium" }, [
                                    createTextVNode(" Deadline: "),
                                    createVNode("span", { class: "text-body-1" }, toDisplayString(data.deadline), 1)
                                  ])
                                ])
                              ]),
                              createVNode("p", { class: "mt-4 mb-0 clamp-text" }, toDisplayString(data.description), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "font-weight-medium text-high-emphasis" }, "All Hours:"),
                                  createTextVNode(" " + toDisplayString(data.hours), 1)
                                ]),
                                createVNode(VChip, {
                                  color: data.chipColor,
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.chipText), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap text-caption text-medium-emphasis mt-4 mb-2" }, [
                                createVNode("div", null, "Tasks: " + toDisplayString(data.tasks), 1),
                                createVNode("div", null, toDisplayString(Math.round(data.completedTask / data.totalTask * 100)) + "% Completed", 1)
                              ]),
                              createVNode(VProgressLinear, {
                                rounded: "",
                                height: "8",
                                "model-value": data.completedTask,
                                max: data.totalTask,
                                color: "primary"
                              }, null, 8, ["model-value", "max"]),
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2 mt-4" }, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("div", { class: "v-avatar-group me-3" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(data.avatarGroup, (avatar) => {
                                      return openBlock(), createBlock(VAvatar, {
                                        key: avatar.name,
                                        image: avatar.avatar,
                                        size: 32
                                      }, null, 8, ["image"]);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "text-sm text-disabled" }, toDisplayString(data.members), 1)
                                ]),
                                createVNode("div", { class: "d-flex gap-x-1 align-center text-disabled" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-wechat-line",
                                    size: "24"
                                  }),
                                  createVNode("div", null, toDisplayString(data.comments), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/projects/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute("pages-user-profile-tab");
    const teamData = ref([]);
    const fetchTeamData = async () => {
      if (router.params.tab === "teams") {
        const data = await $api("/pages/profile", { query: { tab: router.params.tab } }).catch((err) => console.log(err));
        teamData.value = data;
      }
    };
    watch(router, fetchTeamData, { immediate: true });
    const moreList = [
      {
        title: "Rename Project",
        value: "Rename Project"
      },
      {
        title: "View Details",
        value: "View Details"
      },
      {
        title: "Add to favorites",
        value: "Add to favorites"
      },
      {
        type: "divider",
        class: "my-2"
      },
      {
        title: "Leave Project",
        value: "Leave Project",
        class: "text-error"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_MoreBtn = _sfc_main$b;
      if (unref(teamData)) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(teamData), (team) => {
                _push2(ssrRenderComponent(VCol, {
                  key: team.title,
                  cols: "12",
                  md: "6",
                  lg: "4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCard, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                              prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VAvatar, {
                                    size: "38",
                                    image: team == null ? void 0 : team.avatar
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VAvatar, {
                                      size: "38",
                                      image: team == null ? void 0 : team.avatar
                                    }, null, 8, ["image"])
                                  ];
                                }
                              }),
                              append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_IconBtn, { class: "me-1" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, {
                                          icon: "ri-star-line",
                                          color: "disabled"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            icon: "ri-star-line",
                                            color: "disabled"
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_MoreBtn, {
                                    "item-props": "",
                                    "menu-list": moreList,
                                    color: "disabled"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_IconBtn, { class: "me-1" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-star-line",
                                          color: "disabled"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MoreBtn, {
                                      "item-props": "",
                                      "menu-list": moreList,
                                      color: "disabled"
                                    })
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCardTitle, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(team.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(team.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(team.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCardText, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-base mb-4"${_scopeId4}>${ssrInterpolate(team.description)}</div><div class="d-flex"${_scopeId4}><div class="v-avatar-group"${_scopeId4}><!--[-->`);
                                  ssrRenderList(team.avatarGroup, (data) => {
                                    _push5(ssrRenderComponent(VAvatar, {
                                      key: data.name,
                                      size: "32"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VImg, {
                                            src: data.avatar
                                          }, null, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(data.name)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(data.name), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VImg, {
                                              src: data.avatar
                                            }, null, 8, ["src"]),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(data.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                  if (team.extraMembers) {
                                    _push5(ssrRenderComponent(VAvatar, {
                                      color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                                      size: 32
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="text-body-2 text-high-emphasis font-weight-medium"${_scopeId5}> +${ssrInterpolate(team.extraMembers)}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium" }, " +" + toDisplayString(team.extraMembers), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                  _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                  _push5(`<div class="d-flex align-center gap-2"${_scopeId4}><!--[-->`);
                                  ssrRenderList(team.chips, (data) => {
                                    _push5(ssrRenderComponent(VChip, {
                                      key: data.title,
                                      color: data.color,
                                      size: "small"
                                    }, {
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
                                  });
                                  _push5(`<!--]--></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "text-base mb-4" }, toDisplayString(team.description), 1),
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode("div", { class: "v-avatar-group" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(team.avatarGroup, (data) => {
                                          return openBlock(), createBlock(VAvatar, {
                                            key: data.name,
                                            size: "32"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: data.avatar
                                              }, null, 8, ["src"]),
                                              createVNode(VTooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(data.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128)),
                                        team.extraMembers ? (openBlock(), createBlock(VAvatar, {
                                          key: 0,
                                          color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                                          size: 32
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium" }, " +" + toDisplayString(team.extraMembers), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])) : createCommentVNode("", true)
                                      ]),
                                      createVNode(VSpacer),
                                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(team.chips, (data) => {
                                          return openBlock(), createBlock(VChip, {
                                            key: data.title,
                                            color: data.color,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(data.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]);
                                        }), 128))
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCardItem, { class: "pb-4" }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "38",
                                    image: team == null ? void 0 : team.avatar
                                  }, null, 8, ["image"])
                                ]),
                                append: withCtx(() => [
                                  createVNode(_component_IconBtn, { class: "me-1" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-star-line",
                                        color: "disabled"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MoreBtn, {
                                    "item-props": "",
                                    "menu-list": moreList,
                                    color: "disabled"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(team.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-base mb-4" }, toDisplayString(team.description), 1),
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode("div", { class: "v-avatar-group" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(team.avatarGroup, (data) => {
                                        return openBlock(), createBlock(VAvatar, {
                                          key: data.name,
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: data.avatar
                                            }, null, 8, ["src"]),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(data.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128)),
                                      team.extraMembers ? (openBlock(), createBlock(VAvatar, {
                                        key: 0,
                                        color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                                        size: 32
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium" }, " +" + toDisplayString(team.extraMembers), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])) : createCommentVNode("", true)
                                    ]),
                                    createVNode(VSpacer),
                                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(team.chips, (data) => {
                                        return openBlock(), createBlock(VChip, {
                                          key: data.title,
                                          color: data.color,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(data.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]);
                                      }), 128))
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
                    } else {
                      return [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pb-4" }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "38",
                                  image: team == null ? void 0 : team.avatar
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode(_component_IconBtn, { class: "me-1" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-star-line",
                                      color: "disabled"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MoreBtn, {
                                  "item-props": "",
                                  "menu-list": moreList,
                                  color: "disabled"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(team.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-base mb-4" }, toDisplayString(team.description), 1),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode("div", { class: "v-avatar-group" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(team.avatarGroup, (data) => {
                                      return openBlock(), createBlock(VAvatar, {
                                        key: data.name,
                                        size: "32"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: data.avatar
                                          }, null, 8, ["src"]),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(data.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128)),
                                    team.extraMembers ? (openBlock(), createBlock(VAvatar, {
                                      key: 0,
                                      color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                                      size: 32
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium" }, " +" + toDisplayString(team.extraMembers), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : createCommentVNode("", true)
                                  ]),
                                  createVNode(VSpacer),
                                  createVNode("div", { class: "d-flex align-center gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(team.chips, (data) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: data.title,
                                        color: data.color,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(data.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]);
                                    }), 128))
                                  ])
                                ])
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
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(teamData), (team) => {
                  return openBlock(), createBlock(VCol, {
                    key: team.title,
                    cols: "12",
                    md: "6",
                    lg: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "38",
                                image: team == null ? void 0 : team.avatar
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode(_component_IconBtn, { class: "me-1" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-star-line",
                                    color: "disabled"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MoreBtn, {
                                "item-props": "",
                                "menu-list": moreList,
                                color: "disabled"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(team.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-base mb-4" }, toDisplayString(team.description), 1),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode("div", { class: "v-avatar-group" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(team.avatarGroup, (data) => {
                                    return openBlock(), createBlock(VAvatar, {
                                      key: data.name,
                                      size: "32"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: data.avatar
                                        }, null, 8, ["src"]),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(data.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  team.extraMembers ? (openBlock(), createBlock(VAvatar, {
                                    key: 0,
                                    color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0",
                                    size: 32
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium" }, " +" + toDisplayString(team.extraMembers), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])) : createCommentVNode("", true)
                                ]),
                                createVNode(VSpacer),
                                createVNode("div", { class: "d-flex align-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(team.chips, (data) => {
                                    return openBlock(), createBlock(VChip, {
                                      key: data.title,
                                      color: data.color,
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(data.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/user-profile/team/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[tab]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute("pages-user-profile-tab");
    const activeTab = computed({
      get: () => route.params.tab,
      set: () => route.params.tab
    });
    const tabs = [
      {
        title: "Profile",
        icon: "ri-user-line",
        tab: "profile"
      },
      {
        title: "Team",
        icon: "ri-team-line",
        tab: "teams"
      },
      {
        title: "Projects",
        icon: "ri-computer-line",
        tab: "projects"
      },
      {
        title: "Connections",
        icon: "ri-link",
        tab: "connections"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$a, { class: "mb-6" }, null, _parent));
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "v-tabs-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(tabs, (item) => {
              _push2(ssrRenderComponent(VTab, {
                key: item.icon,
                value: item.tab,
                to: { name: "pages-user-profile-tab", params: { tab: item.tab } }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      start: "",
                      icon: item.icon
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        start: "",
                        icon: item.icon
                      }, null, 8, ["icon"]),
                      createTextVNode(" " + toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(tabs, (item) => {
                return createVNode(VTab, {
                  key: item.icon,
                  value: item.tab,
                  to: { name: "pages-user-profile-tab", params: { tab: item.tab } }
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      start: "",
                      icon: item.icon
                    }, null, 8, ["icon"]),
                    createTextVNode(" " + toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value", "to"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "mt-6 disable-tab-transition",
        touch: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: "profile" }, {
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
            _push2(ssrRenderComponent(VWindowItem, { value: "teams" }, {
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
            _push2(ssrRenderComponent(VWindowItem, { value: "projects" }, {
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
            _push2(ssrRenderComponent(VWindowItem, { value: "connections" }, {
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
          } else {
            return [
              createVNode(VWindowItem, { value: "profile" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "teams" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "projects" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "connections" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/user-profile/[tab].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
