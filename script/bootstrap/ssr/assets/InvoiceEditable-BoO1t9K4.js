import { _ as _sfc_main$2 } from "./AppDateTimePicker-B0c_dYDs.js";
import { ref, toRaw, watch, computed, resolveComponent, withCtx, createVNode, unref, isRef, createTextVNode, toDisplayString, useSSRContext, mergeProps, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { a as VIcon, _ as _export_sfc, z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
const _sfc_main$1 = {
  __name: "InvoiceProductEdit",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true,
      default: () => ({
        title: "App Design",
        cost: 24,
        hours: 1,
        description: "Designed UI kit & app pages."
      })
    }
  },
  emits: [
    "removeProduct",
    "totalAmount"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const itemsOptions = [
      {
        title: "App Design",
        cost: 24,
        hours: 1,
        description: "Designed UI kit & app pages."
      },
      {
        title: "App Customization",
        cost: 26,
        hours: 1,
        description: "Customization & Bug Fixes."
      },
      {
        title: "ABC Template",
        cost: 28,
        hours: 1,
        description: "Vuetify admin template."
      },
      {
        title: "App Development",
        cost: 32,
        hours: 1,
        description: "Native App Development."
      }
    ];
    const selectedItem = ref("App Customization");
    const localProductData = ref(structuredClone(toRaw(props.data)));
    watch(selectedItem, () => {
      const item = itemsOptions.filter((obj) => {
        return obj.title === selectedItem.value;
      });
      localProductData.value = item[0];
    });
    const removeProduct = () => {
      emit("removeProduct", props.id);
    };
    const totalPrice = computed(() => Number(localProductData.value.cost) * Number(localProductData.value.hours));
    watch(totalPrice, () => {
      emit("totalAmount", totalPrice.value);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<!--[--><div class="add-products-header mb-2 d-none d-md-flex mb-4">`);
      _push(ssrRenderComponent(VRow, { class: "me-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}> Item </h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, " Item ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 ps-2"${_scopeId2}> Cost </h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 ps-2" }, " Cost ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 ps-2"${_scopeId2}> Hours </h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 ps-2" }, " Hours ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}> Price </h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, " Price ")
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
                  createVNode("h6", { class: "text-h6" }, " Item ")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "2"
              }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6 ps-2" }, " Cost ")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "2"
              }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6 ps-2" }, " Hours ")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "2"
              }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, " Price ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, {
        flat: "",
        border: "",
        class: "d-flex flex-sm-row flex-column-reverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-5 flex-grow-1"${_scopeId}>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(selectedItem),
                          "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                          items: itemsOptions,
                          "item-title": "title",
                          "item-value": "title",
                          label: "Select Item",
                          placeholder: "Select Item",
                          class: "mb-5"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(localProductData).description,
                          "onUpdate:modelValue": ($event) => unref(localProductData).description = $event,
                          rows: "2",
                          label: "Description",
                          placeholder: "Item description"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(selectedItem),
                            "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                            items: itemsOptions,
                            "item-title": "title",
                            "item-value": "title",
                            label: "Select Item",
                            placeholder: "Select Item",
                            class: "mb-5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            modelValue: unref(localProductData).description,
                            "onUpdate:modelValue": ($event) => unref(localProductData).description = $event,
                            rows: "2",
                            label: "Description",
                            placeholder: "Item description"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2",
                    sm: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(localProductData).cost,
                          "onUpdate:modelValue": ($event) => unref(localProductData).cost = $event,
                          type: "number",
                          label: "Cost",
                          placeholder: "100"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-high-emphasis mt-5"${_scopeId3}><p class="mb-1"${_scopeId3}> Discount </p><span${_scopeId3}>0%</span><span class="mx-2"${_scopeId3}> 0% `);
                        _push4(ssrRenderComponent(VTooltip, { activator: "parent" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tax 1`);
                            } else {
                              return [
                                createTextVNode("Tax 1")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</span><span${_scopeId3}> 0% `);
                        _push4(ssrRenderComponent(VTooltip, { activator: "parent" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tax 2`);
                            } else {
                              return [
                                createTextVNode("Tax 2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</span></div>`);
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(localProductData).cost,
                            "onUpdate:modelValue": ($event) => unref(localProductData).cost = $event,
                            type: "number",
                            label: "Cost",
                            placeholder: "100"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "text-high-emphasis mt-5" }, [
                            createVNode("p", { class: "mb-1" }, " Discount "),
                            createVNode("span", null, "0%"),
                            createVNode("span", { class: "mx-2" }, [
                              createTextVNode(" 0% "),
                              createVNode(VTooltip, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createTextVNode("Tax 1")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("span", null, [
                              createTextVNode(" 0% "),
                              createVNode(VTooltip, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createTextVNode("Tax 2")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2",
                    sm: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(localProductData).hours,
                          "onUpdate:modelValue": ($event) => unref(localProductData).hours = $event,
                          type: "number",
                          label: "Hours",
                          placeholder: "5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(localProductData).hours,
                            "onUpdate:modelValue": ($event) => unref(localProductData).hours = $event,
                            type: "number",
                            label: "Hours",
                            placeholder: "5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2",
                    sm: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="my-2"${_scopeId3}><span class="d-inline d-md-none"${_scopeId3}>Price: </span><span class="text-high-emphasis"${_scopeId3}>$${ssrInterpolate(unref(totalPrice))}</span></p>`);
                      } else {
                        return [
                          createVNode("p", { class: "my-2" }, [
                            createVNode("span", { class: "d-inline d-md-none" }, "Price: "),
                            createVNode("span", { class: "text-high-emphasis" }, "$" + toDisplayString(unref(totalPrice)), 1)
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
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(selectedItem),
                          "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                          items: itemsOptions,
                          "item-title": "title",
                          "item-value": "title",
                          label: "Select Item",
                          placeholder: "Select Item",
                          class: "mb-5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextarea, {
                          modelValue: unref(localProductData).description,
                          "onUpdate:modelValue": ($event) => unref(localProductData).description = $event,
                          rows: "2",
                          label: "Description",
                          placeholder: "Item description"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(localProductData).cost,
                          "onUpdate:modelValue": ($event) => unref(localProductData).cost = $event,
                          type: "number",
                          label: "Cost",
                          placeholder: "100"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "text-high-emphasis mt-5" }, [
                          createVNode("p", { class: "mb-1" }, " Discount "),
                          createVNode("span", null, "0%"),
                          createVNode("span", { class: "mx-2" }, [
                            createTextVNode(" 0% "),
                            createVNode(VTooltip, { activator: "parent" }, {
                              default: withCtx(() => [
                                createTextVNode("Tax 1")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("span", null, [
                            createTextVNode(" 0% "),
                            createVNode(VTooltip, { activator: "parent" }, {
                              default: withCtx(() => [
                                createTextVNode("Tax 2")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(localProductData).hours,
                          "onUpdate:modelValue": ($event) => unref(localProductData).hours = $event,
                          type: "number",
                          label: "Hours",
                          placeholder: "5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "my-2" }, [
                          createVNode("span", { class: "d-inline d-md-none" }, "Price: "),
                          createVNode("span", { class: "text-high-emphasis" }, "$" + toDisplayString(unref(totalPrice)), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass([_ctx.$vuetify.display.smAndUp ? "border-s" : "border-b", "d-flex flex-column align-end item-actions"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, { onClick: removeProduct }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    size: 24,
                    icon: "ri-close-line"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      size: 24,
                      icon: "ri-close-line"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pa-5 flex-grow-1" }, [
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(selectedItem),
                          "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                          items: itemsOptions,
                          "item-title": "title",
                          "item-value": "title",
                          label: "Select Item",
                          placeholder: "Select Item",
                          class: "mb-5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextarea, {
                          modelValue: unref(localProductData).description,
                          "onUpdate:modelValue": ($event) => unref(localProductData).description = $event,
                          rows: "2",
                          label: "Description",
                          placeholder: "Item description"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(localProductData).cost,
                          "onUpdate:modelValue": ($event) => unref(localProductData).cost = $event,
                          type: "number",
                          label: "Cost",
                          placeholder: "100"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "text-high-emphasis mt-5" }, [
                          createVNode("p", { class: "mb-1" }, " Discount "),
                          createVNode("span", null, "0%"),
                          createVNode("span", { class: "mx-2" }, [
                            createTextVNode(" 0% "),
                            createVNode(VTooltip, { activator: "parent" }, {
                              default: withCtx(() => [
                                createTextVNode("Tax 1")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("span", null, [
                            createTextVNode(" 0% "),
                            createVNode(VTooltip, { activator: "parent" }, {
                              default: withCtx(() => [
                                createTextVNode("Tax 2")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(localProductData).hours,
                          "onUpdate:modelValue": ($event) => unref(localProductData).hours = $event,
                          type: "number",
                          label: "Hours",
                          placeholder: "5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "my-2" }, [
                          createVNode("span", { class: "d-inline d-md-none" }, "Price: "),
                          createVNode("span", { class: "text-high-emphasis" }, "$" + toDisplayString(unref(totalPrice)), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", {
                class: ["d-flex flex-column align-end item-actions", _ctx.$vuetify.display.smAndUp ? "border-s" : "border-b"]
              }, [
                createVNode(_component_IconBtn, { onClick: removeProduct }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: 24,
                      icon: "ri-close-line"
                    })
                  ]),
                  _: 1
                })
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/invoice/InvoiceProductEdit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "InvoiceEditable",
  __ssrInlineRender: true,
  props: {
    data: {
      type: null,
      required: true
    }
  },
  emits: [
    "push",
    "remove"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const invoice = ref(props.data.invoice);
    const salesperson = ref(props.data.salesperson);
    const thanksNote = ref(props.data.thanksNote);
    const note = ref(props.data.note);
    const clients = ref([]);
    const fetchClients = async () => {
      const { data, error } = await useApi("/apps/invoice/clients");
      if (error.value)
        console.log(error.value);
      else
        clients.value = data.value;
    };
    fetchClients();
    const addItem = () => {
      emit("push", {
        title: "App Design",
        cost: 24,
        hours: 1,
        description: "Designed UI kit & app pages."
      });
    };
    const removeProduct = (id) => {
      emit("remove", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$2;
      _push(ssrRenderComponent(VCard, mergeProps({ class: "pa-sm-12 pa-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-wrap justify-space-between flex-column rounded bg-var-theme-background flex-sm-row gap-6 pa-6 mb-6" data-v-c5dfeabe${_scopeId}><div data-v-c5dfeabe${_scopeId}><div class="app-logo mb-6" data-v-c5dfeabe${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VNodeRenderer), {
              nodes: unref(themeConfig).app.logo
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="app-logo-title" data-v-c5dfeabe${_scopeId}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div><p class="text-high-emphasis mb-0 text-body-1" data-v-c5dfeabe${_scopeId}> Office 149, 450 South Brand Brooklyn </p><p class="text-high-emphasis mb-0 text-body-1" data-v-c5dfeabe${_scopeId}> San Diego County, CA 91905, USA </p><p class="text-high-emphasis mb-0 text-body-1" data-v-c5dfeabe${_scopeId}> +1 (123) 456 7891, +44 (876) 543 2198 </p></div><div class="d-flex gap-2 flex-column" data-v-c5dfeabe${_scopeId}><div class="d-flex align-start align-sm-center font-weight-medium justify-sm-end flex-column flex-sm-row text-lg" data-v-c5dfeabe${_scopeId}><span class="text-high-emphasis me-4" style="${ssrRenderStyle({ "inline-size": "5.625rem" })}" data-v-c5dfeabe${_scopeId}>Invoice</span><span data-v-c5dfeabe${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(invoice).id,
              "onUpdate:modelValue": ($event) => unref(invoice).id = $event,
              disabled: "",
              density: "compact",
              prefix: "#",
              style: { "inline-size": "9.5rem" }
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="d-flex align-start align-sm-center justify-sm-end flex-column flex-sm-row" data-v-c5dfeabe${_scopeId}><span class="text-high-emphasis me-4" style="${ssrRenderStyle({ "inline-size": "5.625rem" })}" data-v-c5dfeabe${_scopeId}>Date Issued:</span><span style="${ssrRenderStyle({ "inline-size": "9.5rem" })}" data-v-c5dfeabe${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppDateTimePicker, {
              modelValue: unref(invoice).issuedDate,
              "onUpdate:modelValue": ($event) => unref(invoice).issuedDate = $event,
              density: "compact",
              placeholder: "YYYY-MM-DD",
              config: { position: "auto right" }
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="d-flex align-start align-sm-center justify-sm-end flex-column flex-sm-row" data-v-c5dfeabe${_scopeId}><span class="text-high-emphasis me-4" style="${ssrRenderStyle({ "inline-size": "5.625rem" })}" data-v-c5dfeabe${_scopeId}>Due Date:</span><span style="${ssrRenderStyle({ "min-inline-size": "9.5rem" })}" data-v-c5dfeabe${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppDateTimePicker, {
              modelValue: unref(invoice).dueDate,
              "onUpdate:modelValue": ($event) => unref(invoice).dueDate = $event,
              density: "compact",
              placeholder: "YYYY-MM-DD",
              config: { position: "auto right" }
            }, null, _parent2, _scopeId));
            _push2(`</span></div></div></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { class: "text-no-wrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h6 class="text-h6 mb-4" data-v-c5dfeabe${_scopeId3}> Invoice To: </h6>`);
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(invoice).client,
                          "onUpdate:modelValue": ($event) => unref(invoice).client = $event,
                          items: unref(clients),
                          "item-title": "name",
                          "item-value": "name",
                          placeholder: "Select Client",
                          "return-object": "",
                          class: "mb-4",
                          style: { "inline-size": "11.875rem" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<p class="mb-0 text-body-1" data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(unref(invoice).client.name)}</p><p class="mb-0 text-body-1" data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(unref(invoice).client.company)}</p>`);
                        if (unref(invoice).client.address) {
                          _push4(`<p class="mb-0 text-body-1" data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(unref(invoice).client.address)}, ${ssrInterpolate(unref(invoice).client.country)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<p class="mb-0 text-body-1" data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(unref(invoice).client.contact)}</p><p class="mb-0 text-body-1" data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(unref(invoice).client.companyEmail)}</p>`);
                      } else {
                        return [
                          createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                          createVNode(VSelect, {
                            modelValue: unref(invoice).client,
                            "onUpdate:modelValue": ($event) => unref(invoice).client = $event,
                            items: unref(clients),
                            "item-title": "name",
                            "item-value": "name",
                            placeholder: "Select Client",
                            "return-object": "",
                            class: "mb-4",
                            style: { "inline-size": "11.875rem" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                          createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                          unref(invoice).client.address ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mb-0 text-body-1"
                          }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                          createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { class: "text-no-wrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h6 class="text-h6 mb-4" data-v-c5dfeabe${_scopeId3}> Bill To: </h6><table class="text-body-1" data-v-c5dfeabe${_scopeId3}><tbody data-v-c5dfeabe${_scopeId3}><tr data-v-c5dfeabe${_scopeId3}><td class="pe-6" data-v-c5dfeabe${_scopeId3}> Total Due: </td><td data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(props.data.paymentDetails.totalDue)}</td></tr><tr data-v-c5dfeabe${_scopeId3}><td class="pe-6" data-v-c5dfeabe${_scopeId3}> Bank Name: </td><td data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(props.data.paymentDetails.bankName)}</td></tr><tr data-v-c5dfeabe${_scopeId3}><td class="pe-6" data-v-c5dfeabe${_scopeId3}> Country: </td><td data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(props.data.paymentDetails.country)}</td></tr><tr data-v-c5dfeabe${_scopeId3}><td class="pe-6" data-v-c5dfeabe${_scopeId3}> IBAN: </td><td data-v-c5dfeabe${_scopeId3}><p class="mb-0 text-wrap me-4" data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(props.data.paymentDetails.iban)}</p></td></tr><tr data-v-c5dfeabe${_scopeId3}><td class="pe-6" data-v-c5dfeabe${_scopeId3}> SWIFT Code: </td><td data-v-c5dfeabe${_scopeId3}>${ssrInterpolate(props.data.paymentDetails.swiftCode)}</td></tr></tbody></table>`);
                      } else {
                        return [
                          createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                          createVNode("table", { class: "text-body-1" }, [
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("td", { class: "pe-6" }, " Total Due: "),
                                createVNode("td", null, toDisplayString(props.data.paymentDetails.totalDue), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "pe-6" }, " Bank Name: "),
                                createVNode("td", null, toDisplayString(props.data.paymentDetails.bankName), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "pe-6" }, " Country: "),
                                createVNode("td", null, toDisplayString(props.data.paymentDetails.country), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "pe-6" }, " IBAN: "),
                                createVNode("td", null, [
                                  createVNode("p", { class: "mb-0 text-wrap me-4" }, toDisplayString(props.data.paymentDetails.iban), 1)
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                                createVNode("td", null, toDisplayString(props.data.paymentDetails.swiftCode), 1)
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { class: "text-no-wrap" }, {
                      default: withCtx(() => [
                        createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                        createVNode(VSelect, {
                          modelValue: unref(invoice).client,
                          "onUpdate:modelValue": ($event) => unref(invoice).client = $event,
                          items: unref(clients),
                          "item-title": "name",
                          "item-value": "name",
                          placeholder: "Select Client",
                          "return-object": "",
                          class: "mb-4",
                          style: { "inline-size": "11.875rem" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                        unref(invoice).client.address ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mb-0 text-body-1"
                        }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "text-no-wrap" }, {
                      default: withCtx(() => [
                        createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                        createVNode("table", { class: "text-body-1" }, [
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("td", { class: "pe-6" }, " Total Due: "),
                              createVNode("td", null, toDisplayString(props.data.paymentDetails.totalDue), 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "pe-6" }, " Bank Name: "),
                              createVNode("td", null, toDisplayString(props.data.paymentDetails.bankName), 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "pe-6" }, " Country: "),
                              createVNode("td", null, toDisplayString(props.data.paymentDetails.country), 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "pe-6" }, " IBAN: "),
                              createVNode("td", null, [
                                createVNode("p", { class: "mb-0 text-wrap me-4" }, toDisplayString(props.data.paymentDetails.iban), 1)
                              ])
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                              createVNode("td", null, toDisplayString(props.data.paymentDetails.swiftCode), 1)
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "my-6 border-dashed" }, null, _parent2, _scopeId));
            _push2(`<div class="add-products-form" data-v-c5dfeabe${_scopeId}><!--[-->`);
            ssrRenderList(props.data.purchasedProducts, (product, index) => {
              _push2(`<div class="mb-4" data-v-c5dfeabe${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                id: index,
                data: product,
                onRemoveProduct: removeProduct
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VBtn, {
              size: "small",
              "prepend-icon": "ri-add-line",
              onClick: addItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Item `);
                } else {
                  return [
                    createTextVNode(" Add Item ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VDivider, { class: "my-6 border-dashed" }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-space-between flex-wrap flex-column flex-sm-row" data-v-c5dfeabe${_scopeId}><div class="mb-6 mb-sm-0" data-v-c5dfeabe${_scopeId}><div class="d-flex align-center mb-4" data-v-c5dfeabe${_scopeId}><h6 class="text-h6 me-2" data-v-c5dfeabe${_scopeId}> Salesperson: </h6>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(salesperson),
              "onUpdate:modelValue": ($event) => isRef(salesperson) ? salesperson.value = $event : null,
              style: { "inline-size": "8rem" },
              placeholder: "John Doe"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(thanksNote),
              "onUpdate:modelValue": ($event) => isRef(thanksNote) ? thanksNote.value = $event : null,
              placeholder: "Thanks for your business"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-c5dfeabe${_scopeId}><table class="w-100" data-v-c5dfeabe${_scopeId}><tbody data-v-c5dfeabe${_scopeId}><tr data-v-c5dfeabe${_scopeId}><td class="pe-16 text-body-1" data-v-c5dfeabe${_scopeId}> Subtotal: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-c5dfeabe${_scopeId}><h6 class="text-h6" data-v-c5dfeabe${_scopeId}> $1800 </h6></td></tr><tr data-v-c5dfeabe${_scopeId}><td class="pe-16 text-body-1" data-v-c5dfeabe${_scopeId}> Discount: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-c5dfeabe${_scopeId}><h6 class="text-h6" data-v-c5dfeabe${_scopeId}> $28 </h6></td></tr><tr data-v-c5dfeabe${_scopeId}><td class="pe-16 text-body-1" data-v-c5dfeabe${_scopeId}> Tax: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-c5dfeabe${_scopeId}><h6 class="text-h6" data-v-c5dfeabe${_scopeId}> 21% </h6></td></tr></tbody></table>`);
            _push2(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent2, _scopeId));
            _push2(`<table class="w-100" data-v-c5dfeabe${_scopeId}><tbody data-v-c5dfeabe${_scopeId}><tr data-v-c5dfeabe${_scopeId}><td class="pe-16 text-body-1" data-v-c5dfeabe${_scopeId}> Total: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-c5dfeabe${_scopeId}><h6 class="text-h6" data-v-c5dfeabe${_scopeId}> $1690 </h6></td></tr></tbody></table></div></div>`);
            _push2(ssrRenderComponent(VDivider, { class: "my-6 border-dashed" }, null, _parent2, _scopeId));
            _push2(`<div data-v-c5dfeabe${_scopeId}><h6 class="text-h6 mb-1" data-v-c5dfeabe${_scopeId}> Note: </h6>`);
            _push2(ssrRenderComponent(VTextarea, {
              modelValue: unref(note),
              "onUpdate:modelValue": ($event) => isRef(note) ? note.value = $event : null,
              placeholder: "Write note here...",
              rows: 2
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-wrap justify-space-between flex-column rounded bg-var-theme-background flex-sm-row gap-6 pa-6 mb-6" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "app-logo mb-6" }, [
                    createVNode(unref(VNodeRenderer), {
                      nodes: unref(themeConfig).app.logo
                    }, null, 8, ["nodes"]),
                    createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                  ]),
                  createVNode("p", { class: "text-high-emphasis mb-0 text-body-1" }, " Office 149, 450 South Brand Brooklyn "),
                  createVNode("p", { class: "text-high-emphasis mb-0 text-body-1" }, " San Diego County, CA 91905, USA "),
                  createVNode("p", { class: "text-high-emphasis mb-0 text-body-1" }, " +1 (123) 456 7891, +44 (876) 543 2198 ")
                ]),
                createVNode("div", { class: "d-flex gap-2 flex-column" }, [
                  createVNode("div", { class: "d-flex align-start align-sm-center font-weight-medium justify-sm-end flex-column flex-sm-row text-lg" }, [
                    createVNode("span", {
                      class: "text-high-emphasis me-4",
                      style: { "inline-size": "5.625rem" }
                    }, "Invoice"),
                    createVNode("span", null, [
                      createVNode(VTextField, {
                        modelValue: unref(invoice).id,
                        "onUpdate:modelValue": ($event) => unref(invoice).id = $event,
                        disabled: "",
                        density: "compact",
                        prefix: "#",
                        style: { "inline-size": "9.5rem" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-start align-sm-center justify-sm-end flex-column flex-sm-row" }, [
                    createVNode("span", {
                      class: "text-high-emphasis me-4",
                      style: { "inline-size": "5.625rem" }
                    }, "Date Issued:"),
                    createVNode("span", { style: { "inline-size": "9.5rem" } }, [
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: unref(invoice).issuedDate,
                        "onUpdate:modelValue": ($event) => unref(invoice).issuedDate = $event,
                        density: "compact",
                        placeholder: "YYYY-MM-DD",
                        config: { position: "auto right" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-start align-sm-center justify-sm-end flex-column flex-sm-row" }, [
                    createVNode("span", {
                      class: "text-high-emphasis me-4",
                      style: { "inline-size": "5.625rem" }
                    }, "Due Date:"),
                    createVNode("span", { style: { "min-inline-size": "9.5rem" } }, [
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: unref(invoice).dueDate,
                        "onUpdate:modelValue": ($event) => unref(invoice).dueDate = $event,
                        density: "compact",
                        placeholder: "YYYY-MM-DD",
                        config: { position: "auto right" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ])
              ]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { class: "text-no-wrap" }, {
                    default: withCtx(() => [
                      createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                      createVNode(VSelect, {
                        modelValue: unref(invoice).client,
                        "onUpdate:modelValue": ($event) => unref(invoice).client = $event,
                        items: unref(clients),
                        "item-title": "name",
                        "item-value": "name",
                        placeholder: "Select Client",
                        "return-object": "",
                        class: "mb-4",
                        style: { "inline-size": "11.875rem" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                      unref(invoice).client.address ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mb-0 text-body-1"
                      }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1)) : createCommentVNode("", true),
                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "text-no-wrap" }, {
                    default: withCtx(() => [
                      createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                      createVNode("table", { class: "text-body-1" }, [
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("td", { class: "pe-6" }, " Total Due: "),
                            createVNode("td", null, toDisplayString(props.data.paymentDetails.totalDue), 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "pe-6" }, " Bank Name: "),
                            createVNode("td", null, toDisplayString(props.data.paymentDetails.bankName), 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "pe-6" }, " Country: "),
                            createVNode("td", null, toDisplayString(props.data.paymentDetails.country), 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "pe-6" }, " IBAN: "),
                            createVNode("td", null, [
                              createVNode("p", { class: "mb-0 text-wrap me-4" }, toDisplayString(props.data.paymentDetails.iban), 1)
                            ])
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                            createVNode("td", null, toDisplayString(props.data.paymentDetails.swiftCode), 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "my-6 border-dashed" }),
              createVNode("div", { class: "add-products-form" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.data.purchasedProducts, (product, index) => {
                  return openBlock(), createBlock("div", {
                    key: product.title,
                    class: "mb-4"
                  }, [
                    createVNode(_sfc_main$1, {
                      id: index,
                      data: product,
                      onRemoveProduct: removeProduct
                    }, null, 8, ["id", "data"])
                  ]);
                }), 128)),
                createVNode(VBtn, {
                  size: "small",
                  "prepend-icon": "ri-add-line",
                  onClick: addItem
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Item ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(VDivider, { class: "my-6 border-dashed" }),
              createVNode("div", { class: "d-flex justify-space-between flex-wrap flex-column flex-sm-row" }, [
                createVNode("div", { class: "mb-6 mb-sm-0" }, [
                  createVNode("div", { class: "d-flex align-center mb-4" }, [
                    createVNode("h6", { class: "text-h6 me-2" }, " Salesperson: "),
                    createVNode(VTextField, {
                      modelValue: unref(salesperson),
                      "onUpdate:modelValue": ($event) => isRef(salesperson) ? salesperson.value = $event : null,
                      style: { "inline-size": "8rem" },
                      placeholder: "John Doe"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(VTextField, {
                    modelValue: unref(thanksNote),
                    "onUpdate:modelValue": ($event) => isRef(thanksNote) ? thanksNote.value = $event : null,
                    placeholder: "Thanks for your business"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("table", { class: "w-100" }, [
                    createVNode("tbody", null, [
                      createVNode("tr", null, [
                        createVNode("td", { class: "pe-16 text-body-1" }, " Subtotal: "),
                        createVNode("td", {
                          class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                        }, [
                          createVNode("h6", { class: "text-h6" }, " $1800 ")
                        ], 2)
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", { class: "pe-16 text-body-1" }, " Discount: "),
                        createVNode("td", {
                          class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                        }, [
                          createVNode("h6", { class: "text-h6" }, " $28 ")
                        ], 2)
                      ]),
                      createVNode("tr", null, [
                        createVNode("td", { class: "pe-16 text-body-1" }, " Tax: "),
                        createVNode("td", {
                          class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                        }, [
                          createVNode("h6", { class: "text-h6" }, " 21% ")
                        ], 2)
                      ])
                    ])
                  ]),
                  createVNode(VDivider, { class: "my-2" }),
                  createVNode("table", { class: "w-100" }, [
                    createVNode("tbody", null, [
                      createVNode("tr", null, [
                        createVNode("td", { class: "pe-16 text-body-1" }, " Total: "),
                        createVNode("td", {
                          class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                        }, [
                          createVNode("h6", { class: "text-h6" }, " $1690 ")
                        ], 2)
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode(VDivider, { class: "my-6 border-dashed" }),
              createVNode("div", null, [
                createVNode("h6", { class: "text-h6 mb-1" }, " Note: "),
                createVNode(VTextarea, {
                  modelValue: unref(note),
                  "onUpdate:modelValue": ($event) => isRef(note) ? note.value = $event : null,
                  placeholder: "Write note here...",
                  rows: 2
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/invoice/InvoiceEditable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InvoiceEditable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5dfeabe"]]);
export {
  InvoiceEditable as I
};
