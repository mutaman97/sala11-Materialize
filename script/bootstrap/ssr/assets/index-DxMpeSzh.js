import { p as prefixWithPlus } from "./formatters-DpL1jrjT.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, withAsyncContext, computed, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, isRef, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon, V as VBtn } from "../ssr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import "./helpers-DX2i3Kdq.js";
import "@vueuse/core";
import "destr";
import "ufo";
import "ofetch";
import "./VImg-D-rbsD1g.js";
/* empty css               */
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
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
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./easing-BikAOx6-.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const widgetData = ref([
      {
        title: "In-Store Sales",
        value: "$5,345",
        icon: "ri-home-6-line",
        desc: "5k orders",
        change: 5.7
      },
      {
        title: "Website Sales",
        value: "$74,347",
        icon: "ri-computer-line",
        desc: "21k orders",
        change: 12.4
      },
      {
        title: "Discount",
        value: "$14,235",
        icon: "ri-gift-line",
        desc: "6k orders"
      },
      {
        title: "Affiliate",
        value: "$8,345",
        icon: "ri-money-dollar-circle-line",
        desc: "150 orders",
        change: -3.5
      }
    ]);
    const headers = [
      {
        title: "Product",
        key: "product"
      },
      {
        title: "Category",
        key: "category"
      },
      {
        title: "Stock",
        key: "stock",
        sortable: false
      },
      {
        title: "SKU",
        key: "sku"
      },
      {
        title: "Price",
        key: "price"
      },
      {
        title: "QTY",
        key: "qty"
      },
      {
        title: "Status",
        key: "status"
      },
      {
        title: "Actions",
        key: "actions",
        sortable: false
      }
    ];
    const selectedStatus = ref();
    const selectedCategory = ref();
    const selectedStock = ref();
    const searchQuery = ref("");
    const selectedRows = ref([]);
    const status = ref([
      {
        title: "Scheduled",
        value: "Scheduled"
      },
      {
        title: "Publish",
        value: "Published"
      },
      {
        title: "Inactive",
        value: "Inactive"
      }
    ]);
    const categories = ref([
      {
        title: "Accessories",
        value: "Accessories"
      },
      {
        title: "Home Decor",
        value: "Home Decor"
      },
      {
        title: "Electronics",
        value: "Electronics"
      },
      {
        title: "Shoes",
        value: "Shoes"
      },
      {
        title: "Office",
        value: "Office"
      },
      {
        title: "Games",
        value: "Games"
      }
    ]);
    const stockStatus = ref([
      {
        title: "In Stock",
        value: true
      },
      {
        title: "Out of Stock",
        value: false
      }
    ]);
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const resolveCategory = (category) => {
      if (category === "Accessories")
        return {
          color: "error",
          icon: "ri-headphone-line"
        };
      if (category === "Home Decor")
        return {
          color: "info",
          icon: "ri-home-6-line"
        };
      if (category === "Electronics")
        return {
          color: "primary",
          icon: "ri-computer-line"
        };
      if (category === "Shoes")
        return {
          color: "success",
          icon: "ri-footprint-line"
        };
      if (category === "Office")
        return {
          color: "warning",
          icon: "ri-briefcase-line"
        };
      if (category === "Games")
        return {
          color: "primary",
          icon: "ri-gamepad-line"
        };
    };
    const resolveStatus = (statusMsg) => {
      if (statusMsg === "Scheduled")
        return {
          text: "Scheduled",
          color: "warning"
        };
      if (statusMsg === "Published")
        return {
          text: "Publish",
          color: "success"
        };
      if (statusMsg === "Inactive")
        return {
          text: "Inactive",
          color: "error"
        };
    };
    const {
      data: productsData,
      execute: fetchProducts
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/ecommerce/products", {
      query: {
        q: searchQuery,
        stock: selectedStock,
        category: selectedCategory,
        status: selectedStatus,
        page,
        itemsPerPage,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const products = computed(() => productsData.value.products);
    const totalProduct = computed(() => productsData.value.total);
    const deleteProduct = async (id) => {
      await $api(`apps/ecommerce/products/${id}`, { method: "DELETE" });
      const index = selectedRows.value.findIndex((row) => row === id);
      if (index !== -1)
        selectedRows.value.splice(index, 1);
      fetchProducts();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
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
                        ssrRenderList(unref(widgetData), (data, index) => {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3",
                            class: "px-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([_ctx.$vuetify.display.xs ? index !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index < unref(widgetData).length / 2 ? "border-b pb-4" : "" : "", "d-flex justify-space-between"])}"${_scopeId4}><div class="d-flex flex-column gap-y-1"${_scopeId4}><p class="text-capitalize mb-0"${_scopeId4}>${ssrInterpolate(data.title)}</p><h4 class="text-h4"${_scopeId4}>${ssrInterpolate(data.value)}</h4><div class="d-flex align-center"${_scopeId4}><div class="text-no-wrap me-2"${_scopeId4}>${ssrInterpolate(data.desc)}</div>`);
                                if (data.change) {
                                  _push5(ssrRenderComponent(VChip, {
                                    size: "small",
                                    color: data.change > 0 ? "success" : "error"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change))}% `);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "% ", 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  rounded: "lg",
                                  size: "44"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.icon,
                                        size: "28",
                                        color: "high-emphasis"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "28",
                                          color: "high-emphasis"
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
                                    class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                  }, [
                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                      createVNode("p", { class: "text-capitalize mb-0" }, toDisplayString(data.title), 1),
                                      createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode("div", { class: "text-no-wrap me-2" }, toDisplayString(data.desc), 1),
                                        data.change ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          size: "small",
                                          color: data.change > 0 ? "success" : "error"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "% ", 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      rounded: "lg",
                                      size: "44"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "28",
                                          color: "high-emphasis"
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
                          if (_ctx.$vuetify.display.mdAndUp ? index !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index % 2 === 0 : false) {
                            _push4(ssrRenderComponent(VDivider, {
                              vertical: "",
                              inset: "",
                              length: "92"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, index) => {
                            return openBlock(), createBlock(Fragment, { key: index }, [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                class: "px-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                  }, [
                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                      createVNode("p", { class: "text-capitalize mb-0" }, toDisplayString(data.title), 1),
                                      createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode("div", { class: "text-no-wrap me-2" }, toDisplayString(data.desc), 1),
                                        data.change ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          size: "small",
                                          color: data.change > 0 ? "success" : "error"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "% ", 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      rounded: "lg",
                                      size: "44"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "28",
                                          color: "high-emphasis"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1024),
                              (_ctx.$vuetify.display.mdAndUp ? index !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
                                key: 0,
                                vertical: "",
                                inset: "",
                                length: "92"
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, index) => {
                          return openBlock(), createBlock(Fragment, { key: index }, [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3",
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                }, [
                                  createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                    createVNode("p", { class: "text-capitalize mb-0" }, toDisplayString(data.title), 1),
                                    createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode("div", { class: "text-no-wrap me-2" }, toDisplayString(data.desc), 1),
                                      data.change ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "small",
                                        color: data.change > 0 ? "success" : "error"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "% ", 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    rounded: "lg",
                                    size: "44"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "28",
                                        color: "high-emphasis"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024),
                            (_ctx.$vuetify.display.mdAndUp ? index !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
                              key: 0,
                              vertical: "",
                              inset: "",
                              length: "92"
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, index) => {
                        return openBlock(), createBlock(Fragment, { key: index }, [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? index !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? index < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                              }, [
                                createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                  createVNode("p", { class: "text-capitalize mb-0" }, toDisplayString(data.title), 1),
                                  createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("div", { class: "text-no-wrap me-2" }, toDisplayString(data.desc), 1),
                                    data.change ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      size: "small",
                                      color: data.change > 0 ? "success" : "error"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "% ", 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  rounded: "lg",
                                  size: "44"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.icon,
                                      size: "28",
                                      color: "high-emphasis"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024),
                          (_ctx.$vuetify.display.mdAndUp ? index !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? index % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
                            key: 0,
                            vertical: "",
                            inset: "",
                            length: "92"
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
            _push2(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Filters`);
                      } else {
                        return [
                          createTextVNode("Filters")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Filters")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                label: "Select Status",
                                placeholder: "Select Status",
                                items: unref(status),
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedStatus),
                                  "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                  label: "Select Status",
                                  placeholder: "Select Status",
                                  items: unref(status),
                                  clearable: "",
                                  "clear-icon": "ri-close-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedCategory),
                                "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                                label: "Category",
                                placeholder: "Select Category",
                                items: unref(categories),
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedCategory),
                                  "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                                  label: "Category",
                                  placeholder: "Select Category",
                                  items: unref(categories),
                                  clearable: "",
                                  "clear-icon": "ri-close-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedStock),
                                "onUpdate:modelValue": ($event) => isRef(selectedStock) ? selectedStock.value = $event : null,
                                label: "Stock",
                                placeholder: "Stock",
                                items: unref(stockStatus),
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedStock),
                                  "onUpdate:modelValue": ($event) => isRef(selectedStock) ? selectedStock.value = $event : null,
                                  label: "Stock",
                                  placeholder: "Stock",
                                  items: unref(stockStatus),
                                  clearable: "",
                                  "clear-icon": "ri-close-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                label: "Select Status",
                                placeholder: "Select Status",
                                items: unref(status),
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedCategory),
                                "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                                label: "Category",
                                placeholder: "Select Category",
                                items: unref(categories),
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedStock),
                                "onUpdate:modelValue": ($event) => isRef(selectedStock) ? selectedStock.value = $event : null,
                                label: "Stock",
                                placeholder: "Stock",
                                items: unref(stockStatus),
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedStatus),
                              "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                              label: "Select Status",
                              placeholder: "Select Status",
                              items: unref(status),
                              clearable: "",
                              "clear-icon": "ri-close-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedCategory),
                              "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                              label: "Category",
                              placeholder: "Select Category",
                              items: unref(categories),
                              clearable: "",
                              "clear-icon": "ri-close-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedStock),
                              "onUpdate:modelValue": ($event) => isRef(selectedStock) ? selectedStock.value = $event : null,
                              label: "Stock",
                              placeholder: "Stock",
                              items: unref(stockStatus),
                              clearable: "",
                              "clear-icon": "ri-close-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search Product",
                    style: { "inline-size": "200px" },
                    density: "compact",
                    class: "me-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex gap-x-4 align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    color: "secondary",
                    "prepend-icon": "ri-upload-2-line"
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
                    color: "primary",
                    "prepend-icon": "ri-add-line",
                    onClick: ($event) => _ctx.$router.push("/apps/ecommerce/product/add")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add Product `);
                      } else {
                        return [
                          createTextVNode(" Add Product ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search Product",
                        style: { "inline-size": "200px" },
                        density: "compact",
                        class: "me-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(VSpacer),
                    createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        "prepend-icon": "ri-upload-2-line"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Export ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        "prepend-icon": "ri-add-line",
                        onClick: ($event) => _ctx.$router.push("/apps/ecommerce/product/add")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add Product ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
              "show-select": "",
              items: unref(products),
              "items-length": unref(totalProduct),
              class: "text-no-wrap rounded-0",
              "onUpdate:options": updateOptions
            }, {
              "item.product": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-3"${_scopeId2}>`);
                  if (item.image) {
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "38",
                      variant: "tonal",
                      rounded: "",
                      image: item.image
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="d-flex flex-column"${_scopeId2}><span class="text-base text-high-emphasis font-weight-medium"${_scopeId2}>${ssrInterpolate(item.productName)}</span><span class="text-sm"${_scopeId2}>${ssrInterpolate(item.productBrand)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                      item.image ? (openBlock(), createBlock(VAvatar, {
                        key: 0,
                        size: "38",
                        variant: "tonal",
                        rounded: "",
                        image: item.image
                      }, null, 8, ["image"])) : createCommentVNode("", true),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode("span", { class: "text-base text-high-emphasis font-weight-medium" }, toDisplayString(item.productName), 1),
                        createVNode("span", { class: "text-sm" }, toDisplayString(item.productBrand), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.category": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "30",
                    variant: "tonal",
                    color: (_a = resolveCategory(item.category)) == null ? void 0 : _a.color,
                    class: "me-3"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: (_a2 = resolveCategory(item.category)) == null ? void 0 : _a2.icon,
                          size: "18"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: (_b2 = resolveCategory(item.category)) == null ? void 0 : _b2.icon,
                            size: "18"
                          }, null, 8, ["icon"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-base text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.category)}</span>`);
                } else {
                  return [
                    createVNode(VAvatar, {
                      size: "30",
                      variant: "tonal",
                      color: (_b = resolveCategory(item.category)) == null ? void 0 : _b.color,
                      class: "me-3"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(VIcon, {
                            icon: (_a2 = resolveCategory(item.category)) == null ? void 0 : _a2.icon,
                            size: "18"
                          }, null, 8, ["icon"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("span", { class: "text-base text-high-emphasis" }, toDisplayString(item.category), 1)
                  ];
                }
              }),
              "item.stock": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSwitch, {
                    "model-value": item.stock
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSwitch, {
                      "model-value": item.stock
                    }, null, 8, ["model-value"])
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
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-edit-box-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-edit-box-line" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-more-2-fill" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, {
                                      value: "download",
                                      "prepend-icon": "ri-download-line"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Download `);
                                        } else {
                                          return [
                                            createTextVNode(" Download ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItem, {
                                      value: "delete",
                                      "prepend-icon": "ri-delete-bin-line",
                                      onClick: ($event) => deleteProduct(item.id)
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
                                    _push6(ssrRenderComponent(VListItem, {
                                      value: "duplicate",
                                      "prepend-icon": "ri-stack-line"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Duplicate `);
                                        } else {
                                          return [
                                            createTextVNode(" Duplicate ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, {
                                        value: "download",
                                        "prepend-icon": "ri-download-line"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Download ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, {
                                        value: "delete",
                                        "prepend-icon": "ri-delete-bin-line",
                                        onClick: ($event) => deleteProduct(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Delete ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(VListItem, {
                                        value: "duplicate",
                                        "prepend-icon": "ri-stack-line"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Duplicate ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, {
                                      value: "download",
                                      "prepend-icon": "ri-download-line"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Download ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, {
                                      value: "delete",
                                      "prepend-icon": "ri-delete-bin-line",
                                      onClick: ($event) => deleteProduct(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Delete ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VListItem, {
                                      value: "duplicate",
                                      "prepend-icon": "ri-stack-line"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Duplicate ")
                                      ]),
                                      _: 1
                                    })
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
                          createVNode(VIcon, { icon: "ri-more-2-fill" }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    value: "download",
                                    "prepend-icon": "ri-download-line"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Download ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, {
                                    value: "delete",
                                    "prepend-icon": "ri-delete-bin-line",
                                    onClick: ($event) => deleteProduct(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Delete ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(VListItem, {
                                    value: "duplicate",
                                    "prepend-icon": "ri-stack-line"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Duplicate ")
                                    ]),
                                    _: 1
                                  })
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
                        createVNode(VIcon, { icon: "ri-edit-box-line" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_IconBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-more-2-fill" }),
                        createVNode(VMenu, { activator: "parent" }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, {
                                  value: "download",
                                  "prepend-icon": "ri-download-line"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Download ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, {
                                  value: "delete",
                                  "prepend-icon": "ri-delete-bin-line",
                                  onClick: ($event) => deleteProduct(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(VListItem, {
                                  value: "duplicate",
                                  "prepend-icon": "ri-stack-line"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Duplicate ")
                                  ]),
                                  _: 1
                                })
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
                  _push3(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1"${_scopeId2}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base"${_scopeId2}> Rows Per Page: `);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(itemsPerPage),
                    "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                    class: "per-page-select",
                    variant: "plain",
                    items: [10, 20, 25, 50, 100]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalProduct)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                    disabled: unref(page) >= Math.ceil(unref(totalProduct) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalProduct) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalProduct) / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalProduct))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalProduct) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalProduct) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalProduct) / unref(itemsPerPage)) : page.value++
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
              createVNode(VCardItem, { class: "pb-4" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Filters")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedStatus),
                            "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                            label: "Select Status",
                            placeholder: "Select Status",
                            items: unref(status),
                            clearable: "",
                            "clear-icon": "ri-close-line"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedCategory),
                            "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                            label: "Category",
                            placeholder: "Select Category",
                            items: unref(categories),
                            clearable: "",
                            "clear-icon": "ri-close-line"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedStock),
                            "onUpdate:modelValue": ($event) => isRef(selectedStock) ? selectedStock.value = $event : null,
                            label: "Stock",
                            placeholder: "Stock",
                            items: unref(stockStatus),
                            clearable: "",
                            "clear-icon": "ri-close-line"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search Product",
                      style: { "inline-size": "200px" },
                      density: "compact",
                      class: "me-3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(VSpacer),
                  createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                    createVNode(VBtn, {
                      variant: "outlined",
                      color: "secondary",
                      "prepend-icon": "ri-upload-2-line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Export ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      "prepend-icon": "ri-add-line",
                      onClick: ($event) => _ctx.$router.push("/apps/ecommerce/product/add")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add Product ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
                "show-select": "",
                items: unref(products),
                "items-length": unref(totalProduct),
                class: "text-no-wrap rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "item.product": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                    item.image ? (openBlock(), createBlock(VAvatar, {
                      key: 0,
                      size: "38",
                      variant: "tonal",
                      rounded: "",
                      image: item.image
                    }, null, 8, ["image"])) : createCommentVNode("", true),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode("span", { class: "text-base text-high-emphasis font-weight-medium" }, toDisplayString(item.productName), 1),
                      createVNode("span", { class: "text-sm" }, toDisplayString(item.productBrand), 1)
                    ])
                  ])
                ]),
                "item.category": withCtx(({ item }) => {
                  var _a;
                  return [
                    createVNode(VAvatar, {
                      size: "30",
                      variant: "tonal",
                      color: (_a = resolveCategory(item.category)) == null ? void 0 : _a.color,
                      class: "me-3"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(VIcon, {
                            icon: (_a2 = resolveCategory(item.category)) == null ? void 0 : _a2.icon,
                            size: "18"
                          }, null, 8, ["icon"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("span", { class: "text-base text-high-emphasis" }, toDisplayString(item.category), 1)
                  ];
                }),
                "item.stock": withCtx(({ item }) => [
                  createVNode(VSwitch, {
                    "model-value": item.stock
                  }, null, 8, ["model-value"])
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_IconBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-edit-box-line" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_IconBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-more-2-fill" }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                value: "download",
                                "prepend-icon": "ri-download-line"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Download ")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, {
                                value: "delete",
                                "prepend-icon": "ri-delete-bin-line",
                                onClick: ($event) => deleteProduct(item.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(VListItem, {
                                value: "duplicate",
                                "prepend-icon": "ri-stack-line"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Duplicate ")
                                ]),
                                _: 1
                              })
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalProduct))), 1),
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
                        disabled: unref(page) >= Math.ceil(unref(totalProduct) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalProduct) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalProduct) / unref(itemsPerPage)) : page.value++
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/product/list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
