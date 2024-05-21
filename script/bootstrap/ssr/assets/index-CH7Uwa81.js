import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, withAsyncContext, computed, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, isRef, createTextVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { _ as _export_sfc, a as VIcon, V as VBtn } from "../ssr.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import "./helpers-DX2i3Kdq.js";
import "@vueuse/core";
import "destr";
import "ufo";
import "ofetch";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "cookie-es";
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./dialog-transition-CtM2qLK8.js";
import "./ssrBoot-Co4_dNdy.js";
const mastercard = "/build/assets/mastercard-Ctb7NKIX.png";
const paypal = "/build/assets/paypal-DB2bWJ2E.png";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const widgetData = ref([
      {
        title: "Pending Payment",
        value: 56,
        icon: "ri-calendar-2-line"
      },
      {
        title: "Completed",
        value: 12689,
        icon: "ri-check-double-line"
      },
      {
        title: "Refunded",
        value: 124,
        icon: "ri-wallet-3-line"
      },
      {
        title: "Failed",
        value: 32,
        icon: "ri-error-warning-line"
      }
    ]);
    const searchQuery = ref("");
    const selectedRows = ref([]);
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const headers = [
      {
        title: "Order",
        key: "order"
      },
      {
        title: "Date",
        key: "date"
      },
      {
        title: "Customers",
        key: "customers"
      },
      {
        title: "Payment",
        key: "payment",
        sortable: false
      },
      {
        title: "Status",
        key: "status"
      },
      {
        title: "Method",
        key: "method",
        sortable: false
      },
      {
        title: "Actions",
        key: "actions",
        sortable: false
      }
    ];
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const resolvePaymentStatus = (status) => {
      if (status === 1)
        return {
          text: "Paid",
          color: "success"
        };
      if (status === 2)
        return {
          text: "Pending",
          color: "warning"
        };
      if (status === 3)
        return {
          text: "Cancelled",
          color: "secondary"
        };
      if (status === 4)
        return {
          text: "Failed",
          color: "error"
        };
    };
    const resolveStatus = (status) => {
      if (status === "Delivered")
        return {
          text: "Delivered",
          color: "success"
        };
      if (status === "Out for Delivery")
        return {
          text: "Out for Delivery",
          color: "primary"
        };
      if (status === "Ready to Pickup")
        return {
          text: "Ready to Pickup",
          color: "info"
        };
      if (status === "Dispatched")
        return {
          text: "Dispatched",
          color: "warning"
        };
    };
    const {
      data: ordersData,
      execute: fetchOrders
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/ecommerce/orders", {
      query: {
        q: searchQuery,
        page,
        itemsPerPage,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const orders = computed(() => ordersData.value.orders);
    const totalOrder = computed(() => ordersData.value.total);
    const deleteOrder = async (id) => {
      await $api(`/apps/ecommerce/orders/${id}`, { method: "DELETE" });
      const index2 = selectedRows.value.findIndex((row) => row === id);
      if (index2 !== -1)
        selectedRows.value.splice(index2, 1);
      fetchOrders();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-038ea4d7>`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "px-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(widgetData), (data, index2) => {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3",
                            class: "px-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([_ctx.$vuetify.display.xs ? index2 !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index2 < unref(widgetData).length / 2 ? "border-b pb-4" : "" : "", "d-flex justify-space-between"])}" data-v-038ea4d7${_scopeId4}><div class="d-flex flex-column" data-v-038ea4d7${_scopeId4}><h4 class="text-h4" data-v-038ea4d7${_scopeId4}>${ssrInterpolate(data.value)}</h4><span class="text-base text-capitalize" data-v-038ea4d7${_scopeId4}>${ssrInterpolate(data.title)}</span></div>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  rounded: "",
                                  size: "42"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.icon,
                                        size: "26",
                                        class: "text-high-emphasis"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "26",
                                          class: "text-high-emphasis"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index2 !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index2 < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                  }, [
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                      createVNode("span", { class: "text-base text-capitalize" }, toDisplayString(data.title), 1)
                                    ]),
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      rounded: "",
                                      size: "42"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "26",
                                          class: "text-high-emphasis"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (_ctx.$vuetify.display.mdAndUp ? index2 !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index2 % 2 === 0 : false) {
                            _push4(ssrRenderComponent(VDivider, {
                              vertical: "",
                              inset: "",
                              length: "60"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, index2) => {
                            return openBlock(), createBlock(Fragment, { key: index2 }, [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                class: "px-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index2 !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index2 < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                  }, [
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                      createVNode("span", { class: "text-base text-capitalize" }, toDisplayString(data.title), 1)
                                    ]),
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      rounded: "",
                                      size: "42"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "26",
                                          class: "text-high-emphasis"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1024),
                              (_ctx.$vuetify.display.mdAndUp ? index2 !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index2 % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
                                key: 0,
                                vertical: "",
                                inset: "",
                                length: "60"
                              })) : createCommentVNode("", true)
                            ], 64);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, index2) => {
                          return openBlock(), createBlock(Fragment, { key: index2 }, [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3",
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index2 !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index2 < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                }, [
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                    createVNode("span", { class: "text-base text-capitalize" }, toDisplayString(data.title), 1)
                                  ]),
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    rounded: "",
                                    size: "42"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "26",
                                        class: "text-high-emphasis"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024),
                            (_ctx.$vuetify.display.mdAndUp ? index2 !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index2 % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
                              key: 0,
                              vertical: "",
                              inset: "",
                              length: "60"
                            })) : createCommentVNode("", true)
                          ], 64);
                        }), 128))
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
              createVNode(VCardText, { class: "px-2" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, index2) => {
                        return openBlock(), createBlock(Fragment, { key: index2 }, [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index2 !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index2 < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                              }, [
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                  createVNode("span", { class: "text-base text-capitalize" }, toDisplayString(data.title), 1)
                                ]),
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  rounded: "",
                                  size: "42"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.icon,
                                      size: "26",
                                      class: "text-high-emphasis"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024),
                          (_ctx.$vuetify.display.mdAndUp ? index2 !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index2 % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
                            key: 0,
                            vertical: "",
                            inset: "",
                            length: "60"
                          })) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
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
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-sm-space-between align-center justify-start flex-wrap gap-4" data-v-038ea4d7${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search Order",
                    density: "compact",
                    style: { "max-inline-size": "200px", "min-inline-size": "200px" }
                  }, null, _parent3, _scopeId2));
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-sm-space-between align-center justify-start flex-wrap gap-4" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search Order",
                        density: "compact",
                        style: { "max-inline-size": "200px", "min-inline-size": "200px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, {
                        "prepend-icon": "ri-upload-2-line",
                        variant: "outlined",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Export ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTableServer, {
              "model-value": unref(selectedRows),
              "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              page: unref(page),
              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
              headers,
              items: unref(orders),
              "items-length": unref(totalOrder),
              "show-select": "",
              class: "text-no-wrap",
              "onUpdate:options": updateOptions
            }, {
              "item.order": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` #${ssrInterpolate(item.order)}`);
                      } else {
                        return [
                          createTextVNode(" #" + toDisplayString(item.order), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouterLink, {
                      to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" #" + toDisplayString(item.order), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(new Date(item.date).toDateString())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(new Date(item.date).toDateString()), 1)
                  ];
                }
              }),
              "item.customers": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center" data-v-038ea4d7${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    variant: !item.avatar.length ? "tonal" : void 0,
                    rounded: 1,
                    class: "me-3"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (item.avatar) {
                          _push4(ssrRenderComponent(VImg, {
                            src: item.avatar
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<span class="font-weight-medium" data-v-038ea4d7${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.customer))}</span>`);
                        }
                      } else {
                        return [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "font-weight-medium"
                          }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.customer)), 1))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column" data-v-038ea4d7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "profile" } } }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-link font-weight-medium" data-v-038ea4d7${_scopeId3}>${ssrInterpolate(item.customer)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-link font-weight-medium" }, toDisplayString(item.customer), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-sm" data-v-038ea4d7${_scopeId2}>${ssrInterpolate(item.email)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        variant: !item.avatar.length ? "tonal" : void 0,
                        rounded: 1,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "font-weight-medium"
                          }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.customer)), 1))
                        ]),
                        _: 2
                      }, 1032, ["variant"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "profile" } } }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-link font-weight-medium" }, toDisplayString(item.customer), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("span", { class: "text-sm" }, toDisplayString(item.email), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.payment": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([`text-${(_a = resolvePaymentStatus(item.payment)) == null ? void 0 : _a.color}`, "d-flex align-center font-weight-medium"])}" data-v-038ea4d7${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    size: "10",
                    icon: "ri-circle-fill",
                    class: "me-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-038ea4d7${_scopeId2}>${ssrInterpolate((_b = resolvePaymentStatus(item.payment)) == null ? void 0 : _b.text)}</span></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: [`text-${(_c = resolvePaymentStatus(item.payment)) == null ? void 0 : _c.color}`, "d-flex align-center font-weight-medium"]
                    }, [
                      createVNode(VIcon, {
                        size: "10",
                        icon: "ri-circle-fill",
                        class: "me-1"
                      }),
                      createVNode("span", null, toDisplayString((_d = resolvePaymentStatus(item.payment)) == null ? void 0 : _d.text), 1)
                    ], 2)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                  ];
                }
              }),
              "item.method": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-start" data-v-038ea4d7${_scopeId2}><img${ssrRenderAttr("src", item.method === "mastercard" ? unref(mastercard) : unref(paypal))} data-v-038ea4d7${_scopeId2}><div data-v-038ea4d7${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-more-line" }, null, _parent3, _scopeId2));
                  if (item.method === "mastercard") {
                    _push3(`<span data-v-038ea4d7${_scopeId2}>${ssrInterpolate(item.methodNumber)}</span>`);
                  } else {
                    _push3(`<span data-v-038ea4d7${_scopeId2}> @gmail.com </span>`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-start" }, [
                      createVNode("img", {
                        src: item.method === "mastercard" ? unref(mastercard) : unref(paypal)
                      }, null, 8, ["src"]),
                      createVNode("div", null, [
                        createVNode(VIcon, { icon: "ri-more-line" }),
                        item.method === "mastercard" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(item.methodNumber), 1)) : (openBlock(), createBlock("span", { key: 1 }, " @gmail.com "))
                      ])
                    ])
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, { value: "view" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RouterLink, {
                                            to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                            class: "text-high-emphasis"
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` View `);
                                              } else {
                                                return [
                                                  createTextVNode(" View ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RouterLink, {
                                              to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                              class: "text-high-emphasis"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" View ")
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItem, {
                                      value: "delete",
                                      onClick: ($event) => deleteOrder(item.id)
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Delete `);
                                        } else {
                                          return [
                                            createTextVNode(" Delete ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, { value: "view" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_RouterLink, {
                                            to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                            class: "text-high-emphasis"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" View ")
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItem, {
                                        value: "delete",
                                        onClick: ($event) => deleteOrder(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Delete ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, { value: "view" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_RouterLink, {
                                          to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                          class: "text-high-emphasis"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" View ")
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItem, {
                                      value: "delete",
                                      onClick: ($event) => deleteOrder(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Delete ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-more-2-line" }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, { value: "view" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_RouterLink, {
                                        to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                        class: "text-high-emphasis"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" View ")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItem, {
                                    value: "delete",
                                    onClick: ($event) => deleteOrder(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Delete ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-more-2-line" }),
                        createVNode(VMenu, { activator: "parent" }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, { value: "view" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_RouterLink, {
                                      to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                      class: "text-high-emphasis"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" View ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItem, {
                                  value: "delete",
                                  onClick: ($event) => deleteOrder(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1" data-v-038ea4d7${_scopeId2}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base" data-v-038ea4d7${_scopeId2}> Rows Per Page: `);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(itemsPerPage),
                    "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                    class: "per-page-select",
                    variant: "plain",
                    items: [10, 20, 25, 50, 100]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0" data-v-038ea4d7${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalOrder)))}</p><div class="d-flex gap-x-2 align-center me-2" data-v-038ea4d7${_scopeId2}>`);
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
                    disabled: unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalOrder) / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalOrder))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalOrder) / unref(itemsPerPage)) : page.value++
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
                  createVNode("div", { class: "d-flex justify-sm-space-between align-center justify-start flex-wrap gap-4" }, [
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search Order",
                      density: "compact",
                      style: { "max-inline-size": "200px", "min-inline-size": "200px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      "prepend-icon": "ri-upload-2-line",
                      variant: "outlined",
                      color: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Export ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDataTableServer, {
                "model-value": unref(selectedRows),
                "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                headers,
                items: unref(orders),
                "items-length": unref(totalOrder),
                "show-select": "",
                class: "text-no-wrap",
                "onUpdate:options": updateOptions
              }, {
                "item.order": withCtx(({ item }) => [
                  createVNode(_component_RouterLink, {
                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" #" + toDisplayString(item.order), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                "item.date": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(new Date(item.date).toDateString()), 1)
                ]),
                "item.customers": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      variant: !item.avatar.length ? "tonal" : void 0,
                      rounded: 1,
                      class: "me-3"
                    }, {
                      default: withCtx(() => [
                        item.avatar ? (openBlock(), createBlock(VImg, {
                          key: 0,
                          src: item.avatar
                        }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "font-weight-medium"
                        }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.customer)), 1))
                      ]),
                      _: 2
                    }, 1032, ["variant"]),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_RouterLink, { to: { name: "pages-user-profile-tab", params: { tab: "profile" } } }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-link font-weight-medium" }, toDisplayString(item.customer), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("span", { class: "text-sm" }, toDisplayString(item.email), 1)
                    ])
                  ])
                ]),
                "item.payment": withCtx(({ item }) => {
                  var _a, _b;
                  return [
                    createVNode("div", {
                      class: [`text-${(_a = resolvePaymentStatus(item.payment)) == null ? void 0 : _a.color}`, "d-flex align-center font-weight-medium"]
                    }, [
                      createVNode(VIcon, {
                        size: "10",
                        icon: "ri-circle-fill",
                        class: "me-1"
                      }),
                      createVNode("span", null, toDisplayString((_b = resolvePaymentStatus(item.payment)) == null ? void 0 : _b.text), 1)
                    ], 2)
                  ];
                }),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                ]),
                "item.method": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-start" }, [
                    createVNode("img", {
                      src: item.method === "mastercard" ? unref(mastercard) : unref(paypal)
                    }, null, 8, ["src"]),
                    createVNode("div", null, [
                      createVNode(VIcon, { icon: "ri-more-line" }),
                      item.method === "mastercard" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(item.methodNumber), 1)) : (openBlock(), createBlock("span", { key: 1 }, " @gmail.com "))
                    ])
                  ])
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_IconBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-more-2-line" }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, { value: "view" }, {
                                default: withCtx(() => [
                                  createVNode(_component_RouterLink, {
                                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                    class: "text-high-emphasis"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItem, {
                                value: "delete",
                                onClick: ($event) => deleteOrder(item.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalOrder))), 1),
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
                        disabled: unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalOrder) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["model-value", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/order/list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-038ea4d7"]]);
export {
  index as default
};
