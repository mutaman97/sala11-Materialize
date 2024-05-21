import { _ as _sfc_main$1 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, ref, toRaw, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VBtn } from "../ssr.js";
const _sfc_main = {
  __name: "UserInfoEditDialog",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      required: false,
      default: () => ({
        avatar: "",
        company: "",
        contact: "",
        country: null,
        currentPlan: "",
        email: "",
        fullName: "",
        id: 0,
        role: "",
        status: null,
        username: "",
        language: [],
        projectDone: 0,
        taskDone: 0,
        taxId: ""
      })
    },
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "submit",
    "update:isDialogVisible"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const userData = ref(structuredClone(toRaw(props.userData)));
    watch(() => props, () => {
      userData.value = structuredClone(toRaw(props.userData));
    });
    const onFormSubmit = () => {
      emit("update:isDialogVisible", false);
      emit("submit", userData.value);
    };
    const onFormReset = () => {
      userData.value = structuredClone(toRaw(props.userData));
      emit("update:isDialogVisible", false);
    };
    const dialogVisibleUpdate = (val) => {
      emit("update:isDialogVisible", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$1;
      _push(ssrRenderComponent(VDialog, mergeProps({
        width: _ctx.$vuetify.display.smAndDown ? "auto" : 900,
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: onFormReset
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center pb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}> Edit User Information </h4><div class="text-body-1"${_scopeId3}> Updating user details will receive a privacy audit. </div></div>`);
                        _push4(ssrRenderComponent(VForm, {
                          class: "mt-4",
                          onSubmit: onFormSubmit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(userData).fullName.split(" ")[0],
                                            "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                            label: "First Name",
                                            placeholder: "John"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(userData).fullName.split(" ")[0],
                                              "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                              label: "First Name",
                                              placeholder: "John"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(userData).fullName.split(" ")[1],
                                            "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                            label: "Last Name",
                                            placeholder: "doe"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(userData).fullName.split(" ")[1],
                                              "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                              label: "Last Name",
                                              placeholder: "doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(userData).username,
                                            "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                            label: "Username",
                                            placeholder: "John Doe"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(userData).username,
                                              "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                              label: "Username",
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(userData).email,
                                            "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                            label: "Billing Email",
                                            placeholder: "johndoe@email.com"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(userData).email,
                                              "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                              label: "Billing Email",
                                              placeholder: "johndoe@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(userData).status,
                                            "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                            items: ["Active", "Inactive", "Pending"],
                                            label: "Status",
                                            placeholder: "Status"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(userData).status,
                                              "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                              items: ["Active", "Inactive", "Pending"],
                                              label: "Status",
                                              placeholder: "Status"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(userData).taxId,
                                            "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                            label: "Tax Id",
                                            placeholder: "Tax-3456789"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(userData).taxId,
                                              "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                              label: "Tax Id",
                                              placeholder: "Tax-3456789"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(userData).contact,
                                            "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                            label: "Contact",
                                            placeholder: "+1 9876543210"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(userData).contact,
                                              "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                              label: "Contact",
                                              placeholder: "+1 9876543210"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(userData).language,
                                            "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                            items: ["English", "Spanish", "French"],
                                            label: "Language",
                                            placeholder: "English",
                                            chips: "",
                                            "closable-chips": "",
                                            multiple: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(userData).language,
                                              "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                              items: ["English", "Spanish", "French"],
                                              label: "Language",
                                              placeholder: "English",
                                              chips: "",
                                              "closable-chips": "",
                                              multiple: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(userData).country,
                                            "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                            items: ["United States", "United Kingdom", "France"],
                                            label: "Country",
                                            placeholder: "United States"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(userData).country,
                                              "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                              items: ["United States", "United Kingdom", "France"],
                                              label: "Country",
                                              placeholder: "United States"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSwitch, {
                                            density: "compact",
                                            label: "Use as a billing address?"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSwitch, {
                                              density: "compact",
                                              label: "Use as a billing address?"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      class: "d-flex flex-wrap justify-center gap-4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, { type: "submit" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Submit `);
                                              } else {
                                                return [
                                                  createTextVNode(" Submit ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: onFormReset
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Cancel `);
                                              } else {
                                                return [
                                                  createTextVNode(" Cancel ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Submit ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "outlined",
                                              onClick: onFormReset
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel ")
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
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userData).fullName.split(" ")[0],
                                            "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                            label: "First Name",
                                            placeholder: "John"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userData).fullName.split(" ")[1],
                                            "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                            label: "Last Name",
                                            placeholder: "doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userData).username,
                                            "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                            label: "Username",
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userData).email,
                                            "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                            label: "Billing Email",
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(userData).status,
                                            "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                            items: ["Active", "Inactive", "Pending"],
                                            label: "Status",
                                            placeholder: "Status"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userData).taxId,
                                            "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                            label: "Tax Id",
                                            placeholder: "Tax-3456789"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userData).contact,
                                            "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                            label: "Contact",
                                            placeholder: "+1 9876543210"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(userData).language,
                                            "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                            items: ["English", "Spanish", "French"],
                                            label: "Language",
                                            placeholder: "English",
                                            chips: "",
                                            "closable-chips": "",
                                            multiple: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(userData).country,
                                            "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                            items: ["United States", "United Kingdom", "France"],
                                            label: "Country",
                                            placeholder: "United States"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSwitch, {
                                            density: "compact",
                                            label: "Use as a billing address?"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex flex-wrap justify-center gap-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: onFormReset
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userData).fullName.split(" ")[0],
                                          "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                          label: "First Name",
                                          placeholder: "John"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userData).fullName.split(" ")[1],
                                          "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                          label: "Last Name",
                                          placeholder: "doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userData).username,
                                          "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                          label: "Username",
                                          placeholder: "John Doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userData).email,
                                          "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                          label: "Billing Email",
                                          placeholder: "johndoe@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(userData).status,
                                          "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                          items: ["Active", "Inactive", "Pending"],
                                          label: "Status",
                                          placeholder: "Status"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userData).taxId,
                                          "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                          label: "Tax Id",
                                          placeholder: "Tax-3456789"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userData).contact,
                                          "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                          label: "Contact",
                                          placeholder: "+1 9876543210"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(userData).language,
                                          "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                          items: ["English", "Spanish", "French"],
                                          label: "Language",
                                          placeholder: "English",
                                          chips: "",
                                          "closable-chips": "",
                                          multiple: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(userData).country,
                                          "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                          items: ["United States", "United Kingdom", "France"],
                                          label: "Country",
                                          placeholder: "United States"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSwitch, {
                                          density: "compact",
                                          label: "Use as a billing address?"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex flex-wrap justify-center gap-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Submit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
                                          onClick: onFormReset
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-center pb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, " Edit User Information "),
                            createVNode("div", { class: "text-body-1" }, " Updating user details will receive a privacy audit. ")
                          ]),
                          createVNode(VForm, {
                            class: "mt-4",
                            onSubmit: withModifiers(onFormSubmit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userData).fullName.split(" ")[0],
                                        "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                        label: "First Name",
                                        placeholder: "John"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userData).fullName.split(" ")[1],
                                        "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                        label: "Last Name",
                                        placeholder: "doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userData).username,
                                        "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                        label: "Username",
                                        placeholder: "John Doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userData).email,
                                        "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                        label: "Billing Email",
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(userData).status,
                                        "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                        items: ["Active", "Inactive", "Pending"],
                                        label: "Status",
                                        placeholder: "Status"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userData).taxId,
                                        "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                        label: "Tax Id",
                                        placeholder: "Tax-3456789"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userData).contact,
                                        "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                        label: "Contact",
                                        placeholder: "+1 9876543210"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(userData).language,
                                        "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                        items: ["English", "Spanish", "French"],
                                        label: "Language",
                                        placeholder: "English",
                                        chips: "",
                                        "closable-chips": "",
                                        multiple: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(userData).country,
                                        "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                        items: ["United States", "United Kingdom", "France"],
                                        label: "Country",
                                        placeholder: "United States"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSwitch, {
                                        density: "compact",
                                        label: "Use as a billing address?"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex flex-wrap justify-center gap-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Submit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        variant: "outlined",
                                        onClick: onFormReset
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel ")
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: onFormReset
                    }),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center pb-6" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, " Edit User Information "),
                          createVNode("div", { class: "text-body-1" }, " Updating user details will receive a privacy audit. ")
                        ]),
                        createVNode(VForm, {
                          class: "mt-4",
                          onSubmit: withModifiers(onFormSubmit, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userData).fullName.split(" ")[0],
                                      "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                      label: "First Name",
                                      placeholder: "John"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userData).fullName.split(" ")[1],
                                      "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                      label: "Last Name",
                                      placeholder: "doe"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userData).username,
                                      "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                      label: "Username",
                                      placeholder: "John Doe"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userData).email,
                                      "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                      label: "Billing Email",
                                      placeholder: "johndoe@email.com"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(userData).status,
                                      "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                      items: ["Active", "Inactive", "Pending"],
                                      label: "Status",
                                      placeholder: "Status"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userData).taxId,
                                      "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                      label: "Tax Id",
                                      placeholder: "Tax-3456789"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userData).contact,
                                      "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                      label: "Contact",
                                      placeholder: "+1 9876543210"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(userData).language,
                                      "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                      items: ["English", "Spanish", "French"],
                                      label: "Language",
                                      placeholder: "English",
                                      chips: "",
                                      "closable-chips": "",
                                      multiple: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(userData).country,
                                      "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                      items: ["United States", "United Kingdom", "France"],
                                      label: "Country",
                                      placeholder: "United States"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSwitch, {
                                      density: "compact",
                                      label: "Use as a billing address?"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex flex-wrap justify-center gap-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, { type: "submit" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Submit ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      onClick: onFormReset
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancel ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: onFormReset
                  }),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center pb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, " Edit User Information "),
                        createVNode("div", { class: "text-body-1" }, " Updating user details will receive a privacy audit. ")
                      ]),
                      createVNode(VForm, {
                        class: "mt-4",
                        onSubmit: withModifiers(onFormSubmit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userData).fullName.split(" ")[0],
                                    "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[0] = $event,
                                    label: "First Name",
                                    placeholder: "John"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userData).fullName.split(" ")[1],
                                    "onUpdate:modelValue": ($event) => unref(userData).fullName.split(" ")[1] = $event,
                                    label: "Last Name",
                                    placeholder: "doe"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userData).username,
                                    "onUpdate:modelValue": ($event) => unref(userData).username = $event,
                                    label: "Username",
                                    placeholder: "John Doe"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userData).email,
                                    "onUpdate:modelValue": ($event) => unref(userData).email = $event,
                                    label: "Billing Email",
                                    placeholder: "johndoe@email.com"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(userData).status,
                                    "onUpdate:modelValue": ($event) => unref(userData).status = $event,
                                    items: ["Active", "Inactive", "Pending"],
                                    label: "Status",
                                    placeholder: "Status"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userData).taxId,
                                    "onUpdate:modelValue": ($event) => unref(userData).taxId = $event,
                                    label: "Tax Id",
                                    placeholder: "Tax-3456789"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userData).contact,
                                    "onUpdate:modelValue": ($event) => unref(userData).contact = $event,
                                    label: "Contact",
                                    placeholder: "+1 9876543210"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(userData).language,
                                    "onUpdate:modelValue": ($event) => unref(userData).language = $event,
                                    items: ["English", "Spanish", "French"],
                                    label: "Language",
                                    placeholder: "English",
                                    chips: "",
                                    "closable-chips": "",
                                    multiple: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(userData).country,
                                    "onUpdate:modelValue": ($event) => unref(userData).country = $event,
                                    items: ["United States", "United Kingdom", "France"],
                                    label: "Country",
                                    placeholder: "United States"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSwitch, {
                                    density: "compact",
                                    label: "Use as a billing address?"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "d-flex flex-wrap justify-center gap-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    onClick: onFormReset
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/UserInfoEditDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
