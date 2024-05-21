import { _ as _sfc_main$i } from "./CardStatisticsVertical-K3d494UI.js";
import { i as illustration1, a as illustration2, _ as _sfc_main$h } from "./illustration-2-K6KOpGUD.js";
import { p as prefixWithPlus, k as kFormatter } from "./formatters-DpL1jrjT.js";
import { useSSRContext, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, computed, createTextVNode, ref, Fragment, renderList, mergeProps } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon, l as useTheme, O as hexToRgb, _ as _export_sfc, b as VProgressCircular, g as VProgressLinear } from "../ssr.js";
import { controlledComputed } from "@vueuse/core";
import __unplugin_components_0 from "vue3-apexcharts";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { _ as _sfc_main$g } from "./MoreBtn-CtW8Gck8.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VChip-BFfBWJ68.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./helpers-DX2i3Kdq.js";
import "./VImg-D-rbsD1g.js";
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
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main$f = {
  __name: "CardStatisticsWithIcon",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    change: {
      type: Number,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between"${_scopeId2}><div class="d-flex flex-column gap-y-1"${_scopeId2}><div class="text-body-1 text-high-emphasis"${_scopeId2}>${ssrInterpolate(__props.title)}</div><div class="d-flex align-center gap-x-2"${_scopeId2}><h4 class="text-h4"${_scopeId2}>${ssrInterpolate(__props.value)}</h4><span class="${ssrRenderClass([__props.change > 0 ? "text-success" : "text-error", "text-base"])}"${_scopeId2}>(${ssrInterpolate(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(__props.change))}%)</span></div><div class="text-body-2"${_scopeId2}>${ssrInterpolate(__props.desc)}</div></div>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    color: __props.iconColor,
                    variant: "tonal",
                    rounded: "lg",
                    size: "42"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: __props.icon,
                          size: "26"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: __props.icon,
                            size: "26"
                          }, null, 8, ["icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between" }, [
                      createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                        createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(__props.title), 1),
                        createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                          createVNode("h4", { class: "text-h4" }, toDisplayString(__props.value), 1),
                          createVNode("span", {
                            class: ["text-base", __props.change > 0 ? "text-success" : "text-error"]
                          }, "(" + toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(__props.change)) + "%)", 3)
                        ]),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(__props.desc), 1)
                      ]),
                      createVNode(VAvatar, {
                        color: __props.iconColor,
                        variant: "tonal",
                        rounded: "lg",
                        size: "42"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: __props.icon,
                            size: "26"
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["color"])
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
                  createVNode("div", { class: "d-flex justify-space-between" }, [
                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(__props.title), 1),
                      createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                        createVNode("h4", { class: "text-h4" }, toDisplayString(__props.value), 1),
                        createVNode("span", {
                          class: ["text-base", __props.change > 0 ? "text-success" : "text-error"]
                        }, "(" + toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(__props.change)) + "%)", 3)
                      ]),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(__props.desc), 1)
                    ]),
                    createVNode(VAvatar, {
                      color: __props.iconColor,
                      variant: "tonal",
                      rounded: "lg",
                      size: "42"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: __props.icon,
                          size: "26"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["color"])
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/cards/CardStatisticsWithIcon.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "CardStatisticsHorizontal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "primary"
    },
    icon: {
      type: String,
      required: true
    },
    stats: {
      type: Number,
      required: true
    },
    change: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "40",
                    rounded: "lg",
                    color: props.color,
                    variant: "tonal",
                    class: "me-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: props.icon,
                          size: "24"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: props.icon,
                            size: "24"
                          }, null, 8, ["icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column"${_scopeId2}><div class="d-flex align-center flex-wrap gap-x-2"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $${ssrInterpolate(unref(kFormatter)(props.stats))}</h5>`);
                  if (props.change) {
                    _push3(`<div class="${ssrRenderClass([`${unref(isPositive) ? "text-success" : "text-error"}`, "d-flex align-center"])}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      size: "24",
                      icon: unref(isPositive) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-base"${_scopeId2}>${ssrInterpolate(Math.abs(props.change))}% </div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="text-body-1"${_scopeId2}>${ssrInterpolate(props.title)}</div></div>`);
                } else {
                  return [
                    createVNode(VAvatar, {
                      size: "40",
                      rounded: "lg",
                      color: props.color,
                      variant: "tonal",
                      class: "me-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: props.icon,
                          size: "24"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-x-2" }, [
                        createVNode("h5", { class: "text-h5" }, " $" + toDisplayString(unref(kFormatter)(props.stats)), 1),
                        props.change ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["d-flex align-center", `${unref(isPositive) ? "text-success" : "text-error"}`]
                        }, [
                          createVNode(VIcon, {
                            size: "24",
                            icon: unref(isPositive) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                          }, null, 8, ["icon"]),
                          createVNode("div", { class: "text-base" }, toDisplayString(Math.abs(props.change)) + "% ", 1)
                        ], 2)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "text-body-1" }, toDisplayString(props.title), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(VAvatar, {
                    size: "40",
                    rounded: "lg",
                    color: props.color,
                    variant: "tonal",
                    class: "me-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: props.icon,
                        size: "24"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["color"]),
                  createVNode("div", { class: "d-flex flex-column" }, [
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-x-2" }, [
                      createVNode("h5", { class: "text-h5" }, " $" + toDisplayString(unref(kFormatter)(props.stats)), 1),
                      props.change ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["d-flex align-center", `${unref(isPositive) ? "text-success" : "text-error"}`]
                      }, [
                        createVNode(VIcon, {
                          size: "24",
                          icon: unref(isPositive) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                        }, null, 8, ["icon"]),
                        createVNode("div", { class: "text-base" }, toDisplayString(Math.abs(props.change)) + "% ", 1)
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "text-body-1" }, toDisplayString(props.title), 1)
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/cards/CardStatisticsHorizontal.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "CardStatisticsGrowthDonutsCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [
      35,
      30,
      23
    ];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const textSecondary = `rgba(${hexToRgb(currentTheme["on-surface"])},${variableTheme["medium-emphasis-opacity"]})`;
      return {
        legend: { show: false },
        stroke: {
          width: 5,
          colors: ["rgba(var(--v-theme-surface),1)"]
        },
        colors: [
          currentTheme.primary,
          currentTheme.success,
          currentTheme.secondary
        ],
        labels: [
          `${(/* @__PURE__ */ new Date()).getFullYear()}`,
          `${(/* @__PURE__ */ new Date()).getFullYear() - 1}`,
          `${(/* @__PURE__ */ new Date()).getFullYear() - 2}`
        ],
        tooltip: { y: { formatter: (val) => `${val}%` } },
        dataLabels: { enabled: false },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                name: { show: false },
                total: {
                  label: "",
                  show: true,
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: textSecondary,
                  formatter: (val) => typeof val === "string" ? `${val}%` : "12%"
                },
                value: {
                  offsetY: 6,
                  fontWeight: 600,
                  fontSize: "1rem",
                  formatter: (val) => `${val}%`,
                  color: textSecondary
                }
              }
            }
          }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $27.9k </h5><span class="text-success text-body-1"${_scopeId2}>+16%</span></div><div class="text-subtitle-1"${_scopeId2}> Total Growth </div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $27.9k "),
                      createVNode("span", { class: "text-success text-body-1" }, "+16%")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Total Growth ")
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
                    options: unref(chartOptions),
                    series,
                    height: 135
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "donut",
                      options: unref(chartOptions),
                      series,
                      height: 135
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $27.9k "),
                    createVNode("span", { class: "text-success text-body-1" }, "+16%")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Total Growth ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "donut",
                    options: unref(chartOptions),
                    series,
                    height: 135
                  }, null, 8, ["options"])
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsGrowthDonutsCharts.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "CardStatisticsLiveVisitors",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = vuetifyTheme.current.value.colors;
    const series = [{
      data: [
        70,
        118,
        92,
        49,
        19,
        49,
        23,
        82,
        65,
        23,
        49,
        65,
        65
      ]
    }];
    const chartOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -4,
          left: -20,
          right: -2,
          bottom: -7
        },
        yaxis: { lines: { show: false } }
      },
      legend: { show: false },
      dataLabels: { enabled: false },
      colors: [currentTheme.success],
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "43%",
          endingShape: "rounded",
          startingShape: "rounded"
        }
      },
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { labels: { show: false } }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-success text-body-1 font-weight-medium d-flex align-center mt-n7"${_scopeId2}><div${_scopeId2}>+78.2%</div>`);
                  _push3(ssrRenderComponent(VIcon, {
                    size: "20",
                    icon: "ri-arrow-up-s-line"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-success text-body-1 font-weight-medium d-flex align-center mt-n7" }, [
                      createVNode("div", null, "+78.2%"),
                      createVNode(VIcon, {
                        size: "20",
                        icon: "ri-arrow-up-s-line"
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Live Visitors`);
                      } else {
                        return [
                          createTextVNode("Live Visitors")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Total 890 Visitors Are Live`);
                      } else {
                        return [
                          createTextVNode("Total 890 Visitors Are Live")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Live Visitors")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Total 890 Visitors Are Live")
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
                    type: "bar",
                    height: 250,
                    options: chartOptions,
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      height: 250,
                      options: chartOptions,
                      series
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "text-success text-body-1 font-weight-medium d-flex align-center mt-n7" }, [
                    createVNode("div", null, "+78.2%"),
                    createVNode(VIcon, {
                      size: "20",
                      icon: "ri-arrow-up-s-line"
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Live Visitors")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Total 890 Visitors Are Live")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    height: 250,
                    options: chartOptions,
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsLiveVisitors.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "CardStatisticsLogistics",
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
                    _push3(`<div data-v-7bde8f47${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCard, {
                      class: "logistics-card-statistics cursor-pointer",
                      style: data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.7)`,
                      onMouseenter: ($event) => data.isHover = true,
                      onMouseleave: ($event) => data.isHover = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center gap-x-4 mb-2" data-v-7bde8f47${_scopeId4}>`);
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
                                _push5(`<h4 class="text-h4" data-v-7bde8f47${_scopeId4}>${ssrInterpolate(data.value)}</h4></div><div class="text-body-1 text-high-emphasis" data-v-7bde8f47${_scopeId4}>${ssrInterpolate(data.title)}</div><div class="d-flex align-center gap-x-2" data-v-7bde8f47${_scopeId4}><h6 class="text-h6 text-medium-emphasis" data-v-7bde8f47${_scopeId4}>${ssrInterpolate(data.change)}% </h6><div class="text-sm text-disabled" data-v-7bde8f47${_scopeId4}> than last week </div></div>`);
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
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(data.title), 1),
                                  createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                    createVNode("h6", { class: "text-h6 text-medium-emphasis" }, toDisplayString(data.change) + "% ", 1),
                                    createVNode("div", { class: "text-sm text-disabled" }, " than last week ")
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
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(data.title), 1),
                                createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                  createVNode("h6", { class: "text-h6 text-medium-emphasis" }, toDisplayString(data.change) + "% ", 1),
                                  createVNode("div", { class: "text-sm text-disabled" }, " than last week ")
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
                          style: data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.7)`,
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
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(data.title), 1),
                                createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                  createVNode("h6", { class: "text-h6 text-medium-emphasis" }, toDisplayString(data.change) + "% ", 1),
                                  createVNode("div", { class: "text-sm text-disabled" }, " than last week ")
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
                        style: data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.7)`,
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
                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(data.title), 1),
                              createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                createVNode("h6", { class: "text-h6 text-medium-emphasis" }, toDisplayString(data.change) + "% ", 1),
                                createVNode("div", { class: "text-sm text-disabled" }, " than last week ")
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsLogistics.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CardStatisticsLogistics = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-7bde8f47"]]);
const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center gap-4 py-7" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VProgressCircular, {
                size: 64,
                width: 6,
                "model-value": 70,
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      icon: "ri-macbook-line",
                      size: "24"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "ri-macbook-line",
                        size: "24"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><div class="d-flex align-center gap-1 mb-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> 84k </h5><div class="text-error d-flex align-center"${_scopeId2}><span class="text-sm"${_scopeId2}>-24%</span>`);
              _push3(ssrRenderComponent(VIcon, {
                icon: "ri-arrow-down-s-line",
                size: "20"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><div${_scopeId2}>Total Impressions</div></div>`);
            } else {
              return [
                createVNode(VProgressCircular, {
                  size: 64,
                  width: 6,
                  "model-value": 70,
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "ri-macbook-line",
                      size: "24"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                    createVNode("h5", { class: "text-h5" }, " 84k "),
                    createVNode("div", { class: "text-error d-flex align-center" }, [
                      createVNode("span", { class: "text-sm" }, "-24%"),
                      createVNode(VIcon, {
                        icon: "ri-arrow-down-s-line",
                        size: "20"
                      })
                    ])
                  ]),
                  createVNode("div", null, "Total Impressions")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center gap-4 py-7" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VProgressCircular, {
                size: 65,
                width: 6,
                "model-value": 40,
                color: "warning"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      icon: "ri-handbag-line",
                      size: "24"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "ri-handbag-line",
                        size: "24"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><div class="d-flex align-center gap-1 mb-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> 22k </h5><div class="d-flex align-center"${_scopeId2}><div class="text-sm text-success"${_scopeId2}> +15% </div>`);
              _push3(ssrRenderComponent(VIcon, {
                icon: "ri-arrow-up-s-line",
                size: "20",
                color: "success"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><span${_scopeId2}>Total Orders</span></div>`);
            } else {
              return [
                createVNode(VProgressCircular, {
                  size: 65,
                  width: 6,
                  "model-value": 40,
                  color: "warning"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "ri-handbag-line",
                      size: "24"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                    createVNode("h5", { class: "text-h5" }, " 22k "),
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("div", { class: "text-sm text-success" }, " +15% "),
                      createVNode(VIcon, {
                        icon: "ri-arrow-up-s-line",
                        size: "20",
                        color: "success"
                      })
                    ])
                  ]),
                  createVNode("span", null, "Total Orders")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, { class: "d-flex align-center gap-4 py-7" }, {
            default: withCtx(() => [
              createVNode(VProgressCircular, {
                size: 64,
                width: 6,
                "model-value": 70,
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-macbook-line",
                    size: "24"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                  createVNode("h5", { class: "text-h5" }, " 84k "),
                  createVNode("div", { class: "text-error d-flex align-center" }, [
                    createVNode("span", { class: "text-sm" }, "-24%"),
                    createVNode(VIcon, {
                      icon: "ri-arrow-down-s-line",
                      size: "20"
                    })
                  ])
                ]),
                createVNode("div", null, "Total Impressions")
              ])
            ]),
            _: 1
          }),
          createVNode(VDivider),
          createVNode(VCardText, { class: "d-flex align-center gap-4 py-7" }, {
            default: withCtx(() => [
              createVNode(VProgressCircular, {
                size: 65,
                width: 6,
                "model-value": 40,
                color: "warning"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-handbag-line",
                    size: "24"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                  createVNode("h5", { class: "text-h5" }, " 22k "),
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("div", { class: "text-sm text-success" }, " +15% "),
                    createVNode(VIcon, {
                      icon: "ri-arrow-up-s-line",
                      size: "20",
                      color: "success"
                    })
                  ])
                ]),
                createVNode("span", null, "Total Orders")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsOrdersImpressions.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CardStatisticsOrdersImpressions = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$9 = {
  __name: "CardStatisticsOverviewRadialBarCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [64];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      return {
        chart: { sparkline: { enabled: true } },
        stroke: { lineCap: "round" },
        colors: [currentTheme.primary],
        plotOptions: {
          radialBar: {
            hollow: { size: "55%" },
            track: { background: `rgba(${hexToRgb(String(currentTheme["grey-100"]))}, 1)` },
            dataLabels: {
              name: { show: false },
              value: {
                offsetY: 5,
                fontWeight: 600,
                fontSize: "1rem",
                color: `rgba(${hexToRgb(currentTheme["on-surface"])},${variableTheme["high-emphasis-opacity"]})`
              }
            }
          }
        },
        grid: { padding: { bottom: -12 } },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $67.1k </h5><div class="text-body-1 text-success"${_scopeId2}> +49% </div></div><div class="text-subtitle-1"${_scopeId2}> Overview </div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $67.1k "),
                      createVNode("div", { class: "text-body-1 text-success" }, " +49% ")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Overview ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "radialBar",
                    options: unref(chartOptions),
                    series,
                    height: 119
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "radialBar",
                      options: unref(chartOptions),
                      series,
                      height: 119
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $67.1k "),
                    createVNode("div", { class: "text-body-1 text-success" }, " +49% ")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Overview ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "radialBar",
                    options: unref(chartOptions),
                    series,
                    height: 119
                  }, null, 8, ["options"])
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsOverviewRadialBarCharts.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "CardStatisticsProfitBarWithGapCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = computed(() => vuetifyTheme.current.value.colors);
    const series = [
      {
        name: "Earning",
        data: [
          180,
          120,
          284,
          180,
          102
        ]
      },
      {
        name: "Expense",
        data: [
          -100,
          -130,
          -100,
          -60,
          -120
        ]
      }
    ];
    const chartOptions = computed(() => {
      return {
        chart: {
          type: "bar",
          stacked: true,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        grid: {
          show: false,
          padding: {
            top: -10,
            left: -15,
            right: 0,
            bottom: 5
          },
          yaxis: { lines: { show: false } }
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May"
          ]
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        colors: [
          currentTheme.value["on-background"],
          currentTheme.value.error
        ],
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: "25%",
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "all"
          }
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        yaxis: { labels: { show: false } },
        stroke: { lineCap: "round" },
        tooltip: { enabled: false },
        responsive: [{
          breakpoint: 600,
          options: {
            chart: { height: 200 },
            grid: {
              padding: {
                top: -12,
                left: -15,
                right: 0,
                bottom: -10
              }
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                columnWidth: "20%",
                borderRadiusApplication: "around",
                borderRadiusWhenStacked: "all"
              }
            }
          }
        }]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $88.5k </h5><span class="text-error text-body-1"${_scopeId2}>-18%</span></div><div class="text-subtitle-1"${_scopeId2}> Total Profit </div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $88.5k "),
                      createVNode("span", { class: "text-error text-body-1" }, "-18%")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Total Profit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    id: "sessions-chart",
                    type: "bar",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      id: "sessions-chart",
                      type: "bar",
                      options: unref(chartOptions),
                      series,
                      height: 108
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $88.5k "),
                    createVNode("span", { class: "text-error text-body-1" }, "-18%")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Total Profit ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    id: "sessions-chart",
                    type: "bar",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, 8, ["options"])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsProfitBarWithGapCharts.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CardStatisticsProfitCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const seriesSales = [{
      data: [
        0,
        15,
        0,
        17,
        5,
        30
      ]
    }];
    const seriesProfit = [{
      data: [
        5,
        25,
        0,
        30,
        15,
        30
      ]
    }];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      return {
        sales: {
          chart: {
            parentHeightOffset: 0,
            toolbar: { show: false }
          },
          grid: {
            show: false,
            padding: { left: -7 }
          },
          tooltip: { enabled: false },
          colors: [currentTheme.warning],
          markers: {
            size: 5,
            offsetY: 1,
            offsetX: -2,
            strokeWidth: 2,
            strokeOpacity: 1,
            colors: ["transparent"],
            strokeColors: "transparent",
            discrete: [{
              size: 5,
              seriesIndex: 0,
              strokeColor: currentTheme.warning,
              fillColor: currentTheme.surface,
              dataPointIndex: seriesSales[0].data.length - 1
            }]
          },
          stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round"
          },
          xaxis: {
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false }
          },
          yaxis: { labels: { show: false } }
        },
        profit: {
          chart: {
            parentHeightOffset: 0,
            toolbar: { show: false }
          },
          grid: {
            show: false,
            padding: { left: -5 }
          },
          tooltip: { enabled: false },
          colors: [currentTheme.error],
          markers: {
            size: 5,
            offsetY: 0,
            offsetX: -2,
            strokeWidth: 2,
            strokeOpacity: 1,
            colors: ["transparent"],
            strokeColors: "transparent",
            discrete: [{
              size: 5,
              seriesIndex: 0,
              strokeColor: currentTheme.error,
              fillColor: currentTheme.surface,
              dataPointIndex: seriesSales[0].data.length - 1
            }]
          },
          stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round"
          },
          xaxis: {
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false }
          },
          yaxis: { labels: { show: false } }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      "align-self": "center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><h5 class="text-h5"${_scopeId6}> 152k </h5><div class="d-flex align-center my-1"${_scopeId6}><div class="text-success text-sm"${_scopeId6}> 18.2% </div>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "ri-arrow-up-s-line",
                                            size: "20",
                                            color: "success"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div></div><div class="text-body-1"${_scopeId6}> Total Sales </div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("h5", { class: "text-h5" }, " 152k "),
                                              createVNode("div", { class: "d-flex align-center my-1" }, [
                                                createVNode("div", { class: "text-success text-sm" }, " 18.2% "),
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-up-s-line",
                                                  size: "20",
                                                  color: "success"
                                                })
                                              ])
                                            ]),
                                            createVNode("div", { class: "text-body-1" }, " Total Sales ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_VueApexCharts, {
                                            type: "line",
                                            options: unref(chartOptions).sales,
                                            series: seriesSales,
                                            height: 82
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_VueApexCharts, {
                                              type: "line",
                                              options: unref(chartOptions).sales,
                                              series: seriesSales,
                                              height: 82
                                            }, null, 8, ["options"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "6",
                                        "align-self": "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("h5", { class: "text-h5" }, " 152k "),
                                            createVNode("div", { class: "d-flex align-center my-1" }, [
                                              createVNode("div", { class: "text-success text-sm" }, " 18.2% "),
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-up-s-line",
                                                size: "20",
                                                color: "success"
                                              })
                                            ])
                                          ]),
                                          createVNode("div", { class: "text-body-1" }, " Total Sales ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VueApexCharts, {
                                            type: "line",
                                            options: unref(chartOptions).sales,
                                            series: seriesSales,
                                            height: 82
                                          }, null, 8, ["options"])
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
                                      cols: "6",
                                      "align-self": "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("h5", { class: "text-h5" }, " 152k "),
                                          createVNode("div", { class: "d-flex align-center my-1" }, [
                                            createVNode("div", { class: "text-success text-sm" }, " 18.2% "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-up-s-line",
                                              size: "20",
                                              color: "success"
                                            })
                                          ])
                                        ]),
                                        createVNode("div", { class: "text-body-1" }, " Total Sales ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VueApexCharts, {
                                          type: "line",
                                          options: unref(chartOptions).sales,
                                          series: seriesSales,
                                          height: 82
                                        }, null, 8, ["options"])
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
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "6",
                                    "align-self": "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("h5", { class: "text-h5" }, " 152k "),
                                        createVNode("div", { class: "d-flex align-center my-1" }, [
                                          createVNode("div", { class: "text-success text-sm" }, " 18.2% "),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-up-s-line",
                                            size: "20",
                                            color: "success"
                                          })
                                        ])
                                      ]),
                                      createVNode("div", { class: "text-body-1" }, " Total Sales ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VueApexCharts, {
                                        type: "line",
                                        options: unref(chartOptions).sales,
                                        series: seriesSales,
                                        height: 82
                                      }, null, 8, ["options"])
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
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      "align-self": "center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><h5 class="text-h5"${_scopeId6}> 89.5k </h5><div class="d-flex align-center my-1"${_scopeId6}><div class="text-error text-sm"${_scopeId6}> -8% </div>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "ri-arrow-down-s-line",
                                            size: "20",
                                            color: "error"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div></div><div class="text-body-1"${_scopeId6}> Total Profit </div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("h5", { class: "text-h5" }, " 89.5k "),
                                              createVNode("div", { class: "d-flex align-center my-1" }, [
                                                createVNode("div", { class: "text-error text-sm" }, " -8% "),
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-down-s-line",
                                                  size: "20",
                                                  color: "error"
                                                })
                                              ])
                                            ]),
                                            createVNode("div", { class: "text-body-1" }, " Total Profit ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_VueApexCharts, {
                                            type: "line",
                                            options: unref(chartOptions).profit,
                                            series: seriesProfit,
                                            height: 82
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_VueApexCharts, {
                                              type: "line",
                                              options: unref(chartOptions).profit,
                                              series: seriesProfit,
                                              height: 82
                                            }, null, 8, ["options"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "6",
                                        "align-self": "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("h5", { class: "text-h5" }, " 89.5k "),
                                            createVNode("div", { class: "d-flex align-center my-1" }, [
                                              createVNode("div", { class: "text-error text-sm" }, " -8% "),
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-down-s-line",
                                                size: "20",
                                                color: "error"
                                              })
                                            ])
                                          ]),
                                          createVNode("div", { class: "text-body-1" }, " Total Profit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VueApexCharts, {
                                            type: "line",
                                            options: unref(chartOptions).profit,
                                            series: seriesProfit,
                                            height: 82
                                          }, null, 8, ["options"])
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
                                      cols: "6",
                                      "align-self": "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("h5", { class: "text-h5" }, " 89.5k "),
                                          createVNode("div", { class: "d-flex align-center my-1" }, [
                                            createVNode("div", { class: "text-error text-sm" }, " -8% "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-down-s-line",
                                              size: "20",
                                              color: "error"
                                            })
                                          ])
                                        ]),
                                        createVNode("div", { class: "text-body-1" }, " Total Profit ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VueApexCharts, {
                                          type: "line",
                                          options: unref(chartOptions).profit,
                                          series: seriesProfit,
                                          height: 82
                                        }, null, 8, ["options"])
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
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "6",
                                    "align-self": "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("h5", { class: "text-h5" }, " 89.5k "),
                                        createVNode("div", { class: "d-flex align-center my-1" }, [
                                          createVNode("div", { class: "text-error text-sm" }, " -8% "),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-down-s-line",
                                            size: "20",
                                            color: "error"
                                          })
                                        ])
                                      ]),
                                      createVNode("div", { class: "text-body-1" }, " Total Profit ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VueApexCharts, {
                                        type: "line",
                                        options: unref(chartOptions).profit,
                                        series: seriesProfit,
                                        height: 82
                                      }, null, 8, ["options"])
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "6",
                                  "align-self": "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5" }, " 152k "),
                                      createVNode("div", { class: "d-flex align-center my-1" }, [
                                        createVNode("div", { class: "text-success text-sm" }, " 18.2% "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-up-s-line",
                                          size: "20",
                                          color: "success"
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-body-1" }, " Total Sales ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VueApexCharts, {
                                      type: "line",
                                      options: unref(chartOptions).sales,
                                      series: seriesSales,
                                      height: 82
                                    }, null, 8, ["options"])
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
                    createVNode(VDivider),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "6",
                                  "align-self": "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5" }, " 89.5k "),
                                      createVNode("div", { class: "d-flex align-center my-1" }, [
                                        createVNode("div", { class: "text-error text-sm" }, " -8% "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-down-s-line",
                                          size: "20",
                                          color: "error"
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-body-1" }, " Total Profit ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VueApexCharts, {
                                      type: "line",
                                      options: unref(chartOptions).profit,
                                      series: seriesProfit,
                                      height: 82
                                    }, null, 8, ["options"])
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
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "6",
                                "align-self": "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, " 152k "),
                                    createVNode("div", { class: "d-flex align-center my-1" }, [
                                      createVNode("div", { class: "text-success text-sm" }, " 18.2% "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-up-s-line",
                                        size: "20",
                                        color: "success"
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "text-body-1" }, " Total Sales ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VueApexCharts, {
                                    type: "line",
                                    options: unref(chartOptions).sales,
                                    series: seriesSales,
                                    height: 82
                                  }, null, 8, ["options"])
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
                  createVNode(VDivider),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "6",
                                "align-self": "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, " 89.5k "),
                                    createVNode("div", { class: "d-flex align-center my-1" }, [
                                      createVNode("div", { class: "text-error text-sm" }, " -8% "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-down-s-line",
                                        size: "20",
                                        color: "error"
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "text-body-1" }, " Total Profit ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VueApexCharts, {
                                    type: "line",
                                    options: unref(chartOptions).profit,
                                    series: seriesProfit,
                                    height: 82
                                  }, null, 8, ["options"])
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsProfitCharts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "CardStatisticsSalesMonthCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = vuetifyTheme.current.value.colors;
    const series = [{
      data: [
        12,
        12,
        18,
        18,
        13,
        13,
        5,
        5,
        17,
        17,
        25,
        25
      ]
    }];
    const chartOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false },
        dropShadow: {
          top: 14,
          blur: 4,
          left: 0,
          enabled: true,
          opacity: 0.12,
          color: currentTheme.primary
        }
      },
      tooltip: { enabled: false },
      grid: {
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -12,
          left: -2,
          right: 8,
          bottom: -10
        }
      },
      stroke: {
        width: 5,
        lineCap: "round"
      },
      markers: { size: 0 },
      colors: [currentTheme.primary],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: {
        min: 0,
        labels: { show: false }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Sales this month" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-0"${_scopeId2}> Total Sales This Month </p><h5 class="text-h5"${_scopeId2}> $28,450 </h5>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "line",
                    height: 100,
                    options: chartOptions,
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", { class: "mb-0" }, " Total Sales This Month "),
                    createVNode("h5", { class: "text-h5" }, " $28,450 "),
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      height: 100,
                      options: chartOptions,
                      series
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-0" }, " Total Sales This Month "),
                  createVNode("h5", { class: "text-h5" }, " $28,450 "),
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    height: 100,
                    options: chartOptions,
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsSalesMonthCharts.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "CardStatisticsSalesOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const statistics = [
      {
        title: "Customers",
        stats: "8,458",
        icon: "ri-user-star-line",
        color: "primary"
      },
      {
        title: "Total Profit",
        stats: "$28.5k",
        icon: "ri-pie-chart-2-line",
        color: "warning"
      },
      {
        title: "Transactions",
        stats: "2,450k",
        icon: "ri-arrow-left-right-line",
        color: "info"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$g;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-n7 me-n3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-n7 me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sales Overview`);
                      } else {
                        return [
                          createTextVNode("Sales Overview")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, { class: "d-flex align-center gap-x-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total 42.5k Sales <div class="d-flex align-center text-success font-weight-medium"${_scopeId3}> +18% `);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-arrow-up-s-line",
                          size: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createTextVNode(" Total 42.5k Sales "),
                          createVNode("div", { class: "d-flex align-center text-success font-weight-medium" }, [
                            createTextVNode(" +18% "),
                            createVNode(VIcon, {
                              icon: "ri-arrow-up-s-line",
                              size: "20"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Sales Overview")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, { class: "d-flex align-center gap-x-2" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total 42.5k Sales "),
                        createVNode("div", { class: "d-flex align-center text-success font-weight-medium" }, [
                          createTextVNode(" +18% "),
                          createVNode(VIcon, {
                            icon: "ri-arrow-up-s-line",
                            size: "20"
                          })
                        ])
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
                  _push3(`<div class="d-flex justify-space-between flex-column flex-sm-row gap-4 flex-wrap"${_scopeId2}><!--[-->`);
                  ssrRenderList(statistics, (item) => {
                    _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      color: item.color,
                      rounded: "",
                      variant: "tonal",
                      size: "40",
                      class: "me-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            size: "24",
                            icon: item.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              size: "24",
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex flex-column"${_scopeId2}><h5 class="text-h5"${_scopeId2}>${ssrInterpolate(item.stats)}</h5><div class="text-body-1"${_scopeId2}>${ssrInterpolate(item.title)}</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 flex-wrap" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                        return createVNode("div", {
                          key: item.title,
                          class: "d-flex align-center"
                        }, [
                          createVNode(VAvatar, {
                            color: item.color,
                            rounded: "",
                            variant: "tonal",
                            size: "40",
                            class: "me-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "24",
                                icon: item.icon
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "mt-n7 me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Sales Overview")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, { class: "d-flex align-center gap-x-2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total 42.5k Sales "),
                      createVNode("div", { class: "d-flex align-center text-success font-weight-medium" }, [
                        createTextVNode(" +18% "),
                        createVNode(VIcon, {
                          icon: "ri-arrow-up-s-line",
                          size: "20"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 flex-wrap" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                      return createVNode("div", {
                        key: item.title,
                        class: "d-flex align-center"
                      }, [
                        createVNode(VAvatar, {
                          color: item.color,
                          rounded: "",
                          variant: "tonal",
                          size: "40",
                          class: "me-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "24",
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["color"]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1),
                          createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsSalesOverview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "CardStatisticsSmoothLineCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = vuetifyTheme.current.value.colors;
    const series = [{
      data: [
        0,
        30,
        10,
        70,
        40,
        110,
        95
      ]
    }];
    const chartOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      grid: {
        show: false,
        padding: {
          left: -5,
          top: -15,
          right: 5,
          bottom: -10
        }
      },
      colors: [currentTheme.warning],
      tooltip: { enabled: false },
      stroke: {
        width: 4,
        curve: "smooth",
        lineCap: "round"
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { labels: { show: false } }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $22.6k </h5><div class="text-error"${_scopeId2}> +38% </div></div><div class="text-subtitle-1"${_scopeId2}> Total Sales </div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $22.6k "),
                      createVNode("div", { class: "text-error" }, " +38% ")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Total Sales ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "line",
                    height: 108,
                    options: chartOptions,
                    series
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      height: 108,
                      options: chartOptions,
                      series
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $22.6k "),
                    createVNode("div", { class: "text-error" }, " +38% ")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Total Sales ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    height: 108,
                    options: chartOptions,
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsSmoothLineCharts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CardStatisticsTotalProfitLineCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [{
      data: [
        0,
        20,
        5,
        30,
        15,
        45
      ]
    }];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        grid: {
          borderColor: `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`,
          strokeDashArray: 6,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: {
            top: -15,
            left: -7,
            right: 7,
            bottom: -15
          }
        },
        stroke: { width: 3 },
        colors: [currentTheme.primary],
        markers: {
          size: 6,
          offsetY: 2,
          offsetX: -1,
          strokeWidth: 3,
          colors: ["transparent"],
          strokeColors: "transparent",
          discrete: [{
            size: 6,
            seriesIndex: 0,
            strokeColor: currentTheme.primary,
            fillColor: currentTheme.surface,
            dataPointIndex: series[0].data.length - 1
          }],
          hover: { size: 7 }
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { labels: { show: false } }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $38.5k </h5><span class="text-success text-body-1"${_scopeId2}>+62%</span></div><div class="text-subtitle-1"${_scopeId2}> Sessions </div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $38.5k "),
                      createVNode("span", { class: "text-success text-body-1" }, "+62%")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Sessions ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "line",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      options: unref(chartOptions),
                      series,
                      height: 108
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $38.5k "),
                    createVNode("span", { class: "text-success text-body-1" }, "+62%")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Sessions ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, 8, ["options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsTotalProfitLineCharts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CardStatisticsTotalRevenueBarCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const series = [
      {
        name: "Earning",
        data: [
          120,
          200,
          150,
          120
        ]
      },
      {
        name: "Expense",
        data: [
          72,
          120,
          50,
          65
        ]
      }
    ];
    const chartOptions = computed(() => {
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        grid: {
          padding: {
            top: -15,
            left: -14,
            right: -4,
            bottom: -15
          },
          yaxis: { lines: { show: false } }
        },
        legend: { show: false },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
        colors: [
          "rgba(var(--v-theme-primary),1)",
          "rgba(var(--v-theme-warning),1)"
        ],
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "48%",
            borderRadiusApplication: "start",
            borderRadiusWhenStacked: "last"
          }
        },
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr"
          ]
        },
        yaxis: { labels: { show: false } }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}><h5 class="text-h5"${_scopeId2}> $42.5k </h5><div class="text-error text-body-1"${_scopeId2}> -22% </div></div><div class="text-subtitle-1"${_scopeId2}> Total Revenue </div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      createVNode("h5", { class: "text-h5" }, " $42.5k "),
                      createVNode("div", { class: "text-error text-body-1" }, " -22% ")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Total Revenue ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "bar",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      options: unref(chartOptions),
                      series,
                      height: 108
                    }, null, 8, ["options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    createVNode("h5", { class: "text-h5" }, " $42.5k "),
                    createVNode("div", { class: "text-error text-body-1" }, " -22% ")
                  ]),
                  createVNode("div", { class: "text-subtitle-1" }, " Total Revenue ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    options: unref(chartOptions),
                    series,
                    height: 108
                  }, null, 8, ["options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsTotalRevenueBarCharts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div class="text-body-1"${_scopeId2}> Total Visits </div><div class="d-flex justify-center"${_scopeId2}><span class="text-success"${_scopeId2}>+18.2%</span>`);
              _push3(ssrRenderComponent(VIcon, {
                icon: "ri-arrow-up-s-line",
                color: "success",
                size: "20"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><h4 class="text-h4"${_scopeId2}> $42.5k </h4>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                  createVNode("div", { class: "text-body-1" }, " Total Visits "),
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode("span", { class: "text-success" }, "+18.2%"),
                    createVNode(VIcon, {
                      icon: "ri-arrow-up-s-line",
                      color: "success",
                      size: "20"
                    })
                  ])
                ]),
                createVNode("h4", { class: "text-h4" }, " $42.5k ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { cols: "5" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="d-flex align-center mb-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VAvatar, {
                            rounded: "",
                            color: "warning",
                            variant: "tonal",
                            size: 24,
                            class: "me-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, {
                                  size: "16",
                                  icon: "ri-pie-chart-2-line"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-pie-chart-2-line"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<span${_scopeId4}>Mobile</span></div><h4 class="text-h4 mb-2"${_scopeId4}> 23.5% </h4><div class="text-body-1"${_scopeId4}> 2,890 </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center mb-2" }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                color: "warning",
                                variant: "tonal",
                                size: 24,
                                class: "me-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-pie-chart-2-line"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "Mobile")
                            ]),
                            createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                            createVNode("div", { class: "text-body-1" }, " 2,890 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { cols: "2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="d-flex flex-column justify-center align-center h-100"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "mx-auto mb-2"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VAvatar, {
                            size: "28",
                            variant: "tonal",
                            class: "text-body-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` VS `);
                              } else {
                                return [
                                  createTextVNode(" VS ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "mx-auto mt-2"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                              createVNode(VDivider, {
                                vertical: "",
                                class: "mx-auto mb-2"
                              }),
                              createVNode(VAvatar, {
                                size: "28",
                                variant: "tonal",
                                class: "text-body-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" VS ")
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, {
                                vertical: "",
                                class: "mx-auto mt-2"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "5",
                      class: "text-end"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="d-flex align-center justify-end mb-2"${_scopeId4}><span class="me-2"${_scopeId4}>Desktop</span>`);
                          _push5(ssrRenderComponent(VAvatar, {
                            rounded: "sm",
                            color: "primary",
                            variant: "tonal",
                            size: 24
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, {
                                  size: "16",
                                  icon: "ri-mac-line"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-mac-line"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div><h4 class="text-h4 mb-2"${_scopeId4}> 23.5% </h4><div class="text-body-1"${_scopeId4}> 2,890 </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                              createVNode("span", { class: "me-2" }, "Desktop"),
                              createVNode(VAvatar, {
                                rounded: "sm",
                                color: "primary",
                                variant: "tonal",
                                size: 24
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "16",
                                    icon: "ri-mac-line"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                            createVNode("div", { class: "text-body-1" }, " 2,890 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { cols: "5" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center mb-2" }, [
                            createVNode(VAvatar, {
                              rounded: "",
                              color: "warning",
                              variant: "tonal",
                              size: 24,
                              class: "me-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "16",
                                  icon: "ri-pie-chart-2-line"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "Mobile")
                          ]),
                          createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                          createVNode("div", { class: "text-body-1" }, " 2,890 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "2" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                            createVNode(VDivider, {
                              vertical: "",
                              class: "mx-auto mb-2"
                            }),
                            createVNode(VAvatar, {
                              size: "28",
                              variant: "tonal",
                              class: "text-body-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" VS ")
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, {
                              vertical: "",
                              class: "mx-auto mt-2"
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "5",
                        class: "text-end"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                            createVNode("span", { class: "me-2" }, "Desktop"),
                            createVNode(VAvatar, {
                              rounded: "sm",
                              color: "primary",
                              variant: "tonal",
                              size: 24
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "16",
                                  icon: "ri-mac-line"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                          createVNode("div", { class: "text-body-1" }, " 2,890 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(VProgressLinear, {
                "model-value": "25",
                color: "warning",
                "bg-color": "primary",
                "bg-opacity": "1",
                "rounded-bar": false,
                height: "8",
                rounded: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode(VRow, { "no-gutters": "" }, {
                  default: withCtx(() => [
                    createVNode(VCol, { cols: "5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center mb-2" }, [
                          createVNode(VAvatar, {
                            rounded: "",
                            color: "warning",
                            variant: "tonal",
                            size: 24,
                            class: "me-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "16",
                                icon: "ri-pie-chart-2-line"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Mobile")
                        ]),
                        createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                        createVNode("div", { class: "text-body-1" }, " 2,890 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                          createVNode(VDivider, {
                            vertical: "",
                            class: "mx-auto mb-2"
                          }),
                          createVNode(VAvatar, {
                            size: "28",
                            variant: "tonal",
                            class: "text-body-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" VS ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, {
                            vertical: "",
                            class: "mx-auto mt-2"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "5",
                      class: "text-end"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                          createVNode("span", { class: "me-2" }, "Desktop"),
                          createVNode(VAvatar, {
                            rounded: "sm",
                            color: "primary",
                            variant: "tonal",
                            size: 24
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "16",
                                icon: "ri-mac-line"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                        createVNode("div", { class: "text-body-1" }, " 2,890 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(VProgressLinear, {
                    "model-value": "25",
                    color: "warning",
                    "bg-color": "primary",
                    "bg-opacity": "1",
                    "rounded-bar": false,
                    height: "8",
                    rounded: ""
                  })
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
              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                createVNode("div", { class: "text-body-1" }, " Total Visits "),
                createVNode("div", { class: "d-flex justify-center" }, [
                  createVNode("span", { class: "text-success" }, "+18.2%"),
                  createVNode(VIcon, {
                    icon: "ri-arrow-up-s-line",
                    color: "success",
                    size: "20"
                  })
                ])
              ]),
              createVNode("h4", { class: "text-h4" }, " $42.5k ")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center mb-2" }, [
                        createVNode(VAvatar, {
                          rounded: "",
                          color: "warning",
                          variant: "tonal",
                          size: 24,
                          class: "me-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "16",
                              icon: "ri-pie-chart-2-line"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Mobile")
                      ]),
                      createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                      createVNode("div", { class: "text-body-1" }, " 2,890 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-column justify-center align-center h-100" }, [
                        createVNode(VDivider, {
                          vertical: "",
                          class: "mx-auto mb-2"
                        }),
                        createVNode(VAvatar, {
                          size: "28",
                          variant: "tonal",
                          class: "text-body-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" VS ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, {
                          vertical: "",
                          class: "mx-auto mt-2"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "5",
                    class: "text-end"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-end mb-2" }, [
                        createVNode("span", { class: "me-2" }, "Desktop"),
                        createVNode(VAvatar, {
                          rounded: "sm",
                          color: "primary",
                          variant: "tonal",
                          size: 24
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "16",
                              icon: "ri-mac-line"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", { class: "text-h4 mb-2" }, " 23.5% "),
                      createVNode("div", { class: "text-body-1" }, " 2,890 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-4" }, [
                createVNode(VProgressLinear, {
                  "model-value": "25",
                  color: "warning",
                  "bg-color": "primary",
                  "bg-opacity": "1",
                  "rounded-bar": false,
                  height: "8",
                  rounded: ""
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/card-statistics/CardStatisticsTotalVisits.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardStatisticsTotalVisits = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const illustration3 = "/build/assets/illustration-3-D0KALsuf.png";
const illustration4 = "/build/assets/illustration-4-DY72xFic.png";
const _sfc_main = {
  __name: "card-statistics",
  __ssrInlineRender: true,
  setup(__props) {
    const statisticsHorizontal = [
      {
        title: "New Customers",
        color: "primary",
        icon: "ri-user-star-line",
        stats: 2856,
        change: -8.1
      },
      {
        title: "Total Profit",
        color: "warning",
        icon: "ri-pie-chart-2-line",
        stats: 28500,
        change: 18.2
      },
      {
        title: "New Transactions",
        color: "info",
        icon: "ri-bank-card-line",
        stats: 2450,
        change: -24.6
      },
      {
        title: "Total Revenue",
        color: "success",
        icon: "ri-money-dollar-circle-line",
        stats: 48200,
        change: 22.5
      }
    ];
    const statisticsWithIcon = [
      {
        title: "Session",
        value: "21,459",
        change: 29,
        desc: "Total Users",
        icon: "ri-group-line",
        iconColor: "primary"
      },
      {
        title: "Paid Users",
        value: "4,567",
        change: 18,
        desc: "Last Week Analytics",
        icon: "ri-user-add-line",
        iconColor: "error"
      },
      {
        title: "Active Users",
        value: "19,860",
        change: -14,
        desc: "Last Week Analytics",
        icon: "ri-user-follow-line",
        iconColor: "success"
      },
      {
        title: "Pending Users",
        value: "237",
        change: 42,
        desc: "Last Week Analytics",
        icon: "ri-user-search-line",
        iconColor: "warning"
      }
    ];
    const statisticsVertical = [
      {
        title: "Total Orders",
        color: "primary",
        icon: "ri-shopping-cart-line",
        stats: "155k",
        change: 22,
        subtitle: "Last 4 months"
      },
      {
        title: "Total Profit",
        color: "warning",
        icon: "ri-money-dollar-circle-line",
        stats: "$89.34k",
        change: -18,
        subtitle: "Last One Year"
      },
      {
        title: "Total Impressions",
        color: "info",
        icon: "ri-links-line",
        stats: "$142.8k",
        change: 62,
        subtitle: "Last One Year"
      },
      {
        title: "Total Sales",
        color: "success",
        icon: "ri-handbag-line",
        stats: "13.4k",
        change: 38,
        subtitle: "Last Six months"
      },
      {
        title: "Total Expenses",
        color: "error",
        icon: "ri-bank-card-line",
        stats: "8.16k",
        change: -16,
        subtitle: "Last one month"
      },
      {
        title: "Transactions",
        color: "secondary",
        icon: "ri-pie-chart-2-line",
        stats: "2.55k",
        change: 38,
        subtitle: "Last One Year"
      }
    ];
    const statisticsWithImages = [
      {
        title: "Ratings",
        subtitle: "Year of 2021",
        stats: "8.14k",
        change: 15.6,
        image: illustration1,
        color: "primary"
      },
      {
        title: "Sessions",
        subtitle: "Last Month",
        stats: "12.2k",
        change: -25.5,
        image: illustration2,
        color: "success"
      },
      {
        title: "Customers",
        subtitle: "Daily Customers",
        stats: "42.4k",
        change: 9.2,
        image: illustration3,
        color: "warning"
      },
      {
        title: "Total Orders",
        subtitle: "Last Week",
        stats: "4.25k",
        change: 10.8,
        image: illustration4,
        color: "secondary"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardStatisticsHorizontal = _sfc_main$e;
      const _component_CardStatisticsWithIcon = _sfc_main$f;
      const _component_CardStatisticsWithImages = _sfc_main$h;
      const _component_CardStatisticsVertical = _sfc_main$i;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, { class: "match-height" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(statisticsHorizontal, (statistics) => {
              _push2(ssrRenderComponent(VCol, {
                key: statistics.title,
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardStatisticsHorizontal, mergeProps({ ref_for: true }, statistics), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardStatisticsHorizontal, mergeProps({ ref_for: true }, statistics), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(statisticsWithIcon, (statistics) => {
              _push2(ssrRenderComponent(VCol, {
                key: statistics.title,
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardStatisticsWithIcon, mergeProps({ ref_for: true }, statistics), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardStatisticsWithIcon, mergeProps({ ref_for: true }, statistics), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(statisticsWithImages, (statistics) => {
              _push2(ssrRenderComponent(VCol, {
                key: statistics.title,
                cols: "12",
                lg: "3",
                sm: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardStatisticsWithImages, mergeProps({ ref_for: true }, statistics), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardStatisticsWithImages, mergeProps({ ref_for: true }, statistics), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardStatisticsLogistics, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardStatisticsLogistics)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(statisticsVertical, (statistics) => {
              _push2(ssrRenderComponent(VCol, {
                key: statistics.title,
                cols: "12",
                sm: "4",
                lg: "2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardStatisticsVertical, mergeProps({ ref_for: true }, statistics), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardStatisticsVertical, mergeProps({ ref_for: true }, statistics), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              lg: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              lg: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardStatisticsTotalVisits, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardStatisticsTotalVisits)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              lg: "3"
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
              sm: "6",
              lg: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardStatisticsOrdersImpressions, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardStatisticsOrdersImpressions)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "2"
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
              sm: "6",
              md: "4",
              lg: "2"
            }, {
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "2"
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$d, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$d)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(statisticsHorizontal, (statistics) => {
                return createVNode(VCol, {
                  key: statistics.title,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardStatisticsHorizontal, mergeProps({ ref_for: true }, statistics), null, 16)
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              (openBlock(), createBlock(Fragment, null, renderList(statisticsWithIcon, (statistics) => {
                return createVNode(VCol, {
                  key: statistics.title,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardStatisticsWithIcon, mergeProps({ ref_for: true }, statistics), null, 16)
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              (openBlock(), createBlock(Fragment, null, renderList(statisticsWithImages, (statistics) => {
                return createVNode(VCol, {
                  key: statistics.title,
                  cols: "12",
                  lg: "3",
                  sm: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardStatisticsWithImages, mergeProps({ ref_for: true }, statistics), null, 16)
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(CardStatisticsLogistics)
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Fragment, null, renderList(statisticsVertical, (statistics) => {
                return createVNode(VCol, {
                  key: statistics.title,
                  cols: "12",
                  sm: "4",
                  lg: "2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardStatisticsVertical, mergeProps({ ref_for: true }, statistics), null, 16)
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                lg: "3"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                lg: "3"
              }, {
                default: withCtx(() => [
                  createVNode(CardStatisticsTotalVisits)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                lg: "3"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                lg: "3"
              }, {
                default: withCtx(() => [
                  createVNode(CardStatisticsOrdersImpressions)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d)
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
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$c, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$c)
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
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
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
                  createVNode(_sfc_main$c)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/cards/card-statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
