import { toRef, computed, createVNode, ref, watch, resolveComponent, mergeProps, withCtx, unref, isRef, withKeys, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, withDirectives, vShow, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useMagicKeys } from "@vueuse/core";
import { C as propsFactory, P as makeDimensionProps, a3 as makeElevationProps, a8 as makeThemeProps, E as genericComponent, T as useBackgroundColor, Q as useDimension, af as useElevation, ab as provideTheme, au as useLocale, aF as wrapInArray, F as useRender, _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
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
import "@antfu/utils";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VAvatar-D2wIwigQ.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./ssrBoot-Co4_dNdy.js";
const rootTypes = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function genBone(type) {
  let children = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return createVNode("div", {
    "class": ["v-skeleton-loader__bone", `v-skeleton-loader__${type}`]
  }, [children]);
}
function genBones(bone) {
  const [type, length] = bone.split("@");
  return Array.from({
    length
  }).map(() => genStructure(type));
}
function genStructure(type) {
  let children = [];
  if (!type)
    return children;
  const bone = rootTypes[type];
  if (type === bone)
    ;
  else if (type.includes(","))
    return mapBones(type);
  else if (type.includes("@"))
    return genBones(type);
  else if (bone.includes(","))
    children = mapBones(bone);
  else if (bone.includes("@"))
    children = genBones(bone);
  else if (bone)
    children.push(genStructure(bone));
  return [genBone(type, children)];
}
function mapBones(bones) {
  return bones.replace(/\s/g, "").split(",").map(genStructure);
}
const makeVSkeletonLoaderProps = propsFactory({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeThemeProps()
}, "VSkeletonLoader");
const VSkeletonLoader = genericComponent()({
  name: "VSkeletonLoader",
  props: makeVSkeletonLoaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      t
    } = useLocale();
    const items = computed(() => genStructure(wrapInArray(props.type).join(",")));
    useRender(() => {
      var _a;
      const isLoading = !slots.default || props.loading;
      return createVNode("div", {
        "class": ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": props.boilerplate
        }, themeClasses.value, backgroundColorClasses.value, elevationClasses.value],
        "style": [backgroundColorStyles.value, isLoading ? dimensionStyles.value : {}],
        "aria-busy": !props.boilerplate ? isLoading : void 0,
        "aria-live": !props.boilerplate ? "polite" : void 0,
        "aria-label": !props.boilerplate ? t(props.loadingText) : void 0,
        "role": !props.boilerplate ? "alert" : void 0
      }, [isLoading ? items.value : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const _sfc_main = {
  __name: "AppBarSearch",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true
    },
    searchResults: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDialogVisible",
    "search"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { ctrl_k, meta_k } = useMagicKeys({
      passive: false,
      onEventFired(e) {
        if (e.ctrlKey && e.key === "k" && e.type === "keydown")
          e.preventDefault();
      }
    });
    const refSearchList = ref();
    const refSearchInput = ref();
    const searchQueryLocal = ref("");
    watch([
      ctrl_k,
      meta_k
    ], () => {
      emit("update:isDialogVisible", true);
    });
    const clearSearchAndCloseDialog = () => {
      searchQueryLocal.value = "";
      emit("update:isDialogVisible", false);
    };
    const getFocusOnSearchList = (e) => {
      var _a, _b;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        (_a = refSearchList.value) == null ? void 0 : _a.focus("next");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        (_b = refSearchList.value) == null ? void 0 : _b.focus("prev");
      }
    };
    const dialogModelValueUpdate = (val) => {
      searchQueryLocal.value = "";
      emit("update:isDialogVisible", val);
    };
    watch(() => props.isDialogVisible, () => {
      searchQueryLocal.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VDialog, mergeProps({
        "max-width": "600",
        "model-value": props.isDialogVisible,
        height: _ctx.$vuetify.display.smAndUp ? "537" : "100%",
        fullscreen: _ctx.$vuetify.display.width < 600,
        class: "app-bar-search-dialog",
        "onUpdate:modelValue": dialogModelValueUpdate,
        onKeyup: clearSearchAndCloseDialog
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              height: "100%",
              width: "100%",
              class: "position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "py-3 px-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          ref_key: "refSearchInput",
                          ref: refSearchInput,
                          modelValue: unref(searchQueryLocal),
                          "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                          autofocus: "",
                          density: "compact",
                          variant: "plain",
                          class: "app-bar-search-input",
                          onKeyup: clearSearchAndCloseDialog,
                          onKeydown: getFocusOnSearchList
                        }, {
                          "prepend-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center text-high-emphasis me-1" data-v-6ad1c07a${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "24",
                                icon: "ri-search-line",
                                style: { "opacity": "1" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                                  createVNode(VIcon, {
                                    size: "24",
                                    icon: "ri-search-line",
                                    style: { "opacity": "1" }
                                  })
                                ])
                              ];
                            }
                          }),
                          "append-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-start" data-v-6ad1c07a${_scopeId4}><div class="text-base text-disabled cursor-pointer me-2" data-v-6ad1c07a${_scopeId4}> [esc] </div>`);
                              _push5(ssrRenderComponent(_component_IconBtn, {
                                class: "mt-n2",
                                color: "medium-emphasis",
                                onClick: clearSearchAndCloseDialog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-close-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-close-line" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-start" }, [
                                  createVNode("div", {
                                    class: "text-base text-disabled cursor-pointer me-2",
                                    onClick: clearSearchAndCloseDialog
                                  }, " [esc] "),
                                  createVNode(_component_IconBtn, {
                                    class: "mt-n2",
                                    color: "medium-emphasis",
                                    onClick: clearSearchAndCloseDialog
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-close-line" })
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
                          createVNode(VTextField, {
                            ref_key: "refSearchInput",
                            ref: refSearchInput,
                            modelValue: unref(searchQueryLocal),
                            "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                            autofocus: "",
                            density: "compact",
                            variant: "plain",
                            class: "app-bar-search-input",
                            onKeyup: withKeys(clearSearchAndCloseDialog, ["esc"]),
                            onKeydown: getFocusOnSearchList
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                                createVNode(VIcon, {
                                  size: "24",
                                  icon: "ri-search-line",
                                  style: { "opacity": "1" }
                                })
                              ])
                            ]),
                            "append-inner": withCtx(() => [
                              createVNode("div", { class: "d-flex align-start" }, [
                                createVNode("div", {
                                  class: "text-base text-disabled cursor-pointer me-2",
                                  onClick: clearSearchAndCloseDialog
                                }, " [esc] "),
                                createVNode(_component_IconBtn, {
                                  class: "mt-n2",
                                  color: "medium-emphasis",
                                  onClick: clearSearchAndCloseDialog
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-close-line" })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(PerfectScrollbar), {
                    options: { wheelPropagation: false, suppressScrollX: true },
                    class: "h-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!__props.isLoading) {
                          _push4(ssrRenderComponent(unref(VList), {
                            style: unref(searchQueryLocal).length && !!props.searchResults.length ? null : { display: "none" },
                            ref_key: "refSearchList",
                            ref: refSearchList,
                            density: "compact",
                            class: "app-bar-search-list py-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(props.searchResults, (item) => {
                                  ssrRenderSlot(_ctx.$slots, "searchResult", { item }, () => {
                                    _push5(ssrRenderComponent(unref(VListItem), null, {
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
                                  }, _push5, _parent5, _scopeId4);
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                                    return renderSlot(_ctx.$slots, "searchResult", {
                                      key: item,
                                      item
                                    }, () => [
                                      createVNode(unref(VListItem), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], true);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div style="${ssrRenderStyle(!!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions ? null : { display: "none" })}" class="h-100" data-v-6ad1c07a${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "suggestions", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`</div><div style="${ssrRenderStyle(!props.searchResults.length && unref(searchQueryLocal).length ? null : { display: "none" })}" class="h-100" data-v-6ad1c07a${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "noData", {}, () => {
                          _push4(ssrRenderComponent(VCardText, { class: "h-100" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis px-12 pb-12 pt-16" data-v-6ad1c07a${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "64",
                                  icon: "ri-file-forbid-line"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" data-v-6ad1c07a${_scopeId4}><span data-v-6ad1c07a${_scopeId4}>No Result For </span><span data-v-6ad1c07a${_scopeId4}>&quot;${ssrInterpolate(unref(searchQueryLocal))}&quot;</span></div>`);
                                ssrRenderSlot(_ctx.$slots, "noDataSuggestion", {}, null, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis px-12 pb-12 pt-16" }, [
                                    createVNode(VIcon, {
                                      size: "64",
                                      icon: "ri-file-forbid-line"
                                    }),
                                    createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                      createVNode("span", null, "No Result For "),
                                      createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                    ]),
                                    renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                                  ])
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (__props.isLoading) {
                          _push4(`<!--[-->`);
                          ssrRenderList(3, (i) => {
                            _push4(ssrRenderComponent(VSkeletonLoader, {
                              key: i,
                              type: "list-item-two-line"
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          !__props.isLoading ? withDirectives((openBlock(), createBlock(unref(VList), {
                            key: 0,
                            ref_key: "refSearchList",
                            ref: refSearchList,
                            density: "compact",
                            class: "app-bar-search-list py-0"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                                return renderSlot(_ctx.$slots, "searchResult", {
                                  key: item,
                                  item
                                }, () => [
                                  createVNode(unref(VListItem), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], true);
                              }), 128))
                            ]),
                            _: 3
                          }, 512)), [
                            [vShow, unref(searchQueryLocal).length && !!props.searchResults.length]
                          ]) : createCommentVNode("", true),
                          withDirectives(createVNode("div", { class: "h-100" }, [
                            renderSlot(_ctx.$slots, "suggestions", {}, void 0, true)
                          ], 512), [
                            [vShow, !!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions]
                          ]),
                          withDirectives(createVNode("div", { class: "h-100" }, [
                            renderSlot(_ctx.$slots, "noData", {}, () => [
                              createVNode(VCardText, { class: "h-100" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis px-12 pb-12 pt-16" }, [
                                    createVNode(VIcon, {
                                      size: "64",
                                      icon: "ri-file-forbid-line"
                                    }),
                                    createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                      createVNode("span", null, "No Result For "),
                                      createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                    ]),
                                    renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                                  ])
                                ]),
                                _: 3
                              })
                            ], true)
                          ], 512), [
                            [vShow, !props.searchResults.length && unref(searchQueryLocal).length]
                          ]),
                          __props.isLoading ? (openBlock(), createBlock(Fragment, { key: 1 }, renderList(3, (i) => {
                            return createVNode(VSkeletonLoader, {
                              key: i,
                              type: "list-item-two-line"
                            });
                          }), 64)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "py-3 px-4" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          ref_key: "refSearchInput",
                          ref: refSearchInput,
                          modelValue: unref(searchQueryLocal),
                          "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                          autofocus: "",
                          density: "compact",
                          variant: "plain",
                          class: "app-bar-search-input",
                          onKeyup: withKeys(clearSearchAndCloseDialog, ["esc"]),
                          onKeydown: getFocusOnSearchList
                        }, {
                          "prepend-inner": withCtx(() => [
                            createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                              createVNode(VIcon, {
                                size: "24",
                                icon: "ri-search-line",
                                style: { "opacity": "1" }
                              })
                            ])
                          ]),
                          "append-inner": withCtx(() => [
                            createVNode("div", { class: "d-flex align-start" }, [
                              createVNode("div", {
                                class: "text-base text-disabled cursor-pointer me-2",
                                onClick: clearSearchAndCloseDialog
                              }, " [esc] "),
                              createVNode(_component_IconBtn, {
                                class: "mt-n2",
                                color: "medium-emphasis",
                                onClick: clearSearchAndCloseDialog
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-close-line" })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(PerfectScrollbar), {
                      options: { wheelPropagation: false, suppressScrollX: true },
                      class: "h-100"
                    }, {
                      default: withCtx(() => [
                        !__props.isLoading ? withDirectives((openBlock(), createBlock(unref(VList), {
                          key: 0,
                          ref_key: "refSearchList",
                          ref: refSearchList,
                          density: "compact",
                          class: "app-bar-search-list py-0"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                              return renderSlot(_ctx.$slots, "searchResult", {
                                key: item,
                                item
                              }, () => [
                                createVNode(unref(VListItem), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], true);
                            }), 128))
                          ]),
                          _: 3
                        }, 512)), [
                          [vShow, unref(searchQueryLocal).length && !!props.searchResults.length]
                        ]) : createCommentVNode("", true),
                        withDirectives(createVNode("div", { class: "h-100" }, [
                          renderSlot(_ctx.$slots, "suggestions", {}, void 0, true)
                        ], 512), [
                          [vShow, !!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions]
                        ]),
                        withDirectives(createVNode("div", { class: "h-100" }, [
                          renderSlot(_ctx.$slots, "noData", {}, () => [
                            createVNode(VCardText, { class: "h-100" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis px-12 pb-12 pt-16" }, [
                                  createVNode(VIcon, {
                                    size: "64",
                                    icon: "ri-file-forbid-line"
                                  }),
                                  createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                    createVNode("span", null, "No Result For "),
                                    createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                  ]),
                                  renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                                ])
                              ]),
                              _: 3
                            })
                          ], true)
                        ], 512), [
                          [vShow, !props.searchResults.length && unref(searchQueryLocal).length]
                        ]),
                        __props.isLoading ? (openBlock(), createBlock(Fragment, { key: 1 }, renderList(3, (i) => {
                          return createVNode(VSkeletonLoader, {
                            key: i,
                            type: "list-item-two-line"
                          });
                        }), 64)) : createCommentVNode("", true)
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                height: "100%",
                width: "100%",
                class: "position-relative"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "py-3 px-4" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        ref_key: "refSearchInput",
                        ref: refSearchInput,
                        modelValue: unref(searchQueryLocal),
                        "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                        autofocus: "",
                        density: "compact",
                        variant: "plain",
                        class: "app-bar-search-input",
                        onKeyup: withKeys(clearSearchAndCloseDialog, ["esc"]),
                        onKeydown: getFocusOnSearchList
                      }, {
                        "prepend-inner": withCtx(() => [
                          createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                            createVNode(VIcon, {
                              size: "24",
                              icon: "ri-search-line",
                              style: { "opacity": "1" }
                            })
                          ])
                        ]),
                        "append-inner": withCtx(() => [
                          createVNode("div", { class: "d-flex align-start" }, [
                            createVNode("div", {
                              class: "text-base text-disabled cursor-pointer me-2",
                              onClick: clearSearchAndCloseDialog
                            }, " [esc] "),
                            createVNode(_component_IconBtn, {
                              class: "mt-n2",
                              color: "medium-emphasis",
                              onClick: clearSearchAndCloseDialog
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-close-line" })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(PerfectScrollbar), {
                    options: { wheelPropagation: false, suppressScrollX: true },
                    class: "h-100"
                  }, {
                    default: withCtx(() => [
                      !__props.isLoading ? withDirectives((openBlock(), createBlock(unref(VList), {
                        key: 0,
                        ref_key: "refSearchList",
                        ref: refSearchList,
                        density: "compact",
                        class: "app-bar-search-list py-0"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                            return renderSlot(_ctx.$slots, "searchResult", {
                              key: item,
                              item
                            }, () => [
                              createVNode(unref(VListItem), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], true);
                          }), 128))
                        ]),
                        _: 3
                      }, 512)), [
                        [vShow, unref(searchQueryLocal).length && !!props.searchResults.length]
                      ]) : createCommentVNode("", true),
                      withDirectives(createVNode("div", { class: "h-100" }, [
                        renderSlot(_ctx.$slots, "suggestions", {}, void 0, true)
                      ], 512), [
                        [vShow, !!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions]
                      ]),
                      withDirectives(createVNode("div", { class: "h-100" }, [
                        renderSlot(_ctx.$slots, "noData", {}, () => [
                          createVNode(VCardText, { class: "h-100" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis px-12 pb-12 pt-16" }, [
                                createVNode(VIcon, {
                                  size: "64",
                                  icon: "ri-file-forbid-line"
                                }),
                                createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                  createVNode("span", null, "No Result For "),
                                  createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                ]),
                                renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                              ])
                            ]),
                            _: 3
                          })
                        ], true)
                      ], 512), [
                        [vShow, !props.searchResults.length && unref(searchQueryLocal).length]
                      ]),
                      __props.isLoading ? (openBlock(), createBlock(Fragment, { key: 1 }, renderList(3, (i) => {
                        return createVNode(VSkeletonLoader, {
                          key: i,
                          type: "list-item-two-line"
                        });
                      }), 64)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/AppBarSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppBarSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ad1c07a"]]);
export {
  AppBarSearch as default
};
