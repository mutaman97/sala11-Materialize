import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as VIcon, b as VProgressCircular, z as VNodeRenderer, B as themeConfig, V as VBtn, _ as _export_sfc } from "../ssr.js";
import { c as VFadeTransition } from "./index-D5WAZiYx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { r as requiredValidator, e as emailValidator } from "./validators-CW3JK3pA.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { _ as _sfc_main$g } from "./AppCardCode-DkpMhnYF.js";
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VImg-D-rbsD1g.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
/* empty css               */
import "./helpers-DX2i3Kdq.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$f = {
  __name: "DemoTextfieldIconSlots",
  __ssrInlineRender: true,
  setup(__props) {
    const message = ref("Hey!");
    const loading = ref(false);
    const clickMe = () => {
      loading.value = true;
      message.value = "Wait for it...";
      setTimeout(() => {
        loading.value = false;
        message.value = "You've clicked me!";
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextField, mergeProps({
        modelValue: unref(message),
        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
        density: "compact",
        clearable: "",
        "clear-icon": "ri-close-line",
        label: "Message",
        placeholder: "Hey!!",
        type: "text"
      }, _attrs), {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTooltip, { location: "bottom" }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, mergeProps(props, { icon: "ri-question-line" }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, mergeProps(props, { icon: "ri-question-line" }), null, 16)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` I&#39;m a tooltip `);
                } else {
                  return [
                    createTextVNode(" I'm a tooltip ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTooltip, { location: "bottom" }, {
                activator: withCtx(({ props }) => [
                  createVNode(VIcon, mergeProps(props, { icon: "ri-question-line" }), null, 16)
                ]),
                default: withCtx(() => [
                  createTextVNode(" I'm a tooltip ")
                ]),
                _: 1
              })
            ];
          }
        }),
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VFadeTransition, { "leave-absolute": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(ssrRenderComponent(VProgressCircular, {
                      size: "24",
                      color: "info",
                      indeterminate: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(VNodeRenderer), {
                      nodes: unref(themeConfig).app.logo
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(loading) ? (openBlock(), createBlock(VProgressCircular, {
                      key: 0,
                      size: "24",
                      color: "info",
                      indeterminate: ""
                    })) : (openBlock(), createBlock(unref(VNodeRenderer), {
                      key: 1,
                      nodes: unref(themeConfig).app.logo
                    }, null, 8, ["nodes"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VFadeTransition, { "leave-absolute": "" }, {
                default: withCtx(() => [
                  unref(loading) ? (openBlock(), createBlock(VProgressCircular, {
                    key: 0,
                    size: "24",
                    color: "info",
                    indeterminate: ""
                  })) : (openBlock(), createBlock(unref(VNodeRenderer), {
                    key: 1,
                    nodes: unref(themeConfig).app.logo
                  }, null, 8, ["nodes"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              size: _ctx.$vuetify.display.smAndDown ? "small" : "large",
              icon: _ctx.$vuetify.display.smAndDown,
              onClick: clickMe
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-focus-3-line" }, null, _parent3, _scopeId2));
                  if (_ctx.$vuetify.display.mdAndUp) {
                    _push3(`<span class="ms-3"${_scopeId2}>Click me</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-focus-3-line" }),
                    _ctx.$vuetify.display.mdAndUp ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "ms-3"
                    }, "Click me")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                size: _ctx.$vuetify.display.smAndDown ? "small" : "large",
                icon: _ctx.$vuetify.display.smAndDown,
                onClick: clickMe
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { icon: "ri-focus-3-line" }),
                  _ctx.$vuetify.display.mdAndUp ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "ms-3"
                  }, "Click me")) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["size", "icon"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldIconSlots.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "DemoTextfieldPasswordInput",
  __ssrInlineRender: true,
  setup(__props) {
    const show1 = ref(false);
    const show2 = ref(true);
    const password = ref("Password");
    const confirmPassword = ref("wqfasds");
    const rules = {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters"
    };
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
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                    "append-inner-icon": unref(show1) ? "ri-eye-off-line" : "ri-eye-line",
                    rules: [rules.required, rules.min],
                    type: unref(show1) ? "text" : "password",
                    name: "input-10-1",
                    label: "Normal with hint text",
                    hint: "At least 8 characters",
                    placeholder: "············",
                    counter: "",
                    "onClick:appendInner": ($event) => show1.value = !unref(show1)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      "append-inner-icon": unref(show1) ? "ri-eye-off-line" : "ri-eye-line",
                      rules: [rules.required, rules.min],
                      type: unref(show1) ? "text" : "password",
                      name: "input-10-1",
                      label: "Normal with hint text",
                      hint: "At least 8 characters",
                      placeholder: "············",
                      counter: "",
                      "onClick:appendInner": ($event) => show1.value = !unref(show1)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "rules", "type", "onClick:appendInner"])
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
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(confirmPassword),
                    "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                    rules: [rules.required, rules.min],
                    "append-inner-icon": unref(show2) ? "ri-eye-off-line" : "ri-eye-line",
                    type: unref(show2) ? "text" : "password",
                    name: "input-10-2",
                    placeholder: "············",
                    label: "Visible",
                    hint: "At least 8 characters",
                    "onClick:appendInner": ($event) => show2.value = !unref(show2)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(confirmPassword),
                      "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                      rules: [rules.required, rules.min],
                      "append-inner-icon": unref(show2) ? "ri-eye-off-line" : "ri-eye-line",
                      type: unref(show2) ? "text" : "password",
                      name: "input-10-2",
                      placeholder: "············",
                      label: "Visible",
                      hint: "At least 8 characters",
                      "onClick:appendInner": ($event) => show2.value = !unref(show2)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "append-inner-icon", "type", "onClick:appendInner"])
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
                  createVNode(VTextField, {
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                    "append-inner-icon": unref(show1) ? "ri-eye-off-line" : "ri-eye-line",
                    rules: [rules.required, rules.min],
                    type: unref(show1) ? "text" : "password",
                    name: "input-10-1",
                    label: "Normal with hint text",
                    hint: "At least 8 characters",
                    placeholder: "············",
                    counter: "",
                    "onClick:appendInner": ($event) => show1.value = !unref(show1)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "rules", "type", "onClick:appendInner"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(confirmPassword),
                    "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                    rules: [rules.required, rules.min],
                    "append-inner-icon": unref(show2) ? "ri-eye-off-line" : "ri-eye-line",
                    type: unref(show2) ? "text" : "password",
                    name: "input-10-2",
                    placeholder: "············",
                    label: "Visible",
                    hint: "At least 8 characters",
                    "onClick:appendInner": ($event) => show2.value = !unref(show2)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "append-inner-icon", "type", "onClick:appendInner"])
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldPasswordInput.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextField, mergeProps({ placeholder: "Placeholder Text" }, _attrs), {
    label: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` What about  <strong${_scopeId}>icon</strong> here? `);
        _push2(ssrRenderComponent(VIcon, { icon: "ri-file-search-line" }, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" What about  "),
          createVNode("strong", null, "icon"),
          createTextVNode(" here? "),
          createVNode(VIcon, { icon: "ri-file-search-line" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldLabelSlot.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_13 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$c = {
  __name: "DemoTextfieldIconEvents",
  __ssrInlineRender: true,
  setup(__props) {
    const message = ref("Hey!");
    const marker = ref(true);
    const iconIndex = ref(0);
    const toggleMarker = () => {
      marker.value = !marker.value;
    };
    const clearMessage = () => {
      message.value = "";
    };
    const resetIcon = () => {
      iconIndex.value = 0;
    };
    const sendMessage = () => {
      resetIcon();
      clearMessage();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextField, mergeProps({
        modelValue: unref(message),
        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
        clearable: "",
        type: "text",
        label: "Message",
        color: "primary",
        placeholder: "Hey!!",
        "clear-icon": "ri-close-line",
        "append-icon": unref(message) ? "ri-send-plane-2-line" : "ri-mic-line",
        "append-inner-icon": unref(marker) ? "ri-pushpin-line" : "ri-unpin-line",
        "onClick:appendInner": toggleMarker,
        "onClick:append": sendMessage,
        "onClick:clear": clearMessage
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldIconEvents.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "DemoTextfieldValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
              placeholder: "johnedoe@email.com",
              label: "E-mail"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextField, {
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                placeholder: "johnedoe@email.com",
                label: "E-mail"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldValidation.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextField, mergeProps({
    label: "Regular",
    placeholder: "Placeholder Text",
    "single-line": ""
  }, _attrs), null, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldSingleLine.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {
  __name: "DemoTextfieldPrefixesAndSuffixes",
  __ssrInlineRender: true,
  setup(__props) {
    const amount = ref(10.05);
    const weight = ref(28.02);
    const email = ref("example");
    const time = ref("04:56");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(amount),
                    "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                    label: "Amount",
                    prefix: "$",
                    type: "number",
                    placeholder: "10.05"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(amount),
                      "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                      label: "Amount",
                      prefix: "$",
                      type: "number",
                      placeholder: "10.05"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(weight),
                    "onUpdate:modelValue": ($event) => isRef(weight) ? weight.value = $event : null,
                    label: "Weight",
                    suffix: "lbs",
                    type: "number",
                    placeholder: "28.02"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(weight),
                      "onUpdate:modelValue": ($event) => isRef(weight) ? weight.value = $event : null,
                      label: "Weight",
                      suffix: "lbs",
                      type: "number",
                      placeholder: "28.02"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    label: "Email address",
                    suffix: "@gmail.com",
                    placeholder: "example"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      label: "Email address",
                      suffix: "@gmail.com",
                      placeholder: "example"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(time),
                    "onUpdate:modelValue": ($event) => isRef(time) ? time.value = $event : null,
                    label: "Label Text",
                    type: "time",
                    suffix: "PST",
                    placeholder: "04:56"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(time),
                      "onUpdate:modelValue": ($event) => isRef(time) ? time.value = $event : null,
                      label: "Label Text",
                      type: "time",
                      suffix: "PST",
                      placeholder: "04:56"
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
                  createVNode(VTextField, {
                    modelValue: unref(amount),
                    "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                    label: "Amount",
                    prefix: "$",
                    type: "number",
                    placeholder: "10.05"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(weight),
                    "onUpdate:modelValue": ($event) => isRef(weight) ? weight.value = $event : null,
                    label: "Weight",
                    suffix: "lbs",
                    type: "number",
                    placeholder: "28.02"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    label: "Email address",
                    suffix: "@gmail.com",
                    placeholder: "example"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(time),
                    "onUpdate:modelValue": ($event) => isRef(time) ? time.value = $event : null,
                    label: "Label Text",
                    type: "time",
                    suffix: "PST",
                    placeholder: "04:56"
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldPrefixesAndSuffixes.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Prepend",
                "prepend-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Prepend",
                  "prepend-icon": "ri-map-pin-line",
                  placeholder: "Placeholder Text"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Prepend Inner",
                "prepend-inner-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Prepend Inner",
                  "prepend-inner-icon": "ri-map-pin-line",
                  placeholder: "Placeholder Text"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Append",
                "append-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Append",
                  "append-icon": "ri-map-pin-line",
                  placeholder: "Placeholder Text"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Append Inner",
                "append-inner-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Append Inner",
                  "append-inner-icon": "ri-map-pin-line",
                  placeholder: "Placeholder Text"
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
              createVNode(VTextField, {
                label: "Prepend",
                "prepend-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Prepend Inner",
                "prepend-inner-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Append",
                "append-icon": "ri-map-pin-line",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Append Inner",
                "append-inner-icon": "ri-map-pin-line",
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
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldIcons.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextField, mergeProps({
    color: "success",
    label: "First name",
    placeholder: "Placeholder Text"
  }, _attrs), null, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldCustomColors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextField, mergeProps({
    placeholder: "Placeholder Text",
    label: "Regular",
    clearable: ""
  }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldClearable.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  __name: "DemoTextfieldCounter",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Preliminary report");
    const description = ref("California is a state in the western United States");
    const rules = [(v) => v.length <= 25 || "Max 25 characters"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(title),
                    "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                    rules,
                    counter: "25",
                    placeholder: "Placeholder Text",
                    hint: "This field uses counter prop",
                    label: "Regular"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(title),
                      "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                      rules,
                      counter: "25",
                      placeholder: "Placeholder Text",
                      hint: "This field uses counter prop",
                      label: "Regular"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(description),
                    "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                    rules,
                    counter: "",
                    maxlength: "25",
                    placeholder: "Placeholder Text",
                    hint: "This field uses maxlength attribute",
                    label: "Limit exceeded"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(description),
                      "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                      rules,
                      counter: "",
                      maxlength: "25",
                      placeholder: "Placeholder Text",
                      hint: "This field uses maxlength attribute",
                      label: "Limit exceeded"
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
                  createVNode(VTextField, {
                    modelValue: unref(title),
                    "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                    rules,
                    counter: "25",
                    placeholder: "Placeholder Text",
                    hint: "This field uses counter prop",
                    label: "Regular"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(description),
                    "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                    rules,
                    counter: "",
                    maxlength: "25",
                    placeholder: "Placeholder Text",
                    hint: "This field uses maxlength attribute",
                    label: "Limit exceeded"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldCounter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Disabled",
                placeholder: "Placeholder Text",
                disabled: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Disabled",
                  placeholder: "Placeholder Text",
                  disabled: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                placeholder: "Placeholder Text",
                label: "Readonly",
                readonly: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  placeholder: "Placeholder Text",
                  label: "Readonly",
                  readonly: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, null, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Disabled",
                placeholder: "Placeholder Text",
                disabled: ""
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                placeholder: "Placeholder Text",
                label: "Readonly",
                readonly: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldState.vue");
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
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Outlined",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Outlined",
                  placeholder: "Placeholder Text"
                })
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
              _push3(ssrRenderComponent(VTextField, {
                label: "Filled",
                variant: "filled",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Filled",
                  variant: "filled",
                  placeholder: "Placeholder Text"
                })
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
              _push3(ssrRenderComponent(VTextField, {
                label: "Solo",
                variant: "solo",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Solo",
                  variant: "solo",
                  placeholder: "Placeholder Text"
                })
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
              _push3(ssrRenderComponent(VTextField, {
                label: "Plain",
                variant: "plain",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Plain",
                  variant: "plain",
                  placeholder: "Placeholder Text"
                })
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
              _push3(ssrRenderComponent(VTextField, {
                label: "Underlined",
                variant: "underlined",
                placeholder: "Placeholder Text"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  label: "Underlined",
                  variant: "underlined",
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
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Outlined",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Filled",
                variant: "filled",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Solo",
                variant: "solo",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Plain",
                variant: "plain",
                placeholder: "Placeholder Text"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Underlined",
                variant: "underlined",
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
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldVariant.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextField, mergeProps({
    label: "Compact",
    density: "compact",
    placeholder: "Placeholder Text"
  }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTextField, mergeProps({
    label: "Regular",
    placeholder: "Placeholder Text"
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/textfield/DemoTextfieldBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const basic = { ts: `<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
` };
const clearable = { ts: `<template>
  <VTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`, js: `<template>
  <VTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
` };
const counter = { ts: `<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
` };
const customColors = { ts: `<template>
  <VTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<template>
  <VTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
` };
const density = { ts: `<template>
  <VTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`, js: `<template>
  <VTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
` };
const iconEvents = { ts: `<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="ri-close-line"
    :append-icon="message ? 'ri-send-plane-2-line' : 'ri-mic-line'"
    :append-inner-icon="marker ? 'ri-pushpin-line' : 'ri-unpin-line'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`, js: `<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="ri-close-line"
    :append-icon="message ? 'ri-send-plane-2-line' : 'ri-mic-line'"
    :append-inner-icon="marker ? 'ri-pushpin-line' : 'ri-unpin-line'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
` };
const iconSlots = { ts: `<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    density="compact"
    clearable
    clear-icon="ri-close-line"
    label="Message"
    placeholder="Hey!!"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="ri-question-line"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="ri-focus-3-line" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`, js: `<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    density="compact"
    clearable
    clear-icon="ri-close-line"
    label="Message"
    placeholder="Hey!!"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="ri-question-line"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="ri-focus-3-line" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
` };
const icons = { ts: `<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
` };
const labelSlot = { ts: `<template>
  <VTextField placeholder="Placeholder Text">
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="ri-file-search-line" />
    </template>
  </VTextField>
</template>
`, js: `<template>
  <VTextField placeholder="Placeholder Text">
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="ri-file-search-line" />
    </template>
  </VTextField>
</template>
` };
const passwordInput = { ts: `<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
` };
const prefixesAndSuffixes = { ts: `<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
` };
const singleLine = { ts: `<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`, js: `<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
` };
const state = { ts: `<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
` };
const validation = { ts: `<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`, js: `<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
` };
const variant = { ts: `<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
` };
const _sfc_main = {
  __name: "textfield",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$g;
      const _component_DemoTextfieldBasic = __unplugin_components_1;
      const _component_DemoTextfieldDensity = __unplugin_components_2;
      const _component_DemoTextfieldVariant = __unplugin_components_3;
      const _component_DemoTextfieldState = __unplugin_components_4;
      const _component_DemoTextfieldCounter = _sfc_main$5;
      const _component_DemoTextfieldClearable = __unplugin_components_6;
      const _component_DemoTextfieldCustomColors = __unplugin_components_7;
      const _component_DemoTextfieldIcons = __unplugin_components_8;
      const _component_DemoTextfieldPrefixesAndSuffixes = _sfc_main$9;
      const _component_DemoTextfieldSingleLine = __unplugin_components_10;
      const _component_DemoTextfieldValidation = _sfc_main$b;
      const _component_DemoTextfieldIconEvents = _sfc_main$c;
      const _component_DemoTextfieldLabelSlot = __unplugin_components_13;
      const _component_DemoTextfieldPasswordInput = _sfc_main$e;
      const _component_DemoTextfieldIconSlots = _sfc_main$f;
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
                        _push4(`<p${_scopeId3}>Text fields components are used for collecting user provided information.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Text fields components are used for collecting user provided information."),
                          createVNode(_component_DemoTextfieldBasic)
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
                        createVNode("p", null, "Text fields components are used for collecting user provided information."),
                        createVNode(_component_DemoTextfieldBasic)
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>density</code> prop decreases the height of the text field based upon 1 of 3 levels of density; <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoTextfieldDensity)
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
                          createTextVNode(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoTextfieldDensity)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>solo</code>, <code${_scopeId3}>filled</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>plain</code> and <code${_scopeId3}>underlined</code> option of <code${_scopeId3}>variant</code> prop to change the look of the textfield. </p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldVariant, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
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
                            createTextVNode(" prop to change the look of the textfield. ")
                          ]),
                          createVNode(_component_DemoTextfieldVariant)
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
                          createTextVNode(" prop to change the look of the textfield. ")
                        ]),
                        createVNode(_component_DemoTextfieldVariant)
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
                    title: "State",
                    code: state
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Text fields can be disabled or readonly.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldState, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Text fields can be disabled or readonly."),
                          createVNode(_component_DemoTextfieldState)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "State",
                      code: state
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Text fields can be disabled or readonly."),
                        createVNode(_component_DemoTextfieldState)
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
                        _push4(`<p${_scopeId3}>Use a <code${_scopeId3}>counter</code> prop to inform a user of the character limit.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldCounter, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use a "),
                            createVNode("code", null, "counter"),
                            createTextVNode(" prop to inform a user of the character limit.")
                          ]),
                          createVNode(_component_DemoTextfieldCounter)
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
                          createTextVNode("Use a "),
                          createVNode("code", null, "counter"),
                          createTextVNode(" prop to inform a user of the character limit.")
                        ]),
                        createVNode(_component_DemoTextfieldCounter)
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
                        _push4(`<p${_scopeId3}>When clearable, you can customize the clear icon with clear-icon.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldClearable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "When clearable, you can customize the clear icon with clear-icon."),
                          createVNode(_component_DemoTextfieldClearable)
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
                        createVNode("p", null, "When clearable, you can customize the clear icon with clear-icon."),
                        createVNode(_component_DemoTextfieldClearable)
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
                    title: "Custom Colors",
                    code: customColors
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>color</code> prop to change the input border color.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldCustomColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop to change the input border color.")
                          ]),
                          createVNode(_component_DemoTextfieldCustomColors)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Colors",
                      code: customColors
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop to change the input border color.")
                        ]),
                        createVNode(_component_DemoTextfieldCustomColors)
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
                        _push4(`<p${_scopeId3}>You can add icons to the text field with <code${_scopeId3}>prepend-icon</code>, <code${_scopeId3}>append-icon</code> and <code${_scopeId3}>append-inner-icon</code> and <code${_scopeId3}>prepend-inner-icon</code> props.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can add icons to the text field with "),
                            createVNode("code", null, "prepend-icon"),
                            createTextVNode(", "),
                            createVNode("code", null, "append-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "append-inner-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "prepend-inner-icon"),
                            createTextVNode(" props.")
                          ]),
                          createVNode(_component_DemoTextfieldIcons)
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
                          createTextVNode("You can add icons to the text field with "),
                          createVNode("code", null, "prepend-icon"),
                          createTextVNode(", "),
                          createVNode("code", null, "append-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "append-inner-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "prepend-inner-icon"),
                          createTextVNode(" props.")
                        ]),
                        createVNode(_component_DemoTextfieldIcons)
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
                    title: "Prefixes and suffixes",
                    code: prefixesAndSuffixes
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>prefix</code> and <code${_scopeId3}>suffix</code> properties allows you to prepend and append inline non-modifiable text next to the text field.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldPrefixesAndSuffixes, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "prefix"),
                            createTextVNode(" and "),
                            createVNode("code", null, "suffix"),
                            createTextVNode(" properties allows you to prepend and append inline non-modifiable text next to the text field.")
                          ]),
                          createVNode(_component_DemoTextfieldPrefixesAndSuffixes)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Prefixes and suffixes",
                      code: prefixesAndSuffixes
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "prefix"),
                          createTextVNode(" and "),
                          createVNode("code", null, "suffix"),
                          createTextVNode(" properties allows you to prepend and append inline non-modifiable text next to the text field.")
                        ]),
                        createVNode(_component_DemoTextfieldPrefixesAndSuffixes)
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
                    title: "Single line",
                    code: singleLine
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}><code${_scopeId3}>single-line</code> text fields do not float their label on focus or with data.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldSingleLine, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "single-line"),
                            createTextVNode(" text fields do not float their label on focus or with data.")
                          ]),
                          createVNode(_component_DemoTextfieldSingleLine)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Single line",
                      code: singleLine
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createVNode("code", null, "single-line"),
                          createTextVNode(" text fields do not float their label on focus or with data.")
                        ]),
                        createVNode(_component_DemoTextfieldSingleLine)
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
                        _push4(`<p${_scopeId3}>Vuetify includes simple validation through the <code${_scopeId3}>rules</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Vuetify includes simple validation through the "),
                            createVNode("code", null, "rules"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoTextfieldValidation)
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
                          createTextVNode("Vuetify includes simple validation through the "),
                          createVNode("code", null, "rules"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoTextfieldValidation)
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
                    title: "Icon events",
                    code: iconEvents
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}><code${_scopeId3}>click:prepend</code>, <code${_scopeId3}>click:append</code>, <code${_scopeId3}>click:append-inner</code>, and <code${_scopeId3}>click:clear</code> will be emitted when you click on the respective icon</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldIconEvents, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "click:prepend"),
                            createTextVNode(", "),
                            createVNode("code", null, "click:append"),
                            createTextVNode(", "),
                            createVNode("code", null, "click:append-inner"),
                            createTextVNode(", and "),
                            createVNode("code", null, "click:clear"),
                            createTextVNode(" will be emitted when you click on the respective icon")
                          ]),
                          createVNode(_component_DemoTextfieldIconEvents)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icon events",
                      code: iconEvents
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createVNode("code", null, "click:prepend"),
                          createTextVNode(", "),
                          createVNode("code", null, "click:append"),
                          createTextVNode(", "),
                          createVNode("code", null, "click:append-inner"),
                          createTextVNode(", and "),
                          createVNode("code", null, "click:clear"),
                          createTextVNode(" will be emitted when you click on the respective icon")
                        ]),
                        createVNode(_component_DemoTextfieldIconEvents)
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
                        _push4(`<p${_scopeId3}>Text field label can be defined in <code${_scopeId3}>label</code> slot - that will allow to use HTML content.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldLabelSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Text field label can be defined in "),
                            createVNode("code", null, "label"),
                            createTextVNode(" slot - that will allow to use HTML content.")
                          ]),
                          createVNode(_component_DemoTextfieldLabelSlot)
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
                          createTextVNode("Text field label can be defined in "),
                          createVNode("code", null, "label"),
                          createTextVNode(" slot - that will allow to use HTML content.")
                        ]),
                        createVNode(_component_DemoTextfieldLabelSlot)
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
                    title: "Password input",
                    code: passwordInput
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using the HTML input <code${_scopeId3}>type</code> password can be used with an appended icon and callback to control the visibility.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldPasswordInput, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using the HTML input "),
                            createVNode("code", null, "type"),
                            createTextVNode(" password can be used with an appended icon and callback to control the visibility.")
                          ]),
                          createVNode(_component_DemoTextfieldPasswordInput)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Password input",
                      code: passwordInput
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Using the HTML input "),
                          createVNode("code", null, "type"),
                          createTextVNode(" password can be used with an appended icon and callback to control the visibility.")
                        ]),
                        createVNode(_component_DemoTextfieldPasswordInput)
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
                    title: "Icon slots",
                    code: iconSlots
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Instead of using <code${_scopeId3}>prepend</code>/<code${_scopeId3}>append</code>/<code${_scopeId3}>append-inner</code> icons you can use slots to extend input&#39;s functionality.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTextfieldIconSlots, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Instead of using "),
                            createVNode("code", null, "prepend"),
                            createTextVNode("/"),
                            createVNode("code", null, "append"),
                            createTextVNode("/"),
                            createVNode("code", null, "append-inner"),
                            createTextVNode(" icons you can use slots to extend input's functionality.")
                          ]),
                          createVNode(_component_DemoTextfieldIconSlots)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icon slots",
                      code: iconSlots
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Instead of using "),
                          createVNode("code", null, "prepend"),
                          createTextVNode("/"),
                          createVNode("code", null, "append"),
                          createTextVNode("/"),
                          createVNode("code", null, "append-inner"),
                          createTextVNode(" icons you can use slots to extend input's functionality.")
                        ]),
                        createVNode(_component_DemoTextfieldIconSlots)
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
                      createVNode("p", null, "Text fields components are used for collecting user provided information."),
                      createVNode(_component_DemoTextfieldBasic)
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
                        createTextVNode("The "),
                        createVNode("code", null, "density"),
                        createTextVNode(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoTextfieldDensity)
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
                        createTextVNode(" prop to change the look of the textfield. ")
                      ]),
                      createVNode(_component_DemoTextfieldVariant)
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
                    title: "State",
                    code: state
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Text fields can be disabled or readonly."),
                      createVNode(_component_DemoTextfieldState)
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
                        createTextVNode("Use a "),
                        createVNode("code", null, "counter"),
                        createTextVNode(" prop to inform a user of the character limit.")
                      ]),
                      createVNode(_component_DemoTextfieldCounter)
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
                      createVNode("p", null, "When clearable, you can customize the clear icon with clear-icon."),
                      createVNode(_component_DemoTextfieldClearable)
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
                    title: "Custom Colors",
                    code: customColors
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop to change the input border color.")
                      ]),
                      createVNode(_component_DemoTextfieldCustomColors)
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
                        createTextVNode("You can add icons to the text field with "),
                        createVNode("code", null, "prepend-icon"),
                        createTextVNode(", "),
                        createVNode("code", null, "append-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "append-inner-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "prepend-inner-icon"),
                        createTextVNode(" props.")
                      ]),
                      createVNode(_component_DemoTextfieldIcons)
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
                    title: "Prefixes and suffixes",
                    code: prefixesAndSuffixes
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "prefix"),
                        createTextVNode(" and "),
                        createVNode("code", null, "suffix"),
                        createTextVNode(" properties allows you to prepend and append inline non-modifiable text next to the text field.")
                      ]),
                      createVNode(_component_DemoTextfieldPrefixesAndSuffixes)
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
                    title: "Single line",
                    code: singleLine
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createVNode("code", null, "single-line"),
                        createTextVNode(" text fields do not float their label on focus or with data.")
                      ]),
                      createVNode(_component_DemoTextfieldSingleLine)
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
                        createTextVNode("Vuetify includes simple validation through the "),
                        createVNode("code", null, "rules"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoTextfieldValidation)
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
                    title: "Icon events",
                    code: iconEvents
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createVNode("code", null, "click:prepend"),
                        createTextVNode(", "),
                        createVNode("code", null, "click:append"),
                        createTextVNode(", "),
                        createVNode("code", null, "click:append-inner"),
                        createTextVNode(", and "),
                        createVNode("code", null, "click:clear"),
                        createTextVNode(" will be emitted when you click on the respective icon")
                      ]),
                      createVNode(_component_DemoTextfieldIconEvents)
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
                        createTextVNode("Text field label can be defined in "),
                        createVNode("code", null, "label"),
                        createTextVNode(" slot - that will allow to use HTML content.")
                      ]),
                      createVNode(_component_DemoTextfieldLabelSlot)
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
                    title: "Password input",
                    code: passwordInput
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Using the HTML input "),
                        createVNode("code", null, "type"),
                        createTextVNode(" password can be used with an appended icon and callback to control the visibility.")
                      ]),
                      createVNode(_component_DemoTextfieldPasswordInput)
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
                    title: "Icon slots",
                    code: iconSlots
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Instead of using "),
                        createVNode("code", null, "prepend"),
                        createTextVNode("/"),
                        createVNode("code", null, "append"),
                        createTextVNode("/"),
                        createVNode("code", null, "append-inner"),
                        createTextVNode(" icons you can use slots to extend input's functionality.")
                      ]),
                      createVNode(_component_DemoTextfieldIconSlots)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/textfield.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
