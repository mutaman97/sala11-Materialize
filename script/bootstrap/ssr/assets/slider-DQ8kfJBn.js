import { useSSRContext, ref, computed, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, isRef, mergeProps, createTextVNode, toDisplayString } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, V as VBtn, a as VIcon } from "../ssr.js";
import { c as VFadeTransition } from "./index-D5WAZiYx.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VSlider } from "./VSlider-DJW38cpe.js";
import { b as VResponsive } from "./VImg-D-rbsD1g.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { _ as _sfc_main$e } from "./AppCardCode-DkpMhnYF.js";
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
import "./VSliderTrack-3ICpqYF9.js";
import "./VInput-Bla8Vlgt.js";
import "./form-DJQTvsmB.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./forwardRefs-IZGbB77j.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const min = 40;
const max = 218;
const _sfc_main$d = {
  __name: "DemoSliderAppendAndPrepend",
  __ssrInlineRender: true,
  setup(__props) {
    const bpm = ref(40);
    const isPlaying = ref(false);
    const color = computed(() => {
      if (bpm.value < 100)
        return "primary";
      if (bpm.value < 125)
        return "success";
      if (bpm.value < 140)
        return "info";
      if (bpm.value < 175)
        return "warning";
      return "error";
    });
    const animationDuration = computed(() => {
      return `${60 / bpm.value}s`;
    });
    const decrement = () => {
      if (bpm.value > min)
        bpm.value -= 1;
    };
    const increment = () => {
      if (bpm.value < max)
        bpm.value += 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="d-flex justify-space-between ma-4" data-v-1670d9d4><div data-v-1670d9d4><span class="text-6xl font-weight-light" data-v-1670d9d4>${ssrInterpolate(unref(bpm))}</span><span class="subheading font-weight-light me-1" data-v-1670d9d4>BPM</span>`);
      _push(ssrRenderComponent(VFadeTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isPlaying)) {
              _push2(ssrRenderComponent(VAvatar, {
                color: unref(color),
                style: {
                  animationDuration: unref(animationDuration)
                },
                class: "mb-1 v-avatar--metronome",
                size: "12"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(isPlaying) ? (openBlock(), createBlock(VAvatar, {
                key: 0,
                color: unref(color),
                style: {
                  animationDuration: unref(animationDuration)
                },
                class: "mb-1 v-avatar--metronome",
                size: "12"
              }, null, 8, ["color", "style"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-1670d9d4>`);
      _push(ssrRenderComponent(VBtn, {
        color: unref(color),
        icon: "",
        elevation: "0",
        onClick: ($event) => isPlaying.value = !unref(isPlaying)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "large",
              icon: unref(isPlaying) ? "ri-pause-line" : "ri-play-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                size: "large",
                icon: unref(isPlaying) ? "ri-pause-line" : "ri-play-line"
              }, null, 8, ["icon"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VSlider, {
        modelValue: unref(bpm),
        "onUpdate:modelValue": ($event) => isRef(bpm) ? bpm.value = $event : null,
        color: unref(color),
        step: 1,
        min,
        max,
        "track-color": "secondary"
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              size: "small",
              variant: "text",
              icon: "ri-subtract-line",
              color: unref(color),
              onClick: decrement
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                size: "small",
                variant: "text",
                icon: "ri-subtract-line",
                color: unref(color),
                onClick: decrement
              }, null, 8, ["color"])
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              size: "small",
              variant: "text",
              icon: "ri-add-line",
              color: unref(color),
              onClick: increment
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                size: "small",
                variant: "text",
                icon: "ri-add-line",
                color: unref(color),
                onClick: increment
              }, null, 8, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderAppendAndPrepend.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_13 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-1670d9d4"]]);
const _sfc_main$c = {
  __name: "DemoSliderAppendTextField",
  __ssrInlineRender: true,
  setup(__props) {
    const redColorValue = ref(161);
    const greenColorValue = ref(105);
    const blueColorValue = ref(225);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VResponsive, {
        style: { background: `rgb(${unref(redColorValue)}, ${unref(greenColorValue)}, ${unref(blueColorValue)})` },
        height: "150px"
      }, null, _parent));
      _push(ssrRenderComponent(VRow, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><span class="me-1"${_scopeId2}>R</span>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(redColorValue),
                    "onUpdate:modelValue": ($event) => isRef(redColorValue) ? redColorValue.value = $event : null,
                    max: 255,
                    step: 1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(redColorValue),
                    "onUpdate:modelValue": ($event) => isRef(redColorValue) ? redColorValue.value = $event : null,
                    type: "number",
                    placeholder: "10",
                    max: 255,
                    style: { "max-inline-size": "5rem" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("span", { class: "me-1" }, "R"),
                      createVNode(VSlider, {
                        modelValue: unref(redColorValue),
                        "onUpdate:modelValue": ($event) => isRef(redColorValue) ? redColorValue.value = $event : null,
                        max: 255,
                        step: 1
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: unref(redColorValue),
                        "onUpdate:modelValue": ($event) => isRef(redColorValue) ? redColorValue.value = $event : null,
                        type: "number",
                        placeholder: "10",
                        max: 255,
                        style: { "max-inline-size": "5rem" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><span class="me-1"${_scopeId2}>G</span>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(greenColorValue),
                    "onUpdate:modelValue": ($event) => isRef(greenColorValue) ? greenColorValue.value = $event : null,
                    max: 255,
                    step: 1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(greenColorValue),
                    "onUpdate:modelValue": ($event) => isRef(greenColorValue) ? greenColorValue.value = $event : null,
                    type: "number",
                    placeholder: "20",
                    max: 255,
                    style: { "max-inline-size": "5rem" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("span", { class: "me-1" }, "G"),
                      createVNode(VSlider, {
                        modelValue: unref(greenColorValue),
                        "onUpdate:modelValue": ($event) => isRef(greenColorValue) ? greenColorValue.value = $event : null,
                        max: 255,
                        step: 1
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: unref(greenColorValue),
                        "onUpdate:modelValue": ($event) => isRef(greenColorValue) ? greenColorValue.value = $event : null,
                        type: "number",
                        placeholder: "20",
                        max: 255,
                        style: { "max-inline-size": "5rem" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><span class="me-1"${_scopeId2}>B</span>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(blueColorValue),
                    "onUpdate:modelValue": ($event) => isRef(blueColorValue) ? blueColorValue.value = $event : null,
                    max: 255,
                    step: 1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(blueColorValue),
                    "onUpdate:modelValue": ($event) => isRef(blueColorValue) ? blueColorValue.value = $event : null,
                    type: "number",
                    placeholder: "30",
                    max: 255,
                    style: { "max-inline-size": "5rem" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("span", { class: "me-1" }, "B"),
                      createVNode(VSlider, {
                        modelValue: unref(blueColorValue),
                        "onUpdate:modelValue": ($event) => isRef(blueColorValue) ? blueColorValue.value = $event : null,
                        max: 255,
                        step: 1
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: unref(blueColorValue),
                        "onUpdate:modelValue": ($event) => isRef(blueColorValue) ? blueColorValue.value = $event : null,
                        type: "number",
                        placeholder: "30",
                        max: 255,
                        style: { "max-inline-size": "5rem" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("span", { class: "me-1" }, "R"),
                    createVNode(VSlider, {
                      modelValue: unref(redColorValue),
                      "onUpdate:modelValue": ($event) => isRef(redColorValue) ? redColorValue.value = $event : null,
                      max: 255,
                      step: 1
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VTextField, {
                      modelValue: unref(redColorValue),
                      "onUpdate:modelValue": ($event) => isRef(redColorValue) ? redColorValue.value = $event : null,
                      type: "number",
                      placeholder: "10",
                      max: 255,
                      style: { "max-inline-size": "5rem" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("span", { class: "me-1" }, "G"),
                    createVNode(VSlider, {
                      modelValue: unref(greenColorValue),
                      "onUpdate:modelValue": ($event) => isRef(greenColorValue) ? greenColorValue.value = $event : null,
                      max: 255,
                      step: 1
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VTextField, {
                      modelValue: unref(greenColorValue),
                      "onUpdate:modelValue": ($event) => isRef(greenColorValue) ? greenColorValue.value = $event : null,
                      type: "number",
                      placeholder: "20",
                      max: 255,
                      style: { "max-inline-size": "5rem" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("span", { class: "me-1" }, "B"),
                    createVNode(VSlider, {
                      modelValue: unref(blueColorValue),
                      "onUpdate:modelValue": ($event) => isRef(blueColorValue) ? blueColorValue.value = $event : null,
                      max: 255,
                      step: 1
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VTextField, {
                      modelValue: unref(blueColorValue),
                      "onUpdate:modelValue": ($event) => isRef(blueColorValue) ? blueColorValue.value = $event : null,
                      type: "number",
                      placeholder: "30",
                      max: 255,
                      style: { "max-inline-size": "5rem" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderAppendTextField.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "DemoSliderVertical",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(10);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSlider, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        direction: "vertical"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderVertical.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DemoSliderTicks",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0);
    const fruits = ref(1);
    const ticksLabels = {
      0: "Figs",
      1: "Lemon",
      2: "Pear",
      3: "Apple"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Show ticks when using slider </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    step: 10,
                    "show-ticks": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Show ticks when using slider "),
                    createVNode(VSlider, {
                      modelValue: unref(value),
                      "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                      step: 10,
                      "show-ticks": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Always show ticks </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    step: 10,
                    "show-ticks": "always"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Always show ticks "),
                    createVNode(VSlider, {
                      modelValue: unref(value),
                      "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                      step: 10,
                      "show-ticks": "always"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Tick size </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    step: 10,
                    "show-ticks": "always",
                    "tick-size": "4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Tick size "),
                    createVNode(VSlider, {
                      modelValue: unref(value),
                      "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                      step: 10,
                      "show-ticks": "always",
                      "tick-size": "4"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Tick labels </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(fruits),
                    "onUpdate:modelValue": ($event) => isRef(fruits) ? fruits.value = $event : null,
                    ticks: ticksLabels,
                    max: 3,
                    step: "1",
                    "show-ticks": "always",
                    "tick-size": "4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Tick labels "),
                    createVNode(VSlider, {
                      modelValue: unref(fruits),
                      "onUpdate:modelValue": ($event) => isRef(fruits) ? fruits.value = $event : null,
                      ticks: ticksLabels,
                      max: 3,
                      step: "1",
                      "show-ticks": "always",
                      "tick-size": "4"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Show ticks when using slider "),
                  createVNode(VSlider, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    step: 10,
                    "show-ticks": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Always show ticks "),
                  createVNode(VSlider, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    step: 10,
                    "show-ticks": "always"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Tick size "),
                  createVNode(VSlider, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    step: 10,
                    "show-ticks": "always",
                    "tick-size": "4"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Tick labels "),
                  createVNode(VSlider, {
                    modelValue: unref(fruits),
                    "onUpdate:modelValue": ($event) => isRef(fruits) ? fruits.value = $event : null,
                    ticks: ticksLabels,
                    max: 3,
                    step: "1",
                    "show-ticks": "always",
                    "tick-size": "4"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderTicks.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoSliderThumb",
  __ssrInlineRender: true,
  setup(__props) {
    const satisfactionEmojis = [
      "😭",
      "😢",
      "☹️",
      "🙁",
      "😐",
      "🙂",
      "😊",
      "😁",
      "😄",
      "😍"
    ];
    const slider = ref(45);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Show thumb when using slider </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-label": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Show thumb when using slider "),
                    createVNode(VSlider, {
                      modelValue: unref(slider),
                      "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                      "thumb-label": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Always show thumb label </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-label": "always"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Always show thumb label "),
                    createVNode(VSlider, {
                      modelValue: unref(slider),
                      "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                      "thumb-label": "always"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Custom thumb size </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-size": 30,
                    "thumb-label": "always"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Custom thumb size "),
                    createVNode(VSlider, {
                      modelValue: unref(slider),
                      "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                      "thumb-size": 30,
                      "thumb-label": "always"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> Custom thumb label </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-label": "always"
                  }, {
                    "thumb-label": withCtx(({ modelValue }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)])}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)]), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " Custom thumb label "),
                    createVNode(VSlider, {
                      modelValue: unref(slider),
                      "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                      "thumb-label": "always"
                    }, {
                      "thumb-label": withCtx(({ modelValue }) => [
                        createTextVNode(toDisplayString(satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)]), 1)
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Show thumb when using slider "),
                  createVNode(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-label": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Always show thumb label "),
                  createVNode(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-label": "always"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Custom thumb size "),
                  createVNode(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-size": 30,
                    "thumb-label": "always"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " Custom thumb label "),
                  createVNode(VSlider, {
                    modelValue: unref(slider),
                    "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
                    "thumb-label": "always"
                  }, {
                    "thumb-label": withCtx(({ modelValue }) => [
                      createTextVNode(toDisplayString(satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)]), 1)
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderThumb.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VSlider, mergeProps({
    step: 10,
    "show-ticks": "",
    "thumb-size": 18,
    "tick-size": 4,
    "track-size": 4
  }, _attrs), null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderSize.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {
  __name: "DemoSliderMinAndMax",
  __ssrInlineRender: true,
  setup(__props) {
    const min2 = ref(-50);
    const max2 = ref(90);
    const slider = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-space-between" }, _attrs))}>`);
      _push(ssrRenderComponent(VSlider, {
        modelValue: unref(slider),
        "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
        max: unref(max2),
        min: unref(min2),
        step: 1
      }, null, _parent));
      _push(ssrRenderComponent(VTextField, {
        modelValue: unref(slider),
        "onUpdate:modelValue": ($event) => isRef(slider) ? slider.value = $event : null,
        type: "number",
        placeholder: "10",
        style: { "max-inline-size": "5rem" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderMinAndMax.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoSliderValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(30);
    const rules = [(v) => v <= 40 || "Only 40 in stock"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSlider, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        error: unref(value) > 40,
        rules,
        step: 10,
        "thumb-label": "always",
        "show-ticks": ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderValidation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoSliderStep",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSlider, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        min: 0,
        max: 1,
        step: 0.2,
        "thumb-label": ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderStep.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoSliderIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const mediaSlider = ref(0);
    const alarmSlider = ref(0);
    const zoomInOut = ref(10);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(mediaSlider),
                    "onUpdate:modelValue": ($event) => isRef(mediaSlider) ? mediaSlider.value = $event : null,
                    "prepend-icon": "ri-volume-up-line"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSlider, {
                      modelValue: unref(mediaSlider),
                      "onUpdate:modelValue": ($event) => isRef(mediaSlider) ? mediaSlider.value = $event : null,
                      "prepend-icon": "ri-volume-up-line"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(alarmSlider),
                    "onUpdate:modelValue": ($event) => isRef(alarmSlider) ? alarmSlider.value = $event : null,
                    "append-icon": "ri-alarm-line"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSlider, {
                      modelValue: unref(alarmSlider),
                      "onUpdate:modelValue": ($event) => isRef(alarmSlider) ? alarmSlider.value = $event : null,
                      "append-icon": "ri-alarm-line"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(zoomInOut),
                    "onUpdate:modelValue": ($event) => isRef(zoomInOut) ? zoomInOut.value = $event : null,
                    "append-icon": "ri-search-line-plus-outline",
                    "prepend-icon": "ri-search-line-minus-outline"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSlider, {
                      modelValue: unref(zoomInOut),
                      "onUpdate:modelValue": ($event) => isRef(zoomInOut) ? zoomInOut.value = $event : null,
                      "append-icon": "ri-search-line-plus-outline",
                      "prepend-icon": "ri-search-line-minus-outline"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VSlider, {
                    modelValue: unref(mediaSlider),
                    "onUpdate:modelValue": ($event) => isRef(mediaSlider) ? mediaSlider.value = $event : null,
                    "prepend-icon": "ri-volume-up-line"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VSlider, {
                    modelValue: unref(alarmSlider),
                    "onUpdate:modelValue": ($event) => isRef(alarmSlider) ? alarmSlider.value = $event : null,
                    "append-icon": "ri-alarm-line"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VSlider, {
                    modelValue: unref(zoomInOut),
                    "onUpdate:modelValue": ($event) => isRef(zoomInOut) ? zoomInOut.value = $event : null,
                    "append-icon": "ri-search-line-plus-outline",
                    "prepend-icon": "ri-search-line-minus-outline"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderIcons.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoSliderColors",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderColorValue = ref(25);
    const sliderTrackColorValue = ref(75);
    const sliderThumbColorValue = ref(50);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> color </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(sliderColorValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderColorValue) ? sliderColorValue.value = $event : null,
                    color: "error"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " color "),
                    createVNode(VSlider, {
                      modelValue: unref(sliderColorValue),
                      "onUpdate:modelValue": ($event) => isRef(sliderColorValue) ? sliderColorValue.value = $event : null,
                      color: "error"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> track-color </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(sliderTrackColorValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderTrackColorValue) ? sliderTrackColorValue.value = $event : null,
                    "track-color": "error"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " track-color "),
                    createVNode(VSlider, {
                      modelValue: unref(sliderTrackColorValue),
                      "onUpdate:modelValue": ($event) => isRef(sliderTrackColorValue) ? sliderTrackColorValue.value = $event : null,
                      "track-color": "error"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-caption"${_scopeId2}> thumb-color </div>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(sliderThumbColorValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderThumbColorValue) ? sliderThumbColorValue.value = $event : null,
                    "thumb-color": "error",
                    "thumb-label": "always"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-caption" }, " thumb-color "),
                    createVNode(VSlider, {
                      modelValue: unref(sliderThumbColorValue),
                      "onUpdate:modelValue": ($event) => isRef(sliderThumbColorValue) ? sliderThumbColorValue.value = $event : null,
                      "thumb-color": "error",
                      "thumb-label": "always"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " color "),
                  createVNode(VSlider, {
                    modelValue: unref(sliderColorValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderColorValue) ? sliderColorValue.value = $event : null,
                    color: "error"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " track-color "),
                  createVNode(VSlider, {
                    modelValue: unref(sliderTrackColorValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderTrackColorValue) ? sliderTrackColorValue.value = $event : null,
                    "track-color": "error"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-caption" }, " thumb-color "),
                  createVNode(VSlider, {
                    modelValue: unref(sliderThumbColorValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderThumbColorValue) ? sliderThumbColorValue.value = $event : null,
                    "thumb-color": "error",
                    "thumb-label": "always"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderColors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="text-caption"${_scopeId2}> Disabled </div>`);
              _push3(ssrRenderComponent(VSlider, {
                disabled: "",
                label: "Disabled",
                "model-value": 30
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("div", { class: "text-caption" }, " Disabled "),
                createVNode(VSlider, {
                  disabled: "",
                  label: "Disabled",
                  "model-value": 30
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="text-caption"${_scopeId2}> Readonly </div>`);
              _push3(ssrRenderComponent(VSlider, {
                readonly: "",
                label: "Readonly",
                "model-value": 30
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("div", { class: "text-caption" }, " Readonly "),
                createVNode(VSlider, {
                  readonly: "",
                  label: "Readonly",
                  "model-value": 30
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
              createVNode("div", { class: "text-caption" }, " Disabled "),
              createVNode(VSlider, {
                disabled: "",
                label: "Disabled",
                "model-value": 30
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode("div", { class: "text-caption" }, " Readonly "),
              createVNode(VSlider, {
                readonly: "",
                label: "Readonly",
                "model-value": 30
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderDisabledAndReadonly.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "DemoSliderBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderValue = ref(30);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSlider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSlider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(sliderValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderValue) ? sliderValue.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSlider, {
                      modelValue: unref(sliderValue),
                      "onUpdate:modelValue": ($event) => isRef(sliderValue) ? sliderValue.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VSlider)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VSlider, {
                    modelValue: unref(sliderValue),
                    "onUpdate:modelValue": ($event) => isRef(sliderValue) ? sliderValue.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/slider/DemoSliderBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const appendAndPrepend = { ts: `<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'ri-pause-line' : 'ri-play-line'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="ri-subtract-line"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="ri-add-line"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`, js: `<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'ri-pause-line' : 'ri-play-line'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="ri-subtract-line"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="ri-add-line"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
` };
const appendTextField = { ts: `<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
` };
const basic = { ts: `<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
` };
const colors = { ts: `<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
` };
const disabledAndReadonly = { ts: `<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
` };
const icons = { ts: `<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="ri-volume-up-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="ri-alarm-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="ri-search-line-plus-outline"
        prepend-icon="ri-search-line-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="ri-volume-up-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="ri-alarm-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="ri-search-line-plus-outline"
        prepend-icon="ri-search-line-minus-outline"
      />
    </VCol>
  </VRow>
</template>
` };
const minAndMax = { ts: `<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`, js: `<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
` };
const size = { ts: `<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="4"
    :track-size="4"
  />
</template>
`, js: `<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="4"
    :track-size="4"
  />
</template>
` };
const step = { ts: `<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`, js: `<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
` };
const thumb = { ts: `<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '☹️',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
` };
const ticks = { ts: `<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
` };
const validation = { ts: `<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`, js: `<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
` };
const vertical = { ts: `<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`, js: `<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
` };
const _sfc_main = {
  __name: "slider",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$e;
      const _component_DemoSliderBasic = _sfc_main$1;
      const _component_DemoSliderDisabledAndReadonly = __unplugin_components_2;
      const _component_DemoSliderColors = _sfc_main$3;
      const _component_DemoSliderIcons = _sfc_main$4;
      const _component_DemoSliderStep = _sfc_main$5;
      const _component_DemoSliderValidation = _sfc_main$6;
      const _component_DemoSliderMinAndMax = _sfc_main$7;
      const _component_DemoSliderSize = __unplugin_components_8;
      const _component_DemoSliderThumb = _sfc_main$9;
      const _component_DemoSliderTicks = _sfc_main$a;
      const _component_DemoSliderVertical = _sfc_main$b;
      const _component_DemoSliderAppendTextField = _sfc_main$c;
      const _component_DemoSliderAppendAndPrepend = __unplugin_components_13;
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
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-slider</code> component is a better visualization of the number input.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-slider"),
                            createTextVNode(" component is a better visualization of the number input.")
                          ]),
                          createVNode(_component_DemoSliderBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "v-slider"),
                          createTextVNode(" component is a better visualization of the number input.")
                        ]),
                        createVNode(_component_DemoSliderBasic)
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
                    title: "Disabled and Readonly",
                    code: disabledAndReadonly
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You cannot interact with <code${_scopeId3}>disabled</code> and <code${_scopeId3}>readonly</code> sliders.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderDisabledAndReadonly, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You cannot interact with "),
                            createVNode("code", null, "disabled"),
                            createTextVNode(" and "),
                            createVNode("code", null, "readonly"),
                            createTextVNode(" sliders.")
                          ]),
                          createVNode(_component_DemoSliderDisabledAndReadonly)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Disabled and Readonly",
                      code: disabledAndReadonly
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You cannot interact with "),
                          createVNode("code", null, "disabled"),
                          createTextVNode(" and "),
                          createVNode("code", null, "readonly"),
                          createTextVNode(" sliders.")
                        ]),
                        createVNode(_component_DemoSliderDisabledAndReadonly)
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
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can set the colors of the slider using the props <code${_scopeId3}>color</code>, <code${_scopeId3}>track-color</code> and <code${_scopeId3}>thumb-color</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can set the colors of the slider using the props "),
                            createVNode("code", null, "color"),
                            createTextVNode(", "),
                            createVNode("code", null, "track-color"),
                            createTextVNode(" and "),
                            createVNode("code", null, "thumb-color"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoSliderColors)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Colors",
                      code: colors
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can set the colors of the slider using the props "),
                          createVNode("code", null, "color"),
                          createTextVNode(", "),
                          createVNode("code", null, "track-color"),
                          createTextVNode(" and "),
                          createVNode("code", null, "thumb-color"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoSliderColors)
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
                    title: "Icons",
                    code: icons
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can add icons to the slider with the <code${_scopeId3}>append-icon</code> and <code${_scopeId3}>prepend-icon</code> props.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can add icons to the slider with the "),
                            createVNode("code", null, "append-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "prepend-icon"),
                            createTextVNode(" props.")
                          ]),
                          createVNode(_component_DemoSliderIcons)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icons",
                      code: icons
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can add icons to the slider with the "),
                          createVNode("code", null, "append-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "prepend-icon"),
                          createTextVNode(" props.")
                        ]),
                        createVNode(_component_DemoSliderIcons)
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
                    title: "Step",
                    code: step
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using the <code${_scopeId3}>step</code> prop you can control the precision of the slider, and how much it should move each step.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderStep, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using the "),
                            createVNode("code", null, "step"),
                            createTextVNode(" prop you can control the precision of the slider, and how much it should move each step.")
                          ]),
                          createVNode(_component_DemoSliderStep)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Step",
                      code: step
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Using the "),
                          createVNode("code", null, "step"),
                          createTextVNode(" prop you can control the precision of the slider, and how much it should move each step.")
                        ]),
                        createVNode(_component_DemoSliderStep)
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
                    title: "Validation",
                    code: validation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Vuetify includes simple validation through the <code${_scopeId3}>rules</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Vuetify includes simple validation through the "),
                            createVNode("code", null, "rules"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoSliderValidation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Validation",
                      code: validation
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Vuetify includes simple validation through the "),
                          createVNode("code", null, "rules"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoSliderValidation)
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
                    title: "Min and Max",
                    code: minAndMax
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can set <code${_scopeId3}>min</code> and <code${_scopeId3}>max</code> values of sliders.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderMinAndMax, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can set "),
                            createVNode("code", null, "min"),
                            createTextVNode(" and "),
                            createVNode("code", null, "max"),
                            createTextVNode(" values of sliders.")
                          ]),
                          createVNode(_component_DemoSliderMinAndMax)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Min and Max",
                      code: minAndMax
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can set "),
                          createVNode("code", null, "min"),
                          createTextVNode(" and "),
                          createVNode("code", null, "max"),
                          createTextVNode(" values of sliders.")
                        ]),
                        createVNode(_component_DemoSliderMinAndMax)
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
                    title: "Size",
                    code: size
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>thumb-size</code>, <code${_scopeId3}>tick-size</code>, and <code${_scopeId3}>track-size</code> prop to increase and decrease the size of thumb, tick and track. </p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderSize, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "thumb-size"),
                            createTextVNode(", "),
                            createVNode("code", null, "tick-size"),
                            createTextVNode(", and "),
                            createVNode("code", null, "track-size"),
                            createTextVNode(" prop to increase and decrease the size of thumb, tick and track. ")
                          ]),
                          createVNode(_component_DemoSliderSize)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Size",
                      code: size
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "thumb-size"),
                          createTextVNode(", "),
                          createVNode("code", null, "tick-size"),
                          createTextVNode(", and "),
                          createVNode("code", null, "track-size"),
                          createTextVNode(" prop to increase and decrease the size of thumb, tick and track. ")
                        ]),
                        createVNode(_component_DemoSliderSize)
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
                    title: "Thumb",
                    code: thumb
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can display a thumb label while sliding or always with the <code${_scopeId3}>thumb-label</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderThumb, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can display a thumb label while sliding or always with the "),
                            createVNode("code", null, "thumb-label"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoSliderThumb)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Thumb",
                      code: thumb
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can display a thumb label while sliding or always with the "),
                          createVNode("code", null, "thumb-label"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoSliderThumb)
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
                    title: "Ticks",
                    code: ticks
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Tick marks represent predetermined values to which the user can move the slider.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderTicks, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Tick marks represent predetermined values to which the user can move the slider."),
                          createVNode(_component_DemoSliderTicks)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Ticks",
                      code: ticks
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Tick marks represent predetermined values to which the user can move the slider."),
                        createVNode(_component_DemoSliderTicks)
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
                    title: "Vertical",
                    code: vertical
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> You can use the <code${_scopeId3}>vertical</code> prop to switch sliders to a vertical orientation. </p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderVertical, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" You can use the "),
                            createVNode("code", null, "vertical"),
                            createTextVNode(" prop to switch sliders to a vertical orientation. ")
                          ]),
                          createVNode(_component_DemoSliderVertical)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Vertical",
                      code: vertical
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" You can use the "),
                          createVNode("code", null, "vertical"),
                          createTextVNode(" prop to switch sliders to a vertical orientation. ")
                        ]),
                        createVNode(_component_DemoSliderVertical)
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
                    title: "Append text field",
                    code: appendTextField
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Sliders can be combined with other components in its <code${_scopeId3}>append</code> slot, such as <code${_scopeId3}>v-text-field</code>, to add additional functionality to the component.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderAppendTextField, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Sliders can be combined with other components in its "),
                            createVNode("code", null, "append"),
                            createTextVNode(" slot, such as "),
                            createVNode("code", null, "v-text-field"),
                            createTextVNode(", to add additional functionality to the component.")
                          ]),
                          createVNode(_component_DemoSliderAppendTextField)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Append text field",
                      code: appendTextField
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Sliders can be combined with other components in its "),
                          createVNode("code", null, "append"),
                          createTextVNode(" slot, such as "),
                          createVNode("code", null, "v-text-field"),
                          createTextVNode(", to add additional functionality to the component.")
                        ]),
                        createVNode(_component_DemoSliderAppendTextField)
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
                    title: "Append and prepend",
                    code: appendAndPrepend
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use slots such as <code${_scopeId3}>append</code> and <code${_scopeId3}>prepend</code> to easily customize the <code${_scopeId3}>v-slider</code> to fit any situation.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSliderAppendAndPrepend, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use slots such as "),
                            createVNode("code", null, "append"),
                            createTextVNode(" and "),
                            createVNode("code", null, "prepend"),
                            createTextVNode(" to easily customize the "),
                            createVNode("code", null, "v-slider"),
                            createTextVNode(" to fit any situation.")
                          ]),
                          createVNode(_component_DemoSliderAppendAndPrepend)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Append and prepend",
                      code: appendAndPrepend
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use slots such as "),
                          createVNode("code", null, "append"),
                          createTextVNode(" and "),
                          createVNode("code", null, "prepend"),
                          createTextVNode(" to easily customize the "),
                          createVNode("code", null, "v-slider"),
                          createTextVNode(" to fit any situation.")
                        ]),
                        createVNode(_component_DemoSliderAppendAndPrepend)
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
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "v-slider"),
                        createTextVNode(" component is a better visualization of the number input.")
                      ]),
                      createVNode(_component_DemoSliderBasic)
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
                    title: "Disabled and Readonly",
                    code: disabledAndReadonly
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You cannot interact with "),
                        createVNode("code", null, "disabled"),
                        createTextVNode(" and "),
                        createVNode("code", null, "readonly"),
                        createTextVNode(" sliders.")
                      ]),
                      createVNode(_component_DemoSliderDisabledAndReadonly)
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
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can set the colors of the slider using the props "),
                        createVNode("code", null, "color"),
                        createTextVNode(", "),
                        createVNode("code", null, "track-color"),
                        createTextVNode(" and "),
                        createVNode("code", null, "thumb-color"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoSliderColors)
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
                    title: "Icons",
                    code: icons
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can add icons to the slider with the "),
                        createVNode("code", null, "append-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "prepend-icon"),
                        createTextVNode(" props.")
                      ]),
                      createVNode(_component_DemoSliderIcons)
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
                    title: "Step",
                    code: step
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Using the "),
                        createVNode("code", null, "step"),
                        createTextVNode(" prop you can control the precision of the slider, and how much it should move each step.")
                      ]),
                      createVNode(_component_DemoSliderStep)
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
                    title: "Validation",
                    code: validation
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Vuetify includes simple validation through the "),
                        createVNode("code", null, "rules"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoSliderValidation)
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
                    title: "Min and Max",
                    code: minAndMax
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can set "),
                        createVNode("code", null, "min"),
                        createTextVNode(" and "),
                        createVNode("code", null, "max"),
                        createTextVNode(" values of sliders.")
                      ]),
                      createVNode(_component_DemoSliderMinAndMax)
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
                    title: "Size",
                    code: size
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "thumb-size"),
                        createTextVNode(", "),
                        createVNode("code", null, "tick-size"),
                        createTextVNode(", and "),
                        createVNode("code", null, "track-size"),
                        createTextVNode(" prop to increase and decrease the size of thumb, tick and track. ")
                      ]),
                      createVNode(_component_DemoSliderSize)
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
                    title: "Thumb",
                    code: thumb
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can display a thumb label while sliding or always with the "),
                        createVNode("code", null, "thumb-label"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoSliderThumb)
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
                    title: "Ticks",
                    code: ticks
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Tick marks represent predetermined values to which the user can move the slider."),
                      createVNode(_component_DemoSliderTicks)
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
                    title: "Vertical",
                    code: vertical
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" You can use the "),
                        createVNode("code", null, "vertical"),
                        createTextVNode(" prop to switch sliders to a vertical orientation. ")
                      ]),
                      createVNode(_component_DemoSliderVertical)
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
                    title: "Append text field",
                    code: appendTextField
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Sliders can be combined with other components in its "),
                        createVNode("code", null, "append"),
                        createTextVNode(" slot, such as "),
                        createVNode("code", null, "v-text-field"),
                        createTextVNode(", to add additional functionality to the component.")
                      ]),
                      createVNode(_component_DemoSliderAppendTextField)
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
                    title: "Append and prepend",
                    code: appendAndPrepend
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use slots such as "),
                        createVNode("code", null, "append"),
                        createTextVNode(" and "),
                        createVNode("code", null, "prepend"),
                        createTextVNode(" to easily customize the "),
                        createVNode("code", null, "v-slider"),
                        createTextVNode(" to fit any situation.")
                      ]),
                      createVNode(_component_DemoSliderAppendAndPrepend)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
