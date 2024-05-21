import { useSSRContext, ref, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VListItemAction } from "./VListItemAction-VqS_ibV2.js";
import { a as VIcon, _ as _export_sfc, c as avatar1, d as avatar2, e as avatar3, f as avatar4 } from "../ssr.js";
import { V as VCombobox } from "./VCombobox-BVXw893D.js";
import { _ as _sfc_main$b } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
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
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
/* empty css               */
const _sfc_main$a = {
  __name: "DemoChipExpandable",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VMenu, mergeProps({
        modelValue: unref(isMenuVisible),
        "onUpdate:modelValue": ($event) => isRef(isMenuVisible) ? isMenuVisible.value = $event : null,
        transition: "scale-transition"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` VueJS `);
                } else {
                  return [
                    createTextVNode(" VueJS ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, props, {
                default: withCtx(() => [
                  createTextVNode(" VueJS ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, null, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemAction, { class: "ms-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_IconBtn, {
                                onClick: ($event) => isMenuVisible.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "20",
                                      icon: "ri-close-line"
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_IconBtn, {
                                  onClick: ($event) => isMenuVisible.value = false
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-close-line"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItemAction, { class: "ms-1" }, {
                            default: withCtx(() => [
                              createVNode(_component_IconBtn, {
                                onClick: ($event) => isMenuVisible.value = false
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-close-line"
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`VueJS`);
                            } else {
                              return [
                                createTextVNode("VueJS")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItemSubtitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`The Progressive JavaScript Framework`);
                            } else {
                              return [
                                createTextVNode("The Progressive JavaScript Framework")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("VueJS")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItemSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("The Progressive JavaScript Framework")
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
                    createVNode(VListItem, null, {
                      append: withCtx(() => [
                        createVNode(VListItemAction, { class: "ms-1" }, {
                          default: withCtx(() => [
                            createVNode(_component_IconBtn, {
                              onClick: ($event) => isMenuVisible.value = false
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-close-line"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("VueJS")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItemSubtitle, null, {
                          default: withCtx(() => [
                            createTextVNode("The Progressive JavaScript Framework")
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
              createVNode(VList, null, {
                default: withCtx(() => [
                  createVNode(VListItem, null, {
                    append: withCtx(() => [
                      createVNode(VListItemAction, { class: "ms-1" }, {
                        default: withCtx(() => [
                          createVNode(_component_IconBtn, {
                            onClick: ($event) => isMenuVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-close-line"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("VueJS")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItemSubtitle, null, {
                        default: withCtx(() => [
                          createTextVNode("The Progressive JavaScript Framework")
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipExpandable.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoChipInSelects",
  __ssrInlineRender: true,
  setup(__props) {
    const chips = ref([
      "Programming",
      "Playing games",
      "Sleeping"
    ]);
    const items = ref([
      "Streaming",
      "Eating",
      "Programming",
      "Playing games",
      "Sleeping"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCombobox, mergeProps({
        modelValue: unref(chips),
        "onUpdate:modelValue": ($event) => isRef(chips) ? chips.value = $event : null,
        chips: "",
        clearable: "",
        multiple: "",
        "closable-chips": "",
        "clear-icon": "ri-close-circle-line",
        items: unref(items),
        label: "Your favorite hobbies",
        "prepend-icon": "ri-filter-3-line"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipInSelects.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VChip, { size: "x-small" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` x-small chip `);
      } else {
        return [
          createTextVNode(" x-small chip ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { size: "small" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` small chip `);
      } else {
        return [
          createTextVNode(" small chip ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Default`);
      } else {
        return [
          createTextVNode("Default")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { size: "large" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` large chip `);
      } else {
        return [
          createTextVNode(" large chip ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { size: "x-large" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` x-large chip `);
      } else {
        return [
          createTextVNode(" x-large chip ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipSizes.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {
  __name: "DemoChipWithAvatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VChip, { "prepend-avatar": unref(avatar1) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Chip</span>`);
          } else {
            return [
              createVNode("span", null, "Chip")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VChip, { "prepend-avatar": unref(avatar2) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Darcy Nooser</span>`);
          } else {
            return [
              createVNode("span", null, "Darcy Nooser")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VChip, { "prepend-avatar": unref(avatar3) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Felicia Risker</span>`);
          } else {
            return [
              createVNode("span", null, "Felicia Risker")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VChip, { "prepend-avatar": unref(avatar4) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Minnie Mostly</span>`);
          } else {
            return [
              createVNode("span", null, "Minnie Mostly")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipWithAvatar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VChip, { "prepend-icon": "ri-user-line" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Account `);
      } else {
        return [
          createTextVNode(" Account ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "primary",
    "prepend-icon": "ri-star-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Premium `);
      } else {
        return [
          createTextVNode(" Premium ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "secondary",
    "prepend-icon": "ri-cake-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 1 Year `);
      } else {
        return [
          createTextVNode(" 1 Year ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "success",
    "prepend-icon": "ri-notification-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Notification `);
      } else {
        return [
          createTextVNode(" Notification ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "info",
    "prepend-icon": "ri-message-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Message `);
      } else {
        return [
          createTextVNode(" Message ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "warning",
    "prepend-icon": "ri-error-warning-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "error",
    "prepend-icon": "ri-error-warning-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipWithIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  __name: "DemoChipClosable",
  __ssrInlineRender: true,
  setup(__props) {
    const isDefaultChipVisible = ref(true);
    const isPrimaryChipVisible = ref(true);
    const isSecondaryChipVisible = ref(true);
    const isSuccessChipVisible = ref(true);
    const isInfoChipVisible = ref(true);
    const isWarningChipVisible = ref(true);
    const isErrorChipVisible = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      if (unref(isDefaultChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          "onClick:close": ($event) => isDefaultChipVisible.value = !unref(isDefaultChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Default `);
            } else {
              return [
                createTextVNode(" Default ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isPrimaryChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          color: "primary",
          "onClick:close": ($event) => isPrimaryChipVisible.value = !unref(isPrimaryChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Primary `);
            } else {
              return [
                createTextVNode(" Primary ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isSecondaryChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          color: "secondary",
          "onClick:close": ($event) => isSecondaryChipVisible.value = !unref(isSecondaryChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Secondary `);
            } else {
              return [
                createTextVNode(" Secondary ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isSuccessChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          color: "success",
          "onClick:close": ($event) => isSuccessChipVisible.value = !unref(isSuccessChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Success `);
            } else {
              return [
                createTextVNode(" Success ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isInfoChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          color: "info",
          "onClick:close": ($event) => isInfoChipVisible.value = !unref(isInfoChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Info `);
            } else {
              return [
                createTextVNode(" Info ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isWarningChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          color: "warning",
          "onClick:close": ($event) => isWarningChipVisible.value = !unref(isWarningChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Warning `);
            } else {
              return [
                createTextVNode(" Warning ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isErrorChipVisible)) {
        _push(ssrRenderComponent(VChip, {
          closable: "",
          color: "error",
          "onClick:close": ($event) => isErrorChipVisible.value = !unref(isErrorChipVisible)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Error `);
            } else {
              return [
                createTextVNode(" Error ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipClosable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VChip, { label: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Default `);
      } else {
        return [
          createTextVNode(" Default ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    label: "",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    label: "",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    label: "",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    label: "",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    label: "",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    label: "",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipLabel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VChip, { variant: "outlined" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Default `);
      } else {
        return [
          createTextVNode(" Default ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "primary",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "secondary",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "success",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "info",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "warning",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "error",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipOutlined.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VChip, { variant: "elevated" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Default `);
      } else {
        return [
          createTextVNode(" Default ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "primary",
    variant: "elevated"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "secondary",
    variant: "elevated"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "success",
    variant: "elevated"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "info",
    variant: "elevated"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "warning",
    variant: "elevated"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, {
    color: "error",
    variant: "elevated"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipElevated.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VChip, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Default `);
      } else {
        return [
          createTextVNode(" Default ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { color: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { color: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VChip, { color: "error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/chip/DemoChipColor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const closable = { ts: `<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`, js: `<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
` };
const color = { ts: `<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
` };
const elevated = { ts: `<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
` };
const expandable = { ts: `<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`, js: `<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
` };
const inSelects = { ts: `<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`, js: `<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
` };
const label = { ts: `<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
` };
const outlined = { ts: `<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
` };
const sizes = { ts: `<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
` };
const withAvatar = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip :prepend-avatar="avatar3">
      <span>Felicia Risker</span>
    </VChip>

    <VChip :prepend-avatar="avatar4">
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip :prepend-avatar="avatar3">
      <span>Felicia Risker</span>
    </VChip>

    <VChip :prepend-avatar="avatar4">
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
` };
const withIcon = { ts: `<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
` };
const _sfc_main = {
  __name: "chip",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$b;
      const _component_DemoChipColor = __unplugin_components_1;
      const _component_DemoChipElevated = __unplugin_components_2;
      const _component_DemoChipOutlined = __unplugin_components_3;
      const _component_DemoChipLabel = __unplugin_components_4;
      const _component_DemoChipClosable = _sfc_main$5;
      const _component_DemoChipWithIcon = __unplugin_components_6;
      const _component_DemoChipWithAvatar = _sfc_main$7;
      const _component_DemoChipSizes = __unplugin_components_8;
      const _component_DemoChipInSelects = _sfc_main$9;
      const _component_DemoChipExpandable = _sfc_main$a;
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Color",
                    code: color
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>color</code> prop to change the background color of chips.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipColor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop to change the background color of chips.")
                          ]),
                          createVNode(_component_DemoChipColor)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Color",
                      code: color
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop to change the background color of chips.")
                        ]),
                        createVNode(_component_DemoChipColor)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Elevated",
                    code: elevated
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>elevated</code> variant option to create filled chips.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipElevated, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "elevated"),
                            createTextVNode(" variant option to create filled chips.")
                          ]),
                          createVNode(_component_DemoChipElevated)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Elevated",
                      code: elevated
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "elevated"),
                          createTextVNode(" variant option to create filled chips.")
                        ]),
                        createVNode(_component_DemoChipElevated)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Outlined",
                    code: outlined
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>outlined</code> variant option to create outline border chips.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipOutlined, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(" variant option to create outline border chips.")
                          ]),
                          createVNode(_component_DemoChipOutlined)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Outlined",
                      code: outlined
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(" variant option to create outline border chips.")
                        ]),
                        createVNode(_component_DemoChipOutlined)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Label",
                    code: label
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Label chips use the <code${_scopeId3}>v-card</code> border-radius. Use <code${_scopeId3}>label</code> prop to create label chips.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipLabel, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Label chips use the "),
                            createVNode("code", null, "v-card"),
                            createTextVNode(" border-radius. Use "),
                            createVNode("code", null, "label"),
                            createTextVNode(" prop to create label chips.")
                          ]),
                          createVNode(_component_DemoChipLabel)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Label",
                      code: label
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Label chips use the "),
                          createVNode("code", null, "v-card"),
                          createTextVNode(" border-radius. Use "),
                          createVNode("code", null, "label"),
                          createTextVNode(" prop to create label chips.")
                        ]),
                        createVNode(_component_DemoChipLabel)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Closable",
                    code: closable
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Closable chips can be controlled with a <code${_scopeId3}>v-model</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipClosable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Closable chips can be controlled with a "),
                            createVNode("code", null, "v-model"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoChipClosable)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Closable",
                      code: closable
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Closable chips can be controlled with a "),
                          createVNode("code", null, "v-model"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoChipClosable)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "With Icon",
                    code: withIcon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Chips can use text or any icon available in the Material Icons font library.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipWithIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Chips can use text or any icon available in the Material Icons font library."),
                          createVNode(_component_DemoChipWithIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "With Icon",
                      code: withIcon
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Chips can use text or any icon available in the Material Icons font library."),
                        createVNode(_component_DemoChipWithIcon)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "With Avatar",
                    code: withAvatar
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>pill</code> prop to remove the <code${_scopeId3}>v-avatar</code> padding.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipWithAvatar, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "pill"),
                            createTextVNode(" prop to remove the "),
                            createVNode("code", null, "v-avatar"),
                            createTextVNode(" padding.")
                          ]),
                          createVNode(_component_DemoChipWithAvatar)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "With Avatar",
                      code: withAvatar
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "pill"),
                          createTextVNode(" prop to remove the "),
                          createVNode("code", null, "v-avatar"),
                          createTextVNode(" padding.")
                        ]),
                        createVNode(_component_DemoChipWithAvatar)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Sizes",
                    code: sizes
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-chip</code> component can have various sizes from <code${_scopeId3}>x-small</code> to <code${_scopeId3}>x-large</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipSizes, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-chip"),
                            createTextVNode(" component can have various sizes from "),
                            createVNode("code", null, "x-small"),
                            createTextVNode(" to "),
                            createVNode("code", null, "x-large"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoChipSizes)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Sizes",
                      code: sizes
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "v-chip"),
                          createTextVNode(" component can have various sizes from "),
                          createVNode("code", null, "x-small"),
                          createTextVNode(" to "),
                          createVNode("code", null, "x-large"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoChipSizes)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "In Selects",
                    code: inSelects
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Selects can use <code${_scopeId3}>chips</code> to display the selected data. Try adding your own tags below.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipInSelects, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Selects can use "),
                            createVNode("code", null, "chips"),
                            createTextVNode(" to display the selected data. Try adding your own tags below.")
                          ]),
                          createVNode(_component_DemoChipInSelects)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "In Selects",
                      code: inSelects
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Selects can use "),
                          createVNode("code", null, "chips"),
                          createTextVNode(" to display the selected data. Try adding your own tags below.")
                        ]),
                        createVNode(_component_DemoChipInSelects)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Expandable",
                    code: expandable
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Chips can be combined with <code${_scopeId3}>v-menu</code> to enable a specific set of actions for a chip.</p>`);
                        _push4(ssrRenderComponent(_component_DemoChipExpandable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Chips can be combined with "),
                            createVNode("code", null, "v-menu"),
                            createTextVNode(" to enable a specific set of actions for a chip.")
                          ]),
                          createVNode(_component_DemoChipExpandable)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Expandable",
                      code: expandable
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Chips can be combined with "),
                          createVNode("code", null, "v-menu"),
                          createTextVNode(" to enable a specific set of actions for a chip.")
                        ]),
                        createVNode(_component_DemoChipExpandable)
                      ]),
                      _: 1
                    }, 8, ["code"])
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
                  createVNode(_component_AppCardCode, {
                    title: "Color",
                    code: color
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop to change the background color of chips.")
                      ]),
                      createVNode(_component_DemoChipColor)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Elevated",
                    code: elevated
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "elevated"),
                        createTextVNode(" variant option to create filled chips.")
                      ]),
                      createVNode(_component_DemoChipElevated)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Outlined",
                    code: outlined
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(" variant option to create outline border chips.")
                      ]),
                      createVNode(_component_DemoChipOutlined)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Label",
                    code: label
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Label chips use the "),
                        createVNode("code", null, "v-card"),
                        createTextVNode(" border-radius. Use "),
                        createVNode("code", null, "label"),
                        createTextVNode(" prop to create label chips.")
                      ]),
                      createVNode(_component_DemoChipLabel)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Closable",
                    code: closable
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Closable chips can be controlled with a "),
                        createVNode("code", null, "v-model"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoChipClosable)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "With Icon",
                    code: withIcon
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Chips can use text or any icon available in the Material Icons font library."),
                      createVNode(_component_DemoChipWithIcon)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "With Avatar",
                    code: withAvatar
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "pill"),
                        createTextVNode(" prop to remove the "),
                        createVNode("code", null, "v-avatar"),
                        createTextVNode(" padding.")
                      ]),
                      createVNode(_component_DemoChipWithAvatar)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Sizes",
                    code: sizes
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "v-chip"),
                        createTextVNode(" component can have various sizes from "),
                        createVNode("code", null, "x-small"),
                        createTextVNode(" to "),
                        createVNode("code", null, "x-large"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoChipSizes)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "In Selects",
                    code: inSelects
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Selects can use "),
                        createVNode("code", null, "chips"),
                        createTextVNode(" to display the selected data. Try adding your own tags below.")
                      ]),
                      createVNode(_component_DemoChipInSelects)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Expandable",
                    code: expandable
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Chips can be combined with "),
                        createVNode("code", null, "v-menu"),
                        createTextVNode(" to enable a specific set of actions for a chip.")
                      ]),
                      createVNode(_component_DemoChipExpandable)
                    ]),
                    _: 1
                  }, 8, ["code"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/chip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
