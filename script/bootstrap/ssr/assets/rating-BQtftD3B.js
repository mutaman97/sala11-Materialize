import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { V as VRating } from "./VRating-BxS5q7bh.js";
import { a as VIcon, _ as _export_sfc } from "../ssr.js";
import { V as VSlider } from "./VSlider-DJW38cpe.js";
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
import "./VSliderTrack-3ICpqYF9.js";
import "./index-D5WAZiYx.js";
import "./VInput-Bla8Vlgt.js";
import "./form-DJQTvsmB.js";
import "./VImg-D-rbsD1g.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$a = {
  __name: "DemoRatingItemSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(4.5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRating, mergeProps({
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null
      }, _attrs), {
        item: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, mergeProps(props, {
              size: 25,
              color: props.isFilled ? "success" : "secondary",
              class: "me-3",
              icon: props.isFilled ? "ri-emotion-happy-line" : "ri-emotion-unhappy-line"
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, mergeProps(props, {
                size: 25,
                color: props.isFilled ? "success" : "secondary",
                class: "me-3",
                icon: props.isFilled ? "ri-emotion-happy-line" : "ri-emotion-unhappy-line"
              }), null, 16, ["color", "icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingItemSlot.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoRatingIncremented",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(4.5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRating, mergeProps({
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
        "half-increments": "",
        hover: "",
        color: "secondary"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingIncremented.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRating, mergeProps({ hover: "" }, _attrs), null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingHover.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRating, mergeProps({
    readonly: "",
    "model-value": 4
  }, _attrs), null, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingReadonly.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRating, mergeProps({ clearable: "" }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingClearable.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {
  __name: "DemoRatingLength",
  __ssrInlineRender: true,
  setup(__props) {
    const length2 = ref(5);
    const rating = ref(2);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-caption"> Custom length </div>`);
      _push(ssrRenderComponent(VSlider, {
        modelValue: unref(length2),
        "onUpdate:modelValue": ($event) => isRef(length2) ? length2.value = $event : null,
        min: 1,
        max: 7
      }, null, _parent));
      _push(ssrRenderComponent(VRating, {
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
        length: unref(length2)
      }, null, _parent));
      _push(`<p class="font-weight-medium mb-0"> Model: ${ssrInterpolate(unref(rating))}</p><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingLength.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoRatingSize",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column" }, _attrs))}>`);
      _push(ssrRenderComponent(VRating, {
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
        size: "x-small"
      }, null, _parent));
      _push(ssrRenderComponent(VRating, {
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
        size: "small"
      }, null, _parent));
      _push(ssrRenderComponent(VRating, {
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(VRating, {
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
        size: "large"
      }, null, _parent));
      _push(ssrRenderComponent(VRating, {
        modelValue: unref(rating),
        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
        size: "x-large"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingSize.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoRatingColors",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(4);
    const ratingColors = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column" }, _attrs))}><!--[-->`);
      ssrRenderList(ratingColors, (color) => {
        _push(ssrRenderComponent(VRating, {
          key: color,
          modelValue: unref(rating),
          "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
          color
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingColors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRating, mergeProps({ density: "compact" }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRating, _attrs, null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/rating/DemoRatingBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const basic = { ts: `<template>
  <VRating />
</template>
`, js: `<template>
  <VRating />
</template>
` };
const clearable = { ts: `<template>
  <VRating clearable />
</template>
`, js: `<template>
  <VRating clearable />
</template>
` };
const colors = { ts: `<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`, js: `<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
` };
const density = { ts: `<template>
  <VRating density="compact" />
</template>
`, js: `<template>
  <VRating density="compact" />
</template>
` };
const hover = { ts: `<template>
  <VRating hover />
</template>
`, js: `<template>
  <VRating hover />
</template>
` };
const incremented = { ts: `<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
    color="secondary"
  />
</template>
`, js: `<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
    color="secondary"
  />
</template>
` };
const itemSlot = { ts: `<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'ri-emotion-happy-line' : 'ri-emotion-unhappy-line'"
      />
    </template>
  </VRating>
</template>
`, js: `<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'ri-emotion-happy-line' : 'ri-emotion-unhappy-line'"
      />
    </template>
  </VRating>
</template>
` };
const length = { ts: `<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`, js: `<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
` };
const readonly = { ts: `<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`, js: `<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
` };
const size = { ts: `<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`, js: `<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
` };
const _sfc_main = {
  __name: "rating",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$b;
      const _component_DemoRatingBasic = __unplugin_components_1;
      const _component_DemoRatingDensity = __unplugin_components_2;
      const _component_DemoRatingColors = _sfc_main$3;
      const _component_DemoRatingSize = _sfc_main$4;
      const _component_DemoRatingLength = _sfc_main$5;
      const _component_DemoRatingClearable = __unplugin_components_6;
      const _component_DemoRatingReadonly = __unplugin_components_7;
      const _component_DemoRatingHover = __unplugin_components_8;
      const _component_DemoRatingIncremented = _sfc_main$9;
      const _component_DemoRatingItemSlot = _sfc_main$a;
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-rating</code> component provides a simple interface for gathering user feedback.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-rating"),
                            createTextVNode(" component provides a simple interface for gathering user feedback.")
                          ]),
                          createVNode(_component_DemoRatingBasic)
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
                          createVNode("code", null, "v-rating"),
                          createTextVNode(" component provides a simple interface for gathering user feedback.")
                        ]),
                        createVNode(_component_DemoRatingBasic)
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
                        _push4(`<p${_scopeId3}>Control the space occupied by <code${_scopeId3}>v-rating</code> items using the <code${_scopeId3}>density</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Control the space occupied by "),
                            createVNode("code", null, "v-rating"),
                            createTextVNode(" items using the "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoRatingDensity)
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
                          createTextVNode("Control the space occupied by "),
                          createVNode("code", null, "v-rating"),
                          createTextVNode(" items using the "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoRatingDensity)
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-rating</code> component can be colored as you want, you can set both selected and not selected colors.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-rating"),
                            createTextVNode(" component can be colored as you want, you can set both selected and not selected colors.")
                          ]),
                          createVNode(_component_DemoRatingColors)
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
                          createTextVNode("The "),
                          createVNode("code", null, "v-rating"),
                          createTextVNode(" component can be colored as you want, you can set both selected and not selected colors.")
                        ]),
                        createVNode(_component_DemoRatingColors)
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
                        _push4(`<p${_scopeId3}>Utilize the same sizing classes available in <code${_scopeId3}>v-icon</code> or provide your own with the <code${_scopeId3}>size</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingSize, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Utilize the same sizing classes available in "),
                            createVNode("code", null, "v-icon"),
                            createTextVNode(" or provide your own with the "),
                            createVNode("code", null, "size"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoRatingSize)
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
                          createTextVNode("Utilize the same sizing classes available in "),
                          createVNode("code", null, "v-icon"),
                          createTextVNode(" or provide your own with the "),
                          createVNode("code", null, "size"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoRatingSize)
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
                        _push4(`<p${_scopeId3}>Change the number of items by modifying the the <code${_scopeId3}>length</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingLength, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Change the number of items by modifying the the "),
                            createVNode("code", null, "length"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoRatingLength)
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
                          createTextVNode("Change the number of items by modifying the the "),
                          createVNode("code", null, "length"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoRatingLength)
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
                    title: "Clearable",
                    code: clearable
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>clearable</code> prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingClearable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "clearable"),
                            createTextVNode(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")
                          ]),
                          createVNode(_component_DemoRatingClearable)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Clearable",
                      code: clearable
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "clearable"),
                          createTextVNode(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")
                        ]),
                        createVNode(_component_DemoRatingClearable)
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
                    title: "Readonly",
                    code: readonly
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>For ratings that are not meant to be changed you can use <code${_scopeId3}>readonly</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingReadonly, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("For ratings that are not meant to be changed you can use "),
                            createVNode("code", null, "readonly"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoRatingReadonly)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Readonly",
                      code: readonly
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("For ratings that are not meant to be changed you can use "),
                          createVNode("code", null, "readonly"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoRatingReadonly)
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
                    title: "Hover",
                    code: hover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Provides visual feedback when hovering over icons</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingHover, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Provides visual feedback when hovering over icons"),
                          createVNode(_component_DemoRatingHover)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Hover",
                      code: hover
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Provides visual feedback when hovering over icons"),
                        createVNode(_component_DemoRatingHover)
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
                    title: "Incremented",
                    code: incremented
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>half-increments</code> prop increases the granularity of the ratings, allow for .5 values as well.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingIncremented, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "half-increments"),
                            createTextVNode(" prop increases the granularity of the ratings, allow for .5 values as well.")
                          ]),
                          createVNode(_component_DemoRatingIncremented)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Incremented",
                      code: incremented
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "half-increments"),
                          createTextVNode(" prop increases the granularity of the ratings, allow for .5 values as well.")
                        ]),
                        createVNode(_component_DemoRatingIncremented)
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
                    title: "Item slot",
                    code: itemSlot
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.</p>`);
                        _push4(ssrRenderComponent(_component_DemoRatingItemSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating."),
                          createVNode(_component_DemoRatingItemSlot)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Item slot",
                      code: itemSlot
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating."),
                        createVNode(_component_DemoRatingItemSlot)
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
                        createVNode("code", null, "v-rating"),
                        createTextVNode(" component provides a simple interface for gathering user feedback.")
                      ]),
                      createVNode(_component_DemoRatingBasic)
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
                        createTextVNode("Control the space occupied by "),
                        createVNode("code", null, "v-rating"),
                        createTextVNode(" items using the "),
                        createVNode("code", null, "density"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoRatingDensity)
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
                        createTextVNode("The "),
                        createVNode("code", null, "v-rating"),
                        createTextVNode(" component can be colored as you want, you can set both selected and not selected colors.")
                      ]),
                      createVNode(_component_DemoRatingColors)
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
                        createTextVNode("Utilize the same sizing classes available in "),
                        createVNode("code", null, "v-icon"),
                        createTextVNode(" or provide your own with the "),
                        createVNode("code", null, "size"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoRatingSize)
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
                        createTextVNode("Change the number of items by modifying the the "),
                        createVNode("code", null, "length"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoRatingLength)
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
                    title: "Clearable",
                    code: clearable
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "clearable"),
                        createTextVNode(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")
                      ]),
                      createVNode(_component_DemoRatingClearable)
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
                    title: "Readonly",
                    code: readonly
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("For ratings that are not meant to be changed you can use "),
                        createVNode("code", null, "readonly"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoRatingReadonly)
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
                    title: "Hover",
                    code: hover
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Provides visual feedback when hovering over icons"),
                      createVNode(_component_DemoRatingHover)
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
                    title: "Incremented",
                    code: incremented
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "half-increments"),
                        createTextVNode(" prop increases the granularity of the ratings, allow for .5 values as well.")
                      ]),
                      createVNode(_component_DemoRatingIncremented)
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
                    title: "Item slot",
                    code: itemSlot
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating."),
                      createVNode(_component_DemoRatingItemSlot)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/rating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
