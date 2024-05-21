import { useSSRContext, mergeProps, withCtx, createTextVNode, ref, unref, isRef, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, V as VBtn } from "../ssr.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
import { V as VSlider } from "./VSlider-DJW38cpe.js";
import { _ as _sfc_main$e } from "./AppCardCode-DkpMhnYF.js";
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
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VSliderTrack-3ICpqYF9.js";
import "./index-D5WAZiYx.js";
import "./VInput-Bla8Vlgt.js";
import "./form-DJQTvsmB.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    prominent: "",
    type: "info"
  }, {
    text: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread. `);
      } else {
        return [
          createTextVNode(" Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    color: "success",
    icon: "ri-school-line",
    prominent: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon. `);
      } else {
        return [
          createTextVNode(" Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    icon: "ri-shield-keyhole-line",
    prominent: "",
    type: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu. `);
      } else {
        return [
          createTextVNode(" Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertProminent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_13 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$c = {
  __name: "DemoAlertElevation",
  __ssrInlineRender: true,
  setup(__props) {
    const alertShadow = ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VSlider, {
        modelValue: unref(alertShadow),
        "onUpdate:modelValue": ($event) => isRef(alertShadow) ? alertShadow.value = $event : null,
        color: "primary",
        max: 24,
        min: 0,
        step: 1,
        "thumb-label": "",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(VAlert, {
        color: "primary",
        elevation: unref(alertShadow)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m an alert with box shadow. `);
          } else {
            return [
              createTextVNode(" I'm an alert with box shadow. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertElevation.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    variant: "tonal",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus. `);
      } else {
        return [
          createTextVNode(" Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "tonal",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. `);
      } else {
        return [
          createTextVNode(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "tonal",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. `);
      } else {
        return [
          createTextVNode(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "tonal",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc. `);
      } else {
        return [
          createTextVNode(" Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "tonal",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit. `);
      } else {
        return [
          createTextVNode(" Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "tonal",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit. `);
      } else {
        return [
          createTextVNode(" Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertTonal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_11 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$a = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    variant: "outlined",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc. `);
      } else {
        return [
          createTextVNode(" Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "outlined",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis. `);
      } else {
        return [
          createTextVNode(" Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "outlined",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. `);
      } else {
        return [
          createTextVNode(" Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "outlined",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant. `);
      } else {
        return [
          createTextVNode(" Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "outlined",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut. `);
      } else {
        return [
          createTextVNode(" Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    variant: "outlined",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Jelly beans dragée jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears. `);
      } else {
        return [
          createTextVNode(" Jelly beans dragée jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertOutlined.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {
  __name: "DemoAlertVModelSupport",
  __ssrInlineRender: true,
  setup(__props) {
    const isAlertVisible = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="alert-demo-v-model-wrapper">`);
      _push(ssrRenderComponent(VAlert, {
        modelValue: unref(isAlertVisible),
        "onUpdate:modelValue": ($event) => isRef(isAlertVisible) ? isAlertVisible.value = $event : null,
        color: "warning",
        variant: "tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. `);
          } else {
            return [
              createTextVNode(" non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isAlertVisible.value = !unref(isAlertVisible)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isAlertVisible) ? "Hide Alert" : "Show Alert")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isAlertVisible) ? "Hide Alert" : "Show Alert"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertVModelSupport.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoAlertClosable",
  __ssrInlineRender: true,
  setup(__props) {
    const isAlertVisible = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VAlert, {
        modelValue: unref(isAlertVisible),
        "onUpdate:modelValue": ($event) => isRef(isAlertVisible) ? isAlertVisible.value = $event : null,
        closable: "",
        "close-label": "Close Alert",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake. `);
          } else {
            return [
              createTextVNode(" Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center">`);
      if (!unref(isAlertVisible)) {
        _push(ssrRenderComponent(VBtn, {
          onClick: ($event) => isAlertVisible.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reset `);
            } else {
              return [
                createTextVNode(" Reset ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertClosable.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, { type: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a alert with a <strong${_scopeId}>type</strong> of info `);
      } else {
        return [
          createTextVNode(" I'm a alert with a "),
          createVNode("strong", null, "type"),
          createTextVNode(" of info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { type: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a alert with a <strong${_scopeId}>type</strong> of success `);
      } else {
        return [
          createTextVNode(" I'm a alert with a "),
          createVNode("strong", null, "type"),
          createTextVNode(" of success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { type: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a alert with a <strong${_scopeId}>type</strong> of warning `);
      } else {
        return [
          createTextVNode(" I'm a alert with a "),
          createVNode("strong", null, "type"),
          createTextVNode(" of warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { type: "error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a alert with a <strong${_scopeId}>type</strong> of error `);
      } else {
        return [
          createTextVNode(" I'm a alert with a "),
          createVNode("strong", null, "type"),
          createTextVNode(" of error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertType.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    density: "compact",
    color: "primary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a compact alert with a <strong${_scopeId}>color</strong> of primary. `);
      } else {
        return [
          createTextVNode(" I'm a compact alert with a "),
          createVNode("strong", null, "color"),
          createTextVNode(" of primary. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    density: "comfortable",
    color: "secondary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a comfortable alert with the <strong${_scopeId}>variant</strong> prop and a <strong${_scopeId}>color</strong> of secondary. `);
      } else {
        return [
          createTextVNode(" I'm a comfortable alert with the "),
          createVNode("strong", null, "variant"),
          createTextVNode(" prop and a "),
          createVNode("strong", null, "color"),
          createTextVNode(" of secondary. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    density: "default",
    color: "success",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m a default alert with the <strong${_scopeId}>color</strong> of success. `);
      } else {
        return [
          createTextVNode(" I'm a default alert with the "),
          createVNode("strong", null, "color"),
          createTextVNode(" of success. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertDensity.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    "border-color": "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake. `);
      } else {
        return [
          createTextVNode(" Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    "border-color": "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cookie brownie tootsie roll pudding biscuit chupa chups. Dragée gingerbread carrot. `);
      } else {
        return [
          createTextVNode(" Cookie brownie tootsie roll pudding biscuit chupa chups. Dragée gingerbread carrot. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    "border-color": "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Gingerbread jelly beans macaroon croissant soufflé. Muffin halvah cake brownie cake. `);
      } else {
        return [
          createTextVNode(" Gingerbread jelly beans macaroon croissant soufflé. Muffin halvah cake brownie cake. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    "border-color": "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy. `);
      } else {
        return [
          createTextVNode(" Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    "border-color": "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake. `);
      } else {
        return [
          createTextVNode(" Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    "border-color": "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll. `);
      } else {
        return [
          createTextVNode(" Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertColoredBorder.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    color: "primary",
    border: "top",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Good Morning! Start your day with some alerts. `);
      } else {
        return [
          createTextVNode(" Good Morning! Start your day with some alerts. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "end",
    color: "secondary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Good Morning! Start your day with some alerts. `);
      } else {
        return [
          createTextVNode(" Good Morning! Start your day with some alerts. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "bottom",
    color: "success",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Good Morning! Start your day with some alerts. `);
      } else {
        return [
          createTextVNode(" Good Morning! Start your day with some alerts. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    border: "start",
    color: "info",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Good Morning! Start your day with some alerts. `);
      } else {
        return [
          createTextVNode(" Good Morning! Start your day with some alerts. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertBorder.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, {
    color: "primary",
    icon: "ri-rocket-line"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. `);
      } else {
        return [
          createTextVNode(" Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    color: "error",
    icon: "ri-whatsapp-line",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. `);
      } else {
        return [
          createTextVNode(" Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    color: "success",
    icon: "ri-npmjs-line",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. `);
      } else {
        return [
          createTextVNode(" Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertIcons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m an alert with primary background color. `);
      } else {
        return [
          createTextVNode(" I'm an alert with primary background color. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { color: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m an alert with secondary background color. `);
      } else {
        return [
          createTextVNode(" I'm an alert with secondary background color. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m an alert with success background color. `);
      } else {
        return [
          createTextVNode(" I'm an alert with success background color. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m an alert with info background color. `);
      } else {
        return [
          createTextVNode(" I'm an alert with info background color. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { color: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m an alert with warning background color. `);
      } else {
        return [
          createTextVNode(" I'm an alert with warning background color. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, { color: "error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` I&#39;m an alert with error background color. `);
      } else {
        return [
          createTextVNode(" I'm an alert with error background color. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertColors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-y" }, _attrs))}>`);
  _push(ssrRenderComponent(VAlert, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Good Morning! Start your day with some alerts. `);
      } else {
        return [
          createTextVNode(" Good Morning! Start your day with some alerts. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAlert, {
    title: "Alert Title",
    type: "error",
    closable: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Alert content `);
      } else {
        return [
          createTextVNode(" Alert content ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/alert/DemoAlertBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const basic = { ts: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      Good Morning! Start your day with some alerts.
    </VAlert>
    <VAlert
      title="Alert Title"
      type="error"
      closable
    >
      Alert content
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      Good Morning! Start your day with some alerts.
    </VAlert>
    <VAlert
      title="Alert Title"
      type="error"
      closable
    >
      Alert content
    </VAlert>
  </div>
</template>
` };
const border = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
` };
const closable = { ts: `<script lang="ts" setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`, js: `<script setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
` };
const coloredBorder = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      Cookie brownie tootsie roll pudding biscuit chupa chups. Dragée gingerbread carrot.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      Gingerbread jelly beans macaroon croissant soufflé. Muffin halvah cake brownie cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      Cookie brownie tootsie roll pudding biscuit chupa chups. Dragée gingerbread carrot.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      Gingerbread jelly beans macaroon croissant soufflé. Muffin halvah cake brownie cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll.
    </VAlert>
  </div>
</template>
` };
const colors = { ts: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
` };
const density = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
` };
const elevation = { ts: `<script lang="ts" setup>
const alertShadow = ref(5)
<\/script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
    class="mb-4"
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
</template>
`, js: `<script setup>
const alertShadow = ref(5)
<\/script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
    class="mb-4"
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
</template>
` };
const icons = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="ri-rocket-line"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </VAlert>

    <VAlert
      color="error"
      icon="ri-whatsapp-line"
      variant="tonal"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </VAlert>

    <VAlert
      color="success"
      icon="ri-npmjs-line"
      variant="outlined"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="ri-rocket-line"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </VAlert>

    <VAlert
      color="error"
      icon="ri-whatsapp-line"
      variant="tonal"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </VAlert>

    <VAlert
      color="success"
      icon="ri-npmjs-line"
      variant="outlined"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </VAlert>
  </div>
</template>
` };
const outlined = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      Jelly beans dragée jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      Jelly beans dragée jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </VAlert>
  </div>
</template>
` };
const prominent = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="ri-school-line"
      prominent
    >
      Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon.
    </VAlert>

    <VAlert
      icon="ri-shield-keyhole-line"
      prominent
      type="warning"
    >
      Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="ri-school-line"
      prominent
    >
      Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon.
    </VAlert>

    <VAlert
      icon="ri-shield-keyhole-line"
      prominent
      type="warning"
    >
      Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu.
    </VAlert>
  </div>
</template>
` };
const tonal = { ts: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
` };
const type = { ts: `<template>
  <div class="demo-space-y">
    <VAlert type="info">
      I'm a alert with a <strong>type</strong> of info
    </VAlert>

    <VAlert type="success">
      I'm a alert with a <strong>type</strong> of success
    </VAlert>

    <VAlert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </VAlert>

    <VAlert type="error">
      I'm a alert with a <strong>type</strong> of error
    </VAlert>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-y">
    <VAlert type="info">
      I'm a alert with a <strong>type</strong> of info
    </VAlert>

    <VAlert type="success">
      I'm a alert with a <strong>type</strong> of success
    </VAlert>

    <VAlert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </VAlert>

    <VAlert type="error">
      I'm a alert with a <strong>type</strong> of error
    </VAlert>
  </div>
</template>
` };
const vModelSupport = { ts: `<script lang="ts" setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
`, js: `<script setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
` };
const _sfc_main = {
  __name: "alert",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$e;
      const _component_DemoAlertBasic = __unplugin_components_1;
      const _component_DemoAlertColors = __unplugin_components_2;
      const _component_DemoAlertIcons = __unplugin_components_3;
      const _component_DemoAlertBorder = __unplugin_components_4;
      const _component_DemoAlertColoredBorder = __unplugin_components_5;
      const _component_DemoAlertDensity = __unplugin_components_6;
      const _component_DemoAlertType = __unplugin_components_7;
      const _component_DemoAlertClosable = _sfc_main$8;
      const _component_DemoAlertVModelSupport = _sfc_main$9;
      const _component_DemoAlertOutlined = __unplugin_components_10;
      const _component_DemoAlertTonal = __unplugin_components_11;
      const _component_DemoAlertElevation = _sfc_main$c;
      const _component_DemoAlertProminent = __unplugin_components_13;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoAlertBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoAlertBasic)
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
                        createVNode(_component_DemoAlertBasic)
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
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>color</code> prop is used to change the background color of the alert.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop is used to change the background color of the alert.")
                          ]),
                          createVNode(_component_DemoAlertColors)
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
                          createVNode("code", null, "color"),
                          createTextVNode(" prop is used to change the background color of the alert.")
                        ]),
                        createVNode(_component_DemoAlertColors)
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
                    title: "Icons",
                    code: icons
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>icon</code> prop allows you to add an icon to the beginning of the alert component. If a <code${_scopeId3}>type</code> is provided, this will override the default type icon. Additionally, setting the <code${_scopeId3}>icon</code> prop to false will remove the icon altogether.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "icon"),
                            createTextVNode(" prop allows you to add an icon to the beginning of the alert component. If a "),
                            createVNode("code", null, "type"),
                            createTextVNode(" is provided, this will override the default type icon. Additionally, setting the "),
                            createVNode("code", null, "icon"),
                            createTextVNode(" prop to false will remove the icon altogether.")
                          ]),
                          createVNode(_component_DemoAlertIcons)
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
                          createTextVNode("The "),
                          createVNode("code", null, "icon"),
                          createTextVNode(" prop allows you to add an icon to the beginning of the alert component. If a "),
                          createVNode("code", null, "type"),
                          createTextVNode(" is provided, this will override the default type icon. Additionally, setting the "),
                          createVNode("code", null, "icon"),
                          createTextVNode(" prop to false will remove the icon altogether.")
                        ]),
                        createVNode(_component_DemoAlertIcons)
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
                    title: "Border",
                    code: border
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>border</code> prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like <code${_scopeId3}>color</code>, <code${_scopeId3}>type</code> and <code${_scopeId3}>icon</code> to provide unique accents to the alert.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertBorder, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "border"),
                            createTextVNode(" prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like "),
                            createVNode("code", null, "color"),
                            createTextVNode(", "),
                            createVNode("code", null, "type"),
                            createTextVNode(" and "),
                            createVNode("code", null, "icon"),
                            createTextVNode(" to provide unique accents to the alert.")
                          ]),
                          createVNode(_component_DemoAlertBorder)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Border",
                      code: border
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "border"),
                          createTextVNode(" prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like "),
                          createVNode("code", null, "color"),
                          createTextVNode(", "),
                          createVNode("code", null, "type"),
                          createTextVNode(" and "),
                          createVNode("code", null, "icon"),
                          createTextVNode(" to provide unique accents to the alert.")
                        ]),
                        createVNode(_component_DemoAlertBorder)
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
                    title: "Colored Border",
                    code: coloredBorder
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>colored-border</code> prop removes the alert background in order to accent the <code${_scopeId3}>border</code> prop. If a type is set, it will use the type&#39;s default color. If no <code${_scopeId3}>color</code> or <code${_scopeId3}>type</code> is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertColoredBorder, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "colored-border"),
                            createTextVNode(" prop removes the alert background in order to accent the "),
                            createVNode("code", null, "border"),
                            createTextVNode(" prop. If a type is set, it will use the type's default color. If no "),
                            createVNode("code", null, "color"),
                            createTextVNode(" or "),
                            createVNode("code", null, "type"),
                            createTextVNode(" is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).")
                          ]),
                          createVNode(_component_DemoAlertColoredBorder)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Colored Border",
                      code: coloredBorder
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "colored-border"),
                          createTextVNode(" prop removes the alert background in order to accent the "),
                          createVNode("code", null, "border"),
                          createTextVNode(" prop. If a type is set, it will use the type's default color. If no "),
                          createVNode("code", null, "color"),
                          createTextVNode(" or "),
                          createVNode("code", null, "type"),
                          createTextVNode(" is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).")
                        ]),
                        createVNode(_component_DemoAlertColoredBorder)
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
                    title: "Density",
                    code: density
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>density</code> prop decreases the height of the alert based upon 1 of 3 levels of density. <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop decreases the height of the alert based upon 1 of 3 levels of density. "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoAlertDensity)
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
                          createTextVNode("The "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop decreases the height of the alert based upon 1 of 3 levels of density. "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoAlertDensity)
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
                    title: "Type",
                    code: type
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>type</code> prop provides 4 default v-alert styles: <code${_scopeId3}>success</code>, <code${_scopeId3}>info</code>, <code${_scopeId3}>warning</code>, and <code${_scopeId3}>error</code>. Each of these styles provide a default icon and color.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertType, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "type"),
                            createTextVNode(" prop provides 4 default v-alert styles: "),
                            createVNode("code", null, "success"),
                            createTextVNode(", "),
                            createVNode("code", null, "info"),
                            createTextVNode(", "),
                            createVNode("code", null, "warning"),
                            createTextVNode(", and "),
                            createVNode("code", null, "error"),
                            createTextVNode(". Each of these styles provide a default icon and color.")
                          ]),
                          createVNode(_component_DemoAlertType)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Type",
                      code: type
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "type"),
                          createTextVNode(" prop provides 4 default v-alert styles: "),
                          createVNode("code", null, "success"),
                          createTextVNode(", "),
                          createVNode("code", null, "info"),
                          createTextVNode(", "),
                          createVNode("code", null, "warning"),
                          createTextVNode(", and "),
                          createVNode("code", null, "error"),
                          createTextVNode(". Each of these styles provide a default icon and color.")
                        ]),
                        createVNode(_component_DemoAlertType)
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
                    title: "Closable",
                    code: closable
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>closable</code> prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertClosable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "closable"),
                            createTextVNode(" prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert.")
                          ]),
                          createVNode(_component_DemoAlertClosable)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Closable",
                      code: closable
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "closable"),
                          createTextVNode(" prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert.")
                        ]),
                        createVNode(_component_DemoAlertClosable)
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
                    title: "v-model support",
                    code: vModelSupport
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Clicking this button will set its value to <code${_scopeId3}>false</code> and effectively hide the alert. You can restore the alert by binding <code${_scopeId3}>v-model</code> and setting it to true.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertVModelSupport, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Clicking this button will set its value to "),
                            createVNode("code", null, "false"),
                            createTextVNode(" and effectively hide the alert. You can restore the alert by binding "),
                            createVNode("code", null, "v-model"),
                            createTextVNode(" and setting it to true.")
                          ]),
                          createVNode(_component_DemoAlertVModelSupport)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "v-model support",
                      code: vModelSupport
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Clicking this button will set its value to "),
                          createVNode("code", null, "false"),
                          createTextVNode(" and effectively hide the alert. You can restore the alert by binding "),
                          createVNode("code", null, "v-model"),
                          createTextVNode(" and setting it to true.")
                        ]),
                        createVNode(_component_DemoAlertVModelSupport)
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
                    title: "Outlined",
                    code: outlined
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>variant=&quot;outlined&quot;</code> prop inverts the style of an alert, inheriting the currently applied <code${_scopeId3}>color</code>, applying it to the text and border, and making its background transparent.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertOutlined, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, 'variant="outlined"'),
                            createTextVNode(" prop inverts the style of an alert, inheriting the currently applied "),
                            createVNode("code", null, "color"),
                            createTextVNode(", applying it to the text and border, and making its background transparent.")
                          ]),
                          createVNode(_component_DemoAlertOutlined)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Outlined",
                      code: outlined
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, 'variant="outlined"'),
                          createTextVNode(" prop inverts the style of an alert, inheriting the currently applied "),
                          createVNode("code", null, "color"),
                          createTextVNode(", applying it to the text and border, and making its background transparent.")
                        ]),
                        createVNode(_component_DemoAlertOutlined)
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
                    title: "Tonal",
                    code: tonal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>variant</code> prop provides an easy way to change the overall style of your alerts. The <code${_scopeId3}>variant=&quot;tonal&quot;</code> prop is a simple alert variant that applies a reduced opacity background of the provided color.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertTonal, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "variant"),
                            createTextVNode(" prop provides an easy way to change the overall style of your alerts. The "),
                            createVNode("code", null, 'variant="tonal"'),
                            createTextVNode(" prop is a simple alert variant that applies a reduced opacity background of the provided color.")
                          ]),
                          createVNode(_component_DemoAlertTonal)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Tonal",
                      code: tonal
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "variant"),
                          createTextVNode(" prop provides an easy way to change the overall style of your alerts. The "),
                          createVNode("code", null, 'variant="tonal"'),
                          createTextVNode(" prop is a simple alert variant that applies a reduced opacity background of the provided color.")
                        ]),
                        createVNode(_component_DemoAlertTonal)
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
                    title: "Elevation",
                    code: elevation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>elevation</code> prop to set a box-shadow to alert.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertElevation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "elevation"),
                            createTextVNode(" prop to set a box-shadow to alert.")
                          ]),
                          createVNode(_component_DemoAlertElevation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Elevation",
                      code: elevation
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "elevation"),
                          createTextVNode(" prop to set a box-shadow to alert.")
                        ]),
                        createVNode(_component_DemoAlertElevation)
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
                    title: "Prominent",
                    code: prominent
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>prominent</code> prop provides a more pronounced alert by increasing the size of the icon.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAlertProminent, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "prominent"),
                            createTextVNode(" prop provides a more pronounced alert by increasing the size of the icon.")
                          ]),
                          createVNode(_component_DemoAlertProminent)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Prominent",
                      code: prominent
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "prominent"),
                          createTextVNode(" prop provides a more pronounced alert by increasing the size of the icon.")
                        ]),
                        createVNode(_component_DemoAlertProminent)
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoAlertBasic)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop is used to change the background color of the alert.")
                      ]),
                      createVNode(_component_DemoAlertColors)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Icons",
                    code: icons
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "icon"),
                        createTextVNode(" prop allows you to add an icon to the beginning of the alert component. If a "),
                        createVNode("code", null, "type"),
                        createTextVNode(" is provided, this will override the default type icon. Additionally, setting the "),
                        createVNode("code", null, "icon"),
                        createTextVNode(" prop to false will remove the icon altogether.")
                      ]),
                      createVNode(_component_DemoAlertIcons)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Border",
                    code: border
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "border"),
                        createTextVNode(" prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like "),
                        createVNode("code", null, "color"),
                        createTextVNode(", "),
                        createVNode("code", null, "type"),
                        createTextVNode(" and "),
                        createVNode("code", null, "icon"),
                        createTextVNode(" to provide unique accents to the alert.")
                      ]),
                      createVNode(_component_DemoAlertBorder)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Colored Border",
                    code: coloredBorder
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "colored-border"),
                        createTextVNode(" prop removes the alert background in order to accent the "),
                        createVNode("code", null, "border"),
                        createTextVNode(" prop. If a type is set, it will use the type's default color. If no "),
                        createVNode("code", null, "color"),
                        createTextVNode(" or "),
                        createVNode("code", null, "type"),
                        createTextVNode(" is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).")
                      ]),
                      createVNode(_component_DemoAlertColoredBorder)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Density",
                    code: density
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "density"),
                        createTextVNode(" prop decreases the height of the alert based upon 1 of 3 levels of density. "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoAlertDensity)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Type",
                    code: type
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "type"),
                        createTextVNode(" prop provides 4 default v-alert styles: "),
                        createVNode("code", null, "success"),
                        createTextVNode(", "),
                        createVNode("code", null, "info"),
                        createTextVNode(", "),
                        createVNode("code", null, "warning"),
                        createTextVNode(", and "),
                        createVNode("code", null, "error"),
                        createTextVNode(". Each of these styles provide a default icon and color.")
                      ]),
                      createVNode(_component_DemoAlertType)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Closable",
                    code: closable
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "closable"),
                        createTextVNode(" prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert.")
                      ]),
                      createVNode(_component_DemoAlertClosable)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "v-model support",
                    code: vModelSupport
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Clicking this button will set its value to "),
                        createVNode("code", null, "false"),
                        createTextVNode(" and effectively hide the alert. You can restore the alert by binding "),
                        createVNode("code", null, "v-model"),
                        createTextVNode(" and setting it to true.")
                      ]),
                      createVNode(_component_DemoAlertVModelSupport)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Outlined",
                    code: outlined
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, 'variant="outlined"'),
                        createTextVNode(" prop inverts the style of an alert, inheriting the currently applied "),
                        createVNode("code", null, "color"),
                        createTextVNode(", applying it to the text and border, and making its background transparent.")
                      ]),
                      createVNode(_component_DemoAlertOutlined)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Tonal",
                    code: tonal
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "variant"),
                        createTextVNode(" prop provides an easy way to change the overall style of your alerts. The "),
                        createVNode("code", null, 'variant="tonal"'),
                        createTextVNode(" prop is a simple alert variant that applies a reduced opacity background of the provided color.")
                      ]),
                      createVNode(_component_DemoAlertTonal)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Elevation",
                    code: elevation
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "elevation"),
                        createTextVNode(" prop to set a box-shadow to alert.")
                      ]),
                      createVNode(_component_DemoAlertElevation)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Prominent",
                    code: prominent
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "prominent"),
                        createTextVNode(" prop provides a more pronounced alert by increasing the size of the icon.")
                      ]),
                      createVNode(_component_DemoAlertProminent)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
