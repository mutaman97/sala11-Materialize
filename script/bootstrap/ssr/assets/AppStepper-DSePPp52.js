import { openBlock, createElementBlock, createElementVNode, useSSRContext, ref, computed, watchEffect, mergeProps, unref, isRef, withCtx, createVNode, resolveDynamicComponent, createBlock, toDisplayString, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { V as VSlideGroup } from "./VSlideGroup-Bvz86g7R.js";
import { V as VSlideGroupItem } from "./VSlideGroupItem-CIJ0uuo8.js";
import { a as VIcon } from "../ssr.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "10",
  cy: "10",
  r: "10",
  fill: "CurrentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "m8.833 11.85 5.362-5.362.826.825L8.833 13.5 5.121 9.788l.825-.825z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_4]);
}
const stepperCheck = { render };
const _sfc_main = {
  __name: "AppStepper",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: false,
      default: 0
    },
    direction: {
      type: String,
      required: false,
      default: "horizontal"
    },
    iconSize: {
      type: [
        String,
        Number
      ],
      required: false,
      default: 52
    },
    isActiveStepValid: {
      type: Boolean,
      required: false,
      default: void 0
    },
    align: {
      type: String,
      required: false,
      default: "default"
    }
  },
  emits: ["update:currentStep"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentStep = ref(props.currentStep || 0);
    const activeOrCompletedStepsClasses = computed(() => (index) => index < currentStep.value ? "stepper-steps-completed" : index === currentStep.value ? "stepper-steps-active" : "");
    const isHorizontalAndNotLastStep = computed(() => (index) => props.direction === "horizontal" && props.items.length - 1 !== index);
    const isValidationEnabled = computed(() => {
      return props.isActiveStepValid !== void 0;
    });
    watchEffect(() => {
      if (props.currentStep !== void 0 && props.currentStep < props.items.length && props.currentStep >= 0)
        currentStep.value = props.currentStep;
      emit("update:currentStep", currentStep.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSlideGroup, mergeProps({
        modelValue: unref(currentStep),
        "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
        class: ["app-stepper", `app-stepper-${props.align} ${props.items[0].icon ? "app-stepper-icons" : ""}`],
        "show-arrows": "",
        direction: props.direction
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              _push2(ssrRenderComponent(VSlideGroupItem, {
                key: item.title,
                value: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([[
                      !props.isActiveStepValid && unref(isValidationEnabled) && "stepper-steps-invalid",
                      unref(activeOrCompletedStepsClasses)(index)
                    ], "cursor-pointer app-stepper-step"])}"${_scopeId2}>`);
                    if (item.icon) {
                      _push3(`<div class="stepper-icon-step text-high-emphasis d-flex align-center gap-2"${_scopeId2}><div class="${ssrRenderClass([[props.direction === "horizontal" && "flex-column"], "d-flex align-center gap-2 step-wrapper"])}"${_scopeId2}><div class="stepper-icon"${_scopeId2}>`);
                      if (typeof item.icon === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(ssrRenderComponent(VIcon, {
                          icon: item.icon,
                          size: item.size || props.iconSize
                        }, null, _parent3, _scopeId2));
                      }
                      _push3(`</div><div class="d-flex flex-column gap-y-1"${_scopeId2}><p class="stepper-title font-weight-medium text-base mb-0"${_scopeId2}>${ssrInterpolate(item.title)}</p>`);
                      if (item.subtitle) {
                        _push3(`<p class="stepper-subtitle text-sm mb-0"${_scopeId2}>${ssrInterpolate(item.subtitle)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                      if (unref(isHorizontalAndNotLastStep)(index)) {
                        _push3(ssrRenderComponent(VIcon, {
                          class: "flip-in-rtl stepper-chevron-indicator mx-6",
                          size: "20",
                          icon: "ri-arrow-right-s-line"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!--[--><div class="d-flex align-center gap-x-2 me-2"${_scopeId2}><div class="d-flex align-center gap-2"${_scopeId2}><div class="d-flex align-center justify-center"${_scopeId2}>`);
                      if (index >= unref(currentStep)) {
                        _push3(`<!--[-->`);
                        if (!unref(isValidationEnabled) || props.isActiveStepValid || index !== unref(currentStep)) {
                          _push3(`<div class="stepper-step-indicator"${_scopeId2}></div>`);
                        } else {
                          _push3(ssrRenderComponent(VIcon, {
                            icon: "ri-error-warning-line",
                            size: "24",
                            color: "error"
                          }, null, _parent3, _scopeId2));
                        }
                        _push3(`<!--]-->`);
                      } else {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(stepperCheck)), { class: "stepper-step-icon" }, null), _parent3, _scopeId2);
                      }
                      _push3(`</div><h4 class="${ssrRenderClass(`${!item.subtitle ? "text-h6" : "text-h4"} step-number`)}"${_scopeId2}>${ssrInterpolate((index + 1).toString().padStart(2, "0"))}</h4></div><div class="app-stepper-title-wrapper" style="${ssrRenderStyle({ "line-height": "0" })}"${_scopeId2}><h6 class="text-base font-weight-medium step-title"${_scopeId2}>${ssrInterpolate(item.title)}</h6>`);
                      if (item.subtitle) {
                        _push3(`<p class="text-sm step-subtitle mb-0"${_scopeId2}>${ssrInterpolate(item.subtitle)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      if (unref(isHorizontalAndNotLastStep)(index)) {
                        _push3(`<div class="stepper-step-line"${_scopeId2}></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      if (props.direction === "vertical" && props.items.length - 1 !== index) {
                        _push3(`<div class="stepper-step-line vertical"${_scopeId2}></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["cursor-pointer app-stepper-step", [
                          !props.isActiveStepValid && unref(isValidationEnabled) && "stepper-steps-invalid",
                          unref(activeOrCompletedStepsClasses)(index)
                        ]],
                        onClick: ($event) => !unref(isValidationEnabled) && emit("update:currentStep", index)
                      }, [
                        item.icon ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "stepper-icon-step text-high-emphasis d-flex align-center gap-2"
                        }, [
                          createVNode("div", {
                            class: ["d-flex align-center gap-2 step-wrapper", [props.direction === "horizontal" && "flex-column"]]
                          }, [
                            createVNode("div", { class: "stepper-icon" }, [
                              typeof item.icon === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : (openBlock(), createBlock(VIcon, {
                                key: 1,
                                icon: item.icon,
                                size: item.size || props.iconSize
                              }, null, 8, ["icon", "size"]))
                            ]),
                            createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                              createVNode("p", { class: "stepper-title font-weight-medium text-base mb-0" }, toDisplayString(item.title), 1),
                              item.subtitle ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "stepper-subtitle text-sm mb-0"
                              }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                            ])
                          ], 2),
                          unref(isHorizontalAndNotLastStep)(index) ? (openBlock(), createBlock(VIcon, {
                            key: 0,
                            class: "flip-in-rtl stepper-chevron-indicator mx-6",
                            size: "20",
                            icon: "ri-arrow-right-s-line"
                          })) : createCommentVNode("", true)
                        ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("div", { class: "d-flex align-center gap-x-2 me-2" }, [
                            createVNode("div", { class: "d-flex align-center gap-2" }, [
                              createVNode("div", { class: "d-flex align-center justify-center" }, [
                                index >= unref(currentStep) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  !unref(isValidationEnabled) || props.isActiveStepValid || index !== unref(currentStep) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "stepper-step-indicator"
                                  })) : (openBlock(), createBlock(VIcon, {
                                    key: 1,
                                    icon: "ri-error-warning-line",
                                    size: "24",
                                    color: "error"
                                  }))
                                ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(unref(stepperCheck)), {
                                  key: 1,
                                  class: "stepper-step-icon"
                                }))
                              ]),
                              createVNode("h4", {
                                class: `${!item.subtitle ? "text-h6" : "text-h4"} step-number`
                              }, toDisplayString((index + 1).toString().padStart(2, "0")), 3)
                            ]),
                            createVNode("div", {
                              class: "app-stepper-title-wrapper",
                              style: { "line-height": "0" }
                            }, [
                              createVNode("h6", { class: "text-base font-weight-medium step-title" }, toDisplayString(item.title), 1),
                              item.subtitle ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm step-subtitle mb-0"
                              }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                            ]),
                            unref(isHorizontalAndNotLastStep)(index) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "stepper-step-line"
                            })) : createCommentVNode("", true)
                          ]),
                          props.direction === "vertical" && props.items.length - 1 !== index ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "stepper-step-line vertical"
                          })) : createCommentVNode("", true)
                        ], 64))
                      ], 10, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                return openBlock(), createBlock(VSlideGroupItem, {
                  key: item.title,
                  value: index
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["cursor-pointer app-stepper-step", [
                        !props.isActiveStepValid && unref(isValidationEnabled) && "stepper-steps-invalid",
                        unref(activeOrCompletedStepsClasses)(index)
                      ]],
                      onClick: ($event) => !unref(isValidationEnabled) && emit("update:currentStep", index)
                    }, [
                      item.icon ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "stepper-icon-step text-high-emphasis d-flex align-center gap-2"
                      }, [
                        createVNode("div", {
                          class: ["d-flex align-center gap-2 step-wrapper", [props.direction === "horizontal" && "flex-column"]]
                        }, [
                          createVNode("div", { class: "stepper-icon" }, [
                            typeof item.icon === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : (openBlock(), createBlock(VIcon, {
                              key: 1,
                              icon: item.icon,
                              size: item.size || props.iconSize
                            }, null, 8, ["icon", "size"]))
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                            createVNode("p", { class: "stepper-title font-weight-medium text-base mb-0" }, toDisplayString(item.title), 1),
                            item.subtitle ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "stepper-subtitle text-sm mb-0"
                            }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                          ])
                        ], 2),
                        unref(isHorizontalAndNotLastStep)(index) ? (openBlock(), createBlock(VIcon, {
                          key: 0,
                          class: "flip-in-rtl stepper-chevron-indicator mx-6",
                          size: "20",
                          icon: "ri-arrow-right-s-line"
                        })) : createCommentVNode("", true)
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("div", { class: "d-flex align-center gap-x-2 me-2" }, [
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode("div", { class: "d-flex align-center justify-center" }, [
                              index >= unref(currentStep) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                !unref(isValidationEnabled) || props.isActiveStepValid || index !== unref(currentStep) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "stepper-step-indicator"
                                })) : (openBlock(), createBlock(VIcon, {
                                  key: 1,
                                  icon: "ri-error-warning-line",
                                  size: "24",
                                  color: "error"
                                }))
                              ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(unref(stepperCheck)), {
                                key: 1,
                                class: "stepper-step-icon"
                              }))
                            ]),
                            createVNode("h4", {
                              class: `${!item.subtitle ? "text-h6" : "text-h4"} step-number`
                            }, toDisplayString((index + 1).toString().padStart(2, "0")), 3)
                          ]),
                          createVNode("div", {
                            class: "app-stepper-title-wrapper",
                            style: { "line-height": "0" }
                          }, [
                            createVNode("h6", { class: "text-base font-weight-medium step-title" }, toDisplayString(item.title), 1),
                            item.subtitle ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm step-subtitle mb-0"
                            }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                          ]),
                          unref(isHorizontalAndNotLastStep)(index) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "stepper-step-line"
                          })) : createCommentVNode("", true)
                        ]),
                        props.direction === "vertical" && props.items.length - 1 !== index ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "stepper-step-line vertical"
                        })) : createCommentVNode("", true)
                      ], 64))
                    ], 10, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/AppStepper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
