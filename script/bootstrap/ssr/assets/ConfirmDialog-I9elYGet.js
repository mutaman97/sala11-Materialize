import { useSSRContext, ref, withCtx, createVNode, toDisplayString, createTextVNode, unref, isRef } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VBtn, a as VIcon } from "../ssr.js";
const _sfc_main = {
  __name: "ConfirmDialog",
  __ssrInlineRender: true,
  props: {
    confirmationQuestion: {
      type: String,
      required: true
    },
    isDialogVisible: {
      type: Boolean,
      required: true
    },
    confirmTitle: {
      type: String,
      required: true
    },
    confirmMsg: {
      type: String,
      required: true
    },
    cancelTitle: {
      type: String,
      required: true
    },
    cancelMsg: {
      type: String,
      required: true
    }
  },
  emits: [
    "update:isDialogVisible",
    "confirm"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const unsubscribed = ref(false);
    const cancelled = ref(false);
    const updateModelValue = (val) => {
      emit("update:isDialogVisible", val);
    };
    const onConfirmation = () => {
      emit("confirm", true);
      updateModelValue(false);
      unsubscribed.value = true;
    };
    const onCancel = () => {
      emit("confirm", false);
      emit("update:isDialogVisible", false);
      cancelled.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VDialog, {
        "max-width": "500",
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": updateModelValue
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "text-center px-10 py-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "warning",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-4xl"${_scopeId4}>!</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-4xl" }, "!")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h6 class="text-lg font-weight-medium"${_scopeId3}>${ssrInterpolate(props.confirmationQuestion)}</h6>`);
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "warning",
                            class: "my-4",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-4xl" }, "!")
                            ]),
                            _: 1
                          }),
                          createVNode("h6", { class: "text-lg font-weight-medium" }, toDisplayString(props.confirmationQuestion), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-center gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "elevated",
                          onClick: onConfirmation
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Confirm `);
                            } else {
                              return [
                                createTextVNode(" Confirm ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          onClick: onCancel
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "elevated",
                            onClick: onConfirmation
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirm ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            onClick: onCancel
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "warning",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-4xl" }, "!")
                          ]),
                          _: 1
                        }),
                        createVNode("h6", { class: "text-lg font-weight-medium" }, toDisplayString(props.confirmationQuestion), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex align-center justify-center gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "elevated",
                          onClick: onConfirmation
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Confirm ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          onClick: onCancel
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
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
              createVNode(VCard, { class: "text-center px-10 py-6" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "warning",
                        class: "my-4",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-4xl" }, "!")
                        ]),
                        _: 1
                      }),
                      createVNode("h6", { class: "text-lg font-weight-medium" }, toDisplayString(props.confirmationQuestion), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex align-center justify-center gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "elevated",
                        onClick: onConfirmation
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "outlined",
                        onClick: onCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(unsubscribed),
        "onUpdate:modelValue": ($event) => isRef(unsubscribed) ? unsubscribed.value = $event : null,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "success",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-xl"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-check-line" }, null, _parent5, _scopeId4));
                              _push5(`</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-xl" }, [
                                  createVNode(VIcon, { icon: "ri-check-line" })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h1 class="text-h4 mb-4"${_scopeId3}>${ssrInterpolate(props.confirmTitle)}</h1><p${_scopeId3}>${ssrInterpolate(props.confirmMsg)}</p>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => unsubscribed.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Ok `);
                            } else {
                              return [
                                createTextVNode(" Ok ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "success",
                            class: "my-4",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-xl" }, [
                                createVNode(VIcon, { icon: "ri-check-line" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.confirmTitle), 1),
                          createVNode("p", null, toDisplayString(props.confirmMsg), 1),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => unsubscribed.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ok ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "success",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-xl" }, [
                              createVNode(VIcon, { icon: "ri-check-line" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.confirmTitle), 1),
                        createVNode("p", null, toDisplayString(props.confirmMsg), 1),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => unsubscribed.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ok ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "success",
                        class: "my-4",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-xl" }, [
                            createVNode(VIcon, { icon: "ri-check-line" })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.confirmTitle), 1),
                      createVNode("p", null, toDisplayString(props.confirmMsg), 1),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => unsubscribed.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ok ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(cancelled),
        "onUpdate:modelValue": ($event) => isRef(cancelled) ? cancelled.value = $event : null,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "error",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-2xl font-weight-light"${_scopeId4}>X</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h1 class="text-h4 mb-4"${_scopeId3}>${ssrInterpolate(props.cancelTitle)}</h1><p${_scopeId3}>${ssrInterpolate(props.cancelMsg)}</p>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => cancelled.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Ok `);
                            } else {
                              return [
                                createTextVNode(" Ok ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "error",
                            class: "my-4",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                            ]),
                            _: 1
                          }),
                          createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.cancelTitle), 1),
                          createVNode("p", null, toDisplayString(props.cancelMsg), 1),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => cancelled.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ok ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "error",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                          ]),
                          _: 1
                        }),
                        createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.cancelTitle), 1),
                        createVNode("p", null, toDisplayString(props.cancelMsg), 1),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => cancelled.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ok ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "error",
                        class: "my-4",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                        ]),
                        _: 1
                      }),
                      createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.cancelTitle), 1),
                      createVNode("p", null, toDisplayString(props.cancelMsg), 1),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => cancelled.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ok ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/ConfirmDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
