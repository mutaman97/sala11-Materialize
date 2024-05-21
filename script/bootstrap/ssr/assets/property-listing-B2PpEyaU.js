import { _ as _sfc_main$7 } from "./AppStepper-DSePPp52.js";
import { ref, watch, withCtx, unref, createVNode, useSSRContext, isRef, createTextVNode, openBlock, createBlock } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as __unplugin_components_0 } from "./CustomRadiosWithIcon-CXRflZSC.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { _ as _sfc_main$6 } from "./AppDateTimePicker-B0c_dYDs.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VBtn, a as VIcon } from "../ssr.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroupItem-CIJ0uuo8.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VImg-D-rbsD1g.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VAvatar-D2wIwigQ.js";
import "./VDivider-o5iRKh3w.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "vue-flatpickr-component";
import "@vueuse/core";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
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
const _sfc_main$5 = {
  __name: "PersonalDetails",
  __ssrInlineRender: true,
  props: {
    formData: {
      type: null,
      required: true
    }
  },
  emits: ["update:formData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const propertyRadioContent = [
      {
        title: "I am the builder",
        desc: "List property as Builder, list your project and get highest reach fast.",
        icon: "ri-home-6-line",
        value: "builder"
      },
      {
        title: "I am the owner",
        desc: "Submit property as an Individual. Lease, Rent or Sell at the best price.",
        icon: "ri-user-3-line",
        value: "owner"
      },
      {
        title: "I am the broker",
        desc: "Earn highest commission by listing your clients properties at best price.",
        value: "broker",
        icon: "ri-money-dollar-circle-line"
      }
    ];
    const formData = ref(props.formData);
    watch(formData, () => {
      emit("update:formData", formData.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadiosWithIcon = __unplugin_components_0;
      _push(ssrRenderComponent(VForm, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CustomRadiosWithIcon, {
                          "selected-radio": unref(formData).userType,
                          "onUpdate:selectedRadio": ($event) => unref(formData).userType = $event,
                          "radio-content": propertyRadioContent,
                          "grid-column": { cols: "12", sm: "4" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CustomRadiosWithIcon, {
                            "selected-radio": unref(formData).userType,
                            "onUpdate:selectedRadio": ($event) => unref(formData).userType = $event,
                            "radio-content": propertyRadioContent,
                            "grid-column": { cols: "12", sm: "4" }
                          }, null, 8, ["selected-radio", "onUpdate:selectedRadio"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).firstName,
                          "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                          class: "text-center",
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).firstName,
                            "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                            class: "text-center",
                            label: "First Name",
                            placeholder: "John"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).lastName,
                          "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                          label: "Last Name",
                          placeholder: "Doe"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).lastName,
                            "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                            label: "Last Name",
                            placeholder: "Doe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).username,
                          "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                          label: "Username",
                          placeholder: "Johndoe"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).username,
                            "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                            label: "Username",
                            placeholder: "Johndoe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).password,
                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                          autocomplete: "on",
                          type: "password",
                          label: "Password",
                          placeholder: "············"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).password,
                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                            autocomplete: "on",
                            type: "password",
                            label: "Password",
                            placeholder: "············"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).email,
                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                          type: "email",
                          label: "Email",
                          placeholder: "john.doe@email.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).email,
                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                            type: "email",
                            label: "Email",
                            placeholder: "john.doe@email.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).contact,
                          "onUpdate:modelValue": ($event) => unref(formData).contact = $event,
                          type: "number",
                          label: "Contact",
                          placeholder: "+1 123 456 7890"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).contact,
                            "onUpdate:modelValue": ($event) => unref(formData).contact = $event,
                            type: "number",
                            label: "Contact",
                            placeholder: "+1 123 456 7890"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_component_CustomRadiosWithIcon, {
                          "selected-radio": unref(formData).userType,
                          "onUpdate:selectedRadio": ($event) => unref(formData).userType = $event,
                          "radio-content": propertyRadioContent,
                          "grid-column": { cols: "12", sm: "4" }
                        }, null, 8, ["selected-radio", "onUpdate:selectedRadio"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).firstName,
                          "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                          class: "text-center",
                          label: "First Name",
                          placeholder: "John"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).lastName,
                          "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                          label: "Last Name",
                          placeholder: "Doe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).username,
                          "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                          label: "Username",
                          placeholder: "Johndoe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).password,
                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                          autocomplete: "on",
                          type: "password",
                          label: "Password",
                          placeholder: "············"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).email,
                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                          type: "email",
                          label: "Email",
                          placeholder: "john.doe@email.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).contact,
                          "onUpdate:modelValue": ($event) => unref(formData).contact = $event,
                          type: "number",
                          label: "Contact",
                          placeholder: "+1 123 456 7890"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_CustomRadiosWithIcon, {
                        "selected-radio": unref(formData).userType,
                        "onUpdate:selectedRadio": ($event) => unref(formData).userType = $event,
                        "radio-content": propertyRadioContent,
                        "grid-column": { cols: "12", sm: "4" }
                      }, null, 8, ["selected-radio", "onUpdate:selectedRadio"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).firstName,
                        "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                        class: "text-center",
                        label: "First Name",
                        placeholder: "John"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).lastName,
                        "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                        label: "Last Name",
                        placeholder: "Doe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).username,
                        "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                        label: "Username",
                        placeholder: "Johndoe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).password,
                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                        autocomplete: "on",
                        type: "password",
                        label: "Password",
                        placeholder: "············"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).email,
                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                        type: "email",
                        label: "Email",
                        placeholder: "john.doe@email.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).contact,
                        "onUpdate:modelValue": ($event) => unref(formData).contact = $event,
                        type: "number",
                        label: "Contact",
                        placeholder: "+1 123 456 7890"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/property-listing/PersonalDetails.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "PriceDetails",
  __ssrInlineRender: true,
  props: {
    formData: {
      type: null,
      required: true
    }
  },
  emits: ["update:formData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = ref(props.formData);
    watch(formData, () => {
      emit("update:formData", formData.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).expectedPrice,
                          "onUpdate:modelValue": ($event) => unref(formData).expectedPrice = $event,
                          label: "Expected Price",
                          type: "number",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          placeholder: "25,000"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).expectedPrice,
                            "onUpdate:modelValue": ($event) => unref(formData).expectedPrice = $event,
                            label: "Expected Price",
                            type: "number",
                            "append-inner-icon": "ri-money-dollar-circle-line",
                            placeholder: "25,000"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).pricePerSqft,
                          "onUpdate:modelValue": ($event) => unref(formData).pricePerSqft = $event,
                          label: "Price Per SQFT",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "500"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).pricePerSqft,
                            "onUpdate:modelValue": ($event) => unref(formData).pricePerSqft = $event,
                            label: "Price Per SQFT",
                            "append-inner-icon": "ri-money-dollar-circle-line",
                            type: "number",
                            placeholder: "500"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).maintenanceCharge,
                          "onUpdate:modelValue": ($event) => unref(formData).maintenanceCharge = $event,
                          label: "Maintenance Charge",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "50"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).maintenanceCharge,
                            "onUpdate:modelValue": ($event) => unref(formData).maintenanceCharge = $event,
                            label: "Maintenance Charge",
                            "append-inner-icon": "ri-money-dollar-circle-line",
                            type: "number",
                            placeholder: "50"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(formData).maintenancePeriod,
                          "onUpdate:modelValue": ($event) => unref(formData).maintenancePeriod = $event,
                          label: "Maintenance Period",
                          placeholder: "Select Maintenance Period",
                          items: ["Monthly", "Quarterly", "Half Yearly", "Yearly"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).maintenancePeriod,
                            "onUpdate:modelValue": ($event) => unref(formData).maintenancePeriod = $event,
                            label: "Maintenance Period",
                            placeholder: "Select Maintenance Period",
                            items: ["Monthly", "Quarterly", "Half Yearly", "Yearly"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).bookingAmount,
                          "onUpdate:modelValue": ($event) => unref(formData).bookingAmount = $event,
                          label: "Booking/Token Amount",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "250"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).bookingAmount,
                            "onUpdate:modelValue": ($event) => unref(formData).bookingAmount = $event,
                            label: "Booking/Token Amount",
                            "append-inner-icon": "ri-money-dollar-circle-line",
                            type: "number",
                            placeholder: "250"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).otherAmount,
                          "onUpdate:modelValue": ($event) => unref(formData).otherAmount = $event,
                          label: "Other Amount",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "500"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).otherAmount,
                            "onUpdate:modelValue": ($event) => unref(formData).otherAmount = $event,
                            label: "Other Amount",
                            "append-inner-icon": "ri-money-dollar-circle-line",
                            type: "number",
                            placeholder: "500"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).priceDisplayType,
                          "onUpdate:modelValue": ($event) => unref(formData).priceDisplayType = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Show Price As </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Show Price As ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Negotiable",
                                value: "Negotiable"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Call For Price",
                                value: "Call For Price"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  label: "Negotiable",
                                  value: "Negotiable"
                                }),
                                createVNode(VRadio, {
                                  label: "Call For Price",
                                  value: "Call For Price"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).priceDisplayType,
                            "onUpdate:modelValue": ($event) => unref(formData).priceDisplayType = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Show Price As ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                label: "Negotiable",
                                value: "Negotiable"
                              }),
                              createVNode(VRadio, {
                                label: "Call For Price",
                                value: "Call For Price"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 text-base"${_scopeId3}> Price Includes </div>`);
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(formData).priceIncludes,
                          "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                          label: "Car Parking",
                          value: "Car Parking"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(formData).priceIncludes,
                          "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                          label: "Club Membership",
                          value: "Club Membership"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 text-base" }, " Price Includes "),
                          createVNode(VCheckbox, {
                            modelValue: unref(formData).priceIncludes,
                            "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                            label: "Car Parking",
                            value: "Car Parking"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VCheckbox, {
                            modelValue: unref(formData).priceIncludes,
                            "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                            label: "Club Membership",
                            value: "Club Membership"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).expectedPrice,
                          "onUpdate:modelValue": ($event) => unref(formData).expectedPrice = $event,
                          label: "Expected Price",
                          type: "number",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          placeholder: "25,000"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).pricePerSqft,
                          "onUpdate:modelValue": ($event) => unref(formData).pricePerSqft = $event,
                          label: "Price Per SQFT",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "500"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).maintenanceCharge,
                          "onUpdate:modelValue": ($event) => unref(formData).maintenanceCharge = $event,
                          label: "Maintenance Charge",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "50"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(formData).maintenancePeriod,
                          "onUpdate:modelValue": ($event) => unref(formData).maintenancePeriod = $event,
                          label: "Maintenance Period",
                          placeholder: "Select Maintenance Period",
                          items: ["Monthly", "Quarterly", "Half Yearly", "Yearly"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).bookingAmount,
                          "onUpdate:modelValue": ($event) => unref(formData).bookingAmount = $event,
                          label: "Booking/Token Amount",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "250"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).otherAmount,
                          "onUpdate:modelValue": ($event) => unref(formData).otherAmount = $event,
                          label: "Other Amount",
                          "append-inner-icon": "ri-money-dollar-circle-line",
                          type: "number",
                          placeholder: "500"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).priceDisplayType,
                          "onUpdate:modelValue": ($event) => unref(formData).priceDisplayType = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Show Price As ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              label: "Negotiable",
                              value: "Negotiable"
                            }),
                            createVNode(VRadio, {
                              label: "Call For Price",
                              value: "Call For Price"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 text-base" }, " Price Includes "),
                        createVNode(VCheckbox, {
                          modelValue: unref(formData).priceIncludes,
                          "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                          label: "Car Parking",
                          value: "Car Parking"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VCheckbox, {
                          modelValue: unref(formData).priceIncludes,
                          "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                          label: "Club Membership",
                          value: "Club Membership"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).expectedPrice,
                        "onUpdate:modelValue": ($event) => unref(formData).expectedPrice = $event,
                        label: "Expected Price",
                        type: "number",
                        "append-inner-icon": "ri-money-dollar-circle-line",
                        placeholder: "25,000"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).pricePerSqft,
                        "onUpdate:modelValue": ($event) => unref(formData).pricePerSqft = $event,
                        label: "Price Per SQFT",
                        "append-inner-icon": "ri-money-dollar-circle-line",
                        type: "number",
                        placeholder: "500"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).maintenanceCharge,
                        "onUpdate:modelValue": ($event) => unref(formData).maintenanceCharge = $event,
                        label: "Maintenance Charge",
                        "append-inner-icon": "ri-money-dollar-circle-line",
                        type: "number",
                        placeholder: "50"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(formData).maintenancePeriod,
                        "onUpdate:modelValue": ($event) => unref(formData).maintenancePeriod = $event,
                        label: "Maintenance Period",
                        placeholder: "Select Maintenance Period",
                        items: ["Monthly", "Quarterly", "Half Yearly", "Yearly"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).bookingAmount,
                        "onUpdate:modelValue": ($event) => unref(formData).bookingAmount = $event,
                        label: "Booking/Token Amount",
                        "append-inner-icon": "ri-money-dollar-circle-line",
                        type: "number",
                        placeholder: "250"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).otherAmount,
                        "onUpdate:modelValue": ($event) => unref(formData).otherAmount = $event,
                        label: "Other Amount",
                        "append-inner-icon": "ri-money-dollar-circle-line",
                        type: "number",
                        placeholder: "500"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).priceDisplayType,
                        "onUpdate:modelValue": ($event) => unref(formData).priceDisplayType = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Show Price As ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            label: "Negotiable",
                            value: "Negotiable"
                          }),
                          createVNode(VRadio, {
                            label: "Call For Price",
                            value: "Call For Price"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 text-base" }, " Price Includes "),
                      createVNode(VCheckbox, {
                        modelValue: unref(formData).priceIncludes,
                        "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                        label: "Car Parking",
                        value: "Car Parking"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VCheckbox, {
                        modelValue: unref(formData).priceIncludes,
                        "onUpdate:modelValue": ($event) => unref(formData).priceIncludes = $event,
                        label: "Club Membership",
                        value: "Club Membership"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/property-listing/PriceDetails.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "PropertyArea",
  __ssrInlineRender: true,
  props: {
    formData: {
      type: null,
      required: true
    }
  },
  emits: ["update:formData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = ref(props.formData);
    watch(formData, () => {
      emit("update:formData", formData.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$6;
      _push(ssrRenderComponent(VForm, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).totalArea,
                          "onUpdate:modelValue": ($event) => unref(formData).totalArea = $event,
                          label: "Total Area",
                          suffix: "sq-ft",
                          type: "number",
                          placeholder: "1000"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).totalArea,
                            "onUpdate:modelValue": ($event) => unref(formData).totalArea = $event,
                            label: "Total Area",
                            suffix: "sq-ft",
                            type: "number",
                            placeholder: "1000"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).carpetArea,
                          "onUpdate:modelValue": ($event) => unref(formData).carpetArea = $event,
                          label: "Carpet Area",
                          suffix: "sq-ft",
                          type: "number",
                          placeholder: "800"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).carpetArea,
                            "onUpdate:modelValue": ($event) => unref(formData).carpetArea = $event,
                            label: "Carpet Area",
                            suffix: "sq-ft",
                            type: "number",
                            placeholder: "800"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).plotArea,
                          "onUpdate:modelValue": ($event) => unref(formData).plotArea = $event,
                          label: "Plot Area",
                          suffix: "sq-ft",
                          type: "number",
                          placeholder: "800"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).plotArea,
                            "onUpdate:modelValue": ($event) => unref(formData).plotArea = $event,
                            label: "Plot Area",
                            suffix: "sq-ft",
                            type: "number",
                            placeholder: "800"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(formData).availableFrom,
                          "onUpdate:modelValue": ($event) => unref(formData).availableFrom = $event,
                          label: "Available From",
                          type: "date",
                          placeholder: "Select Date",
                          format: "YYYY-MM-DD"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(formData).availableFrom,
                            "onUpdate:modelValue": ($event) => unref(formData).availableFrom = $event,
                            label: "Available From",
                            type: "date",
                            placeholder: "Select Date",
                            format: "YYYY-MM-DD"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).possessionStatus,
                          "onUpdate:modelValue": ($event) => unref(formData).possessionStatus = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Possession Status </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Possession Status ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                value: "Under Construciton",
                                label: "Under Construction"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                value: "Ready to Move",
                                label: "Ready to Move"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  value: "Under Construciton",
                                  label: "Under Construction"
                                }),
                                createVNode(VRadio, {
                                  value: "Ready to Move",
                                  label: "Ready to Move"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).possessionStatus,
                            "onUpdate:modelValue": ($event) => unref(formData).possessionStatus = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Possession Status ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                value: "Under Construciton",
                                label: "Under Construction"
                              }),
                              createVNode(VRadio, {
                                value: "Ready to Move",
                                label: "Ready to Move"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).transactionType,
                          "onUpdate:modelValue": ($event) => unref(formData).transactionType = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Transaction Type </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Transaction Type ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                value: "New Property",
                                label: "New Property"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                value: "Resale",
                                label: "Resale"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  value: "New Property",
                                  label: "New Property"
                                }),
                                createVNode(VRadio, {
                                  value: "Resale",
                                  label: "Resale"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).transactionType,
                            "onUpdate:modelValue": ($event) => unref(formData).transactionType = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Transaction Type ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                value: "New Property",
                                label: "New Property"
                              }),
                              createVNode(VRadio, {
                                value: "Resale",
                                label: "Resale"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).isOnMainRoad,
                          "onUpdate:modelValue": ($event) => unref(formData).isOnMainRoad = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Is Property Facing Main Road? </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Is Property Facing Main Road? ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                value: "Yes",
                                label: "Yes"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                value: "No",
                                label: "No"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  value: "Yes",
                                  label: "Yes"
                                }),
                                createVNode(VRadio, {
                                  value: "No",
                                  label: "No"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).isOnMainRoad,
                            "onUpdate:modelValue": ($event) => unref(formData).isOnMainRoad = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Is Property Facing Main Road? ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                value: "Yes",
                                label: "Yes"
                              }),
                              createVNode(VRadio, {
                                value: "No",
                                label: "No"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).isGatedColony,
                          "onUpdate:modelValue": ($event) => unref(formData).isGatedColony = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Gated Colony </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Gated Colony ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                value: "Yes",
                                label: "Yes"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                value: "No",
                                label: "No"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  value: "Yes",
                                  label: "Yes"
                                }),
                                createVNode(VRadio, {
                                  value: "No",
                                  label: "No"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).isGatedColony,
                            "onUpdate:modelValue": ($event) => unref(formData).isGatedColony = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Gated Colony ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                value: "Yes",
                                label: "Yes"
                              }),
                              createVNode(VRadio, {
                                value: "No",
                                label: "No"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).totalArea,
                          "onUpdate:modelValue": ($event) => unref(formData).totalArea = $event,
                          label: "Total Area",
                          suffix: "sq-ft",
                          type: "number",
                          placeholder: "1000"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).carpetArea,
                          "onUpdate:modelValue": ($event) => unref(formData).carpetArea = $event,
                          label: "Carpet Area",
                          suffix: "sq-ft",
                          type: "number",
                          placeholder: "800"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).plotArea,
                          "onUpdate:modelValue": ($event) => unref(formData).plotArea = $event,
                          label: "Plot Area",
                          suffix: "sq-ft",
                          type: "number",
                          placeholder: "800"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(formData).availableFrom,
                          "onUpdate:modelValue": ($event) => unref(formData).availableFrom = $event,
                          label: "Available From",
                          type: "date",
                          placeholder: "Select Date",
                          format: "YYYY-MM-DD"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).possessionStatus,
                          "onUpdate:modelValue": ($event) => unref(formData).possessionStatus = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Possession Status ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              value: "Under Construciton",
                              label: "Under Construction"
                            }),
                            createVNode(VRadio, {
                              value: "Ready to Move",
                              label: "Ready to Move"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).transactionType,
                          "onUpdate:modelValue": ($event) => unref(formData).transactionType = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Transaction Type ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              value: "New Property",
                              label: "New Property"
                            }),
                            createVNode(VRadio, {
                              value: "Resale",
                              label: "Resale"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).isOnMainRoad,
                          "onUpdate:modelValue": ($event) => unref(formData).isOnMainRoad = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Is Property Facing Main Road? ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              value: "Yes",
                              label: "Yes"
                            }),
                            createVNode(VRadio, {
                              value: "No",
                              label: "No"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).isGatedColony,
                          "onUpdate:modelValue": ($event) => unref(formData).isGatedColony = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Gated Colony ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              value: "Yes",
                              label: "Yes"
                            }),
                            createVNode(VRadio, {
                              value: "No",
                              label: "No"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).totalArea,
                        "onUpdate:modelValue": ($event) => unref(formData).totalArea = $event,
                        label: "Total Area",
                        suffix: "sq-ft",
                        type: "number",
                        placeholder: "1000"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).carpetArea,
                        "onUpdate:modelValue": ($event) => unref(formData).carpetArea = $event,
                        label: "Carpet Area",
                        suffix: "sq-ft",
                        type: "number",
                        placeholder: "800"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).plotArea,
                        "onUpdate:modelValue": ($event) => unref(formData).plotArea = $event,
                        label: "Plot Area",
                        suffix: "sq-ft",
                        type: "number",
                        placeholder: "800"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: unref(formData).availableFrom,
                        "onUpdate:modelValue": ($event) => unref(formData).availableFrom = $event,
                        label: "Available From",
                        type: "date",
                        placeholder: "Select Date",
                        format: "YYYY-MM-DD"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).possessionStatus,
                        "onUpdate:modelValue": ($event) => unref(formData).possessionStatus = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Possession Status ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            value: "Under Construciton",
                            label: "Under Construction"
                          }),
                          createVNode(VRadio, {
                            value: "Ready to Move",
                            label: "Ready to Move"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).transactionType,
                        "onUpdate:modelValue": ($event) => unref(formData).transactionType = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Transaction Type ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            value: "New Property",
                            label: "New Property"
                          }),
                          createVNode(VRadio, {
                            value: "Resale",
                            label: "Resale"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).isOnMainRoad,
                        "onUpdate:modelValue": ($event) => unref(formData).isOnMainRoad = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Is Property Facing Main Road? ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            value: "Yes",
                            label: "Yes"
                          }),
                          createVNode(VRadio, {
                            value: "No",
                            label: "No"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).isGatedColony,
                        "onUpdate:modelValue": ($event) => unref(formData).isGatedColony = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Gated Colony ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            value: "Yes",
                            label: "Yes"
                          }),
                          createVNode(VRadio, {
                            value: "No",
                            label: "No"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/property-listing/PropertyArea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PropertyDetails",
  __ssrInlineRender: true,
  props: {
    formData: {
      type: null,
      required: true
    }
  },
  emits: ["update:formData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const radioContent = [
      {
        title: "Sell the property",
        desc: "Post your property for sale. Unlimited free listing.",
        icon: "ri-money-dollar-circle-line",
        value: "sell"
      },
      {
        title: "Rent the property",
        desc: "Post your property for rent. Unlimited free listing.",
        icon: "ri-home-6-line",
        value: "rent"
      }
    ];
    const formData = ref(props.formData);
    watch(formData, () => {
      emit("update:formData", formData.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadiosWithIcon = __unplugin_components_0;
      _push(ssrRenderComponent(VForm, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CustomRadiosWithIcon, {
                          "selected-radio": unref(formData).propertyDealType,
                          "onUpdate:selectedRadio": ($event) => unref(formData).propertyDealType = $event,
                          "radio-content": radioContent,
                          "grid-column": { cols: "12", sm: "6" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CustomRadiosWithIcon, {
                            "selected-radio": unref(formData).propertyDealType,
                            "onUpdate:selectedRadio": ($event) => unref(formData).propertyDealType = $event,
                            "radio-content": radioContent,
                            "grid-column": { cols: "12", sm: "6" }
                          }, null, 8, ["selected-radio", "onUpdate:selectedRadio"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(formData).propertyType,
                          "onUpdate:modelValue": ($event) => unref(formData).propertyType = $event,
                          label: "Property type",
                          placeholder: "Select Property Type",
                          items: ["Residential", "Commercial"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).propertyType,
                            "onUpdate:modelValue": ($event) => unref(formData).propertyType = $event,
                            label: "Property type",
                            placeholder: "Select Property Type",
                            items: ["Residential", "Commercial"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).zipCode,
                          "onUpdate:modelValue": ($event) => unref(formData).zipCode = $event,
                          label: "Zip Code",
                          type: "number",
                          placeholder: "123456"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).zipCode,
                            "onUpdate:modelValue": ($event) => unref(formData).zipCode = $event,
                            label: "Zip Code",
                            type: "number",
                            placeholder: "123456"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(formData).country,
                          "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                          label: "Country",
                          placeholder: "Select country",
                          items: ["India", "UK", "USA", "AUS", "Germany"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).country,
                            "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                            label: "Country",
                            placeholder: "Select country",
                            items: ["India", "UK", "USA", "AUS", "Germany"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).state,
                          "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                          label: "State",
                          placeholder: "California"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).state,
                            "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                            label: "State",
                            placeholder: "California"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).city,
                          "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                          label: "City",
                          placeholder: "Los Angeles"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).city,
                            "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                            label: "City",
                            placeholder: "Los Angeles"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).landmark,
                          "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                          label: "Landmark",
                          placeholder: "Near to bus stop"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).landmark,
                            "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                            label: "Landmark",
                            placeholder: "Near to bus stop"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(formData).address,
                          "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                          label: "Address",
                          placeholder: "112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextarea, {
                            modelValue: unref(formData).address,
                            "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                            label: "Address",
                            placeholder: "112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_component_CustomRadiosWithIcon, {
                          "selected-radio": unref(formData).propertyDealType,
                          "onUpdate:selectedRadio": ($event) => unref(formData).propertyDealType = $event,
                          "radio-content": radioContent,
                          "grid-column": { cols: "12", sm: "6" }
                        }, null, 8, ["selected-radio", "onUpdate:selectedRadio"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(formData).propertyType,
                          "onUpdate:modelValue": ($event) => unref(formData).propertyType = $event,
                          label: "Property type",
                          placeholder: "Select Property Type",
                          items: ["Residential", "Commercial"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).zipCode,
                          "onUpdate:modelValue": ($event) => unref(formData).zipCode = $event,
                          label: "Zip Code",
                          type: "number",
                          placeholder: "123456"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(formData).country,
                          "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                          label: "Country",
                          placeholder: "Select country",
                          items: ["India", "UK", "USA", "AUS", "Germany"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).state,
                          "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                          label: "State",
                          placeholder: "California"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).city,
                          "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                          label: "City",
                          placeholder: "Los Angeles"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).landmark,
                          "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                          label: "Landmark",
                          placeholder: "Near to bus stop"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VTextarea, {
                          modelValue: unref(formData).address,
                          "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                          label: "Address",
                          placeholder: "112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_CustomRadiosWithIcon, {
                        "selected-radio": unref(formData).propertyDealType,
                        "onUpdate:selectedRadio": ($event) => unref(formData).propertyDealType = $event,
                        "radio-content": radioContent,
                        "grid-column": { cols: "12", sm: "6" }
                      }, null, 8, ["selected-radio", "onUpdate:selectedRadio"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(formData).propertyType,
                        "onUpdate:modelValue": ($event) => unref(formData).propertyType = $event,
                        label: "Property type",
                        placeholder: "Select Property Type",
                        items: ["Residential", "Commercial"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).zipCode,
                        "onUpdate:modelValue": ($event) => unref(formData).zipCode = $event,
                        label: "Zip Code",
                        type: "number",
                        placeholder: "123456"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(formData).country,
                        "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                        label: "Country",
                        placeholder: "Select country",
                        items: ["India", "UK", "USA", "AUS", "Germany"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).state,
                        "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                        label: "State",
                        placeholder: "California"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).city,
                        "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                        label: "City",
                        placeholder: "Los Angeles"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).landmark,
                        "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                        label: "Landmark",
                        placeholder: "Near to bus stop"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VTextarea, {
                        modelValue: unref(formData).address,
                        "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                        label: "Address",
                        placeholder: "112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/property-listing/PropertyDetails.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PropertyFeatures",
  __ssrInlineRender: true,
  props: {
    formData: {
      type: null,
      required: true
    }
  },
  emits: ["update:formData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = ref(props.formData);
    watch(formData, () => {
      emit("update:formData", formData.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).bedroomCount,
                          "onUpdate:modelValue": ($event) => unref(formData).bedroomCount = $event,
                          label: "Bedrooms",
                          placeholder: "3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).bedroomCount,
                            "onUpdate:modelValue": ($event) => unref(formData).bedroomCount = $event,
                            label: "Bedrooms",
                            placeholder: "3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).floorNo,
                          "onUpdate:modelValue": ($event) => unref(formData).floorNo = $event,
                          label: "Floor No",
                          placeholder: "12"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).floorNo,
                            "onUpdate:modelValue": ($event) => unref(formData).floorNo = $event,
                            label: "Floor No",
                            placeholder: "12"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).bathroomCount,
                          "onUpdate:modelValue": ($event) => unref(formData).bathroomCount = $event,
                          label: "Bathroom",
                          placeholder: "4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).bathroomCount,
                            "onUpdate:modelValue": ($event) => unref(formData).bathroomCount = $event,
                            label: "Bathroom",
                            placeholder: "4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(formData).furnishedStatus,
                          "onUpdate:modelValue": ($event) => unref(formData).furnishedStatus = $event,
                          label: "Furnished Status",
                          placeholder: "Select Furnished Status",
                          items: ["Fully Furnished", "Furnished", "Semi-Furnished", "Unfurnished"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).furnishedStatus,
                            "onUpdate:modelValue": ($event) => unref(formData).furnishedStatus = $event,
                            label: "Furnished Status",
                            placeholder: "Select Furnished Status",
                            items: ["Fully Furnished", "Furnished", "Semi-Furnished", "Unfurnished"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(formData).furnishingDetails,
                          "onUpdate:modelValue": ($event) => unref(formData).furnishingDetails = $event,
                          label: "Furnishing Details",
                          placeholder: "Select Furnishing Details",
                          multiple: "",
                          chips: "",
                          "closable-chips": "",
                          items: ["TV", "AC", "RO", "Bed", "Fridge", "Wi-Fi", "Sofa", "Cupboard", "Microwave", "Dining Table", "Washing Machine"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).furnishingDetails,
                            "onUpdate:modelValue": ($event) => unref(formData).furnishingDetails = $event,
                            label: "Furnishing Details",
                            placeholder: "Select Furnishing Details",
                            multiple: "",
                            chips: "",
                            "closable-chips": "",
                            items: ["TV", "AC", "RO", "Bed", "Fridge", "Wi-Fi", "Sofa", "Cupboard", "Microwave", "Dining Table", "Washing Machine"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).isCommonArea1,
                          "onUpdate:modelValue": ($event) => unref(formData).isCommonArea1 = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Is There Any Common Area? </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Is There Any Common Area? ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Yes",
                                value: "true"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                label: "No",
                                value: "false"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  label: "Yes",
                                  value: "true"
                                }),
                                createVNode(VRadio, {
                                  label: "No",
                                  value: "false"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).isCommonArea1,
                            "onUpdate:modelValue": ($event) => unref(formData).isCommonArea1 = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Is There Any Common Area? ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                label: "Yes",
                                value: "true"
                              }),
                              createVNode(VRadio, {
                                label: "No",
                                value: "false"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(formData).isCommonArea2,
                          "onUpdate:modelValue": ($event) => unref(formData).isCommonArea2 = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}> Is There Any Common Area? </div>`);
                            } else {
                              return [
                                createVNode("div", null, " Is There Any Common Area? ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Yes",
                                value: "true"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                label: "No",
                                value: "false"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  label: "Yes",
                                  value: "true"
                                }),
                                createVNode(VRadio, {
                                  label: "No",
                                  value: "false"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(formData).isCommonArea2,
                            "onUpdate:modelValue": ($event) => unref(formData).isCommonArea2 = $event
                          }, {
                            label: withCtx(() => [
                              createVNode("div", null, " Is There Any Common Area? ")
                            ]),
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                label: "Yes",
                                value: "true"
                              }),
                              createVNode(VRadio, {
                                label: "No",
                                value: "false"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).bedroomCount,
                          "onUpdate:modelValue": ($event) => unref(formData).bedroomCount = $event,
                          label: "Bedrooms",
                          placeholder: "3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).floorNo,
                          "onUpdate:modelValue": ($event) => unref(formData).floorNo = $event,
                          label: "Floor No",
                          placeholder: "12"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).bathroomCount,
                          "onUpdate:modelValue": ($event) => unref(formData).bathroomCount = $event,
                          label: "Bathroom",
                          placeholder: "4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(formData).furnishedStatus,
                          "onUpdate:modelValue": ($event) => unref(formData).furnishedStatus = $event,
                          label: "Furnished Status",
                          placeholder: "Select Furnished Status",
                          items: ["Fully Furnished", "Furnished", "Semi-Furnished", "Unfurnished"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(formData).furnishingDetails,
                          "onUpdate:modelValue": ($event) => unref(formData).furnishingDetails = $event,
                          label: "Furnishing Details",
                          placeholder: "Select Furnishing Details",
                          multiple: "",
                          chips: "",
                          "closable-chips": "",
                          items: ["TV", "AC", "RO", "Bed", "Fridge", "Wi-Fi", "Sofa", "Cupboard", "Microwave", "Dining Table", "Washing Machine"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).isCommonArea1,
                          "onUpdate:modelValue": ($event) => unref(formData).isCommonArea1 = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Is There Any Common Area? ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              label: "Yes",
                              value: "true"
                            }),
                            createVNode(VRadio, {
                              label: "No",
                              value: "false"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(formData).isCommonArea2,
                          "onUpdate:modelValue": ($event) => unref(formData).isCommonArea2 = $event
                        }, {
                          label: withCtx(() => [
                            createVNode("div", null, " Is There Any Common Area? ")
                          ]),
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              label: "Yes",
                              value: "true"
                            }),
                            createVNode(VRadio, {
                              label: "No",
                              value: "false"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).bedroomCount,
                        "onUpdate:modelValue": ($event) => unref(formData).bedroomCount = $event,
                        label: "Bedrooms",
                        placeholder: "3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).floorNo,
                        "onUpdate:modelValue": ($event) => unref(formData).floorNo = $event,
                        label: "Floor No",
                        placeholder: "12"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).bathroomCount,
                        "onUpdate:modelValue": ($event) => unref(formData).bathroomCount = $event,
                        label: "Bathroom",
                        placeholder: "4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(formData).furnishedStatus,
                        "onUpdate:modelValue": ($event) => unref(formData).furnishedStatus = $event,
                        label: "Furnished Status",
                        placeholder: "Select Furnished Status",
                        items: ["Fully Furnished", "Furnished", "Semi-Furnished", "Unfurnished"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(formData).furnishingDetails,
                        "onUpdate:modelValue": ($event) => unref(formData).furnishingDetails = $event,
                        label: "Furnishing Details",
                        placeholder: "Select Furnishing Details",
                        multiple: "",
                        chips: "",
                        "closable-chips": "",
                        items: ["TV", "AC", "RO", "Bed", "Fridge", "Wi-Fi", "Sofa", "Cupboard", "Microwave", "Dining Table", "Washing Machine"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).isCommonArea1,
                        "onUpdate:modelValue": ($event) => unref(formData).isCommonArea1 = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Is There Any Common Area? ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            label: "Yes",
                            value: "true"
                          }),
                          createVNode(VRadio, {
                            label: "No",
                            value: "false"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(formData).isCommonArea2,
                        "onUpdate:modelValue": ($event) => unref(formData).isCommonArea2 = $event
                      }, {
                        label: withCtx(() => [
                          createVNode("div", null, " Is There Any Common Area? ")
                        ]),
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            label: "Yes",
                            value: "true"
                          }),
                          createVNode(VRadio, {
                            label: "No",
                            value: "false"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/property-listing/PropertyFeatures.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "property-listing",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyListingSteps = [
      {
        title: "Personal Details",
        subtitle: "Your Name/Email"
      },
      {
        title: "Property Details",
        subtitle: "Property Type"
      },
      {
        title: "Property Features",
        subtitle: "Bedrooms/Floor No"
      },
      {
        title: "Property Area",
        subtitle: "covered Area"
      },
      {
        title: "Price Details",
        subtitle: "Expected Price"
      }
    ];
    const propertyListingData = ref({
      personalDetails: {
        userType: "builder",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        contact: null
      },
      priceDetails: {
        expectedPrice: null,
        pricePerSqft: null,
        maintenanceCharge: null,
        maintenancePeriod: null,
        bookingAmount: null,
        otherAmount: null,
        priceDisplayType: "Negotiable",
        priceIncludes: ["Car Parking"]
      },
      propertyFeatures: {
        bedroomCount: "",
        floorNo: "",
        bathroomCount: "",
        isCommonArea: true,
        furnishedStatus: null,
        furnishingDetails: [
          "AC",
          "TV",
          "Fridge"
        ],
        isCommonArea1: "true",
        isCommonArea2: "false"
      },
      propertyArea: {
        totalArea: null,
        carpetArea: null,
        plotArea: null,
        availableFrom: null,
        possessionStatus: "Under Construciton",
        transactionType: "New Property",
        isOnMainRoad: "No",
        isGatedColony: "No"
      },
      propertyDetails: {
        propertyDealType: "sell",
        propertyType: null,
        zipCode: null,
        country: null,
        state: "",
        city: "",
        landmark: "",
        address: ""
      }
    });
    const currentStep = ref(0);
    const onSubmit = () => {
      console.log("propertyListingData :>> ", propertyListingData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppStepper = _sfc_main$7;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4",
                    class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppStepper, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                items: propertyListingSteps,
                                direction: "vertical"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppStepper, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  items: propertyListingSteps,
                                  direction: "vertical"
                                }, null, 8, ["current-step", "onUpdate:currentStep"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppStepper, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                items: propertyListingSteps,
                                direction: "vertical"
                              }, null, 8, ["current-step", "onUpdate:currentStep"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VWindow, {
                                modelValue: unref(currentStep),
                                "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$5, {
                                            "form-data": unref(propertyListingData).personalDetails,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$5, {
                                              "form-data": unref(propertyListingData).personalDetails,
                                              "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                            }, null, 8, ["form-data", "onUpdate:formData"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$2, {
                                            "form-data": unref(propertyListingData).propertyDetails,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$2, {
                                              "form-data": unref(propertyListingData).propertyDetails,
                                              "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                            }, null, 8, ["form-data", "onUpdate:formData"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$1, {
                                            "form-data": unref(propertyListingData).propertyFeatures,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$1, {
                                              "form-data": unref(propertyListingData).propertyFeatures,
                                              "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                            }, null, 8, ["form-data", "onUpdate:formData"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$3, {
                                            "form-data": unref(propertyListingData).propertyArea,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$3, {
                                              "form-data": unref(propertyListingData).propertyArea,
                                              "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                            }, null, 8, ["form-data", "onUpdate:formData"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$4, {
                                            "form-data": unref(propertyListingData).priceDetails,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$4, {
                                              "form-data": unref(propertyListingData).priceDetails,
                                              "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                            }, null, 8, ["form-data", "onUpdate:formData"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$5, {
                                            "form-data": unref(propertyListingData).personalDetails,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2, {
                                            "form-data": unref(propertyListingData).propertyDetails,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1, {
                                            "form-data": unref(propertyListingData).propertyFeatures,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3, {
                                            "form-data": unref(propertyListingData).propertyArea,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4, {
                                            "form-data": unref(propertyListingData).priceDetails,
                                            "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-wrap gap-4 justify-space-between mt-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                disabled: unref(currentStep) === 0,
                                onClick: ($event) => currentStep.value--
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-arrow-left-line",
                                      start: "",
                                      class: "flip-in-rtl"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` Previous `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-left-line",
                                        start: "",
                                        class: "flip-in-rtl"
                                      }),
                                      createTextVNode(" Previous ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (propertyListingSteps.length - 1 === unref(currentStep)) {
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "success",
                                  "append-icon": "ri-check-line",
                                  onClick: onSubmit
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` submit `);
                                    } else {
                                      return [
                                        createTextVNode(" submit ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(VBtn, {
                                  onClick: ($event) => currentStep.value++
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Next `);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createTextVNode(" Next "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-line",
                                          end: "",
                                          class: "flip-in-rtl"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VWindow, {
                                  modelValue: unref(currentStep),
                                  "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  class: "disable-tab-transition"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$5, {
                                          "form-data": unref(propertyListingData).personalDetails,
                                          "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2, {
                                          "form-data": unref(propertyListingData).propertyDetails,
                                          "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1, {
                                          "form-data": unref(propertyListingData).propertyFeatures,
                                          "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3, {
                                          "form-data": unref(propertyListingData).propertyArea,
                                          "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4, {
                                          "form-data": unref(propertyListingData).priceDetails,
                                          "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-space-between mt-6" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    disabled: unref(currentStep) === 0,
                                    onClick: ($event) => currentStep.value--
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-left-line",
                                        start: "",
                                        class: "flip-in-rtl"
                                      }),
                                      createTextVNode(" Previous ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"]),
                                  propertyListingSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    color: "success",
                                    "append-icon": "ri-check-line",
                                    onClick: onSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" submit ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VBtn, {
                                    key: 1,
                                    onClick: ($event) => currentStep.value++
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Next "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VWindow, {
                                modelValue: unref(currentStep),
                                "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$5, {
                                        "form-data": unref(propertyListingData).personalDetails,
                                        "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2, {
                                        "form-data": unref(propertyListingData).propertyDetails,
                                        "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1, {
                                        "form-data": unref(propertyListingData).propertyFeatures,
                                        "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3, {
                                        "form-data": unref(propertyListingData).propertyArea,
                                        "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4, {
                                        "form-data": unref(propertyListingData).priceDetails,
                                        "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-space-between mt-6" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  disabled: unref(currentStep) === 0,
                                  onClick: ($event) => currentStep.value--
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-left-line",
                                      start: "",
                                      class: "flip-in-rtl"
                                    }),
                                    createTextVNode(" Previous ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"]),
                                propertyListingSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "success",
                                  "append-icon": "ri-check-line",
                                  onClick: onSubmit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" submit ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VBtn, {
                                  key: 1,
                                  onClick: ($event) => currentStep.value++
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Next "),
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-line",
                                      end: "",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]))
                              ])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "4",
                      class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppStepper, {
                              "current-step": unref(currentStep),
                              "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              items: propertyListingSteps,
                              direction: "vertical"
                            }, null, 8, ["current-step", "onUpdate:currentStep"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(VCol, {
                      cols: "12",
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VWindow, {
                              modelValue: unref(currentStep),
                              "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              class: "disable-tab-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5, {
                                      "form-data": unref(propertyListingData).personalDetails,
                                      "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, {
                                      "form-data": unref(propertyListingData).propertyDetails,
                                      "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1, {
                                      "form-data": unref(propertyListingData).propertyFeatures,
                                      "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, {
                                      "form-data": unref(propertyListingData).propertyArea,
                                      "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4, {
                                      "form-data": unref(propertyListingData).priceDetails,
                                      "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-space-between mt-6" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                disabled: unref(currentStep) === 0,
                                onClick: ($event) => currentStep.value--
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-left-line",
                                    start: "",
                                    class: "flip-in-rtl"
                                  }),
                                  createTextVNode(" Previous ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "onClick"]),
                              propertyListingSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                key: 0,
                                color: "success",
                                "append-icon": "ri-check-line",
                                onClick: onSubmit
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" submit ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VBtn, {
                                key: 1,
                                onClick: ($event) => currentStep.value++
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Next "),
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-right-line",
                                    end: "",
                                    class: "flip-in-rtl"
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4",
                    class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppStepper, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            items: propertyListingSteps,
                            direction: "vertical"
                          }, null, 8, ["current-step", "onUpdate:currentStep"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VWindow, {
                            modelValue: unref(currentStep),
                            "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            class: "disable-tab-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    "form-data": unref(propertyListingData).personalDetails,
                                    "onUpdate:formData": ($event) => unref(propertyListingData).personalDetails = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2, {
                                    "form-data": unref(propertyListingData).propertyDetails,
                                    "onUpdate:formData": ($event) => unref(propertyListingData).propertyDetails = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1, {
                                    "form-data": unref(propertyListingData).propertyFeatures,
                                    "onUpdate:formData": ($event) => unref(propertyListingData).propertyFeatures = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3, {
                                    "form-data": unref(propertyListingData).propertyArea,
                                    "onUpdate:formData": ($event) => unref(propertyListingData).propertyArea = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4, {
                                    "form-data": unref(propertyListingData).priceDetails,
                                    "onUpdate:formData": ($event) => unref(propertyListingData).priceDetails = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-space-between mt-6" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              disabled: unref(currentStep) === 0,
                              onClick: ($event) => currentStep.value--
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-left-line",
                                  start: "",
                                  class: "flip-in-rtl"
                                }),
                                createTextVNode(" Previous ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            propertyListingSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "success",
                              "append-icon": "ri-check-line",
                              onClick: onSubmit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" submit ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VBtn, {
                              key: 1,
                              onClick: ($event) => currentStep.value++
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next "),
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-line",
                                  end: "",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]))
                          ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/wizard-examples/property-listing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
