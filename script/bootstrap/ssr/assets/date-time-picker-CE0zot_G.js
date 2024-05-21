import { _ as _sfc_main$9 } from "./AppDateTimePicker-B0c_dYDs.js";
import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$a } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "../ssr.js";
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
import "./form-DJQTvsmB.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$8 = {
  __name: "DemoDateTimePickerInline",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(date),
        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
        label: "Inline",
        placeholder: "Select Date",
        config: { inline: true }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerInline.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoDateTimePickerDisabledRange",
  __ssrInlineRender: true,
  setup(__props) {
    const now = /* @__PURE__ */ new Date();
    const currentMonth = now.toLocaleString("default", { month: "2-digit" });
    const currentYear = now.getFullYear();
    const date = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(date),
        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
        label: "Disabled Range",
        placeholder: "Select date",
        config: { dateFormat: "Y-m-d", disable: [{ from: `${unref(currentYear)}-${unref(currentMonth)}-20`, to: `${unref(currentYear)}-${unref(currentMonth)}-25` }] }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerDisabledRange.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoDateTimePickerHumanFriendly",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(date),
        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
        label: "Human Friendly",
        placeholder: "Select date",
        config: { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerHumanFriendly.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoDateTimePickerRange",
  __ssrInlineRender: true,
  setup(__props) {
    const dateRange = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(dateRange),
        "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null,
        label: "Range",
        placeholder: "Select date",
        config: { mode: "range" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerRange.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoDateTimePickerMultipleDates",
  __ssrInlineRender: true,
  setup(__props) {
    const multipleDate = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(multipleDate),
        "onUpdate:modelValue": ($event) => isRef(multipleDate) ? multipleDate.value = $event : null,
        label: "Multiple Dates",
        placeholder: "Select date",
        config: { mode: "multiple", dateFormat: "Y-m-d" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerMultipleDates.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoDateTimePickerDateAndTime",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(date),
        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
        label: "Date & TIme",
        placeholder: "Select date and time",
        config: { enableTime: true, dateFormat: "Y-m-d H:i" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerDateAndTime.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoDateTimePickerTimePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const time = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(time),
        "onUpdate:modelValue": ($event) => isRef(time) ? time.value = $event : null,
        label: "Time picker",
        placeholder: "Select time",
        config: { enableTime: true, noCalendar: true, dateFormat: "H:i" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerTimePicker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoDateTimePickerBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(_component_AppDateTimePicker, mergeProps({
        modelValue: unref(date),
        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
        label: "Default",
        placeholder: "Select date"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/date-time-picker/DemoDateTimePickerBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`, js: `<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
` };
const dateAndTime = { ts: `<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`, js: `<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
` };
const disabledRange = { ts: `<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`, js: `<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
` };
const humanFriendly = { ts: `<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`, js: `<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
` };
const inline = { ts: `<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`, js: `<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
` };
const multipleDates = { ts: `<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`, js: `<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
` };
const range = { ts: `<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`, js: `<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
` };
const timePicker = { ts: `<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`, js: `<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
` };
const _sfc_main = {
  __name: "date-time-picker",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$a;
      const _component_DemoDateTimePickerBasic = _sfc_main$1;
      const _component_DemoDateTimePickerTimePicker = _sfc_main$2;
      const _component_DemoDateTimePickerDateAndTime = _sfc_main$3;
      const _component_DemoDateTimePickerMultipleDates = _sfc_main$4;
      const _component_DemoDateTimePickerRange = _sfc_main$5;
      const _component_DemoDateTimePickerHumanFriendly = _sfc_main$6;
      const _component_DemoDateTimePickerDisabledRange = _sfc_main$7;
      const _component_DemoDateTimePickerInline = _sfc_main$8;
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
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerBasic)
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
                        createVNode(_component_DemoDateTimePickerBasic)
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
                    title: "Time Picker",
                    code: timePicker
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerTimePicker, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerTimePicker)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Time Picker",
                      code: timePicker
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerTimePicker)
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
                    title: "Date and Time",
                    code: dateAndTime
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerDateAndTime, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerDateAndTime)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Date and Time",
                      code: dateAndTime
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerDateAndTime)
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
                    title: "Multiple Dates",
                    code: multipleDates
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerMultipleDates, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerMultipleDates)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Multiple Dates",
                      code: multipleDates
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerMultipleDates)
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
                    title: "Range",
                    code: range
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerRange, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerRange)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Range",
                      code: range
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerRange)
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
                    title: "Human Friendly",
                    code: humanFriendly
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerHumanFriendly, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerHumanFriendly)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Human Friendly",
                      code: humanFriendly
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerHumanFriendly)
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
                    title: "Disabled Range",
                    code: disabledRange
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerDisabledRange, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerDisabledRange)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Disabled Range",
                      code: disabledRange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerDisabledRange)
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
                    title: "Inline",
                    code: inline
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDateTimePickerInline, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDateTimePickerInline)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Inline",
                      code: inline
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDateTimePickerInline)
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
                      createVNode(_component_DemoDateTimePickerBasic)
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
                    title: "Time Picker",
                    code: timePicker
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerTimePicker)
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
                    title: "Date and Time",
                    code: dateAndTime
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerDateAndTime)
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
                    title: "Multiple Dates",
                    code: multipleDates
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerMultipleDates)
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
                    title: "Range",
                    code: range
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerRange)
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
                    title: "Human Friendly",
                    code: humanFriendly
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerHumanFriendly)
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
                    title: "Disabled Range",
                    code: disabledRange
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerDisabledRange)
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
                    title: "Inline",
                    code: inline
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDateTimePickerInline)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/date-time-picker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
