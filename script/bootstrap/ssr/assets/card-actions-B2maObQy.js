import { useSSRContext, ref, computed, resolveComponent, withCtx, unref, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withDirectives, vShow, isRef, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { V as VExpandTransition } from "./index-D5WAZiYx.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { a as VIcon, b as VProgressCircular } from "../ssr.js";
import { a as VOverlay } from "./VOverlay-BlPDiq4k.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
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
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
/* empty css               */
import "./VSlideGroup-Bvz86g7R.js";
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AppCardActions",
  __ssrInlineRender: true,
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    noActions: {
      type: Boolean,
      required: false,
      default: false
    },
    actionCollapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    actionRefresh: {
      type: Boolean,
      required: false,
      default: false
    },
    actionRemove: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      skipCheck: true,
      default: void 0
    },
    title: {
      type: String,
      required: false,
      default: void 0
    }
  },
  emits: [
    "collapsed",
    "refresh",
    "trash",
    "initialLoad",
    "update:loading"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const _loading = ref(false);
    const $loading = computed({
      get() {
        return props.loading !== void 0 ? props.loading : _loading.value;
      },
      set(value) {
        props.loading !== void 0 ? emit("update:loading", value) : _loading.value = value;
      }
    });
    const isContentCollapsed = ref(props.collapsed);
    const isCardRemoved = ref(false);
    const stopLoading = () => {
      $loading.value = false;
    };
    const triggerCollapse = () => {
      isContentCollapsed.value = !isContentCollapsed.value;
      emit("collapsed", isContentCollapsed.value);
    };
    const triggerRefresh = () => {
      $loading.value = true;
      emit("refresh", stopLoading);
    };
    const triggeredRemove = () => {
      isCardRemoved.value = true;
      emit("trash");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VExpandTransition, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(isCardRemoved)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(VCard, _ctx.$attrs, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardItem, null, {
                      append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "before-actions", {}, null, _push4, _parent4, _scopeId3);
                          if ((!(__props.actionRemove || __props.actionRefresh) || __props.actionCollapsed) && !__props.noActions) {
                            _push4(ssrRenderComponent(_component_IconBtn, { onClick: triggerCollapse }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    size: "20",
                                    icon: "ri-arrow-up-s-line",
                                    style: [{ transform: unref(isContentCollapsed) ? "rotate(-180deg)" : void 0 }, { "transition-duration": "0.28s" }]
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-arrow-up-s-line",
                                      style: [{ transform: unref(isContentCollapsed) ? "rotate(-180deg)" : void 0 }, { "transition-duration": "0.28s" }]
                                    }, null, 8, ["style"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if ((!(__props.actionRemove || __props.actionCollapsed) || __props.actionRefresh) && !__props.noActions) {
                            _push4(ssrRenderComponent(_component_IconBtn, { onClick: triggerRefresh }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    size: "20",
                                    icon: "ri-refresh-line"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-refresh-line"
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if ((!(__props.actionRefresh || __props.actionCollapsed) || __props.actionRemove) && !__props.noActions) {
                            _push4(ssrRenderComponent(_component_IconBtn, { onClick: triggeredRemove }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    size: "20",
                                    icon: "ri-close-line"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-close-line"
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              renderSlot(_ctx.$slots, "before-actions"),
                              (!(__props.actionRemove || __props.actionRefresh) || __props.actionCollapsed) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                                key: 0,
                                onClick: triggerCollapse
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-arrow-up-s-line",
                                    style: [{ transform: unref(isContentCollapsed) ? "rotate(-180deg)" : void 0 }, { "transition-duration": "0.28s" }]
                                  }, null, 8, ["style"])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              (!(__props.actionRemove || __props.actionCollapsed) || __props.actionRefresh) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                                key: 1,
                                onClick: triggerRefresh
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-refresh-line"
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              (!(__props.actionRefresh || __props.actionCollapsed) || __props.actionRemove) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                                key: 2,
                                onClick: triggeredRemove
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-close-line"
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (props.title || _ctx.$slots.title) {
                            _push4(ssrRenderComponent(VCardTitle, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                    _push5(`${ssrInterpolate(props.title)}`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(props.title), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 3
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            props.title || _ctx.$slots.title ? (openBlock(), createBlock(VCardTitle, { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VExpandTransition, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle(!unref(isContentCollapsed) ? null : { display: "none" })}" class="v-card-content"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else {
                          return [
                            withDirectives(createVNode("div", { class: "v-card-content" }, [
                              renderSlot(_ctx.$slots, "default")
                            ], 512), [
                              [vShow, !unref(isContentCollapsed)]
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VOverlay, {
                      modelValue: unref($loading),
                      "onUpdate:modelValue": ($event) => isRef($loading) ? $loading.value = $event : null,
                      contained: "",
                      persistent: "",
                      "scroll-strategy": "none",
                      class: "align-center justify-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VProgressCircular, { indeterminate: "" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VProgressCircular, { indeterminate: "" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardItem, null, {
                        append: withCtx(() => [
                          createVNode("div", null, [
                            renderSlot(_ctx.$slots, "before-actions"),
                            (!(__props.actionRemove || __props.actionRefresh) || __props.actionCollapsed) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                              key: 0,
                              onClick: triggerCollapse
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-arrow-up-s-line",
                                  style: [{ transform: unref(isContentCollapsed) ? "rotate(-180deg)" : void 0 }, { "transition-duration": "0.28s" }]
                                }, null, 8, ["style"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            (!(__props.actionRemove || __props.actionCollapsed) || __props.actionRefresh) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                              key: 1,
                              onClick: triggerRefresh
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-refresh-line"
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            (!(__props.actionRefresh || __props.actionCollapsed) || __props.actionRemove) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                              key: 2,
                              onClick: triggeredRemove
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-close-line"
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        default: withCtx(() => [
                          props.title || _ctx.$slots.title ? (openBlock(), createBlock(VCardTitle, { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      }),
                      createVNode(VExpandTransition, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", { class: "v-card-content" }, [
                            renderSlot(_ctx.$slots, "default")
                          ], 512), [
                            [vShow, !unref(isContentCollapsed)]
                          ])
                        ]),
                        _: 3
                      }),
                      createVNode(VOverlay, {
                        modelValue: unref($loading),
                        "onUpdate:modelValue": ($event) => isRef($loading) ? $loading.value = $event : null,
                        contained: "",
                        persistent: "",
                        "scroll-strategy": "none",
                        class: "align-center justify-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VProgressCircular, { indeterminate: "" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(isCardRemoved) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(VCard, _ctx.$attrs, {
                  default: withCtx(() => [
                    createVNode(VCardItem, null, {
                      append: withCtx(() => [
                        createVNode("div", null, [
                          renderSlot(_ctx.$slots, "before-actions"),
                          (!(__props.actionRemove || __props.actionRefresh) || __props.actionCollapsed) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                            key: 0,
                            onClick: triggerCollapse
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-arrow-up-s-line",
                                style: [{ transform: unref(isContentCollapsed) ? "rotate(-180deg)" : void 0 }, { "transition-duration": "0.28s" }]
                              }, null, 8, ["style"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          (!(__props.actionRemove || __props.actionCollapsed) || __props.actionRefresh) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                            key: 1,
                            onClick: triggerRefresh
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-refresh-line"
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          (!(__props.actionRefresh || __props.actionCollapsed) || __props.actionRemove) && !__props.noActions ? (openBlock(), createBlock(_component_IconBtn, {
                            key: 2,
                            onClick: triggeredRemove
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-close-line"
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      default: withCtx(() => [
                        props.title || _ctx.$slots.title ? (openBlock(), createBlock(VCardTitle, { key: 0 }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(props.title), 1)
                            ])
                          ]),
                          _: 3
                        })) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }),
                    createVNode(VExpandTransition, null, {
                      default: withCtx(() => [
                        withDirectives(createVNode("div", { class: "v-card-content" }, [
                          renderSlot(_ctx.$slots, "default")
                        ], 512), [
                          [vShow, !unref(isContentCollapsed)]
                        ])
                      ]),
                      _: 3
                    }),
                    createVNode(VOverlay, {
                      modelValue: unref($loading),
                      "onUpdate:modelValue": ($event) => isRef($loading) ? $loading.value = $event : null,
                      contained: "",
                      persistent: "",
                      "scroll-strategy": "none",
                      class: "align-center justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VProgressCircular, { indeterminate: "" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 3
                }, 16)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/cards/AppCardActions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "card-actions",
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = [
      {
        action: "Collapse",
        icon: "ri-arrow-up-s-line",
        details: "Collapse card content using collapse action."
      },
      {
        action: "Refresh Content",
        icon: "ri-refresh-line",
        details: "Refresh your card content using refresh action."
      },
      {
        action: "Remove Card",
        icon: "ri-close-line",
        details: "Remove card from page using remove card action"
      }
    ];
    const isLoading = ref(true);
    setTimeout(() => {
      isLoading.value = false;
    }, 3e3);
    const refetchData = (hideOverlay) => {
      setTimeout(hideOverlay, 3e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardActions = _sfc_main$1;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardActions, {
                    title: "Cards Actions",
                    onRefresh: refetchData
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "px-0 pb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTable, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead${_scopeId5}><tr${_scopeId5}><th scope="col"${_scopeId5}> ACTION </th><th scope="col"${_scopeId5}> ICON </th><th scope="col"${_scopeId5}> DETAILS </th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                    ssrRenderList(tableData, (data) => {
                                      _push6(`<tr${_scopeId5}><td${_scopeId5}>${ssrInterpolate(data.action)}</td><td${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "20",
                                        icon: data.icon
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</td><td${_scopeId5}>${ssrInterpolate(data.details)}</td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { scope: "col" }, " ACTION "),
                                          createVNode("th", { scope: "col" }, " ICON "),
                                          createVNode("th", { scope: "col" }, " DETAILS ")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(), createBlock(Fragment, null, renderList(tableData, (data) => {
                                          return createVNode("tr", {
                                            key: data.icon
                                          }, [
                                            createVNode("td", null, toDisplayString(data.action), 1),
                                            createVNode("td", null, [
                                              createVNode(VIcon, {
                                                size: "20",
                                                icon: data.icon
                                              }, null, 8, ["icon"])
                                            ]),
                                            createVNode("td", null, toDisplayString(data.details), 1)
                                          ]);
                                        }), 64))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTable, null, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", { scope: "col" }, " ACTION "),
                                        createVNode("th", { scope: "col" }, " ICON "),
                                        createVNode("th", { scope: "col" }, " DETAILS ")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(), createBlock(Fragment, null, renderList(tableData, (data) => {
                                        return createVNode("tr", {
                                          key: data.icon
                                        }, [
                                          createVNode("td", null, toDisplayString(data.action), 1),
                                          createVNode("td", null, [
                                            createVNode(VIcon, {
                                              size: "20",
                                              icon: data.icon
                                            }, null, 8, ["icon"])
                                          ]),
                                          createVNode("td", null, toDisplayString(data.details), 1)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "px-0 pb-0" }, {
                            default: withCtx(() => [
                              createVNode(VTable, null, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", { scope: "col" }, " ACTION "),
                                      createVNode("th", { scope: "col" }, " ICON "),
                                      createVNode("th", { scope: "col" }, " DETAILS ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(), createBlock(Fragment, null, renderList(tableData, (data) => {
                                      return createVNode("tr", {
                                        key: data.icon
                                      }, [
                                        createVNode("td", null, toDisplayString(data.action), 1),
                                        createVNode("td", null, [
                                          createVNode(VIcon, {
                                            size: "20",
                                            icon: data.icon
                                          }, null, 8, ["icon"])
                                        ]),
                                        createVNode("td", null, toDisplayString(data.details), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardActions, {
                      title: "Cards Actions",
                      onRefresh: refetchData
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "px-0 pb-0" }, {
                          default: withCtx(() => [
                            createVNode(VTable, null, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { scope: "col" }, " ACTION "),
                                    createVNode("th", { scope: "col" }, " ICON "),
                                    createVNode("th", { scope: "col" }, " DETAILS ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(), createBlock(Fragment, null, renderList(tableData, (data) => {
                                    return createVNode("tr", {
                                      key: data.icon
                                    }, [
                                      createVNode("td", null, toDisplayString(data.action), 1),
                                      createVNode("td", null, [
                                        createVNode(VIcon, {
                                          size: "20",
                                          icon: data.icon
                                        }, null, 8, ["icon"])
                                      ]),
                                      createVNode("td", null, toDisplayString(data.details), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardActions, {
                    loading: unref(isLoading),
                    "onUpdate:loading": ($event) => isRef(isLoading) ? isLoading.value = $event : null,
                    title: "Initial Load",
                    "no-actions": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>You can specifically add Initial Load action using <code${_scopeId4}>loading</code> prop</p><span${_scopeId4}>Refresh the page to see it again in action.</span>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("You can specifically add Initial Load action using "),
                                  createVNode("code", null, "loading"),
                                  createTextVNode(" prop")
                                ]),
                                createVNode("span", null, "Refresh the page to see it again in action.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("You can specifically add Initial Load action using "),
                                createVNode("code", null, "loading"),
                                createTextVNode(" prop")
                              ]),
                              createVNode("span", null, "Refresh the page to see it again in action.")
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
                    createVNode(_component_AppCardActions, {
                      loading: unref(isLoading),
                      "onUpdate:loading": ($event) => isRef(isLoading) ? isLoading.value = $event : null,
                      title: "Initial Load",
                      "no-actions": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("You can specifically add Initial Load action using "),
                              createVNode("code", null, "loading"),
                              createTextVNode(" prop")
                            ]),
                            createVNode("span", null, "Refresh the page to see it again in action.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["loading", "onUpdate:loading"])
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
                  _push3(ssrRenderComponent(_component_AppCardActions, {
                    "action-collapsed": "",
                    title: "Collapsible"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>You can specifically add collapsible action using <code${_scopeId4}>actionCollapse</code> prop</p><span${_scopeId4}>Click on `);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "20",
                                icon: "ri-arrow-up-s-line"
                              }, null, _parent5, _scopeId4));
                              _push5(` icon to see it in action</span>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("You can specifically add collapsible action using "),
                                  createVNode("code", null, "actionCollapse"),
                                  createTextVNode(" prop")
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Click on "),
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-arrow-up-s-line"
                                  }),
                                  createTextVNode(" icon to see it in action")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("You can specifically add collapsible action using "),
                                createVNode("code", null, "actionCollapse"),
                                createTextVNode(" prop")
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Click on "),
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-arrow-up-s-line"
                                }),
                                createTextVNode(" icon to see it in action")
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
                    createVNode(_component_AppCardActions, {
                      "action-collapsed": "",
                      title: "Collapsible"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("You can specifically add collapsible action using "),
                              createVNode("code", null, "actionCollapse"),
                              createTextVNode(" prop")
                            ]),
                            createVNode("span", null, [
                              createTextVNode("Click on "),
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-arrow-up-s-line"
                              }),
                              createTextVNode(" icon to see it in action")
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardActions, {
                    title: "Refresh Content",
                    "action-refresh": "",
                    onRefresh: refetchData
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>You can specifically add refresh action using <code${_scopeId4}>actionRefresh</code> prop</p><span${_scopeId4}>Click on `);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "20",
                                icon: "ri-refresh-line"
                              }, null, _parent5, _scopeId4));
                              _push5(` icon to see it in action</span>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("You can specifically add refresh action using "),
                                  createVNode("code", null, "actionRefresh"),
                                  createTextVNode(" prop")
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Click on "),
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-refresh-line"
                                  }),
                                  createTextVNode(" icon to see it in action")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("You can specifically add refresh action using "),
                                createVNode("code", null, "actionRefresh"),
                                createTextVNode(" prop")
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Click on "),
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-refresh-line"
                                }),
                                createTextVNode(" icon to see it in action")
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
                    createVNode(_component_AppCardActions, {
                      title: "Refresh Content",
                      "action-refresh": "",
                      onRefresh: refetchData
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("You can specifically add refresh action using "),
                              createVNode("code", null, "actionRefresh"),
                              createTextVNode(" prop")
                            ]),
                            createVNode("span", null, [
                              createTextVNode("Click on "),
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-refresh-line"
                              }),
                              createTextVNode(" icon to see it in action")
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardActions, {
                    title: "Remove Card",
                    "action-remove": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>You can specifically add remove action using <code${_scopeId4}>actionRemove</code> prop</p><span${_scopeId4}>Click on `);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "20",
                                icon: "ri-close-line"
                              }, null, _parent5, _scopeId4));
                              _push5(` icon to see it in action</span>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("You can specifically add remove action using "),
                                  createVNode("code", null, "actionRemove"),
                                  createTextVNode(" prop")
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Click on "),
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-close-line"
                                  }),
                                  createTextVNode(" icon to see it in action")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("You can specifically add remove action using "),
                                createVNode("code", null, "actionRemove"),
                                createTextVNode(" prop")
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Click on "),
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-close-line"
                                }),
                                createTextVNode(" icon to see it in action")
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
                    createVNode(_component_AppCardActions, {
                      title: "Remove Card",
                      "action-remove": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("You can specifically add remove action using "),
                              createVNode("code", null, "actionRemove"),
                              createTextVNode(" prop")
                            ]),
                            createVNode("span", null, [
                              createTextVNode("Click on "),
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-close-line"
                              }),
                              createTextVNode(" icon to see it in action")
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardActions, {
                    title: "Slots",
                    onRefresh: refetchData
                  }, {
                    "before-actions": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VChip, {
                          class: "me-3",
                          color: "primary",
                          size: "small"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 3 Updates `);
                            } else {
                              return [
                                createTextVNode(" 3 Updates ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VChip, {
                            class: "me-3",
                            color: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 3 Updates ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}><code${_scopeId4}>app-card-actions</code> also provides <code${_scopeId4}>before-actions</code> and <code${_scopeId4}>after-actions</code> slot</p><span${_scopeId4}>You can find more details in our documentation</span>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createVNode("code", null, "app-card-actions"),
                                  createTextVNode(" also provides "),
                                  createVNode("code", null, "before-actions"),
                                  createTextVNode(" and "),
                                  createVNode("code", null, "after-actions"),
                                  createTextVNode(" slot")
                                ]),
                                createVNode("span", null, "You can find more details in our documentation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createVNode("code", null, "app-card-actions"),
                                createTextVNode(" also provides "),
                                createVNode("code", null, "before-actions"),
                                createTextVNode(" and "),
                                createVNode("code", null, "after-actions"),
                                createTextVNode(" slot")
                              ]),
                              createVNode("span", null, "You can find more details in our documentation")
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
                    createVNode(_component_AppCardActions, {
                      title: "Slots",
                      onRefresh: refetchData
                    }, {
                      "before-actions": withCtx(() => [
                        createVNode(VChip, {
                          class: "me-3",
                          color: "primary",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 3 Updates ")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createVNode("code", null, "app-card-actions"),
                              createTextVNode(" also provides "),
                              createVNode("code", null, "before-actions"),
                              createTextVNode(" and "),
                              createVNode("code", null, "after-actions"),
                              createTextVNode(" slot")
                            ]),
                            createVNode("span", null, "You can find more details in our documentation")
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardActions, {
                    title: "Cards Actions",
                    onRefresh: refetchData
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "px-0 pb-0" }, {
                        default: withCtx(() => [
                          createVNode(VTable, null, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", { scope: "col" }, " ACTION "),
                                  createVNode("th", { scope: "col" }, " ICON "),
                                  createVNode("th", { scope: "col" }, " DETAILS ")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(), createBlock(Fragment, null, renderList(tableData, (data) => {
                                  return createVNode("tr", {
                                    key: data.icon
                                  }, [
                                    createVNode("td", null, toDisplayString(data.action), 1),
                                    createVNode("td", null, [
                                      createVNode(VIcon, {
                                        size: "20",
                                        icon: data.icon
                                      }, null, 8, ["icon"])
                                    ]),
                                    createVNode("td", null, toDisplayString(data.details), 1)
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
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardActions, {
                    loading: unref(isLoading),
                    "onUpdate:loading": ($event) => isRef(isLoading) ? isLoading.value = $event : null,
                    title: "Initial Load",
                    "no-actions": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("You can specifically add Initial Load action using "),
                            createVNode("code", null, "loading"),
                            createTextVNode(" prop")
                          ]),
                          createVNode("span", null, "Refresh the page to see it again in action.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["loading", "onUpdate:loading"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardActions, {
                    "action-collapsed": "",
                    title: "Collapsible"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("You can specifically add collapsible action using "),
                            createVNode("code", null, "actionCollapse"),
                            createTextVNode(" prop")
                          ]),
                          createVNode("span", null, [
                            createTextVNode("Click on "),
                            createVNode(VIcon, {
                              size: "20",
                              icon: "ri-arrow-up-s-line"
                            }),
                            createTextVNode(" icon to see it in action")
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
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardActions, {
                    title: "Refresh Content",
                    "action-refresh": "",
                    onRefresh: refetchData
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("You can specifically add refresh action using "),
                            createVNode("code", null, "actionRefresh"),
                            createTextVNode(" prop")
                          ]),
                          createVNode("span", null, [
                            createTextVNode("Click on "),
                            createVNode(VIcon, {
                              size: "20",
                              icon: "ri-refresh-line"
                            }),
                            createTextVNode(" icon to see it in action")
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
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardActions, {
                    title: "Remove Card",
                    "action-remove": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("You can specifically add remove action using "),
                            createVNode("code", null, "actionRemove"),
                            createTextVNode(" prop")
                          ]),
                          createVNode("span", null, [
                            createTextVNode("Click on "),
                            createVNode(VIcon, {
                              size: "20",
                              icon: "ri-close-line"
                            }),
                            createTextVNode(" icon to see it in action")
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
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardActions, {
                    title: "Slots",
                    onRefresh: refetchData
                  }, {
                    "before-actions": withCtx(() => [
                      createVNode(VChip, {
                        class: "me-3",
                        color: "primary",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 3 Updates ")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createVNode("code", null, "app-card-actions"),
                            createTextVNode(" also provides "),
                            createVNode("code", null, "before-actions"),
                            createTextVNode(" and "),
                            createVNode("code", null, "after-actions"),
                            createTextVNode(" slot")
                          ]),
                          createVNode("span", null, "You can find more details in our documentation")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/cards/card-actions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
