import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, mergeProps, withCtx, unref, createVNode, isRef, createTextVNode, withModifiers, useSSRContext, withAsyncContext, computed, resolveComponent, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { r as requiredValidator, e as emailValidator } from "./validators-CW3JK3pA.js";
import { _ as _sfc_main$2 } from "./AppDrawerHeaderSection-isEKlId-.js";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VBtn } from "../ssr.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import "./helpers-DX2i3Kdq.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VImg-D-rbsD1g.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VList-Bay5Fixr.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
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
import "@antfu/utils";
import "ufo";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$1 = {
  __name: "ECommerceAddCustomerDrawer",
  __ssrInlineRender: true,
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:isDrawerOpen"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleDrawerModelValueUpdate = (val) => {
      emit("update:isDrawerOpen", val);
    };
    const refVForm = ref();
    const name = ref();
    const email = ref();
    const mobile = ref();
    const addressLine1 = ref();
    const addressLine2 = ref();
    const town = ref();
    const state = ref();
    const postCode = ref();
    const country = ref();
    const isBillingAddress = ref(false);
    const resetForm = () => {
      var _a;
      (_a = refVForm.value) == null ? void 0 : _a.reset();
      emit("update:isDrawerOpen", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$2;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        "model-value": props.isDrawerOpen,
        temporary: "",
        location: "end",
        width: "370",
        border: "none",
        "onUpdate:modelValue": handleDrawerModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Add a Customer",
              onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { flat: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PerfectScrollbar), {
                    options: { wheelPropagation: false },
                    class: "h-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { style: { "block-size": "calc(100vh - 5rem)" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VForm), {
                                ref_key: "refVForm",
                                ref: refVForm,
                                onSubmit: () => {
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-body-1 font-weight-medium text-high-emphasis"${_scopeId7}> Basic Information </div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(name),
                                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                  label: "Full Name",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "John Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(name),
                                                    "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                    label: "Full Name",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "John Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  label: "Email Address",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                  placeholder: "johndoe@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    label: "Email Address",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                    placeholder: "johndoe@email.com"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(mobile),
                                                  "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                                  label: "Mobile Number",
                                                  type: "number",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "+(123) 456-7890"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(mobile),
                                                    "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                                    label: "Mobile Number",
                                                    type: "number",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "+(123) 456-7890"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-body-1 font-weight-medium text-high-emphasis"${_scopeId7}> Shipping Information </div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(addressLine1),
                                                  "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                                  label: "Address Line 1*",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "45, Rocker Terrace"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(addressLine1),
                                                    "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                                    label: "Address Line 1*",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "45, Rocker Terrace"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(addressLine2),
                                                  "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                                  placeholder: "Empire Heights,",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Address Line 2*"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(addressLine2),
                                                    "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                                    placeholder: "Empire Heights,",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Address Line 2*"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(town),
                                                  "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                                  label: "Town*",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "New York"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(town),
                                                    "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                                    label: "Town*",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "New York"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(state),
                                                  "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                                  placeholder: "Texas",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "State/Province*"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(state),
                                                    "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                                    placeholder: "Texas",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "State/Province*"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(postCode),
                                                  "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                                  label: "Post Code*",
                                                  type: "number",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "982347"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(postCode),
                                                    "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                                    label: "Post Code*",
                                                    type: "number",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "982347"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(country),
                                                  "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                  placeholder: "United States",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Country",
                                                  items: ["United States", "United Kingdom", "Canada"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(country),
                                                    "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                    placeholder: "United States",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Country",
                                                    items: ["United States", "United Kingdom", "Canada"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex justify-space-between"${_scopeId7}><div class="d-flex flex-column gap-y-1"${_scopeId7}><h6 class="text-h6"${_scopeId7}> Use as a billing address? </h6><span class="text-sm"${_scopeId7}>Please check budget for more info</span></div>`);
                                                _push8(ssrRenderComponent(VSwitch, {
                                                  modelValue: unref(isBillingAddress),
                                                  "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                      createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                                      createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                                    ]),
                                                    createVNode(VSwitch, {
                                                      modelValue: unref(isBillingAddress),
                                                      "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex justify-start"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "submit",
                                                  color: "primary",
                                                  class: "me-4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Add `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Add ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "error",
                                                  variant: "outlined",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Discard `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Discard ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex justify-start" }, [
                                                    createVNode(VBtn, {
                                                      type: "submit",
                                                      color: "primary",
                                                      class: "me-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Add ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VBtn, {
                                                      color: "error",
                                                      variant: "outlined",
                                                      onClick: resetForm
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Discard ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(name),
                                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                  label: "Full Name",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "John Doe"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  label: "Email Address",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                  placeholder: "johndoe@email.com"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(mobile),
                                                  "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                                  label: "Mobile Number",
                                                  type: "number",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "+(123) 456-7890"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(addressLine1),
                                                  "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                                  label: "Address Line 1*",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "45, Rocker Terrace"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(addressLine2),
                                                  "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                                  placeholder: "Empire Heights,",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Address Line 2*"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(town),
                                                  "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                                  label: "Town*",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "New York"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(state),
                                                  "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                                  placeholder: "Texas",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "State/Province*"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(postCode),
                                                  "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                                  label: "Post Code*",
                                                  type: "number",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "982347"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(country),
                                                  "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                  placeholder: "United States",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Country",
                                                  items: ["United States", "United Kingdom", "Canada"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                                  createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                    createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                                    createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                                  ]),
                                                  createVNode(VSwitch, {
                                                    modelValue: unref(isBillingAddress),
                                                    "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex justify-start" }, [
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    color: "primary",
                                                    class: "me-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Add ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    color: "error",
                                                    variant: "outlined",
                                                    onClick: resetForm
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Discard ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(name),
                                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                label: "Full Name",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "John Doe"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                label: "Email Address",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                placeholder: "johndoe@email.com"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(mobile),
                                                "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                                label: "Mobile Number",
                                                type: "number",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "+(123) 456-7890"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(addressLine1),
                                                "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                                label: "Address Line 1*",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "45, Rocker Terrace"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(addressLine2),
                                                "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                                placeholder: "Empire Heights,",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Address Line 2*"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(town),
                                                "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                                label: "Town*",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "New York"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(state),
                                                "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                                placeholder: "Texas",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "State/Province*"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(postCode),
                                                "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                                label: "Post Code*",
                                                type: "number",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "982347"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(country),
                                                "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                placeholder: "United States",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Country",
                                                items: ["United States", "United Kingdom", "Canada"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                                createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                  createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                                  createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                                ]),
                                                createVNode(VSwitch, {
                                                  modelValue: unref(isBillingAddress),
                                                  "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex justify-start" }, [
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  color: "primary",
                                                  class: "me-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Add ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  color: "error",
                                                  variant: "outlined",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Discard ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VForm), {
                                  ref_key: "refVForm",
                                  ref: refVForm,
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(name),
                                              "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                              label: "Full Name",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              label: "Email Address",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                              placeholder: "johndoe@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(mobile),
                                              "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                              label: "Mobile Number",
                                              type: "number",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "+(123) 456-7890"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(addressLine1),
                                              "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                              label: "Address Line 1*",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "45, Rocker Terrace"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(addressLine2),
                                              "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                              placeholder: "Empire Heights,",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Address Line 2*"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(town),
                                              "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                              label: "Town*",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "New York"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(state),
                                              "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                              placeholder: "Texas",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "State/Province*"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(postCode),
                                              "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                              label: "Post Code*",
                                              type: "number",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "982347"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(country),
                                              "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                              placeholder: "United States",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Country",
                                              items: ["United States", "United Kingdom", "Canada"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-space-between" }, [
                                              createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                                createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                              ]),
                                              createVNode(VSwitch, {
                                                modelValue: unref(isBillingAddress),
                                                "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-start" }, [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                color: "primary",
                                                class: "me-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Add ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "error",
                                                variant: "outlined",
                                                onClick: resetForm
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Discard ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { style: { "block-size": "calc(100vh - 5rem)" } }, {
                            default: withCtx(() => [
                              createVNode(unref(VForm), {
                                ref_key: "refVForm",
                                ref: refVForm,
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(name),
                                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                            label: "Full Name",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            label: "Email Address",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(mobile),
                                            "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                            label: "Mobile Number",
                                            type: "number",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "+(123) 456-7890"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(addressLine1),
                                            "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                            label: "Address Line 1*",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "45, Rocker Terrace"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(addressLine2),
                                            "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                            placeholder: "Empire Heights,",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Address Line 2*"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(town),
                                            "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                            label: "Town*",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "New York"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(state),
                                            "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                            placeholder: "Texas",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "State/Province*"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(postCode),
                                            "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                            label: "Post Code*",
                                            type: "number",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "982347"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(country),
                                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                            placeholder: "United States",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Country",
                                            items: ["United States", "United Kingdom", "Canada"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between" }, [
                                            createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                              createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                              createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                            ]),
                                            createVNode(VSwitch, {
                                              modelValue: unref(isBillingAddress),
                                              "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-start" }, [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              color: "primary",
                                              class: "me-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Add ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "error",
                                              variant: "outlined",
                                              onClick: resetForm
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Discard ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PerfectScrollbar), {
                      options: { wheelPropagation: false },
                      class: "h-100"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { style: { "block-size": "calc(100vh - 5rem)" } }, {
                          default: withCtx(() => [
                            createVNode(unref(VForm), {
                              ref_key: "refVForm",
                              ref: refVForm,
                              onSubmit: withModifiers(() => {
                              }, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(name),
                                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                          label: "Full Name",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "John Doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(email),
                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                          label: "Email Address",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                          placeholder: "johndoe@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(mobile),
                                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                          label: "Mobile Number",
                                          type: "number",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "+(123) 456-7890"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(addressLine1),
                                          "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                          label: "Address Line 1*",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "45, Rocker Terrace"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(addressLine2),
                                          "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                          placeholder: "Empire Heights,",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Address Line 2*"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(town),
                                          "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                          label: "Town*",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "New York"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(state),
                                          "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                          placeholder: "Texas",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "State/Province*"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(postCode),
                                          "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                          label: "Post Code*",
                                          type: "number",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "982347"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(country),
                                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                          placeholder: "United States",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Country",
                                          items: ["United States", "United Kingdom", "Canada"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                            createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                            createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                          ]),
                                          createVNode(VSwitch, {
                                            modelValue: unref(isBillingAddress),
                                            "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-start" }, [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            color: "primary",
                                            class: "me-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Add ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "error",
                                            variant: "outlined",
                                            onClick: resetForm
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Discard ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppDrawerHeaderSection, {
                title: "Add a Customer",
                onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
              }, null, 8, ["onCancel"]),
              createVNode(VDivider),
              createVNode(VCard, { flat: "" }, {
                default: withCtx(() => [
                  createVNode(unref(PerfectScrollbar), {
                    options: { wheelPropagation: false },
                    class: "h-100"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { style: { "block-size": "calc(100vh - 5rem)" } }, {
                        default: withCtx(() => [
                          createVNode(unref(VForm), {
                            ref_key: "refVForm",
                            ref: refVForm,
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Basic Information ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(name),
                                        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                        label: "Full Name",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "John Doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        label: "Email Address",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(mobile),
                                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                        label: "Mobile Number",
                                        type: "number",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "+(123) 456-7890"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Shipping Information ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(addressLine1),
                                        "onUpdate:modelValue": ($event) => isRef(addressLine1) ? addressLine1.value = $event : null,
                                        label: "Address Line 1*",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "45, Rocker Terrace"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(addressLine2),
                                        "onUpdate:modelValue": ($event) => isRef(addressLine2) ? addressLine2.value = $event : null,
                                        placeholder: "Empire Heights,",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Address Line 2*"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(town),
                                        "onUpdate:modelValue": ($event) => isRef(town) ? town.value = $event : null,
                                        label: "Town*",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "New York"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(state),
                                        "onUpdate:modelValue": ($event) => isRef(state) ? state.value = $event : null,
                                        placeholder: "Texas",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "State/Province*"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(postCode),
                                        "onUpdate:modelValue": ($event) => isRef(postCode) ? postCode.value = $event : null,
                                        label: "Post Code*",
                                        type: "number",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "982347"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(country),
                                        "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                        placeholder: "United States",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Country",
                                        items: ["United States", "United Kingdom", "Canada"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between" }, [
                                        createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                          createVNode("h6", { class: "text-h6" }, " Use as a billing address? "),
                                          createVNode("span", { class: "text-sm" }, "Please check budget for more info")
                                        ]),
                                        createVNode(VSwitch, {
                                          modelValue: unref(isBillingAddress),
                                          "onUpdate:modelValue": ($event) => isRef(isBillingAddress) ? isBillingAddress.value = $event : null
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-start" }, [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          color: "primary",
                                          class: "me-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Add ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "error",
                                          variant: "outlined",
                                          onClick: resetForm
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Discard ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const isAddCustomerDrawerOpen = ref(false);
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const headers = [
      {
        title: "Customer",
        key: "customer"
      },
      {
        title: "Customer Id",
        key: "customerId"
      },
      {
        title: "Country",
        key: "country"
      },
      {
        title: "Orders",
        key: "orders"
      },
      {
        title: "Total Spent",
        key: "totalSpent"
      }
    ];
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const { data: customerData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/ecommerce/customers", {
      query: {
        q: searchQuery,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const customers = computed(() => customerData.value.customers);
    const totalCustomers = computed(() => customerData.value.total);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between flex-wrap gap-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    style: { "max-inline-size": "200px", "min-inline-size": "200px" },
                    density: "compact",
                    placeholder: "Search .."
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-row gap-4 align-center flex-wrap"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "ri-upload-2-line",
                    variant: "outlined",
                    color: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Export `);
                      } else {
                        return [
                          createTextVNode(" Export ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "ri-add-line",
                    onClick: ($event) => isAddCustomerDrawerOpen.value = !unref(isAddCustomerDrawerOpen)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add Customer `);
                      } else {
                        return [
                          createTextVNode(" Add Customer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-y-4" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        style: { "max-inline-size": "200px", "min-inline-size": "200px" },
                        density: "compact",
                        placeholder: "Search .."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "d-flex flex-row gap-4 align-center flex-wrap" }, [
                        createVNode(VBtn, {
                          "prepend-icon": "ri-upload-2-line",
                          variant: "outlined",
                          color: "secondary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Export ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isAddCustomerDrawerOpen.value = !unref(isAddCustomerDrawerOpen)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add Customer ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTableServer, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              page: unref(page),
              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
              items: unref(customers),
              "item-value": "customer",
              headers,
              "items-length": unref(totalCustomers),
              "show-select": "",
              class: "text-no-wrap",
              "onUpdate:options": updateOptions
            }, {
              "item.customer": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    image: item.avatar
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-ecommerce-customer-details-id", params: { id: item.customerId } },
                    class: "text-link font-weight-medium"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.customer)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.customer), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(item.email)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        image: item.avatar
                      }, null, 8, ["image"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_RouterLink, {
                          to: { name: "apps-ecommerce-customer-details-id", params: { id: item.customerId } },
                          class: "text-link font-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.customer), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("span", { class: "text-sm" }, toDisplayString(item.email), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.customerId": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 font-weight-regular"${_scopeId2}> #${ssrInterpolate(item.customerId)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " #" + toDisplayString(item.customerId), 1)
                  ];
                }
              }),
              "item.orders": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.order)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.order), 1)
                  ];
                }
              }),
              "item.country": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-x-2"${_scopeId2}><img${ssrRenderAttr("src", item.countryFlag)} height="22" width="22"${_scopeId2}><span class="text-body-1"${_scopeId2}>${ssrInterpolate(item.country)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-x-2" }, [
                      createVNode("img", {
                        src: item.countryFlag,
                        height: "22",
                        width: "22"
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "text-body-1" }, toDisplayString(item.country), 1)
                    ])
                  ];
                }
              }),
              "item.totalSpent": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}> $${ssrInterpolate(item.totalSpent)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, " $" + toDisplayString(item.totalSpent), 1)
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1"${_scopeId2}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base"${_scopeId2}> Rows Per Page: `);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(itemsPerPage),
                    "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                    class: "per-page-select",
                    variant: "plain",
                    items: [10, 20, 25, 50, 100]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalCustomers)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    class: "flip-in-rtl",
                    icon: "ri-arrow-left-s-line",
                    variant: "text",
                    density: "comfortable",
                    color: "high-emphasis",
                    disabled: unref(page) <= 1,
                    onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "flip-in-rtl",
                    icon: "ri-arrow-right-s-line",
                    density: "comfortable",
                    variant: "text",
                    color: "high-emphasis",
                    disabled: unref(page) >= Math.ceil(unref(totalCustomers) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalCustomers) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalCustomers) / unref(itemsPerPage)) : page.value++
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(VDivider),
                    createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                      createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                        createTextVNode(" Rows Per Page: "),
                        createVNode(VSelect, {
                          modelValue: unref(itemsPerPage),
                          "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                          class: "per-page-select",
                          variant: "plain",
                          items: [10, 20, 25, 50, 100]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalCustomers))), 1),
                      createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                        createVNode(VBtn, {
                          class: "flip-in-rtl",
                          icon: "ri-arrow-left-s-line",
                          variant: "text",
                          density: "comfortable",
                          color: "high-emphasis",
                          disabled: unref(page) <= 1,
                          onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                        }, null, 8, ["disabled", "onClick"]),
                        createVNode(VBtn, {
                          class: "flip-in-rtl",
                          icon: "ri-arrow-right-s-line",
                          density: "comfortable",
                          variant: "text",
                          color: "high-emphasis",
                          disabled: unref(page) >= Math.ceil(unref(totalCustomers) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalCustomers) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalCustomers) / unref(itemsPerPage)) : page.value++
                        }, null, 8, ["disabled", "onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-y-4" }, [
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      style: { "max-inline-size": "200px", "min-inline-size": "200px" },
                      density: "compact",
                      placeholder: "Search .."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "d-flex flex-row gap-4 align-center flex-wrap" }, [
                      createVNode(VBtn, {
                        "prepend-icon": "ri-upload-2-line",
                        variant: "outlined",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Export ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        "prepend-icon": "ri-add-line",
                        onClick: ($event) => isAddCustomerDrawerOpen.value = !unref(isAddCustomerDrawerOpen)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add Customer ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                items: unref(customers),
                "item-value": "customer",
                headers,
                "items-length": unref(totalCustomers),
                "show-select": "",
                class: "text-no-wrap",
                "onUpdate:options": updateOptions
              }, {
                "item.customer": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      image: item.avatar
                    }, null, 8, ["image"]),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_RouterLink, {
                        to: { name: "apps-ecommerce-customer-details-id", params: { id: item.customerId } },
                        class: "text-link font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.customer), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("span", { class: "text-sm" }, toDisplayString(item.email), 1)
                    ])
                  ])
                ]),
                "item.customerId": withCtx(({ item }) => [
                  createVNode("h6", { class: "text-h6 font-weight-regular" }, " #" + toDisplayString(item.customerId), 1)
                ]),
                "item.orders": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.order), 1)
                ]),
                "item.country": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-x-2" }, [
                    createVNode("img", {
                      src: item.countryFlag,
                      height: "22",
                      width: "22"
                    }, null, 8, ["src"]),
                    createVNode("span", { class: "text-body-1" }, toDisplayString(item.country), 1)
                  ])
                ]),
                "item.totalSpent": withCtx(({ item }) => [
                  createVNode("h6", { class: "text-h6" }, " $" + toDisplayString(item.totalSpent), 1)
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                    createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                      createTextVNode(" Rows Per Page: "),
                      createVNode(VSelect, {
                        modelValue: unref(itemsPerPage),
                        "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                        class: "per-page-select",
                        variant: "plain",
                        items: [10, 20, 25, 50, 100]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalCustomers))), 1),
                    createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                      createVNode(VBtn, {
                        class: "flip-in-rtl",
                        icon: "ri-arrow-left-s-line",
                        variant: "text",
                        density: "comfortable",
                        color: "high-emphasis",
                        disabled: unref(page) <= 1,
                        onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(VBtn, {
                        class: "flip-in-rtl",
                        icon: "ri-arrow-right-s-line",
                        density: "comfortable",
                        variant: "text",
                        color: "high-emphasis",
                        disabled: unref(page) >= Math.ceil(unref(totalCustomers) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalCustomers) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalCustomers) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        "is-drawer-open": unref(isAddCustomerDrawerOpen),
        "onUpdate:isDrawerOpen": ($event) => isRef(isAddCustomerDrawerOpen) ? isAddCustomerDrawerOpen.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/customer/list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
