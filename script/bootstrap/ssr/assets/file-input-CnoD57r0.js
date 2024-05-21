import { useSSRContext, ref, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VFileInput } from "./VFileInput-BDqHjtpV.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { _ as _export_sfc } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { _ as _sfc_main$d } from "./AppCardCode-DkpMhnYF.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./VCounter-DhMMJgFl.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
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
/* empty css               */
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$c = {
  __name: "DemoFileInputLoading",
  __ssrInlineRender: true,
  setup(__props) {
    const file = ref();
    const loading2 = ref(true);
    watch(file, () => {
      loading2.value = !file.value[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VFileInput, mergeProps({
        modelValue: unref(file),
        "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
        loading: unref(loading2),
        color: "primary",
        label: "File input"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputLoading.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "DemoFileInputSelectionSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const files = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VFileInput, mergeProps({
        modelValue: unref(files),
        "onUpdate:modelValue": ($event) => isRef(files) ? files.value = $event : null,
        multiple: "",
        placeholder: "Upload your documents",
        label: "File input",
        "prepend-icon": "ri-attachment-line"
      }, _attrs), {
        selection: withCtx(({ fileNames }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(fileNames, (fileName) => {
              _push2(ssrRenderComponent(VChip, {
                label: "",
                size: "small",
                variant: "outlined",
                color: "primary",
                class: "me-2"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(fileName)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(fileName), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(fileNames, (fileName) => {
                return openBlock(), createBlock(VChip, {
                  key: fileName,
                  label: "",
                  size: "small",
                  variant: "outlined",
                  color: "primary",
                  class: "me-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(fileName), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputSelectionSlot.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DemoFileInputValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const rules = [(fileList) => !fileList || !fileList.length || fileList[0].size < 1e6 || "Avatar size should be less than 1 MB!"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VFileInput, mergeProps({
        rules,
        label: "Avatar",
        accept: "image/png, image/jpeg, image/bmp",
        placeholder: "Pick an avatar",
        "prepend-icon": "ri-camera-2-line"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputValidation.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    "show-size": "",
    label: "File input"
  }, _attrs), null, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputShowSize.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    label: "File input",
    "prepend-icon": "ri-camera-line"
  }, _attrs), null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputPrependIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    multiple: "",
    label: "File input"
  }, _attrs), null, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputMultiple.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    "show-size": "",
    counter: "",
    multiple: "",
    label: "File input"
  }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputCounter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    chips: "",
    label: "File input w/ chips"
  }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputChips.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    accept: "image/*",
    label: "File input"
  }, _attrs), null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputAccept.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          sm: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VFileInput, { label: "Outlined" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VFileInput, { label: "Outlined" })
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
              _push3(ssrRenderComponent(VFileInput, {
                label: "Filled",
                variant: "filled"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VFileInput, {
                  label: "Filled",
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
              _push3(ssrRenderComponent(VFileInput, {
                label: "Solo",
                variant: "solo"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VFileInput, {
                  label: "Solo",
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
              _push3(ssrRenderComponent(VFileInput, {
                label: "Plain",
                variant: "plain"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VFileInput, {
                  label: "Plain",
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
              _push3(ssrRenderComponent(VFileInput, {
                label: "Underlined",
                variant: "underlined"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VFileInput, {
                  label: "Underlined",
                  variant: "underlined"
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
              createVNode(VFileInput, { label: "Outlined" })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VFileInput, {
                label: "Filled",
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
              createVNode(VFileInput, {
                label: "Solo",
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
              createVNode(VFileInput, {
                label: "Plain",
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
              createVNode(VFileInput, {
                label: "Underlined",
                variant: "underlined"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputVariant.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({
    label: "File input",
    density: "compact"
  }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VFileInput, mergeProps({ label: "File input" }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/file-input/DemoFileInputBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const accept = { ts: `<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`, js: `<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
` };
const basic = { ts: `<template>
  <VFileInput label="File input" />
</template>
`, js: `<template>
  <VFileInput label="File input" />
</template>
` };
const chips = { ts: `<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`, js: `<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
` };
const counter = { ts: `<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`, js: `<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
` };
const density = { ts: `<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`, js: `<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
` };
const loading = { ts: `<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`, js: `<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
` };
const multiple = { ts: `<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`, js: `<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
` };
const prependIcon = { ts: `<template>
  <VFileInput
    label="File input"
    prepend-icon="ri-camera-line"
  />
</template>
`, js: `<template>
  <VFileInput
    label="File input"
    prepend-icon="ri-camera-line"
  />
</template>
` };
const selectionSlot = { ts: `<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="ri-attachment-line"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`, js: `<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="ri-attachment-line"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
` };
const showSize = { ts: `<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`, js: `<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
` };
const validation = { ts: `<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="ri-camera-2-line"
  />
</template>
`, js: `<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="ri-camera-2-line"
  />
</template>
` };
const variant = { ts: `<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
` };
const _sfc_main = {
  __name: "file-input",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$d;
      const _component_DemoFileInputBasic = __unplugin_components_1;
      const _component_DemoFileInputDensity = __unplugin_components_2;
      const _component_DemoFileInputVariant = __unplugin_components_3;
      const _component_DemoFileInputAccept = __unplugin_components_4;
      const _component_DemoFileInputChips = __unplugin_components_5;
      const _component_DemoFileInputCounter = __unplugin_components_6;
      const _component_DemoFileInputMultiple = __unplugin_components_7;
      const _component_DemoFileInputPrependIcon = __unplugin_components_8;
      const _component_DemoFileInputShowSize = __unplugin_components_9;
      const _component_DemoFileInputValidation = _sfc_main$a;
      const _component_DemoFileInputSelectionSlot = _sfc_main$b;
      const _component_DemoFileInputLoading = _sfc_main$c;
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-file-input</code> component is used to selecting files.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-file-input"),
                            createTextVNode(" component is used to selecting files.")
                          ]),
                          createVNode(_component_DemoFileInputBasic)
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
                          createVNode("code", null, "v-file-input"),
                          createTextVNode(" component is used to selecting files.")
                        ]),
                        createVNode(_component_DemoFileInputBasic)
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
                        _push4(`<p${_scopeId3}>You can reduces the file input height with <code${_scopeId3}>density</code> prop. Available options are: <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can reduces the file input height with "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop. Available options are: "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoFileInputDensity)
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
                          createTextVNode("You can reduces the file input height with "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop. Available options are: "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoFileInputDensity)
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
                        _push4(`<p${_scopeId3}>use <code${_scopeId3}>solo</code>, <code${_scopeId3}>filled</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>plain</code> and <code${_scopeId3}>underlined</code> option of <code${_scopeId3}>variant</code> prop to change the look of file input.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputVariant, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("use "),
                            createVNode("code", null, "solo"),
                            createTextVNode(", "),
                            createVNode("code", null, "filled"),
                            createTextVNode(", "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(", "),
                            createVNode("code", null, "plain"),
                            createTextVNode(" and "),
                            createVNode("code", null, "underlined"),
                            createTextVNode(" option of "),
                            createVNode("code", null, "variant"),
                            createTextVNode(" prop to change the look of file input.")
                          ]),
                          createVNode(_component_DemoFileInputVariant)
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
                          createTextVNode("use "),
                          createVNode("code", null, "solo"),
                          createTextVNode(", "),
                          createVNode("code", null, "filled"),
                          createTextVNode(", "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(", "),
                          createVNode("code", null, "plain"),
                          createTextVNode(" and "),
                          createVNode("code", null, "underlined"),
                          createTextVNode(" option of "),
                          createVNode("code", null, "variant"),
                          createTextVNode(" prop to change the look of file input.")
                        ]),
                        createVNode(_component_DemoFileInputVariant)
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
                    title: "Accept",
                    code: accept
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}><code${_scopeId3}>v-file-input</code> component can accept only specific media formats/file types if you want.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputAccept, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "v-file-input"),
                            createTextVNode(" component can accept only specific media formats/file types if you want.")
                          ]),
                          createVNode(_component_DemoFileInputAccept)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Accept",
                      code: accept
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createVNode("code", null, "v-file-input"),
                          createTextVNode(" component can accept only specific media formats/file types if you want.")
                        ]),
                        createVNode(_component_DemoFileInputAccept)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>chip</code> prop to display the selected file as a chip.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputChips, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "chip"),
                            createTextVNode(" prop to display the selected file as a chip.")
                          ]),
                          createVNode(_component_DemoFileInputChips)
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
                          createVNode("code", null, "chip"),
                          createTextVNode(" prop to display the selected file as a chip.")
                        ]),
                        createVNode(_component_DemoFileInputChips)
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
                    title: "Counter",
                    code: counter
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>When using the <code${_scopeId3}>show-size</code> property along with <code${_scopeId3}>counter</code>, the total number of files and size will be displayed under the input.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputCounter, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("When using the "),
                            createVNode("code", null, "show-size"),
                            createTextVNode(" property along with "),
                            createVNode("code", null, "counter"),
                            createTextVNode(", the total number of files and size will be displayed under the input.")
                          ]),
                          createVNode(_component_DemoFileInputCounter)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Counter",
                      code: counter
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("When using the "),
                          createVNode("code", null, "show-size"),
                          createTextVNode(" property along with "),
                          createVNode("code", null, "counter"),
                          createTextVNode(", the total number of files and size will be displayed under the input.")
                        ]),
                        createVNode(_component_DemoFileInputCounter)
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
                        _push4(`<p${_scopeId3}> The <code${_scopeId3}>v-file-input</code> can contain multiple files at the same time when using the <code${_scopeId3}>multiple</code> prop. </p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputMultiple, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" The "),
                            createVNode("code", null, "v-file-input"),
                            createTextVNode(" can contain multiple files at the same time when using the "),
                            createVNode("code", null, "multiple"),
                            createTextVNode(" prop. ")
                          ]),
                          createVNode(_component_DemoFileInputMultiple)
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
                          createTextVNode(" The "),
                          createVNode("code", null, "v-file-input"),
                          createTextVNode(" can contain multiple files at the same time when using the "),
                          createVNode("code", null, "multiple"),
                          createTextVNode(" prop. ")
                        ]),
                        createVNode(_component_DemoFileInputMultiple)
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
                    title: "Prepend icon",
                    code: prependIcon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> The <code${_scopeId3}>v-file-input</code> has a default <code${_scopeId3}>prepend-icon</code> that can be set on the component or adjusted globally. </p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputPrependIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" The "),
                            createVNode("code", null, "v-file-input"),
                            createTextVNode(" has a default "),
                            createVNode("code", null, "prepend-icon"),
                            createTextVNode(" that can be set on the component or adjusted globally. ")
                          ]),
                          createVNode(_component_DemoFileInputPrependIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Prepend icon",
                      code: prependIcon
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" The "),
                          createVNode("code", null, "v-file-input"),
                          createTextVNode(" has a default "),
                          createVNode("code", null, "prepend-icon"),
                          createTextVNode(" that can be set on the component or adjusted globally. ")
                        ]),
                        createVNode(_component_DemoFileInputPrependIcon)
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
                    title: "Show size",
                    code: showSize
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The displayed size of the selected file(s) can be configured with the <code${_scopeId3}>show-size</code> property.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputShowSize, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The displayed size of the selected file(s) can be configured with the "),
                            createVNode("code", null, "show-size"),
                            createTextVNode(" property.")
                          ]),
                          createVNode(_component_DemoFileInputShowSize)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Show size",
                      code: showSize
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The displayed size of the selected file(s) can be configured with the "),
                          createVNode("code", null, "show-size"),
                          createTextVNode(" property.")
                        ]),
                        createVNode(_component_DemoFileInputShowSize)
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
                        _push4(`<p${_scopeId3}>You can use the <code${_scopeId3}>rules</code> prop to create your own custom validation parameters.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use the "),
                            createVNode("code", null, "rules"),
                            createTextVNode(" prop to create your own custom validation parameters.")
                          ]),
                          createVNode(_component_DemoFileInputValidation)
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
                          createTextVNode("You can use the "),
                          createVNode("code", null, "rules"),
                          createTextVNode(" prop to create your own custom validation parameters.")
                        ]),
                        createVNode(_component_DemoFileInputValidation)
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
                        _push4(`<p${_scopeId3}>Using the <code${_scopeId3}>selection</code> slot, you can customize the appearance of your input selections.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputSelectionSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using the "),
                            createVNode("code", null, "selection"),
                            createTextVNode(" slot, you can customize the appearance of your input selections.")
                          ]),
                          createVNode(_component_DemoFileInputSelectionSlot)
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
                          createTextVNode("Using the "),
                          createVNode("code", null, "selection"),
                          createTextVNode(" slot, you can customize the appearance of your input selections.")
                        ]),
                        createVNode(_component_DemoFileInputSelectionSlot)
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
                    title: "Loading",
                    code: loading
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>loading</code> prop to displays linear progress bar.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFileInputLoading, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "loading"),
                            createTextVNode(" prop to displays linear progress bar.")
                          ]),
                          createVNode(_component_DemoFileInputLoading)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Loading",
                      code: loading
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "loading"),
                          createTextVNode(" prop to displays linear progress bar.")
                        ]),
                        createVNode(_component_DemoFileInputLoading)
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
                        createVNode("code", null, "v-file-input"),
                        createTextVNode(" component is used to selecting files.")
                      ]),
                      createVNode(_component_DemoFileInputBasic)
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
                        createTextVNode("You can reduces the file input height with "),
                        createVNode("code", null, "density"),
                        createTextVNode(" prop. Available options are: "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoFileInputDensity)
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
                        createTextVNode("use "),
                        createVNode("code", null, "solo"),
                        createTextVNode(", "),
                        createVNode("code", null, "filled"),
                        createTextVNode(", "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(", "),
                        createVNode("code", null, "plain"),
                        createTextVNode(" and "),
                        createVNode("code", null, "underlined"),
                        createTextVNode(" option of "),
                        createVNode("code", null, "variant"),
                        createTextVNode(" prop to change the look of file input.")
                      ]),
                      createVNode(_component_DemoFileInputVariant)
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
                    title: "Accept",
                    code: accept
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createVNode("code", null, "v-file-input"),
                        createTextVNode(" component can accept only specific media formats/file types if you want.")
                      ]),
                      createVNode(_component_DemoFileInputAccept)
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
                        createVNode("code", null, "chip"),
                        createTextVNode(" prop to display the selected file as a chip.")
                      ]),
                      createVNode(_component_DemoFileInputChips)
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
                    title: "Counter",
                    code: counter
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("When using the "),
                        createVNode("code", null, "show-size"),
                        createTextVNode(" property along with "),
                        createVNode("code", null, "counter"),
                        createTextVNode(", the total number of files and size will be displayed under the input.")
                      ]),
                      createVNode(_component_DemoFileInputCounter)
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
                        createTextVNode(" The "),
                        createVNode("code", null, "v-file-input"),
                        createTextVNode(" can contain multiple files at the same time when using the "),
                        createVNode("code", null, "multiple"),
                        createTextVNode(" prop. ")
                      ]),
                      createVNode(_component_DemoFileInputMultiple)
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
                    title: "Prepend icon",
                    code: prependIcon
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" The "),
                        createVNode("code", null, "v-file-input"),
                        createTextVNode(" has a default "),
                        createVNode("code", null, "prepend-icon"),
                        createTextVNode(" that can be set on the component or adjusted globally. ")
                      ]),
                      createVNode(_component_DemoFileInputPrependIcon)
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
                    title: "Show size",
                    code: showSize
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The displayed size of the selected file(s) can be configured with the "),
                        createVNode("code", null, "show-size"),
                        createTextVNode(" property.")
                      ]),
                      createVNode(_component_DemoFileInputShowSize)
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
                        createTextVNode("You can use the "),
                        createVNode("code", null, "rules"),
                        createTextVNode(" prop to create your own custom validation parameters.")
                      ]),
                      createVNode(_component_DemoFileInputValidation)
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
                        createTextVNode("Using the "),
                        createVNode("code", null, "selection"),
                        createTextVNode(" slot, you can customize the appearance of your input selections.")
                      ]),
                      createVNode(_component_DemoFileInputSelectionSlot)
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
                    title: "Loading",
                    code: loading
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "loading"),
                        createTextVNode(" prop to displays linear progress bar.")
                      ]),
                      createVNode(_component_DemoFileInputLoading)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/file-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
