import { _ as _sfc_main$4 } from "./AddEditAddressDialog-CR2aSRYs.js";
import { _ as __unplugin_components_0$1 } from "./CustomRadiosWithIcon-CXRflZSC.js";
import { _ as __unplugin_components_0 } from "./CustomRadios-DrYzSNcj.js";
import { ref, watch, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext, resolveComponent, mergeProps, createCommentVNode, createElementBlock, createStaticVNode, createElementVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VAlert, a as VAlertTitle } from "./VAlert-CqjinC0F.js";
import { V as VRating } from "./VRating-BxS5q7bh.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
const _sfc_main$3 = {
  __name: "Address",
  __ssrInlineRender: true,
  props: {
    currentStep: {
      type: Number,
      required: false
    },
    checkoutData: {
      type: null,
      required: true
    }
  },
  emits: [
    "update:currentStep",
    "update:checkout-data"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const checkoutAddressDataLocal = ref(JSON.parse(JSON.stringify(props.checkoutData)));
    const isEditAddressDialogVisible = ref(false);
    watch(() => props.checkoutData, (value) => {
      checkoutAddressDataLocal.value = JSON.parse(JSON.stringify(value));
    });
    const deliveryOptions = [
      {
        icon: "ri-user-line",
        title: "Standard",
        desc: "Get your product in 1 Week.",
        value: "free"
      },
      {
        icon: "ri-star-smile-line",
        title: "Express",
        desc: "Get your product in 3-4 days.",
        value: "express"
      },
      {
        icon: "ri-vip-crown-line",
        title: "Overnight",
        desc: "Get your product in 1 day.",
        value: "overnight"
      }
    ];
    const resolveAddressBadgeColor = {
      home: "primary",
      office: "success"
    };
    const resolveDeliveryBadgeData = {
      free: {
        color: "success",
        price: "Free"
      },
      express: {
        color: "secondary",
        price: 10
      },
      overnight: {
        color: "secondary",
        price: 15
      }
    };
    const totalPriceWithDeliveryCharges = computed(() => {
      let deliveryCharges = 0;
      if (checkoutAddressDataLocal.value.deliverySpeed !== "free")
        deliveryCharges = resolveDeliveryBadgeData[checkoutAddressDataLocal.value.deliverySpeed].price;
      return checkoutAddressDataLocal.value.orderAmount + deliveryCharges;
    });
    const updateAddressData = () => {
      checkoutAddressDataLocal.value.deliveryCharges = resolveDeliveryBadgeData[checkoutAddressDataLocal.value.deliverySpeed].price;
      emit("update:checkout-data", checkoutAddressDataLocal.value);
    };
    const nextStep = () => {
      updateAddressData();
      emit("update:currentStep", props.currentStep ? props.currentStep + 1 : 1);
    };
    watch(() => props.currentStep, updateAddressData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadios = __unplugin_components_0;
      const _component_CustomRadiosWithIcon = __unplugin_components_0$1;
      const _component_AddEditAddressDialog = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 mb-4" data-v-2b587f29${_scopeId2}> Select your preferable address </div>`);
                  _push3(ssrRenderComponent(_component_CustomRadios, {
                    "selected-radio": unref(checkoutAddressDataLocal).deliveryAddress,
                    "onUpdate:selectedRadio": ($event) => unref(checkoutAddressDataLocal).deliveryAddress = $event,
                    "radio-content": unref(checkoutAddressDataLocal).addresses,
                    "grid-column": { cols: "12", sm: "6" }
                  }, {
                    default: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100" data-v-2b587f29${_scopeId3}><div class="d-flex justify-space-between mb-2" data-v-2b587f29${_scopeId3}><div class="text-h6" data-v-2b587f29${_scopeId3}>${ssrInterpolate(item.title)}</div>`);
                        _push4(ssrRenderComponent(VChip, {
                          color: resolveAddressBadgeColor[item.value],
                          size: "small",
                          class: "text-capitalize"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(item.value)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.value), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div><p class="text-body-2 mb-0" data-v-2b587f29${_scopeId3}>${ssrInterpolate(item.desc)}</p><p class="text-body-2 mb-0" data-v-2b587f29${_scopeId3}> Mobile: ${ssrInterpolate(item.subtitle)}</p><p class="text-body-2 mb-3" data-v-2b587f29${_scopeId3}> Cash/Card on delivery available </p>`);
                        _push4(ssrRenderComponent(VDivider, { class: "pb-2" }, null, _parent4, _scopeId3));
                        _push4(`<div class="d-flex gap-x-4 py-2" data-v-2b587f29${_scopeId3}><a href="javascript:void(0)" class="text-base" data-v-2b587f29${_scopeId3}>Edit</a><a href="javascript:void(0)" class="text-base" data-v-2b587f29${_scopeId3}>Remove</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-100" }, [
                            createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                              createVNode("div", { class: "text-h6" }, toDisplayString(item.title), 1),
                              createVNode(VChip, {
                                color: resolveAddressBadgeColor[item.value],
                                size: "small",
                                class: "text-capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(item.desc), 1),
                            createVNode("p", { class: "text-body-2 mb-0" }, " Mobile: " + toDisplayString(item.subtitle), 1),
                            createVNode("p", { class: "text-body-2 mb-3" }, " Cash/Card on delivery available "),
                            createVNode(VDivider, { class: "pb-2" }),
                            createVNode("div", { class: "d-flex gap-x-4 py-2" }, [
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-base"
                              }, "Edit"),
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-base"
                              }, "Remove")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    class: "mt-4 mb-6",
                    size: "small",
                    onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add New Address `);
                      } else {
                        return [
                          createTextVNode(" Add New Address ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="text-h6 mb-4" data-v-2b587f29${_scopeId2}> Choose Delivery Speed </div>`);
                  _push3(ssrRenderComponent(_component_CustomRadiosWithIcon, {
                    "selected-radio": unref(checkoutAddressDataLocal).deliverySpeed,
                    "onUpdate:selectedRadio": ($event) => unref(checkoutAddressDataLocal).deliverySpeed = $event,
                    "radio-content": deliveryOptions,
                    "grid-column": { cols: "12", sm: "4" }
                  }, {
                    default: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-column align-center gap-2 w-100" data-v-2b587f29${_scopeId3}><div class="d-flex justify-end w-100 mb-n5" data-v-2b587f29${_scopeId3}>`);
                        _push4(ssrRenderComponent(VChip, {
                          color: resolveDeliveryBadgeData[item.value].color,
                          size: "small"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(resolveDeliveryBadgeData[item.value].price === "Free" ? resolveDeliveryBadgeData[item.value].price : `$${resolveDeliveryBadgeData[item.value].price}`)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(resolveDeliveryBadgeData[item.value].price === "Free" ? resolveDeliveryBadgeData[item.value].price : `$${resolveDeliveryBadgeData[item.value].price}`), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VIcon, {
                          size: "28",
                          icon: item.icon,
                          class: "text-high-emphasis"
                        }, null, _parent4, _scopeId3));
                        _push4(`<h6 class="text-h6" data-v-2b587f29${_scopeId3}>${ssrInterpolate(item.title)}</h6><p class="text-body-2 mb-0" data-v-2b587f29${_scopeId3}>${ssrInterpolate(item.desc)}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-column align-center gap-2 w-100" }, [
                            createVNode("div", { class: "d-flex justify-end w-100 mb-n5" }, [
                              createVNode(VChip, {
                                color: resolveDeliveryBadgeData[item.value].color,
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(resolveDeliveryBadgeData[item.value].price === "Free" ? resolveDeliveryBadgeData[item.value].price : `$${resolveDeliveryBadgeData[item.value].price}`), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode(VIcon, {
                              size: "28",
                              icon: item.icon,
                              class: "text-high-emphasis"
                            }, null, 8, ["icon"]),
                            createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(item.desc), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-h6 mb-4" }, " Select your preferable address "),
                    createVNode(_component_CustomRadios, {
                      "selected-radio": unref(checkoutAddressDataLocal).deliveryAddress,
                      "onUpdate:selectedRadio": ($event) => unref(checkoutAddressDataLocal).deliveryAddress = $event,
                      "radio-content": unref(checkoutAddressDataLocal).addresses,
                      "grid-column": { cols: "12", sm: "6" }
                    }, {
                      default: withCtx(({ item }) => [
                        createVNode("div", { class: "w-100" }, [
                          createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                            createVNode("div", { class: "text-h6" }, toDisplayString(item.title), 1),
                            createVNode(VChip, {
                              color: resolveAddressBadgeColor[item.value],
                              size: "small",
                              class: "text-capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(item.desc), 1),
                          createVNode("p", { class: "text-body-2 mb-0" }, " Mobile: " + toDisplayString(item.subtitle), 1),
                          createVNode("p", { class: "text-body-2 mb-3" }, " Cash/Card on delivery available "),
                          createVNode(VDivider, { class: "pb-2" }),
                          createVNode("div", { class: "d-flex gap-x-4 py-2" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-base"
                            }, "Edit"),
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-base"
                            }, "Remove")
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                    createVNode(VBtn, {
                      variant: "outlined",
                      class: "mt-4 mb-6",
                      size: "small",
                      onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add New Address ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("div", { class: "text-h6 mb-4" }, " Choose Delivery Speed "),
                    createVNode(_component_CustomRadiosWithIcon, {
                      "selected-radio": unref(checkoutAddressDataLocal).deliverySpeed,
                      "onUpdate:selectedRadio": ($event) => unref(checkoutAddressDataLocal).deliverySpeed = $event,
                      "radio-content": deliveryOptions,
                      "grid-column": { cols: "12", sm: "4" }
                    }, {
                      default: withCtx(({ item }) => [
                        createVNode("div", { class: "d-flex flex-column align-center gap-2 w-100" }, [
                          createVNode("div", { class: "d-flex justify-end w-100 mb-n5" }, [
                            createVNode(VChip, {
                              color: resolveDeliveryBadgeData[item.value].color,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(resolveDeliveryBadgeData[item.value].price === "Free" ? resolveDeliveryBadgeData[item.value].price : `$${resolveDeliveryBadgeData[item.value].price}`), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode(VIcon, {
                            size: "28",
                            icon: item.icon,
                            class: "text-high-emphasis"
                          }, null, 8, ["icon"]),
                          createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                          createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(item.desc), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["selected-radio", "onUpdate:selectedRadio"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    variant: "outlined"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6 mb-4" data-v-2b587f29${_scopeId4}> Estimated Delivery Date </h6>`);
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(checkoutAddressDataLocal).cartItems, (product) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: product.name
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VImg, {
                                              width: "54",
                                              height: "70",
                                              src: product.image,
                                              class: "me-4"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VImg, {
                                                width: "54",
                                                height: "70",
                                                src: product.image,
                                                class: "me-4"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-body-1" data-v-2b587f29${_scopeId6}>${ssrInterpolate(product.name)}</div><div class="text-body-1 font-weight-medium" data-v-2b587f29${_scopeId6}>${ssrInterpolate(product.estimatedDelivery)}</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(product.name), 1),
                                              createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.estimatedDelivery), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutAddressDataLocal).cartItems, (product) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: product.name
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VImg, {
                                              width: "54",
                                              height: "70",
                                              src: product.image,
                                              class: "me-4"
                                            }, null, 8, ["src"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(product.name), 1),
                                            createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.estimatedDelivery), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Estimated Delivery Date "),
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutAddressDataLocal).cartItems, (product) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: product.name
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VImg, {
                                            width: "54",
                                            height: "70",
                                            src: product.image,
                                            class: "me-4"
                                          }, null, 8, ["src"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-1" }, toDisplayString(product.name), 1),
                                          createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.estimatedDelivery), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6 mb-4" data-v-2b587f29${_scopeId4}> Price Details </h6><div class="d-flex align-center justify-space-between text-sm mb-2" data-v-2b587f29${_scopeId4}><div class="text-high-emphasis text-body-1" data-v-2b587f29${_scopeId4}> Order Total </div><div class="text-body-1" data-v-2b587f29${_scopeId4}> $${ssrInterpolate(unref(checkoutAddressDataLocal).orderAmount)}</div></div><div class="d-flex justify-space-between" data-v-2b587f29${_scopeId4}><div class="text-body-1 text-high-emphasis" data-v-2b587f29${_scopeId4}> Delivery Charges </div><div class="d-flex gap-x-2" data-v-2b587f29${_scopeId4}><div class="text-decoration-line-through text-body-1 text-disabled" data-v-2b587f29${_scopeId4}> $5.00 </div>`);
                              _push5(ssrRenderComponent(VChip, {
                                size: "small",
                                color: "success"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Free `);
                                  } else {
                                    return [
                                      createTextVNode(" Free ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                                createVNode("div", { class: "d-flex align-center justify-space-between text-sm mb-2" }, [
                                  createVNode("div", { class: "text-high-emphasis text-body-1" }, " Order Total "),
                                  createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutAddressDataLocal).orderAmount), 1)
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                                  createVNode("div", { class: "d-flex gap-x-2" }, [
                                    createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                    createVNode(VChip, {
                                      size: "small",
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Free ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-space-between text-high-emphasis" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-base font-weight-medium" data-v-2b587f29${_scopeId4}>Total</span><span class="text-base font-weight-medium" data-v-2b587f29${_scopeId4}> $${ssrInterpolate(unref(totalPriceWithDeliveryCharges))}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-base font-weight-medium" }, "Total"),
                                createVNode("span", { class: "text-base font-weight-medium" }, " $" + toDisplayString(unref(totalPriceWithDeliveryCharges)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 mb-4" }, " Estimated Delivery Date "),
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutAddressDataLocal).cartItems, (product) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: product.name
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VImg, {
                                          width: "54",
                                          height: "70",
                                          src: product.image,
                                          class: "me-4"
                                        }, null, 8, ["src"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(product.name), 1),
                                        createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.estimatedDelivery), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                              createVNode("div", { class: "d-flex align-center justify-space-between text-sm mb-2" }, [
                                createVNode("div", { class: "text-high-emphasis text-body-1" }, " Order Total "),
                                createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutAddressDataLocal).orderAmount), 1)
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                                createVNode("div", { class: "d-flex gap-x-2" }, [
                                  createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                  createVNode(VChip, {
                                    size: "small",
                                    color: "success"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Free ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, { class: "d-flex align-center justify-space-between text-high-emphasis" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-base font-weight-medium" }, "Total"),
                              createVNode("span", { class: "text-base font-weight-medium" }, " $" + toDisplayString(unref(totalPriceWithDeliveryCharges)), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    block: "",
                    class: "mt-4",
                    onClick: nextStep
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Place Order `);
                      } else {
                        return [
                          createTextVNode(" Place Order ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      flat: "",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 mb-4" }, " Estimated Delivery Date "),
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutAddressDataLocal).cartItems, (product) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: product.name
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VImg, {
                                        width: "54",
                                        height: "70",
                                        src: product.image,
                                        class: "me-4"
                                      }, null, 8, ["src"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(product.name), 1),
                                      createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.estimatedDelivery), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                            createVNode("div", { class: "d-flex align-center justify-space-between text-sm mb-2" }, [
                              createVNode("div", { class: "text-high-emphasis text-body-1" }, " Order Total "),
                              createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutAddressDataLocal).orderAmount), 1)
                            ]),
                            createVNode("div", { class: "d-flex justify-space-between" }, [
                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                              createVNode("div", { class: "d-flex gap-x-2" }, [
                                createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                createVNode(VChip, {
                                  size: "small",
                                  color: "success"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Free ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, { class: "d-flex align-center justify-space-between text-high-emphasis" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-base font-weight-medium" }, "Total"),
                            createVNode("span", { class: "text-base font-weight-medium" }, " $" + toDisplayString(unref(totalPriceWithDeliveryCharges)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      block: "",
                      class: "mt-4",
                      onClick: nextStep
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Place Order ")
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
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 mb-4" }, " Select your preferable address "),
                  createVNode(_component_CustomRadios, {
                    "selected-radio": unref(checkoutAddressDataLocal).deliveryAddress,
                    "onUpdate:selectedRadio": ($event) => unref(checkoutAddressDataLocal).deliveryAddress = $event,
                    "radio-content": unref(checkoutAddressDataLocal).addresses,
                    "grid-column": { cols: "12", sm: "6" }
                  }, {
                    default: withCtx(({ item }) => [
                      createVNode("div", { class: "w-100" }, [
                        createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                          createVNode("div", { class: "text-h6" }, toDisplayString(item.title), 1),
                          createVNode(VChip, {
                            color: resolveAddressBadgeColor[item.value],
                            size: "small",
                            class: "text-capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.value), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(item.desc), 1),
                        createVNode("p", { class: "text-body-2 mb-0" }, " Mobile: " + toDisplayString(item.subtitle), 1),
                        createVNode("p", { class: "text-body-2 mb-3" }, " Cash/Card on delivery available "),
                        createVNode(VDivider, { class: "pb-2" }),
                        createVNode("div", { class: "d-flex gap-x-4 py-2" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            class: "text-base"
                          }, "Edit"),
                          createVNode("a", {
                            href: "javascript:void(0)",
                            class: "text-base"
                          }, "Remove")
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                  createVNode(VBtn, {
                    variant: "outlined",
                    class: "mt-4 mb-6",
                    size: "small",
                    onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add New Address ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("div", { class: "text-h6 mb-4" }, " Choose Delivery Speed "),
                  createVNode(_component_CustomRadiosWithIcon, {
                    "selected-radio": unref(checkoutAddressDataLocal).deliverySpeed,
                    "onUpdate:selectedRadio": ($event) => unref(checkoutAddressDataLocal).deliverySpeed = $event,
                    "radio-content": deliveryOptions,
                    "grid-column": { cols: "12", sm: "4" }
                  }, {
                    default: withCtx(({ item }) => [
                      createVNode("div", { class: "d-flex flex-column align-center gap-2 w-100" }, [
                        createVNode("div", { class: "d-flex justify-end w-100 mb-n5" }, [
                          createVNode(VChip, {
                            color: resolveDeliveryBadgeData[item.value].color,
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(resolveDeliveryBadgeData[item.value].price === "Free" ? resolveDeliveryBadgeData[item.value].price : `$${resolveDeliveryBadgeData[item.value].price}`), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode(VIcon, {
                          size: "28",
                          icon: item.icon,
                          class: "text-high-emphasis"
                        }, null, 8, ["icon"]),
                        createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(item.desc), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["selected-radio", "onUpdate:selectedRadio"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6 mb-4" }, " Estimated Delivery Date "),
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutAddressDataLocal).cartItems, (product) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: product.name
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VImg, {
                                      width: "54",
                                      height: "70",
                                      src: product.image,
                                      class: "me-4"
                                    }, null, 8, ["src"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(product.name), 1),
                                    createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.estimatedDelivery), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                          createVNode("div", { class: "d-flex align-center justify-space-between text-sm mb-2" }, [
                            createVNode("div", { class: "text-high-emphasis text-body-1" }, " Order Total "),
                            createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutAddressDataLocal).orderAmount), 1)
                          ]),
                          createVNode("div", { class: "d-flex justify-space-between" }, [
                            createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                            createVNode("div", { class: "d-flex gap-x-2" }, [
                              createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                              createVNode(VChip, {
                                size: "small",
                                color: "success"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Free ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, { class: "d-flex align-center justify-space-between text-high-emphasis" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-base font-weight-medium" }, "Total"),
                          createVNode("span", { class: "text-base font-weight-medium" }, " $" + toDisplayString(unref(totalPriceWithDeliveryCharges)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    block: "",
                    class: "mt-4",
                    onClick: nextStep
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Place Order ")
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
      _push(ssrRenderComponent(_component_AddEditAddressDialog, {
        isDialogVisible: unref(isEditAddressDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/checkout/Address.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AddressContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2b587f29"]]);
const emptyCartImg = "/build/assets/empty-cart-acHmv9If.png";
const _sfc_main$2 = {
  __name: "Cart",
  __ssrInlineRender: true,
  props: {
    currentStep: {
      type: Number,
      required: false
    },
    checkoutData: {
      type: null,
      required: true
    }
  },
  emits: [
    "update:currentStep",
    "update:checkout-data"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const checkoutCartDataLocal = ref(props.checkoutData);
    const removeItem = (item) => {
      checkoutCartDataLocal.value.cartItems = checkoutCartDataLocal.value.cartItems.filter((i) => i.id !== item.id);
    };
    const totalCost = computed(() => {
      return checkoutCartDataLocal.value.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    });
    const updateCartData = () => {
      checkoutCartDataLocal.value.orderAmount = totalCost.value;
      emit("update:checkout-data", checkoutCartDataLocal.value);
    };
    const nextStep = () => {
      updateCartData();
      emit("update:currentStep", props.currentStep ? props.currentStep + 1 : 1);
    };
    watch(() => props.currentStep, updateCartData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      if (unref(checkoutCartDataLocal)) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAlert, {
                      color: "success",
                      variant: "tonal",
                      icon: "ri-percent-line",
                      closable: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAlertTitle, { class: "text-success mb-1" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Available Offers `);
                              } else {
                                return [
                                  createTextVNode(" Available Offers ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<p class="mb-0"${_scopeId3}> - 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards </p><p class="mb-0"${_scopeId3}> - 50% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA </p>`);
                        } else {
                          return [
                            createVNode(VAlertTitle, { class: "text-success mb-1" }, {
                              default: withCtx(() => [
                                createTextVNode(" Available Offers ")
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "mb-0" }, " - 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards "),
                            createVNode("p", { class: "mb-0" }, " - 50% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 my-4"${_scopeId2}> My Shopping Bag (${ssrInterpolate(unref(checkoutCartDataLocal).cartItems.length)} Items) </h5>`);
                    if (unref(checkoutCartDataLocal).cartItems.length) {
                      _push3(`<div class="border rounded-xl"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(checkoutCartDataLocal).cartItems, (item, index) => {
                        _push3(`<div class="${ssrRenderClass([index ? "border-t" : "", "d-flex align-center gap-4 pa-5 position-relative flex-column flex-sm-row"])}"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_IconBtn, {
                          class: "checkout-item-remove-btn",
                          color: "disabled",
                          onClick: ($event) => removeItem(item)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VIcon, {
                                size: "18",
                                icon: "ri-close-line"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "18",
                                  icon: "ri-close-line"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(VImg, {
                          width: "140",
                          src: item.image
                        }, null, _parent3, _scopeId2));
                        _push3(`</div><div class="${ssrRenderClass([_ctx.$vuetify.display.width <= 1280 && _ctx.$vuetify.display.width >= 960 || _ctx.$vuetify.display.width <= 700 ? "flex-column" : "flex-row", "d-flex w-100"])}"${_scopeId2}><div${_scopeId2}><h6 class="text-h6 mb-2"${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="d-flex align-center text-no-wrap gap-4 text-base"${_scopeId2}><div${_scopeId2}><span class="text-disabled me-2"${_scopeId2}>Sold by:</span><span class="text-primary"${_scopeId2}>${ssrInterpolate(item.seller)}</span></div>`);
                        _push3(ssrRenderComponent(VChip, {
                          color: item.inStock ? "success" : "error",
                          size: "small"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(item.inStock ? "In Stock" : "Out of Stock")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.inStock ? "In Stock" : "Out of Stock"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div><div class="my-2"${_scopeId2}>`);
                        _push3(ssrRenderComponent(VRating, {
                          "model-value": item.rating,
                          size: "24"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                        _push3(ssrRenderComponent(VTextField, {
                          modelValue: item.quantity,
                          "onUpdate:modelValue": ($event) => item.quantity = $event,
                          type: "number",
                          density: "compact",
                          style: { "inline-size": "9.375rem" }
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                        _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                        _push3(`<div class="${ssrRenderClass([_ctx.$vuetify.display.width <= 1280 && _ctx.$vuetify.display.width >= 960 || _ctx.$vuetify.display.width <= 700 ? "text-start mt-4" : "text-end mt-8", "d-flex flex-column"])}"${_scopeId2}><div class="${ssrRenderClass([_ctx.$vuetify.display.smAndUp ? "gap-4" : "gap-2", "d-flex flex-column"])}"${_scopeId2}><p class="text-base mb-0"${_scopeId2}><span class="text-primary"${_scopeId2}>$${ssrInterpolate(item.price)}</span><span${_scopeId2}>/</span><span class="text-decoration-line-through"${_scopeId2}>$${ssrInterpolate(item.discountPrice)}</span></p><div${_scopeId2}>`);
                        _push3(ssrRenderComponent(VBtn, {
                          size: "small",
                          variant: "outlined"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` move to wishlist `);
                            } else {
                              return [
                                createTextVNode(" move to wishlist ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div></div></div></div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(VImg, { src: unref(emptyCartImg) }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    _push3(`<div class="d-flex align-center justify-space-between rounded-lg px-5 py-2 text-base mt-4" style="${ssrRenderStyle({ "border": "1px solid rgb(var(--v-theme-primary))" })}"${_scopeId2}><a href="javascript:void(0)" class="font-weight-medium"${_scopeId2}>Add more products from wishlist</a>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "ri-arrow-right-line",
                      class: "flip-in-rtl",
                      size: "16",
                      color: "primary"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(VAlert, {
                        color: "success",
                        variant: "tonal",
                        icon: "ri-percent-line",
                        closable: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VAlertTitle, { class: "text-success mb-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" Available Offers ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "mb-0" }, " - 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards "),
                          createVNode("p", { class: "mb-0" }, " - 50% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ")
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 my-4" }, " My Shopping Bag (" + toDisplayString(unref(checkoutCartDataLocal).cartItems.length) + " Items) ", 1),
                      unref(checkoutCartDataLocal).cartItems.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "border rounded-xl"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutCartDataLocal).cartItems, (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: item.name,
                            class: ["d-flex align-center gap-4 pa-5 position-relative flex-column flex-sm-row", index ? "border-t" : ""]
                          }, [
                            createVNode(_component_IconBtn, {
                              class: "checkout-item-remove-btn",
                              color: "disabled",
                              onClick: ($event) => removeItem(item)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "18",
                                  icon: "ri-close-line"
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode("div", null, [
                              createVNode(VImg, {
                                width: "140",
                                src: item.image
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", {
                              class: ["d-flex w-100", _ctx.$vuetify.display.width <= 1280 && _ctx.$vuetify.display.width >= 960 || _ctx.$vuetify.display.width <= 700 ? "flex-column" : "flex-row"]
                            }, [
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "d-flex align-center text-no-wrap gap-4 text-base" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "text-disabled me-2" }, "Sold by:"),
                                    createVNode("span", { class: "text-primary" }, toDisplayString(item.seller), 1)
                                  ]),
                                  createVNode(VChip, {
                                    color: item.inStock ? "success" : "error",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.inStock ? "In Stock" : "Out of Stock"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("div", { class: "my-2" }, [
                                  createVNode(VRating, {
                                    "model-value": item.rating,
                                    size: "24"
                                  }, null, 8, ["model-value"])
                                ]),
                                createVNode(VTextField, {
                                  modelValue: item.quantity,
                                  "onUpdate:modelValue": ($event) => item.quantity = $event,
                                  type: "number",
                                  density: "compact",
                                  style: { "inline-size": "9.375rem" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VSpacer),
                              createVNode("div", {
                                class: ["d-flex flex-column", _ctx.$vuetify.display.width <= 1280 && _ctx.$vuetify.display.width >= 960 || _ctx.$vuetify.display.width <= 700 ? "text-start mt-4" : "text-end mt-8"]
                              }, [
                                createVNode("div", {
                                  class: ["d-flex flex-column", _ctx.$vuetify.display.smAndUp ? "gap-4" : "gap-2"]
                                }, [
                                  createVNode("p", { class: "text-base mb-0" }, [
                                    createVNode("span", { class: "text-primary" }, "$" + toDisplayString(item.price), 1),
                                    createVNode("span", null, "/"),
                                    createVNode("span", { class: "text-decoration-line-through" }, "$" + toDisplayString(item.discountPrice), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(VBtn, {
                                      size: "small",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" move to wishlist ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ], 2)
                              ], 2)
                            ], 2)
                          ], 2);
                        }), 128))
                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(VImg, { src: unref(emptyCartImg) }, null, 8, ["src"])
                      ])),
                      createVNode("div", {
                        class: "d-flex align-center justify-space-between rounded-lg px-5 py-2 text-base mt-4",
                        style: { "border": "1px solid rgb(var(--v-theme-primary))" }
                      }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          class: "font-weight-medium"
                        }, "Add more products from wishlist"),
                        createVNode(VIcon, {
                          icon: "ri-arrow-right-line",
                          class: "flip-in-rtl",
                          size: "16",
                          color: "primary"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      flat: "",
                      variant: "outlined"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6 mb-4"${_scopeId4}> Offer </h6><div class="d-flex align-center gap-4 flex-wrap"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: unref(checkoutCartDataLocal).promoCode,
                                  "onUpdate:modelValue": ($event) => unref(checkoutCartDataLocal).promoCode = $event,
                                  placeholder: "Enter Promo Code",
                                  density: "compact",
                                  style: { "min-inline-size": "200px" }
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "outlined",
                                  onClick: updateCartData
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Apply `);
                                    } else {
                                      return [
                                        createTextVNode(" Apply ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div><div class="bg-var-theme-background rounded-xl pa-5 mt-4"${_scopeId4}><h6 class="text-h6"${_scopeId4}> Buying gift for a loved one? </h6><p class="my-2 text-body-1"${_scopeId4}> Gift wrap and personalized message on card, Only for $2. </p><a href="javascript:void(0)" class="font-weight-medium d-inline-block"${_scopeId4}>Add a gift wrap</a></div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6 mb-4" }, " Offer "),
                                  createVNode("div", { class: "d-flex align-center gap-4 flex-wrap" }, [
                                    createVNode(VTextField, {
                                      modelValue: unref(checkoutCartDataLocal).promoCode,
                                      "onUpdate:modelValue": ($event) => unref(checkoutCartDataLocal).promoCode = $event,
                                      placeholder: "Enter Promo Code",
                                      density: "compact",
                                      style: { "min-inline-size": "200px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      onClick: updateCartData
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Apply ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "bg-var-theme-background rounded-xl pa-5 mt-4" }, [
                                    createVNode("h6", { class: "text-h6" }, " Buying gift for a loved one? "),
                                    createVNode("p", { class: "my-2 text-body-1" }, " Gift wrap and personalized message on card, Only for $2. "),
                                    createVNode("a", {
                                      href: "javascript:void(0)",
                                      class: "font-weight-medium d-inline-block"
                                    }, "Add a gift wrap")
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6 mb-4"${_scopeId4}> Price Details </h6><div class="text-sm text-high-emphasis"${_scopeId4}><div class="d-flex justify-space-between mb-2"${_scopeId4}><div class="text-body-1 text-high-emphasis"${_scopeId4}> Bag Total </div><div class="text-body-1"${_scopeId4}> $${ssrInterpolate(unref(totalCost))}.00 </div></div><div class="d-flex justify-space-between mb-2"${_scopeId4}><div class="text-body-1 text-high-emphasis"${_scopeId4}> Coupon Discount </div><a href="javascript:void(0)" class="text-base d-inline-block"${_scopeId4}>Apply Coupon</a></div><div class="d-flex justify-space-between mb-2"${_scopeId4}><div class="text-body-1 text-high-emphasis"${_scopeId4}> Order Total </div><div class="text-body-1"${_scopeId4}> $${ssrInterpolate(unref(totalCost))}.00 </div></div><div class="d-flex justify-space-between"${_scopeId4}><div class="text-body-1 text-high-emphasis"${_scopeId4}> Delivery Charges </div><div class="d-flex gap-x-2"${_scopeId4}><div class="text-decoration-line-through text-body-1 text-disabled"${_scopeId4}> $5.00 </div>`);
                                _push5(ssrRenderComponent(VChip, {
                                  size: "small",
                                  color: "success"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Free `);
                                    } else {
                                      return [
                                        createTextVNode(" Free ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                                  createVNode("div", { class: "text-sm text-high-emphasis" }, [
                                    createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Bag Total "),
                                      createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                    ]),
                                    createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Coupon Discount "),
                                      createVNode("a", {
                                        href: "javascript:void(0)",
                                        class: "text-base d-inline-block"
                                      }, "Apply Coupon")
                                    ]),
                                    createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                                      createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                    ]),
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                                      createVNode("div", { class: "d-flex gap-x-2" }, [
                                        createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                        createVNode(VChip, {
                                          size: "small",
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Free ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "d-flex justify-space-between" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6"${_scopeId4}> Total </h6><h6 class="text-h6"${_scopeId4}> $${ssrInterpolate(unref(totalCost))}.00 </h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, " Total "),
                                  createVNode("h6", { class: "text-h6" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Offer "),
                                createVNode("div", { class: "d-flex align-center gap-4 flex-wrap" }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(checkoutCartDataLocal).promoCode,
                                    "onUpdate:modelValue": ($event) => unref(checkoutCartDataLocal).promoCode = $event,
                                    placeholder: "Enter Promo Code",
                                    density: "compact",
                                    style: { "min-inline-size": "200px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    onClick: updateCartData
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Apply ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "bg-var-theme-background rounded-xl pa-5 mt-4" }, [
                                  createVNode("h6", { class: "text-h6" }, " Buying gift for a loved one? "),
                                  createVNode("p", { class: "my-2 text-body-1" }, " Gift wrap and personalized message on card, Only for $2. "),
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "font-weight-medium d-inline-block"
                                  }, "Add a gift wrap")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                                createVNode("div", { class: "text-sm text-high-emphasis" }, [
                                  createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                    createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Bag Total "),
                                    createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                    createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Coupon Discount "),
                                    createVNode("a", {
                                      href: "javascript:void(0)",
                                      class: "text-base d-inline-block"
                                    }, "Apply Coupon")
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                    createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                                    createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                                    createVNode("div", { class: "d-flex gap-x-2" }, [
                                      createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                      createVNode(VChip, {
                                        size: "small",
                                        color: "success"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Free ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCardText, { class: "d-flex justify-space-between" }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, " Total "),
                                createVNode("h6", { class: "text-h6" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      block: "",
                      class: "mt-4",
                      onClick: nextStep
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Place Order `);
                        } else {
                          return [
                            createTextVNode(" Place Order ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        flat: "",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 mb-4" }, " Offer "),
                              createVNode("div", { class: "d-flex align-center gap-4 flex-wrap" }, [
                                createVNode(VTextField, {
                                  modelValue: unref(checkoutCartDataLocal).promoCode,
                                  "onUpdate:modelValue": ($event) => unref(checkoutCartDataLocal).promoCode = $event,
                                  placeholder: "Enter Promo Code",
                                  density: "compact",
                                  style: { "min-inline-size": "200px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  onClick: updateCartData
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apply ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "bg-var-theme-background rounded-xl pa-5 mt-4" }, [
                                createVNode("h6", { class: "text-h6" }, " Buying gift for a loved one? "),
                                createVNode("p", { class: "my-2 text-body-1" }, " Gift wrap and personalized message on card, Only for $2. "),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "font-weight-medium d-inline-block"
                                }, "Add a gift wrap")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                              createVNode("div", { class: "text-sm text-high-emphasis" }, [
                                createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Bag Total "),
                                  createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Coupon Discount "),
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "text-base d-inline-block"
                                  }, "Apply Coupon")
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                                  createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                                  createVNode("div", { class: "d-flex gap-x-2" }, [
                                    createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                    createVNode(VChip, {
                                      size: "small",
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Free ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, { class: "d-flex justify-space-between" }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, " Total "),
                              createVNode("h6", { class: "text-h6" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        block: "",
                        class: "mt-4",
                        onClick: nextStep
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Place Order ")
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
                createVNode(VCol, {
                  cols: "12",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(VAlert, {
                      color: "success",
                      variant: "tonal",
                      icon: "ri-percent-line",
                      closable: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VAlertTitle, { class: "text-success mb-1" }, {
                          default: withCtx(() => [
                            createTextVNode(" Available Offers ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "mb-0" }, " - 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards "),
                        createVNode("p", { class: "mb-0" }, " - 50% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ")
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 my-4" }, " My Shopping Bag (" + toDisplayString(unref(checkoutCartDataLocal).cartItems.length) + " Items) ", 1),
                    unref(checkoutCartDataLocal).cartItems.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "border rounded-xl"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(checkoutCartDataLocal).cartItems, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: item.name,
                          class: ["d-flex align-center gap-4 pa-5 position-relative flex-column flex-sm-row", index ? "border-t" : ""]
                        }, [
                          createVNode(_component_IconBtn, {
                            class: "checkout-item-remove-btn",
                            color: "disabled",
                            onClick: ($event) => removeItem(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "18",
                                icon: "ri-close-line"
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode("div", null, [
                            createVNode(VImg, {
                              width: "140",
                              src: item.image
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", {
                            class: ["d-flex w-100", _ctx.$vuetify.display.width <= 1280 && _ctx.$vuetify.display.width >= 960 || _ctx.$vuetify.display.width <= 700 ? "flex-column" : "flex-row"]
                          }, [
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                              createVNode("div", { class: "d-flex align-center text-no-wrap gap-4 text-base" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "text-disabled me-2" }, "Sold by:"),
                                  createVNode("span", { class: "text-primary" }, toDisplayString(item.seller), 1)
                                ]),
                                createVNode(VChip, {
                                  color: item.inStock ? "success" : "error",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.inStock ? "In Stock" : "Out of Stock"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("div", { class: "my-2" }, [
                                createVNode(VRating, {
                                  "model-value": item.rating,
                                  size: "24"
                                }, null, 8, ["model-value"])
                              ]),
                              createVNode(VTextField, {
                                modelValue: item.quantity,
                                "onUpdate:modelValue": ($event) => item.quantity = $event,
                                type: "number",
                                density: "compact",
                                style: { "inline-size": "9.375rem" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(VSpacer),
                            createVNode("div", {
                              class: ["d-flex flex-column", _ctx.$vuetify.display.width <= 1280 && _ctx.$vuetify.display.width >= 960 || _ctx.$vuetify.display.width <= 700 ? "text-start mt-4" : "text-end mt-8"]
                            }, [
                              createVNode("div", {
                                class: ["d-flex flex-column", _ctx.$vuetify.display.smAndUp ? "gap-4" : "gap-2"]
                              }, [
                                createVNode("p", { class: "text-base mb-0" }, [
                                  createVNode("span", { class: "text-primary" }, "$" + toDisplayString(item.price), 1),
                                  createVNode("span", null, "/"),
                                  createVNode("span", { class: "text-decoration-line-through" }, "$" + toDisplayString(item.discountPrice), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode(VBtn, {
                                    size: "small",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" move to wishlist ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ], 2)
                            ], 2)
                          ], 2)
                        ], 2);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(VImg, { src: unref(emptyCartImg) }, null, 8, ["src"])
                    ])),
                    createVNode("div", {
                      class: "d-flex align-center justify-space-between rounded-lg px-5 py-2 text-base mt-4",
                      style: { "border": "1px solid rgb(var(--v-theme-primary))" }
                    }, [
                      createVNode("a", {
                        href: "javascript:void(0)",
                        class: "font-weight-medium"
                      }, "Add more products from wishlist"),
                      createVNode(VIcon, {
                        icon: "ri-arrow-right-line",
                        class: "flip-in-rtl",
                        size: "16",
                        color: "primary"
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      flat: "",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 mb-4" }, " Offer "),
                            createVNode("div", { class: "d-flex align-center gap-4 flex-wrap" }, [
                              createVNode(VTextField, {
                                modelValue: unref(checkoutCartDataLocal).promoCode,
                                "onUpdate:modelValue": ($event) => unref(checkoutCartDataLocal).promoCode = $event,
                                placeholder: "Enter Promo Code",
                                density: "compact",
                                style: { "min-inline-size": "200px" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                variant: "outlined",
                                onClick: updateCartData
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Apply ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "bg-var-theme-background rounded-xl pa-5 mt-4" }, [
                              createVNode("h6", { class: "text-h6" }, " Buying gift for a loved one? "),
                              createVNode("p", { class: "my-2 text-body-1" }, " Gift wrap and personalized message on card, Only for $2. "),
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "font-weight-medium d-inline-block"
                              }, "Add a gift wrap")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                            createVNode("div", { class: "text-sm text-high-emphasis" }, [
                              createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Bag Total "),
                                createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Coupon Discount "),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "text-base d-inline-block"
                                }, "Apply Coupon")
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                                createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Delivery Charges "),
                                createVNode("div", { class: "d-flex gap-x-2" }, [
                                  createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled" }, " $5.00 "),
                                  createVNode(VChip, {
                                    size: "small",
                                    color: "success"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Free ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, { class: "d-flex justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, " Total "),
                            createVNode("h6", { class: "text-h6" }, " $" + toDisplayString(unref(totalCost)) + ".00 ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      block: "",
                      class: "mt-4",
                      onClick: nextStep
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Place Order ")
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/checkout/Cart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Confirmation",
  __ssrInlineRender: true,
  props: {
    currentStep: {
      type: Number,
      required: false
    },
    checkoutData: {
      type: null,
      required: true
    }
  },
  emits: [
    "update:currentStep",
    "update:checkout-data"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const selectedDeliveryAddress = computed(() => {
      return props.checkoutData.addresses.filter((address) => {
        return address.value === props.checkoutData.deliveryAddress;
      });
    });
    const resolveDeliveryMethod = computed(() => {
      if (props.checkoutData.deliverySpeed === "overnight")
        return {
          method: "Overnight Delivery",
          desc: "In 1 business day."
        };
      else if (props.checkoutData.deliverySpeed === "express")
        return {
          method: "Express Delivery",
          desc: "Normally in 3-4 business days"
        };
      else
        return {
          method: "Standard Delivery",
          desc: "Normally in 1 Week"
        };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-base" }, _attrs))}><div class="text-center"><h4 class="text-h4 mb-4"> Thank You! 😇 </h4><p class="text-body-1"> Your order <span class="text-high-emphasis font-weight-medium">#1536548131</span> has been placed! </p><p class="mb-0"> We sent an email to <span class="text-high-emphasis font-weight-medium">john.doe@example.com</span> with your order confirmation and receipt. </p><p>If the email hasn&#39;t arrived within two minutes, please check your spam folder to see if the email was routed there.</p><div class="d-flex align-center gap-2 justify-center">`);
      _push(ssrRenderComponent(VIcon, {
        size: "20",
        icon: "ri-time-line",
        class: "text-high-emphasis"
      }, null, _parent));
      _push(`<span>Time placed: 25/05/2020 13:35pm</span></div></div>`);
      _push(ssrRenderComponent(VRow, { class: "border rounded-xl ma-0 mt-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: ["pa-5", _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-2 text-high-emphasis mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-map-pin-line",
                    size: "20"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-h6"${_scopeId2}> Shipping </div></div><!--[-->`);
                  ssrRenderList(unref(selectedDeliveryAddress), (item) => {
                    _push3(`<!--[--><p class="mb-0"${_scopeId2}>${ssrInterpolate(item.title)}</p><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><h6 class="text-h6 text-medium-emphasis"${_scopeId2}> +${ssrInterpolate(item.subtitle)}</h6><!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-2 text-high-emphasis mb-4" }, [
                      createVNode(VIcon, {
                        icon: "ri-map-pin-line",
                        size: "20"
                      }),
                      createVNode("div", { class: "text-h6" }, " Shipping ")
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                      return openBlock(), createBlock(Fragment, {
                        key: item.value
                      }, [
                        createVNode("p", { class: "mb-0" }, toDisplayString(item.title), 1),
                        createVNode("p", null, toDisplayString(item.desc), 1),
                        createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " +" + toDisplayString(item.subtitle), 1)
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: ["pa-5", _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-2 text-high-emphasis mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-bank-card-line",
                    size: "20"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-base font-weight-medium"${_scopeId2}> Billing Address </span></div><!--[-->`);
                  ssrRenderList(unref(selectedDeliveryAddress), (item) => {
                    _push3(`<!--[--><p class="mb-0"${_scopeId2}>${ssrInterpolate(item.title)}</p><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><h6 class="text-h6 text-medium-emphasis"${_scopeId2}> +${ssrInterpolate(item.subtitle)}</h6><!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-2 text-high-emphasis mb-4" }, [
                      createVNode(VIcon, {
                        icon: "ri-bank-card-line",
                        size: "20"
                      }),
                      createVNode("span", { class: "text-base font-weight-medium" }, " Billing Address ")
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                      return openBlock(), createBlock(Fragment, {
                        key: item.value
                      }, [
                        createVNode("p", { class: "mb-0" }, toDisplayString(item.title), 1),
                        createVNode("p", null, toDisplayString(item.desc), 1),
                        createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " +" + toDisplayString(item.subtitle), 1)
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: "pa-5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-2 text-high-emphasis mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-ship-2-line",
                    size: "20"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-base font-weight-medium"${_scopeId2}> Shipping Method </span></div><p class="font-weight-medium"${_scopeId2}> Preferred Method: </p><p class="mb-0"${_scopeId2}>${ssrInterpolate(unref(resolveDeliveryMethod).method)}</p><p class="mb-0"${_scopeId2}> ( ${ssrInterpolate(unref(resolveDeliveryMethod).desc)} ) </p>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-2 text-high-emphasis mb-4" }, [
                      createVNode(VIcon, {
                        icon: "ri-ship-2-line",
                        size: "20"
                      }),
                      createVNode("span", { class: "text-base font-weight-medium" }, " Shipping Method ")
                    ]),
                    createVNode("p", { class: "font-weight-medium" }, " Preferred Method: "),
                    createVNode("p", { class: "mb-0" }, toDisplayString(unref(resolveDeliveryMethod).method), 1),
                    createVNode("p", { class: "mb-0" }, " ( " + toDisplayString(unref(resolveDeliveryMethod).desc) + " ) ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: ["pa-5", _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"]
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-2 text-high-emphasis mb-4" }, [
                    createVNode(VIcon, {
                      icon: "ri-map-pin-line",
                      size: "20"
                    }),
                    createVNode("div", { class: "text-h6" }, " Shipping ")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                    return openBlock(), createBlock(Fragment, {
                      key: item.value
                    }, [
                      createVNode("p", { class: "mb-0" }, toDisplayString(item.title), 1),
                      createVNode("p", null, toDisplayString(item.desc), 1),
                      createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " +" + toDisplayString(item.subtitle), 1)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: ["pa-5", _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"]
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-2 text-high-emphasis mb-4" }, [
                    createVNode(VIcon, {
                      icon: "ri-bank-card-line",
                      size: "20"
                    }),
                    createVNode("span", { class: "text-base font-weight-medium" }, " Billing Address ")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                    return openBlock(), createBlock(Fragment, {
                      key: item.value
                    }, [
                      createVNode("p", { class: "mb-0" }, toDisplayString(item.title), 1),
                      createVNode("p", null, toDisplayString(item.desc), 1),
                      createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " +" + toDisplayString(item.subtitle), 1)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: "pa-5"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-2 text-high-emphasis mb-4" }, [
                    createVNode(VIcon, {
                      icon: "ri-ship-2-line",
                      size: "20"
                    }),
                    createVNode("span", { class: "text-base font-weight-medium" }, " Shipping Method ")
                  ]),
                  createVNode("p", { class: "font-weight-medium" }, " Preferred Method: "),
                  createVNode("p", { class: "mb-0" }, toDisplayString(unref(resolveDeliveryMethod).method), 1),
                  createVNode("p", { class: "mb-0" }, " ( " + toDisplayString(unref(resolveDeliveryMethod).desc) + " ) ", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border rounded-xl"${_scopeId2}><!--[-->`);
                  ssrRenderList(props.checkoutData.cartItems, (item, index) => {
                    _push3(`<div class="${ssrRenderClass([index ? "border-t" : "", "d-flex align-start gap-4 pa-5 position-relative flex-column flex-sm-row align-center"])}"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(VImg, {
                      width: "80",
                      src: item.image
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="${ssrRenderClass([_ctx.$vuetify.display.width <= 700 ? "flex-column" : "flex-row", "d-flex w-100"])}"${_scopeId2}><div${_scopeId2}><h6 class="text-h6 mb-2"${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="d-flex flex-column align-start text-no-wrap gap-2 text-base"${_scopeId2}><div${_scopeId2}><span class="text-body-1 d-inline-block"${_scopeId2}>Sold by:</span> <span class="text-primary text-body-1 d-inline-block"${_scopeId2}>${ssrInterpolate(item.seller)}</span></div>`);
                    if (index !== props.checkoutData.cartItems.length - 1) {
                      _push3(ssrRenderComponent(VChip, {
                        color: item.inStock ? "success" : "error",
                        size: "small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.inStock ? "In Stock" : "Out of Stock")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.inStock ? "In Stock" : "Out of Stock"), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(`<div class="${ssrRenderClass([_ctx.$vuetify.display.width <= 700 ? "text-start" : "text-end", "d-flex flex-column justify-center"])}"${_scopeId2}><p class="text-base mb-0"${_scopeId2}><span class="text-primary"${_scopeId2}>$${ssrInterpolate(item.price)}</span><span${_scopeId2}>/</span><span class="text-disabled text-decoration-line-through"${_scopeId2}>$${ssrInterpolate(item.discountPrice)}</span></p></div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "border rounded-xl" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.checkoutData.cartItems, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: item.name,
                          class: ["d-flex align-start gap-4 pa-5 position-relative flex-column flex-sm-row align-center", index ? "border-t" : ""]
                        }, [
                          createVNode("div", null, [
                            createVNode(VImg, {
                              width: "80",
                              src: item.image
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", {
                            class: ["d-flex w-100", _ctx.$vuetify.display.width <= 700 ? "flex-column" : "flex-row"]
                          }, [
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                              createVNode("div", { class: "d-flex flex-column align-start text-no-wrap gap-2 text-base" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "text-body-1 d-inline-block" }, "Sold by:"),
                                  createTextVNode(),
                                  createVNode("span", { class: "text-primary text-body-1 d-inline-block" }, toDisplayString(item.seller), 1)
                                ]),
                                index !== props.checkoutData.cartItems.length - 1 ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  color: item.inStock ? "success" : "error",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.inStock ? "In Stock" : "Out of Stock"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode(VSpacer),
                            createVNode("div", {
                              class: ["d-flex flex-column justify-center", _ctx.$vuetify.display.width <= 700 ? "text-start" : "text-end"]
                            }, [
                              createVNode("p", { class: "text-base mb-0" }, [
                                createVNode("span", { class: "text-primary" }, "$" + toDisplayString(item.price), 1),
                                createVNode("span", null, "/"),
                                createVNode("span", { class: "text-disabled text-decoration-line-through" }, "$" + toDisplayString(item.discountPrice), 1)
                              ])
                            ], 2)
                          ], 2)
                        ], 2);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border rounded-xl"${_scopeId2}><div class="border-b pa-5"${_scopeId2}><h6 class="text-h6 mb-4"${_scopeId2}> Price Details </h6><div class="d-flex align-center justify-space-between text-sm mb-4"${_scopeId2}><div class="text-body-1 text-high-emphasis"${_scopeId2}> Order Total </div><div class="text-body-1"${_scopeId2}> $${ssrInterpolate(props.checkoutData.orderAmount)}.00 </div></div><div class="d-flex align-center justify-space-between text-sm"${_scopeId2}><div class="text-body-1 text-high-emphasis"${_scopeId2}> Charges </div>`);
                  if (props.checkoutData.deliverySpeed === "free") {
                    _push3(`<div class="d-flex align-center"${_scopeId2}><div class="text-decoration-line-through text-body-1 text-disabled me-2"${_scopeId2}> $5.00 </div>`);
                    _push3(ssrRenderComponent(VChip, {
                      color: "success",
                      size: "small"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` FREE `);
                        } else {
                          return [
                            createTextVNode(" FREE ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div${_scopeId2}><span${_scopeId2}>$${ssrInterpolate(props.checkoutData.deliveryCharges)}</span></div>`);
                  }
                  _push3(`</div></div><div class="d-flex align-center justify-space-between text-h6 pa-5"${_scopeId2}><span${_scopeId2}>Total</span><span${_scopeId2}>$${ssrInterpolate(props.checkoutData.orderAmount)}.00</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "border rounded-xl" }, [
                      createVNode("div", { class: "border-b pa-5" }, [
                        createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                        createVNode("div", { class: "d-flex align-center justify-space-between text-sm mb-4" }, [
                          createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                          createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(props.checkoutData.orderAmount) + ".00 ", 1)
                        ]),
                        createVNode("div", { class: "d-flex align-center justify-space-between text-sm" }, [
                          createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Charges "),
                          props.checkoutData.deliverySpeed === "free" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex align-center"
                          }, [
                            createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled me-2" }, " $5.00 "),
                            createVNode(VChip, {
                              color: "success",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" FREE ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("span", null, "$" + toDisplayString(props.checkoutData.deliveryCharges), 1)
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "d-flex align-center justify-space-between text-h6 pa-5" }, [
                        createVNode("span", null, "Total"),
                        createVNode("span", null, "$" + toDisplayString(props.checkoutData.orderAmount) + ".00", 1)
                      ])
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
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "border rounded-xl" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.checkoutData.cartItems, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: item.name,
                        class: ["d-flex align-start gap-4 pa-5 position-relative flex-column flex-sm-row align-center", index ? "border-t" : ""]
                      }, [
                        createVNode("div", null, [
                          createVNode(VImg, {
                            width: "80",
                            src: item.image
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", {
                          class: ["d-flex w-100", _ctx.$vuetify.display.width <= 700 ? "flex-column" : "flex-row"]
                        }, [
                          createVNode("div", null, [
                            createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "d-flex flex-column align-start text-no-wrap gap-2 text-base" }, [
                              createVNode("div", null, [
                                createVNode("span", { class: "text-body-1 d-inline-block" }, "Sold by:"),
                                createTextVNode(),
                                createVNode("span", { class: "text-primary text-body-1 d-inline-block" }, toDisplayString(item.seller), 1)
                              ]),
                              index !== props.checkoutData.cartItems.length - 1 ? (openBlock(), createBlock(VChip, {
                                key: 0,
                                color: item.inStock ? "success" : "error",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.inStock ? "In Stock" : "Out of Stock"), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode(VSpacer),
                          createVNode("div", {
                            class: ["d-flex flex-column justify-center", _ctx.$vuetify.display.width <= 700 ? "text-start" : "text-end"]
                          }, [
                            createVNode("p", { class: "text-base mb-0" }, [
                              createVNode("span", { class: "text-primary" }, "$" + toDisplayString(item.price), 1),
                              createVNode("span", null, "/"),
                              createVNode("span", { class: "text-disabled text-decoration-line-through" }, "$" + toDisplayString(item.discountPrice), 1)
                            ])
                          ], 2)
                        ], 2)
                      ], 2);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "border rounded-xl" }, [
                    createVNode("div", { class: "border-b pa-5" }, [
                      createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                      createVNode("div", { class: "d-flex align-center justify-space-between text-sm mb-4" }, [
                        createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                        createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(props.checkoutData.orderAmount) + ".00 ", 1)
                      ]),
                      createVNode("div", { class: "d-flex align-center justify-space-between text-sm" }, [
                        createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Charges "),
                        props.checkoutData.deliverySpeed === "free" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex align-center"
                        }, [
                          createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled me-2" }, " $5.00 "),
                          createVNode(VChip, {
                            color: "success",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" FREE ")
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("span", null, "$" + toDisplayString(props.checkoutData.deliveryCharges), 1)
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between text-h6 pa-5" }, [
                      createVNode("span", null, "Total"),
                      createVNode("span", null, "$" + toDisplayString(props.checkoutData.orderAmount) + ".00", 1)
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/checkout/Confirmation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Payment",
  __ssrInlineRender: true,
  props: {
    currentStep: {
      type: Number,
      required: false
    },
    checkoutData: {
      type: null,
      required: true
    }
  },
  emits: [
    "update:currentStep",
    "update:checkout-data"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const prop = __props;
    const checkoutPaymentDataLocal = ref(prop.checkoutData);
    const selectedPaymentMethod = ref("card");
    const cardFormData = ref({
      cardNumber: null,
      cardName: "",
      cardExpiry: "",
      cardCvv: null,
      isCardSave: true
    });
    const giftCardFormData = ref({
      giftCardNumber: null,
      giftCardPin: null
    });
    const selectedDeliveryAddress = computed(() => {
      return checkoutPaymentDataLocal.value.addresses.filter((address) => {
        return address.value === checkoutPaymentDataLocal.value.deliveryAddress;
      });
    });
    const updateCartData = () => {
      emit("update:checkout-data", checkoutPaymentDataLocal.value);
    };
    const nextStep = () => {
      updateCartData();
      emit("update:currentStep", prop.currentStep ? prop.currentStep + 1 : 1);
    };
    watch(() => prop.currentStep, updateCartData);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAlert, {
                    color: "success",
                    variant: "tonal",
                    icon: "ri-percent-line",
                    closable: "",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAlertTitle, { class: "text-success mb-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Available Offers `);
                            } else {
                              return [
                                createTextVNode(" Available Offers ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="mb-0"${_scopeId3}> - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards </p><p class="mb-0"${_scopeId3}> - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA </p>`);
                      } else {
                        return [
                          createVNode(VAlertTitle, { class: "text-success mb-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" Available Offers ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "mb-0" }, " - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards "),
                          createVNode("p", { class: "mb-0" }, " - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTabs, {
                    modelValue: unref(selectedPaymentMethod),
                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                    class: "v-tabs-pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTab, { value: "card" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Card `);
                            } else {
                              return [
                                createTextVNode(" Card ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTab, { value: "cash-on-delivery" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cash on Delivery `);
                            } else {
                              return [
                                createTextVNode(" Cash on Delivery ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTab, { value: "gift-card" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Gift Card `);
                            } else {
                              return [
                                createTextVNode(" Gift Card ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTab, { value: "card" }, {
                            default: withCtx(() => [
                              createTextVNode(" Card ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTab, { value: "cash-on-delivery" }, {
                            default: withCtx(() => [
                              createTextVNode(" Cash on Delivery ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTab, { value: "gift-card" }, {
                            default: withCtx(() => [
                              createTextVNode(" Gift Card ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(selectedPaymentMethod),
                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                    class: "pt-6",
                    style: { "max-inline-size": "600px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, { value: "card" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(cardFormData).cardNumber,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                                  type: "number",
                                                  label: "Card Number",
                                                  placeholder: "1234 5678 9012 3456"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(cardFormData).cardNumber,
                                                    "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                                    type: "number",
                                                    label: "Card Number",
                                                    placeholder: "1234 5678 9012 3456"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(cardFormData).cardName,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                                  label: "Name",
                                                  placeholder: "John Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(cardFormData).cardName,
                                                    "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                                    label: "Name",
                                                    placeholder: "John Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(cardFormData).cardExpiry,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                                  label: "Expiry",
                                                  placeholder: "MM/YY"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(cardFormData).cardExpiry,
                                                    "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                                    label: "Expiry",
                                                    placeholder: "MM/YY"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(cardFormData).cardCvv,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                                  label: "CVV",
                                                  placeholder: "123",
                                                  type: "number"
                                                }, {
                                                  "append-inner": withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTooltip, {
                                                        text: "Card Verification Value",
                                                        location: "bottom"
                                                      }, {
                                                        activator: withCtx(({ props: tooltipProps }, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VIcon, mergeProps(tooltipProps, {
                                                              size: "20",
                                                              icon: "ri-question-line"
                                                            }), null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VIcon, mergeProps(tooltipProps, {
                                                                size: "20",
                                                                icon: "ri-question-line"
                                                              }), null, 16)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTooltip, {
                                                          text: "Card Verification Value",
                                                          location: "bottom"
                                                        }, {
                                                          activator: withCtx(({ props: tooltipProps }) => [
                                                            createVNode(VIcon, mergeProps(tooltipProps, {
                                                              size: "20",
                                                              icon: "ri-question-line"
                                                            }), null, 16)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(cardFormData).cardCvv,
                                                    "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                                    label: "CVV",
                                                    placeholder: "123",
                                                    type: "number"
                                                  }, {
                                                    "append-inner": withCtx(() => [
                                                      createVNode(VTooltip, {
                                                        text: "Card Verification Value",
                                                        location: "bottom"
                                                      }, {
                                                        activator: withCtx(({ props: tooltipProps }) => [
                                                          createVNode(VIcon, mergeProps(tooltipProps, {
                                                            size: "20",
                                                            icon: "ri-question-line"
                                                          }), null, 16)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSwitch, {
                                                  modelValue: unref(cardFormData).isCardSave,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                                  label: "Save Card for future billing?"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<div class="mt-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  class: "me-4",
                                                  onClick: nextStep
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Save Changes `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Save Changes ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  variant: "outlined",
                                                  color: "secondary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Reset `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Reset ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode(VSwitch, {
                                                    modelValue: unref(cardFormData).isCardSave,
                                                    "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                                    label: "Save Card for future billing?"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode("div", { class: "mt-4" }, [
                                                    createVNode(VBtn, {
                                                      class: "me-4",
                                                      onClick: nextStep
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Save Changes ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VBtn, {
                                                      variant: "outlined",
                                                      color: "secondary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Reset ")
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
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(cardFormData).cardNumber,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                                  type: "number",
                                                  label: "Card Number",
                                                  placeholder: "1234 5678 9012 3456"
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
                                                  modelValue: unref(cardFormData).cardName,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                                  label: "Name",
                                                  placeholder: "John Doe"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(cardFormData).cardExpiry,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                                  label: "Expiry",
                                                  placeholder: "MM/YY"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(cardFormData).cardCvv,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                                  label: "CVV",
                                                  placeholder: "123",
                                                  type: "number"
                                                }, {
                                                  "append-inner": withCtx(() => [
                                                    createVNode(VTooltip, {
                                                      text: "Card Verification Value",
                                                      location: "bottom"
                                                    }, {
                                                      activator: withCtx(({ props: tooltipProps }) => [
                                                        createVNode(VIcon, mergeProps(tooltipProps, {
                                                          size: "20",
                                                          icon: "ri-question-line"
                                                        }), null, 16)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSwitch, {
                                                  modelValue: unref(cardFormData).isCardSave,
                                                  "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                                  label: "Save Card for future billing?"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("div", { class: "mt-4" }, [
                                                  createVNode(VBtn, {
                                                    class: "me-4",
                                                    onClick: nextStep
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Save Changes ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    variant: "outlined",
                                                    color: "secondary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Reset ")
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
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(cardFormData).cardNumber,
                                                "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                                type: "number",
                                                label: "Card Number",
                                                placeholder: "1234 5678 9012 3456"
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
                                                modelValue: unref(cardFormData).cardName,
                                                "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                                label: "Name",
                                                placeholder: "John Doe"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(cardFormData).cardExpiry,
                                                "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                                label: "Expiry",
                                                placeholder: "MM/YY"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(cardFormData).cardCvv,
                                                "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                                label: "CVV",
                                                placeholder: "123",
                                                type: "number"
                                              }, {
                                                "append-inner": withCtx(() => [
                                                  createVNode(VTooltip, {
                                                    text: "Card Verification Value",
                                                    location: "bottom"
                                                  }, {
                                                    activator: withCtx(({ props: tooltipProps }) => [
                                                      createVNode(VIcon, mergeProps(tooltipProps, {
                                                        size: "20",
                                                        icon: "ri-question-line"
                                                      }), null, 16)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSwitch, {
                                                modelValue: unref(cardFormData).isCardSave,
                                                "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                                label: "Save Card for future billing?"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", { class: "mt-4" }, [
                                                createVNode(VBtn, {
                                                  class: "me-4",
                                                  onClick: nextStep
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Save Changes ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  color: "secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Reset ")
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
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardFormData).cardNumber,
                                              "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                              type: "number",
                                              label: "Card Number",
                                              placeholder: "1234 5678 9012 3456"
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
                                              modelValue: unref(cardFormData).cardName,
                                              "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                              label: "Name",
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardFormData).cardExpiry,
                                              "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                              label: "Expiry",
                                              placeholder: "MM/YY"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardFormData).cardCvv,
                                              "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                              label: "CVV",
                                              placeholder: "123",
                                              type: "number"
                                            }, {
                                              "append-inner": withCtx(() => [
                                                createVNode(VTooltip, {
                                                  text: "Card Verification Value",
                                                  location: "bottom"
                                                }, {
                                                  activator: withCtx(({ props: tooltipProps }) => [
                                                    createVNode(VIcon, mergeProps(tooltipProps, {
                                                      size: "20",
                                                      icon: "ri-question-line"
                                                    }), null, 16)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, {
                                              modelValue: unref(cardFormData).isCardSave,
                                              "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                              label: "Save Card for future billing?"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "mt-4" }, [
                                              createVNode(VBtn, {
                                                class: "me-4",
                                                onClick: nextStep
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Save Changes ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                color: "secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Reset ")
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
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "cash-on-delivery" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base text-high-emphasis my-6"${_scopeId4}> Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. </p>`);
                              _push5(ssrRenderComponent(VBtn, { onClick: nextStep }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Pay on delivery `);
                                  } else {
                                    return [
                                      createTextVNode(" Pay on delivery ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base text-high-emphasis my-6" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. "),
                                createVNode(VBtn, { onClick: nextStep }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pay on delivery ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "gift-card" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-base font-weight-medium my-6"${_scopeId4}> Enter Gift Card Details </h6>`);
                              _push5(ssrRenderComponent(VForm, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(giftCardFormData).giftCardNumber,
                                                  "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                                  label: "Gift Card Number",
                                                  placeholder: "1234 5678 9012 3456"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(giftCardFormData).giftCardNumber,
                                                    "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                                    label: "Gift Card Number",
                                                    placeholder: "1234 5678 9012 3456"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(giftCardFormData).giftCardPin,
                                                  "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                                  label: "Gift Card Pin",
                                                  placeholder: "1234"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(giftCardFormData).giftCardPin,
                                                    "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                                    label: "Gift Card Pin",
                                                    placeholder: "1234"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, { onClick: nextStep }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Redeem Gift Card `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Redeem Gift Card ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, { onClick: nextStep }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Redeem Gift Card ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(giftCardFormData).giftCardNumber,
                                                  "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                                  label: "Gift Card Number",
                                                  placeholder: "1234 5678 9012 3456"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(giftCardFormData).giftCardPin,
                                                  "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                                  label: "Gift Card Pin",
                                                  placeholder: "1234"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { onClick: nextStep }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Redeem Gift Card ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(giftCardFormData).giftCardNumber,
                                                "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                                label: "Gift Card Number",
                                                placeholder: "1234 5678 9012 3456"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(giftCardFormData).giftCardPin,
                                                "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                                label: "Gift Card Pin",
                                                placeholder: "1234"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { onClick: nextStep }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Redeem Gift Card ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h6", { class: "text-base font-weight-medium my-6" }, " Enter Gift Card Details "),
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(giftCardFormData).giftCardNumber,
                                              "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                              label: "Gift Card Number",
                                              placeholder: "1234 5678 9012 3456"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(giftCardFormData).giftCardPin,
                                              "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                              label: "Gift Card Pin",
                                              placeholder: "1234"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, { onClick: nextStep }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Redeem Gift Card ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, { value: "card" }, {
                            default: withCtx(() => [
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(cardFormData).cardNumber,
                                            "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                            type: "number",
                                            label: "Card Number",
                                            placeholder: "1234 5678 9012 3456"
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
                                            modelValue: unref(cardFormData).cardName,
                                            "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                            label: "Name",
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(cardFormData).cardExpiry,
                                            "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                            label: "Expiry",
                                            placeholder: "MM/YY"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(cardFormData).cardCvv,
                                            "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                            label: "CVV",
                                            placeholder: "123",
                                            type: "number"
                                          }, {
                                            "append-inner": withCtx(() => [
                                              createVNode(VTooltip, {
                                                text: "Card Verification Value",
                                                location: "bottom"
                                              }, {
                                                activator: withCtx(({ props: tooltipProps }) => [
                                                  createVNode(VIcon, mergeProps(tooltipProps, {
                                                    size: "20",
                                                    icon: "ri-question-line"
                                                  }), null, 16)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSwitch, {
                                            modelValue: unref(cardFormData).isCardSave,
                                            "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                            label: "Save Card for future billing?"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "mt-4" }, [
                                            createVNode(VBtn, {
                                              class: "me-4",
                                              onClick: nextStep
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Save Changes ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Reset ")
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
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "cash-on-delivery" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base text-high-emphasis my-6" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. "),
                              createVNode(VBtn, { onClick: nextStep }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pay on delivery ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "gift-card" }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-base font-weight-medium my-6" }, " Enter Gift Card Details "),
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(giftCardFormData).giftCardNumber,
                                            "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                            label: "Gift Card Number",
                                            placeholder: "1234 5678 9012 3456"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(giftCardFormData).giftCardPin,
                                            "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                            label: "Gift Card Pin",
                                            placeholder: "1234"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, { onClick: nextStep }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Redeem Gift Card ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAlert, {
                      color: "success",
                      variant: "tonal",
                      icon: "ri-percent-line",
                      closable: "",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VAlertTitle, { class: "text-success mb-1" }, {
                          default: withCtx(() => [
                            createTextVNode(" Available Offers ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "mb-0" }, " - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards "),
                        createVNode("p", { class: "mb-0" }, " - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTabs, {
                      modelValue: unref(selectedPaymentMethod),
                      "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                      class: "v-tabs-pill"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTab, { value: "card" }, {
                          default: withCtx(() => [
                            createTextVNode(" Card ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTab, { value: "cash-on-delivery" }, {
                          default: withCtx(() => [
                            createTextVNode(" Cash on Delivery ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTab, { value: "gift-card" }, {
                          default: withCtx(() => [
                            createTextVNode(" Gift Card ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VWindow, {
                      modelValue: unref(selectedPaymentMethod),
                      "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                      class: "pt-6",
                      style: { "max-inline-size": "600px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: "card" }, {
                          default: withCtx(() => [
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(cardFormData).cardNumber,
                                          "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                          type: "number",
                                          label: "Card Number",
                                          placeholder: "1234 5678 9012 3456"
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
                                          modelValue: unref(cardFormData).cardName,
                                          "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                          label: "Name",
                                          placeholder: "John Doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(cardFormData).cardExpiry,
                                          "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                          label: "Expiry",
                                          placeholder: "MM/YY"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(cardFormData).cardCvv,
                                          "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                          label: "CVV",
                                          placeholder: "123",
                                          type: "number"
                                        }, {
                                          "append-inner": withCtx(() => [
                                            createVNode(VTooltip, {
                                              text: "Card Verification Value",
                                              location: "bottom"
                                            }, {
                                              activator: withCtx(({ props: tooltipProps }) => [
                                                createVNode(VIcon, mergeProps(tooltipProps, {
                                                  size: "20",
                                                  icon: "ri-question-line"
                                                }), null, 16)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSwitch, {
                                          modelValue: unref(cardFormData).isCardSave,
                                          "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                          label: "Save Card for future billing?"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "mt-4" }, [
                                          createVNode(VBtn, {
                                            class: "me-4",
                                            onClick: nextStep
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Save Changes ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            color: "secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset ")
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
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "cash-on-delivery" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base text-high-emphasis my-6" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. "),
                            createVNode(VBtn, { onClick: nextStep }, {
                              default: withCtx(() => [
                                createTextVNode(" Pay on delivery ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "gift-card" }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-base font-weight-medium my-6" }, " Enter Gift Card Details "),
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(giftCardFormData).giftCardNumber,
                                          "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                          label: "Gift Card Number",
                                          placeholder: "1234 5678 9012 3456"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(giftCardFormData).giftCardPin,
                                          "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                          label: "Gift Card Pin",
                                          placeholder: "1234"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, { onClick: nextStep }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Redeem Gift Card ")
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
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    variant: "outlined"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6 mb-4"${_scopeId4}> Price Details </h6><div class="d-flex justify-space-between text-sm mb-2"${_scopeId4}><div class="text-body-1 text-high-emphasis"${_scopeId4}> Order Total </div><div class="text-body-1"${_scopeId4}> $${ssrInterpolate(unref(checkoutPaymentDataLocal).orderAmount)}.00 </div></div><div class="d-flex justify-space-between text-sm"${_scopeId4}><div class="text-high-emphasis text-body-1"${_scopeId4}> Delivery Charges </div>`);
                              if (unref(checkoutPaymentDataLocal).deliverySpeed === "free") {
                                _push5(`<div class="d-flex align-center"${_scopeId4}><div class="text-decoration-line-through text-body-1 text-disabled me-2"${_scopeId4}> $5.00 </div>`);
                                _push5(ssrRenderComponent(VChip, {
                                  color: "success",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` FREE `);
                                    } else {
                                      return [
                                        createTextVNode(" FREE ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<div${_scopeId4}><span${_scopeId4}>$${ssrInterpolate(unref(checkoutPaymentDataLocal).deliveryCharges)}</span></div>`);
                              }
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                                createVNode("div", { class: "d-flex justify-space-between text-sm mb-2" }, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                                  createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between text-sm" }, [
                                  createVNode("div", { class: "text-high-emphasis text-body-1" }, " Delivery Charges "),
                                  unref(checkoutPaymentDataLocal).deliverySpeed === "free" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "d-flex align-center"
                                  }, [
                                    createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled me-2" }, " $5.00 "),
                                    createVNode(VChip, {
                                      color: "success",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" FREE ")
                                      ]),
                                      _: 1
                                    })
                                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                    createVNode("span", null, "$" + toDisplayString(unref(checkoutPaymentDataLocal).deliveryCharges), 1)
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between text-base mb-2"${_scopeId4}><div class="text-high-emphasis font-weight-medium"${_scopeId4}> Total </div><h6 class="text-h6 text-medium-emphasis"${_scopeId4}> $${ssrInterpolate(unref(checkoutPaymentDataLocal).orderAmount)}.00 </h6></div><div class="d-flex justify-space-between text-base mb-4"${_scopeId4}><h6 class="text-h6"${_scopeId4}> Deliver to: </h6>`);
                              _push5(ssrRenderComponent(VChip, {
                                color: "primary",
                                size: "small",
                                class: "text-capitalize"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(unref(checkoutPaymentDataLocal).deliveryAddress)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(checkoutPaymentDataLocal).deliveryAddress), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><!--[-->`);
                              ssrRenderList(unref(selectedDeliveryAddress), (item) => {
                                _push5(`<!--[--><h6 class="text-h6"${_scopeId4}>${ssrInterpolate(item.title)}</h6><p class="text-body-1 mb-1"${_scopeId4}>${ssrInterpolate(item.desc)}</p><p class="text-base mb-4"${_scopeId4}> Mobile : ${ssrInterpolate(item.subtitle)}</p><!--]-->`);
                              });
                              _push5(`<!--]--><a href="javascript:void(0)" class="font-weight-medium text-base d-inline-block"${_scopeId4}>Change address</a>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between text-base mb-2" }, [
                                  createVNode("div", { class: "text-high-emphasis font-weight-medium" }, " Total "),
                                  createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between text-base mb-4" }, [
                                  createVNode("h6", { class: "text-h6" }, " Deliver to: "),
                                  createVNode(VChip, {
                                    color: "primary",
                                    size: "small",
                                    class: "text-capitalize"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(checkoutPaymentDataLocal).deliveryAddress), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: item.value
                                  }, [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                                    createVNode("p", { class: "text-body-1 mb-1" }, toDisplayString(item.desc), 1),
                                    createVNode("p", { class: "text-base mb-4" }, " Mobile : " + toDisplayString(item.subtitle), 1)
                                  ], 64);
                                }), 128)),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "font-weight-medium text-base d-inline-block"
                                }, "Change address")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                              createVNode("div", { class: "d-flex justify-space-between text-sm mb-2" }, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                                createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between text-sm" }, [
                                createVNode("div", { class: "text-high-emphasis text-body-1" }, " Delivery Charges "),
                                unref(checkoutPaymentDataLocal).deliverySpeed === "free" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex align-center"
                                }, [
                                  createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled me-2" }, " $5.00 "),
                                  createVNode(VChip, {
                                    color: "success",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" FREE ")
                                    ]),
                                    _: 1
                                  })
                                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode("span", null, "$" + toDisplayString(unref(checkoutPaymentDataLocal).deliveryCharges), 1)
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between text-base mb-2" }, [
                                createVNode("div", { class: "text-high-emphasis font-weight-medium" }, " Total "),
                                createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between text-base mb-4" }, [
                                createVNode("h6", { class: "text-h6" }, " Deliver to: "),
                                createVNode(VChip, {
                                  color: "primary",
                                  size: "small",
                                  class: "text-capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(checkoutPaymentDataLocal).deliveryAddress), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                                return openBlock(), createBlock(Fragment, {
                                  key: item.value
                                }, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                                  createVNode("p", { class: "text-body-1 mb-1" }, toDisplayString(item.desc), 1),
                                  createVNode("p", { class: "text-base mb-4" }, " Mobile : " + toDisplayString(item.subtitle), 1)
                                ], 64);
                              }), 128)),
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "font-weight-medium text-base d-inline-block"
                              }, "Change address")
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
                    createVNode(VCard, {
                      flat: "",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                            createVNode("div", { class: "d-flex justify-space-between text-sm mb-2" }, [
                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                              createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                            ]),
                            createVNode("div", { class: "d-flex justify-space-between text-sm" }, [
                              createVNode("div", { class: "text-high-emphasis text-body-1" }, " Delivery Charges "),
                              unref(checkoutPaymentDataLocal).deliverySpeed === "free" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "d-flex align-center"
                              }, [
                                createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled me-2" }, " $5.00 "),
                                createVNode(VChip, {
                                  color: "success",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" FREE ")
                                  ]),
                                  _: 1
                                })
                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("span", null, "$" + toDisplayString(unref(checkoutPaymentDataLocal).deliveryCharges), 1)
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between text-base mb-2" }, [
                              createVNode("div", { class: "text-high-emphasis font-weight-medium" }, " Total "),
                              createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                            ]),
                            createVNode("div", { class: "d-flex justify-space-between text-base mb-4" }, [
                              createVNode("h6", { class: "text-h6" }, " Deliver to: "),
                              createVNode(VChip, {
                                color: "primary",
                                size: "small",
                                class: "text-capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(checkoutPaymentDataLocal).deliveryAddress), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                              return openBlock(), createBlock(Fragment, {
                                key: item.value
                              }, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                                createVNode("p", { class: "text-body-1 mb-1" }, toDisplayString(item.desc), 1),
                                createVNode("p", { class: "text-base mb-4" }, " Mobile : " + toDisplayString(item.subtitle), 1)
                              ], 64);
                            }), 128)),
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "font-weight-medium text-base d-inline-block"
                            }, "Change address")
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
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VAlert, {
                    color: "success",
                    variant: "tonal",
                    icon: "ri-percent-line",
                    closable: "",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VAlertTitle, { class: "text-success mb-1" }, {
                        default: withCtx(() => [
                          createTextVNode(" Available Offers ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mb-0" }, " - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards "),
                      createVNode("p", { class: "mb-0" }, " - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTabs, {
                    modelValue: unref(selectedPaymentMethod),
                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                    class: "v-tabs-pill"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTab, { value: "card" }, {
                        default: withCtx(() => [
                          createTextVNode(" Card ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTab, { value: "cash-on-delivery" }, {
                        default: withCtx(() => [
                          createTextVNode(" Cash on Delivery ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTab, { value: "gift-card" }, {
                        default: withCtx(() => [
                          createTextVNode(" Gift Card ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VWindow, {
                    modelValue: unref(selectedPaymentMethod),
                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                    class: "pt-6",
                    style: { "max-inline-size": "600px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, { value: "card" }, {
                        default: withCtx(() => [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(cardFormData).cardNumber,
                                        "onUpdate:modelValue": ($event) => unref(cardFormData).cardNumber = $event,
                                        type: "number",
                                        label: "Card Number",
                                        placeholder: "1234 5678 9012 3456"
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
                                        modelValue: unref(cardFormData).cardName,
                                        "onUpdate:modelValue": ($event) => unref(cardFormData).cardName = $event,
                                        label: "Name",
                                        placeholder: "John Doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(cardFormData).cardExpiry,
                                        "onUpdate:modelValue": ($event) => unref(cardFormData).cardExpiry = $event,
                                        label: "Expiry",
                                        placeholder: "MM/YY"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(cardFormData).cardCvv,
                                        "onUpdate:modelValue": ($event) => unref(cardFormData).cardCvv = $event,
                                        label: "CVV",
                                        placeholder: "123",
                                        type: "number"
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(VTooltip, {
                                            text: "Card Verification Value",
                                            location: "bottom"
                                          }, {
                                            activator: withCtx(({ props: tooltipProps }) => [
                                              createVNode(VIcon, mergeProps(tooltipProps, {
                                                size: "20",
                                                icon: "ri-question-line"
                                              }), null, 16)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSwitch, {
                                        modelValue: unref(cardFormData).isCardSave,
                                        "onUpdate:modelValue": ($event) => unref(cardFormData).isCardSave = $event,
                                        label: "Save Card for future billing?"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "mt-4" }, [
                                        createVNode(VBtn, {
                                          class: "me-4",
                                          onClick: nextStep
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Save Changes ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset ")
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
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "cash-on-delivery" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base text-high-emphasis my-6" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. "),
                          createVNode(VBtn, { onClick: nextStep }, {
                            default: withCtx(() => [
                              createTextVNode(" Pay on delivery ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "gift-card" }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-base font-weight-medium my-6" }, " Enter Gift Card Details "),
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(giftCardFormData).giftCardNumber,
                                        "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardNumber = $event,
                                        label: "Gift Card Number",
                                        placeholder: "1234 5678 9012 3456"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(giftCardFormData).giftCardPin,
                                        "onUpdate:modelValue": ($event) => unref(giftCardFormData).giftCardPin = $event,
                                        label: "Gift Card Pin",
                                        placeholder: "1234"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, { onClick: nextStep }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Redeem Gift Card ")
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
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6 mb-4" }, " Price Details "),
                          createVNode("div", { class: "d-flex justify-space-between text-sm mb-2" }, [
                            createVNode("div", { class: "text-body-1 text-high-emphasis" }, " Order Total "),
                            createVNode("div", { class: "text-body-1" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                          ]),
                          createVNode("div", { class: "d-flex justify-space-between text-sm" }, [
                            createVNode("div", { class: "text-high-emphasis text-body-1" }, " Delivery Charges "),
                            unref(checkoutPaymentDataLocal).deliverySpeed === "free" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex align-center"
                            }, [
                              createVNode("div", { class: "text-decoration-line-through text-body-1 text-disabled me-2" }, " $5.00 "),
                              createVNode(VChip, {
                                color: "success",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" FREE ")
                                ]),
                                _: 1
                              })
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("span", null, "$" + toDisplayString(unref(checkoutPaymentDataLocal).deliveryCharges), 1)
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between text-base mb-2" }, [
                            createVNode("div", { class: "text-high-emphasis font-weight-medium" }, " Total "),
                            createVNode("h6", { class: "text-h6 text-medium-emphasis" }, " $" + toDisplayString(unref(checkoutPaymentDataLocal).orderAmount) + ".00 ", 1)
                          ]),
                          createVNode("div", { class: "d-flex justify-space-between text-base mb-4" }, [
                            createVNode("h6", { class: "text-h6" }, " Deliver to: "),
                            createVNode(VChip, {
                              color: "primary",
                              size: "small",
                              class: "text-capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(checkoutPaymentDataLocal).deliveryAddress), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDeliveryAddress), (item) => {
                            return openBlock(), createBlock(Fragment, {
                              key: item.value
                            }, [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.title), 1),
                              createVNode("p", { class: "text-body-1 mb-1" }, toDisplayString(item.desc), 1),
                              createVNode("p", { class: "text-base mb-4" }, " Mobile : " + toDisplayString(item.subtitle), 1)
                            ], 64);
                          }), 128)),
                          createVNode("a", {
                            href: "javascript:void(0)",
                            class: "font-weight-medium text-base d-inline-block"
                          }, "Change address")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/wizard-examples/checkout/Payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const googleHome = "/build/assets/google-home-vPNqMwty.png";
const iphone11 = "/build/assets/iphone-11-BZSCwolv.png";
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "60",
  height: "60",
  fill: "none"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<g fill="currentColor" fill-opacity=".87" clip-path="url(#a)"><path d="M60 8V0H0v8h2v40H1a1 1 0 1 0 0 2h28v2c0 .047.021.088.027.134C27.293 52.571 26 54.131 26 56c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.869-1.293-3.429-3.027-3.866.006-.046.027-.087.027-.134v-2h28a1 1 0 1 0 0-2h-1V8zM32 56c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2M2 2h56v4H2zm54 46H4V8h52z"></path><path d="M50 41H35a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2M10 36h10a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2M30 36h15a1 1 0 1 0 0-2H30a1 1 0 1 0 0 2M24.29 34.29c-.18.189-.29.439-.29.71 0 .26.11.52.29.71.19.18.45.29.71.29s.52-.11.71-.29c.18-.19.29-.45.29-.71s-.11-.521-.29-.71c-.37-.37-1.05-.37-1.42 0M30 41H15a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2M10 43c.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71s-.11-.521-.29-.7c-.37-.38-1.04-.38-1.42-.01-.18.189-.29.45-.29.71s.11.52.29.71c.19.18.45.29.71.29M49.29 34.29c-.18.189-.29.439-.29.71 0 .26.11.52.29.71.19.18.45.29.71.29s.52-.11.71-.29c.18-.19.29-.45.29-.71s-.11-.521-.29-.71c-.37-.37-1.04-.37-1.42 0M50 20H35a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2M50 27H40a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2M30 29h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2M30 15h15a1 1 0 1 0 0-2H30a1 1 0 1 0 0 2M50 15c.26 0 .52-.11.71-.29.19-.19.29-.45.29-.71s-.1-.521-.29-.71c-.38-.37-1.05-.37-1.42 0-.18.189-.29.45-.29.71s.11.52.29.71c.19.18.45.29.71.29M30.29 20.29c-.18.189-.29.439-.29.71 0 .26.11.52.29.71.19.18.45.29.71.29s.52-.11.71-.29c.18-.19.29-.45.29-.71 0-.271-.11-.521-.29-.71-.38-.37-1.04-.37-1.42 0M35.29 27.29c-.18.189-.29.45-.29.71s.11.52.29.71c.19.18.45.29.71.29s.52-.11.71-.29c.18-.19.29-.45.29-.71s-.11-.521-.29-.71c-.37-.37-1.05-.37-1.42 0M25 13H9v16h16zm-2 14H11V15h12z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z"></path></clipPath></defs>', 2);
const _hoisted_4$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_4$3]);
}
const customAddress = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "60",
  height: "60",
  fill: "none"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M60 41.5v-26h-9.153c-.562 0-1.017.447-1.017 1s.455 1 1.017 1h7.12v22h-46.78v-22h7.118c.563 0 1.017-.447 1.017-1s-.454-1-1.017-1h-7.119v-8c0-.553-.454-1-1.017-1H7.991a4.05 4.05 0 0 0-3.923-3C1.824 3.5 0 5.294 0 7.5s1.824 4 4.068 4c1.89 0 3.469-1.28 3.923-3h1.162v39c0 .553.454 1 1.016 1h7.15c-1.245.912-2.065 2.359-2.065 4 0 2.757 2.281 5 5.085 5s5.085-2.243 5.085-5c0-1.641-.82-3.088-2.066-4h18.368c-1.245.912-2.065 2.359-2.065 4 0 2.757 2.281 5 5.085 5s5.084-2.243 5.084-5c0-1.641-.82-3.088-2.065-4h6.133c.563 0 1.017-.447 1.017-1s-.454-1-1.017-1H11.186v-5zM4.068 9.5c-1.122 0-2.034-.897-2.034-2s.912-2 2.034-2c.75 0 1.398.405 1.751 1h-.734c-.563 0-1.017.447-1.017 1s.454 1 1.017 1h.734c-.353.595-1.002 1-1.751 1m16.271 46c-1.682 0-3.05-1.346-3.05-3s1.368-3 3.05-3 3.05 1.346 3.05 3-1.368 3-3.05 3m24.407 0c-1.682 0-3.051-1.346-3.051-3s1.369-3 3.05-3c1.683 0 3.052 1.346 3.052 3s-1.37 3-3.051 3"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M34.576 30.5c7.851 0 14.237-6.28 14.237-14s-6.386-14-14.237-14c-7.85 0-14.237 6.28-14.237 14s6.386 14 14.237 14m0-26c6.73 0 12.203 5.383 12.203 12s-5.474 12-12.203 12-12.203-5.383-12.203-12 5.474-12 12.203-12"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M32.907 22.269c.067.053.14.085.215.12.03.015.058.039.09.05a1.032 1.032 0 0 0 .763-.028c.05-.022.087-.066.133-.096.073-.047.15-.084.21-.151l.02-.022.001-.001.001-.002 8.112-8.975a.987.987 0 0 0-.084-1.411 1.026 1.026 0 0 0-1.435.083l-7.48 8.276-5.346-4.38a1.03 1.03 0 0 0-1.432.128.99.99 0 0 0 .13 1.409z"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$2,
  _hoisted_3,
  _hoisted_4$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_5]);
}
const customCart = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "60",
  height: "60",
  fill: "none"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g fill="currentColor" fill-opacity=".87" clip-path="url(#a)"><path d="M9 26h8V16H9zm2-8h4v6h-4zM9 38h8V28H9zm2-8h4v6h-4zM9 50h8V40H9zm2-8h4v6h-4zM36 25a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1M36 38a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1M31 25a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1M31 30a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M31 36a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1M31 41a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M30.29 47.29c-.181.189-.29.45-.29.71 0 .27.109.52.29.71.189.18.45.29.71.29s.52-.11.71-.29c.18-.19.29-.44.29-.71 0-.26-.11-.521-.29-.71-.38-.37-1.03-.38-1.42 0"></path><path d="M48 2H0v7h3v44.783A4.22 4.22 0 0 0 7.217 58h33.566A4.22 4.22 0 0 0 45 53.783V9h3zm-5 51.783A2.22 2.22 0 0 1 40.783 56H7.217A2.22 2.22 0 0 1 5 53.783V7h4v7h8V7h9v11.745A2.26 2.26 0 0 0 28.255 21h9.49A2.26 2.26 0 0 0 40 18.745V7h3zM11 7h4v5h-4zm23 0v2h-2V7zm4 0v2.026c-.085-.01-.168-.026-.255-.026H36V7zm-9.745 12a.255.255 0 0 1-.255-.255v-3.771c.085.01.168.026.255.026H30v4zM32 15h1.745c.141 0 .255.114.255.255v3.49c0 .087.016.17.026.255H32zm4 3.745v-3.49A2.26 2.26 0 0 0 33.745 13h-5.49a.255.255 0 0 1-.255-.255v-1.49c0-.141.114-.255.255-.255h9.49c.141 0 .255.114.255.255v7.49a.255.255 0 0 1-.255.255h-1.49a.255.255 0 0 1-.255-.255M30 9h-1.745c-.087 0-.17.016-.255.026V7h2zm16-2h-1V5H3v2H2V4h44z"></path><path d="m59.707 34.293-5.999-5.999a1.001 1.001 0 0 0-1.416 0l-5.999 5.999a.999.999 0 1 0 1.414 1.414L52 31.414V57a1 1 0 1 0 2 0V31.414l4.293 4.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z"></path></clipPath></defs>', 2);
const _hoisted_4$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_4$1]);
}
const customPayment = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "60",
  height: "60",
  fill: "none"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<g fill="currentColor" fill-opacity=".87" clip-path="url(#a)"><path d="M8 16h15a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2M8 13h9a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2M24 18a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h15a1 1 0 0 0 1-1"></path><path d="M60 4H31V1a1 1 0 1 0-2 0v3H0v42h27.586L15.293 58.293a.999.999 0 1 0 1.414 1.414L29 47.414V57a1 1 0 1 0 2 0v-9.586l12.293 12.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L32.414 46H60zm-2 40H2V6h56z"></path><path d="M41 20h4.586L33.6 31.986l-8.293-8.293a1 1 0 0 0-1.414 0l-12.6 12.6a.999.999 0 1 0 1.414 1.414L24.6 25.814l8.293 8.293a.997.997 0 0 0 1.414 0L47 21.414V26a1 1 0 1 0 2 0v-7q0-.197-.077-.382A1 1 0 0 0 48 18h-7a1 1 0 1 0 0 2"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z"></path></clipPath></defs>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_4]);
}
const customTrending = { render };
export {
  AddressContent as A,
  _sfc_main$2 as _,
  _sfc_main as a,
  _sfc_main$1 as b,
  customCart as c,
  customAddress as d,
  customPayment as e,
  customTrending as f,
  googleHome as g,
  iphone11 as i
};
