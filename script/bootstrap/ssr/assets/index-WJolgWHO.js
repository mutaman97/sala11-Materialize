import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, withAsyncContext, computed, resolveComponent, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, isRef, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VCard, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon, V as VBtn } from "../ssr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList } from "./VList-Bay5Fixr.js";
import "./helpers-DX2i3Kdq.js";
import "@vueuse/core";
import "destr";
import "ufo";
import "ofetch";
/* empty css               */
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedStatus = ref(null);
    const selectedRows = ref([]);
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
    const widgetData = ref([
      {
        title: "Clients",
        value: 24,
        icon: "ri-user-3-line"
      },
      {
        title: "Invoices",
        value: 165,
        icon: "ri-pages-line"
      },
      {
        title: "Paid",
        value: "$2.46k",
        icon: "ri-wallet-line"
      },
      {
        title: "Unpaid",
        value: "$876",
        icon: "ri-money-dollar-circle-line"
      }
    ]);
    const headers = [
      {
        title: "#",
        key: "id"
      },
      {
        title: "Status",
        key: "trending",
        sortable: false
      },
      {
        title: "Client",
        key: "client"
      },
      {
        title: "Total",
        key: "total"
      },
      {
        title: "Issued Date",
        key: "date"
      },
      {
        title: "Balance",
        key: "balance"
      },
      {
        title: "Actions",
        key: "actions",
        sortable: false
      }
    ];
    const {
      data: invoiceData,
      execute: fetchInvoices
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/invoice", {
      query: {
        q: searchQuery,
        status: selectedStatus,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const invoices = computed(() => invoiceData.value.invoices);
    const totalInvoices = computed(() => invoiceData.value.totalInvoices);
    const resolveInvoiceBalanceVariant = (balance, total) => {
      if (balance === total)
        return {
          status: "Unpaid",
          chip: { color: "error" }
        };
      if (balance === 0)
        return {
          status: "Paid",
          chip: { color: "success" }
        };
      return {
        status: balance,
        chip: { variant: "text" }
      };
    };
    const resolveInvoiceStatusVariantAndIcon = (status) => {
      if (status === "Partial Payment")
        return {
          variant: "warning",
          icon: "ri-line-chart-line"
        };
      if (status === "Paid")
        return {
          variant: "success",
          icon: "ri-check-line"
        };
      if (status === "Downloaded")
        return {
          variant: "info",
          icon: "ri-arrow-down-line"
        };
      if (status === "Draft")
        return {
          variant: "secondary",
          icon: "ri-save-line"
        };
      if (status === "Sent")
        return {
          variant: "primary",
          icon: "ri-mail-line"
        };
      if (status === "Past Due")
        return {
          variant: "error",
          icon: "ri-error-warning-line"
        };
      return {
        variant: "secondary",
        icon: "ri-close-line"
      };
    };
    const computedMoreList = computed(() => {
      return (paramId) => [
        {
          title: "Download",
          value: "download",
          prependIcon: "ri-download-line"
        },
        {
          title: "Edit",
          value: "edit",
          prependIcon: "ri-pencil-line",
          to: {
            name: "apps-invoice-edit-id",
            params: { id: paramId }
          }
        },
        {
          title: "Duplicate",
          value: "duplicate",
          prependIcon: "ri-stack-line"
        }
      ];
    });
    const deleteInvoice = async (id) => {
      await $api(`/apps/invoice/${id}`, { method: "DELETE" });
      const index = selectedRows.value.findIndex((row) => Number(row) === id);
      if (index !== -1)
        selectedRows.value.splice(index, 1);
      fetchInvoices();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      if (unref(invoices)) {
        _push(`<section${ssrRenderAttrs(_attrs)}>`);
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
                          ssrRenderList(unref(widgetData), (data, id) => {
                            _push4(`<!--[-->`);
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3",
                              class: "px-6"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass([_ctx.$vuetify.display.xs ? id !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? id < unref(widgetData).length / 2 ? "border-b pb-4" : "" : "", "d-flex justify-space-between"])}"${_scopeId4}><div class="d-flex flex-column"${_scopeId4}><h4 class="text-h4"${_scopeId4}>${ssrInterpolate(data.value)}</h4><span class="text-body-1 text-capitalize"${_scopeId4}>${ssrInterpolate(data.title)}</span></div>`);
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
                                          color: "high-emphasis"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            icon: data.icon,
                                            size: "26",
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
                                      class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? id !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? id < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                    }, [
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                        createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(data.title), 1)
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
                            if (_ctx.$vuetify.display.mdAndUp ? id !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? id % 2 === 0 : false) {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, id) => {
                              return openBlock(), createBlock(Fragment, { key: id }, [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  class: "px-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? id !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? id < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                    }, [
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                        createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(data.title), 1)
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
                                            color: "high-emphasis"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1024),
                                (_ctx.$vuetify.display.mdAndUp ? id !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? id % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, id) => {
                            return openBlock(), createBlock(Fragment, { key: id }, [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                class: "px-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? id !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? id < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                  }, [
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                      createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(data.title), 1)
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
                                          color: "high-emphasis"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1024),
                              (_ctx.$vuetify.display.mdAndUp ? id !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? id % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, id) => {
                          return openBlock(), createBlock(Fragment, { key: id }, [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3",
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: ["d-flex justify-space-between", _ctx.$vuetify.display.xs ? id !== unref(widgetData).length - 1 ? "border-b pb-4" : "" : _ctx.$vuetify.display.sm ? id < unref(widgetData).length / 2 ? "border-b pb-4" : "" : ""]
                                }, [
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1),
                                    createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(data.title), 1)
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
                                        color: "high-emphasis"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024),
                            (_ctx.$vuetify.display.mdAndUp ? id !== unref(widgetData).length - 1 : _ctx.$vuetify.display.smAndUp ? id % 2 === 0 : false) ? (openBlock(), createBlock(VDivider, {
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
        _push(ssrRenderComponent(VCard, { id: "invoice-list" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center flex-wrap gap-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBtn, {
                      "prepend-icon": "ri-add-line",
                      to: { name: "apps-invoice-add" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Create invoice `);
                        } else {
                          return [
                            createTextVNode(" Create invoice ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(`<div class="d-flex align-center flex-wrap gap-4"${_scopeId2}><div style="${ssrRenderStyle({ "inline-size": "250px" })}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search Invoice"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div style="${ssrRenderStyle({ "inline-size": "175px" })}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VSelect, {
                      modelValue: unref(selectedStatus),
                      "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                      placeholder: "Invoice Status",
                      clearable: "",
                      "clear-icon": "ri-close-line",
                      items: ["Downloaded", "Draft", "Sent", "Paid", "Partial Payment", "Past Due"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode(VBtn, {
                        "prepend-icon": "ri-add-line",
                        to: { name: "apps-invoice-add" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Create invoice ")
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                        createVNode("div", { style: { "inline-size": "250px" } }, [
                          createVNode(VTextField, {
                            modelValue: unref(searchQuery),
                            "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                            placeholder: "Search Invoice"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { style: { "inline-size": "175px" } }, [
                          createVNode(VSelect, {
                            modelValue: unref(selectedStatus),
                            "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                            placeholder: "Invoice Status",
                            clearable: "",
                            "clear-icon": "ri-close-line",
                            items: ["Downloaded", "Draft", "Sent", "Paid", "Partial Payment", "Past Due"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VDataTableServer, {
                modelValue: unref(selectedRows),
                "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                "show-select": "",
                "items-length": unref(totalInvoices),
                headers,
                items: unref(invoices),
                "item-value": "id",
                class: "text-no-wrap rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "item.id": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_RouterLink, {
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` #${ssrInterpolate(item.id)}`);
                        } else {
                          return [
                            createTextVNode(" #" + toDisplayString(item.id), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_RouterLink, {
                        to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" #" + toDisplayString(item.id), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                "item.trending": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VTooltip, null, {
                      activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAvatar, mergeProps({ size: 28 }, props, {
                            color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                            variant: "tonal"
                          }), {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: 16,
                                  icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: 16,
                                    icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VAvatar, mergeProps({ size: 28 }, props, {
                              color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                              variant: "tonal"
                            }), {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: 16,
                                  icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1040, ["color"])
                          ];
                        }
                      }),
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="mb-0"${_scopeId3}>${ssrInterpolate(item.invoiceStatus)}</p><p class="mb-0"${_scopeId3}> Balance: ${ssrInterpolate(item.balance)}</p><p class="mb-0"${_scopeId3}> Due date: ${ssrInterpolate(item.dueDate)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "mb-0" }, toDisplayString(item.invoiceStatus), 1),
                            createVNode("p", { class: "mb-0" }, " Balance: " + toDisplayString(item.balance), 1),
                            createVNode("p", { class: "mb-0" }, " Due date: " + toDisplayString(item.dueDate), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VTooltip, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(VAvatar, mergeProps({ size: 28 }, props, {
                            color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                            variant: "tonal"
                          }), {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: 16,
                                icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1040, ["color"])
                        ]),
                        default: withCtx(() => [
                          createVNode("p", { class: "mb-0" }, toDisplayString(item.invoiceStatus), 1),
                          createVNode("p", { class: "mb-0" }, " Balance: " + toDisplayString(item.balance), 1),
                          createVNode("p", { class: "mb-0" }, " Due date: " + toDisplayString(item.dueDate), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                "item.client": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "34",
                      color: !item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : void 0,
                      variant: !item.avatar.length ? "tonal" : void 0,
                      class: "me-3"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.avatar.length) {
                            _push4(ssrRenderComponent(VImg, {
                              src: item.avatar
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name))}</span>`);
                          }
                        } else {
                          return [
                            item.avatar.length ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: item.avatar
                            }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name)), 1))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex flex-column"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_RouterLink, {
                      to: { name: "pages-user-profile-tab", params: { tab: "profile" } },
                      class: "text-link text-base font-weight-medium mb-0"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.client.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.client.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-body-2"${_scopeId2}>${ssrInterpolate(item.client.companyEmail)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(VAvatar, {
                          size: "34",
                          color: !item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : void 0,
                          variant: !item.avatar.length ? "tonal" : void 0,
                          class: "me-3"
                        }, {
                          default: withCtx(() => [
                            item.avatar.length ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: item.avatar
                            }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name)), 1))
                          ]),
                          _: 2
                        }, 1032, ["color", "variant"]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode(_component_RouterLink, {
                            to: { name: "pages-user-profile-tab", params: { tab: "profile" } },
                            class: "text-link text-base font-weight-medium mb-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.client.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("span", { class: "text-body-2" }, toDisplayString(item.client.companyEmail), 1)
                        ])
                      ])
                    ];
                  }
                }),
                "item.total": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` $${ssrInterpolate(item.total)}`);
                  } else {
                    return [
                      createTextVNode(" $" + toDisplayString(item.total), 1)
                    ];
                  }
                }),
                "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.issuedDate)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.issuedDate), 1)
                    ];
                  }
                }),
                "item.balance": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string") {
                      _push3(ssrRenderComponent(VChip, {
                        color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color,
                        size: "small"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(resolveInvoiceBalanceVariant(item.balance, item.total).status)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<h6 class="text-h6 font-weight-regular"${_scopeId2}>${ssrInterpolate(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`)}</h6>`);
                    }
                  } else {
                    return [
                      typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string" ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color,
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : (openBlock(), createBlock("h6", {
                        key: 1,
                        class: "text-h6 font-weight-regular"
                      }, toDisplayString(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`), 1))
                    ];
                  }
                }),
                "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-no-wrap"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => deleteInvoice(item.id)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      size: "small",
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-eye-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-eye-line" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, {
                                  items: unref(computedMoreList)(item.id),
                                  "item-props": ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, {
                                    items: unref(computedMoreList)(item.id),
                                    "item-props": ""
                                  }, null, 8, ["items"])
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
                                createVNode(VList, {
                                  items: unref(computedMoreList)(item.id),
                                  "item-props": ""
                                }, null, 8, ["items"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-no-wrap" }, [
                        createVNode(_component_IconBtn, {
                          size: "small",
                          onClick: ($event) => deleteInvoice(item.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_IconBtn, {
                          size: "small",
                          to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-eye-line" })
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode(_component_IconBtn, { size: "small" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-more-2-line" }),
                            createVNode(VMenu, { activator: "parent" }, {
                              default: withCtx(() => [
                                createVNode(VList, {
                                  items: unref(computedMoreList)(item.id),
                                  "item-props": ""
                                }, null, 8, ["items"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
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
                    _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalInvoices)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                      disabled: unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)),
                      onClick: ($event) => unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) : page.value++
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
                        createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalInvoices))), 1),
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
                            disabled: unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)),
                            onClick: ($event) => unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) : page.value++
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
                createVNode(VCardText, { class: "d-flex align-center flex-wrap gap-4" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      "prepend-icon": "ri-add-line",
                      to: { name: "apps-invoice-add" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create invoice ")
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                      createVNode("div", { style: { "inline-size": "250px" } }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search Invoice"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { style: { "inline-size": "175px" } }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedStatus),
                          "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                          placeholder: "Invoice Status",
                          clearable: "",
                          "clear-icon": "ri-close-line",
                          items: ["Downloaded", "Draft", "Sent", "Paid", "Partial Payment", "Past Due"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VDataTableServer, {
                  modelValue: unref(selectedRows),
                  "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                  "items-per-page": unref(itemsPerPage),
                  "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                  page: unref(page),
                  "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                  "show-select": "",
                  "items-length": unref(totalInvoices),
                  headers,
                  items: unref(invoices),
                  "item-value": "id",
                  class: "text-no-wrap rounded-0",
                  "onUpdate:options": updateOptions
                }, {
                  "item.id": withCtx(({ item }) => [
                    createVNode(_component_RouterLink, {
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" #" + toDisplayString(item.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  "item.trending": withCtx(({ item }) => [
                    createVNode(VTooltip, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(VAvatar, mergeProps({ size: 28 }, props, {
                          color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                          variant: "tonal"
                        }), {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: 16,
                              icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1040, ["color"])
                      ]),
                      default: withCtx(() => [
                        createVNode("p", { class: "mb-0" }, toDisplayString(item.invoiceStatus), 1),
                        createVNode("p", { class: "mb-0" }, " Balance: " + toDisplayString(item.balance), 1),
                        createVNode("p", { class: "mb-0" }, " Due date: " + toDisplayString(item.dueDate), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  "item.client": withCtx(({ item }) => [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        color: !item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : void 0,
                        variant: !item.avatar.length ? "tonal" : void 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          item.avatar.length ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name)), 1))
                        ]),
                        _: 2
                      }, 1032, ["color", "variant"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_RouterLink, {
                          to: { name: "pages-user-profile-tab", params: { tab: "profile" } },
                          class: "text-link text-base font-weight-medium mb-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.client.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("span", { class: "text-body-2" }, toDisplayString(item.client.companyEmail), 1)
                      ])
                    ])
                  ]),
                  "item.total": withCtx(({ item }) => [
                    createTextVNode(" $" + toDisplayString(item.total), 1)
                  ]),
                  "item.date": withCtx(({ item }) => [
                    createTextVNode(toDisplayString(item.issuedDate), 1)
                  ]),
                  "item.balance": withCtx(({ item }) => [
                    typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string" ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color,
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : (openBlock(), createBlock("h6", {
                      key: 1,
                      class: "text-h6 font-weight-regular"
                    }, toDisplayString(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`), 1))
                  ]),
                  "item.actions": withCtx(({ item }) => [
                    createVNode("div", { class: "text-no-wrap" }, [
                      createVNode(_component_IconBtn, {
                        size: "small",
                        onClick: ($event) => deleteInvoice(item.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_IconBtn, {
                        size: "small",
                        to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-eye-line" })
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode(_component_IconBtn, { size: "small" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-more-2-line" }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                items: unref(computedMoreList)(item.id),
                                "item-props": ""
                              }, null, 8, ["items"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ])
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalInvoices))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) : page.value++
                        }, null, 8, ["disabled", "onClick"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<section${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`No Invoice Found`);
                  } else {
                    return [
                      createTextVNode("No Invoice Found")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("No Invoice Found")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/invoice/list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
