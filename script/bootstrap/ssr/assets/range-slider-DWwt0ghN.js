import { ref, computed, createVNode, mergeProps, Fragment, useSSRContext, unref, isRef, withCtx, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { m as makeSliderProps, u as useSteps, a as useSlider, V as VSliderTrack, b as VSliderThumb, g as getOffset } from "./VSliderTrack-3ICpqYF9.js";
import { m as makeVInputProps, V as VInput } from "./VInput-Bla8Vlgt.js";
import { m as makeFocusProps, u as useFocus, V as VLabel } from "./form-DJQTvsmB.js";
import { C as propsFactory, E as genericComponent, aI as useRtl, av as useProxiedModel, F as useRender, a as VIcon } from "../ssr.js";
import { _ as _sfc_main$7 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./index-D5WAZiYx.js";
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
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const makeVRangeSliderProps = propsFactory({
  ...makeFocusProps(),
  ...makeVInputProps(),
  ...makeSliderProps(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider");
const VRangeSlider = genericComponent()({
  name: "VRangeSlider",
  props: makeVRangeSliderProps(),
  emits: {
    "update:focused": (value) => true,
    "update:modelValue": (value) => true,
    end: (value) => true,
    start: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const startThumbRef = ref();
    const stopThumbRef = ref();
    const inputRef = ref();
    const {
      rtlClasses
    } = useRtl();
    function getActiveThumb(e) {
      if (!startThumbRef.value || !stopThumbRef.value)
        return;
      const startOffset = getOffset(e, startThumbRef.value.$el, props.direction);
      const stopOffset = getOffset(e, stopThumbRef.value.$el, props.direction);
      const a = Math.abs(startOffset);
      const b = Math.abs(stopOffset);
      return a < b || a === b && startOffset < 0 ? startThumbRef.value.$el : stopThumbRef.value.$el;
    }
    const steps = useSteps(props);
    const model = useProxiedModel(props, "modelValue", void 0, (arr) => {
      if (!(arr == null ? void 0 : arr.length))
        return [0, 0];
      return arr.map((value) => steps.roundValue(value));
    });
    const {
      activeThumbRef,
      hasLabels,
      max,
      min,
      mousePressed,
      onSliderMousedown,
      onSliderTouchstart,
      position,
      trackContainerRef,
      readonly
    } = useSlider({
      props,
      steps,
      onSliderStart: () => {
        emit("start", model.value);
      },
      onSliderEnd: (_ref2) => {
        var _a;
        let {
          value
        } = _ref2;
        const newValue = activeThumbRef.value === ((_a = startThumbRef.value) == null ? void 0 : _a.$el) ? [value, model.value[1]] : [model.value[0], value];
        if (!props.strict && newValue[0] < newValue[1]) {
          model.value = newValue;
        }
        emit("end", model.value);
      },
      onSliderMove: (_ref3) => {
        var _a, _b, _c, _d;
        let {
          value
        } = _ref3;
        const [start, stop] = model.value;
        if (!props.strict && start === stop && start !== min.value) {
          activeThumbRef.value = value > start ? (_a = stopThumbRef.value) == null ? void 0 : _a.$el : (_b = startThumbRef.value) == null ? void 0 : _b.$el;
          (_c = activeThumbRef.value) == null ? void 0 : _c.focus();
        }
        if (activeThumbRef.value === ((_d = startThumbRef.value) == null ? void 0 : _d.$el)) {
          model.value = [Math.min(value, stop), stop];
        } else {
          model.value = [start, Math.max(start, value)];
        }
      },
      getActiveThumb
    });
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const trackStart = computed(() => position(model.value[0]));
    const trackStop = computed(() => position(model.value[1]));
    useRender(() => {
      const inputProps = VInput.filterProps(props);
      const hasPrepend = !!(props.label || slots.label || slots.prepend);
      return createVNode(VInput, mergeProps({
        "class": ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!slots["tick-label"] || hasLabels.value,
          "v-slider--focused": isFocused.value,
          "v-slider--pressed": mousePressed.value,
          "v-slider--disabled": props.disabled
        }, rtlClasses.value, props.class],
        "style": props.style,
        "ref": inputRef
      }, inputProps, {
        "focused": isFocused.value
      }), {
        ...slots,
        prepend: hasPrepend ? (slotProps) => {
          var _a, _b;
          return createVNode(Fragment, null, [((_a = slots.label) == null ? void 0 : _a.call(slots, slotProps)) ?? (props.label ? createVNode(VLabel, {
            "class": "v-slider__label",
            "text": props.label
          }, null) : void 0), (_b = slots.prepend) == null ? void 0 : _b.call(slots, slotProps)]);
        } : void 0,
        default: (_ref4) => {
          var _a, _b;
          let {
            id,
            messagesId
          } = _ref4;
          return createVNode("div", {
            "class": "v-slider__container",
            "onMousedown": !readonly.value ? onSliderMousedown : void 0,
            "onTouchstartPassive": !readonly.value ? onSliderTouchstart : void 0
          }, [createVNode("input", {
            "id": `${id.value}_start`,
            "name": props.name || id.value,
            "disabled": !!props.disabled,
            "readonly": !!props.readonly,
            "tabindex": "-1",
            "value": model.value[0]
          }, null), createVNode("input", {
            "id": `${id.value}_stop`,
            "name": props.name || id.value,
            "disabled": !!props.disabled,
            "readonly": !!props.readonly,
            "tabindex": "-1",
            "value": model.value[1]
          }, null), createVNode(VSliderTrack, {
            "ref": trackContainerRef,
            "start": trackStart.value,
            "stop": trackStop.value
          }, {
            "tick-label": slots["tick-label"]
          }), createVNode(VSliderThumb, {
            "ref": startThumbRef,
            "aria-describedby": messagesId.value,
            "focused": isFocused && activeThumbRef.value === ((_a = startThumbRef.value) == null ? void 0 : _a.$el),
            "modelValue": model.value[0],
            "onUpdate:modelValue": (v) => model.value = [v, model.value[1]],
            "onFocus": (e) => {
              var _a2, _b2, _c, _d;
              focus();
              activeThumbRef.value = (_a2 = startThumbRef.value) == null ? void 0 : _a2.$el;
              if (model.value[0] === model.value[1] && model.value[1] === min.value && e.relatedTarget !== ((_b2 = stopThumbRef.value) == null ? void 0 : _b2.$el)) {
                (_c = startThumbRef.value) == null ? void 0 : _c.$el.blur();
                (_d = stopThumbRef.value) == null ? void 0 : _d.$el.focus();
              }
            },
            "onBlur": () => {
              blur();
              activeThumbRef.value = void 0;
            },
            "min": min.value,
            "max": model.value[1],
            "position": trackStart.value,
            "ripple": props.ripple
          }, {
            "thumb-label": slots["thumb-label"]
          }), createVNode(VSliderThumb, {
            "ref": stopThumbRef,
            "aria-describedby": messagesId.value,
            "focused": isFocused && activeThumbRef.value === ((_b = stopThumbRef.value) == null ? void 0 : _b.$el),
            "modelValue": model.value[1],
            "onUpdate:modelValue": (v) => model.value = [model.value[0], v],
            "onFocus": (e) => {
              var _a2, _b2, _c, _d;
              focus();
              activeThumbRef.value = (_a2 = stopThumbRef.value) == null ? void 0 : _a2.$el;
              if (model.value[0] === model.value[1] && model.value[0] === max.value && e.relatedTarget !== ((_b2 = startThumbRef.value) == null ? void 0 : _b2.$el)) {
                (_c = stopThumbRef.value) == null ? void 0 : _c.$el.blur();
                (_d = startThumbRef.value) == null ? void 0 : _d.$el.focus();
              }
            },
            "onBlur": () => {
              blur();
              activeThumbRef.value = void 0;
            },
            "min": model.value[0],
            "max": max.value,
            "position": trackStop.value,
            "ripple": props.ripple
          }, {
            "thumb-label": slots["thumb-label"]
          })]);
        }
      });
    });
    return {};
  }
});
const _sfc_main$6 = {
  __name: "DemoRangeSliderVertical",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderValues = ref([
      20,
      40
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRangeSlider, mergeProps({
        modelValue: unref(sliderValues),
        "onUpdate:modelValue": ($event) => isRef(sliderValues) ? sliderValues.value = $event : null,
        direction: "vertical"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/range-slider/DemoRangeSliderVertical.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoRangeSliderThumbLabel",
  __ssrInlineRender: true,
  setup(__props) {
    const seasons = [
      "Winter",
      "Spring",
      "Summer",
      "Fall"
    ];
    const icons = [
      "ri-snowy-line",
      "ri-leaf-line",
      "ri-fire-line",
      "ri-drop-line"
    ];
    const sliderValues = ref([
      1,
      2
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRangeSlider, mergeProps({
        modelValue: unref(sliderValues),
        "onUpdate:modelValue": ($event) => isRef(sliderValues) ? sliderValues.value = $event : null,
        tick: seasons,
        min: "0",
        max: "3",
        step: 1,
        "show-ticks": "always",
        "thumb-label": "",
        "tick-size": "4"
      }, _attrs), {
        "thumb-label": withCtx(({ modelValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: icons[modelValue]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: icons[modelValue]
              }, null, 8, ["icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/range-slider/DemoRangeSliderThumbLabel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoRangeSliderStep",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderValues = ref([
      20,
      40
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRangeSlider, mergeProps({
        modelValue: unref(sliderValues),
        "onUpdate:modelValue": ($event) => isRef(sliderValues) ? sliderValues.value = $event : null,
        step: "10"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/range-slider/DemoRangeSliderStep.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoRangeSliderColor",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderValues = ref([
      10,
      60
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRangeSlider, mergeProps({
        modelValue: unref(sliderValues),
        "onUpdate:modelValue": ($event) => isRef(sliderValues) ? sliderValues.value = $event : null,
        color: "success",
        "track-color": "secondary"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/range-slider/DemoRangeSliderColor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoRangeSliderDisabled",
  __ssrInlineRender: true,
  setup(__props) {
    const slidersValues = ref([
      30,
      60
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRangeSlider, mergeProps({
        modelValue: unref(slidersValues),
        "onUpdate:modelValue": ($event) => isRef(slidersValues) ? slidersValues.value = $event : null,
        disabled: "",
        label: "Disabled"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/range-slider/DemoRangeSliderDisabled.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoRangeSliderBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderValues = ref([
      10,
      60
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRangeSlider, mergeProps({
        modelValue: unref(sliderValues),
        "onUpdate:modelValue": ($event) => isRef(sliderValues) ? sliderValues.value = $event : null
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/range-slider/DemoRangeSliderBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`, js: `<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
` };
const color = { ts: `<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`, js: `<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
` };
const disabled = { ts: `<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`, js: `<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
` };
const step = { ts: `<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`, js: `<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
` };
const thumbLabel = { ts: `<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['ri-snowy-line', 'ri-leaf-line', 'ri-fire-line', 'ri-drop-line']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`, js: `<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'ri-snowy-line',
  'ri-leaf-line',
  'ri-fire-line',
  'ri-drop-line',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
` };
const vertical = { ts: `<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`, js: `<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
` };
const _sfc_main = {
  __name: "range-slider",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$7;
      const _component_DemoRangeSliderBasic = _sfc_main$1;
      const _component_DemoRangeSliderDisabled = _sfc_main$2;
      const _component_DemoRangeSliderColor = _sfc_main$3;
      const _component_DemoRangeSliderStep = _sfc_main$4;
      const _component_DemoRangeSliderThumbLabel = _sfc_main$5;
      const _component_DemoRangeSliderVertical = _sfc_main$6;
      _push(ssrRenderComponent(VRow, _attrs, {
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
                        _push4(ssrRenderComponent(_component_DemoRangeSliderBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-slider"),
                            createTextVNode(" component is a better visualization of the number input.")
                          ]),
                          createVNode(_component_DemoRangeSliderBasic)
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
                        createVNode(_component_DemoRangeSliderBasic)
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
                    title: "Disabled",
                    code: disabled
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You cannot interact with <code${_scopeId3}>disabled</code> sliders.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRangeSliderDisabled, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You cannot interact with "),
                            createVNode("code", null, "disabled"),
                            createTextVNode(" sliders.")
                          ]),
                          createVNode(_component_DemoRangeSliderDisabled)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Disabled",
                      code: disabled
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You cannot interact with "),
                          createVNode("code", null, "disabled"),
                          createTextVNode(" sliders.")
                        ]),
                        createVNode(_component_DemoRangeSliderDisabled)
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
                    title: "Color",
                    code: color
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>color</code> prop to the sets the slider color. <code${_scopeId3}>track-color</code> prop to sets the color of slider&#39;s unfilled track.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRangeSliderColor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop to the sets the slider color. "),
                            createVNode("code", null, "track-color"),
                            createTextVNode(" prop to sets the color of slider's unfilled track.")
                          ]),
                          createVNode(_component_DemoRangeSliderColor)
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
                          createTextVNode(" prop to the sets the slider color. "),
                          createVNode("code", null, "track-color"),
                          createTextVNode(" prop to sets the color of slider's unfilled track.")
                        ]),
                        createVNode(_component_DemoRangeSliderColor)
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
                        _push4(`<p${_scopeId3}><code${_scopeId3}>v-range-slider</code> can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRangeSliderStep, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "v-range-slider"),
                            createTextVNode(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")
                          ]),
                          createVNode(_component_DemoRangeSliderStep)
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
                          createVNode("code", null, "v-range-slider"),
                          createTextVNode(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")
                        ]),
                        createVNode(_component_DemoRangeSliderStep)
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
                    title: "Thumb label",
                    code: thumbLabel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Using the <code${_scopeId3}>tick-labels</code> prop along with the <code${_scopeId3}>thumb-label</code> slot, you can create a very customized solution. </p>`);
                        _push4(ssrRenderComponent(_component_DemoRangeSliderThumbLabel, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" Using the "),
                            createVNode("code", null, "tick-labels"),
                            createTextVNode(" prop along with the "),
                            createVNode("code", null, "thumb-label"),
                            createTextVNode(" slot, you can create a very customized solution. ")
                          ]),
                          createVNode(_component_DemoRangeSliderThumbLabel)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Thumb label",
                      code: thumbLabel
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" Using the "),
                          createVNode("code", null, "tick-labels"),
                          createTextVNode(" prop along with the "),
                          createVNode("code", null, "thumb-label"),
                          createTextVNode(" slot, you can create a very customized solution. ")
                        ]),
                        createVNode(_component_DemoRangeSliderThumbLabel)
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
                        _push4(`<p${_scopeId3}>You can use the <code${_scopeId3}>vertical</code> prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRangeSliderVertical, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use the "),
                            createVNode("code", null, "vertical"),
                            createTextVNode(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")
                          ]),
                          createVNode(_component_DemoRangeSliderVertical)
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
                          createTextVNode("You can use the "),
                          createVNode("code", null, "vertical"),
                          createTextVNode(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")
                        ]),
                        createVNode(_component_DemoRangeSliderVertical)
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
                      createVNode(_component_DemoRangeSliderBasic)
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
                    title: "Disabled",
                    code: disabled
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You cannot interact with "),
                        createVNode("code", null, "disabled"),
                        createTextVNode(" sliders.")
                      ]),
                      createVNode(_component_DemoRangeSliderDisabled)
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
                    title: "Color",
                    code: color
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop to the sets the slider color. "),
                        createVNode("code", null, "track-color"),
                        createTextVNode(" prop to sets the color of slider's unfilled track.")
                      ]),
                      createVNode(_component_DemoRangeSliderColor)
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
                        createVNode("code", null, "v-range-slider"),
                        createTextVNode(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")
                      ]),
                      createVNode(_component_DemoRangeSliderStep)
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
                    title: "Thumb label",
                    code: thumbLabel
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" Using the "),
                        createVNode("code", null, "tick-labels"),
                        createTextVNode(" prop along with the "),
                        createVNode("code", null, "thumb-label"),
                        createTextVNode(" slot, you can create a very customized solution. ")
                      ]),
                      createVNode(_component_DemoRangeSliderThumbLabel)
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
                        createTextVNode("You can use the "),
                        createVNode("code", null, "vertical"),
                        createTextVNode(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")
                      ]),
                      createVNode(_component_DemoRangeSliderVertical)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/range-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
