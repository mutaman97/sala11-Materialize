import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, withAsyncContext, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, unref, isRef, useSSRContext } from "vue";
import __unplugin_components_0 from "vue3-apexcharts";
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { a as VIcon, g as VProgressLinear, V as VBtn } from "../ssr.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VRating } from "./VRating-BxS5q7bh.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import "@vueuse/core";
import "destr";
import "ufo";
import "ofetch";
/* empty css               */
import "./VImg-D-rbsD1g.js";
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
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
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
import "./ssrBoot-Co4_dNdy.js";
const labelColor = "rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))";
const _sfc_main = {
  __name: "manage-review",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedStatus = ref("All");
    const searchQuery = ref("");
    const selectedRows = ref([]);
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const {
      data: ReviewData,
      execute: fetchReviews
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/ecommerce/reviews", {
      query: {
        q: searchQuery,
        status: selectedStatus,
        page,
        itemsPerPage,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const reviews = computed(() => ReviewData.value.reviews);
    const totalReviews = computed(() => ReviewData.value.total);
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const deleteReview = async (id) => {
      await $api(`/apps/ecommerce/reviews/${id}`, { method: "DELETE" });
      const index = selectedRows.value.findIndex((row) => row === id);
      if (index !== -1)
        selectedRows.value.splice(index, 1);
      fetchReviews();
    };
    const reviewCardData = [
      {
        rating: 5,
        value: 124
      },
      {
        rating: 4,
        value: 40
      },
      {
        rating: 3,
        value: 12
      },
      {
        rating: 2,
        value: 7
      },
      {
        rating: 1,
        value: 2
      }
    ];
    const headers = [
      {
        title: "Product",
        key: "product"
      },
      {
        title: "Reviewer",
        key: "reviewer"
      },
      {
        title: "Review",
        key: "review",
        sortable: false
      },
      {
        title: "Date",
        key: "date"
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
    const reviewStatChartSeries = [{
      data: [
        20,
        40,
        60,
        80,
        100,
        80,
        60
      ]
    }];
    const reviewStatChartConfig = {
      chart: {
        height: 160,
        width: 190,
        type: "bar",
        toolbar: { show: false }
      },
      legend: { show: false },
      grid: {
        show: false,
        padding: {
          top: -25,
          bottom: -12
        }
      },
      colors: [
        "rgba(var(--v-theme-success), var(--v-activated-opacity))",
        "rgba(var(--v-theme-success), var(--v-activated-opacity))",
        "rgba(var(--v-theme-success), var(--v-activated-opacity))",
        "rgba(var(--v-theme-success), var(--v-activated-opacity))",
        "rgba(var(--v-theme-success), 1)",
        "rgba(var(--v-theme-success), var(--v-activated-opacity))",
        "rgba(var(--v-theme-success), var(--v-activated-opacity))"
      ],
      plotOptions: {
        bar: {
          barHeight: "75%",
          columnWidth: "35%",
          borderRadius: 5,
          distributed: true
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S"
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "13px"
          }
        }
      },
      yaxis: { labels: { show: false } },
      responsive: [
        {
          breakpoint: 0,
          options: {
            chart: { width: "100%" },
            plotOptions: { bar: { columnWidth: "40%" } }
          }
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              height: 150,
              width: 190,
              toolbar: { show: false }
            },
            plotOptions: {
              bar: {
                borderRadius: 6,
                columnWidth: "40%"
              }
            }
          }
        },
        {
          breakpoint: 1400,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 6,
                columnWidth: "40%"
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 130,
              width: 190,
              toolbar: { show: false }
            },
            plotOptions: {
              bar: {
                borderRadius: 6,
                columnWidth: "40%"
              }
            }
          }
        },
        {
          breakpoint: 992,
          chart: {
            height: 150,
            width: 190,
            toolbar: { show: false }
          },
          options: {
            plotOptions: {
              bar: {
                borderRadius: 5,
                columnWidth: "40%"
              }
            }
          }
        },
        {
          breakpoint: 883,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 5,
                columnWidth: "40%"
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 150,
              width: 190,
              toolbar: { show: false }
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                columnWidth: "40%"
              }
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              width: "100%",
              height: "200",
              type: "bar"
            },
            plotOptions: {
              bar: {
                borderRadius: 6,
                columnWidth: "30% "
              }
            }
          }
        },
        {
          breakpoint: 420,
          options: {
            plotOptions: {
              chart: {
                width: "100%",
                height: "200",
                type: "bar"
              },
              bar: {
                borderRadius: 3,
                columnWidth: "30%"
              }
            }
          }
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="${ssrRenderClass(_ctx.$vuetify.display.smAndUp ? "border-e" : "border-b")}"${_scopeId6}><div class="d-flex align-center gap-x-2"${_scopeId6}><h4 class="text-h3 text-primary"${_scopeId6}> 4.89 </h4>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "ri-star-smile-line",
                                            color: "primary",
                                            size: "32"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><h6 class="my-2 text-h6"${_scopeId6}> Total 187 reviews </h6><div class="mb-2"${_scopeId6}> All reviews are from genuine customers </div>`);
                                          _push7(ssrRenderComponent(VChip, {
                                            color: "primary",
                                            size: "small",
                                            class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` +5 This week `);
                                              } else {
                                                return [
                                                  createTextVNode(" +5 This week ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              class: _ctx.$vuetify.display.smAndUp ? "border-e" : "border-b"
                                            }, [
                                              createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                                createVNode("h4", { class: "text-h3 text-primary" }, " 4.89 "),
                                                createVNode(VIcon, {
                                                  icon: "ri-star-smile-line",
                                                  color: "primary",
                                                  size: "32"
                                                })
                                              ]),
                                              createVNode("h6", { class: "my-2 text-h6" }, " Total 187 reviews "),
                                              createVNode("div", { class: "mb-2" }, " All reviews are from genuine customers "),
                                              createVNode(VChip, {
                                                color: "primary",
                                                size: "small",
                                                class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" +5 This week ")
                                                ]),
                                                _: 1
                                              }, 8, ["class"])
                                            ], 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(reviewCardData, (item, index) => {
                                            _push7(`<div class="d-flex align-center gap-2 mb-3"${_scopeId6}><div class="text-sm text-no-wrap"${_scopeId6}>${ssrInterpolate(item.rating)} Star </div><div class="w-100"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              color: "primary",
                                              height: "8",
                                              "model-value": item.value / 185 * 100,
                                              rounded: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="text-sm"${_scopeId6}>${ssrInterpolate(item.value)}</div></div>`);
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(reviewCardData, (item, index) => {
                                              return createVNode("div", {
                                                key: index,
                                                class: "d-flex align-center gap-2 mb-3"
                                              }, [
                                                createVNode("div", { class: "text-sm text-no-wrap" }, toDisplayString(item.rating) + " Star ", 1),
                                                createVNode("div", { class: "w-100" }, [
                                                  createVNode(VProgressLinear, {
                                                    color: "primary",
                                                    height: "8",
                                                    "model-value": item.value / 185 * 100,
                                                    rounded: ""
                                                  }, null, 8, ["model-value"])
                                                ]),
                                                createVNode("div", { class: "text-sm" }, toDisplayString(item.value), 1)
                                              ]);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: _ctx.$vuetify.display.smAndUp ? "border-e" : "border-b"
                                          }, [
                                            createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                              createVNode("h4", { class: "text-h3 text-primary" }, " 4.89 "),
                                              createVNode(VIcon, {
                                                icon: "ri-star-smile-line",
                                                color: "primary",
                                                size: "32"
                                              })
                                            ]),
                                            createVNode("h6", { class: "my-2 text-h6" }, " Total 187 reviews "),
                                            createVNode("div", { class: "mb-2" }, " All reviews are from genuine customers "),
                                            createVNode(VChip, {
                                              color: "primary",
                                              size: "small",
                                              class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" +5 This week ")
                                              ]),
                                              _: 1
                                            }, 8, ["class"])
                                          ], 2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(reviewCardData, (item, index) => {
                                            return createVNode("div", {
                                              key: index,
                                              class: "d-flex align-center gap-2 mb-3"
                                            }, [
                                              createVNode("div", { class: "text-sm text-no-wrap" }, toDisplayString(item.rating) + " Star ", 1),
                                              createVNode("div", { class: "w-100" }, [
                                                createVNode(VProgressLinear, {
                                                  color: "primary",
                                                  height: "8",
                                                  "model-value": item.value / 185 * 100,
                                                  rounded: ""
                                                }, null, 8, ["model-value"])
                                              ]),
                                              createVNode("div", { class: "text-sm" }, toDisplayString(item.value), 1)
                                            ]);
                                          }), 64))
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
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: _ctx.$vuetify.display.smAndUp ? "border-e" : "border-b"
                                        }, [
                                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                            createVNode("h4", { class: "text-h3 text-primary" }, " 4.89 "),
                                            createVNode(VIcon, {
                                              icon: "ri-star-smile-line",
                                              color: "primary",
                                              size: "32"
                                            })
                                          ]),
                                          createVNode("h6", { class: "my-2 text-h6" }, " Total 187 reviews "),
                                          createVNode("div", { class: "mb-2" }, " All reviews are from genuine customers "),
                                          createVNode(VChip, {
                                            color: "primary",
                                            size: "small",
                                            class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" +5 This week ")
                                            ]),
                                            _: 1
                                          }, 8, ["class"])
                                        ], 2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(reviewCardData, (item, index) => {
                                          return createVNode("div", {
                                            key: index,
                                            class: "d-flex align-center gap-2 mb-3"
                                          }, [
                                            createVNode("div", { class: "text-sm text-no-wrap" }, toDisplayString(item.rating) + " Star ", 1),
                                            createVNode("div", { class: "w-100" }, [
                                              createVNode(VProgressLinear, {
                                                color: "primary",
                                                height: "8",
                                                "model-value": item.value / 185 * 100,
                                                rounded: ""
                                              }, null, 8, ["model-value"])
                                            ]),
                                            createVNode("div", { class: "text-sm" }, toDisplayString(item.value), 1)
                                          ]);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: _ctx.$vuetify.display.smAndUp ? "border-e" : "border-b"
                                      }, [
                                        createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                          createVNode("h4", { class: "text-h3 text-primary" }, " 4.89 "),
                                          createVNode(VIcon, {
                                            icon: "ri-star-smile-line",
                                            color: "primary",
                                            size: "32"
                                          })
                                        ]),
                                        createVNode("h6", { class: "my-2 text-h6" }, " Total 187 reviews "),
                                        createVNode("div", { class: "mb-2" }, " All reviews are from genuine customers "),
                                        createVNode(VChip, {
                                          color: "primary",
                                          size: "small",
                                          class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" +5 This week ")
                                          ]),
                                          _: 1
                                        }, 8, ["class"])
                                      ], 2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(reviewCardData, (item, index) => {
                                        return createVNode("div", {
                                          key: index,
                                          class: "d-flex align-center gap-2 mb-3"
                                        }, [
                                          createVNode("div", { class: "text-sm text-no-wrap" }, toDisplayString(item.rating) + " Star ", 1),
                                          createVNode("div", { class: "w-100" }, [
                                            createVNode(VProgressLinear, {
                                              color: "primary",
                                              height: "8",
                                              "model-value": item.value / 185 * 100,
                                              rounded: ""
                                            }, null, 8, ["model-value"])
                                          ]),
                                          createVNode("div", { class: "text-sm" }, toDisplayString(item.value), 1)
                                        ]);
                                      }), 64))
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: _ctx.$vuetify.display.smAndUp ? "border-e" : "border-b"
                                    }, [
                                      createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                        createVNode("h4", { class: "text-h3 text-primary" }, " 4.89 "),
                                        createVNode(VIcon, {
                                          icon: "ri-star-smile-line",
                                          color: "primary",
                                          size: "32"
                                        })
                                      ]),
                                      createVNode("h6", { class: "my-2 text-h6" }, " Total 187 reviews "),
                                      createVNode("div", { class: "mb-2" }, " All reviews are from genuine customers "),
                                      createVNode(VChip, {
                                        color: "primary",
                                        size: "small",
                                        class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" +5 This week ")
                                        ]),
                                        _: 1
                                      }, 8, ["class"])
                                    ], 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(reviewCardData, (item, index) => {
                                      return createVNode("div", {
                                        key: index,
                                        class: "d-flex align-center gap-2 mb-3"
                                      }, [
                                        createVNode("div", { class: "text-sm text-no-wrap" }, toDisplayString(item.rating) + " Star ", 1),
                                        createVNode("div", { class: "w-100" }, [
                                          createVNode(VProgressLinear, {
                                            color: "primary",
                                            height: "8",
                                            "model-value": item.value / 185 * 100,
                                            rounded: ""
                                          }, null, 8, ["model-value"])
                                        ]),
                                        createVNode("div", { class: "text-sm" }, toDisplayString(item.value), 1)
                                      ]);
                                    }), 64))
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
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "5"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><h5 class="text-h5 mb-2"${_scopeId6}> Reviews statistics </h5><div class="mb-9"${_scopeId6}><span class="me-2"${_scopeId6}>12 New Reviews</span>`);
                                          _push7(ssrRenderComponent(VChip, {
                                            color: "success",
                                            size: "small"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` +8.4% `);
                                              } else {
                                                return [
                                                  createTextVNode(" +8.4% ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div><div${_scopeId6}><div class="text-high-emphasis text-body-1 mb-2"${_scopeId6}><span class="text-success"${_scopeId6}>87%</span> Positive Reviews </div><div class="text-body-2"${_scopeId6}> Weekly Report </div></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("h5", { class: "text-h5 mb-2" }, " Reviews statistics "),
                                              createVNode("div", { class: "mb-9" }, [
                                                createVNode("span", { class: "me-2" }, "12 New Reviews"),
                                                createVNode(VChip, {
                                                  color: "success",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" +8.4% ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-high-emphasis text-body-1 mb-2" }, [
                                                  createVNode("span", { class: "text-success" }, "87%"),
                                                  createTextVNode(" Positive Reviews ")
                                                ]),
                                                createVNode("div", { class: "text-body-2" }, " Weekly Report ")
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "7"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-start justify-sm-end"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_VueApexCharts, {
                                            id: "shipment-statistics",
                                            type: "bar",
                                            height: "150",
                                            options: reviewStatChartConfig,
                                            series: reviewStatChartSeries
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-start justify-sm-end" }, [
                                              createVNode(_component_VueApexCharts, {
                                                id: "shipment-statistics",
                                                type: "bar",
                                                height: "150",
                                                options: reviewStatChartConfig,
                                                series: reviewStatChartSeries
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("h5", { class: "text-h5 mb-2" }, " Reviews statistics "),
                                            createVNode("div", { class: "mb-9" }, [
                                              createVNode("span", { class: "me-2" }, "12 New Reviews"),
                                              createVNode(VChip, {
                                                color: "success",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" +8.4% ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-high-emphasis text-body-1 mb-2" }, [
                                                createVNode("span", { class: "text-success" }, "87%"),
                                                createTextVNode(" Positive Reviews ")
                                              ]),
                                              createVNode("div", { class: "text-body-2" }, " Weekly Report ")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "7"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-start justify-sm-end" }, [
                                            createVNode(_component_VueApexCharts, {
                                              id: "shipment-statistics",
                                              type: "bar",
                                              height: "150",
                                              options: reviewStatChartConfig,
                                              series: reviewStatChartSeries
                                            })
                                          ])
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
                                      sm: "5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("h5", { class: "text-h5 mb-2" }, " Reviews statistics "),
                                          createVNode("div", { class: "mb-9" }, [
                                            createVNode("span", { class: "me-2" }, "12 New Reviews"),
                                            createVNode(VChip, {
                                              color: "success",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" +8.4% ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-high-emphasis text-body-1 mb-2" }, [
                                              createVNode("span", { class: "text-success" }, "87%"),
                                              createTextVNode(" Positive Reviews ")
                                            ]),
                                            createVNode("div", { class: "text-body-2" }, " Weekly Report ")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "7"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-start justify-sm-end" }, [
                                          createVNode(_component_VueApexCharts, {
                                            id: "shipment-statistics",
                                            type: "bar",
                                            height: "150",
                                            options: reviewStatChartConfig,
                                            series: reviewStatChartSeries
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("h5", { class: "text-h5 mb-2" }, " Reviews statistics "),
                                        createVNode("div", { class: "mb-9" }, [
                                          createVNode("span", { class: "me-2" }, "12 New Reviews"),
                                          createVNode(VChip, {
                                            color: "success",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" +8.4% ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-high-emphasis text-body-1 mb-2" }, [
                                            createVNode("span", { class: "text-success" }, "87%"),
                                            createTextVNode(" Positive Reviews ")
                                          ]),
                                          createVNode("div", { class: "text-body-2" }, " Weekly Report ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "7"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-start justify-sm-end" }, [
                                        createVNode(_component_VueApexCharts, {
                                          id: "shipment-statistics",
                                          type: "bar",
                                          height: "150",
                                          options: reviewStatChartConfig,
                                          series: reviewStatChartSeries
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5 mb-2" }, " Reviews statistics "),
                                      createVNode("div", { class: "mb-9" }, [
                                        createVNode("span", { class: "me-2" }, "12 New Reviews"),
                                        createVNode(VChip, {
                                          color: "success",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" +8.4% ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-high-emphasis text-body-1 mb-2" }, [
                                          createVNode("span", { class: "text-success" }, "87%"),
                                          createTextVNode(" Positive Reviews ")
                                        ]),
                                        createVNode("div", { class: "text-body-2" }, " Weekly Report ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "7"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-start justify-sm-end" }, [
                                      createVNode(_component_VueApexCharts, {
                                        id: "shipment-statistics",
                                        type: "bar",
                                        height: "150",
                                        options: reviewStatChartConfig,
                                        series: reviewStatChartSeries
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between flex-wrap gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(searchQuery),
                                "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                style: { "max-inline-size": "250px", "min-inline-size": "200px" },
                                placeholder: "Search",
                                density: "compact"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-row gap-4 align-center flex-wrap"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                style: { "min-inline-size": "6.25rem" },
                                density: "compact",
                                items: [
                                  { title: "All", value: "All" },
                                  { title: "Published", value: "Published" },
                                  { title: "Pending", value: "Pending" }
                                ]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Export `);
                                  } else {
                                    return [
                                      createTextVNode(" Export ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-4" }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(searchQuery),
                                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                    style: { "max-inline-size": "250px", "min-inline-size": "200px" },
                                    placeholder: "Search",
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex flex-row gap-4 align-center flex-wrap" }, [
                                    createVNode(VSelect, {
                                      modelValue: unref(selectedStatus),
                                      "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                      style: { "min-inline-size": "6.25rem" },
                                      density: "compact",
                                      items: [
                                        { title: "All", value: "All" },
                                        { title: "Published", value: "Published" },
                                        { title: "Pending", value: "Pending" }
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Export ")
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
                        _push4(ssrRenderComponent(VDataTableServer, {
                          "model-value": unref(selectedRows),
                          "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                          "items-per-page": unref(itemsPerPage),
                          "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                          page: unref(page),
                          "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                          headers,
                          items: unref(reviews),
                          "show-select": "",
                          "items-length": unref(totalReviews),
                          "item-value": "id",
                          class: "text-no-wrap rounded-0",
                          "onUpdate:options": updateOptions
                        }, {
                          "item.product": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-x-3 align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                image: item.productImage,
                                size: 38,
                                variant: "tonal",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-column"${_scopeId4}><h6 class="text-h6"${_scopeId4}>${ssrInterpolate(item.product)}</h6><span class="text-sm text-wrap clamp-text"${_scopeId4}>${ssrInterpolate(item.companyName)}</span></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                                  createVNode(VAvatar, {
                                    image: item.productImage,
                                    size: 38,
                                    variant: "tonal",
                                    rounded: ""
                                  }, null, 8, ["image"]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                                    createVNode("span", { class: "text-sm text-wrap clamp-text" }, toDisplayString(item.companyName), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          "item.reviewer": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center gap-x-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                image: item.avatar,
                                size: "34"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-column"${_scopeId4}><h6 class="text-h6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_RouterLink, {
                                to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } },
                                class: "font-weight-medium"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(item.reviewer)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.reviewer), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</h6><span class="text-body-2"${_scopeId4}>${ssrInterpolate(item.email)}</span></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                  createVNode(VAvatar, {
                                    image: item.avatar,
                                    size: "34"
                                  }, null, 8, ["image"]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("h6", { class: "text-h6" }, [
                                      createVNode(_component_RouterLink, {
                                        to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } },
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.reviewer), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.email), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          "item.review": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="py-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRating, {
                                size: 24,
                                readonly: "",
                                "model-value": item.review
                              }, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-h6 mb-1"${_scopeId4}>${ssrInterpolate(item.head)}</h6><p class="text-sm text-medium-emphasis text-wrap mb-0"${_scopeId4}>${ssrInterpolate(item.para)}</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "py-5" }, [
                                  createVNode(VRating, {
                                    size: 24,
                                    readonly: "",
                                    "model-value": item.review
                                  }, null, 8, ["model-value"]),
                                  createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(item.head), 1),
                                  createVNode("p", { class: "text-sm text-medium-emphasis text-wrap mb-0" }, toDisplayString(item.para), 1)
                                ])
                              ];
                            }
                          }),
                          "item.date": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-body-1"${_scopeId4}>${ssrInterpolate(new Date(item.date).toDateString())}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-body-1" }, toDisplayString(new Date(item.date).toDateString()), 1)
                              ];
                            }
                          }),
                          "item.status": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VChip, {
                                color: item.status === "Published" ? "success" : "warning",
                                size: "small"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(item.status)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VChip, {
                                  color: item.status === "Published" ? "success" : "warning",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ];
                            }
                          }),
                          "item.actions": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VMenu, { activator: "parent" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VList, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItem, {
                                                  value: "view",
                                                  to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` View `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" View ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, {
                                                  value: "delete",
                                                  onClick: ($event) => deleteReview(item.id)
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Delete `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Delete ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItem, {
                                                    value: "view",
                                                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" View ")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"]),
                                                  createVNode(VListItem, {
                                                    value: "delete",
                                                    onClick: ($event) => deleteReview(item.id)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VList, null, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, {
                                                  value: "view",
                                                  to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" View ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"]),
                                                createVNode(VListItem, {
                                                  value: "delete",
                                                  onClick: ($event) => deleteReview(item.id)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-more-2-line" }),
                                      createVNode(VMenu, { activator: "parent" }, {
                                        default: withCtx(() => [
                                          createVNode(VList, null, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, {
                                                value: "view",
                                                to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" View ")
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]),
                                              createVNode(VListItem, {
                                                value: "delete",
                                                onClick: ($event) => deleteReview(item.id)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_IconBtn, { size: "small" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-more-2-line" }),
                                    createVNode(VMenu, { activator: "parent" }, {
                                      default: withCtx(() => [
                                        createVNode(VList, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, {
                                              value: "view",
                                              to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" View ")
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]),
                                            createVNode(VListItem, {
                                              value: "delete",
                                              onClick: ($event) => deleteReview(item.id)
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
                          bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1"${_scopeId4}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base"${_scopeId4}> Rows Per Page: `);
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(itemsPerPage),
                                "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                class: "per-page-select",
                                variant: "plain",
                                items: [10, 20, 25, 50, 100]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId4}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReviews)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                class: "flip-in-rtl",
                                icon: "ri-arrow-left-s-line",
                                variant: "text",
                                density: "comfortable",
                                color: "high-emphasis",
                                disabled: unref(page) <= 1,
                                onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "flip-in-rtl",
                                icon: "ri-arrow-right-s-line",
                                density: "comfortable",
                                variant: "text",
                                color: "high-emphasis",
                                disabled: unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)),
                                onClick: ($event) => unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReviews) / unref(itemsPerPage)) : page.value++
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
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
                                  createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReviews))), 1),
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
                                      disabled: unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)),
                                      onClick: ($event) => unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReviews) / unref(itemsPerPage)) : page.value++
                                    }, null, 8, ["disabled", "onClick"])
                                  ])
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
                              createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-4" }, [
                                createVNode(VTextField, {
                                  modelValue: unref(searchQuery),
                                  "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                  style: { "max-inline-size": "250px", "min-inline-size": "200px" },
                                  placeholder: "Search",
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex flex-row gap-4 align-center flex-wrap" }, [
                                  createVNode(VSelect, {
                                    modelValue: unref(selectedStatus),
                                    "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                    style: { "min-inline-size": "6.25rem" },
                                    density: "compact",
                                    items: [
                                      { title: "All", value: "All" },
                                      { title: "Published", value: "Published" },
                                      { title: "Pending", value: "Pending" }
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Export ")
                                    ]),
                                    _: 1
                                  })
                                ])
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
                            items: unref(reviews),
                            "show-select": "",
                            "items-length": unref(totalReviews),
                            "item-value": "id",
                            class: "text-no-wrap rounded-0",
                            "onUpdate:options": updateOptions
                          }, {
                            "item.product": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                                createVNode(VAvatar, {
                                  image: item.productImage,
                                  size: 38,
                                  variant: "tonal",
                                  rounded: ""
                                }, null, 8, ["image"]),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                                  createVNode("span", { class: "text-sm text-wrap clamp-text" }, toDisplayString(item.companyName), 1)
                                ])
                              ])
                            ]),
                            "item.reviewer": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                createVNode(VAvatar, {
                                  image: item.avatar,
                                  size: "34"
                                }, null, 8, ["image"]),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("h6", { class: "text-h6" }, [
                                    createVNode(_component_RouterLink, {
                                      to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } },
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.reviewer), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("span", { class: "text-body-2" }, toDisplayString(item.email), 1)
                                ])
                              ])
                            ]),
                            "item.review": withCtx(({ item }) => [
                              createVNode("div", { class: "py-5" }, [
                                createVNode(VRating, {
                                  size: 24,
                                  readonly: "",
                                  "model-value": item.review
                                }, null, 8, ["model-value"]),
                                createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(item.head), 1),
                                createVNode("p", { class: "text-sm text-medium-emphasis text-wrap mb-0" }, toDisplayString(item.para), 1)
                              ])
                            ]),
                            "item.date": withCtx(({ item }) => [
                              createVNode("span", { class: "text-body-1" }, toDisplayString(new Date(item.date).toDateString()), 1)
                            ]),
                            "item.status": withCtx(({ item }) => [
                              createVNode(VChip, {
                                color: item.status === "Published" ? "success" : "warning",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.status), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            "item.actions": withCtx(({ item }) => [
                              createVNode(_component_IconBtn, { size: "small" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-more-2-line" }),
                                  createVNode(VMenu, { activator: "parent" }, {
                                    default: withCtx(() => [
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            value: "view",
                                            to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" View ")
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]),
                                          createVNode(VListItem, {
                                            value: "delete",
                                            onClick: ($event) => deleteReview(item.id)
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
                                createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReviews))), 1),
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
                                    disabled: unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)),
                                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReviews) / unref(itemsPerPage)) : page.value++
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-4" }, [
                              createVNode(VTextField, {
                                modelValue: unref(searchQuery),
                                "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                style: { "max-inline-size": "250px", "min-inline-size": "200px" },
                                placeholder: "Search",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex flex-row gap-4 align-center flex-wrap" }, [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedStatus),
                                  "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                  style: { "min-inline-size": "6.25rem" },
                                  density: "compact",
                                  items: [
                                    { title: "All", value: "All" },
                                    { title: "Published", value: "Published" },
                                    { title: "Pending", value: "Pending" }
                                  ]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Export ")
                                  ]),
                                  _: 1
                                })
                              ])
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
                          items: unref(reviews),
                          "show-select": "",
                          "items-length": unref(totalReviews),
                          "item-value": "id",
                          class: "text-no-wrap rounded-0",
                          "onUpdate:options": updateOptions
                        }, {
                          "item.product": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                              createVNode(VAvatar, {
                                image: item.productImage,
                                size: 38,
                                variant: "tonal",
                                rounded: ""
                              }, null, 8, ["image"]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                                createVNode("span", { class: "text-sm text-wrap clamp-text" }, toDisplayString(item.companyName), 1)
                              ])
                            ])
                          ]),
                          "item.reviewer": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                              createVNode(VAvatar, {
                                image: item.avatar,
                                size: "34"
                              }, null, 8, ["image"]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("h6", { class: "text-h6" }, [
                                  createVNode(_component_RouterLink, {
                                    to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } },
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.reviewer), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("span", { class: "text-body-2" }, toDisplayString(item.email), 1)
                              ])
                            ])
                          ]),
                          "item.review": withCtx(({ item }) => [
                            createVNode("div", { class: "py-5" }, [
                              createVNode(VRating, {
                                size: 24,
                                readonly: "",
                                "model-value": item.review
                              }, null, 8, ["model-value"]),
                              createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(item.head), 1),
                              createVNode("p", { class: "text-sm text-medium-emphasis text-wrap mb-0" }, toDisplayString(item.para), 1)
                            ])
                          ]),
                          "item.date": withCtx(({ item }) => [
                            createVNode("span", { class: "text-body-1" }, toDisplayString(new Date(item.date).toDateString()), 1)
                          ]),
                          "item.status": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: item.status === "Published" ? "success" : "warning",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.actions": withCtx(({ item }) => [
                            createVNode(_component_IconBtn, { size: "small" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-more-2-line" }),
                                createVNode(VMenu, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, {
                                          value: "view",
                                          to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" View ")
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]),
                                        createVNode(VListItem, {
                                          value: "delete",
                                          onClick: ($event) => deleteReview(item.id)
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
                              createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReviews))), 1),
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
                                  disabled: unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)),
                                  onClick: ($event) => unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReviews) / unref(itemsPerPage)) : page.value++
                                }, null, 8, ["disabled", "onClick"])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["model-value", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: _ctx.$vuetify.display.smAndUp ? "border-e" : "border-b"
                                  }, [
                                    createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                      createVNode("h4", { class: "text-h3 text-primary" }, " 4.89 "),
                                      createVNode(VIcon, {
                                        icon: "ri-star-smile-line",
                                        color: "primary",
                                        size: "32"
                                      })
                                    ]),
                                    createVNode("h6", { class: "my-2 text-h6" }, " Total 187 reviews "),
                                    createVNode("div", { class: "mb-2" }, " All reviews are from genuine customers "),
                                    createVNode(VChip, {
                                      color: "primary",
                                      size: "small",
                                      class: _ctx.$vuetify.display.smAndUp ? "" : "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" +5 This week ")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])
                                  ], 2)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(reviewCardData, (item, index) => {
                                    return createVNode("div", {
                                      key: index,
                                      class: "d-flex align-center gap-2 mb-3"
                                    }, [
                                      createVNode("div", { class: "text-sm text-no-wrap" }, toDisplayString(item.rating) + " Star ", 1),
                                      createVNode("div", { class: "w-100" }, [
                                        createVNode(VProgressLinear, {
                                          color: "primary",
                                          height: "8",
                                          "model-value": item.value / 185 * 100,
                                          rounded: ""
                                        }, null, 8, ["model-value"])
                                      ]),
                                      createVNode("div", { class: "text-sm" }, toDisplayString(item.value), 1)
                                    ]);
                                  }), 64))
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "5"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5 mb-2" }, " Reviews statistics "),
                                    createVNode("div", { class: "mb-9" }, [
                                      createVNode("span", { class: "me-2" }, "12 New Reviews"),
                                      createVNode(VChip, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" +8.4% ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-high-emphasis text-body-1 mb-2" }, [
                                        createVNode("span", { class: "text-success" }, "87%"),
                                        createTextVNode(" Positive Reviews ")
                                      ]),
                                      createVNode("div", { class: "text-body-2" }, " Weekly Report ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "7"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-start justify-sm-end" }, [
                                    createVNode(_component_VueApexCharts, {
                                      id: "shipment-statistics",
                                      type: "bar",
                                      height: "150",
                                      options: reviewStatChartConfig,
                                      series: reviewStatChartSeries
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
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-4" }, [
                            createVNode(VTextField, {
                              modelValue: unref(searchQuery),
                              "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                              style: { "max-inline-size": "250px", "min-inline-size": "200px" },
                              placeholder: "Search",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "d-flex flex-row gap-4 align-center flex-wrap" }, [
                              createVNode(VSelect, {
                                modelValue: unref(selectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                style: { "min-inline-size": "6.25rem" },
                                density: "compact",
                                items: [
                                  { title: "All", value: "All" },
                                  { title: "Published", value: "Published" },
                                  { title: "Pending", value: "Pending" }
                                ]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Export ")
                                ]),
                                _: 1
                              })
                            ])
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
                        items: unref(reviews),
                        "show-select": "",
                        "items-length": unref(totalReviews),
                        "item-value": "id",
                        class: "text-no-wrap rounded-0",
                        "onUpdate:options": updateOptions
                      }, {
                        "item.product": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex gap-x-3 align-center" }, [
                            createVNode(VAvatar, {
                              image: item.productImage,
                              size: 38,
                              variant: "tonal",
                              rounded: ""
                            }, null, 8, ["image"]),
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                              createVNode("span", { class: "text-sm text-wrap clamp-text" }, toDisplayString(item.companyName), 1)
                            ])
                          ])
                        ]),
                        "item.reviewer": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                            createVNode(VAvatar, {
                              image: item.avatar,
                              size: "34"
                            }, null, 8, ["image"]),
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("h6", { class: "text-h6" }, [
                                createVNode(_component_RouterLink, {
                                  to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } },
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.reviewer), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("span", { class: "text-body-2" }, toDisplayString(item.email), 1)
                            ])
                          ])
                        ]),
                        "item.review": withCtx(({ item }) => [
                          createVNode("div", { class: "py-5" }, [
                            createVNode(VRating, {
                              size: 24,
                              readonly: "",
                              "model-value": item.review
                            }, null, 8, ["model-value"]),
                            createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(item.head), 1),
                            createVNode("p", { class: "text-sm text-medium-emphasis text-wrap mb-0" }, toDisplayString(item.para), 1)
                          ])
                        ]),
                        "item.date": withCtx(({ item }) => [
                          createVNode("span", { class: "text-body-1" }, toDisplayString(new Date(item.date).toDateString()), 1)
                        ]),
                        "item.status": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: item.status === "Published" ? "success" : "warning",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.actions": withCtx(({ item }) => [
                          createVNode(_component_IconBtn, { size: "small" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-more-2-line" }),
                              createVNode(VMenu, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        value: "view",
                                        to: { name: "apps-ecommerce-order-details-id", params: { id: item.id } }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" View ")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode(VListItem, {
                                        value: "delete",
                                        onClick: ($event) => deleteReview(item.id)
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
                            createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReviews))), 1),
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
                                disabled: unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)),
                                onClick: ($event) => unref(page) >= Math.ceil(unref(totalReviews) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReviews) / unref(itemsPerPage)) : page.value++
                              }, null, 8, ["disabled", "onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["model-value", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/manage-review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
