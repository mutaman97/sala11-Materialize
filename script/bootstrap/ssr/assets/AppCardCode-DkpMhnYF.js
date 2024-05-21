import { useSSRContext, ref, computed, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, renderSlot, isRef, openBlock, createBlock, withDirectives, vShow } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import "prismjs";
import Prism from "vue-prism-component";
import { ao as useCookie, a as VIcon, bk as VBtnToggle, V as VBtn } from "../ssr.js";
import { useClipboard } from "@vueuse/core";
import { V as VExpandTransition } from "./index-D5WAZiYx.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
const COOKIE_MAX_AGE_1_YEAR = 365 * 24 * 60 * 60;
const _sfc_main = {
  __name: "AppCardCode",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    code: {
      type: Object,
      required: true
    },
    codeLanguage: {
      type: String,
      required: false,
      default: "markup"
    },
    noPadding: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const preferredCodeLanguage = useCookie("preferredCodeLanguage", {
      default: () => "ts",
      maxAge: COOKIE_MAX_AGE_1_YEAR
    });
    const isCodeShown = ref(false);
    const { copy, copied } = useClipboard({ source: computed(() => props.code[preferredCodeLanguage.value]) });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    color: unref(isCodeShown) ? "primary" : "default",
                    class: unref(isCodeShown) ? "" : "text-disabled",
                    onClick: ($event) => isCodeShown.value = !unref(isCodeShown)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "20",
                          icon: "ri-code-s-line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-code-s-line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, {
                      color: unref(isCodeShown) ? "primary" : "default",
                      class: unref(isCodeShown) ? "" : "text-disabled",
                      onClick: ($event) => isCodeShown.value = !unref(isCodeShown)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "20",
                          icon: "ri-code-s-line"
                        })
                      ]),
                      _: 1
                    }, 8, ["color", "class", "onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.title), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.noPadding) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(VExpandTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle(unref(isCodeShown) ? null : { display: "none" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex gap-y-3 flex-column" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtnToggle, {
                          modelValue: unref(preferredCodeLanguage),
                          "onUpdate:modelValue": ($event) => isRef(preferredCodeLanguage) ? preferredCodeLanguage.value = $event : null,
                          mandatory: "",
                          density: "compact"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, { value: "ts" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "mdi-language-typescript" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "mdi-language-typescript" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { value: "js" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "mdi-language-javascript" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "mdi-language-javascript" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, { value: "ts" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-language-typescript" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "js" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-language-javascript" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="position-relative"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Prism), {
                          key: props.code[unref(preferredCodeLanguage)],
                          language: props.codeLanguage,
                          style: _ctx.$vuetify.locale.isRtl ? "text-align: right" : "text-align: left"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.code[unref(preferredCodeLanguage)])}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.code[unref(preferredCodeLanguage)]), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_IconBtn, {
                          class: "position-absolute app-card-code-copy-icon",
                          color: "white",
                          onClick: () => {
                            unref(copy)();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: unref(copied) ? "ri-check-line" : "ri-file-copy-line",
                                size: "20"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: unref(copied) ? "ri-check-line" : "ri-file-copy-line",
                                  size: "20"
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-end" }, [
                            createVNode(VBtnToggle, {
                              modelValue: unref(preferredCodeLanguage),
                              "onUpdate:modelValue": ($event) => isRef(preferredCodeLanguage) ? preferredCodeLanguage.value = $event : null,
                              mandatory: "",
                              density: "compact"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { value: "ts" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-language-typescript" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "js" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-language-javascript" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "position-relative" }, [
                            (openBlock(), createBlock(unref(Prism), {
                              key: props.code[unref(preferredCodeLanguage)],
                              language: props.codeLanguage,
                              style: _ctx.$vuetify.locale.isRtl ? "text-align: right" : "text-align: left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.code[unref(preferredCodeLanguage)]), 1)
                              ]),
                              _: 1
                            }, 8, ["language", "style"])),
                            createVNode(_component_IconBtn, {
                              class: "position-absolute app-card-code-copy-icon",
                              color: "white",
                              onClick: () => {
                                unref(copy)();
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: unref(copied) ? "ri-check-line" : "ri-file-copy-line",
                                  size: "20"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    withDirectives(createVNode("div", null, [
                      createVNode(VDivider),
                      createVNode(VCardText, { class: "d-flex gap-y-3 flex-column" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-end" }, [
                            createVNode(VBtnToggle, {
                              modelValue: unref(preferredCodeLanguage),
                              "onUpdate:modelValue": ($event) => isRef(preferredCodeLanguage) ? preferredCodeLanguage.value = $event : null,
                              mandatory: "",
                              density: "compact"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { value: "ts" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-language-typescript" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "js" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-language-javascript" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "position-relative" }, [
                            (openBlock(), createBlock(unref(Prism), {
                              key: props.code[unref(preferredCodeLanguage)],
                              language: props.codeLanguage,
                              style: _ctx.$vuetify.locale.isRtl ? "text-align: right" : "text-align: left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.code[unref(preferredCodeLanguage)]), 1)
                              ]),
                              _: 1
                            }, 8, ["language", "style"])),
                            createVNode(_component_IconBtn, {
                              class: "position-absolute app-card-code-copy-icon",
                              color: "white",
                              onClick: () => {
                                unref(copy)();
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: unref(copied) ? "ri-check-line" : "ri-file-copy-line",
                                  size: "20"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ], 512), [
                      [vShow, unref(isCodeShown)]
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
                  createVNode(_component_IconBtn, {
                    color: unref(isCodeShown) ? "primary" : "default",
                    class: unref(isCodeShown) ? "" : "text-disabled",
                    onClick: ($event) => isCodeShown.value = !unref(isCodeShown)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "20",
                        icon: "ri-code-s-line"
                      })
                    ]),
                    _: 1
                  }, 8, ["color", "class", "onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              __props.noPadding ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(VCardText, { key: 1 }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })),
              createVNode(VExpandTransition, null, {
                default: withCtx(() => [
                  withDirectives(createVNode("div", null, [
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "d-flex gap-y-3 flex-column" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-end" }, [
                          createVNode(VBtnToggle, {
                            modelValue: unref(preferredCodeLanguage),
                            "onUpdate:modelValue": ($event) => isRef(preferredCodeLanguage) ? preferredCodeLanguage.value = $event : null,
                            mandatory: "",
                            density: "compact"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { value: "ts" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-language-typescript" })
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { value: "js" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-language-javascript" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "position-relative" }, [
                          (openBlock(), createBlock(unref(Prism), {
                            key: props.code[unref(preferredCodeLanguage)],
                            language: props.codeLanguage,
                            style: _ctx.$vuetify.locale.isRtl ? "text-align: right" : "text-align: left"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.code[unref(preferredCodeLanguage)]), 1)
                            ]),
                            _: 1
                          }, 8, ["language", "style"])),
                          createVNode(_component_IconBtn, {
                            class: "position-absolute app-card-code-copy-icon",
                            color: "white",
                            onClick: () => {
                              unref(copy)();
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: unref(copied) ? "ri-check-line" : "ri-file-copy-line",
                                size: "20"
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ], 512), [
                    [vShow, unref(isCodeShown)]
                  ])
                ]),
                _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/cards/AppCardCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
