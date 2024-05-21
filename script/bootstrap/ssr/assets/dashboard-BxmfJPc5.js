import { ref, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, createTextVNode, isRef, withAsyncContext, computed, resolveComponent, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, a as VIcon, g as VProgressLinear, V as VBtn, A as VBtnGroup } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import __unplugin_components_0 from "vue3-apexcharts";
import { _ as _sfc_main$8 } from "./MoreBtn-CtW8Gck8.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
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
import "vue3-perfect-scrollbar";
import "@antfu/utils";
/* empty css               */
import "./VImg-D-rbsD1g.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VSlideGroup-Bvz86g7R.js";
import "ufo";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./filter-BC4fOy6c.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
const _sfc_main$7 = {
  __name: "LogisticsCardStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    const logisticData = ref([
      {
        icon: "ri-car-line",
        color: "primary",
        title: "On route vehicles",
        value: 42,
        change: 18.2,
        isHover: false
      },
      {
        icon: "ri-alert-line",
        color: "warning",
        title: "Vehicles with errors",
        value: 8,
        change: -8.7,
        isHover: false
      },
      {
        icon: "ri-route-line",
        color: "error",
        title: "Deviated from route",
        value: 27,
        change: 4.3,
        isHover: false
      },
      {
        icon: "ri-time-line",
        color: "info",
        title: "Late vehicles",
        value: 13,
        change: -2.5,
        isHover: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(logisticData), (data, index) => {
              _push2(ssrRenderComponent(VCol, {
                key: index,
                cols: "12",
                md: "3",
                sm: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-d2861420${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCard, {
                      class: "logistics-card-statistics cursor-pointer",
                      style: data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`,
                      onMouseenter: ($event) => data.isHover = true,
                      onMouseleave: ($event) => data.isHover = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center gap-x-4 mb-2" data-v-d2861420${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  color: data.color,
                                  rounded: "lg"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h4 class="text-h4" data-v-d2861420${_scopeId4}>${ssrInterpolate(data.value)}</h4></div><h6 class="text-h6 font-weight-regular" data-v-d2861420${_scopeId4}>${ssrInterpolate(data.title)}</h6><div class="d-flex align-center" data-v-d2861420${_scopeId4}><div class="text-body-1 font-weight-medium me-2" data-v-d2861420${_scopeId4}>${ssrInterpolate(data.change)}% </div><span class="text-sm text-disabled" data-v-d2861420${_scopeId4}>than last week</span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center gap-x-4 mb-2" }, [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      color: data.color,
                                      rounded: "lg"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1)
                                  ]),
                                  createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(data.title), 1),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("div", { class: "text-body-1 font-weight-medium me-2" }, toDisplayString(data.change) + "% ", 1),
                                    createVNode("span", { class: "text-sm text-disabled" }, "than last week")
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center gap-x-4 mb-2" }, [
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    color: data.color,
                                    rounded: "lg"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1)
                                ]),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(data.title), 1),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("div", { class: "text-body-1 font-weight-medium me-2" }, toDisplayString(data.change) + "% ", 1),
                                  createVNode("span", { class: "text-sm text-disabled" }, "than last week")
                                ])
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
                      createVNode("div", null, [
                        createVNode(VCard, {
                          class: "logistics-card-statistics cursor-pointer",
                          style: data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`,
                          onMouseenter: ($event) => data.isHover = true,
                          onMouseleave: ($event) => data.isHover = false
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center gap-x-4 mb-2" }, [
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    color: data.color,
                                    rounded: "lg"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1)
                                ]),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(data.title), 1),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("div", { class: "text-body-1 font-weight-medium me-2" }, toDisplayString(data.change) + "% ", 1),
                                  createVNode("span", { class: "text-sm text-disabled" }, "than last week")
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["style", "onMouseenter", "onMouseleave"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(logisticData), (data, index) => {
                return openBlock(), createBlock(VCol, {
                  key: index,
                  cols: "12",
                  md: "3",
                  sm: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode(VCard, {
                        class: "logistics-card-statistics cursor-pointer",
                        style: data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`,
                        onMouseenter: ($event) => data.isHover = true,
                        onMouseleave: ($event) => data.isHover = false
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center gap-x-4 mb-2" }, [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: data.color,
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.icon,
                                      size: "24"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("h4", { class: "text-h4" }, toDisplayString(data.value), 1)
                              ]),
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(data.title), 1),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("div", { class: "text-body-1 font-weight-medium me-2" }, toDisplayString(data.change) + "% ", 1),
                                createVNode("span", { class: "text-sm text-disabled" }, "than last week")
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["style", "onMouseenter", "onMouseleave"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsCardStatistics.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const LogisticsCardStatistics = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d2861420"]]);
const headingColor$1 = "rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))";
const labelColor$1 = "rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))";
const _sfc_main$6 = {
  __name: "LogisticsDeliveryExceptions",
  __ssrInlineRender: true,
  setup(__props) {
    const chartColors = {
      donut: {
        series1: "#72E128",
        series2: "#8EE753",
        series3: "#AAED7E",
        series4: "#C7F3A9"
      }
    };
    const deliveryExceptionsChartSeries = [
      13,
      25,
      22,
      40
    ];
    const deliveryExceptionsChartConfig = {
      labels: [
        "Incorrect address",
        "Weather conditions",
        "Federal Holidays",
        "Damage during transit"
      ],
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series2,
        chartColors.donut.series3,
        chartColors.donut.series4
      ],
      stroke: { width: 0 },
      dataLabels: {
        enabled: false,
        formatter(val) {
          return `${Number.parseInt(val)}%`;
        }
      },
      legend: {
        show: true,
        position: "bottom",
        offsetY: 10,
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        },
        fontSize: "13px",
        fontWeight: 400,
        labels: {
          colors: headingColor$1,
          useSeriesColors: false
        }
      },
      tooltip: { theme: false },
      grid: { padding: { top: 15 } },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              value: {
                fontSize: "24px",
                color: headingColor$1,
                fontWeight: 500,
                offsetY: -23,
                formatter(val) {
                  return `${Number.parseInt(val)}%`;
                }
              },
              name: { offsetY: 22 },
              total: {
                show: true,
                fontSize: "1rem",
                label: "AVG. Exceptions",
                color: labelColor$1,
                formatter() {
                  return "30%";
                }
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 420,
        options: { chart: { height: 400 } }
      }]
    };
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Delivery exceptions" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { "menu-list": moreList })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "donut",
                    height: "428",
                    options: deliveryExceptionsChartConfig,
                    series: deliveryExceptionsChartSeries
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "donut",
                      height: "428",
                      options: deliveryExceptionsChartConfig,
                      series: deliveryExceptionsChartSeries
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { title: "Delivery exceptions" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "donut",
                    height: "428",
                    options: deliveryExceptionsChartConfig,
                    series: deliveryExceptionsChartSeries
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsDeliveryExceptions.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "LogisticsDeliveryPerformance",
  __ssrInlineRender: true,
  setup(__props) {
    const deliveryData = [
      {
        title: "Packages in transit",
        value: "10k",
        change: 25.8,
        icon: "ri-gift-line",
        color: "primary"
      },
      {
        title: "Packages out for delivery",
        value: "5k",
        change: 4.3,
        icon: "ri-car-line",
        color: "info"
      },
      {
        title: "Packages delivered",
        value: "15k",
        change: -12.5,
        icon: "ri-check-line",
        color: "success"
      },
      {
        title: "Delivery success rate",
        value: "95%",
        change: 35.6,
        icon: "ri-home-6-line",
        color: "warning"
      },
      {
        title: "Average delivery time",
        value: "2.5 Days",
        change: -2.15,
        icon: "ri-time-line",
        color: "secondary"
      },
      {
        title: "Customer satisfaction",
        value: "4.5/5",
        change: 5.7,
        icon: "ri-user-line",
        color: "error"
      }
    ];
    const moreList = [
      {
        title: "Last 28 Days",
        value: "Last 28 Days"
      },
      {
        title: "Last Month",
        value: "Last Month"
      },
      {
        title: "Last Year",
        value: "Last Year"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Delivery performance",
              subtitle: "12% increase in this month"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, {
                    class: "mt-n5",
                    "menu-list": moreList
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, {
                      class: "mt-n5",
                      "menu-list": moreList
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(deliveryData, (data, index) => {
                          _push4(ssrRenderComponent(VListItem, { key: index }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: data.color,
                                  variant: "tonal",
                                  rounded: "lg",
                                  size: "40"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    color: data.color,
                                    variant: "tonal",
                                    rounded: "lg",
                                    size: "40"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-high-emphasis text-body-1 font-weight-medium"${_scopeId4}>${ssrInterpolate(data.value)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="${ssrRenderClass([data.change > 0 ? "text-success" : "text-error", "d-flex align-center"])}"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                        size: "24",
                                        class: "me-1"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(data.change)}%</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", {
                                          class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                        }, [
                                          createVNode(VIcon, {
                                            icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                            size: "24",
                                            class: "me-1"
                                          }, null, 8, ["icon"]),
                                          createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                        ], 2)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                      }, [
                                        createVNode(VIcon, {
                                          icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                          size: "24",
                                          class: "me-1"
                                        }, null, 8, ["icon"]),
                                        createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                      ], 2)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(deliveryData, (data, index) => {
                            return createVNode(VListItem, { key: index }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  color: data.color,
                                  variant: "tonal",
                                  rounded: "lg",
                                  size: "40"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.icon,
                                      size: "24"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                    }, [
                                      createVNode(VIcon, {
                                        icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                        size: "24",
                                        class: "me-1"
                                      }, null, 8, ["icon"]),
                                      createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(deliveryData, (data, index) => {
                          return createVNode(VListItem, { key: index }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                color: data.color,
                                variant: "tonal",
                                rounded: "lg",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: data.icon,
                                    size: "24"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            append: withCtx(() => [
                              createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                  }, [
                                    createVNode(VIcon, {
                                      icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                      size: "24",
                                      class: "me-1"
                                    }, null, 8, ["icon"]),
                                    createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
              createVNode(VCardItem, {
                title: "Delivery performance",
                subtitle: "12% increase in this month"
              }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, {
                    class: "mt-n5",
                    "menu-list": moreList
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(deliveryData, (data, index) => {
                        return createVNode(VListItem, { key: index }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              color: data.color,
                              variant: "tonal",
                              rounded: "lg",
                              size: "40"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: data.icon,
                                  size: "24"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          append: withCtx(() => [
                            createVNode("span", { class: "text-high-emphasis text-body-1 font-weight-medium" }, toDisplayString(data.value), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [data.change > 0 ? "text-success" : "text-error", "d-flex align-center"]
                                }, [
                                  createVNode(VIcon, {
                                    icon: data.change > 0 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                                    size: "24",
                                    class: "me-1"
                                  }, null, 8, ["icon"]),
                                  createVNode("span", null, toDisplayString(data.change) + "%", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsDeliveryPerformance.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "LogisticsOrderByCountries",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("New");
    const tabsData = [
      "New",
      "Preparing",
      "Shipping"
    ];
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Orders by countries",
              subtitle: "62 deliveries in progress"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, {
                    class: "mt-n5",
                    "menu-list": moreList
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, {
                      class: "mt-n5",
                      "menu-list": moreList
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(currentTab),
              "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
              grow: "",
              class: "disable-tab-transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tabsData, (tab, index) => {
                    _push3(ssrRenderComponent(VTab, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tab)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tab), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tab, index) => {
                      return createVNode(VTab, { key: index }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tab), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(currentTab),
                    "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Myrtle Ullrich </div><div class="text-body-2 mb-1"${_scopeId6}> 101 Boulder, California(CA), 95959 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                            createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Barry Schowalter </div><div class="text-body-2"${_scopeId6}> 939 Orange, California(CA), 92118 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                            createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Veronica Herman </div><div class="text-body-2 mb-1"${_scopeId6}> 162 Windsor, California(CA), 95492 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                            createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Helen Jacobs </div><div class="text-body-2"${_scopeId6}> 487 Sunset, California(CA), 94043 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                            createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, {
                                    class: "my-4",
                                    style: { "border-style": "dashed" }
                                  }),
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Barry Schowalter </div><div class="text-body-2"${_scopeId6}> 939 Orange, California(CA), 92118 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                            createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Myrtle Ullrich </div><div class="text-body-2"${_scopeId6}> 101 Boulder, California(CA), 95959 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                            createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Veronica Herman </div><div class="text-body-2"${_scopeId6}> 162 Windsor, California(CA), 95492 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                            createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Helen Jacobs </div><div class="text-body-2"${_scopeId6}> 487 Sunset, California(CA), 94043 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                            createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, {
                                    class: "my-4",
                                    style: { "border-style": "dashed" }
                                  }),
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Myrtle Ullrich </div><div class="text-body-2"${_scopeId6}> 101 Boulder, California(CA), 95959 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                            createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Barry Schowalter </div><div class="text-body-2"${_scopeId6}> 939 Orange, California(CA), 92118 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                            createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-uppercase text-success"${_scopeId6}> Sender </div><div class="app-timeline-title"${_scopeId6}> Veronica Herman </div><div class="text-body-2"${_scopeId6}> 162 Windsor, California(CA), 95492 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                            createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                            createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption text-primary text-uppercase"${_scopeId6}> Receiver </div><div class="app-timeline-title"${_scopeId6}> Helen Jacobs </div><div class="text-body-2"${_scopeId6}> 487 Sunset, California(CA), 94043 </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                            createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                            createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                          createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                          createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, {
                                    class: "my-4",
                                    style: { "border-style": "dashed" }
                                  }),
                                  createVNode(VTimeline, {
                                    align: "start",
                                    "truncate-line": "both",
                                    side: "end",
                                    density: "compact",
                                    "line-thickness": "1",
                                    class: "v-timeline--variant-outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTimelineItem, {
                                        icon: "ri-checkbox-circle-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "success",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                          createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        icon: "ri-map-pin-line",
                                        "dot-color": "rgba(var(--v-theme-surface))",
                                        "icon-color": "primary",
                                        "fill-dot": "",
                                        size: "20",
                                        elevation: 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                          createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                          createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                        createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                        createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  class: "my-4",
                                  style: { "border-style": "dashed" }
                                }),
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                        createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                        createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                        createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                        createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  class: "my-4",
                                  style: { "border-style": "dashed" }
                                }),
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                        createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                        createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                        createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                        createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  class: "my-4",
                                  style: { "border-style": "dashed" }
                                }),
                                createVNode(VTimeline, {
                                  align: "start",
                                  "truncate-line": "both",
                                  side: "end",
                                  density: "compact",
                                  "line-thickness": "1",
                                  class: "v-timeline--variant-outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      icon: "ri-checkbox-circle-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "success",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                        createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      icon: "ri-map-pin-line",
                                      "dot-color": "rgba(var(--v-theme-surface))",
                                      "icon-color": "primary",
                                      "fill-dot": "",
                                      size: "20",
                                      elevation: 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                        createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                        createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                      ]),
                                      _: 1
                                    })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindow, {
                      modelValue: unref(currentTab),
                      "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                      createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                      createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }),
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                      createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                      createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                      createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                      createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }),
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                      createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                      createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                      createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                      createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                class: "my-4",
                                style: { "border-style": "dashed" }
                              }),
                              createVNode(VTimeline, {
                                align: "start",
                                "truncate-line": "both",
                                side: "end",
                                density: "compact",
                                "line-thickness": "1",
                                class: "v-timeline--variant-outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    icon: "ri-checkbox-circle-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "success",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                      createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    icon: "ri-map-pin-line",
                                    "dot-color": "rgba(var(--v-theme-surface))",
                                    "icon-color": "primary",
                                    "fill-dot": "",
                                    size: "20",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                      createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                      createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
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
          } else {
            return [
              createVNode(VCardItem, {
                title: "Orders by countries",
                subtitle: "62 deliveries in progress"
              }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, {
                    class: "mt-n5",
                    "menu-list": moreList
                  })
                ]),
                _: 1
              }),
              createVNode(VTabs, {
                modelValue: unref(currentTab),
                "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
                grow: "",
                class: "disable-tab-transition"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tab, index) => {
                    return createVNode(VTab, { key: index }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tab), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(currentTab),
                    "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                    createVNode("div", { class: "text-body-2 mb-1" }, " 101 Boulder, California(CA), 95959 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                    createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              class: "my-4",
                              style: { "border-style": "dashed" }
                            }),
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                    createVNode("div", { class: "text-body-2 mb-1" }, " 162 Windsor, California(CA), 95492 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                    createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                    createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                    createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              class: "my-4",
                              style: { "border-style": "dashed" }
                            }),
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                    createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                    createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Myrtle Ullrich "),
                                    createVNode("div", { class: "text-body-2" }, " 101 Boulder, California(CA), 95959 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Barry Schowalter "),
                                    createVNode("div", { class: "text-body-2" }, " 939 Orange, California(CA), 92118 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              class: "my-4",
                              style: { "border-style": "dashed" }
                            }),
                            createVNode(VTimeline, {
                              align: "start",
                              "truncate-line": "both",
                              side: "end",
                              density: "compact",
                              "line-thickness": "1",
                              class: "v-timeline--variant-outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  icon: "ri-checkbox-circle-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "success",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " Sender "),
                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                    createVNode("div", { class: "text-body-2" }, " 162 Windsor, California(CA), 95492 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  icon: "ri-map-pin-line",
                                  "dot-color": "rgba(var(--v-theme-surface))",
                                  "icon-color": "primary",
                                  "fill-dot": "",
                                  size: "20",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption text-primary text-uppercase" }, " Receiver "),
                                    createVNode("div", { class: "app-timeline-title" }, " Helen Jacobs "),
                                    createVNode("div", { class: "text-body-2" }, " 487 Sunset, California(CA), 94043 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
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
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsOrderByCountries.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "LogisticsOverviewTable",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const itemsPerPage = ref(5);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const { data: vehiclesData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/logistics/vehicles", {
      query: {
        page,
        itemsPerPage,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const vehicles = computed(() => vehiclesData.value.vehicles);
    const totalVehicles = computed(() => vehiclesData.value.totalVehicles);
    const headers = [
      {
        title: "LOCATION",
        key: "location"
      },
      {
        title: "STARTING ROUTE",
        key: "startRoute"
      },
      {
        title: "ENDING ROUTE",
        key: "endRoute"
      },
      {
        title: "WARNINGS",
        key: "warnings"
      },
      {
        title: "PROGRESS",
        key: "progress"
      }
    ];
    const resolveChipColor = (warning) => {
      if (warning === "No Warnings")
        return "success";
      if (warning === "fuel problems")
        return "primary";
      if (warning === "Temperature Not Optimal")
        return "warning";
      if (warning === "Ecu Not Responding")
        return "error";
      if (warning === "Oil Leakage")
        return "info";
    };
    const moreList = [
      {
        title: "Refresh",
        value: "refresh"
      },
      {
        title: "Update",
        value: "update"
      },
      {
        title: "Share",
        value: "share"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "On Route vehicles" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { "menu-list": moreList })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTableServer, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              "items-per-page-options": [
                { value: 5, title: "5" },
                { value: 10, title: "10" },
                { value: 20, title: "20" },
                { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }
              ],
              "items-length": unref(totalVehicles),
              items: unref(vehicles),
              "item-value": "location",
              headers,
              "show-select": "",
              class: "text-no-wrap",
              "onUpdate:options": updateOptions
            }, {
              "item.location": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "padding-block": "10px" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    variant: "tonal",
                    class: "me-3",
                    color: "secondary"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-car-line",
                          size: "28"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-car-line",
                            size: "28"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouterLink, { to: { name: "apps-logistics-fleet" } }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-link text-base font-weight-medium d-inline-block"${_scopeId3}> VOL-${ssrInterpolate(item.location)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-link text-base font-weight-medium d-inline-block" }, " VOL-" + toDisplayString(item.location), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "padding-block": "10px" } }, [
                      createVNode(VAvatar, {
                        variant: "tonal",
                        class: "me-3",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-car-line",
                            size: "28"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_RouterLink, { to: { name: "apps-logistics-fleet" } }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-link text-base font-weight-medium d-inline-block" }, " VOL-" + toDisplayString(item.location), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              "item.startRoute": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.startCity)}, ${ssrInterpolate(item.startCountry)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.startCity) + ", " + toDisplayString(item.startCountry), 1)
                  ];
                }
              }),
              "item.endRoute": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.endCity)}, ${ssrInterpolate(item.endCountry)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.endCity) + ", " + toDisplayString(item.endCountry), 1)
                  ];
                }
              }),
              "item.warnings": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: resolveChipColor(item.warnings),
                    size: "small"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.warnings)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.warnings), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: resolveChipColor(item.warnings),
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.warnings), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.progress": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-2" style="${ssrRenderStyle({ "min-inline-size": "180px" })}"${_scopeId2}><div class="w-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VProgressLinear, {
                    "model-value": item.progress,
                    rounded: "",
                    color: "primary",
                    height: 8
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>${ssrInterpolate(item.progress)}% </div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "d-flex align-center gap-x-2",
                      style: { "min-inline-size": "180px" }
                    }, [
                      createVNode("div", { class: "w-100" }, [
                        createVNode(VProgressLinear, {
                          "model-value": item.progress,
                          rounded: "",
                          color: "primary",
                          height: 8
                        }, null, 8, ["model-value"])
                      ]),
                      createVNode("div", null, toDisplayString(item.progress) + "% ", 1)
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
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalVehicles)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                    disabled: unref(page) >= Math.ceil(unref(totalVehicles) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalVehicles) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalVehicles) / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalVehicles))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalVehicles) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalVehicles) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalVehicles) / unref(itemsPerPage)) : page.value++
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
              createVNode(VCardItem, { title: "On Route vehicles" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                "items-per-page-options": [
                  { value: 5, title: "5" },
                  { value: 10, title: "10" },
                  { value: 20, title: "20" },
                  { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }
                ],
                "items-length": unref(totalVehicles),
                items: unref(vehicles),
                "item-value": "location",
                headers,
                "show-select": "",
                class: "text-no-wrap",
                "onUpdate:options": updateOptions
              }, {
                "item.location": withCtx(({ item }) => [
                  createVNode("div", { style: { "padding-block": "10px" } }, [
                    createVNode(VAvatar, {
                      variant: "tonal",
                      class: "me-3",
                      color: "secondary"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-car-line",
                          size: "28"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, { to: { name: "apps-logistics-fleet" } }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-link text-base font-weight-medium d-inline-block" }, " VOL-" + toDisplayString(item.location), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                "item.startRoute": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.startCity) + ", " + toDisplayString(item.startCountry), 1)
                ]),
                "item.endRoute": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.endCity) + ", " + toDisplayString(item.endCountry), 1)
                ]),
                "item.warnings": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: resolveChipColor(item.warnings),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.warnings), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.progress": withCtx(({ item }) => [
                  createVNode("div", {
                    class: "d-flex align-center gap-x-2",
                    style: { "min-inline-size": "180px" }
                  }, [
                    createVNode("div", { class: "w-100" }, [
                      createVNode(VProgressLinear, {
                        "model-value": item.progress,
                        rounded: "",
                        color: "primary",
                        height: 8
                      }, null, 8, ["model-value"])
                    ]),
                    createVNode("div", null, toDisplayString(item.progress) + "% ", 1)
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalVehicles))), 1),
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
                        disabled: unref(page) >= Math.ceil(unref(totalVehicles) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalVehicles) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalVehicles) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "items-per-page-options", "items-length", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsOverviewTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const headingColor = "rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))";
const labelColor = "rgba(var(--v-theme-on-background), var(--v-disabled-opacity))";
const borderColor = "rgba(var(--v-border-color), var(--v-border-opacity))";
const _sfc_main$2 = {
  __name: "LogisticsShipmentStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    const chartColors = {
      line: {
        series1: "#FFB400",
        series2: "#666CFF"
      }
    };
    const series = [
      {
        name: "Shipment",
        type: "column",
        data: [
          38,
          45,
          33,
          38,
          32,
          48,
          45,
          40,
          42,
          37
        ]
      },
      {
        name: "Delivery",
        type: "line",
        data: [
          23,
          28,
          23,
          32,
          25,
          42,
          32,
          32,
          26,
          24
        ]
      }
    ];
    const shipmentConfig = {
      chart: {
        type: "line",
        stacked: false,
        parentHeightOffset: 0,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      markers: {
        size: 5,
        colors: "#fff",
        strokeColors: chartColors.line.series2,
        hover: { size: 6 },
        borderRadius: 4
      },
      stroke: {
        curve: "smooth",
        width: [
          0,
          3
        ],
        lineCap: "round"
      },
      legend: {
        show: true,
        position: "bottom",
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        height: 40,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        },
        fontSize: "15px",
        fontFamily: "Inter",
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        },
        offsetY: 10
      },
      grid: {
        strokeDashArray: 8,
        borderColor
      },
      colors: [
        chartColors.line.series1,
        chartColors.line.series2
      ],
      fill: {
        opacity: [
          1,
          1
        ]
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: 4,
          borderRadiusApplication: "end"
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        tickAmount: 10,
        categories: [
          "1 Jan",
          "2 Jan",
          "3 Jan",
          "4 Jan",
          "5 Jan",
          "6 Jan",
          "7 Jan",
          "8 Jan",
          "9 Jan",
          "10 Jan"
        ],
        labels: {
          style: {
            colors: labelColor,
            fontSize: "13px",
            fontFamily: "Inter",
            fontWeight: 400
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 50,
        labels: {
          style: {
            colors: labelColor,
            fontSize: "13px",
            fontFamily: "Inter",
            fontWeight: 400
          },
          formatter(val) {
            return `${val}%`;
          }
        }
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: { height: 320 },
            xaxis: { labels: { style: { fontSize: "10px" } } },
            legend: {
              itemMargin: {
                vertical: 0,
                horizontal: 10
              },
              fontSize: "13px",
              offsetY: 12
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: { height: 415 },
            plotOptions: { bar: { columnWidth: "50%" } }
          }
        },
        {
          breakpoint: 982,
          options: { plotOptions: { bar: { columnWidth: "30%" } } }
        },
        {
          breakpoint: 480,
          options: {
            chart: { height: 250 },
            legend: { offsetY: 7 }
          }
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Shipment statistics",
              subtitle: "Total number of deliveries 23.8k"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtnGroup, {
                    density: "compact",
                    variant: "outlined",
                    divided: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { color: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` January `);
                            } else {
                              return [
                                createTextVNode(" January ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-arrow-down-s-line",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { color: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" January ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            icon: "ri-arrow-down-s-line",
                            color: "primary"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtnGroup, {
                      density: "compact",
                      variant: "outlined",
                      divided: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { color: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" January ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          icon: "ri-arrow-down-s-line",
                          color: "primary"
                        })
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
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    id: "shipment-statistics",
                    type: "line",
                    height: "320",
                    options: shipmentConfig,
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      id: "shipment-statistics",
                      type: "line",
                      height: "320",
                      options: shipmentConfig,
                      series
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, {
                title: "Shipment statistics",
                subtitle: "Total number of deliveries 23.8k"
              }, {
                append: withCtx(() => [
                  createVNode(VBtnGroup, {
                    density: "compact",
                    variant: "outlined",
                    divided: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { color: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode(" January ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        icon: "ri-arrow-down-s-line",
                        color: "primary"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    id: "shipment-statistics",
                    type: "line",
                    height: "320",
                    options: shipmentConfig,
                    series
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsShipmentStatistics.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "LogisticsVehicleOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const vehicleData = [
      {
        icon: "ri-car-line",
        title: "On the way",
        time: "2hr 10min",
        percentage: 39.7,
        color: {
          bg: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))",
          text: "rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"
        }
      },
      {
        icon: "ri-download-2-line",
        title: "Unloading",
        time: "3hr 15min",
        percentage: 28.3,
        color: {
          bg: "rgb(var(--v-theme-primary))",
          text: "rgb(var(--v-theme-on-primary))"
        }
      },
      {
        icon: "ri-upload-line",
        title: "Loading",
        time: "1hr 24min",
        percentage: 17.4,
        color: {
          bg: "rgb(var(--v-theme-info))",
          text: "rgb(var(--v-theme-on-primary))"
        }
      },
      {
        icon: "ri-time-line",
        title: "Waiting",
        time: "5hr 19min",
        percentage: 14.6,
        color: {
          bg: "rgb(var(--v-tooltip-background))",
          text: "rgba(var(--v-theme-surface))"
        }
      }
    ];
    const moreList = [
      {
        title: "Last 28 Days",
        value: "Last 28 Days"
      },
      {
        title: "Last Month",
        value: "Last Month"
      },
      {
        title: "Last Year",
        value: "Last Year"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Vehicles Overview" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MoreBtn, { "menu-list": moreList }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MoreBtn, { "menu-list": moreList })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex mb-6" data-v-687d66ba${_scopeId2}><!--[-->`);
                  ssrRenderList(vehicleData, (item, index) => {
                    _push3(`<div style="${ssrRenderStyle(`inline-size: ${item.percentage}%;`)}" data-v-687d66ba${_scopeId2}><div class="vehicle-progress-label position-relative mb-5 text-body-1 d-none d-sm-block" data-v-687d66ba${_scopeId2}>${ssrInterpolate(item.title)}</div>`);
                    _push3(ssrRenderComponent(VProgressLinear, {
                      color: item.color.bg,
                      "model-value": "100",
                      height: "46",
                      "rounded-bar": false,
                      rounded: false,
                      class: index === 0 ? "rounded-s-lg" : index === vehicleData.length - 1 ? "rounded-e-lg" : ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-sm font-weight-medium mb-0" style="${ssrRenderStyle(`color: ${item.color.text}`)}" data-v-687d66ba${_scopeId3}>${ssrInterpolate(item.percentage)}% </p>`);
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-sm font-weight-medium mb-0",
                              style: `color: ${item.color.text}`
                            }, toDisplayString(item.percentage) + "% ", 5)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(VTable, { class: "text-no-wrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<tbody data-v-687d66ba${_scopeId3}><!--[-->`);
                        ssrRenderList(vehicleData, (vehicle, index) => {
                          _push4(`<tr data-v-687d66ba${_scopeId3}><td width="70%" class="ps-0" style="${ssrRenderStyle({ "block-size": "48px" })}" data-v-687d66ba${_scopeId3}><div class="d-flex align-center text-high-emphasis" data-v-687d66ba${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: vehicle.icon,
                            size: "24",
                            class: "me-2"
                          }, null, _parent4, _scopeId3));
                          _push4(`<h6 class="text-h6 font-weight-regular" data-v-687d66ba${_scopeId3}>${ssrInterpolate(vehicle.title)}</h6></div></td><td data-v-687d66ba${_scopeId3}><h6 class="text-h6" data-v-687d66ba${_scopeId3}>${ssrInterpolate(vehicle.time)}</h6></td><td data-v-687d66ba${_scopeId3}><span class="text-body-1" data-v-687d66ba${_scopeId3}>${ssrInterpolate(vehicle.percentage)}%</span></td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(vehicleData, (vehicle, index) => {
                              return createVNode("tr", { key: index }, [
                                createVNode("td", {
                                  width: "70%",
                                  class: "ps-0",
                                  style: { "block-size": "48px" }
                                }, [
                                  createVNode("div", { class: "d-flex align-center text-high-emphasis" }, [
                                    createVNode(VIcon, {
                                      icon: vehicle.icon,
                                      size: "24",
                                      class: "me-2"
                                    }, null, 8, ["icon"]),
                                    createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.title), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(vehicle.time), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", { class: "text-body-1" }, toDisplayString(vehicle.percentage) + "%", 1)
                                ])
                              ]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex mb-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(vehicleData, (item, index) => {
                        return createVNode("div", {
                          key: item.title,
                          style: `inline-size: ${item.percentage}%;`
                        }, [
                          createVNode("div", { class: "vehicle-progress-label position-relative mb-5 text-body-1 d-none d-sm-block" }, toDisplayString(item.title), 1),
                          createVNode(VProgressLinear, {
                            color: item.color.bg,
                            "model-value": "100",
                            height: "46",
                            "rounded-bar": false,
                            rounded: false,
                            class: index === 0 ? "rounded-s-lg" : index === vehicleData.length - 1 ? "rounded-e-lg" : ""
                          }, {
                            default: withCtx(() => [
                              createVNode("p", {
                                class: "text-sm font-weight-medium mb-0",
                                style: `color: ${item.color.text}`
                              }, toDisplayString(item.percentage) + "% ", 5)
                            ]),
                            _: 2
                          }, 1032, ["color", "class"])
                        ], 4);
                      }), 64))
                    ]),
                    createVNode(VTable, { class: "text-no-wrap" }, {
                      default: withCtx(() => [
                        createVNode("tbody", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(vehicleData, (vehicle, index) => {
                            return createVNode("tr", { key: index }, [
                              createVNode("td", {
                                width: "70%",
                                class: "ps-0",
                                style: { "block-size": "48px" }
                              }, [
                                createVNode("div", { class: "d-flex align-center text-high-emphasis" }, [
                                  createVNode(VIcon, {
                                    icon: vehicle.icon,
                                    size: "24",
                                    class: "me-2"
                                  }, null, 8, ["icon"]),
                                  createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.title), 1)
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(vehicle.time), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode("span", { class: "text-body-1" }, toDisplayString(vehicle.percentage) + "%", 1)
                              ])
                            ]);
                          }), 64))
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
              createVNode(VCardItem, { title: "Vehicles Overview" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex mb-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(vehicleData, (item, index) => {
                      return createVNode("div", {
                        key: item.title,
                        style: `inline-size: ${item.percentage}%;`
                      }, [
                        createVNode("div", { class: "vehicle-progress-label position-relative mb-5 text-body-1 d-none d-sm-block" }, toDisplayString(item.title), 1),
                        createVNode(VProgressLinear, {
                          color: item.color.bg,
                          "model-value": "100",
                          height: "46",
                          "rounded-bar": false,
                          rounded: false,
                          class: index === 0 ? "rounded-s-lg" : index === vehicleData.length - 1 ? "rounded-e-lg" : ""
                        }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              class: "text-sm font-weight-medium mb-0",
                              style: `color: ${item.color.text}`
                            }, toDisplayString(item.percentage) + "% ", 5)
                          ]),
                          _: 2
                        }, 1032, ["color", "class"])
                      ], 4);
                    }), 64))
                  ]),
                  createVNode(VTable, { class: "text-no-wrap" }, {
                    default: withCtx(() => [
                      createVNode("tbody", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(vehicleData, (vehicle, index) => {
                          return createVNode("tr", { key: index }, [
                            createVNode("td", {
                              width: "70%",
                              class: "ps-0",
                              style: { "block-size": "48px" }
                            }, [
                              createVNode("div", { class: "d-flex align-center text-high-emphasis" }, [
                                createVNode(VIcon, {
                                  icon: vehicle.icon,
                                  size: "24",
                                  class: "me-2"
                                }, null, 8, ["icon"]),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.title), 1)
                              ])
                            ]),
                            createVNode("td", null, [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(vehicle.time), 1)
                            ]),
                            createVNode("td", null, [
                              createVNode("span", { class: "text-body-1" }, toDisplayString(vehicle.percentage) + "%", 1)
                            ])
                          ]);
                        }), 64))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/logistics/LogisticsVehicleOverview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LogisticsVehicleOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-687d66ba"]]);
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(LogisticsCardStatistics, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(LogisticsCardStatistics)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(LogisticsVehicleOverview, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(LogisticsVehicleOverview)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
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
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
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
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
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
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(LogisticsCardStatistics)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(LogisticsVehicleOverview)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/logistics/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
