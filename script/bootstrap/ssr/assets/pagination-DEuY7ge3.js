import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { V as VPagination } from "./VPagination-BH_qhohv.js";
import { _ as _export_sfc } from "../ssr.js";
import { _ as _sfc_main$b } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
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
import "./index-D5WAZiYx.js";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$a = {
  __name: "DemoPaginationSize",
  __ssrInlineRender: true,
  setup(__props) {
    const xSmallPagination = ref(1);
    const smallPagination = ref(2);
    const largePagination = ref(3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(VPagination, {
        modelValue: unref(xSmallPagination),
        "onUpdate:modelValue": ($event) => isRef(xSmallPagination) ? xSmallPagination.value = $event : null,
        length: 7,
        size: "small"
      }, null, _parent));
      _push(ssrRenderComponent(VPagination, {
        modelValue: unref(smallPagination),
        "onUpdate:modelValue": ($event) => isRef(smallPagination) ? smallPagination.value = $event : null,
        length: 7
      }, null, _parent));
      _push(ssrRenderComponent(VPagination, {
        modelValue: unref(largePagination),
        "onUpdate:modelValue": ($event) => isRef(largePagination) ? largePagination.value = $event : null,
        length: 7,
        size: "large"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationSize.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoPaginationColor",
  __ssrInlineRender: true,
  setup(__props) {
    const pageSuccess = ref(1);
    const pageError = ref(2);
    const pageInfo = ref(3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(VPagination, {
        modelValue: unref(pageSuccess),
        "onUpdate:modelValue": ($event) => isRef(pageSuccess) ? pageSuccess.value = $event : null,
        length: 7,
        color: "success"
      }, null, _parent));
      _push(ssrRenderComponent(VPagination, {
        modelValue: unref(pageError),
        "onUpdate:modelValue": ($event) => isRef(pageError) ? pageError.value = $event : null,
        length: 7,
        color: "error"
      }, null, _parent));
      _push(ssrRenderComponent(VPagination, {
        modelValue: unref(pageInfo),
        "onUpdate:modelValue": ($event) => isRef(pageInfo) ? pageInfo.value = $event : null,
        length: 7,
        color: "info"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationColor.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoPaginationTotalVisible",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        length: 15,
        "total-visible": _ctx.$vuetify.display.mdAndUp ? 4 : _ctx.$vuetify.display.sm ? 2 : 1
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationTotalVisible.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoPaginationLength",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        length: 15
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationLength.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoPaginationIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        length: 5,
        "prev-icon": "ri-arrow-left-s-fill",
        "next-icon": "ri-arrow-right-s-fill"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationIcons.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VPagination, mergeProps({
    length: 5,
    disabled: ""
  }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationDisabled.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "DemoPaginationOutlineCircle",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        variant: "outlined",
        length: 5,
        rounded: "circle"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationOutlineCircle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoPaginationCircle",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        length: 5,
        rounded: "circle"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationCircle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoPaginationOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        variant: "outlined",
        length: 5
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationOutline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoPaginationBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPagination, mergeProps({
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        length: 5
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/pagination/DemoPaginationBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
` };
const circle = { ts: `<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
` };
const color = { ts: `<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      color="info"
    />
  </div>
</template>
`, js: `<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      color="info"
    />
  </div>
</template>
` };
const disabled = { ts: `<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`, js: `<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
` };
const icons = { ts: `<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="ri-arrow-left-s-fill"
    next-icon="ri-arrow-right-s-fill"
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="ri-arrow-left-s-fill"
    next-icon="ri-arrow-right-s-fill"
  />
</template>
` };
const length = { ts: `<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
` };
const outline = { ts: `<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
` };
const outlineCircle = { ts: `<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
` };
const size = { ts: `<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`, js: `<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
` };
const totalVisible = { ts: `<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
  />
</template>
`, js: `<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
  />
</template>
` };
const _sfc_main = {
  __name: "pagination",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$b;
      const _component_DemoPaginationBasic = _sfc_main$1;
      const _component_DemoPaginationOutline = _sfc_main$2;
      const _component_DemoPaginationCircle = _sfc_main$3;
      const _component_DemoPaginationOutlineCircle = _sfc_main$4;
      const _component_DemoPaginationDisabled = __unplugin_components_5;
      const _component_DemoPaginationIcons = _sfc_main$6;
      const _component_DemoPaginationLength = _sfc_main$7;
      const _component_DemoPaginationTotalVisible = _sfc_main$8;
      const _component_DemoPaginationColor = _sfc_main$9;
      const _component_DemoPaginationSize = _sfc_main$a;
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-pagination</code> component is used to separate long sets of data.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-pagination"),
                            createTextVNode(" component is used to separate long sets of data.")
                          ]),
                          createVNode(_component_DemoPaginationBasic)
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
                          createVNode("code", null, "v-pagination"),
                          createTextVNode(" component is used to separate long sets of data.")
                        ]),
                        createVNode(_component_DemoPaginationBasic)
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
                    title: "Outline",
                    code: outline
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>variant=&#39;outline&#39;</code> prop is used to give outline to pagination item.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationOutline, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "variant='outline'"),
                            createTextVNode(" prop is used to give outline to pagination item.")
                          ]),
                          createVNode(_component_DemoPaginationOutline)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Outline",
                      code: outline
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "variant='outline'"),
                          createTextVNode(" prop is used to give outline to pagination item.")
                        ]),
                        createVNode(_component_DemoPaginationOutline)
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
                    title: "Circle",
                    code: circle
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>rounded</code> prop allows you to render pagination buttons with alternative styles.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationCircle, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(" prop allows you to render pagination buttons with alternative styles.")
                          ]),
                          createVNode(_component_DemoPaginationCircle)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Circle",
                      code: circle
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(" prop allows you to render pagination buttons with alternative styles.")
                        ]),
                        createVNode(_component_DemoPaginationCircle)
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
                    title: "Outline Circle",
                    code: outlineCircle
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>variant=&#39;outline&#39;</code> and <code${_scopeId3}>rounded</code> prop is used to give rounded outline to pagination item.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationOutlineCircle, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "variant='outline'"),
                            createTextVNode(" and "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(" prop is used to give rounded outline to pagination item.")
                          ]),
                          createVNode(_component_DemoPaginationOutlineCircle)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Outline Circle",
                      code: outlineCircle
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "variant='outline'"),
                          createTextVNode(" and "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(" prop is used to give rounded outline to pagination item.")
                        ]),
                        createVNode(_component_DemoPaginationOutlineCircle)
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
                        _push4(`<p${_scopeId3}>Pagination items can be manually deactivated using the <code${_scopeId3}>disabled</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationDisabled, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Pagination items can be manually deactivated using the "),
                            createVNode("code", null, "disabled"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoPaginationDisabled)
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
                          createTextVNode("Pagination items can be manually deactivated using the "),
                          createVNode("code", null, "disabled"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoPaginationDisabled)
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
                        _push4(`<p${_scopeId3}>Previous and next page icons can be customized with the <code${_scopeId3}>prev-icon</code> and <code${_scopeId3}>next-icon</code> props.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Previous and next page icons can be customized with the "),
                            createVNode("code", null, "prev-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "next-icon"),
                            createTextVNode(" props.")
                          ]),
                          createVNode(_component_DemoPaginationIcons)
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
                          createTextVNode("Previous and next page icons can be customized with the "),
                          createVNode("code", null, "prev-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "next-icon"),
                          createTextVNode(" props.")
                        ]),
                        createVNode(_component_DemoPaginationIcons)
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
                    title: "Length",
                    code: length
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using the <code${_scopeId3}>length</code> prop you can set the length of <code${_scopeId3}>v-pagination</code>, if the number of page buttons exceeds the parent container, it will truncate the list.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationLength, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using the "),
                            createVNode("code", null, "length"),
                            createTextVNode(" prop you can set the length of "),
                            createVNode("code", null, "v-pagination"),
                            createTextVNode(", if the number of page buttons exceeds the parent container, it will truncate the list.")
                          ]),
                          createVNode(_component_DemoPaginationLength)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Length",
                      code: length
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Using the "),
                          createVNode("code", null, "length"),
                          createTextVNode(" prop you can set the length of "),
                          createVNode("code", null, "v-pagination"),
                          createTextVNode(", if the number of page buttons exceeds the parent container, it will truncate the list.")
                        ]),
                        createVNode(_component_DemoPaginationLength)
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
                    title: "Total visible",
                    code: totalVisible
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can also manually set the maximum number of visible page buttons with the <code${_scopeId3}>total-visible</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationTotalVisible, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can also manually set the maximum number of visible page buttons with the "),
                            createVNode("code", null, "total-visible"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoPaginationTotalVisible)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Total visible",
                      code: totalVisible
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can also manually set the maximum number of visible page buttons with the "),
                          createVNode("code", null, "total-visible"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoPaginationTotalVisible)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>color</code> prop for create different color pagination.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationColor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop for create different color pagination.")
                          ]),
                          createVNode(_component_DemoPaginationColor)
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
                          createTextVNode(" prop for create different color pagination.")
                        ]),
                        createVNode(_component_DemoPaginationColor)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>size</code> prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: <strong${_scopeId3}>x-small</strong>, <strong${_scopeId3}>small</strong>, <strong${_scopeId3}>default</strong>, <strong${_scopeId3}>large</strong>, and <strong${_scopeId3}>x-large</strong>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoPaginationSize, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "size"),
                            createTextVNode(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),
                            createVNode("strong", null, "x-small"),
                            createTextVNode(", "),
                            createVNode("strong", null, "small"),
                            createTextVNode(", "),
                            createVNode("strong", null, "default"),
                            createTextVNode(", "),
                            createVNode("strong", null, "large"),
                            createTextVNode(", and "),
                            createVNode("strong", null, "x-large"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoPaginationSize)
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
                          createVNode("code", null, "size"),
                          createTextVNode(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),
                          createVNode("strong", null, "x-small"),
                          createTextVNode(", "),
                          createVNode("strong", null, "small"),
                          createTextVNode(", "),
                          createVNode("strong", null, "default"),
                          createTextVNode(", "),
                          createVNode("strong", null, "large"),
                          createTextVNode(", and "),
                          createVNode("strong", null, "x-large"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoPaginationSize)
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
                        createVNode("code", null, "v-pagination"),
                        createTextVNode(" component is used to separate long sets of data.")
                      ]),
                      createVNode(_component_DemoPaginationBasic)
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
                    title: "Outline",
                    code: outline
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "variant='outline'"),
                        createTextVNode(" prop is used to give outline to pagination item.")
                      ]),
                      createVNode(_component_DemoPaginationOutline)
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
                    title: "Circle",
                    code: circle
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "rounded"),
                        createTextVNode(" prop allows you to render pagination buttons with alternative styles.")
                      ]),
                      createVNode(_component_DemoPaginationCircle)
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
                    title: "Outline Circle",
                    code: outlineCircle
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "variant='outline'"),
                        createTextVNode(" and "),
                        createVNode("code", null, "rounded"),
                        createTextVNode(" prop is used to give rounded outline to pagination item.")
                      ]),
                      createVNode(_component_DemoPaginationOutlineCircle)
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
                        createTextVNode("Pagination items can be manually deactivated using the "),
                        createVNode("code", null, "disabled"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoPaginationDisabled)
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
                        createTextVNode("Previous and next page icons can be customized with the "),
                        createVNode("code", null, "prev-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "next-icon"),
                        createTextVNode(" props.")
                      ]),
                      createVNode(_component_DemoPaginationIcons)
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
                    title: "Length",
                    code: length
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Using the "),
                        createVNode("code", null, "length"),
                        createTextVNode(" prop you can set the length of "),
                        createVNode("code", null, "v-pagination"),
                        createTextVNode(", if the number of page buttons exceeds the parent container, it will truncate the list.")
                      ]),
                      createVNode(_component_DemoPaginationLength)
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
                    title: "Total visible",
                    code: totalVisible
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can also manually set the maximum number of visible page buttons with the "),
                        createVNode("code", null, "total-visible"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoPaginationTotalVisible)
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
                        createTextVNode(" prop for create different color pagination.")
                      ]),
                      createVNode(_component_DemoPaginationColor)
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
                        createVNode("code", null, "size"),
                        createTextVNode(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),
                        createVNode("strong", null, "x-small"),
                        createTextVNode(", "),
                        createVNode("strong", null, "small"),
                        createTextVNode(", "),
                        createVNode("strong", null, "default"),
                        createTextVNode(", "),
                        createVNode("strong", null, "large"),
                        createTextVNode(", and "),
                        createVNode("strong", null, "x-large"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoPaginationSize)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
