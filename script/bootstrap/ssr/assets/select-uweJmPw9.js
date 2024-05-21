import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { c as avatar1, d as avatar2, e as avatar3, f as avatar4, h as avatar5 } from "../ssr.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { _ as _sfc_main$a } from "./AppCardCode-DkpMhnYF.js";
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
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VSlideGroup-Bvz86g7R.js";
/* empty css               */
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
const _sfc_main$9 = {
  __name: "DemoSelectSelectionSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        name: "Sandra Adams",
        avatar: avatar1
      },
      {
        name: "Ali Connors",
        avatar: avatar2
      },
      {
        name: "Trevor Hansen",
        avatar: avatar3
      },
      {
        name: "Tucker Smith",
        avatar: avatar4
      },
      {
        name: "Britta Holt",
        avatar: avatar5
      }
    ];
    const value = ref(["Sandra Adams"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        items,
        "item-title": "name",
        "item-value": "name",
        label: "Select Item",
        placeholder: "Select Item",
        multiple: "",
        clearable: "",
        "clear-icon": "ri-close-line"
      }, _attrs), {
        selection: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, null, {
              prepend: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAvatar, {
                    start: "",
                    image: item.raw.avatar
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAvatar, {
                      start: "",
                      image: item.raw.avatar
                    }, null, 8, ["image"])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(item.title)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(item.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, null, {
                prepend: withCtx(() => [
                  createVNode(VAvatar, {
                    start: "",
                    image: item.raw.avatar
                  }, null, 8, ["image"])
                ]),
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(item.title), 1)
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectSelectionSlot.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoSelectMultiple",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedOptions = ref(["Alabama"]);
    const states = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        modelValue: unref(selectedOptions),
        "onUpdate:modelValue": ($event) => isRef(selectedOptions) ? selectedOptions.value = $event : null,
        items: states,
        "menu-props": { maxHeight: "400" },
        label: "Select",
        multiple: "",
        "persistent-hint": "",
        placeholder: "Select State"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectMultiple.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoSelectMenuProps",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Foo",
      "Bar",
      "Fizz",
      "Buzz"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        items,
        "menu-props": { transition: "scroll-y-transition" },
        label: "Label",
        placeholder: "Select Item"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectMenuProps.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoSelectChips",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "foo",
      "bar",
      "fizz",
      "buzz"
    ];
    const selected = ref([
      "foo",
      "bar",
      "fizz",
      "buzz"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        items,
        placeholder: "Select Item",
        label: "Chips",
        chips: "",
        multiple: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectChips.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoSelectIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedOption1 = ref("Florida");
    const selectedOption2 = ref("Texas");
    const states = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedOption1),
                    "onUpdate:modelValue": ($event) => isRef(selectedOption1) ? selectedOption1.value = $event : null,
                    items: states,
                    label: "Select",
                    "prepend-icon": "ri-map-2-line",
                    "single-line": "",
                    variant: "filled",
                    placeholder: "Select State"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      modelValue: unref(selectedOption1),
                      "onUpdate:modelValue": ($event) => isRef(selectedOption1) ? selectedOption1.value = $event : null,
                      items: states,
                      label: "Select",
                      "prepend-icon": "ri-map-2-line",
                      "single-line": "",
                      variant: "filled",
                      placeholder: "Select State"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedOption2),
                    "onUpdate:modelValue": ($event) => isRef(selectedOption2) ? selectedOption2.value = $event : null,
                    items: states,
                    "append-icon": "ri-map-2-line",
                    label: "Select",
                    "single-line": "",
                    variant: "filled",
                    placeholder: "Select State"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      modelValue: unref(selectedOption2),
                      "onUpdate:modelValue": ($event) => isRef(selectedOption2) ? selectedOption2.value = $event : null,
                      items: states,
                      "append-icon": "ri-map-2-line",
                      label: "Select",
                      "single-line": "",
                      variant: "filled",
                      placeholder: "Select State"
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
                  createVNode(VSelect, {
                    modelValue: unref(selectedOption1),
                    "onUpdate:modelValue": ($event) => isRef(selectedOption1) ? selectedOption1.value = $event : null,
                    items: states,
                    label: "Select",
                    "prepend-icon": "ri-map-2-line",
                    "single-line": "",
                    variant: "filled",
                    placeholder: "Select State"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    modelValue: unref(selectedOption2),
                    "onUpdate:modelValue": ($event) => isRef(selectedOption2) ? selectedOption2.value = $event : null,
                    items: states,
                    "append-icon": "ri-map-2-line",
                    label: "Select",
                    "single-line": "",
                    variant: "filled",
                    placeholder: "Select State"
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectIcons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoSelectCustomTextAndValue",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedOption = ref({
      state: "Florida",
      abbr: "FL"
    });
    const items = [
      {
        state: "Florida",
        abbr: "FL"
      },
      {
        state: "Georgia",
        abbr: "GA"
      },
      {
        state: "Nebraska",
        abbr: "NE"
      },
      {
        state: "California",
        abbr: "CA"
      },
      {
        state: "New York",
        abbr: "NY"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        modelValue: unref(selectedOption),
        "onUpdate:modelValue": ($event) => isRef(selectedOption) ? selectedOption.value = $event : null,
        hint: `${unref(selectedOption).state}, ${unref(selectedOption).abbr}`,
        items,
        "item-title": "state",
        "item-value": "abbr",
        label: "Select",
        "persistent-hint": "",
        "return-object": "",
        "single-line": "",
        placeholder: "Select State"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectCustomTextAndValue.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoSelectVariant",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Foo",
      "Bar",
      "Fizz",
      "Buzz"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    items,
                    label: "Outlined",
                    placeholder: "Select Item"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      items,
                      label: "Outlined",
                      placeholder: "Select Item"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    items,
                    label: "Filled",
                    placeholder: "Select Item",
                    variant: "filled"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      items,
                      label: "Filled",
                      placeholder: "Select Item",
                      variant: "filled"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    items,
                    label: "Solo",
                    placeholder: "Select Item",
                    variant: "solo"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      items,
                      label: "Solo",
                      placeholder: "Select Item",
                      variant: "solo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    items,
                    label: "Plain",
                    placeholder: "Select Item",
                    variant: "plain"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      items,
                      label: "Plain",
                      placeholder: "Select Item",
                      variant: "plain"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    items,
                    label: "Underlined",
                    variant: "underlined",
                    placeholder: "Select Item"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      items,
                      label: "Underlined",
                      variant: "underlined",
                      placeholder: "Select Item"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    items,
                    label: "Outlined",
                    placeholder: "Select Item"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    items,
                    label: "Filled",
                    placeholder: "Select Item",
                    variant: "filled"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    items,
                    label: "Solo",
                    placeholder: "Select Item",
                    variant: "solo"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    items,
                    label: "Plain",
                    placeholder: "Select Item",
                    variant: "plain"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    items,
                    label: "Underlined",
                    variant: "underlined",
                    placeholder: "Select Item"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectVariant.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoSelectDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Foo",
      "Bar",
      "Fizz",
      "Buzz"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        items,
        label: "Density",
        density: "compact",
        placeholder: "Select Item"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoSelectBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Foo",
      "Bar",
      "Fizz",
      "Buzz"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSelect, mergeProps({
        items,
        label: "Standard",
        placeholder: "Select Item",
        eager: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/select/DemoSelectBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
    eager
  />
</template>
`, js: `<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
    eager
  />
</template>
` };
const chips = { ts: `<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
  />
</template>
`, js: `<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
  />
</template>
` };
const customTextAndValue = { ts: `<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`, js: `<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
` };
const density = { ts: `<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`, js: `<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
` };
const icons = { ts: `<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="ri-map-2-line"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="ri-map-2-line"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="ri-map-2-line"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="ri-map-2-line"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
` };
const menuProps = { ts: `<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`, js: `<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
` };
const multiple = { ts: `<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`, js: `<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
` };
const selectionSlot = { ts: `<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="ri-close-line"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="ri-close-line"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
` };
const variant = { ts: `<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
` };
const _sfc_main = {
  __name: "select",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$a;
      const _component_DemoSelectBasic = _sfc_main$1;
      const _component_DemoSelectDensity = _sfc_main$2;
      const _component_DemoSelectVariant = _sfc_main$3;
      const _component_DemoSelectCustomTextAndValue = _sfc_main$4;
      const _component_DemoSelectIcons = _sfc_main$5;
      const _component_DemoSelectChips = _sfc_main$6;
      const _component_DemoSelectMenuProps = _sfc_main$7;
      const _component_DemoSelectMultiple = _sfc_main$8;
      const _component_DemoSelectSelectionSlot = _sfc_main$9;
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
                        _push4(`<p${_scopeId3}>Select fields components are used for collecting user provided information from a list of options.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Select fields components are used for collecting user provided information from a list of options."),
                          createVNode(_component_DemoSelectBasic)
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
                        createVNode("p", null, "Select fields components are used for collecting user provided information from a list of options."),
                        createVNode(_component_DemoSelectBasic)
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
                        _push4(`<p${_scopeId3}>You can use <code${_scopeId3}>density</code> prop to reduce the field height and lower max height of list items.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop to reduce the field height and lower max height of list items.")
                          ]),
                          createVNode(_component_DemoSelectDensity)
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
                          createTextVNode("You can use "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop to reduce the field height and lower max height of list items.")
                        ]),
                        createVNode(_component_DemoSelectDensity)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Variant",
                    code: variant
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Use <code${_scopeId3}>filled</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>solo</code>, <code${_scopeId3}>underlined</code> and <code${_scopeId3}>plain</code> options of <code${_scopeId3}>variant</code> prop to change appearance of select. </p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectVariant, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" Use "),
                            createVNode("code", null, "filled"),
                            createTextVNode(", "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(", "),
                            createVNode("code", null, "solo"),
                            createTextVNode(", "),
                            createVNode("code", null, "underlined"),
                            createTextVNode(" and "),
                            createVNode("code", null, "plain"),
                            createTextVNode(" options of "),
                            createVNode("code", null, "variant"),
                            createTextVNode(" prop to change appearance of select. ")
                          ]),
                          createVNode(_component_DemoSelectVariant)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Variant",
                      code: variant
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" Use "),
                          createVNode("code", null, "filled"),
                          createTextVNode(", "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(", "),
                          createVNode("code", null, "solo"),
                          createTextVNode(", "),
                          createVNode("code", null, "underlined"),
                          createTextVNode(" and "),
                          createVNode("code", null, "plain"),
                          createTextVNode(" options of "),
                          createVNode("code", null, "variant"),
                          createTextVNode(" prop to change appearance of select. ")
                        ]),
                        createVNode(_component_DemoSelectVariant)
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
                    title: "Custom text and value",
                    code: customTextAndValue
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectCustomTextAndValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection."),
                          createVNode(_component_DemoSelectCustomTextAndValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom text and value",
                      code: customTextAndValue
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection."),
                        createVNode(_component_DemoSelectCustomTextAndValue)
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
                        _push4(`<p${_scopeId3}>Use a custom <code${_scopeId3}>prepend</code> or <code${_scopeId3}>appended</code> icon.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use a custom "),
                            createVNode("code", null, "prepend"),
                            createTextVNode(" or "),
                            createVNode("code", null, "appended"),
                            createTextVNode(" icon.")
                          ]),
                          createVNode(_component_DemoSelectIcons)
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
                          createTextVNode("Use a custom "),
                          createVNode("code", null, "prepend"),
                          createTextVNode(" or "),
                          createVNode("code", null, "appended"),
                          createTextVNode(" icon.")
                        ]),
                        createVNode(_component_DemoSelectIcons)
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
                    title: "Chips",
                    code: chips
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>chips</code> prop to make selected option as chip.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectChips, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "chips"),
                            createTextVNode(" prop to make selected option as chip.")
                          ]),
                          createVNode(_component_DemoSelectChips)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Chips",
                      code: chips
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "chips"),
                          createTextVNode(" prop to make selected option as chip.")
                        ]),
                        createVNode(_component_DemoSelectChips)
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
                    title: "Menu Props",
                    code: menuProps
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Custom props can be passed directly to <code${_scopeId3}>v-menu</code> using <code${_scopeId3}>menuProps</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectMenuProps, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Custom props can be passed directly to "),
                            createVNode("code", null, "v-menu"),
                            createTextVNode(" using "),
                            createVNode("code", null, "menuProps"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoSelectMenuProps)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Menu Props",
                      code: menuProps
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Custom props can be passed directly to "),
                          createVNode("code", null, "v-menu"),
                          createTextVNode(" using "),
                          createVNode("code", null, "menuProps"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoSelectMenuProps)
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
                    title: "Multiple",
                    code: multiple
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>multiple</code> prop to select multiple option.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectMultiple, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "multiple"),
                            createTextVNode(" prop to select multiple option.")
                          ]),
                          createVNode(_component_DemoSelectMultiple)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Multiple",
                      code: multiple
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "multiple"),
                          createTextVNode(" prop to select multiple option.")
                        ]),
                        createVNode(_component_DemoSelectMultiple)
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
                    title: "Selection slot",
                    code: selectionSlot
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>selection</code> slot can be used to customize the way selected values are shown in the input.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSelectSelectionSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "selection"),
                            createTextVNode(" slot can be used to customize the way selected values are shown in the input.")
                          ]),
                          createVNode(_component_DemoSelectSelectionSlot)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Selection slot",
                      code: selectionSlot
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "selection"),
                          createTextVNode(" slot can be used to customize the way selected values are shown in the input.")
                        ]),
                        createVNode(_component_DemoSelectSelectionSlot)
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
                      createVNode("p", null, "Select fields components are used for collecting user provided information from a list of options."),
                      createVNode(_component_DemoSelectBasic)
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
                        createTextVNode("You can use "),
                        createVNode("code", null, "density"),
                        createTextVNode(" prop to reduce the field height and lower max height of list items.")
                      ]),
                      createVNode(_component_DemoSelectDensity)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Variant",
                    code: variant
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" Use "),
                        createVNode("code", null, "filled"),
                        createTextVNode(", "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(", "),
                        createVNode("code", null, "solo"),
                        createTextVNode(", "),
                        createVNode("code", null, "underlined"),
                        createTextVNode(" and "),
                        createVNode("code", null, "plain"),
                        createTextVNode(" options of "),
                        createVNode("code", null, "variant"),
                        createTextVNode(" prop to change appearance of select. ")
                      ]),
                      createVNode(_component_DemoSelectVariant)
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
                    title: "Custom text and value",
                    code: customTextAndValue
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection."),
                      createVNode(_component_DemoSelectCustomTextAndValue)
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
                        createTextVNode("Use a custom "),
                        createVNode("code", null, "prepend"),
                        createTextVNode(" or "),
                        createVNode("code", null, "appended"),
                        createTextVNode(" icon.")
                      ]),
                      createVNode(_component_DemoSelectIcons)
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
                    title: "Chips",
                    code: chips
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "chips"),
                        createTextVNode(" prop to make selected option as chip.")
                      ]),
                      createVNode(_component_DemoSelectChips)
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
                    title: "Menu Props",
                    code: menuProps
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Custom props can be passed directly to "),
                        createVNode("code", null, "v-menu"),
                        createTextVNode(" using "),
                        createVNode("code", null, "menuProps"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoSelectMenuProps)
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
                    title: "Multiple",
                    code: multiple
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "multiple"),
                        createTextVNode(" prop to select multiple option.")
                      ]),
                      createVNode(_component_DemoSelectMultiple)
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
                    title: "Selection slot",
                    code: selectionSlot
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "selection"),
                        createTextVNode(" slot can be used to customize the way selected values are shown in the input.")
                      ]),
                      createVNode(_component_DemoSelectSelectionSlot)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
