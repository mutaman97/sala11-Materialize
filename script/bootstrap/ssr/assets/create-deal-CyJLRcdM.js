import { _ as _sfc_main$6 } from "./AppStepper-DSePPp52.js";
import { ref, watch, withCtx, unref, createVNode, useSSRContext, createTextVNode, isRef, openBlock, createBlock } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./AppDateTimePicker-B0c_dYDs.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { _ as __unplugin_components_0 } from "./CustomRadiosWithIcon-CXRflZSC.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VBtn, a as VIcon } from "../ssr.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroupItem-CIJ0uuo8.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "@vueuse/core";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
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
import "./VRadioGroup-BdG5naH9.js";
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
const _sfc_main$4 = {
  __name: "DealDetails",
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
    const offeredItems = [
      "iPhone 12 Pro Max",
      "iPhone 12 Pro",
      "iPhone 11 Pro Max",
      "iPhone 11",
      "iPhone 12 Mini",
      "OnePlus Nord CE"
    ];
    watch(formData, () => {
      emit("update:formData", formData.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$5;
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
                          modelValue: unref(formData).title,
                          "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                          label: "Deal Title",
                          placeholder: "Black Friday Sale, 50% off on all products"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).title,
                            "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                            label: "Deal Title",
                            placeholder: "Black Friday Sale, 50% off on all products"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(formData).code,
                          "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                          label: "Deal Code",
                          placeholder: "BLACKFRIDAY50"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).code,
                            "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                            label: "Deal Code",
                            placeholder: "BLACKFRIDAY50"
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
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(formData).description,
                          "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                          label: "Deal Description",
                          placeholder: "Write something about this deal",
                          "auto-grow": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextarea, {
                            modelValue: unref(formData).description,
                            "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                            label: "Deal Description",
                            placeholder: "Write something about this deal",
                            "auto-grow": ""
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
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(formData).offeredUItems,
                                      "onUpdate:modelValue": ($event) => unref(formData).offeredUItems = $event,
                                      multiple: "",
                                      chips: "",
                                      label: "Offered Items",
                                      placeholder: "Select Offered Items",
                                      items: offeredItems
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(formData).offeredUItems,
                                        "onUpdate:modelValue": ($event) => unref(formData).offeredUItems = $event,
                                        multiple: "",
                                        chips: "",
                                        label: "Offered Items",
                                        placeholder: "Select Offered Items",
                                        items: offeredItems
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(formData).cartCondition,
                                      "onUpdate:modelValue": ($event) => unref(formData).cartCondition = $event,
                                      label: "Cart Condition",
                                      placeholder: "Select Cart Condition",
                                      items: ["Cart must contain all selected Downloads", "Cart needs one or more of the selected Downloads"]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(formData).cartCondition,
                                        "onUpdate:modelValue": ($event) => unref(formData).cartCondition = $event,
                                        label: "Cart Condition",
                                        placeholder: "Select Cart Condition",
                                        items: ["Cart must contain all selected Downloads", "Cart needs one or more of the selected Downloads"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(formData).offeredUItems,
                                      "onUpdate:modelValue": ($event) => unref(formData).offeredUItems = $event,
                                      multiple: "",
                                      chips: "",
                                      label: "Offered Items",
                                      placeholder: "Select Offered Items",
                                      items: offeredItems
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(formData).cartCondition,
                                      "onUpdate:modelValue": ($event) => unref(formData).cartCondition = $event,
                                      label: "Cart Condition",
                                      placeholder: "Select Cart Condition",
                                      items: ["Cart must contain all selected Downloads", "Cart needs one or more of the selected Downloads"]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(formData).offeredUItems,
                                    "onUpdate:modelValue": ($event) => unref(formData).offeredUItems = $event,
                                    multiple: "",
                                    chips: "",
                                    label: "Offered Items",
                                    placeholder: "Select Offered Items",
                                    items: offeredItems
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(formData).cartCondition,
                                    "onUpdate:modelValue": ($event) => unref(formData).cartCondition = $event,
                                    label: "Cart Condition",
                                    placeholder: "Select Cart Condition",
                                    items: ["Cart must contain all selected Downloads", "Cart needs one or more of the selected Downloads"]
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(formData).dealDuration,
                          "onUpdate:modelValue": ($event) => unref(formData).dealDuration = $event,
                          label: "Deal Duration",
                          placeholder: "Select Date",
                          config: { mode: "range" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(formData).dealDuration,
                            "onUpdate:modelValue": ($event) => unref(formData).dealDuration = $event,
                            label: "Deal Duration",
                            placeholder: "Select Date",
                            config: { mode: "range" }
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
                        _push4(`<p class="text-sm text-medium-emphasis mb-2"${_scopeId3}> Notify Users </p><div class="d-flex align-center flex-wrap gap-x-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(formData).notification.email,
                          "onUpdate:modelValue": ($event) => unref(formData).notification.email = $event,
                          label: "Email",
                          value: "email"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(formData).notification.sms,
                          "onUpdate:modelValue": ($event) => unref(formData).notification.sms = $event,
                          label: "SMS",
                          value: "sms"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(formData).notification.pushNotification,
                          "onUpdate:modelValue": ($event) => unref(formData).notification.pushNotification = $event,
                          label: "Push Notification",
                          value: "push-notification"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-sm text-medium-emphasis mb-2" }, " Notify Users "),
                          createVNode("div", { class: "d-flex align-center flex-wrap gap-x-3" }, [
                            createVNode(VCheckbox, {
                              modelValue: unref(formData).notification.email,
                              "onUpdate:modelValue": ($event) => unref(formData).notification.email = $event,
                              label: "Email",
                              value: "email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VCheckbox, {
                              modelValue: unref(formData).notification.sms,
                              "onUpdate:modelValue": ($event) => unref(formData).notification.sms = $event,
                              label: "SMS",
                              value: "sms"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VCheckbox, {
                              modelValue: unref(formData).notification.pushNotification,
                              "onUpdate:modelValue": ($event) => unref(formData).notification.pushNotification = $event,
                              label: "Push Notification",
                              value: "push-notification"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
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
                          modelValue: unref(formData).title,
                          "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                          label: "Deal Title",
                          placeholder: "Black Friday Sale, 50% off on all products"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(formData).code,
                          "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                          label: "Deal Code",
                          placeholder: "BLACKFRIDAY50"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextarea, {
                          modelValue: unref(formData).description,
                          "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                          label: "Deal Description",
                          placeholder: "Write something about this deal",
                          "auto-grow": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(formData).offeredUItems,
                                  "onUpdate:modelValue": ($event) => unref(formData).offeredUItems = $event,
                                  multiple: "",
                                  chips: "",
                                  label: "Offered Items",
                                  placeholder: "Select Offered Items",
                                  items: offeredItems
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(formData).cartCondition,
                                  "onUpdate:modelValue": ($event) => unref(formData).cartCondition = $event,
                                  label: "Cart Condition",
                                  placeholder: "Select Cart Condition",
                                  items: ["Cart must contain all selected Downloads", "Cart needs one or more of the selected Downloads"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(formData).dealDuration,
                          "onUpdate:modelValue": ($event) => unref(formData).dealDuration = $event,
                          label: "Deal Duration",
                          placeholder: "Select Date",
                          config: { mode: "range" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm text-medium-emphasis mb-2" }, " Notify Users "),
                        createVNode("div", { class: "d-flex align-center flex-wrap gap-x-3" }, [
                          createVNode(VCheckbox, {
                            modelValue: unref(formData).notification.email,
                            "onUpdate:modelValue": ($event) => unref(formData).notification.email = $event,
                            label: "Email",
                            value: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VCheckbox, {
                            modelValue: unref(formData).notification.sms,
                            "onUpdate:modelValue": ($event) => unref(formData).notification.sms = $event,
                            label: "SMS",
                            value: "sms"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VCheckbox, {
                            modelValue: unref(formData).notification.pushNotification,
                            "onUpdate:modelValue": ($event) => unref(formData).notification.pushNotification = $event,
                            label: "Push Notification",
                            value: "push-notification"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
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
                        modelValue: unref(formData).title,
                        "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                        label: "Deal Title",
                        placeholder: "Black Friday Sale, 50% off on all products"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(formData).code,
                        "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                        label: "Deal Code",
                        placeholder: "BLACKFRIDAY50"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextarea, {
                        modelValue: unref(formData).description,
                        "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                        label: "Deal Description",
                        placeholder: "Write something about this deal",
                        "auto-grow": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(formData).offeredUItems,
                                "onUpdate:modelValue": ($event) => unref(formData).offeredUItems = $event,
                                multiple: "",
                                chips: "",
                                label: "Offered Items",
                                placeholder: "Select Offered Items",
                                items: offeredItems
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(formData).cartCondition,
                                "onUpdate:modelValue": ($event) => unref(formData).cartCondition = $event,
                                label: "Cart Condition",
                                placeholder: "Select Cart Condition",
                                items: ["Cart must contain all selected Downloads", "Cart needs one or more of the selected Downloads"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: unref(formData).dealDuration,
                        "onUpdate:modelValue": ($event) => unref(formData).dealDuration = $event,
                        label: "Deal Duration",
                        placeholder: "Select Date",
                        config: { mode: "range" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-sm text-medium-emphasis mb-2" }, " Notify Users "),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-x-3" }, [
                        createVNode(VCheckbox, {
                          modelValue: unref(formData).notification.email,
                          "onUpdate:modelValue": ($event) => unref(formData).notification.email = $event,
                          label: "Email",
                          value: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VCheckbox, {
                          modelValue: unref(formData).notification.sms,
                          "onUpdate:modelValue": ($event) => unref(formData).notification.sms = $event,
                          label: "SMS",
                          value: "sms"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VCheckbox, {
                          modelValue: unref(formData).notification.pushNotification,
                          "onUpdate:modelValue": ($event) => unref(formData).notification.pushNotification = $event,
                          label: "Push Notification",
                          value: "push-notification"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/create-deal/DealDetails.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const reviewAndComplete = "/build/assets/create-deal-review-complete-hkQrrLMt.png";
const _sfc_main$3 = {
  __name: "DealReviewComplete",
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
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 mb-4"${_scopeId2}> Almost done! 🚀 </h4><p${_scopeId2}>Confirm your deal details information and submit to create it.</p><table class="text-base"${_scopeId2}><tr${_scopeId2}><td style="${ssrRenderStyle({ "inline-size": "202px" })}"${_scopeId2}><p class="font-weight-medium mb-2"${_scopeId2}> Deal Type </p></td><td${_scopeId2}><p class="mb-2"${_scopeId2}> Percentage </p></td></tr><tr${_scopeId2}><td${_scopeId2}><p class="font-weight-medium mb-2"${_scopeId2}> Amount </p></td><td${_scopeId2}><p class="mb-2"${_scopeId2}> 25% </p></td></tr><tr${_scopeId2}><td${_scopeId2}><p class="font-weight-medium mb-2"${_scopeId2}> Deal Code </p></td><td${_scopeId2}><p class="mb-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VChip, {
                    size: "small",
                    color: "warning"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 25PEROFF `);
                      } else {
                        return [
                          createTextVNode(" 25PEROFF ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</p></td></tr><tr${_scopeId2}><td${_scopeId2}><p class="font-weight-medium mb-2"${_scopeId2}> Deal Title </p></td><td${_scopeId2}><p class="mb-2"${_scopeId2}> Black friday sale, 25% OFF </p></td></tr><tr${_scopeId2}><td${_scopeId2}><p class="font-weight-medium mb-2"${_scopeId2}> Deal Duration </p></td><td${_scopeId2}><p class="mb-2"${_scopeId2}> 2021-07-14 to 2021-07-30 </p></td></tr></table>`);
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(formData).isDealDetailsConfirmed,
                    "onUpdate:modelValue": ($event) => unref(formData).isDealDetailsConfirmed = $event,
                    label: "I have confirmed the deal details.",
                    class: "mb-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 mb-4" }, " Almost done! 🚀 "),
                    createVNode("p", null, "Confirm your deal details information and submit to create it."),
                    createVNode("table", { class: "text-base" }, [
                      createVNode("tr", null, [
                        createVNode("td", { style: { "inline-size": "202px" } }, [
                          createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Type ")
                        ]),
                        createVNode("td", null, [
                          createVNode("p", { class: "mb-2" }, " Percentage ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, [
                          createVNode("p", { class: "font-weight-medium mb-2" }, " Amount ")
                        ]),
                        createVNode("td", null, [
                          createVNode("p", { class: "mb-2" }, " 25% ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, [
                          createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Code ")
                        ]),
                        createVNode("td", null, [
                          createVNode("p", { class: "mb-2" }, [
                            createVNode(VChip, {
                              size: "small",
                              color: "warning"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 25PEROFF ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, [
                          createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Title ")
                        ]),
                        createVNode("td", null, [
                          createVNode("p", { class: "mb-2" }, " Black friday sale, 25% OFF ")
                        ])
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", null, [
                          createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Duration ")
                        ]),
                        createVNode("td", null, [
                          createVNode("p", { class: "mb-2" }, " 2021-07-14 to 2021-07-30 ")
                        ])
                      ])
                    ]),
                    createVNode(VSwitch, {
                      modelValue: unref(formData).isDealDetailsConfirmed,
                      "onUpdate:modelValue": ($event) => unref(formData).isDealDetailsConfirmed = $event,
                      label: "I have confirmed the deal details.",
                      class: "mb-3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border rounded-xl pa-4 pb-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    width: "178",
                    src: unref(reviewAndComplete),
                    class: "mx-auto flip-in-rtl"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "border rounded-xl pa-4 pb-0" }, [
                      createVNode(VImg, {
                        width: "178",
                        src: unref(reviewAndComplete),
                        class: "mx-auto flip-in-rtl"
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "7"
              }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4 mb-4" }, " Almost done! 🚀 "),
                  createVNode("p", null, "Confirm your deal details information and submit to create it."),
                  createVNode("table", { class: "text-base" }, [
                    createVNode("tr", null, [
                      createVNode("td", { style: { "inline-size": "202px" } }, [
                        createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Type ")
                      ]),
                      createVNode("td", null, [
                        createVNode("p", { class: "mb-2" }, " Percentage ")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("p", { class: "font-weight-medium mb-2" }, " Amount ")
                      ]),
                      createVNode("td", null, [
                        createVNode("p", { class: "mb-2" }, " 25% ")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Code ")
                      ]),
                      createVNode("td", null, [
                        createVNode("p", { class: "mb-2" }, [
                          createVNode(VChip, {
                            size: "small",
                            color: "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 25PEROFF ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Title ")
                      ]),
                      createVNode("td", null, [
                        createVNode("p", { class: "mb-2" }, " Black friday sale, 25% OFF ")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode("p", { class: "font-weight-medium mb-2" }, " Deal Duration ")
                      ]),
                      createVNode("td", null, [
                        createVNode("p", { class: "mb-2" }, " 2021-07-14 to 2021-07-30 ")
                      ])
                    ])
                  ]),
                  createVNode(VSwitch, {
                    modelValue: unref(formData).isDealDetailsConfirmed,
                    "onUpdate:modelValue": ($event) => unref(formData).isDealDetailsConfirmed = $event,
                    label: "I have confirmed the deal details.",
                    class: "mb-3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "5"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "border rounded-xl pa-4 pb-0" }, [
                    createVNode(VImg, {
                      width: "178",
                      src: unref(reviewAndComplete),
                      class: "mx-auto flip-in-rtl"
                    }, null, 8, ["src"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/create-deal/DealReviewComplete.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ShoppingGirl = "/build/assets/shopping-girl-CELgxx5M.png";
const _sfc_main$2 = {
  __name: "DealType",
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
    const discountOffers = [
      {
        icon: "ri-percent-line",
        title: "Percentage",
        desc: "Create a deal which offer uses some % off (i.e 5% OFF) on total.",
        value: "percentage"
      },
      {
        icon: "ri-money-dollar-circle-line",
        title: "Flat Amount",
        desc: "Create a deal which offer uses some flat amount (i.e $5 OFF) on total.",
        value: "flat"
      },
      {
        icon: "ri-user-line",
        title: "Prime member",
        desc: "Create prime member only deal to encourage the prime members.",
        value: "prime"
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
                        _push4(ssrRenderComponent(VImg, {
                          src: unref(ShoppingGirl),
                          "max-height": "240",
                          class: "border rounded-xl"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            src: unref(ShoppingGirl),
                            "max-height": "240",
                            class: "border rounded-xl"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CustomRadiosWithIcon, {
                          "selected-radio": unref(formData).Offer,
                          "onUpdate:selectedRadio": ($event) => unref(formData).Offer = $event,
                          "radio-content": discountOffers,
                          "grid-column": { cols: "12", sm: "4" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CustomRadiosWithIcon, {
                            "selected-radio": unref(formData).Offer,
                            "onUpdate:selectedRadio": ($event) => unref(formData).Offer = $event,
                            "radio-content": discountOffers,
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
                          modelValue: unref(formData).discount,
                          "onUpdate:modelValue": ($event) => unref(formData).discount = $event,
                          type: "number",
                          label: "Discount",
                          placeholder: "10%",
                          hint: "Enter the discount percentage. 10 = 10%",
                          "persistent-hint": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).discount,
                            "onUpdate:modelValue": ($event) => unref(formData).discount = $event,
                            type: "number",
                            label: "Discount",
                            placeholder: "10%",
                            hint: "Enter the discount percentage. 10 = 10%",
                            "persistent-hint": ""
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
                          modelValue: unref(formData).region,
                          "onUpdate:modelValue": ($event) => unref(formData).region = $event,
                          label: "Region",
                          items: ["Asia", "Europe", "Africa", "Australia", "North America", "South America"],
                          placeholder: "Select Region",
                          hint: "Select applicable regions for the deal.",
                          "persistent-hint": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).region,
                            "onUpdate:modelValue": ($event) => unref(formData).region = $event,
                            label: "Region",
                            items: ["Asia", "Europe", "Africa", "Australia", "North America", "South America"],
                            placeholder: "Select Region",
                            hint: "Select applicable regions for the deal.",
                            "persistent-hint": ""
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
                        createVNode(VImg, {
                          src: unref(ShoppingGirl),
                          "max-height": "240",
                          class: "border rounded-xl"
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_component_CustomRadiosWithIcon, {
                          "selected-radio": unref(formData).Offer,
                          "onUpdate:selectedRadio": ($event) => unref(formData).Offer = $event,
                          "radio-content": discountOffers,
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
                          modelValue: unref(formData).discount,
                          "onUpdate:modelValue": ($event) => unref(formData).discount = $event,
                          type: "number",
                          label: "Discount",
                          placeholder: "10%",
                          hint: "Enter the discount percentage. 10 = 10%",
                          "persistent-hint": ""
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
                          modelValue: unref(formData).region,
                          "onUpdate:modelValue": ($event) => unref(formData).region = $event,
                          label: "Region",
                          items: ["Asia", "Europe", "Africa", "Australia", "North America", "South America"],
                          placeholder: "Select Region",
                          hint: "Select applicable regions for the deal.",
                          "persistent-hint": ""
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
                      createVNode(VImg, {
                        src: unref(ShoppingGirl),
                        "max-height": "240",
                        class: "border rounded-xl"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_CustomRadiosWithIcon, {
                        "selected-radio": unref(formData).Offer,
                        "onUpdate:selectedRadio": ($event) => unref(formData).Offer = $event,
                        "radio-content": discountOffers,
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
                        modelValue: unref(formData).discount,
                        "onUpdate:modelValue": ($event) => unref(formData).discount = $event,
                        type: "number",
                        label: "Discount",
                        placeholder: "10%",
                        hint: "Enter the discount percentage. 10 = 10%",
                        "persistent-hint": ""
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
                        modelValue: unref(formData).region,
                        "onUpdate:modelValue": ($event) => unref(formData).region = $event,
                        label: "Region",
                        items: ["Asia", "Europe", "Africa", "Australia", "North America", "South America"],
                        placeholder: "Select Region",
                        hint: "Select applicable regions for the deal.",
                        "persistent-hint": ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/create-deal/DealType.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DealUsage",
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
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(formData).userType,
                          "onUpdate:modelValue": ($event) => unref(formData).userType = $event,
                          label: "User Type",
                          placeholder: "Select User Type",
                          items: ["All", "Registered", "Unregistered", "Prime Member"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).userType,
                            "onUpdate:modelValue": ($event) => unref(formData).userType = $event,
                            label: "User Type",
                            placeholder: "Select User Type",
                            items: ["All", "Registered", "Unregistered", "Prime Member"]
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
                          modelValue: unref(formData).maxUsers,
                          "onUpdate:modelValue": ($event) => unref(formData).maxUsers = $event,
                          label: "Max Users",
                          placeholder: "1000",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).maxUsers,
                            "onUpdate:modelValue": ($event) => unref(formData).maxUsers = $event,
                            label: "Max Users",
                            placeholder: "1000",
                            type: "number"
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
                          modelValue: unref(formData).cartAmount,
                          "onUpdate:modelValue": ($event) => unref(formData).cartAmount = $event,
                          label: "Minimum Cart Amount",
                          placeholder: "$199",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).cartAmount,
                            "onUpdate:modelValue": ($event) => unref(formData).cartAmount = $event,
                            label: "Minimum Cart Amount",
                            placeholder: "$199",
                            type: "number"
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
                          modelValue: unref(formData).promotionFree,
                          "onUpdate:modelValue": ($event) => unref(formData).promotionFree = $event,
                          label: "Promotion Fee",
                          placeholder: "$4.99",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(formData).promotionFree,
                            "onUpdate:modelValue": ($event) => unref(formData).promotionFree = $event,
                            label: "Promotion Fee",
                            placeholder: "$4.99",
                            type: "number"
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
                          modelValue: unref(formData).paymentMethod,
                          "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                          label: "Payment Method",
                          placeholder: "Select Payment Method",
                          items: ["Any", "Credit Card", "Net Banking", "Wallet"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).paymentMethod,
                            "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                            label: "Payment Method",
                            placeholder: "Select Payment Method",
                            items: ["Any", "Credit Card", "Net Banking", "Wallet"]
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
                          modelValue: unref(formData).dealStatus,
                          "onUpdate:modelValue": ($event) => unref(formData).dealStatus = $event,
                          label: "Deal Status",
                          placeholder: "Select Deal Status",
                          items: ["Active", "Inactive", "Suspended", "Abandoned"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(formData).dealStatus,
                            "onUpdate:modelValue": ($event) => unref(formData).dealStatus = $event,
                            label: "Deal Status",
                            placeholder: "Select Deal Status",
                            items: ["Active", "Inactive", "Suspended", "Abandoned"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSwitch, {
                          modelValue: unref(formData).isSingleUserCustomer,
                          "onUpdate:modelValue": ($event) => unref(formData).isSingleUserCustomer = $event,
                          label: "Limit this discount to a single-use per customer?"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSwitch, {
                            modelValue: unref(formData).isSingleUserCustomer,
                            "onUpdate:modelValue": ($event) => unref(formData).isSingleUserCustomer = $event,
                            label: "Limit this discount to a single-use per customer?"
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
                        createVNode(VSelect, {
                          modelValue: unref(formData).userType,
                          "onUpdate:modelValue": ($event) => unref(formData).userType = $event,
                          label: "User Type",
                          placeholder: "Select User Type",
                          items: ["All", "Registered", "Unregistered", "Prime Member"]
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
                          modelValue: unref(formData).maxUsers,
                          "onUpdate:modelValue": ($event) => unref(formData).maxUsers = $event,
                          label: "Max Users",
                          placeholder: "1000",
                          type: "number"
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
                          modelValue: unref(formData).cartAmount,
                          "onUpdate:modelValue": ($event) => unref(formData).cartAmount = $event,
                          label: "Minimum Cart Amount",
                          placeholder: "$199",
                          type: "number"
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
                          modelValue: unref(formData).promotionFree,
                          "onUpdate:modelValue": ($event) => unref(formData).promotionFree = $event,
                          label: "Promotion Fee",
                          placeholder: "$4.99",
                          type: "number"
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
                          modelValue: unref(formData).paymentMethod,
                          "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                          label: "Payment Method",
                          placeholder: "Select Payment Method",
                          items: ["Any", "Credit Card", "Net Banking", "Wallet"]
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
                          modelValue: unref(formData).dealStatus,
                          "onUpdate:modelValue": ($event) => unref(formData).dealStatus = $event,
                          label: "Deal Status",
                          placeholder: "Select Deal Status",
                          items: ["Active", "Inactive", "Suspended", "Abandoned"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VSwitch, {
                          modelValue: unref(formData).isSingleUserCustomer,
                          "onUpdate:modelValue": ($event) => unref(formData).isSingleUserCustomer = $event,
                          label: "Limit this discount to a single-use per customer?"
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
                      createVNode(VSelect, {
                        modelValue: unref(formData).userType,
                        "onUpdate:modelValue": ($event) => unref(formData).userType = $event,
                        label: "User Type",
                        placeholder: "Select User Type",
                        items: ["All", "Registered", "Unregistered", "Prime Member"]
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
                        modelValue: unref(formData).maxUsers,
                        "onUpdate:modelValue": ($event) => unref(formData).maxUsers = $event,
                        label: "Max Users",
                        placeholder: "1000",
                        type: "number"
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
                        modelValue: unref(formData).cartAmount,
                        "onUpdate:modelValue": ($event) => unref(formData).cartAmount = $event,
                        label: "Minimum Cart Amount",
                        placeholder: "$199",
                        type: "number"
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
                        modelValue: unref(formData).promotionFree,
                        "onUpdate:modelValue": ($event) => unref(formData).promotionFree = $event,
                        label: "Promotion Fee",
                        placeholder: "$4.99",
                        type: "number"
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
                        modelValue: unref(formData).paymentMethod,
                        "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                        label: "Payment Method",
                        placeholder: "Select Payment Method",
                        items: ["Any", "Credit Card", "Net Banking", "Wallet"]
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
                        modelValue: unref(formData).dealStatus,
                        "onUpdate:modelValue": ($event) => unref(formData).dealStatus = $event,
                        label: "Deal Status",
                        placeholder: "Select Deal Status",
                        items: ["Active", "Inactive", "Suspended", "Abandoned"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VSwitch, {
                        modelValue: unref(formData).isSingleUserCustomer,
                        "onUpdate:modelValue": ($event) => unref(formData).isSingleUserCustomer = $event,
                        label: "Limit this discount to a single-use per customer?"
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/create-deal/DealUsage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "create-deal",
  __ssrInlineRender: true,
  setup(__props) {
    const createDealSteps = [
      {
        title: "Deal Type",
        subtitle: "Choose type of deal"
      },
      {
        title: "Deal Details",
        subtitle: "Provide deal details"
      },
      {
        title: "Deal Usage",
        subtitle: "Limitations & Offers"
      },
      {
        title: "Review & Complete",
        subtitle: "Launch a deal"
      }
    ];
    const currentStep = ref(0);
    const createDealData = ref({
      dealType: {
        Offer: "percentage",
        discount: null,
        region: null
      },
      dealDetails: {
        title: "",
        code: "",
        description: "",
        offeredUItems: [],
        cartCondition: null,
        dealDuration: "",
        notification: {
          email: false,
          sms: false,
          pushNotification: false
        }
      },
      dealUsage: {
        userType: null,
        maxUsers: null,
        cartAmount: null,
        promotionFree: null,
        paymentMethod: null,
        dealStatus: null,
        isSingleUserCustomer: false
      },
      dealReviewComplete: { isDealDetailsConfirmed: true }
    });
    const onSubmit = () => {
      console.log("createDealData :>> ", createDealData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppStepper = _sfc_main$6;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4",
                    lg: "3",
                    class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppStepper, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                direction: "vertical",
                                items: createDealSteps
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppStepper, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  direction: "vertical",
                                  items: createDealSteps
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
                                direction: "vertical",
                                items: createDealSteps
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
                    md: "8",
                    lg: "9"
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
                                          _push7(ssrRenderComponent(_sfc_main$2, {
                                            "form-data": unref(createDealData).dealType,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$2, {
                                              "form-data": unref(createDealData).dealType,
                                              "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
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
                                            "form-data": unref(createDealData).dealDetails,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$4, {
                                              "form-data": unref(createDealData).dealDetails,
                                              "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
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
                                            "form-data": unref(createDealData).dealUsage,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$1, {
                                              "form-data": unref(createDealData).dealUsage,
                                              "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
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
                                            "form-data": unref(createDealData).dealReviewComplete,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$3, {
                                              "form-data": unref(createDealData).dealReviewComplete,
                                              "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
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
                                          createVNode(_sfc_main$2, {
                                            "form-data": unref(createDealData).dealType,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4, {
                                            "form-data": unref(createDealData).dealDetails,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1, {
                                            "form-data": unref(createDealData).dealUsage,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
                                          }, null, 8, ["form-data", "onUpdate:formData"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3, {
                                            "form-data": unref(createDealData).dealReviewComplete,
                                            "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
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
                              if (createDealSteps.length - 1 === unref(currentStep)) {
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
                                        createVNode(_sfc_main$2, {
                                          "form-data": unref(createDealData).dealType,
                                          "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4, {
                                          "form-data": unref(createDealData).dealDetails,
                                          "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1, {
                                          "form-data": unref(createDealData).dealUsage,
                                          "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
                                        }, null, 8, ["form-data", "onUpdate:formData"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3, {
                                          "form-data": unref(createDealData).dealReviewComplete,
                                          "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
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
                                  createDealSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
                                      createVNode(_sfc_main$2, {
                                        "form-data": unref(createDealData).dealType,
                                        "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4, {
                                        "form-data": unref(createDealData).dealDetails,
                                        "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1, {
                                        "form-data": unref(createDealData).dealUsage,
                                        "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
                                      }, null, 8, ["form-data", "onUpdate:formData"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3, {
                                        "form-data": unref(createDealData).dealReviewComplete,
                                        "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
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
                                createDealSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
                      lg: "3",
                      class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppStepper, {
                              "current-step": unref(currentStep),
                              "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              direction: "vertical",
                              items: createDealSteps
                            }, null, 8, ["current-step", "onUpdate:currentStep"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(VCol, {
                      cols: "12",
                      md: "8",
                      lg: "9"
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
                                    createVNode(_sfc_main$2, {
                                      "form-data": unref(createDealData).dealType,
                                      "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4, {
                                      "form-data": unref(createDealData).dealDetails,
                                      "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1, {
                                      "form-data": unref(createDealData).dealUsage,
                                      "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
                                    }, null, 8, ["form-data", "onUpdate:formData"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, {
                                      "form-data": unref(createDealData).dealReviewComplete,
                                      "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
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
                              createDealSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
                    lg: "3",
                    class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppStepper, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            direction: "vertical",
                            items: createDealSteps
                          }, null, 8, ["current-step", "onUpdate:currentStep"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(VCol, {
                    cols: "12",
                    md: "8",
                    lg: "9"
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
                                  createVNode(_sfc_main$2, {
                                    "form-data": unref(createDealData).dealType,
                                    "onUpdate:formData": ($event) => unref(createDealData).dealType = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4, {
                                    "form-data": unref(createDealData).dealDetails,
                                    "onUpdate:formData": ($event) => unref(createDealData).dealDetails = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1, {
                                    "form-data": unref(createDealData).dealUsage,
                                    "onUpdate:formData": ($event) => unref(createDealData).dealUsage = $event
                                  }, null, 8, ["form-data", "onUpdate:formData"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3, {
                                    "form-data": unref(createDealData).dealReviewComplete,
                                    "onUpdate:formData": ($event) => unref(createDealData).dealReviewComplete = $event
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
                            createDealSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/wizard-examples/create-deal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
