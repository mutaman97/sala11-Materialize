import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { _ as _export_sfc } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { _ as _sfc_main$c } from "./AppCardCode-DkpMhnYF.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
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
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$b = {
  __name: "DemoTextareaValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const textareaValue = ref("Hello!");
    const rules = [(v) => v.length <= 25 || "Max 25 characters"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextarea, mergeProps({
        modelValue: unref(textareaValue),
        "onUpdate:modelValue": ($event) => isRef(textareaValue) ? textareaValue.value = $event : null,
        label: "Validation",
        rules,
        rows: "2",
        placeholder: "Placeholder Text"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaValidation.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DemoTextareaNoResize",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextarea, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        label: "Text",
        "no-resize": "",
        rows: "2",
        placeholder: "Placeholder Text"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaNoResize.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          sm: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                label: "One row",
                "auto-grow": "",
                rows: "1",
                "row-height": "15",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "One row",
                  "auto-grow": "",
                  rows: "1",
                  "row-height": "15",
                  placeholder: "Placeholder Text"
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
              _push3(ssrRenderComponent(VTextarea, {
                "auto-grow": "",
                label: "Two rows",
                rows: "2",
                placeholder: "Placeholder Text",
                "row-height": "20"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  "auto-grow": "",
                  label: "Two rows",
                  rows: "2",
                  placeholder: "Placeholder Text",
                  "row-height": "20"
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
              _push3(ssrRenderComponent(VTextarea, {
                label: "Three rows",
                "auto-grow": "",
                rows: "3",
                placeholder: "Placeholder Text",
                "row-height": "25"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Three rows",
                  "auto-grow": "",
                  rows: "3",
                  placeholder: "Placeholder Text",
                  "row-height": "25"
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
              _push3(ssrRenderComponent(VTextarea, {
                "auto-grow": "",
                label: "Four rows",
                placeholder: "Placeholder Text",
                rows: "4",
                "row-height": "30"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  "auto-grow": "",
                  label: "Four rows",
                  placeholder: "Placeholder Text",
                  rows: "4",
                  "row-height": "30"
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
              createVNode(VTextarea, {
                label: "One row",
                "auto-grow": "",
                rows: "1",
                "row-height": "15",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                "auto-grow": "",
                label: "Two rows",
                rows: "2",
                placeholder: "Placeholder Text",
                "row-height": "20"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                label: "Three rows",
                "auto-grow": "",
                rows: "3",
                placeholder: "Placeholder Text",
                "row-height": "25"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                "auto-grow": "",
                label: "Four rows",
                placeholder: "Placeholder Text",
                rows: "4",
                "row-height": "30"
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaRows.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                label: "Prepend-icon",
                rows: "1",
                placeholder: "Placeholder Text",
                "prepend-icon": "ri-chat-2-line"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Prepend-icon",
                  rows: "1",
                  placeholder: "Placeholder Text",
                  "prepend-icon": "ri-chat-2-line"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                "append-icon": "ri-chat-2-line",
                placeholder: "Placeholder Text",
                label: "Append-icon",
                rows: "1"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  "append-icon": "ri-chat-2-line",
                  placeholder: "Placeholder Text",
                  label: "Append-icon",
                  rows: "1"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                "prepend-inner-icon": "ri-chat-2-line",
                label: "Prepend-inner-icon",
                placeholder: "Placeholder Text",
                rows: "1"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  "prepend-inner-icon": "ri-chat-2-line",
                  label: "Prepend-inner-icon",
                  placeholder: "Placeholder Text",
                  rows: "1"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                "append-inner-icon": "ri-chat-2-line",
                label: "Append-inner-icon",
                placeholder: "Placeholder Text",
                rows: "1"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  "append-inner-icon": "ri-chat-2-line",
                  label: "Append-inner-icon",
                  placeholder: "Placeholder Text",
                  rows: "1"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                label: "Prepend-icon",
                rows: "1",
                placeholder: "Placeholder Text",
                "prepend-icon": "ri-chat-2-line"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                "append-icon": "ri-chat-2-line",
                placeholder: "Placeholder Text",
                label: "Append-icon",
                rows: "1"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                "prepend-inner-icon": "ri-chat-2-line",
                label: "Prepend-inner-icon",
                placeholder: "Placeholder Text",
                rows: "1"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                "append-inner-icon": "ri-chat-2-line",
                label: "Append-inner-icon",
                placeholder: "Placeholder Text",
                rows: "1"
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaIcons.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {
  __name: "DemoTextareaCounter",
  __ssrInlineRender: true,
  setup(__props) {
    const textareaValue = ref("Hello!");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextarea, mergeProps({
        modelValue: unref(textareaValue),
        "onUpdate:modelValue": ($event) => isRef(textareaValue) ? textareaValue.value = $event : null,
        counter: "",
        label: "Text",
        placeholder: "Placeholder Text"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaCounter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoTextareaClearable",
  __ssrInlineRender: true,
  setup(__props) {
    const textareaValue = ref("This is clearable text.");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextarea, mergeProps({
        modelValue: unref(textareaValue),
        "onUpdate:modelValue": ($event) => isRef(textareaValue) ? textareaValue.value = $event : null,
        clearable: "",
        "clear-icon": "ri-close-line",
        label: "Text",
        placeholder: "Placeholder Text"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaClearable.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextarea, mergeProps({
    autocomplete: "email",
    label: "Email",
    placeholder: "johndoe@email.com"
  }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaBrowserAutocomplete.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                disabled: "",
                label: "Disabled",
                hint: "Hint text",
                placeholder: "Placeholder Text",
                rows: "2"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  disabled: "",
                  label: "Disabled",
                  hint: "Hint text",
                  placeholder: "Placeholder Text",
                  rows: "2"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                readonly: "",
                rows: "2",
                label: "Readonly",
                placeholder: "Placeholder Text",
                hint: "Hint text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  readonly: "",
                  rows: "2",
                  label: "Readonly",
                  placeholder: "Placeholder Text",
                  hint: "Hint text"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                disabled: "",
                label: "Disabled",
                hint: "Hint text",
                placeholder: "Placeholder Text",
                rows: "2"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                readonly: "",
                rows: "2",
                label: "Readonly",
                placeholder: "Placeholder Text",
                hint: "Hint text"
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaStates.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          sm: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextarea, {
                label: "Default",
                rows: "2",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Default",
                  rows: "2",
                  placeholder: "Placeholder Text"
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
              _push3(ssrRenderComponent(VTextarea, {
                label: "Solo",
                placeholder: "Placeholder Text",
                rows: "2",
                variant: "solo"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Solo",
                  placeholder: "Placeholder Text",
                  rows: "2",
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
              _push3(ssrRenderComponent(VTextarea, {
                label: "Filled",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "filled"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Filled",
                  rows: "2",
                  placeholder: "Placeholder Text",
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
              _push3(ssrRenderComponent(VTextarea, {
                label: "Outlined",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "outlined"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Outlined",
                  rows: "2",
                  placeholder: "Placeholder Text",
                  variant: "outlined"
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
              _push3(ssrRenderComponent(VTextarea, {
                label: "Underlined",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "underlined"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Underlined",
                  rows: "2",
                  placeholder: "Placeholder Text",
                  variant: "underlined"
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
              _push3(ssrRenderComponent(VTextarea, {
                label: "Plain",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "plain"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextarea, {
                  label: "Plain",
                  rows: "2",
                  placeholder: "Placeholder Text",
                  variant: "plain"
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
              createVNode(VTextarea, {
                label: "Default",
                rows: "2",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                label: "Solo",
                placeholder: "Placeholder Text",
                rows: "2",
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
              createVNode(VTextarea, {
                label: "Filled",
                rows: "2",
                placeholder: "Placeholder Text",
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
              createVNode(VTextarea, {
                label: "Outlined",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "outlined"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                label: "Underlined",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "underlined"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextarea, {
                label: "Plain",
                rows: "2",
                placeholder: "Placeholder Text",
                variant: "plain"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaVariant.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "DemoTextareaAutoGrow",
  __ssrInlineRender: true,
  setup(__props) {
    const textareaValue = ref("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextarea, mergeProps({
        modelValue: unref(textareaValue),
        "onUpdate:modelValue": ($event) => isRef(textareaValue) ? textareaValue.value = $event : null,
        label: "Auto Grow",
        placeholder: "Placeholder Text",
        "auto-grow": ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaAutoGrow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextarea, mergeProps({
    label: "Default",
    placeholder: "Placeholder Text"
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textarea/DemoTextareaBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const autoGrow = { ts: `<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`, js: `<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
` };
const basic = { ts: `<template>
  <VTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<template>
  <VTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
` };
const browserAutocomplete = { ts: `<template>
  <VTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`, js: `<template>
  <VTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
` };
const clearable = { ts: `<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="ri-close-line"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="ri-close-line"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
` };
const counter = { ts: `<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
` };
const icons = { ts: `<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="Prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="ri-chat-2-line"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="ri-chat-2-line"
        placeholder="Placeholder Text"
        label="Append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="ri-chat-2-line"
        label="Prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="ri-chat-2-line"
        label="Append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="Prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="ri-chat-2-line"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="ri-chat-2-line"
        placeholder="Placeholder Text"
        label="Append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="ri-chat-2-line"
        label="Prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="ri-chat-2-line"
        label="Append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
` };
const noResize = { ts: `<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
` };
const rows = { ts: `<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
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
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
` };
const states = { ts: `<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
` };
const validation = { ts: `<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
` };
const variant = { ts: `<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
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
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
` };
const _sfc_main = {
  __name: "textarea",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$c;
      const _component_DemoTextareaBasic = __unplugin_components_1;
      const _component_DemoTextareaAutoGrow = _sfc_main$2;
      const _component_DemoTextareaVariant = __unplugin_components_3;
      const _component_DemoTextareaStates = __unplugin_components_4;
      const _component_DemoTextareaBrowserAutocomplete = __unplugin_components_5;
      const _component_DemoTextareaClearable = _sfc_main$6;
      const _component_DemoTextareaCounter = _sfc_main$7;
      const _component_DemoTextareaIcons = __unplugin_components_8;
      const _component_DemoTextareaRows = __unplugin_components_9;
      const _component_DemoTextareaNoResize = _sfc_main$a;
      const _component_DemoTextareaValidation = _sfc_main$b;
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
                        _push4(`<p${_scopeId3}> v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. </p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, " v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. "),
                          createVNode(_component_DemoTextareaBasic)
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
                        createVNode("p", null, " v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. "),
                        createVNode(_component_DemoTextareaBasic)
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
                    title: "Auto Grow",
                    code: autoGrow
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>When using the <code${_scopeId3}>auto-grow</code> prop, textarea&#39;s will automatically increase in size when the contained text exceeds its size.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaAutoGrow, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("When using the "),
                            createVNode("code", null, "auto-grow"),
                            createTextVNode(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")
                          ]),
                          createVNode(_component_DemoTextareaAutoGrow)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Auto Grow",
                      code: autoGrow
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("When using the "),
                          createVNode("code", null, "auto-grow"),
                          createTextVNode(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")
                        ]),
                        createVNode(_component_DemoTextareaAutoGrow)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>filled</code>, <code${_scopeId3}>plain</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>solo</code> and <code${_scopeId3}>underlined</code> option of <code${_scopeId3}>variant</code> prop to change the look of file input.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaVariant, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "filled"),
                            createTextVNode(", "),
                            createVNode("code", null, "plain"),
                            createTextVNode(", "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(", "),
                            createVNode("code", null, "solo"),
                            createTextVNode(" and "),
                            createVNode("code", null, "underlined"),
                            createTextVNode(" option of "),
                            createVNode("code", null, "variant"),
                            createTextVNode(" prop to change the look of file input.")
                          ]),
                          createVNode(_component_DemoTextareaVariant)
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
                          createTextVNode("Use "),
                          createVNode("code", null, "filled"),
                          createTextVNode(", "),
                          createVNode("code", null, "plain"),
                          createTextVNode(", "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(", "),
                          createVNode("code", null, "solo"),
                          createTextVNode(" and "),
                          createVNode("code", null, "underlined"),
                          createTextVNode(" option of "),
                          createVNode("code", null, "variant"),
                          createTextVNode(" prop to change the look of file input.")
                        ]),
                        createVNode(_component_DemoTextareaVariant)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>disabled</code> and <code${_scopeId3}>readonly</code> prop to change the state of textarea.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaStates, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "disabled"),
                            createTextVNode(" and "),
                            createVNode("code", null, "readonly"),
                            createTextVNode(" prop to change the state of textarea.")
                          ]),
                          createVNode(_component_DemoTextareaStates)
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
                          createTextVNode("Use "),
                          createVNode("code", null, "disabled"),
                          createTextVNode(" and "),
                          createVNode("code", null, "readonly"),
                          createTextVNode(" prop to change the state of textarea.")
                        ]),
                        createVNode(_component_DemoTextareaStates)
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
                    title: "Browser autocomplete",
                    code: browserAutocomplete
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> The <code${_scopeId3}>autocomplete</code> prop gives you the option to enable the browser to predict user input. </p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaBrowserAutocomplete, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" The "),
                            createVNode("code", null, "autocomplete"),
                            createTextVNode(" prop gives you the option to enable the browser to predict user input. ")
                          ]),
                          createVNode(_component_DemoTextareaBrowserAutocomplete)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Browser autocomplete",
                      code: browserAutocomplete
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" The "),
                          createVNode("code", null, "autocomplete"),
                          createTextVNode(" prop gives you the option to enable the browser to predict user input. ")
                        ]),
                        createVNode(_component_DemoTextareaBrowserAutocomplete)
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
                        _push4(`<p${_scopeId3}>You can clear the text from a <code${_scopeId3}>v-textarea</code> by using the <code${_scopeId3}>clearable</code> prop, and customize the icon used with the <code${_scopeId3}>clearable-icon</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaClearable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can clear the text from a "),
                            createVNode("code", null, "v-textarea"),
                            createTextVNode(" by using the "),
                            createVNode("code", null, "clearable"),
                            createTextVNode(" prop, and customize the icon used with the "),
                            createVNode("code", null, "clearable-icon"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoTextareaClearable)
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
                          createTextVNode("You can clear the text from a "),
                          createVNode("code", null, "v-textarea"),
                          createTextVNode(" by using the "),
                          createVNode("code", null, "clearable"),
                          createTextVNode(" prop, and customize the icon used with the "),
                          createVNode("code", null, "clearable-icon"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoTextareaClearable)
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
                        _push4(`<p${_scopeId3}> The <code${_scopeId3}>counter</code> prop informs the user of a character limit for the <code${_scopeId3}>v-textarea</code>. </p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaCounter, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" The "),
                            createVNode("code", null, "counter"),
                            createTextVNode(" prop informs the user of a character limit for the "),
                            createVNode("code", null, "v-textarea"),
                            createTextVNode(". ")
                          ]),
                          createVNode(_component_DemoTextareaCounter)
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
                          createTextVNode(" The "),
                          createVNode("code", null, "counter"),
                          createTextVNode(" prop informs the user of a character limit for the "),
                          createVNode("code", null, "v-textarea"),
                          createTextVNode(". ")
                        ]),
                        createVNode(_component_DemoTextareaCounter)
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>append-icon</code>, <code${_scopeId3}>prepend-icon</code>, <code${_scopeId3}>append-inner-icon</code> and <code${_scopeId3}>prepend-inner-icon</code> props help add context to v-textarea.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "append-icon"),
                            createTextVNode(", "),
                            createVNode("code", null, "prepend-icon"),
                            createTextVNode(", "),
                            createVNode("code", null, "append-inner-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "prepend-inner-icon"),
                            createTextVNode(" props help add context to v-textarea.")
                          ]),
                          createVNode(_component_DemoTextareaIcons)
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
                          createVNode("code", null, "append-icon"),
                          createTextVNode(", "),
                          createVNode("code", null, "prepend-icon"),
                          createTextVNode(", "),
                          createVNode("code", null, "append-inner-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "prepend-inner-icon"),
                          createTextVNode(" props help add context to v-textarea.")
                        ]),
                        createVNode(_component_DemoTextareaIcons)
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
                    title: "Rows",
                    code: rows
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>rows</code> prop allows you to define how many rows the textarea has, when combined with the <code${_scopeId3}>row-height</code> prop you can further customize your rows by defining their height.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaRows, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "rows"),
                            createTextVNode(" prop allows you to define how many rows the textarea has, when combined with the "),
                            createVNode("code", null, "row-height"),
                            createTextVNode(" prop you can further customize your rows by defining their height.")
                          ]),
                          createVNode(_component_DemoTextareaRows)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Rows",
                      code: rows
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "rows"),
                          createTextVNode(" prop allows you to define how many rows the textarea has, when combined with the "),
                          createVNode("code", null, "row-height"),
                          createTextVNode(" prop you can further customize your rows by defining their height.")
                        ]),
                        createVNode(_component_DemoTextareaRows)
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
                    title: "No resize",
                    code: noResize
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}><code${_scopeId3}>v-textarea</code>&#39;s have the option to remain the same size regardless of their content&#39;s size, using the <code${_scopeId3}>no-resize</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaNoResize, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "v-textarea"),
                            createTextVNode("'s have the option to remain the same size regardless of their content's size, using the "),
                            createVNode("code", null, "no-resize"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoTextareaNoResize)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "No resize",
                      code: noResize
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createVNode("code", null, "v-textarea"),
                          createTextVNode("'s have the option to remain the same size regardless of their content's size, using the "),
                          createVNode("code", null, "no-resize"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoTextareaNoResize)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>rules</code> prop to validate the textarea.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextareaValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "rules"),
                            createTextVNode(" prop to validate the textarea.")
                          ]),
                          createVNode(_component_DemoTextareaValidation)
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
                          createTextVNode(" prop to validate the textarea.")
                        ]),
                        createVNode(_component_DemoTextareaValidation)
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
                      createVNode("p", null, " v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. "),
                      createVNode(_component_DemoTextareaBasic)
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
                    title: "Auto Grow",
                    code: autoGrow
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("When using the "),
                        createVNode("code", null, "auto-grow"),
                        createTextVNode(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")
                      ]),
                      createVNode(_component_DemoTextareaAutoGrow)
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
                        createTextVNode("Use "),
                        createVNode("code", null, "filled"),
                        createTextVNode(", "),
                        createVNode("code", null, "plain"),
                        createTextVNode(", "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(", "),
                        createVNode("code", null, "solo"),
                        createTextVNode(" and "),
                        createVNode("code", null, "underlined"),
                        createTextVNode(" option of "),
                        createVNode("code", null, "variant"),
                        createTextVNode(" prop to change the look of file input.")
                      ]),
                      createVNode(_component_DemoTextareaVariant)
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
                        createTextVNode("Use "),
                        createVNode("code", null, "disabled"),
                        createTextVNode(" and "),
                        createVNode("code", null, "readonly"),
                        createTextVNode(" prop to change the state of textarea.")
                      ]),
                      createVNode(_component_DemoTextareaStates)
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
                    title: "Browser autocomplete",
                    code: browserAutocomplete
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" The "),
                        createVNode("code", null, "autocomplete"),
                        createTextVNode(" prop gives you the option to enable the browser to predict user input. ")
                      ]),
                      createVNode(_component_DemoTextareaBrowserAutocomplete)
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
                        createTextVNode("You can clear the text from a "),
                        createVNode("code", null, "v-textarea"),
                        createTextVNode(" by using the "),
                        createVNode("code", null, "clearable"),
                        createTextVNode(" prop, and customize the icon used with the "),
                        createVNode("code", null, "clearable-icon"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoTextareaClearable)
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
                        createTextVNode(" The "),
                        createVNode("code", null, "counter"),
                        createTextVNode(" prop informs the user of a character limit for the "),
                        createVNode("code", null, "v-textarea"),
                        createTextVNode(". ")
                      ]),
                      createVNode(_component_DemoTextareaCounter)
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
                        createTextVNode("The "),
                        createVNode("code", null, "append-icon"),
                        createTextVNode(", "),
                        createVNode("code", null, "prepend-icon"),
                        createTextVNode(", "),
                        createVNode("code", null, "append-inner-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "prepend-inner-icon"),
                        createTextVNode(" props help add context to v-textarea.")
                      ]),
                      createVNode(_component_DemoTextareaIcons)
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
                    title: "Rows",
                    code: rows
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "rows"),
                        createTextVNode(" prop allows you to define how many rows the textarea has, when combined with the "),
                        createVNode("code", null, "row-height"),
                        createTextVNode(" prop you can further customize your rows by defining their height.")
                      ]),
                      createVNode(_component_DemoTextareaRows)
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
                    title: "No resize",
                    code: noResize
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createVNode("code", null, "v-textarea"),
                        createTextVNode("'s have the option to remain the same size regardless of their content's size, using the "),
                        createVNode("code", null, "no-resize"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoTextareaNoResize)
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
                        createTextVNode(" prop to validate the textarea.")
                      ]),
                      createVNode(_component_DemoTextareaValidation)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
