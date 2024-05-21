import { useSSRContext, ref, withCtx, unref, isRef, createVNode, mergeProps, withModifiers, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { _ as _sfc_main$a } from "./AppCardCode-DkpMhnYF.js";
/* empty css               */
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
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./forwardRefs-IZGbB77j.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$9 = {
  __name: "DemoCheckboxInlineTextField",
  __ssrInlineRender: true,
  setup(__props) {
    const includeFiles = ref(true);
    const isInputEnabled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              sm: "1",
              cols: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(includeFiles),
                    "onUpdate:modelValue": ($event) => isRef(includeFiles) ? includeFiles.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCheckbox, {
                      modelValue: unref(includeFiles),
                      "onUpdate:modelValue": ($event) => isRef(includeFiles) ? includeFiles.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              sm: "11",
              cols: "10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    label: "Include files",
                    placeholder: "Placeholder Text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      label: "Include files",
                      placeholder: "Placeholder Text"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                sm: "1",
                cols: "2"
              }, {
                default: withCtx(() => [
                  createVNode(VCheckbox, {
                    modelValue: unref(includeFiles),
                    "onUpdate:modelValue": ($event) => isRef(includeFiles) ? includeFiles.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                sm: "11",
                cols: "10"
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    label: "Include files",
                    placeholder: "Placeholder Text"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "2",
              sm: "1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(isInputEnabled),
                    "onUpdate:modelValue": ($event) => isRef(isInputEnabled) ? isInputEnabled.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCheckbox, {
                      modelValue: unref(isInputEnabled),
                      "onUpdate:modelValue": ($event) => isRef(isInputEnabled) ? isInputEnabled.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "10",
              sm: "11"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    disabled: !unref(isInputEnabled),
                    label: "I only work if you check the box",
                    placeholder: "Placeholder Text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      disabled: !unref(isInputEnabled),
                      label: "I only work if you check the box",
                      placeholder: "Placeholder Text"
                    }, null, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "2",
                sm: "1"
              }, {
                default: withCtx(() => [
                  createVNode(VCheckbox, {
                    modelValue: unref(isInputEnabled),
                    "onUpdate:modelValue": ($event) => isRef(isInputEnabled) ? isInputEnabled.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "10",
                sm: "11"
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    disabled: !unref(isInputEnabled),
                    label: "I only work if you check the box",
                    placeholder: "Placeholder Text"
                  }, null, 8, ["disabled"])
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxInlineTextField.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoCheckboxLabelSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCheckbox, mergeProps({
        modelValue: unref(checkbox),
        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}> I agree that `);
            _push2(ssrRenderComponent(VTooltip, { location: "bottom" }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttrs(mergeProps({
                    href: "https://vuetifyjs.com/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, props))}${_scopeId2}> Vuetify </a>`);
                } else {
                  return [
                    createVNode("a", mergeProps({
                      href: "https://vuetifyjs.com/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, props, {
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }), " Vuetify ", 16, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Opens in new window `);
                } else {
                  return [
                    createTextVNode(" Opens in new window ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` is awesome </div>`);
          } else {
            return [
              createVNode("div", null, [
                createTextVNode(" I agree that "),
                createVNode(VTooltip, { location: "bottom" }, {
                  activator: withCtx(({ props }) => [
                    createVNode("a", mergeProps({
                      href: "https://vuetifyjs.com/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, props, {
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }), " Vuetify ", 16, ["onClick"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Opens in new window ")
                  ]),
                  _: 1
                }),
                createTextVNode(" is awesome ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxLabelSlot.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoCheckboxStates",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleCheckbox = ref(true);
    const toggleIndeterminateCheckbox = ref(true);
    const disabledCheckbox = ref(true);
    const toggleOffCheckbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(toggleCheckbox),
        "onUpdate:modelValue": ($event) => isRef(toggleCheckbox) ? toggleCheckbox.value = $event : null,
        label: "On"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(toggleOffCheckbox),
        "onUpdate:modelValue": ($event) => isRef(toggleOffCheckbox) ? toggleOffCheckbox.value = $event : null,
        label: "Off"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        indeterminate: unref(toggleIndeterminateCheckbox),
        "onUpdate:indeterminate": ($event) => isRef(toggleIndeterminateCheckbox) ? toggleIndeterminateCheckbox.value = $event : null,
        modelValue: unref(toggleIndeterminateCheckbox),
        "onUpdate:modelValue": ($event) => isRef(toggleIndeterminateCheckbox) ? toggleIndeterminateCheckbox.value = $event : null,
        label: "Indeterminate"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        "model-value": unref(disabledCheckbox),
        disabled: "",
        label: "On disabled"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        disabled: "",
        label: "Off disabled"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxStates.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoCheckboxCheckboxValue",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox = ref(1);
    const checkboxString = ref("Show");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(checkbox),
        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
        "true-value": 1,
        "false-value": 0,
        label: `${unref(checkbox).toString()}`
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(checkboxString),
        "onUpdate:modelValue": ($event) => isRef(checkboxString) ? checkboxString.value = $event : null,
        "true-value": "Show",
        "false-value": "Hide",
        color: "success",
        label: `${unref(checkboxString).toString()}`
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxCheckboxValue.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoCheckboxIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleCheckboxOne = ref(true);
    const toggleCheckboxTwo = ref(true);
    const toggleCheckboxThree = ref(true);
    const capitalizedLabel = (label) => {
      const convertLabelText = label.toString();
      return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(toggleCheckboxOne),
        "onUpdate:modelValue": ($event) => isRef(toggleCheckboxOne) ? toggleCheckboxOne.value = $event : null,
        label: capitalizedLabel(unref(toggleCheckboxOne)),
        "true-icon": "ri-check-line",
        "false-icon": "ri-close-line"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(toggleCheckboxTwo),
        "onUpdate:modelValue": ($event) => isRef(toggleCheckboxTwo) ? toggleCheckboxTwo.value = $event : null,
        label: capitalizedLabel(unref(toggleCheckboxTwo)),
        "true-icon": "ri-alarm-line",
        "false-icon": "ri-alarm-line",
        color: "success"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(toggleCheckboxThree),
        "onUpdate:modelValue": ($event) => isRef(toggleCheckboxThree) ? toggleCheckboxThree.value = $event : null,
        label: capitalizedLabel(unref(toggleCheckboxThree)),
        "true-icon": "ri-checkbox-circle-fill",
        "false-icon": "ri-close-circle-fill",
        color: "error"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoCheckboxModelAsArray",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref(["John"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="demo-space-x">`);
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        label: "John",
        value: "John"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        label: "Jacob",
        color: "success",
        value: "Jacob"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        label: "Johnson",
        color: "info",
        value: "Johnson"
      }, null, _parent));
      _push(`</div><p class="mt-1">${ssrInterpolate(unref(selected))}</p><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxModelAsArray.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoCheckboxColors",
  __ssrInlineRender: true,
  setup(__props) {
    const colorCheckbox = ref([
      "Primary",
      "Secondary",
      "Success",
      "Info",
      "Warning",
      "Error"
    ]);
    const selectedCheckbox = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(colorCheckbox), (color) => {
        _push(ssrRenderComponent(VCheckbox, {
          key: color,
          modelValue: unref(selectedCheckbox),
          "onUpdate:modelValue": ($event) => isRef(selectedCheckbox) ? selectedCheckbox.value = $event : null,
          label: color,
          color: color.toLowerCase(),
          value: color
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxColors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoCheckboxDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxOne = ref(true);
    const checkboxTwo = ref(false);
    const capitalizedLabel = (label) => {
      const convertLabelText = label.toString();
      return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(checkboxOne),
        "onUpdate:modelValue": ($event) => isRef(checkboxOne) ? checkboxOne.value = $event : null,
        density: "compact",
        label: capitalizedLabel(unref(checkboxOne))
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(checkboxTwo),
        "onUpdate:modelValue": ($event) => isRef(checkboxTwo) ? checkboxTwo.value = $event : null,
        density: "compact",
        label: capitalizedLabel(unref(checkboxTwo))
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoCheckboxBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxOne = ref(true);
    const checkboxTwo = ref(false);
    const capitalizedLabel = (label) => {
      const convertLabelText = label.toString();
      return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(checkboxOne),
        "onUpdate:modelValue": ($event) => isRef(checkboxOne) ? checkboxOne.value = $event : null,
        label: capitalizedLabel(unref(checkboxOne))
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        modelValue: unref(checkboxTwo),
        "onUpdate:modelValue": ($event) => isRef(checkboxTwo) ? checkboxTwo.value = $event : null,
        label: capitalizedLabel(unref(checkboxTwo))
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/checkbox/DemoCheckboxBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`, js: `<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
` };
const checkboxValue = { ts: `<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`, js: `<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
` };
const colors = { ts: `<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`, js: `<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
` };
const density = { ts: `<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`, js: `<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
` };
const icon = { ts: `<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="ri-check-line"
      false-icon="ri-close-line"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="ri-alarm-line"
      false-icon="ri-alarm-line"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="ri-checkbox-circle-fill"
      false-icon="ri-close-circle-fill"
      color="error"
    />
  </div>
</template>
`, js: `<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="ri-check-line"
      false-icon="ri-close-line"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="ri-alarm-line"
      false-icon="ri-alarm-line"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="ri-checkbox-circle-fill"
      false-icon="ri-close-circle-fill"
      color="error"
    />
  </div>
</template>
` };
const inlineTextField = { ts: `<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
` };
const labelSlot = { ts: `<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`, js: `<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
` };
const modelAsArray = { ts: `<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`, js: `<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
` };
const states = { ts: `<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`, js: `<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
` };
const _sfc_main = {
  __name: "checkbox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$a;
      const _component_DemoCheckboxBasic = _sfc_main$1;
      const _component_DemoCheckboxDensity = _sfc_main$2;
      const _component_DemoCheckboxColors = _sfc_main$3;
      const _component_DemoCheckboxModelAsArray = _sfc_main$4;
      const _component_DemoCheckboxIcon = _sfc_main$5;
      const _component_DemoCheckboxCheckboxValue = _sfc_main$6;
      const _component_DemoCheckboxStates = _sfc_main$7;
      const _component_DemoCheckboxLabelSlot = _sfc_main$8;
      const _component_DemoCheckboxInlineTextField = _sfc_main$9;
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
                        _push4(`<p${_scopeId3}><code${_scopeId3}>v-checkbox</code> in its simplest form provides a toggle between 2 values.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "v-checkbox"),
                            createTextVNode(" in its simplest form provides a toggle between 2 values.")
                          ]),
                          createVNode(_component_DemoCheckboxBasic)
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
                          createVNode("code", null, "v-checkbox"),
                          createTextVNode(" in its simplest form provides a toggle between 2 values.")
                        ]),
                        createVNode(_component_DemoCheckboxBasic)
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
                    title: "Density",
                    code: density
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>density</code> prop to reduces the input height. Available options are: <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop to reduces the input height. Available options are: "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoCheckboxDensity)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Density",
                      code: density
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop to reduces the input height. Available options are: "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoCheckboxDensity)
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
                        _push4(`<p${_scopeId3}>Checkboxes can be colored by using any of the builtin colors and contextual names using the <code${_scopeId3}>color</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoCheckboxColors)
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
                          createTextVNode("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoCheckboxColors)
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
                        _push4(`<p${_scopeId3}>Multiple <code${_scopeId3}>v-checkbox</code>&#39;s can share the same <code${_scopeId3}>v-model</code> by using an array.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxModelAsArray, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Multiple "),
                            createVNode("code", null, "v-checkbox"),
                            createTextVNode("'s can share the same "),
                            createVNode("code", null, "v-model"),
                            createTextVNode(" by using an array.")
                          ]),
                          createVNode(_component_DemoCheckboxModelAsArray)
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
                          createVNode("code", null, "v-checkbox"),
                          createTextVNode("'s can share the same "),
                          createVNode("code", null, "v-model"),
                          createTextVNode(" by using an array.")
                        ]),
                        createVNode(_component_DemoCheckboxModelAsArray)
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
                    title: "Icon",
                    code: icon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>false-icon</code> and <code${_scopeId3}>true-icon</code> prop to change the icon on the checkbox.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "false-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "true-icon"),
                            createTextVNode(" prop to change the icon on the checkbox.")
                          ]),
                          createVNode(_component_DemoCheckboxIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icon",
                      code: icon
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "false-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "true-icon"),
                          createTextVNode(" prop to change the icon on the checkbox.")
                        ]),
                        createVNode(_component_DemoCheckboxIcon)
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
                    title: "Checkbox Value",
                    code: checkboxValue
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>false-value</code> and <code${_scopeId3}>true-value</code> prop to sets value for truthy and falsy state</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxCheckboxValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "false-value"),
                            createTextVNode(" and "),
                            createVNode("code", null, "true-value"),
                            createTextVNode(" prop to sets value for truthy and falsy state")
                          ]),
                          createVNode(_component_DemoCheckboxCheckboxValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Checkbox Value",
                      code: checkboxValue
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "false-value"),
                          createTextVNode(" and "),
                          createVNode("code", null, "true-value"),
                          createTextVNode(" prop to sets value for truthy and falsy state")
                        ]),
                        createVNode(_component_DemoCheckboxCheckboxValue)
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
                        _push4(`<p${_scopeId3}><code${_scopeId3}>v-checkbox</code> can have different states such as <code${_scopeId3}>default</code>, <code${_scopeId3}>disabled</code>, and <code${_scopeId3}>indeterminate</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxStates, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "v-checkbox"),
                            createTextVNode(" can have different states such as "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "disabled"),
                            createTextVNode(", and "),
                            createVNode("code", null, "indeterminate"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoCheckboxStates)
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
                          createVNode("code", null, "v-checkbox"),
                          createTextVNode(" can have different states such as "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "disabled"),
                          createTextVNode(", and "),
                          createVNode("code", null, "indeterminate"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoCheckboxStates)
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
                    title: "Label Slot",
                    code: labelSlot
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Checkbox labels can be defined in <code${_scopeId3}>label</code> slot - that will allow to use HTML content.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxLabelSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Checkbox labels can be defined in "),
                            createVNode("code", null, "label"),
                            createTextVNode(" slot - that will allow to use HTML content.")
                          ]),
                          createVNode(_component_DemoCheckboxLabelSlot)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Label Slot",
                      code: labelSlot
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Checkbox labels can be defined in "),
                          createVNode("code", null, "label"),
                          createTextVNode(" slot - that will allow to use HTML content.")
                        ]),
                        createVNode(_component_DemoCheckboxLabelSlot)
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
                    title: "Inline text-field",
                    code: inlineTextField
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can place <code${_scopeId3}>v-checkbox</code> in line with other components such as <code${_scopeId3}>v-text-field</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoCheckboxInlineTextField, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can place "),
                            createVNode("code", null, "v-checkbox"),
                            createTextVNode(" in line with other components such as "),
                            createVNode("code", null, "v-text-field"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoCheckboxInlineTextField)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Inline text-field",
                      code: inlineTextField
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can place "),
                          createVNode("code", null, "v-checkbox"),
                          createTextVNode(" in line with other components such as "),
                          createVNode("code", null, "v-text-field"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoCheckboxInlineTextField)
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
                        createVNode("code", null, "v-checkbox"),
                        createTextVNode(" in its simplest form provides a toggle between 2 values.")
                      ]),
                      createVNode(_component_DemoCheckboxBasic)
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
                    title: "Density",
                    code: density
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "density"),
                        createTextVNode(" prop to reduces the input height. Available options are: "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoCheckboxDensity)
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
                        createTextVNode("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoCheckboxColors)
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
                        createVNode("code", null, "v-checkbox"),
                        createTextVNode("'s can share the same "),
                        createVNode("code", null, "v-model"),
                        createTextVNode(" by using an array.")
                      ]),
                      createVNode(_component_DemoCheckboxModelAsArray)
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
                    title: "Icon",
                    code: icon
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "false-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "true-icon"),
                        createTextVNode(" prop to change the icon on the checkbox.")
                      ]),
                      createVNode(_component_DemoCheckboxIcon)
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
                    title: "Checkbox Value",
                    code: checkboxValue
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "false-value"),
                        createTextVNode(" and "),
                        createVNode("code", null, "true-value"),
                        createTextVNode(" prop to sets value for truthy and falsy state")
                      ]),
                      createVNode(_component_DemoCheckboxCheckboxValue)
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
                        createVNode("code", null, "v-checkbox"),
                        createTextVNode(" can have different states such as "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "disabled"),
                        createTextVNode(", and "),
                        createVNode("code", null, "indeterminate"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoCheckboxStates)
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
                    title: "Label Slot",
                    code: labelSlot
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Checkbox labels can be defined in "),
                        createVNode("code", null, "label"),
                        createTextVNode(" slot - that will allow to use HTML content.")
                      ]),
                      createVNode(_component_DemoCheckboxLabelSlot)
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
                    title: "Inline text-field",
                    code: inlineTextField
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can place "),
                        createVNode("code", null, "v-checkbox"),
                        createTextVNode(" in line with other components such as "),
                        createVNode("code", null, "v-text-field"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoCheckboxInlineTextField)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
