import { useSSRContext, mergeProps, ref, onMounted, onBeforeUnmount, unref, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, b as VProgressCircular } from "../ssr.js";
import { _ as _sfc_main$5 } from "./AppCardCode-DkpMhnYF.js";
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
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VProgressCircular, {
    size: 30,
    width: "3",
    color: "primary",
    indeterminate: ""
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    size: 40,
    color: "primary",
    indeterminate: ""
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    size: 50,
    color: "primary",
    indeterminate: ""
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    size: 60,
    color: "primary",
    indeterminate: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/progress-circular/DemoProgressCircularSize.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "DemoProgressCircularRotate",
  __ssrInlineRender: true,
  setup(__props) {
    const interval = ref();
    const progressValue = ref(0);
    onMounted(() => {
      interval.value = setInterval(() => {
        if (progressValue.value === 100)
          return progressValue.value = 0;
        progressValue.value += 10;
      }, 1e3);
    });
    onBeforeUnmount(() => {
      clearInterval(interval.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VProgressCircular, {
        rotate: 360,
        size: 70,
        width: 6,
        "model-value": unref(progressValue),
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(progressValue))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(progressValue)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VProgressCircular, {
        rotate: 90,
        size: 70,
        width: 6,
        "model-value": unref(progressValue),
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(progressValue))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(progressValue)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VProgressCircular, {
        rotate: 170,
        size: 70,
        width: 6,
        "model-value": unref(progressValue),
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(progressValue))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(progressValue)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VProgressCircular, {
        rotate: -90,
        size: 70,
        width: 6,
        "model-value": unref(progressValue),
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(progressValue))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(progressValue)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/progress-circular/DemoProgressCircularRotate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VProgressCircular, {
    indeterminate: "",
    color: "primary"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    indeterminate: "",
    color: "secondary"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    indeterminate: "",
    color: "success"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    indeterminate: "",
    color: "info"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    indeterminate: "",
    color: "warning"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    indeterminate: "",
    color: "error"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/progress-circular/DemoProgressCircularIndeterminate.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VProgressCircular, {
    "model-value": "50",
    color: "primary"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    "model-value": "50",
    color: "secondary"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    "model-value": "50",
    color: "success"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    "model-value": "50",
    color: "info"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    "model-value": "50",
    color: "warning"
  }, null, _parent));
  _push(ssrRenderComponent(VProgressCircular, {
    "model-value": "50",
    color: "error"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/progress-circular/DemoProgressCircularColor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const color = { ts: `<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
` };
const indeterminate = { ts: `<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
` };
const rotate = { ts: `<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`, js: `<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
` };
const size = { ts: `<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
` };
const _sfc_main = {
  __name: "progress-circular",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$5;
      const _component_DemoProgressCircularColor = __unplugin_components_1;
      const _component_DemoProgressCircularIndeterminate = __unplugin_components_2;
      const _component_DemoProgressCircularRotate = _sfc_main$3;
      const _component_DemoProgressCircularSize = __unplugin_components_4;
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
                    title: "color",
                    code: color
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Alternate colors can be applied to <code${_scopeId3}>v-progress-circular</code> using the <code${_scopeId3}>color</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoProgressCircularColor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Alternate colors can be applied to "),
                            createVNode("code", null, "v-progress-circular"),
                            createTextVNode(" using the "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoProgressCircularColor)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "color",
                      code: color
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Alternate colors can be applied to "),
                          createVNode("code", null, "v-progress-circular"),
                          createTextVNode(" using the "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoProgressCircularColor)
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
                    title: "Indeterminate",
                    code: indeterminate
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using the <code${_scopeId3}>indeterminate</code> prop, a <code${_scopeId3}>v-progress-circular</code> continues to animate indefinitely.</p>`);
                        _push4(ssrRenderComponent(_component_DemoProgressCircularIndeterminate, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using the "),
                            createVNode("code", null, "indeterminate"),
                            createTextVNode(" prop, a "),
                            createVNode("code", null, "v-progress-circular"),
                            createTextVNode(" continues to animate indefinitely.")
                          ]),
                          createVNode(_component_DemoProgressCircularIndeterminate)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Indeterminate",
                      code: indeterminate
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Using the "),
                          createVNode("code", null, "indeterminate"),
                          createTextVNode(" prop, a "),
                          createVNode("code", null, "v-progress-circular"),
                          createTextVNode(" continues to animate indefinitely.")
                        ]),
                        createVNode(_component_DemoProgressCircularIndeterminate)
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
                    title: "Rotate",
                    code: rotate
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>rotate</code> prop gives you the ability to customize the <code${_scopeId3}>v-progress-circular</code>&#39;s origin.</p>`);
                        _push4(ssrRenderComponent(_component_DemoProgressCircularRotate, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "rotate"),
                            createTextVNode(" prop gives you the ability to customize the "),
                            createVNode("code", null, "v-progress-circular"),
                            createTextVNode("'s origin.")
                          ]),
                          createVNode(_component_DemoProgressCircularRotate)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Rotate",
                      code: rotate
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "rotate"),
                          createTextVNode(" prop gives you the ability to customize the "),
                          createVNode("code", null, "v-progress-circular"),
                          createTextVNode("'s origin.")
                        ]),
                        createVNode(_component_DemoProgressCircularRotate)
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>size</code> and <code${_scopeId3}>width</code> props allow you to easily alter the size and width of the <code${_scopeId3}>v-progress-circular</code> component.</p>`);
                        _push4(ssrRenderComponent(_component_DemoProgressCircularSize, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "size"),
                            createTextVNode(" and "),
                            createVNode("code", null, "width"),
                            createTextVNode(" props allow you to easily alter the size and width of the "),
                            createVNode("code", null, "v-progress-circular"),
                            createTextVNode(" component.")
                          ]),
                          createVNode(_component_DemoProgressCircularSize)
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
                          createTextVNode("The "),
                          createVNode("code", null, "size"),
                          createTextVNode(" and "),
                          createVNode("code", null, "width"),
                          createTextVNode(" props allow you to easily alter the size and width of the "),
                          createVNode("code", null, "v-progress-circular"),
                          createTextVNode(" component.")
                        ]),
                        createVNode(_component_DemoProgressCircularSize)
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
                    title: "color",
                    code: color
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Alternate colors can be applied to "),
                        createVNode("code", null, "v-progress-circular"),
                        createTextVNode(" using the "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoProgressCircularColor)
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
                    title: "Indeterminate",
                    code: indeterminate
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Using the "),
                        createVNode("code", null, "indeterminate"),
                        createTextVNode(" prop, a "),
                        createVNode("code", null, "v-progress-circular"),
                        createTextVNode(" continues to animate indefinitely.")
                      ]),
                      createVNode(_component_DemoProgressCircularIndeterminate)
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
                    title: "Rotate",
                    code: rotate
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "rotate"),
                        createTextVNode(" prop gives you the ability to customize the "),
                        createVNode("code", null, "v-progress-circular"),
                        createTextVNode("'s origin.")
                      ]),
                      createVNode(_component_DemoProgressCircularRotate)
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
                        createTextVNode("The "),
                        createVNode("code", null, "size"),
                        createTextVNode(" and "),
                        createVNode("code", null, "width"),
                        createTextVNode(" props allow you to easily alter the size and width of the "),
                        createVNode("code", null, "v-progress-circular"),
                        createTextVNode(" component.")
                      ]),
                      createVNode(_component_DemoProgressCircularSize)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/progress-circular.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
