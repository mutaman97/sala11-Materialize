import { _ as _sfc_main$3 } from "./AddEditAddressDialog-CR2aSRYs.js";
import { _ as _sfc_main$2 } from "./UserInfoEditDialog-Dqac65qF.js";
import { _ as _sfc_main$1 } from "./ConfirmDialog-I9elYGet.js";
import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { V as VBtn, c as avatar1, a as VIcon, p as product24 } from "../ssr.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem } from "./VCard-BPXR3fWJ.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import "./CustomRadios-DrYzSNcj.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./DialogCloseBtn-h97PlnE6.js";
import "./VDialog-JSJ1TRMg.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VForm-J0SV9LXx.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VSelect-5lJOBAar.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VMenu-KUYgjPyD.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSwitch-nG7fxOCQ.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
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
import "./VSlideGroup-Bvz86g7R.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
const product21 = "/build/assets/product-21-DWptqZV7.png";
const product22 = "/build/assets/product-22-CTnIxmV8.png";
const product23 = "/build/assets/product-23-BUAMboel.png";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute("apps-ecommerce-order-details-id");
    const isConfirmDialogVisible = ref(false);
    const isUserInfoEditDialogVisible = ref(false);
    const isEditAddressDialogVisible = ref(false);
    const headers = [
      {
        title: "Product",
        key: "productName"
      },
      {
        title: "Price",
        key: "price"
      },
      {
        title: "Quantity",
        key: "quantity"
      },
      {
        title: "Total",
        key: "total",
        sortable: false
      }
    ];
    const orderData = [
      {
        productName: "OnePlus 7 Pro",
        productImage: product21,
        brand: "OnePlus",
        price: 799,
        quantity: 1
      },
      {
        productName: "Magic Mouse",
        productImage: product22,
        brand: "Apple",
        price: 89,
        quantity: 1
      },
      {
        productName: "Wooden Chair",
        productImage: product23,
        brand: "insofer",
        price: 289,
        quantity: 2
      },
      {
        productName: "Air Jorden",
        productImage: product24,
        brand: "Nike",
        price: 299,
        quantity: 2
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConfirmDialog = _sfc_main$1;
      const _component_UserInfoEditDialog = _sfc_main$2;
      const _component_AddEditAddressDialog = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"><div><div class="d-flex gap-2 align-center mb-1 flex-wrap"><h5 class="text-h5"> Order #${ssrInterpolate(unref(route).params.id)}</h5><div class="d-flex gap-x-2">`);
      _push(ssrRenderComponent(VChip, {
        variant: "tonal",
        color: "success",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Paid `);
          } else {
            return [
              createTextVNode(" Paid ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VChip, {
        variant: "tonal",
        color: "info",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ready to Pickup `);
          } else {
            return [
              createTextVNode(" Ready to Pickup ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><span class="text-body-1"> Aug 17, 2020, 5:48 (ET) </span></div></div>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "error",
        onClick: ($event) => isConfirmDialogVisible.value = !unref(isConfirmDialogVisible)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Order `);
          } else {
            return [
              createTextVNode(" Delete Order ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h5 class="text-h5"${_scopeId4}> Order Details </h5>`);
                            } else {
                              return [
                                createVNode("h5", { class: "text-h5" }, " Order Details ")
                              ];
                            }
                          }),
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6 text-primary cursor-pointer"${_scopeId4}> Edit </h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Edit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDataTable, {
                          headers,
                          items: orderData,
                          "item-value": "productName",
                          "show-select": "",
                          class: "text-no-wrap"
                        }, {
                          "item.productName": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-x-3 align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                size: "34",
                                variant: "tonal",
                                image: item.productImage,
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-column align-center"${_scopeId4}><h6 class="text-h6"${_scopeId4}>${ssrInterpolate(item.productName)}</h6><span class="text-sm text-start align-self-start"${_scopeId4}>${ssrInterpolate(item.brand)}</span></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                                  createVNode(VAvatar, {
                                    size: "34",
                                    variant: "tonal",
                                    image: item.productImage,
                                    rounded: ""
                                  }, null, 8, ["image"]),
                                  createVNode("div", { class: "d-flex flex-column align-center" }, [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.productName), 1),
                                    createVNode("span", { class: "text-sm text-start align-self-start" }, toDisplayString(item.brand), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          "item.price": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>$${ssrInterpolate(item.price)}</span>`);
                            } else {
                              return [
                                createVNode("span", null, "$" + toDisplayString(item.price), 1)
                              ];
                            }
                          }),
                          "item.total": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}> $${ssrInterpolate(item.price * item.quantity)}</span>`);
                            } else {
                              return [
                                createVNode("span", null, " $" + toDisplayString(item.price * item.quantity), 1)
                              ];
                            }
                          }),
                          bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5)
                              ;
                            else {
                              return [];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-end flex-column"${_scopeId4}><table class="text-high-emphasis"${_scopeId4}><tbody${_scopeId4}><tr${_scopeId4}><td width="200px"${_scopeId4}> Subtotal: </td><td class="font-weight-medium"${_scopeId4}> $2,093 </td></tr><tr${_scopeId4}><td${_scopeId4}>Shipping fee: </td><td class="font-weight-medium"${_scopeId4}> $2 </td></tr><tr${_scopeId4}><td${_scopeId4}>Tax: </td><td class="font-weight-medium"${_scopeId4}> $28 </td></tr><tr${_scopeId4}><td class="font-weight-medium"${_scopeId4}> Total: </td><td class="font-weight-medium"${_scopeId4}> $2,113 </td></tr></tbody></table></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-end flex-column" }, [
                                  createVNode("table", { class: "text-high-emphasis" }, [
                                    createVNode("tbody", null, [
                                      createVNode("tr", null, [
                                        createVNode("td", { width: "200px" }, " Subtotal: "),
                                        createVNode("td", { class: "font-weight-medium" }, " $2,093 ")
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, "Shipping fee: "),
                                        createVNode("td", { class: "font-weight-medium" }, " $2 ")
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, "Tax: "),
                                        createVNode("td", { class: "font-weight-medium" }, " $28 ")
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "font-weight-medium" }, " Total: "),
                                        createVNode("td", { class: "font-weight-medium" }, " $2,113 ")
                                      ])
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, null, {
                            title: withCtx(() => [
                              createVNode("h5", { class: "text-h5" }, " Order Details ")
                            ]),
                            append: withCtx(() => [
                              createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Edit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDataTable, {
                            headers,
                            items: orderData,
                            "item-value": "productName",
                            "show-select": "",
                            class: "text-no-wrap"
                          }, {
                            "item.productName": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                                createVNode(VAvatar, {
                                  size: "34",
                                  variant: "tonal",
                                  image: item.productImage,
                                  rounded: ""
                                }, null, 8, ["image"]),
                                createVNode("div", { class: "d-flex flex-column align-center" }, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.productName), 1),
                                  createVNode("span", { class: "text-sm text-start align-self-start" }, toDisplayString(item.brand), 1)
                                ])
                              ])
                            ]),
                            "item.price": withCtx(({ item }) => [
                              createVNode("span", null, "$" + toDisplayString(item.price), 1)
                            ]),
                            "item.total": withCtx(({ item }) => [
                              createVNode("span", null, " $" + toDisplayString(item.price * item.quantity), 1)
                            ]),
                            bottom: withCtx(() => []),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-end flex-column" }, [
                                createVNode("table", { class: "text-high-emphasis" }, [
                                  createVNode("tbody", null, [
                                    createVNode("tr", null, [
                                      createVNode("td", { width: "200px" }, " Subtotal: "),
                                      createVNode("td", { class: "font-weight-medium" }, " $2,093 ")
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", null, "Shipping fee: "),
                                      createVNode("td", { class: "font-weight-medium" }, " $2 ")
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", null, "Tax: "),
                                      createVNode("td", { class: "font-weight-medium" }, " $28 ")
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "font-weight-medium" }, " Total: "),
                                      createVNode("td", { class: "font-weight-medium" }, " $2,113 ")
                                    ])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, { title: "Shipping Activity" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTimeline, {
                                "truncate-line": "both",
                                align: "start",
                                side: "end",
                                "line-inset": "10",
                                "line-color": "primary",
                                density: "compact",
                                class: "v-timeline-density-compact"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center mb-3"${_scopeId6}><span class="app-timeline-title"${_scopeId6}>Order was placed (Order ID: #32543)</span><span class="app-timeline-meta"${_scopeId6}>Tuesday 11:29 AM</span></div><p class="app-timeline-text mb-0"${_scopeId6}> Your order has been placed successfully </p>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                              createVNode("span", { class: "app-timeline-title" }, "Order was placed (Order ID: #32543)"),
                                              createVNode("span", { class: "app-timeline-meta" }, "Tuesday 11:29 AM")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mb-0" }, " Your order has been placed successfully ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center mb-3"${_scopeId6}><span class="app-timeline-title"${_scopeId6}>Pick-up</span><span class="app-timeline-meta"${_scopeId6}>Wednesday 11:29 AM</span></div><p class="app-timeline-text mb-0"${_scopeId6}> Pick-up scheduled with courier </p>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                              createVNode("span", { class: "app-timeline-title" }, "Pick-up"),
                                              createVNode("span", { class: "app-timeline-meta" }, "Wednesday 11:29 AM")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mb-0" }, " Pick-up scheduled with courier ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center mb-3"${_scopeId6}><span class="app-timeline-title"${_scopeId6}>Dispatched</span><span class="app-timeline-meta"${_scopeId6}>Thursday 8:15 AM</span></div><p class="app-timeline-text mb-0"${_scopeId6}> Item has been picked up by courier. </p>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                              createVNode("span", { class: "app-timeline-title" }, "Dispatched"),
                                              createVNode("span", { class: "app-timeline-meta" }, "Thursday 8:15 AM")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mb-0" }, " Item has been picked up by courier. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center mb-3"${_scopeId6}><span class="app-timeline-title"${_scopeId6}>Package arrived</span><span class="app-timeline-meta"${_scopeId6}>Saturday 15:20 AM</span></div><p class="app-timeline-text mb-0"${_scopeId6}> Package arrived at an Amazon facility, NY </p>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                              createVNode("span", { class: "app-timeline-title" }, "Package arrived"),
                                              createVNode("span", { class: "app-timeline-meta" }, "Saturday 15:20 AM")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mb-0" }, " Package arrived at an Amazon facility, NY ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center mb-3"${_scopeId6}><span class="app-timeline-title"${_scopeId6}>Dispatched for delivery</span><span class="app-timeline-meta"${_scopeId6}>Today 14:12 PM</span></div><p class="app-timeline-text mb-0"${_scopeId6}> Package has left an Amazon facility , NY </p>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                              createVNode("span", { class: "app-timeline-title" }, "Dispatched for delivery"),
                                              createVNode("span", { class: "app-timeline-meta" }, "Today 14:12 PM")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mb-0" }, " Package has left an Amazon facility , NY ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center mb-3"${_scopeId6}><span class="app-timeline-title"${_scopeId6}>Delivery</span></div><p class="app-timeline-text mb-0"${_scopeId6}> Package will be delivered by tomorrow </p>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                              createVNode("span", { class: "app-timeline-title" }, "Delivery")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mb-0" }, " Package will be delivered by tomorrow ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "app-timeline-title" }, "Order was placed (Order ID: #32543)"),
                                            createVNode("span", { class: "app-timeline-meta" }, "Tuesday 11:29 AM")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mb-0" }, " Your order has been placed successfully ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "app-timeline-title" }, "Pick-up"),
                                            createVNode("span", { class: "app-timeline-meta" }, "Wednesday 11:29 AM")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mb-0" }, " Pick-up scheduled with courier ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "app-timeline-title" }, "Dispatched"),
                                            createVNode("span", { class: "app-timeline-meta" }, "Thursday 8:15 AM")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mb-0" }, " Item has been picked up by courier. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "app-timeline-title" }, "Package arrived"),
                                            createVNode("span", { class: "app-timeline-meta" }, "Saturday 15:20 AM")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mb-0" }, " Package arrived at an Amazon facility, NY ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "app-timeline-title" }, "Dispatched for delivery"),
                                            createVNode("span", { class: "app-timeline-meta" }, "Today 14:12 PM")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mb-0" }, " Package has left an Amazon facility , NY ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                            createVNode("span", { class: "app-timeline-title" }, "Delivery")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mb-0" }, " Package will be delivered by tomorrow ")
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
                                createVNode(VTimeline, {
                                  "truncate-line": "both",
                                  align: "start",
                                  side: "end",
                                  "line-inset": "10",
                                  "line-color": "primary",
                                  density: "compact",
                                  class: "v-timeline-density-compact"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "app-timeline-title" }, "Order was placed (Order ID: #32543)"),
                                          createVNode("span", { class: "app-timeline-meta" }, "Tuesday 11:29 AM")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mb-0" }, " Your order has been placed successfully ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "app-timeline-title" }, "Pick-up"),
                                          createVNode("span", { class: "app-timeline-meta" }, "Wednesday 11:29 AM")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mb-0" }, " Pick-up scheduled with courier ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "app-timeline-title" }, "Dispatched"),
                                          createVNode("span", { class: "app-timeline-meta" }, "Thursday 8:15 AM")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mb-0" }, " Item has been picked up by courier. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "app-timeline-title" }, "Package arrived"),
                                          createVNode("span", { class: "app-timeline-meta" }, "Saturday 15:20 AM")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mb-0" }, " Package arrived at an Amazon facility, NY ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "app-timeline-title" }, "Dispatched for delivery"),
                                          createVNode("span", { class: "app-timeline-meta" }, "Today 14:12 PM")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mb-0" }, " Package has left an Amazon facility , NY ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                          createVNode("span", { class: "app-timeline-title" }, "Delivery")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mb-0" }, " Package will be delivered by tomorrow ")
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
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VTimeline, {
                                "truncate-line": "both",
                                align: "start",
                                side: "end",
                                "line-inset": "10",
                                "line-color": "primary",
                                density: "compact",
                                class: "v-timeline-density-compact"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "app-timeline-title" }, "Order was placed (Order ID: #32543)"),
                                        createVNode("span", { class: "app-timeline-meta" }, "Tuesday 11:29 AM")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mb-0" }, " Your order has been placed successfully ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "app-timeline-title" }, "Pick-up"),
                                        createVNode("span", { class: "app-timeline-meta" }, "Wednesday 11:29 AM")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mb-0" }, " Pick-up scheduled with courier ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "app-timeline-title" }, "Dispatched"),
                                        createVNode("span", { class: "app-timeline-meta" }, "Thursday 8:15 AM")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mb-0" }, " Item has been picked up by courier. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "app-timeline-title" }, "Package arrived"),
                                        createVNode("span", { class: "app-timeline-meta" }, "Saturday 15:20 AM")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mb-0" }, " Package arrived at an Amazon facility, NY ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "app-timeline-title" }, "Dispatched for delivery"),
                                        createVNode("span", { class: "app-timeline-meta" }, "Today 14:12 PM")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mb-0" }, " Package has left an Amazon facility , NY ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                        createVNode("span", { class: "app-timeline-title" }, "Delivery")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mb-0" }, " Package will be delivered by tomorrow ")
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
                    createVNode(VCard, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          title: withCtx(() => [
                            createVNode("h5", { class: "text-h5" }, " Order Details ")
                          ]),
                          append: withCtx(() => [
                            createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Edit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDataTable, {
                          headers,
                          items: orderData,
                          "item-value": "productName",
                          "show-select": "",
                          class: "text-no-wrap"
                        }, {
                          "item.productName": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                              createVNode(VAvatar, {
                                size: "34",
                                variant: "tonal",
                                image: item.productImage,
                                rounded: ""
                              }, null, 8, ["image"]),
                              createVNode("div", { class: "d-flex flex-column align-center" }, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.productName), 1),
                                createVNode("span", { class: "text-sm text-start align-self-start" }, toDisplayString(item.brand), 1)
                              ])
                            ])
                          ]),
                          "item.price": withCtx(({ item }) => [
                            createVNode("span", null, "$" + toDisplayString(item.price), 1)
                          ]),
                          "item.total": withCtx(({ item }) => [
                            createVNode("span", null, " $" + toDisplayString(item.price * item.quantity), 1)
                          ]),
                          bottom: withCtx(() => []),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-end flex-column" }, [
                              createVNode("table", { class: "text-high-emphasis" }, [
                                createVNode("tbody", null, [
                                  createVNode("tr", null, [
                                    createVNode("td", { width: "200px" }, " Subtotal: "),
                                    createVNode("td", { class: "font-weight-medium" }, " $2,093 ")
                                  ]),
                                  createVNode("tr", null, [
                                    createVNode("td", null, "Shipping fee: "),
                                    createVNode("td", { class: "font-weight-medium" }, " $2 ")
                                  ]),
                                  createVNode("tr", null, [
                                    createVNode("td", null, "Tax: "),
                                    createVNode("td", { class: "font-weight-medium" }, " $28 ")
                                  ]),
                                  createVNode("tr", null, [
                                    createVNode("td", { class: "font-weight-medium" }, " Total: "),
                                    createVNode("td", { class: "font-weight-medium" }, " $2,113 ")
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, { title: "Shipping Activity" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VTimeline, {
                              "truncate-line": "both",
                              align: "start",
                              side: "end",
                              "line-inset": "10",
                              "line-color": "primary",
                              density: "compact",
                              class: "v-timeline-density-compact"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "app-timeline-title" }, "Order was placed (Order ID: #32543)"),
                                      createVNode("span", { class: "app-timeline-meta" }, "Tuesday 11:29 AM")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mb-0" }, " Your order has been placed successfully ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "app-timeline-title" }, "Pick-up"),
                                      createVNode("span", { class: "app-timeline-meta" }, "Wednesday 11:29 AM")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mb-0" }, " Pick-up scheduled with courier ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "app-timeline-title" }, "Dispatched"),
                                      createVNode("span", { class: "app-timeline-meta" }, "Thursday 8:15 AM")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mb-0" }, " Item has been picked up by courier. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "app-timeline-title" }, "Package arrived"),
                                      createVNode("span", { class: "app-timeline-meta" }, "Saturday 15:20 AM")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mb-0" }, " Package arrived at an Amazon facility, NY ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "app-timeline-title" }, "Dispatched for delivery"),
                                      createVNode("span", { class: "app-timeline-meta" }, "Today 14:12 PM")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mb-0" }, " Package has left an Amazon facility , NY ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                      createVNode("span", { class: "app-timeline-title" }, "Delivery")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mb-0" }, " Package will be delivered by tomorrow ")
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column gap-y-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h5 class="text-h5"${_scopeId4}> Customer Details </h5><div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                image: unref(avatar1),
                                class: "me-3"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><div class="text-body-1 text-high-emphasis font-weight-medium"${_scopeId4}> Shamus Tuttle </div><span class="d-inline-block"${_scopeId4}>Customer ID: #47389</span></div></div><div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                variant: "tonal",
                                color: "success",
                                class: "me-3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-shopping-cart-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<h6 class="text-h6"${_scopeId4}> 12 Orders </h6></div><div class="d-flex flex-column gap-y-1"${_scopeId4}><div class="d-flex justify-space-between gap-1 text-body-2"${_scopeId4}><h6 class="text-h6"${_scopeId4}> Contact Info </h6><span class="text-base text-primary font-weight-medium cursor-pointer"${_scopeId4}> Edit </span></div><span${_scopeId4}>Email: Sheldon88@yahoo.com</span><span${_scopeId4}>Mobile: +1 (609) 972-22-22</span></div>`);
                            } else {
                              return [
                                createVNode("h5", { class: "text-h5" }, " Customer Details "),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VAvatar, {
                                    image: unref(avatar1),
                                    class: "me-3"
                                  }, null, 8, ["image"]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " Shamus Tuttle "),
                                    createVNode("span", { class: "d-inline-block" }, "Customer ID: #47389")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    color: "success",
                                    class: "me-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h6", { class: "text-h6" }, " 12 Orders ")
                                ]),
                                createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                  createVNode("div", { class: "d-flex justify-space-between gap-1 text-body-2" }, [
                                    createVNode("h6", { class: "text-h6" }, " Contact Info "),
                                    createVNode("span", {
                                      class: "text-base text-primary font-weight-medium cursor-pointer",
                                      onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                    }, " Edit ", 8, ["onClick"])
                                  ]),
                                  createVNode("span", null, "Email: Sheldon88@yahoo.com"),
                                  createVNode("span", null, "Mobile: +1 (609) 972-22-22")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column gap-y-6" }, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5" }, " Customer Details "),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  image: unref(avatar1),
                                  class: "me-3"
                                }, null, 8, ["image"]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " Shamus Tuttle "),
                                  createVNode("span", { class: "d-inline-block" }, "Customer ID: #47389")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "success",
                                  class: "me-3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("h6", { class: "text-h6" }, " 12 Orders ")
                              ]),
                              createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                createVNode("div", { class: "d-flex justify-space-between gap-1 text-body-2" }, [
                                  createVNode("h6", { class: "text-h6" }, " Contact Info "),
                                  createVNode("span", {
                                    class: "text-base text-primary font-weight-medium cursor-pointer",
                                    onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                  }, " Edit ", 8, ["onClick"])
                                ]),
                                createVNode("span", null, "Email: Sheldon88@yahoo.com"),
                                createVNode("span", null, "Mobile: +1 (609) 972-22-22")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, { class: "mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center justify-space-between gap-1 mb-6"${_scopeId4}><h5 class="text-h5"${_scopeId4}> Shipping Address </h5><span class="text-base text-primary font-weight-medium cursor-pointer"${_scopeId4}>Edit</span></div><div${_scopeId4}> 45 Rocker Terrace <br${_scopeId4}> Latheronwheel <br${_scopeId4}> KW5 8NW, London <br${_scopeId4}> UK </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-6" }, [
                                  createVNode("h5", { class: "text-h5" }, " Shipping Address "),
                                  createVNode("span", {
                                    class: "text-base text-primary font-weight-medium cursor-pointer",
                                    onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                                  }, "Edit", 8, ["onClick"])
                                ]),
                                createVNode("div", null, [
                                  createTextVNode(" 45 Rocker Terrace "),
                                  createVNode("br"),
                                  createTextVNode(" Latheronwheel "),
                                  createVNode("br"),
                                  createTextVNode(" KW5 8NW, London "),
                                  createVNode("br"),
                                  createTextVNode(" UK ")
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
                              createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-6" }, [
                                createVNode("h5", { class: "text-h5" }, " Shipping Address "),
                                createVNode("span", {
                                  class: "text-base text-primary font-weight-medium cursor-pointer",
                                  onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                                }, "Edit", 8, ["onClick"])
                              ]),
                              createVNode("div", null, [
                                createTextVNode(" 45 Rocker Terrace "),
                                createVNode("br"),
                                createTextVNode(" Latheronwheel "),
                                createVNode("br"),
                                createTextVNode(" KW5 8NW, London "),
                                createVNode("br"),
                                createTextVNode(" UK ")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center justify-space-between gap-1 mb-1"${_scopeId4}><h5 class="text-h5"${_scopeId4}> Billing Address </h5><span class="text-base text-primary font-weight-medium cursor-pointer"${_scopeId4}>Edit</span></div><div${_scopeId4}> 45 Rocker Terrace <br${_scopeId4}> Latheronwheel <br${_scopeId4}> KW5 8NW, London <br${_scopeId4}> UK </div><div class="mt-6"${_scopeId4}><h5 class="text-h5 mb-1"${_scopeId4}> Mastercard </h5><div class="text-base"${_scopeId4}> Card Number: ******4291 </div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-1" }, [
                                  createVNode("h5", { class: "text-h5" }, " Billing Address "),
                                  createVNode("span", {
                                    class: "text-base text-primary font-weight-medium cursor-pointer",
                                    onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                                  }, "Edit", 8, ["onClick"])
                                ]),
                                createVNode("div", null, [
                                  createTextVNode(" 45 Rocker Terrace "),
                                  createVNode("br"),
                                  createTextVNode(" Latheronwheel "),
                                  createVNode("br"),
                                  createTextVNode(" KW5 8NW, London "),
                                  createVNode("br"),
                                  createTextVNode(" UK ")
                                ]),
                                createVNode("div", { class: "mt-6" }, [
                                  createVNode("h5", { class: "text-h5 mb-1" }, " Mastercard "),
                                  createVNode("div", { class: "text-base" }, " Card Number: ******4291 ")
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
                              createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-1" }, [
                                createVNode("h5", { class: "text-h5" }, " Billing Address "),
                                createVNode("span", {
                                  class: "text-base text-primary font-weight-medium cursor-pointer",
                                  onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                                }, "Edit", 8, ["onClick"])
                              ]),
                              createVNode("div", null, [
                                createTextVNode(" 45 Rocker Terrace "),
                                createVNode("br"),
                                createTextVNode(" Latheronwheel "),
                                createVNode("br"),
                                createTextVNode(" KW5 8NW, London "),
                                createVNode("br"),
                                createTextVNode(" UK ")
                              ]),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode("h5", { class: "text-h5 mb-1" }, " Mastercard "),
                                createVNode("div", { class: "text-base" }, " Card Number: ******4291 ")
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
                    createVNode(VCard, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column gap-y-6" }, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-h5" }, " Customer Details "),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                image: unref(avatar1),
                                class: "me-3"
                              }, null, 8, ["image"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " Shamus Tuttle "),
                                createVNode("span", { class: "d-inline-block" }, "Customer ID: #47389")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "success",
                                class: "me-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                ]),
                                _: 1
                              }),
                              createVNode("h6", { class: "text-h6" }, " 12 Orders ")
                            ]),
                            createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                              createVNode("div", { class: "d-flex justify-space-between gap-1 text-body-2" }, [
                                createVNode("h6", { class: "text-h6" }, " Contact Info "),
                                createVNode("span", {
                                  class: "text-base text-primary font-weight-medium cursor-pointer",
                                  onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                }, " Edit ", 8, ["onClick"])
                              ]),
                              createVNode("span", null, "Email: Sheldon88@yahoo.com"),
                              createVNode("span", null, "Mobile: +1 (609) 972-22-22")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-6" }, [
                              createVNode("h5", { class: "text-h5" }, " Shipping Address "),
                              createVNode("span", {
                                class: "text-base text-primary font-weight-medium cursor-pointer",
                                onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                              }, "Edit", 8, ["onClick"])
                            ]),
                            createVNode("div", null, [
                              createTextVNode(" 45 Rocker Terrace "),
                              createVNode("br"),
                              createTextVNode(" Latheronwheel "),
                              createVNode("br"),
                              createTextVNode(" KW5 8NW, London "),
                              createVNode("br"),
                              createTextVNode(" UK ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-1" }, [
                              createVNode("h5", { class: "text-h5" }, " Billing Address "),
                              createVNode("span", {
                                class: "text-base text-primary font-weight-medium cursor-pointer",
                                onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                              }, "Edit", 8, ["onClick"])
                            ]),
                            createVNode("div", null, [
                              createTextVNode(" 45 Rocker Terrace "),
                              createVNode("br"),
                              createTextVNode(" Latheronwheel "),
                              createVNode("br"),
                              createTextVNode(" KW5 8NW, London "),
                              createVNode("br"),
                              createTextVNode(" UK ")
                            ]),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode("h5", { class: "text-h5 mb-1" }, " Mastercard "),
                              createVNode("div", { class: "text-base" }, " Card Number: ******4291 ")
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
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        title: withCtx(() => [
                          createVNode("h5", { class: "text-h5" }, " Order Details ")
                        ]),
                        append: withCtx(() => [
                          createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Edit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDataTable, {
                        headers,
                        items: orderData,
                        "item-value": "productName",
                        "show-select": "",
                        class: "text-no-wrap"
                      }, {
                        "item.productName": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                            createVNode(VAvatar, {
                              size: "34",
                              variant: "tonal",
                              image: item.productImage,
                              rounded: ""
                            }, null, 8, ["image"]),
                            createVNode("div", { class: "d-flex flex-column align-center" }, [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.productName), 1),
                              createVNode("span", { class: "text-sm text-start align-self-start" }, toDisplayString(item.brand), 1)
                            ])
                          ])
                        ]),
                        "item.price": withCtx(({ item }) => [
                          createVNode("span", null, "$" + toDisplayString(item.price), 1)
                        ]),
                        "item.total": withCtx(({ item }) => [
                          createVNode("span", null, " $" + toDisplayString(item.price * item.quantity), 1)
                        ]),
                        bottom: withCtx(() => []),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-end flex-column" }, [
                            createVNode("table", { class: "text-high-emphasis" }, [
                              createVNode("tbody", null, [
                                createVNode("tr", null, [
                                  createVNode("td", { width: "200px" }, " Subtotal: "),
                                  createVNode("td", { class: "font-weight-medium" }, " $2,093 ")
                                ]),
                                createVNode("tr", null, [
                                  createVNode("td", null, "Shipping fee: "),
                                  createVNode("td", { class: "font-weight-medium" }, " $2 ")
                                ]),
                                createVNode("tr", null, [
                                  createVNode("td", null, "Tax: "),
                                  createVNode("td", { class: "font-weight-medium" }, " $28 ")
                                ]),
                                createVNode("tr", null, [
                                  createVNode("td", { class: "font-weight-medium" }, " Total: "),
                                  createVNode("td", { class: "font-weight-medium" }, " $2,113 ")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { title: "Shipping Activity" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VTimeline, {
                            "truncate-line": "both",
                            align: "start",
                            side: "end",
                            "line-inset": "10",
                            "line-color": "primary",
                            density: "compact",
                            class: "v-timeline-density-compact"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "app-timeline-title" }, "Order was placed (Order ID: #32543)"),
                                    createVNode("span", { class: "app-timeline-meta" }, "Tuesday 11:29 AM")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mb-0" }, " Your order has been placed successfully ")
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "app-timeline-title" }, "Pick-up"),
                                    createVNode("span", { class: "app-timeline-meta" }, "Wednesday 11:29 AM")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mb-0" }, " Pick-up scheduled with courier ")
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "app-timeline-title" }, "Dispatched"),
                                    createVNode("span", { class: "app-timeline-meta" }, "Thursday 8:15 AM")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mb-0" }, " Item has been picked up by courier. ")
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "app-timeline-title" }, "Package arrived"),
                                    createVNode("span", { class: "app-timeline-meta" }, "Saturday 15:20 AM")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mb-0" }, " Package arrived at an Amazon facility, NY ")
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "app-timeline-title" }, "Dispatched for delivery"),
                                    createVNode("span", { class: "app-timeline-meta" }, "Today 14:12 PM")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mb-0" }, " Package has left an Amazon facility , NY ")
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center mb-3" }, [
                                    createVNode("span", { class: "app-timeline-title" }, "Delivery")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mb-0" }, " Package will be delivered by tomorrow ")
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
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column gap-y-6" }, {
                        default: withCtx(() => [
                          createVNode("h5", { class: "text-h5" }, " Customer Details "),
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VAvatar, {
                              image: unref(avatar1),
                              class: "me-3"
                            }, null, 8, ["image"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " Shamus Tuttle "),
                              createVNode("span", { class: "d-inline-block" }, "Customer ID: #47389")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              color: "success",
                              class: "me-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                              ]),
                              _: 1
                            }),
                            createVNode("h6", { class: "text-h6" }, " 12 Orders ")
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                            createVNode("div", { class: "d-flex justify-space-between gap-1 text-body-2" }, [
                              createVNode("h6", { class: "text-h6" }, " Contact Info "),
                              createVNode("span", {
                                class: "text-base text-primary font-weight-medium cursor-pointer",
                                onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                              }, " Edit ", 8, ["onClick"])
                            ]),
                            createVNode("span", null, "Email: Sheldon88@yahoo.com"),
                            createVNode("span", null, "Mobile: +1 (609) 972-22-22")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-6" }, [
                            createVNode("h5", { class: "text-h5" }, " Shipping Address "),
                            createVNode("span", {
                              class: "text-base text-primary font-weight-medium cursor-pointer",
                              onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                            }, "Edit", 8, ["onClick"])
                          ]),
                          createVNode("div", null, [
                            createTextVNode(" 45 Rocker Terrace "),
                            createVNode("br"),
                            createTextVNode(" Latheronwheel "),
                            createVNode("br"),
                            createTextVNode(" KW5 8NW, London "),
                            createVNode("br"),
                            createTextVNode(" UK ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center justify-space-between gap-1 mb-1" }, [
                            createVNode("h5", { class: "text-h5" }, " Billing Address "),
                            createVNode("span", {
                              class: "text-base text-primary font-weight-medium cursor-pointer",
                              onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                            }, "Edit", 8, ["onClick"])
                          ]),
                          createVNode("div", null, [
                            createTextVNode(" 45 Rocker Terrace "),
                            createVNode("br"),
                            createTextVNode(" Latheronwheel "),
                            createVNode("br"),
                            createTextVNode(" KW5 8NW, London "),
                            createVNode("br"),
                            createTextVNode(" UK ")
                          ]),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode("h5", { class: "text-h5 mb-1" }, " Mastercard "),
                            createVNode("div", { class: "text-base" }, " Card Number: ******4291 ")
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
      _push(ssrRenderComponent(_component_ConfirmDialog, {
        isDialogVisible: unref(isConfirmDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
        "confirmation-question": "Are you sure to cancel your Order?",
        "cancel-msg": "Order cancelled!!",
        "cancel-title": "Cancelled",
        "confirm-msg": "Your order cancelled successfully.",
        "confirm-title": "Cancelled!"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UserInfoEditDialog, {
        isDialogVisible: unref(isUserInfoEditDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddEditAddressDialog, {
        isDialogVisible: unref(isEditAddressDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/order/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
