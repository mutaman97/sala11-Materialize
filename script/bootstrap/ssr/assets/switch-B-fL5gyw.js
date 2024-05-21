import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { b as VProgressCircular } from "../ssr.js";
import { _ as _sfc_main$8 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./index-D5WAZiYx.js";
import "./VInput-Bla8Vlgt.js";
import "./form-DJQTvsmB.js";
import "./VImg-D-rbsD1g.js";
import "./VSelectionControl-DW0YMxqK.js";
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
const _sfc_main$7 = {
  __name: "DemoSwitchStates",
  __ssrInlineRender: true,
  setup(__props) {
    const switchOn = ref("on");
    const switchOnDisabled = ref("on");
    const switchOnLoading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(switchOn),
        "onUpdate:modelValue": ($event) => isRef(switchOn) ? switchOn.value = $event : null,
        value: "on",
        label: "On"
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, { label: "Off" }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(switchOnDisabled),
        "onUpdate:modelValue": ($event) => isRef(switchOnDisabled) ? switchOnDisabled.value = $event : null,
        value: "on",
        disabled: "",
        label: "On disabled"
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        disabled: "",
        label: "Off disabled"
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(switchOnLoading),
        "onUpdate:modelValue": ($event) => isRef(switchOnLoading) ? switchOnLoading.value = $event : null,
        loading: "warning",
        label: `${unref(switchOnLoading) ? "On" : "Off"} loading`
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchStates.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoSwitchTrueAndFalseValue",
  __ssrInlineRender: true,
  setup(__props) {
    const switch1 = ref(1);
    const switch2 = ref("Show");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(switch1),
        "onUpdate:modelValue": ($event) => isRef(switch1) ? switch1.value = $event : null,
        label: unref(switch1).toString(),
        "true-value": 1,
        "false-value": 0
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(switch2),
        "onUpdate:modelValue": ($event) => isRef(switch2) ? switch2.value = $event : null,
        label: unref(switch2).toString(),
        "true-value": "Show",
        "false-value": "Hide"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchTrueAndFalseValue.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoSwitchLabelSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const switchMe = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSwitch, mergeProps({
        modelValue: unref(switchMe),
        "onUpdate:modelValue": ($event) => isRef(switchMe) ? switchMe.value = $event : null
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Turn on the progress: `);
            _push2(ssrRenderComponent(VProgressCircular, {
              indeterminate: unref(switchMe),
              size: "24",
              class: "ms-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Turn on the progress: "),
              createVNode(VProgressCircular, {
                indeterminate: unref(switchMe),
                size: "24",
                class: "ms-2"
              }, null, 8, ["indeterminate"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchLabelSlot.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoSwitchModelAsArray",
  __ssrInlineRender: true,
  setup(__props) {
    const people = ref(["John"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="demo-space-x">`);
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(people),
        "onUpdate:modelValue": ($event) => isRef(people) ? people.value = $event : null,
        label: "John",
        value: "John"
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(people),
        "onUpdate:modelValue": ($event) => isRef(people) ? people.value = $event : null,
        label: "Jacob",
        value: "Jacob"
      }, null, _parent));
      _push(`</div><p class="mt-2 mb-0">${ssrInterpolate(unref(people))}</p><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchModelAsArray.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoSwitchColors",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedSwitch = ref([
      "Primary",
      "Secondary",
      "Success",
      "Info",
      "Warning",
      "Error"
    ]);
    const switches = ref([
      "Primary",
      "Secondary",
      "Success",
      "Info",
      "Warning",
      "Error"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(switches), (item) => {
        _push(ssrRenderComponent(VSwitch, {
          key: item,
          modelValue: unref(selectedSwitch),
          "onUpdate:modelValue": ($event) => isRef(selectedSwitch) ? selectedSwitch.value = $event : null,
          label: item,
          value: item,
          color: item.toLowerCase()
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchColors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoSwitchInset",
  __ssrInlineRender: true,
  setup(__props) {
    const insetSwitch1 = ref(true);
    const insetSwitch2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(insetSwitch1),
        "onUpdate:modelValue": ($event) => isRef(insetSwitch1) ? insetSwitch1.value = $event : null,
        inset: false,
        label: `Switch 1: ${unref(insetSwitch1).toString()}`
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(insetSwitch2),
        "onUpdate:modelValue": ($event) => isRef(insetSwitch2) ? insetSwitch2.value = $event : null,
        inset: false,
        label: `Switch 2: ${unref(insetSwitch2).toString()}`
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchInset.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoSwitchBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleSwitch = ref(true);
    const toggleFalseSwitch = ref(false);
    const capitalizedLabel = (label) => {
      const convertLabelText = label.toString();
      return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(toggleSwitch),
        "onUpdate:modelValue": ($event) => isRef(toggleSwitch) ? toggleSwitch.value = $event : null,
        label: capitalizedLabel(unref(toggleSwitch))
      }, null, _parent));
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(toggleFalseSwitch),
        "onUpdate:modelValue": ($event) => isRef(toggleFalseSwitch) ? toggleFalseSwitch.value = $event : null,
        label: capitalizedLabel(unref(toggleFalseSwitch))
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/switch/DemoSwitchBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`, js: `<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
` };
const colors = { ts: `<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`, js: `<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
` };
const inset = { ts: `<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :inset="false"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :inset="false"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`, js: `<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :inset="false"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :inset="false"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
` };
const labelSlot = { ts: `<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`, js: `<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
` };
const modelAsArray = { ts: `<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`, js: `<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
` };
const states = { ts: `<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`, js: `<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
` };
const trueAndFalseValue = { ts: `<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`, js: `<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
` };
const _sfc_main = {
  __name: "switch",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$8;
      const _component_DemoSwitchBasic = _sfc_main$1;
      const _component_DemoSwitchInset = _sfc_main$2;
      const _component_DemoSwitchColors = _sfc_main$3;
      const _component_DemoSwitchModelAsArray = _sfc_main$4;
      const _component_DemoSwitchLabelSlot = _sfc_main$5;
      const _component_DemoSwitchTrueAndFalseValue = _sfc_main$6;
      const _component_DemoSwitchStates = _sfc_main$7;
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
                        _push4(`<p${_scopeId3}>A <code${_scopeId3}>v-switch</code> in its simplest form provides a toggle between 2 values.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("A "),
                            createVNode("code", null, "v-switch"),
                            createTextVNode(" in its simplest form provides a toggle between 2 values.")
                          ]),
                          createVNode(_component_DemoSwitchBasic)
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
                          createTextVNode("A "),
                          createVNode("code", null, "v-switch"),
                          createTextVNode(" in its simplest form provides a toggle between 2 values.")
                        ]),
                        createVNode(_component_DemoSwitchBasic)
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
                    title: "Inset",
                    code: inset
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>To change the default <code${_scopeId3}>inset</code> switch, simply modify the inset prop to a <code${_scopeId3}>false</code> value.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchInset, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("To change the default "),
                            createVNode("code", null, "inset"),
                            createTextVNode(" switch, simply modify the inset prop to a "),
                            createVNode("code", null, "false"),
                            createTextVNode(" value.")
                          ]),
                          createVNode(_component_DemoSwitchInset)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Inset",
                      code: inset
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("To change the default "),
                          createVNode("code", null, "inset"),
                          createTextVNode(" switch, simply modify the inset prop to a "),
                          createVNode("code", null, "false"),
                          createTextVNode(" value.")
                        ]),
                        createVNode(_component_DemoSwitchInset)
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
                        _push4(`<p${_scopeId3}>Switches can be colored by using any of the builtin colors and contextual names using the <code${_scopeId3}>color</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Switches can be colored by using any of the builtin colors and contextual names using the "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoSwitchColors)
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
                          createTextVNode("Switches can be colored by using any of the builtin colors and contextual names using the "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoSwitchColors)
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
                    title: "Model as array",
                    code: modelAsArray
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Multiple <code${_scopeId3}>v-switch</code>&#39;s can share the same <code${_scopeId3}>v-model</code> by using an array.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchModelAsArray, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Multiple "),
                            createVNode("code", null, "v-switch"),
                            createTextVNode("'s can share the same "),
                            createVNode("code", null, "v-model"),
                            createTextVNode(" by using an array.")
                          ]),
                          createVNode(_component_DemoSwitchModelAsArray)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Model as array",
                      code: modelAsArray
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Multiple "),
                          createVNode("code", null, "v-switch"),
                          createTextVNode("'s can share the same "),
                          createVNode("code", null, "v-model"),
                          createTextVNode(" by using an array.")
                        ]),
                        createVNode(_component_DemoSwitchModelAsArray)
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
                    title: "Label slot",
                    code: labelSlot
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Switch labels can be defined in <code${_scopeId3}>label</code> slot - that will allow to use HTML content.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchLabelSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Switch labels can be defined in "),
                            createVNode("code", null, "label"),
                            createTextVNode(" slot - that will allow to use HTML content.")
                          ]),
                          createVNode(_component_DemoSwitchLabelSlot)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Label slot",
                      code: labelSlot
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Switch labels can be defined in "),
                          createVNode("code", null, "label"),
                          createTextVNode(" slot - that will allow to use HTML content.")
                        ]),
                        createVNode(_component_DemoSwitchLabelSlot)
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
                    title: "True and False Value",
                    code: trueAndFalseValue
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Use <code${_scopeId3}>false-value</code> and <code${_scopeId3}>true-value</code> prop to sets value for truthy and falsy state </p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchTrueAndFalseValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" Use "),
                            createVNode("code", null, "false-value"),
                            createTextVNode(" and "),
                            createVNode("code", null, "true-value"),
                            createTextVNode(" prop to sets value for truthy and falsy state ")
                          ]),
                          createVNode(_component_DemoSwitchTrueAndFalseValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "True and False Value",
                      code: trueAndFalseValue
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" Use "),
                          createVNode("code", null, "false-value"),
                          createTextVNode(" and "),
                          createVNode("code", null, "true-value"),
                          createTextVNode(" prop to sets value for truthy and falsy state ")
                        ]),
                        createVNode(_component_DemoSwitchTrueAndFalseValue)
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
                    title: "States",
                    code: states
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}><code${_scopeId3}>v-switch</code> can have different states such as <code${_scopeId3}>default</code>, <code${_scopeId3}>disabled</code>, and <code${_scopeId3}>loading</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSwitchStates, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "v-switch"),
                            createTextVNode(" can have different states such as "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "disabled"),
                            createTextVNode(", and "),
                            createVNode("code", null, "loading"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoSwitchStates)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "States",
                      code: states
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createVNode("code", null, "v-switch"),
                          createTextVNode(" can have different states such as "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "disabled"),
                          createTextVNode(", and "),
                          createVNode("code", null, "loading"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoSwitchStates)
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
                        createTextVNode("A "),
                        createVNode("code", null, "v-switch"),
                        createTextVNode(" in its simplest form provides a toggle between 2 values.")
                      ]),
                      createVNode(_component_DemoSwitchBasic)
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
                    title: "Inset",
                    code: inset
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("To change the default "),
                        createVNode("code", null, "inset"),
                        createTextVNode(" switch, simply modify the inset prop to a "),
                        createVNode("code", null, "false"),
                        createTextVNode(" value.")
                      ]),
                      createVNode(_component_DemoSwitchInset)
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
                        createTextVNode("Switches can be colored by using any of the builtin colors and contextual names using the "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoSwitchColors)
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
                    title: "Model as array",
                    code: modelAsArray
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Multiple "),
                        createVNode("code", null, "v-switch"),
                        createTextVNode("'s can share the same "),
                        createVNode("code", null, "v-model"),
                        createTextVNode(" by using an array.")
                      ]),
                      createVNode(_component_DemoSwitchModelAsArray)
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
                    title: "Label slot",
                    code: labelSlot
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Switch labels can be defined in "),
                        createVNode("code", null, "label"),
                        createTextVNode(" slot - that will allow to use HTML content.")
                      ]),
                      createVNode(_component_DemoSwitchLabelSlot)
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
                    title: "True and False Value",
                    code: trueAndFalseValue
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" Use "),
                        createVNode("code", null, "false-value"),
                        createTextVNode(" and "),
                        createVNode("code", null, "true-value"),
                        createTextVNode(" prop to sets value for truthy and falsy state ")
                      ]),
                      createVNode(_component_DemoSwitchTrueAndFalseValue)
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
                    title: "States",
                    code: states
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createVNode("code", null, "v-switch"),
                        createTextVNode(" can have different states such as "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "disabled"),
                        createTextVNode(", and "),
                        createVNode("code", null, "loading"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoSwitchStates)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
