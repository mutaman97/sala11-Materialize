import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { _ as _sfc_main$8 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./VSelectionControl-DW0YMxqK.js";
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
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
/* empty css               */
const _sfc_main$7 = {
  __name: "DemoRadioValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroup = ref(1);
    const rules = [(value) => value !== 3 ? true : "Do not select the third one!"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRadioGroup, mergeProps({
        modelValue: unref(radioGroup),
        "onUpdate:modelValue": ($event) => isRef(radioGroup) ? radioGroup.value = $event : null,
        inline: "",
        rules
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (n) => {
              _push2(ssrRenderComponent(VRadio, {
                key: n,
                error: unref(radioGroup) === 3,
                label: `Radio ${n}`,
                value: n
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                return createVNode(VRadio, {
                  key: n,
                  error: unref(radioGroup) === 3,
                  label: `Radio ${n}`,
                  value: n
                }, null, 8, ["error", "label", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioValidation.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoRadioIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroup = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRadioGroup, mergeProps({
        modelValue: unref(radioGroup),
        "onUpdate:modelValue": ($event) => isRef(radioGroup) ? radioGroup.value = $event : null,
        "false-icon": "ri-notification-off-line",
        "true-icon": "ri-notification-3-line"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(2, (n) => {
              _push2(ssrRenderComponent(VRadio, {
                key: n,
                label: `Radio ${n}`,
                value: n
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(2, (n) => {
                return createVNode(VRadio, {
                  key: n,
                  label: `Radio ${n}`,
                  value: n
                }, null, 8, ["label", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoRadioLabelSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const radios = ref("DuckDuckGo");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRadioGroup, mergeProps({
        modelValue: unref(radios),
        "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>Your favorite <strong${_scopeId}>search engine</strong></div>`);
          } else {
            return [
              createVNode("div", null, [
                createTextVNode("Your favorite "),
                createVNode("strong", null, "search engine")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRadio, { value: "Google" }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}> Of course it&#39;s <span class="text-success"${_scopeId2}> Google </span></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createTextVNode(" Of course it's "),
                      createVNode("span", { class: "text-success" }, " Google ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRadio, { value: "DuckDuckGo" }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}> Definitely <span class="text-primary"${_scopeId2}> DuckDuckGo </span></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createTextVNode(" Definitely "),
                      createVNode("span", { class: "text-primary" }, " DuckDuckGo ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRadio, { value: "Google" }, {
                label: withCtx(() => [
                  createVNode("div", null, [
                    createTextVNode(" Of course it's "),
                    createVNode("span", { class: "text-success" }, " Google ")
                  ])
                ]),
                _: 1
              }),
              createVNode(VRadio, { value: "DuckDuckGo" }, {
                label: withCtx(() => [
                  createVNode("div", null, [
                    createTextVNode(" Definitely "),
                    createVNode("span", { class: "text-primary" }, " DuckDuckGo ")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioLabelSlot.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoRadioDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const columnRadio = ref("radio-1");
    const inlineRadio = ref("radio-1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRadioGroup, {
        modelValue: unref(columnRadio),
        "onUpdate:modelValue": ($event) => isRef(columnRadio) ? columnRadio.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 1",
              value: "radio-1",
              density: "compact"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 2",
              value: "radio-2",
              density: "compact"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRadio, {
                label: "Option 1",
                value: "radio-1",
                density: "compact"
              }),
              createVNode(VRadio, {
                label: "Option 2",
                value: "radio-2",
                density: "compact"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent));
      _push(ssrRenderComponent(VRadioGroup, {
        modelValue: unref(inlineRadio),
        "onUpdate:modelValue": ($event) => isRef(inlineRadio) ? inlineRadio.value = $event : null,
        inline: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 1",
              value: "radio-1",
              density: "compact"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 2",
              value: "radio-2",
              density: "compact"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRadio, {
                label: "Option 1",
                value: "radio-1",
                density: "compact"
              }),
              createVNode(VRadio, {
                label: "Option 2",
                value: "radio-2",
                density: "compact"
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioDensity.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoRadioInline",
  __ssrInlineRender: true,
  setup(__props) {
    const columnRadio = ref("radio-1");
    const inlineRadio = ref("radio-1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRadioGroup, {
        modelValue: unref(columnRadio),
        "onUpdate:modelValue": ($event) => isRef(columnRadio) ? columnRadio.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 1",
              value: "radio-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 2",
              value: "radio-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRadio, {
                label: "Option 1",
                value: "radio-1"
              }),
              createVNode(VRadio, {
                label: "Option 2",
                value: "radio-2"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent));
      _push(ssrRenderComponent(VRadioGroup, {
        modelValue: unref(inlineRadio),
        "onUpdate:modelValue": ($event) => isRef(inlineRadio) ? inlineRadio.value = $event : null,
        inline: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 1",
              value: "radio-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRadio, {
              label: "Option 2",
              value: "radio-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRadio, {
                label: "Option 1",
                value: "radio-1"
              }),
              createVNode(VRadio, {
                label: "Option 2",
                value: "radio-2"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioInline.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoRadioColors",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedRadio = ref("primary");
    const colorsRadio = [
      "Primary",
      "Secondary",
      "Success",
      "Info",
      "Warning",
      "Error"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRadioGroup, mergeProps({
        modelValue: unref(selectedRadio),
        "onUpdate:modelValue": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
        inline: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colorsRadio, (radio) => {
              _push2(ssrRenderComponent(VRadio, {
                key: radio,
                label: radio,
                color: radio.toLocaleLowerCase(),
                value: radio.toLocaleLowerCase()
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colorsRadio, (radio) => {
                return createVNode(VRadio, {
                  key: radio,
                  label: radio,
                  color: radio.toLocaleLowerCase(),
                  value: radio.toLocaleLowerCase()
                }, null, 8, ["label", "color", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioColors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoRadioBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroup = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(VRadioGroup, {
        modelValue: unref(radioGroup),
        "onUpdate:modelValue": ($event) => isRef(radioGroup) ? radioGroup.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(2, (n) => {
              _push2(ssrRenderComponent(VRadio, {
                key: n,
                label: `Radio ${n}`,
                value: n
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(2, (n) => {
                return createVNode(VRadio, {
                  key: n,
                  label: `Radio ${n}`,
                  value: n
                }, null, 8, ["label", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/radio/DemoRadioBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`, js: `<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
` };
const colors = { ts: `<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`, js: `<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
` };
const density = { ts: `<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`, js: `<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
` };
const icon = { ts: `<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="ri-notification-off-line"
    true-icon="ri-notification-3-line"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`, js: `<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="ri-notification-off-line"
    true-icon="ri-notification-3-line"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
` };
const inline = { ts: `<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`, js: `<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
` };
const labelSlot = { ts: `<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`, js: `<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
` };
const validation = { ts: `<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`, js: `<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
` };
const _sfc_main = {
  __name: "radio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$8;
      const _component_DemoRadioBasic = _sfc_main$1;
      const _component_DemoRadioColors = _sfc_main$2;
      const _component_DemoRadioInline = _sfc_main$3;
      const _component_DemoRadioDensity = _sfc_main$4;
      const _component_DemoRadioLabelSlot = _sfc_main$5;
      const _component_DemoRadioIcon = _sfc_main$6;
      const _component_DemoRadioValidation = _sfc_main$7;
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-radio</code> component is a simple radio button.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-radio"),
                            createTextVNode(" component is a simple radio button.")
                          ]),
                          createVNode(_component_DemoRadioBasic)
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
                          createVNode("code", null, "v-radio"),
                          createTextVNode(" component is a simple radio button.")
                        ]),
                        createVNode(_component_DemoRadioBasic)
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
                        _push4(`<p${_scopeId3}>Radios can be colored by using any of the built-in colors and contextual names using the <code${_scopeId3}>color</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Radios can be colored by using any of the built-in colors and contextual names using the "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoRadioColors)
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
                          createTextVNode("Radios can be colored by using any of the built-in colors and contextual names using the "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoRadioColors)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>inline</code> prop to displays radio buttons in row.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioInline, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "inline"),
                            createTextVNode(" prop to displays radio buttons in row.")
                          ]),
                          createVNode(_component_DemoRadioInline)
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
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "inline"),
                          createTextVNode(" prop to displays radio buttons in row.")
                        ]),
                        createVNode(_component_DemoRadioInline)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>density</code> prop to adjusts the spacing within the component. Available options are: <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoRadioDensity)
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
                          createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoRadioDensity)
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
                        _push4(`<p${_scopeId3}>Radio Group labels can be defined in <code${_scopeId3}>label</code> slot - that will allow to use HTML content.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioLabelSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Radio Group labels can be defined in "),
                            createVNode("code", null, "label"),
                            createTextVNode(" slot - that will allow to use HTML content.")
                          ]),
                          createVNode(_component_DemoRadioLabelSlot)
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
                          createTextVNode("Radio Group labels can be defined in "),
                          createVNode("code", null, "label"),
                          createTextVNode(" slot - that will allow to use HTML content.")
                        ]),
                        createVNode(_component_DemoRadioLabelSlot)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>false-icon</code> and <code${_scopeId3}>true-icon</code> prop to set icon on inactive and active state.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "false-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "true-icon"),
                            createTextVNode(" prop to set icon on inactive and active state.")
                          ]),
                          createVNode(_component_DemoRadioIcon)
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
                          createTextVNode(" prop to set icon on inactive and active state.")
                        ]),
                        createVNode(_component_DemoRadioIcon)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>rules</code> prop to validate a radio. Accepts a mixed array of types <code${_scopeId3}>function</code>, <code${_scopeId3}>boolean</code> and <code${_scopeId3}>string</code>. Functions pass an input value as an argument and must return either <code${_scopeId3}>true</code> / <code${_scopeId3}>false</code> or a string containing an error message.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRadioValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "rules"),
                            createTextVNode(" prop to validate a radio. Accepts a mixed array of types "),
                            createVNode("code", null, "function"),
                            createTextVNode(", "),
                            createVNode("code", null, "boolean"),
                            createTextVNode(" and "),
                            createVNode("code", null, "string"),
                            createTextVNode(". Functions pass an input value as an argument and must return either "),
                            createVNode("code", null, "true"),
                            createTextVNode(" / "),
                            createVNode("code", null, "false"),
                            createTextVNode(" or a string containing an error message.")
                          ]),
                          createVNode(_component_DemoRadioValidation)
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
                          createTextVNode("Use "),
                          createVNode("code", null, "rules"),
                          createTextVNode(" prop to validate a radio. Accepts a mixed array of types "),
                          createVNode("code", null, "function"),
                          createTextVNode(", "),
                          createVNode("code", null, "boolean"),
                          createTextVNode(" and "),
                          createVNode("code", null, "string"),
                          createTextVNode(". Functions pass an input value as an argument and must return either "),
                          createVNode("code", null, "true"),
                          createTextVNode(" / "),
                          createVNode("code", null, "false"),
                          createTextVNode(" or a string containing an error message.")
                        ]),
                        createVNode(_component_DemoRadioValidation)
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
                        createVNode("code", null, "v-radio"),
                        createTextVNode(" component is a simple radio button.")
                      ]),
                      createVNode(_component_DemoRadioBasic)
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
                        createTextVNode("Radios can be colored by using any of the built-in colors and contextual names using the "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoRadioColors)
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
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "inline"),
                        createTextVNode(" prop to displays radio buttons in row.")
                      ]),
                      createVNode(_component_DemoRadioInline)
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
                        createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoRadioDensity)
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
                        createTextVNode("Radio Group labels can be defined in "),
                        createVNode("code", null, "label"),
                        createTextVNode(" slot - that will allow to use HTML content.")
                      ]),
                      createVNode(_component_DemoRadioLabelSlot)
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
                        createTextVNode(" prop to set icon on inactive and active state.")
                      ]),
                      createVNode(_component_DemoRadioIcon)
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
                        createTextVNode("Use "),
                        createVNode("code", null, "rules"),
                        createTextVNode(" prop to validate a radio. Accepts a mixed array of types "),
                        createVNode("code", null, "function"),
                        createTextVNode(", "),
                        createVNode("code", null, "boolean"),
                        createTextVNode(" and "),
                        createVNode("code", null, "string"),
                        createTextVNode(". Functions pass an input value as an argument and must return either "),
                        createVNode("code", null, "true"),
                        createTextVNode(" / "),
                        createVNode("code", null, "false"),
                        createTextVNode(" or a string containing an error message.")
                      ]),
                      createVNode(_component_DemoRadioValidation)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/radio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
