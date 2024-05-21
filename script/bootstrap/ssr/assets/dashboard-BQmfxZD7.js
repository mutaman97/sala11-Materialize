import __unplugin_components_0 from "vue3-apexcharts";
import { withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, unref, ref, withAsyncContext, computed, resolveComponent, isRef, createElementBlock, createElementVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./MoreBtn-CtW8Gck8.js";
import { _ as _export_sfc, b as VProgressCircular, V as VBtn, a as VIcon, c as avatar1, d as avatar2, e as avatar3, f as avatar4, g as VProgressLinear } from "../ssr.js";
import { V as VCard, a as VCardItem } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VList, a as VListItem, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
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
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
/* empty css               */
import "./VSlideGroup-Bvz86g7R.js";
import "ufo";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$6 = {
  __name: "AcademyAssignmentProgress",
  __ssrInlineRender: true,
  setup(__props) {
    const assignmentData = [
      {
        title: "User Experience Design",
        tasks: 120,
        progress: 72,
        color: "primary"
      },
      {
        title: "Basic fundamentals",
        tasks: 32,
        progress: 48,
        color: "success"
      },
      {
        title: "React Native components",
        tasks: 182,
        progress: 15,
        color: "error"
      },
      {
        title: "Basic of music theory",
        tasks: 56,
        progress: 24,
        color: "info"
      }
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
      const _component_MoreBtn = _sfc_main$7;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Assignment progress",
              class: "pb-10"
            }, {
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
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(assignmentData, (assignment) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: assignment.title
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VProgressCircular, {
                                  modelValue: assignment.progress,
                                  "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                  size: 54,
                                  class: "me-4",
                                  color: assignment.color
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-h6" data-v-ee40b008${_scopeId5}>${ssrInterpolate(assignment.progress)}% </h6>`);
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VProgressCircular, {
                                    modelValue: assignment.progress,
                                    "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                    size: 54,
                                    class: "me-4",
                                    color: assignment.color
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h6 me-4 mb-2 text-truncate" data-v-ee40b008${_scopeId4}>${ssrInterpolate(assignment.title)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "tonal",
                                  color: "secondary",
                                  class: "rounded",
                                  size: "34"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-arrow-right-s-line",
                                        size: "20",
                                        class: "flip-in-rtl"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-s-line",
                                          size: "20",
                                          class: "flip-in-rtl"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    variant: "tonal",
                                    color: "secondary",
                                    class: "rounded",
                                    size: "34"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-s-line",
                                        size: "20",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(assignment.tasks)} Tasks`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(assignmentData, (assignment) => {
                            return createVNode(VListItem, {
                              key: assignment.title
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VProgressCircular, {
                                  modelValue: assignment.progress,
                                  "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                  size: 54,
                                  class: "me-4",
                                  color: assignment.color
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                              ]),
                              title: withCtx(() => [
                                createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                              ]),
                              append: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  color: "secondary",
                                  class: "rounded",
                                  size: "34"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-s-line",
                                      size: "20",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
                        (openBlock(), createBlock(Fragment, null, renderList(assignmentData, (assignment) => {
                          return createVNode(VListItem, {
                            key: assignment.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VProgressCircular, {
                                modelValue: assignment.progress,
                                "onUpdate:modelValue": ($event) => assignment.progress = $event,
                                size: 54,
                                class: "me-4",
                                color: assignment.color
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                            ]),
                            title: withCtx(() => [
                              createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                            ]),
                            append: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "secondary",
                                class: "rounded",
                                size: "34"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-right-s-line",
                                    size: "20",
                                    class: "flip-in-rtl"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
                title: "Assignment progress",
                class: "pb-10"
              }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(assignmentData, (assignment) => {
                        return createVNode(VListItem, {
                          key: assignment.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VProgressCircular, {
                              modelValue: assignment.progress,
                              "onUpdate:modelValue": ($event) => assignment.progress = $event,
                              size: 54,
                              class: "me-4",
                              color: assignment.color
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(assignment.progress) + "% ", 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "color"])
                          ]),
                          title: withCtx(() => [
                            createVNode("div", { class: "text-h6 me-4 mb-2 text-truncate" }, toDisplayString(assignment.title), 1)
                          ]),
                          append: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "secondary",
                              class: "rounded",
                              size: "34"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-s-line",
                                  size: "20",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(assignment.tasks) + " Tasks", 1)
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyAssignmentProgress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AcademyAssignmentProgress = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-ee40b008"]]);
const borderColor = "rgba(var(--v-border-color), var(--v-border-opacity))";
const _sfc_main$5 = {
  __name: "AcademyCardInterestedTopics",
  __ssrInlineRender: true,
  setup(__props) {
    const topicsChartConfig = {
      chart: {
        height: 270,
        type: "bar",
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "70%",
          distributed: true,
          borderRadius: 7,
          borderRadiusApplication: "end"
        }
      },
      colors: [
        "rgba(var(--v-theme-primary),1)",
        "rgba(var(--v-theme-info),1)",
        "rgba(var(--v-theme-success),1)",
        "rgba(var(--v-theme-secondary),1)",
        "rgba(var(--v-theme-error),1)",
        "rgba(var(--v-theme-warning),1)"
      ],
      grid: {
        borderColor,
        strokeDashArray: 10,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -35,
          bottom: -12
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"],
          fontWeight: 500,
          fontSize: "13px"
        },
        offsetX: 0,
        dropShadow: { enabled: false },
        formatter(val, opt) {
          return topicsChartConfig.labels[opt.dataPointIndex];
        }
      },
      labels: [
        "UI Design",
        "UX Design",
        "Music",
        "Animation",
        "Vue",
        "SEO"
      ],
      xaxis: {
        categories: [
          "6",
          "5",
          "4",
          "3",
          "2",
          "1"
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: "rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",
            fontSize: "13px"
          },
          formatter(val) {
            return `${val}%`;
          }
        }
      },
      yaxis: {
        max: 35,
        labels: {
          style: {
            colors: "rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",
            fontSize: "13px"
          }
        }
      },
      tooltip: {
        enabled: true,
        style: { fontSize: "12px" },
        onDatasetHover: { highlightDataSeries: false }
      },
      legend: { show: false }
    };
    const topicsChartSeries = [{
      data: [
        35,
        20,
        14,
        12,
        10,
        9
      ]
    }];
    const topicsData = [
      {
        title: "UI Design",
        value: 35,
        color: "primary"
      },
      {
        title: "UX Design",
        value: 20,
        color: "info"
      },
      {
        title: "Music",
        value: 14,
        color: "success"
      }
    ];
    const moreTopics = [
      {
        title: "Animation",
        value: 12,
        color: "secondary"
      },
      {
        title: "Vue",
        value: 10,
        color: "error"
      },
      {
        title: "SEO",
        value: 9,
        color: "warning"
      }
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
      const _component_MoreBtn = _sfc_main$7;
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Topic you are interested in" }, {
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
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VueApexCharts, {
                                type: "bar",
                                height: "268",
                                options: topicsChartConfig,
                                series: topicsChartSeries,
                                class: "mb-md-0 mb-6"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VueApexCharts, {
                                  type: "bar",
                                  height: "268",
                                  options: topicsChartConfig,
                                  series: topicsChartSeries,
                                  class: "mb-md-0 mb-6"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { class: "d-flex justify-space-around align-start" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column gap-y-12"${_scopeId4}><!--[-->`);
                              ssrRenderList(topicsData, (topic) => {
                                _push5(`<div class="d-flex gap-x-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div class="text-body-1" style="${ssrRenderStyle({ "min-inline-size": "90px" })}"${_scopeId4}>${ssrInterpolate(topic.title)}</div><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(topic.value)}% </h5></div></div>`);
                              });
                              _push5(`<!--]--></div><div class="d-flex flex-column gap-y-12"${_scopeId4}><!--[-->`);
                              ssrRenderList(moreTopics, (topic) => {
                                _push5(`<div class="d-flex gap-x-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div class="text-body-1" style="${ssrRenderStyle({ "min-inline-size": "90px" })}"${_scopeId4}>${ssrInterpolate(topic.title)}</div><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(topic.value)}% </h5></div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                                    return createVNode("div", {
                                      key: topic.title,
                                      class: "d-flex gap-x-2"
                                    }, [
                                      createVNode(VIcon, {
                                        icon: "ri-circle-fill",
                                        color: topic.color,
                                        size: "12",
                                        class: "mt-1"
                                      }, null, 8, ["color"]),
                                      createVNode("div", null, [
                                        createVNode("div", {
                                          class: "text-body-1",
                                          style: { "min-inline-size": "90px" }
                                        }, toDisplayString(topic.title), 1),
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                      ])
                                    ]);
                                  }), 64))
                                ]),
                                createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                                    return createVNode("div", {
                                      key: topic.title,
                                      class: "d-flex gap-x-2"
                                    }, [
                                      createVNode(VIcon, {
                                        icon: "ri-circle-fill",
                                        color: topic.color,
                                        size: "12",
                                        class: "mt-1"
                                      }, null, 8, ["color"]),
                                      createVNode("div", null, [
                                        createVNode("div", {
                                          class: "text-body-1",
                                          style: { "min-inline-size": "90px" }
                                        }, toDisplayString(topic.title), 1),
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                      ])
                                    ]);
                                  }), 64))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VueApexCharts, {
                                type: "bar",
                                height: "268",
                                options: topicsChartConfig,
                                series: topicsChartSeries,
                                class: "mb-md-0 mb-6"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "d-flex justify-space-around align-start" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                                  return createVNode("div", {
                                    key: topic.title,
                                    class: "d-flex gap-x-2"
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-circle-fill",
                                      color: topic.color,
                                      size: "12",
                                      class: "mt-1"
                                    }, null, 8, ["color"]),
                                    createVNode("div", null, [
                                      createVNode("div", {
                                        class: "text-body-1",
                                        style: { "min-inline-size": "90px" }
                                      }, toDisplayString(topic.title), 1),
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                    ])
                                  ]);
                                }), 64))
                              ]),
                              createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                                  return createVNode("div", {
                                    key: topic.title,
                                    class: "d-flex gap-x-2"
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-circle-fill",
                                      color: topic.color,
                                      size: "12",
                                      class: "mt-1"
                                    }, null, 8, ["color"]),
                                    createVNode("div", null, [
                                      createVNode("div", {
                                        class: "text-body-1",
                                        style: { "min-inline-size": "90px" }
                                      }, toDisplayString(topic.title), 1),
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VueApexCharts, {
                              type: "bar",
                              height: "268",
                              options: topicsChartConfig,
                              series: topicsChartSeries,
                              class: "mb-md-0 mb-6"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "d-flex justify-space-around align-start" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                                return createVNode("div", {
                                  key: topic.title,
                                  class: "d-flex gap-x-2"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-circle-fill",
                                    color: topic.color,
                                    size: "12",
                                    class: "mt-1"
                                  }, null, 8, ["color"]),
                                  createVNode("div", null, [
                                    createVNode("div", {
                                      class: "text-body-1",
                                      style: { "min-inline-size": "90px" }
                                    }, toDisplayString(topic.title), 1),
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                  ])
                                ]);
                              }), 64))
                            ]),
                            createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                                return createVNode("div", {
                                  key: topic.title,
                                  class: "d-flex gap-x-2"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-circle-fill",
                                    color: topic.color,
                                    size: "12",
                                    class: "mt-1"
                                  }, null, 8, ["color"]),
                                  createVNode("div", null, [
                                    createVNode("div", {
                                      class: "text-body-1",
                                      style: { "min-inline-size": "90px" }
                                    }, toDisplayString(topic.title), 1),
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { title: "Topic you are interested in" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VueApexCharts, {
                            type: "bar",
                            height: "268",
                            options: topicsChartConfig,
                            series: topicsChartSeries,
                            class: "mb-md-0 mb-6"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "d-flex justify-space-around align-start" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(topicsData, (topic) => {
                              return createVNode("div", {
                                key: topic.title,
                                class: "d-flex gap-x-2"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, 8, ["color"]),
                                createVNode("div", null, [
                                  createVNode("div", {
                                    class: "text-body-1",
                                    style: { "min-inline-size": "90px" }
                                  }, toDisplayString(topic.title), 1),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
                                ])
                              ]);
                            }), 64))
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-y-12" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(moreTopics, (topic) => {
                              return createVNode("div", {
                                key: topic.title,
                                class: "d-flex gap-x-2"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-circle-fill",
                                  color: topic.color,
                                  size: "12",
                                  class: "mt-1"
                                }, null, 8, ["color"]),
                                createVNode("div", null, [
                                  createVNode("div", {
                                    class: "text-body-1",
                                    style: { "min-inline-size": "90px" }
                                  }, toDisplayString(topic.title), 1),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(topic.value) + "% ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyCardInterestedTopics.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AcademyCardPopularInstructors",
  __ssrInlineRender: true,
  setup(__props) {
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
      const _component_MoreBtn = _sfc_main$7;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Popular Instructors" }, {
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
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="text-overline d-flex justify-space-between px-5 py-4" data-v-32aa23d2${_scopeId}><div data-v-32aa23d2${_scopeId}>instructors</div><div data-v-32aa23d2${_scopeId}>Courses</div></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList([
                          { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                          { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                          { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                          { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                        ], (instructor) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: instructor.name
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "34",
                                  image: instructor.avatar,
                                  class: "me-1"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    size: "34",
                                    image: instructor.avatar,
                                    class: "me-1"
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-body-1 text-high-emphasis" data-v-32aa23d2${_scopeId4}>${ssrInterpolate(instructor.totalCourses)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6" data-v-32aa23d2${_scopeId4}>${ssrInterpolate(instructor.name)}</h6><div class="text-caption text-medium-emphasis" data-v-32aa23d2${_scopeId4}>${ssrInterpolate(instructor.profession)}</div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList([
                            { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                            { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                            { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                            { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                          ], (instructor) => {
                            return openBlock(), createBlock(VListItem, {
                              key: instructor.name
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "34",
                                  image: instructor.avatar,
                                  class: "me-1"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList([
                          { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                          { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                          { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                          { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                        ], (instructor) => {
                          return openBlock(), createBlock(VListItem, {
                            key: instructor.name
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "34",
                                image: instructor.avatar,
                                class: "me-1"
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { title: "Popular Instructors" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode("div", { class: "text-overline d-flex justify-space-between px-5 py-4" }, [
                createVNode("div", null, "instructors"),
                createVNode("div", null, "Courses")
              ]),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList([
                        { name: "Jordan Stevenson", profession: "Business Intelligence", totalCourses: 33, avatar: unref(avatar1) },
                        { name: "Bentlee Emblin", profession: "Digital Marketing", totalCourses: 52, avatar: unref(avatar2) },
                        { name: "Benedetto Rossiter", profession: "UI/UX Design", totalCourses: 12, avatar: unref(avatar3) },
                        { name: "Beverlie Krabbe", profession: "Vue", totalCourses: 8, avatar: unref(avatar4) }
                      ], (instructor) => {
                        return openBlock(), createBlock(VListItem, {
                          key: instructor.name
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              size: "34",
                              image: instructor.avatar,
                              class: "me-1"
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(instructor.totalCourses), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, toDisplayString(instructor.name), 1),
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(instructor.profession), 1)
                          ]),
                          _: 2
                        }, 1024);
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
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyCardPopularInstructors.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AcademyCardPopularInstructors = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-32aa23d2"]]);
const _sfc_main$3 = {
  __name: "AcademyCardTopCourses",
  __ssrInlineRender: true,
  setup(__props) {
    const coursesData = [
      {
        title: "Videography Basic Design Course",
        views: "1.2k",
        icon: "ri-video-download-line",
        color: "primary"
      },
      {
        title: "Basic Front-end Development Course",
        views: "834",
        icon: "ri-code-view",
        color: "info"
      },
      {
        title: "Basic Fundamentals of Photography",
        views: "3.7k",
        icon: "ri-image-2-line",
        color: "success"
      },
      {
        title: "Advance Dribble Base Visual Design",
        views: "2.5k",
        icon: "ri-palette-line",
        color: "warning"
      },
      {
        title: "Your First Singing Lesson",
        views: "948",
        icon: "ri-music-2-line",
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
      const _component_MoreBtn = _sfc_main$7;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { title: "Top Courses" }, {
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
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(coursesData, (course, index) => {
                          _push4(ssrRenderComponent(VListItem, { key: index }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: course.color,
                                  class: "me-1"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: course.icon,
                                        size: "24"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: course.icon,
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
                                    rounded: "",
                                    variant: "tonal",
                                    color: course.color,
                                    class: "me-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: course.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h6 clamp-text text-wrap me-4" data-v-a6bd13af${_scopeId4}>${ssrInterpolate(course.title)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  variant: "tonal",
                                  color: "secondary",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(course.views)} Views `);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(course.views) + " Views ", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    variant: "tonal",
                                    color: "secondary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
                          (openBlock(), createBlock(Fragment, null, renderList(coursesData, (course, index) => {
                            return createVNode(VListItem, { key: index }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: course.color,
                                  class: "me-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: course.icon,
                                      size: "24"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              title: withCtx(() => [
                                createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                              ]),
                              append: withCtx(() => [
                                createVNode(VChip, {
                                  variant: "tonal",
                                  color: "secondary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
                        (openBlock(), createBlock(Fragment, null, renderList(coursesData, (course, index) => {
                          return createVNode(VListItem, { key: index }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                variant: "tonal",
                                color: course.color,
                                class: "me-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: course.icon,
                                    size: "24"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            title: withCtx(() => [
                              createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                            ]),
                            append: withCtx(() => [
                              createVNode(VChip, {
                                variant: "tonal",
                                color: "secondary",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
              createVNode(VCardItem, { title: "Top Courses" }, {
                append: withCtx(() => [
                  createVNode(_component_MoreBtn, { "menu-list": moreList })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(coursesData, (course, index) => {
                        return createVNode(VListItem, { key: index }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              variant: "tonal",
                              color: course.color,
                              class: "me-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: course.icon,
                                  size: "24"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          title: withCtx(() => [
                            createVNode("div", { class: "text-h6 clamp-text text-wrap me-4" }, toDisplayString(course.title), 1)
                          ]),
                          append: withCtx(() => [
                            createVNode(VChip, {
                              variant: "tonal",
                              color: "secondary",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(course.views) + " Views ", 1)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyCardTopCourses.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AcademyCardTopCourses = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a6bd13af"]]);
const _sfc_main$2 = {
  __name: "AcademyCourseTable",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
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
    const headers = [
      {
        title: "Course Name",
        key: "courseName"
      },
      {
        title: "Time",
        key: "time",
        sortable: false
      },
      {
        title: "Progress",
        key: "progress"
      },
      {
        title: "Status",
        key: "status",
        sortable: false
      }
    ];
    const { data: courseData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/academy/courses", {
      query: {
        q: searchQuery,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const courses = computed(() => courseData.value.courses);
    const totalCourse = computed(() => courseData.value.total);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap justify-space-between align-center gap-4"${_scopeId2}><h5 class="text-h5"${_scopeId2}> Courses you are taking </h5>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search Course",
                    density: "compact",
                    style: { "max-inline-size": "300px", "min-inline-size": "200px" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-wrap justify-space-between align-center gap-4" }, [
                      createVNode("h5", { class: "text-h5" }, " Courses you are taking "),
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search Course",
                        density: "compact",
                        style: { "max-inline-size": "300px", "min-inline-size": "200px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
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
              headers,
              items: unref(courses),
              "item-value": "id",
              "items-length": unref(totalCourse),
              "show-select": "",
              class: "text-no-wrap",
              "onUpdate:options": updateOptions
            }, {
              "item.courseName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-4 py-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    variant: "tonal",
                    rounded: "",
                    color: item.color
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: item.logo,
                          size: "28"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: item.logo,
                            size: "28"
                          }, null, 8, ["icon"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-academy-course-details" },
                    class: "text-link d-inline-block text-base font-weight-medium"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.courseTitle)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.courseTitle), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "22",
                    image: item.image,
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-body-2 text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.user)}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-x-4 py-2" }, [
                      createVNode(VAvatar, {
                        variant: "tonal",
                        rounded: "",
                        color: item.color
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: item.logo,
                            size: "28"
                          }, null, 8, ["icon"])
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createVNode("div", null, [
                        createVNode(_component_RouterLink, {
                          to: { name: "apps-academy-course-details" },
                          class: "text-link d-inline-block text-base font-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.courseTitle), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(VAvatar, {
                            size: "22",
                            image: item.image,
                            class: "me-2"
                          }, null, 8, ["image"]),
                          createVNode("div", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.user), 1)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              "item.time": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}>${ssrInterpolate(item.time)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.time), 1)
                  ];
                }
              }),
              "item.progress": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-4 mb-2" style="${ssrRenderStyle({ "inline-size": "15.625rem" })}"${_scopeId2}><div class="text-no-wrap text-h6"${_scopeId2}>${ssrInterpolate(Math.floor(item.completedTasks / item.totalTasks * 100))}% </div><div class="w-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VProgressLinear, {
                    color: "primary",
                    height: "8",
                    "model-value": Math.floor(item.completedTasks / item.totalTasks * 100),
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="text-body-2"${_scopeId2}>${ssrInterpolate(item.completedTasks)}/${ssrInterpolate(item.totalTasks)}</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "d-flex align-center gap-x-4 mb-2",
                      style: { "inline-size": "15.625rem" }
                    }, [
                      createVNode("div", { class: "text-no-wrap text-h6" }, toDisplayString(Math.floor(item.completedTasks / item.totalTasks * 100)) + "% ", 1),
                      createVNode("div", { class: "w-100" }, [
                        createVNode(VProgressLinear, {
                          color: "primary",
                          height: "8",
                          "model-value": Math.floor(item.completedTasks / item.totalTasks * 100),
                          rounded: ""
                        }, null, 8, ["model-value"])
                      ]),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(item.completedTasks) + "/" + toDisplayString(item.totalTasks), 1)
                    ])
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between gap-x-4"${_scopeId2}><div class="d-flex gap-x-2 align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-group-line",
                    color: "primary",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-body-1"${_scopeId2}>${ssrInterpolate(item.userCount)}</span></div><div class="d-flex gap-x-2 align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-computer-line",
                    color: "info",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-body-1"${_scopeId2}>${ssrInterpolate(item.note)}</span></div><div class="d-flex gap-x-2 align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-video-upload-line",
                    color: "error",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-body-1"${_scopeId2}>${ssrInterpolate(item.view)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between gap-x-4" }, [
                      createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                        createVNode(VIcon, {
                          icon: "ri-group-line",
                          color: "primary",
                          size: "24"
                        }),
                        createVNode("span", { class: "text-body-1" }, toDisplayString(item.userCount), 1)
                      ]),
                      createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                        createVNode(VIcon, {
                          icon: "ri-computer-line",
                          color: "info",
                          size: "24"
                        }),
                        createVNode("span", { class: "text-body-1" }, toDisplayString(item.note), 1)
                      ]),
                      createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                        createVNode(VIcon, {
                          icon: "ri-video-upload-line",
                          color: "error",
                          size: "24"
                        }),
                        createVNode("span", { class: "text-body-1" }, toDisplayString(item.view), 1)
                      ])
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
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalCourse)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    class: "flip-in-rtl text-high-emphasis",
                    icon: "ri-arrow-left-s-line",
                    variant: "text",
                    density: "comfortable",
                    color: "high-emphasis",
                    disabled: unref(page) <= 1,
                    onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "flip-in-rtl text-high-emphasis",
                    icon: "ri-arrow-right-s-line",
                    density: "comfortable",
                    variant: "text",
                    color: "high-emphasis",
                    disabled: unref(page) >= Math.ceil(unref(totalCourse) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalCourse) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalCourse) / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalCourse))), 1),
                      createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                        createVNode(VBtn, {
                          class: "flip-in-rtl text-high-emphasis",
                          icon: "ri-arrow-left-s-line",
                          variant: "text",
                          density: "comfortable",
                          color: "high-emphasis",
                          disabled: unref(page) <= 1,
                          onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                        }, null, 8, ["disabled", "onClick"]),
                        createVNode(VBtn, {
                          class: "flip-in-rtl text-high-emphasis",
                          icon: "ri-arrow-right-s-line",
                          density: "comfortable",
                          variant: "text",
                          color: "high-emphasis",
                          disabled: unref(page) >= Math.ceil(unref(totalCourse) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalCourse) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalCourse) / unref(itemsPerPage)) : page.value++
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
                  createVNode("div", { class: "d-flex flex-wrap justify-space-between align-center gap-4" }, [
                    createVNode("h5", { class: "text-h5" }, " Courses you are taking "),
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search Course",
                      density: "compact",
                      style: { "max-inline-size": "300px", "min-inline-size": "200px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
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
                headers,
                items: unref(courses),
                "item-value": "id",
                "items-length": unref(totalCourse),
                "show-select": "",
                class: "text-no-wrap",
                "onUpdate:options": updateOptions
              }, {
                "item.courseName": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center gap-x-4 py-2" }, [
                    createVNode(VAvatar, {
                      variant: "tonal",
                      rounded: "",
                      color: item.color
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: item.logo,
                          size: "28"
                        }, null, 8, ["icon"])
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("div", null, [
                      createVNode(_component_RouterLink, {
                        to: { name: "apps-academy-course-details" },
                        class: "text-link d-inline-block text-base font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.courseTitle), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(VAvatar, {
                          size: "22",
                          image: item.image,
                          class: "me-2"
                        }, null, 8, ["image"]),
                        createVNode("div", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.user), 1)
                      ])
                    ])
                  ])
                ]),
                "item.time": withCtx(({ item }) => [
                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.time), 1)
                ]),
                "item.progress": withCtx(({ item }) => [
                  createVNode("div", {
                    class: "d-flex align-center gap-x-4 mb-2",
                    style: { "inline-size": "15.625rem" }
                  }, [
                    createVNode("div", { class: "text-no-wrap text-h6" }, toDisplayString(Math.floor(item.completedTasks / item.totalTasks * 100)) + "% ", 1),
                    createVNode("div", { class: "w-100" }, [
                      createVNode(VProgressLinear, {
                        color: "primary",
                        height: "8",
                        "model-value": Math.floor(item.completedTasks / item.totalTasks * 100),
                        rounded: ""
                      }, null, 8, ["model-value"])
                    ]),
                    createVNode("div", { class: "text-body-2" }, toDisplayString(item.completedTasks) + "/" + toDisplayString(item.totalTasks), 1)
                  ])
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex justify-space-between gap-x-4" }, [
                    createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                      createVNode(VIcon, {
                        icon: "ri-group-line",
                        color: "primary",
                        size: "24"
                      }),
                      createVNode("span", { class: "text-body-1" }, toDisplayString(item.userCount), 1)
                    ]),
                    createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                      createVNode(VIcon, {
                        icon: "ri-computer-line",
                        color: "info",
                        size: "24"
                      }),
                      createVNode("span", { class: "text-body-1" }, toDisplayString(item.note), 1)
                    ]),
                    createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                      createVNode(VIcon, {
                        icon: "ri-video-upload-line",
                        color: "error",
                        size: "24"
                      }),
                      createVNode("span", { class: "text-body-1" }, toDisplayString(item.view), 1)
                    ])
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalCourse))), 1),
                    createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                      createVNode(VBtn, {
                        class: "flip-in-rtl text-high-emphasis",
                        icon: "ri-arrow-left-s-line",
                        variant: "text",
                        density: "comfortable",
                        color: "high-emphasis",
                        disabled: unref(page) <= 1,
                        onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(VBtn, {
                        class: "flip-in-rtl text-high-emphasis",
                        icon: "ri-arrow-right-s-line",
                        density: "comfortable",
                        variant: "text",
                        color: "high-emphasis",
                        disabled: unref(page) >= Math.ceil(unref(totalCourse) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalCourse) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalCourse) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "items-per-page-options", "items", "items-length"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyCourseTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const boyWithTablet = "/build/assets/boy-with-tablet-AFxO4fFN.png";
const _sfc_main$1 = {
  __name: "AcademyUpcomingWebinar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-center align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded-xl"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(boyWithTablet),
                    width: "145",
                    height: "140"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><h5 class="text-h5 mb-1"${_scopeId2}> Upcoming Webinar </h5><div class="text-body-1"${_scopeId2}> Next Generation Frontend Architecture Using Layout Engine And Vue. </div><div class="d-flex justify-space-between my-6 gap-4 flex-wrap"${_scopeId2}><!--[-->`);
                  ssrRenderList([{ icon: "ri-calendar-line", title: "17 Nov 23", value: "Date" }, { icon: "ri-time-line", title: "32 Minutes", value: "Duration" }], ({ icon, title, value }) => {
                    _push3(`<div class="d-flex gap-x-4 align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      color: "primary",
                      variant: "tonal",
                      rounded: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><div class="text-body-1 text-high-emphasis"${_scopeId2}>${ssrInterpolate(title)}</div><div class="text-caption text-medium-emphasis"${_scopeId2}>${ssrInterpolate(value)}</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(VBtn, { block: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Join the event `);
                      } else {
                        return [
                          createTextVNode(" Join the event ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-center align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded-xl" }, [
                      createVNode(VImg, {
                        src: unref(boyWithTablet),
                        width: "145",
                        height: "140"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1" }, " Upcoming Webinar "),
                      createVNode("div", { class: "text-body-1" }, " Next Generation Frontend Architecture Using Layout Engine And Vue. "),
                      createVNode("div", { class: "d-flex justify-space-between my-6 gap-4 flex-wrap" }, [
                        (openBlock(), createBlock(Fragment, null, renderList([{ icon: "ri-calendar-line", title: "17 Nov 23", value: "Date" }, { icon: "ri-time-line", title: "32 Minutes", value: "Duration" }], ({ icon, title, value }) => {
                          return createVNode("div", {
                            key: title,
                            class: "d-flex gap-x-4 align-center"
                          }, [
                            createVNode(VAvatar, {
                              color: "primary",
                              variant: "tonal",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(title), 1),
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(value), 1)
                            ])
                          ]);
                        }), 64))
                      ]),
                      createVNode(VBtn, { block: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Join the event ")
                        ]),
                        _: 1
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
                  createVNode("div", { class: "d-flex justify-center align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded-xl" }, [
                    createVNode(VImg, {
                      src: unref(boyWithTablet),
                      width: "145",
                      height: "140"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-h5 mb-1" }, " Upcoming Webinar "),
                    createVNode("div", { class: "text-body-1" }, " Next Generation Frontend Architecture Using Layout Engine And Vue. "),
                    createVNode("div", { class: "d-flex justify-space-between my-6 gap-4 flex-wrap" }, [
                      (openBlock(), createBlock(Fragment, null, renderList([{ icon: "ri-calendar-line", title: "17 Nov 23", value: "Date" }, { icon: "ri-time-line", title: "32 Minutes", value: "Duration" }], ({ icon, title, value }) => {
                        return createVNode("div", {
                          key: title,
                          class: "d-flex gap-x-4 align-center"
                        }, [
                          createVNode(VAvatar, {
                            color: "primary",
                            variant: "tonal",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(title), 1),
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(value), 1)
                          ])
                        ]);
                      }), 64))
                    ]),
                    createVNode(VBtn, { block: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Join the event ")
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyUpcomingWebinar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 38 38"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M8.09 29.91c-1.366-1.366-.46-4.23-1.158-5.908S3.562 20.856 3.562 19s2.643-3.266 3.37-5.002c.727-1.737-.208-4.543 1.158-5.908s4.23-.46 5.908-1.158 3.147-3.37 5.002-3.37 3.266 2.643 5.002 3.37c1.737.727 4.543-.208 5.908 1.158s.46 4.23 1.158 5.908 3.37 3.147 3.37 5.002-2.643 3.266-3.37 5.002c-.727 1.737.208 4.543-1.158 5.908s-4.23.46-5.908 1.158-3.146 3.37-5.002 3.37-3.266-2.643-5.002-3.37c-1.737-.727-4.543.208-5.908-1.158",
  opacity: ".2"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m25.531 15.438-8.713 8.312-4.35-4.156M8.09 29.91c-1.366-1.366-.46-4.23-1.158-5.908S3.562 20.856 3.562 19s2.643-3.266 3.37-5.002c.727-1.737-.208-4.543 1.158-5.908s4.23-.46 5.908-1.158 3.147-3.37 5.002-3.37 3.266 2.643 5.002 3.37c1.737.727 4.543-.208 5.908 1.158s.46 4.23 1.158 5.908 3.37 3.147 3.37 5.002-2.643 3.266-3.37 5.002c-.727 1.737.208 4.543-1.158 5.908s-4.23.46-5.908 1.158-3.146 3.37-5.002 3.37-3.266-2.643-5.002-3.37c-1.737-.727-4.543.208-5.908-1.158"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_4$1]);
}
const customCheck = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 38 38"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M5.938 26.125V10.688a2.375 2.375 0 0 1 2.375-2.376h21.374a2.375 2.375 0 0 1 2.375 2.376v15.437z",
  opacity: ".2"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.938 26.125V10.688a2.375 2.375 0 0 1 2.375-2.376h21.374a2.375 2.375 0 0 1 2.375 2.376v15.437M21.376 13.063h-4.75M3.563 26.124h30.875V28.5a2.375 2.375 0 0 1-2.376 2.375H5.939A2.375 2.375 0 0 1 3.563 28.5z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_4]);
}
const customLaptop = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 38 38"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M11.682 24.789a11.8 11.8 0 0 1-4.557-9.278c-.03-6.442 5.15-11.8 11.593-11.95a11.875 11.875 0 0 1 7.615 21.213 3.6 3.6 0 0 0-1.395 2.835v.89a1.187 1.187 0 0 1-1.188 1.188h-9.5a1.19 1.19 0 0 1-1.187-1.188v-.89a3.62 3.62 0 0 0-1.381-2.82",
    opacity: ".2"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M25.15 6.466a10.88 10.88 0 0 0-6.408-1.904h-.001q-.364.008-.723.04l.677-2.04A12.875 12.875 0 0 1 26.95 25.56l-.006.005a2.6 2.6 0 0 0-1.007 2.046v.888a2.19 2.19 0 0 1-2.187 2.188h-9.5a2.187 2.187 0 0 1-2.188-2.188v-.886a2.62 2.62 0 0 0-.997-2.037l.676-2.039q.27.24.555.462l-.614.79.619-.786a4.62 4.62 0 0 1 1.761 3.599v.897a.19.19 0 0 0 .188.188h9.5a.187.187 0 0 0 .187-.188v-.892a4.6 4.6 0 0 1 1.78-3.622 10.875 10.875 0 0 0-.566-17.52M11.742 23.537l6.277-18.934.676-2.04c-6.99.16-12.6 5.969-12.57 12.952a12.8 12.8 0 0 0 4.941 10.06zm0 0a10.8 10.8 0 0 1-3.616-8.03c-.026-5.658 4.339-10.403 9.893-10.904zm.322 10.9a1 1 0 0 1 1-1h11.875a1 1 0 1 1 0 2H13.063a1 1 0 0 1-1-1m8.306-26.992a1 1 0 0 0-.334 1.972 6.11 6.11 0 0 1 5 4.987 1 1 0 0 0 1.972-.339 8.11 8.11 0 0 0-6.638-6.62",
    "clip-rule": "evenodd"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const customLightbulb = { render };
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const donutChartColors = {
      donut: {
        series1: "#5BB420",
        series2: "#67CB24",
        series3: "#72E128",
        series4: "#8EE753",
        series5: "#AAED7E",
        series6: "#C7F3A9"
      }
    };
    const timeSpendingChartConfig = {
      chart: {
        height: 157,
        width: 130,
        parentHeightOffset: 0,
        type: "donut"
      },
      labels: [
        "36h",
        "56h",
        "16h",
        "32h",
        "56h",
        "16h"
      ],
      colors: [
        donutChartColors.donut.series1,
        donutChartColors.donut.series2,
        donutChartColors.donut.series3,
        donutChartColors.donut.series4,
        donutChartColors.donut.series5,
        donutChartColors.donut.series6
      ],
      stroke: { width: 0 },
      dataLabels: {
        enabled: false,
        formatter(val) {
          return `${Number.parseInt(val)}%`;
        }
      },
      legend: { show: false },
      tooltip: { theme: false },
      grid: { padding: { top: 0 } },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              value: {
                fontSize: "1.125rem",
                color: "rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",
                fontWeight: 500,
                offsetY: -15,
                formatter(val) {
                  return `${Number.parseInt(val)}%`;
                }
              },
              name: { offsetY: 20 },
              total: {
                show: true,
                fontSize: ".7rem",
                label: "Total",
                color: "rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",
                formatter() {
                  return "231h";
                }
              }
            }
          }
        }
      }
    };
    const timeSpendingChartSeries = [
      23,
      35,
      10,
      20,
      35,
      23
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, { class: "py-5 match-height" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pe-3"${_scopeId2}><div class="mb-2"${_scopeId2}><span class="text-h5"${_scopeId2}> Welcome back, </span><span class="text-h4"${_scopeId2}> Felecia 👋🏻 </span></div><div class="text-wrap text-body-1 mb-4" style="${ssrRenderStyle({ "max-inline-size": "400px" })}"${_scopeId2}> Your progress this week is Awesome. let&#39;s keep it up and get a lot of points reward! </div><div class="d-flex justify-space-between flex-wrap gap-6 flex-column flex-md-row"${_scopeId2}><!--[-->`);
                  ssrRenderList([
                    { title: "Hours Spent", value: "34h", icon: unref(customLaptop), color: "primary" },
                    { title: "Test Results", value: "82%", icon: unref(customLightbulb), color: "info" },
                    { title: "Course Completed", value: "14", icon: unref(customCheck), color: "warning" }
                  ], ({ title, value, icon, color }) => {
                    _push3(`<div${_scopeId2}><div class="d-flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      variant: "tonal",
                      color,
                      rounded: "",
                      size: "54",
                      class: "text-primary me-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon,
                            size: "38"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon,
                              size: "38"
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><h6 class="text-h6 text-medium-emphasis"${_scopeId2}>${ssrInterpolate(title)}</h6><h4 class="${ssrRenderClass([`text-${color}`, "text-h4"])}"${_scopeId2}>${ssrInterpolate(value)}</h4></div></div></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "pe-3" }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("span", { class: "text-h5" }, " Welcome back, "),
                        createVNode("span", { class: "text-h4" }, " Felecia 👋🏻 ")
                      ]),
                      createVNode("div", {
                        class: "text-wrap text-body-1 mb-4",
                        style: { "max-inline-size": "400px" }
                      }, " Your progress this week is Awesome. let's keep it up and get a lot of points reward! "),
                      createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-6 flex-column flex-md-row" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList([
                          { title: "Hours Spent", value: "34h", icon: unref(customLaptop), color: "primary" },
                          { title: "Test Results", value: "82%", icon: unref(customLightbulb), color: "info" },
                          { title: "Course Completed", value: "14", icon: unref(customCheck), color: "warning" }
                        ], ({ title, value, icon, color }) => {
                          return openBlock(), createBlock("div", { key: title }, [
                            createVNode("div", { class: "d-flex" }, [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color,
                                rounded: "",
                                size: "54",
                                class: "text-primary me-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon,
                                    size: "38"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 text-medium-emphasis" }, toDisplayString(title), 1),
                                createVNode("h4", {
                                  class: ["text-h4", `text-${color}`]
                                }, toDisplayString(value), 3)
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
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
                  _push3(`<div class="d-flex justify-space-between align-center"${_scopeId2}><div class="d-flex flex-column ps-3"${_scopeId2}><h5 class="text-h5 mb-1 text-no-wrap"${_scopeId2}> Time Spending </h5><div class="mb-6 text-body-1"${_scopeId2}> Weekly Report </div><h4 class="text-h4 mb-2"${_scopeId2}> 231<span class="text-medium-emphasis"${_scopeId2}>h</span> 14<span class="text-medium-emphasis"${_scopeId2}>m</span></h4><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VChip, {
                    color: "success",
                    density: "comfortable"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` +18.4% `);
                      } else {
                        return [
                          createTextVNode(" +18.4% ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "donut",
                    height: "150",
                    width: "150",
                    options: timeSpendingChartConfig,
                    series: timeSpendingChartSeries
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                      createVNode("div", { class: "d-flex flex-column ps-3" }, [
                        createVNode("h5", { class: "text-h5 mb-1 text-no-wrap" }, " Time Spending "),
                        createVNode("div", { class: "mb-6 text-body-1" }, " Weekly Report "),
                        createVNode("h4", { class: "text-h4 mb-2" }, [
                          createTextVNode(" 231"),
                          createVNode("span", { class: "text-medium-emphasis" }, "h"),
                          createTextVNode(" 14"),
                          createVNode("span", { class: "text-medium-emphasis" }, "m")
                        ]),
                        createVNode("div", null, [
                          createVNode(VChip, {
                            color: "success",
                            density: "comfortable"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" +18.4% ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_VueApexCharts, {
                          type: "donut",
                          height: "150",
                          width: "150",
                          options: timeSpendingChartConfig,
                          series: timeSpendingChartSeries
                        })
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
                md: "8",
                class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "pe-3" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("span", { class: "text-h5" }, " Welcome back, "),
                      createVNode("span", { class: "text-h4" }, " Felecia 👋🏻 ")
                    ]),
                    createVNode("div", {
                      class: "text-wrap text-body-1 mb-4",
                      style: { "max-inline-size": "400px" }
                    }, " Your progress this week is Awesome. let's keep it up and get a lot of points reward! "),
                    createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-6 flex-column flex-md-row" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList([
                        { title: "Hours Spent", value: "34h", icon: unref(customLaptop), color: "primary" },
                        { title: "Test Results", value: "82%", icon: unref(customLightbulb), color: "info" },
                        { title: "Course Completed", value: "14", icon: unref(customCheck), color: "warning" }
                      ], ({ title, value, icon, color }) => {
                        return openBlock(), createBlock("div", { key: title }, [
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              color,
                              rounded: "",
                              size: "54",
                              class: "text-primary me-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon,
                                  size: "38"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 text-medium-emphasis" }, toDisplayString(title), 1),
                              createVNode("h4", {
                                class: ["text-h4", `text-${color}`]
                              }, toDisplayString(value), 3)
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                    createVNode("div", { class: "d-flex flex-column ps-3" }, [
                      createVNode("h5", { class: "text-h5 mb-1 text-no-wrap" }, " Time Spending "),
                      createVNode("div", { class: "mb-6 text-body-1" }, " Weekly Report "),
                      createVNode("h4", { class: "text-h4 mb-2" }, [
                        createTextVNode(" 231"),
                        createVNode("span", { class: "text-medium-emphasis" }, "h"),
                        createTextVNode(" 14"),
                        createVNode("span", { class: "text-medium-emphasis" }, "m")
                      ]),
                      createVNode("div", null, [
                        createVNode(VChip, {
                          color: "success",
                          density: "comfortable"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" +18.4% ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_VueApexCharts, {
                        type: "donut",
                        height: "150",
                        width: "150",
                        options: timeSpendingChartConfig,
                        series: timeSpendingChartSeries
                      })
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
      _push(ssrRenderComponent(VRow, { class: "match-height" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
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
              md: "4",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AcademyCardPopularInstructors, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AcademyCardPopularInstructors)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AcademyCardTopCourses, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AcademyCardTopCourses)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              sm: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AcademyAssignmentProgress, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AcademyAssignmentProgress)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
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
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(AcademyCardPopularInstructors)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(AcademyCardTopCourses)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx(() => [
                  createVNode(AcademyAssignmentProgress)
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/academy/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
