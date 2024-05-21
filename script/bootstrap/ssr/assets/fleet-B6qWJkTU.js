import { ref, onMounted, watch, resolveComponent, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, withDirectives, vShow, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import mapboxgl from "mapbox-gl";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { u as useResponsiveLeftSidebar, V as VLayout, a as VMain } from "./VMain-BANwmGQ5.js";
import { V as VExpandTransition } from "./index-D5WAZiYx.js";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { k as useDisplay, a as VIcon, g as VProgressLinear } from "../ssr.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import "./ssrBoot-Co4_dNdy.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
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
import "@antfu/utils";
const fleetImg = "/build/assets/fleet-car-8uk83TSO.png";
const accessToken = "pk.eyJ1Ijoic29jaWFsZXhwbG9yZXIiLCJhIjoiREFQbXBISSJ9.dwFTwfSaWsHvktHrRtpydQ";
const _sfc_main = {
  __name: "fleet",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLeftSidebarOpen } = useResponsiveLeftSidebar();
    const map = ref();
    const vuetifyDisplay = useDisplay();
    const carImgs = ref([
      fleetImg,
      fleetImg,
      fleetImg,
      fleetImg
    ]);
    const refCars = ref([]);
    const showPanel = ref([
      true,
      false,
      false,
      false
    ]);
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              -73.999024,
              40.75249842
            ]
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              -74.03,
              40.75699842
            ]
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              -73.967524,
              40.7599842
            ]
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              -74.0325,
              40.742992
            ]
          }
        }
      ]
    };
    const activeIndex = ref(0);
    onMounted(() => {
      mapboxgl.accessToken = accessToken;
      map.value = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/light-v9",
        center: [
          -73.999024,
          40.75249842
        ],
        zoom: 12.25
      });
      for (let index = 0; index < geojson.features.length; index++)
        new mapboxgl.Marker({ element: refCars.value[index] }).setLngLat(geojson.features[index].geometry.coordinates).addTo(map.value);
      refCars.value[activeIndex.value].classList.add("marker-focus");
    });
    const vehicleTrackingData = [
      {
        name: "VOL-342808",
        location: "Chelsea, NY, USA",
        progress: 88,
        driverName: "Veronica Herman"
      },
      {
        name: "VOL-954784",
        location: "Lincoln Harbor, NY, USA",
        progress: 90,
        driverName: "Myrtle Ullrich"
      },
      {
        name: "VOL-342808",
        location: "Midtown East, NY, USA",
        progress: 60,
        driverName: "Barry Schowalter"
      },
      {
        name: "VOL-343908",
        location: "Hoboken, NY, USA",
        progress: 28,
        driverName: "Helen Jacobs"
      }
    ];
    const flyToLocation = (geolocation, index) => {
      activeIndex.value = index;
      showPanel.value.fill(false);
      showPanel.value[index] = !showPanel.value[index];
      if (vuetifyDisplay.mdAndDown.value)
        isLeftSidebarOpen.value = false;
      map.value.flyTo({
        center: geolocation,
        zoom: 16
      });
    };
    watch(activeIndex, () => {
      refCars.value.forEach((car, index) => {
        if (index === activeIndex.value)
          car.classList.add("marker-focus");
        else
          car.classList.remove("marker-focus");
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VLayout, mergeProps({ class: "fleet-app-layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: unref(isLeftSidebarOpen),
              "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
              width: "320",
              absolute: "",
              touchless: "",
              border: 0,
              location: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "h-100",
                    flat: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_IconBtn, {
                                class: "d-lg-none",
                                onClick: ($event) => isLeftSidebarOpen.value = !unref(isLeftSidebarOpen)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-close-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-close-line" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_IconBtn, {
                                  class: "d-lg-none",
                                  onClick: ($event) => isLeftSidebarOpen.value = !unref(isLeftSidebarOpen)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-close-line" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Fleet `);
                                  } else {
                                    return [
                                      createTextVNode(" Fleet ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fleet ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(PerfectScrollbar), {
                          options: { wheelPropagation: false, suppressScrollX: true },
                          style: { "block-size": "calc(100% - 60px)" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, { class: "pt-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(vehicleTrackingData, (vehicle, index) => {
                                      _push6(`<div class="mb-6"${_scopeId5}><div class="d-flex align-center justify-space-between cursor-pointer"${_scopeId5}><div class="d-flex gap-x-4"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VAvatar, {
                                        icon: "ri-car-line",
                                        variant: "tonal",
                                        color: "secondary"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<div${_scopeId5}><h6 class="text-h6 font-weight-regular"${_scopeId5}>${ssrInterpolate(vehicle.name)}</h6><div class="text-body-1"${_scopeId5}>${ssrInterpolate(vehicle.location)}</div></div></div>`);
                                      _push6(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                              class: showPanel.value[index] ? "text-high-emphasis" : ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                                class: showPanel.value[index] ? "text-high-emphasis" : ""
                                              }, null, 8, ["icon", "class"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                      _push6(ssrRenderComponent(VExpandTransition, { mode: "out-in" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div style="${ssrRenderStyle(showPanel.value[index] ? null : { display: "none" })}"${_scopeId6}><div class="py-4 my-4"${_scopeId6}><div class="d-flex justify-space-between text-body-1 mb-1"${_scopeId6}><span class="text-high-emphasis"${_scopeId6}>Delivery Process</span><span${_scopeId6}>${ssrInterpolate(vehicle.progress)}%</span></div>`);
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              "model-value": vehicle.progress,
                                              color: "primary",
                                              rounded: "",
                                              height: "6"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VTimeline, {
                                              side: "end",
                                              align: "start",
                                              "truncate-line": "both",
                                              density: "compact",
                                              class: "v-timeline--variant-outlined"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTimelineItem, {
                                                    icon: "ri-checkbox-circle-line",
                                                    "dot-color": "rgb(var(--v-theme-surface))",
                                                    "icon-color": "success",
                                                    "fill-dot": "",
                                                    size: "20",
                                                    elevation: 0
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="text-caption text-uppercase text-success"${_scopeId8}> TRACKING NUMBER CREATED </div><div class="app-timeline-title"${_scopeId8}>${ssrInterpolate(vehicle.driverName)}</div><div class="text-body-2 mb-1"${_scopeId8}> Sep 01, 7:53 AM </div>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                          createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                          createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VTimelineItem, {
                                                    icon: "ri-checkbox-circle-line",
                                                    "dot-color": "rgb(var(--v-theme-surface))",
                                                    "icon-color": "success",
                                                    "fill-dot": "",
                                                    size: "20",
                                                    elevation: 0
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="text-caption text-uppercase text-success"${_scopeId8}> OUT FOR DELIVERY </div><div class="app-timeline-title"${_scopeId8}> Veronica Herman </div><div class="text-body-2 mb-1"${_scopeId8}> Sep 03, 8:02 AM </div>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                          createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VTimelineItem, {
                                                    icon: "ri-map-pin-line",
                                                    "dot-color": "rgb(var(--v-theme-surface))",
                                                    "icon-color": "primary",
                                                    "fill-dot": "",
                                                    size: "20",
                                                    elevation: 0
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="text-caption text-uppercase text-primary"${_scopeId8}> ARRIVED </div><div class="app-timeline-title"${_scopeId8}> Veronica Herman </div><div class="text-body-2"${_scopeId8}> Sep 04, 8:18 AM </div>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                          createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VTimelineItem, {
                                                      icon: "ri-checkbox-circle-line",
                                                      "dot-color": "rgb(var(--v-theme-surface))",
                                                      "icon-color": "success",
                                                      "fill-dot": "",
                                                      size: "20",
                                                      elevation: 0
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                        createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                        createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VTimelineItem, {
                                                      icon: "ri-checkbox-circle-line",
                                                      "dot-color": "rgb(var(--v-theme-surface))",
                                                      "icon-color": "success",
                                                      "fill-dot": "",
                                                      size: "20",
                                                      elevation: 0
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                        createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VTimelineItem, {
                                                      icon: "ri-map-pin-line",
                                                      "dot-color": "rgb(var(--v-theme-surface))",
                                                      "icon-color": "primary",
                                                      "fill-dot": "",
                                                      size: "20",
                                                      elevation: 0
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                        createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                          } else {
                                            return [
                                              withDirectives(createVNode("div", null, [
                                                createVNode("div", { class: "py-4 my-4" }, [
                                                  createVNode("div", { class: "d-flex justify-space-between text-body-1 mb-1" }, [
                                                    createVNode("span", { class: "text-high-emphasis" }, "Delivery Process"),
                                                    createVNode("span", null, toDisplayString(vehicle.progress) + "%", 1)
                                                  ]),
                                                  createVNode(VProgressLinear, {
                                                    "model-value": vehicle.progress,
                                                    color: "primary",
                                                    rounded: "",
                                                    height: "6"
                                                  }, null, 8, ["model-value"])
                                                ]),
                                                createVNode("div", null, [
                                                  createVNode(VTimeline, {
                                                    side: "end",
                                                    align: "start",
                                                    "truncate-line": "both",
                                                    density: "compact",
                                                    class: "v-timeline--variant-outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTimelineItem, {
                                                        icon: "ri-checkbox-circle-line",
                                                        "dot-color": "rgb(var(--v-theme-surface))",
                                                        "icon-color": "success",
                                                        "fill-dot": "",
                                                        size: "20",
                                                        elevation: 0
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                          createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                          createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VTimelineItem, {
                                                        icon: "ri-checkbox-circle-line",
                                                        "dot-color": "rgb(var(--v-theme-surface))",
                                                        "icon-color": "success",
                                                        "fill-dot": "",
                                                        size: "20",
                                                        elevation: 0
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                          createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VTimelineItem, {
                                                        icon: "ri-map-pin-line",
                                                        "dot-color": "rgb(var(--v-theme-surface))",
                                                        "icon-color": "primary",
                                                        "fill-dot": "",
                                                        size: "20",
                                                        elevation: 0
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                          createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ])
                                              ], 512), [
                                                [vShow, showPanel.value[index]]
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(vehicleTrackingData, (vehicle, index) => {
                                        return createVNode("div", {
                                          key: index,
                                          class: "mb-6"
                                        }, [
                                          createVNode("div", {
                                            class: "d-flex align-center justify-space-between cursor-pointer",
                                            onClick: ($event) => flyToLocation(geojson.features[index].geometry.coordinates, index)
                                          }, [
                                            createVNode("div", { class: "d-flex gap-x-4" }, [
                                              createVNode(VAvatar, {
                                                icon: "ri-car-line",
                                                variant: "tonal",
                                                color: "secondary"
                                              }),
                                              createVNode("div", null, [
                                                createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.name), 1),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(vehicle.location), 1)
                                              ])
                                            ]),
                                            createVNode(_component_IconBtn, { size: "small" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                                  class: showPanel.value[index] ? "text-high-emphasis" : ""
                                                }, null, 8, ["icon", "class"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 8, ["onClick"]),
                                          createVNode(VExpandTransition, { mode: "out-in" }, {
                                            default: withCtx(() => [
                                              withDirectives(createVNode("div", null, [
                                                createVNode("div", { class: "py-4 my-4" }, [
                                                  createVNode("div", { class: "d-flex justify-space-between text-body-1 mb-1" }, [
                                                    createVNode("span", { class: "text-high-emphasis" }, "Delivery Process"),
                                                    createVNode("span", null, toDisplayString(vehicle.progress) + "%", 1)
                                                  ]),
                                                  createVNode(VProgressLinear, {
                                                    "model-value": vehicle.progress,
                                                    color: "primary",
                                                    rounded: "",
                                                    height: "6"
                                                  }, null, 8, ["model-value"])
                                                ]),
                                                createVNode("div", null, [
                                                  createVNode(VTimeline, {
                                                    side: "end",
                                                    align: "start",
                                                    "truncate-line": "both",
                                                    density: "compact",
                                                    class: "v-timeline--variant-outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTimelineItem, {
                                                        icon: "ri-checkbox-circle-line",
                                                        "dot-color": "rgb(var(--v-theme-surface))",
                                                        "icon-color": "success",
                                                        "fill-dot": "",
                                                        size: "20",
                                                        elevation: 0
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                          createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                          createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VTimelineItem, {
                                                        icon: "ri-checkbox-circle-line",
                                                        "dot-color": "rgb(var(--v-theme-surface))",
                                                        "icon-color": "success",
                                                        "fill-dot": "",
                                                        size: "20",
                                                        elevation: 0
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                          createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VTimelineItem, {
                                                        icon: "ri-map-pin-line",
                                                        "dot-color": "rgb(var(--v-theme-surface))",
                                                        "icon-color": "primary",
                                                        "fill-dot": "",
                                                        size: "20",
                                                        elevation: 0
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                          createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                          createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ])
                                              ], 512), [
                                                [vShow, showPanel.value[index]]
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, { class: "pt-0" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(vehicleTrackingData, (vehicle, index) => {
                                      return createVNode("div", {
                                        key: index,
                                        class: "mb-6"
                                      }, [
                                        createVNode("div", {
                                          class: "d-flex align-center justify-space-between cursor-pointer",
                                          onClick: ($event) => flyToLocation(geojson.features[index].geometry.coordinates, index)
                                        }, [
                                          createVNode("div", { class: "d-flex gap-x-4" }, [
                                            createVNode(VAvatar, {
                                              icon: "ri-car-line",
                                              variant: "tonal",
                                              color: "secondary"
                                            }),
                                            createVNode("div", null, [
                                              createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.name), 1),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(vehicle.location), 1)
                                            ])
                                          ]),
                                          createVNode(_component_IconBtn, { size: "small" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                                class: showPanel.value[index] ? "text-high-emphasis" : ""
                                              }, null, 8, ["icon", "class"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ], 8, ["onClick"]),
                                        createVNode(VExpandTransition, { mode: "out-in" }, {
                                          default: withCtx(() => [
                                            withDirectives(createVNode("div", null, [
                                              createVNode("div", { class: "py-4 my-4" }, [
                                                createVNode("div", { class: "d-flex justify-space-between text-body-1 mb-1" }, [
                                                  createVNode("span", { class: "text-high-emphasis" }, "Delivery Process"),
                                                  createVNode("span", null, toDisplayString(vehicle.progress) + "%", 1)
                                                ]),
                                                createVNode(VProgressLinear, {
                                                  "model-value": vehicle.progress,
                                                  color: "primary",
                                                  rounded: "",
                                                  height: "6"
                                                }, null, 8, ["model-value"])
                                              ]),
                                              createVNode("div", null, [
                                                createVNode(VTimeline, {
                                                  side: "end",
                                                  align: "start",
                                                  "truncate-line": "both",
                                                  density: "compact",
                                                  class: "v-timeline--variant-outlined"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTimelineItem, {
                                                      icon: "ri-checkbox-circle-line",
                                                      "dot-color": "rgb(var(--v-theme-surface))",
                                                      "icon-color": "success",
                                                      "fill-dot": "",
                                                      size: "20",
                                                      elevation: 0
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                        createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                        createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VTimelineItem, {
                                                      icon: "ri-checkbox-circle-line",
                                                      "dot-color": "rgb(var(--v-theme-surface))",
                                                      "icon-color": "success",
                                                      "fill-dot": "",
                                                      size: "20",
                                                      elevation: 0
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                        createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VTimelineItem, {
                                                      icon: "ri-map-pin-line",
                                                      "dot-color": "rgb(var(--v-theme-surface))",
                                                      "icon-color": "primary",
                                                      "fill-dot": "",
                                                      size: "20",
                                                      elevation: 0
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                        createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                        createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ], 512), [
                                              [vShow, showPanel.value[index]]
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 64))
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
                          createVNode(VCardItem, null, {
                            append: withCtx(() => [
                              createVNode(_component_IconBtn, {
                                class: "d-lg-none",
                                onClick: ($event) => isLeftSidebarOpen.value = !unref(isLeftSidebarOpen)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-close-line" })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Fleet ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(PerfectScrollbar), {
                            options: { wheelPropagation: false, suppressScrollX: true },
                            style: { "block-size": "calc(100% - 60px)" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pt-0" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(vehicleTrackingData, (vehicle, index) => {
                                    return createVNode("div", {
                                      key: index,
                                      class: "mb-6"
                                    }, [
                                      createVNode("div", {
                                        class: "d-flex align-center justify-space-between cursor-pointer",
                                        onClick: ($event) => flyToLocation(geojson.features[index].geometry.coordinates, index)
                                      }, [
                                        createVNode("div", { class: "d-flex gap-x-4" }, [
                                          createVNode(VAvatar, {
                                            icon: "ri-car-line",
                                            variant: "tonal",
                                            color: "secondary"
                                          }),
                                          createVNode("div", null, [
                                            createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.name), 1),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(vehicle.location), 1)
                                          ])
                                        ]),
                                        createVNode(_component_IconBtn, { size: "small" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                              class: showPanel.value[index] ? "text-high-emphasis" : ""
                                            }, null, 8, ["icon", "class"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 8, ["onClick"]),
                                      createVNode(VExpandTransition, { mode: "out-in" }, {
                                        default: withCtx(() => [
                                          withDirectives(createVNode("div", null, [
                                            createVNode("div", { class: "py-4 my-4" }, [
                                              createVNode("div", { class: "d-flex justify-space-between text-body-1 mb-1" }, [
                                                createVNode("span", { class: "text-high-emphasis" }, "Delivery Process"),
                                                createVNode("span", null, toDisplayString(vehicle.progress) + "%", 1)
                                              ]),
                                              createVNode(VProgressLinear, {
                                                "model-value": vehicle.progress,
                                                color: "primary",
                                                rounded: "",
                                                height: "6"
                                              }, null, 8, ["model-value"])
                                            ]),
                                            createVNode("div", null, [
                                              createVNode(VTimeline, {
                                                side: "end",
                                                align: "start",
                                                "truncate-line": "both",
                                                density: "compact",
                                                class: "v-timeline--variant-outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTimelineItem, {
                                                    icon: "ri-checkbox-circle-line",
                                                    "dot-color": "rgb(var(--v-theme-surface))",
                                                    "icon-color": "success",
                                                    "fill-dot": "",
                                                    size: "20",
                                                    elevation: 0
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                      createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                      createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VTimelineItem, {
                                                    icon: "ri-checkbox-circle-line",
                                                    "dot-color": "rgb(var(--v-theme-surface))",
                                                    "icon-color": "success",
                                                    "fill-dot": "",
                                                    size: "20",
                                                    elevation: 0
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                      createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTimelineItem, {
                                                    icon: "ri-map-pin-line",
                                                    "dot-color": "rgb(var(--v-theme-surface))",
                                                    "icon-color": "primary",
                                                    "fill-dot": "",
                                                    size: "20",
                                                    elevation: 0
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                      createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                      createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])
                                          ], 512), [
                                            [vShow, showPanel.value[index]]
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "h-100",
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          append: withCtx(() => [
                            createVNode(_component_IconBtn, {
                              class: "d-lg-none",
                              onClick: ($event) => isLeftSidebarOpen.value = !unref(isLeftSidebarOpen)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-close-line" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Fleet ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(PerfectScrollbar), {
                          options: { wheelPropagation: false, suppressScrollX: true },
                          style: { "block-size": "calc(100% - 60px)" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "pt-0" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(vehicleTrackingData, (vehicle, index) => {
                                  return createVNode("div", {
                                    key: index,
                                    class: "mb-6"
                                  }, [
                                    createVNode("div", {
                                      class: "d-flex align-center justify-space-between cursor-pointer",
                                      onClick: ($event) => flyToLocation(geojson.features[index].geometry.coordinates, index)
                                    }, [
                                      createVNode("div", { class: "d-flex gap-x-4" }, [
                                        createVNode(VAvatar, {
                                          icon: "ri-car-line",
                                          variant: "tonal",
                                          color: "secondary"
                                        }),
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.name), 1),
                                          createVNode("div", { class: "text-body-1" }, toDisplayString(vehicle.location), 1)
                                        ])
                                      ]),
                                      createVNode(_component_IconBtn, { size: "small" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                            class: showPanel.value[index] ? "text-high-emphasis" : ""
                                          }, null, 8, ["icon", "class"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 8, ["onClick"]),
                                    createVNode(VExpandTransition, { mode: "out-in" }, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode("div", null, [
                                          createVNode("div", { class: "py-4 my-4" }, [
                                            createVNode("div", { class: "d-flex justify-space-between text-body-1 mb-1" }, [
                                              createVNode("span", { class: "text-high-emphasis" }, "Delivery Process"),
                                              createVNode("span", null, toDisplayString(vehicle.progress) + "%", 1)
                                            ]),
                                            createVNode(VProgressLinear, {
                                              "model-value": vehicle.progress,
                                              color: "primary",
                                              rounded: "",
                                              height: "6"
                                            }, null, 8, ["model-value"])
                                          ]),
                                          createVNode("div", null, [
                                            createVNode(VTimeline, {
                                              side: "end",
                                              align: "start",
                                              "truncate-line": "both",
                                              density: "compact",
                                              class: "v-timeline--variant-outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTimelineItem, {
                                                  icon: "ri-checkbox-circle-line",
                                                  "dot-color": "rgb(var(--v-theme-surface))",
                                                  "icon-color": "success",
                                                  "fill-dot": "",
                                                  size: "20",
                                                  elevation: 0
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                    createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                    createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VTimelineItem, {
                                                  icon: "ri-checkbox-circle-line",
                                                  "dot-color": "rgb(var(--v-theme-surface))",
                                                  "icon-color": "success",
                                                  "fill-dot": "",
                                                  size: "20",
                                                  elevation: 0
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                    createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTimelineItem, {
                                                  icon: "ri-map-pin-line",
                                                  "dot-color": "rgb(var(--v-theme-surface))",
                                                  "icon-color": "primary",
                                                  "fill-dot": "",
                                                  size: "20",
                                                  elevation: 0
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                    createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                    createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ], 512), [
                                          [vShow, showPanel.value[index]]
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    class: "d-lg-none navigation-toggle-btn rounded-sm",
                    variant: "elevated",
                    onClick: ($event) => isLeftSidebarOpen.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-menu-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-menu-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div id="mapContainer" class="basemap"${_scopeId2}></div><!--[-->`);
                  ssrRenderList(carImgs.value, (car, index) => {
                    _push3(`<img${ssrRenderAttr("src", car)} alt="car Img marker" height="42" width="20"${_scopeId2}>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-100" }, [
                      createVNode(_component_IconBtn, {
                        class: "d-lg-none navigation-toggle-btn rounded-sm",
                        variant: "elevated",
                        onClick: ($event) => isLeftSidebarOpen.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-menu-line" })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", {
                        id: "mapContainer",
                        class: "basemap"
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(carImgs.value, (car, index) => {
                        return openBlock(), createBlock("img", {
                          key: index,
                          ref_for: true,
                          ref_key: "refCars",
                          ref: refCars,
                          src: car,
                          alt: "car Img marker",
                          height: "42",
                          width: "20"
                        }, null, 8, ["src"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VNavigationDrawer, {
                modelValue: unref(isLeftSidebarOpen),
                "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                width: "320",
                absolute: "",
                touchless: "",
                border: 0,
                location: "start"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "h-100",
                    flat: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        append: withCtx(() => [
                          createVNode(_component_IconBtn, {
                            class: "d-lg-none",
                            onClick: ($event) => isLeftSidebarOpen.value = !unref(isLeftSidebarOpen)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-close-line" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Fleet ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(PerfectScrollbar), {
                        options: { wheelPropagation: false, suppressScrollX: true },
                        style: { "block-size": "calc(100% - 60px)" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pt-0" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(vehicleTrackingData, (vehicle, index) => {
                                return createVNode("div", {
                                  key: index,
                                  class: "mb-6"
                                }, [
                                  createVNode("div", {
                                    class: "d-flex align-center justify-space-between cursor-pointer",
                                    onClick: ($event) => flyToLocation(geojson.features[index].geometry.coordinates, index)
                                  }, [
                                    createVNode("div", { class: "d-flex gap-x-4" }, [
                                      createVNode(VAvatar, {
                                        icon: "ri-car-line",
                                        variant: "tonal",
                                        color: "secondary"
                                      }),
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(vehicle.name), 1),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(vehicle.location), 1)
                                      ])
                                    ]),
                                    createVNode(_component_IconBtn, { size: "small" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: showPanel.value[index] ? "ri-arrow-down-s-line" : _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line",
                                          class: showPanel.value[index] ? "text-high-emphasis" : ""
                                        }, null, 8, ["icon", "class"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 8, ["onClick"]),
                                  createVNode(VExpandTransition, { mode: "out-in" }, {
                                    default: withCtx(() => [
                                      withDirectives(createVNode("div", null, [
                                        createVNode("div", { class: "py-4 my-4" }, [
                                          createVNode("div", { class: "d-flex justify-space-between text-body-1 mb-1" }, [
                                            createVNode("span", { class: "text-high-emphasis" }, "Delivery Process"),
                                            createVNode("span", null, toDisplayString(vehicle.progress) + "%", 1)
                                          ]),
                                          createVNode(VProgressLinear, {
                                            "model-value": vehicle.progress,
                                            color: "primary",
                                            rounded: "",
                                            height: "6"
                                          }, null, 8, ["model-value"])
                                        ]),
                                        createVNode("div", null, [
                                          createVNode(VTimeline, {
                                            side: "end",
                                            align: "start",
                                            "truncate-line": "both",
                                            density: "compact",
                                            class: "v-timeline--variant-outlined"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTimelineItem, {
                                                icon: "ri-checkbox-circle-line",
                                                "dot-color": "rgb(var(--v-theme-surface))",
                                                "icon-color": "success",
                                                "fill-dot": "",
                                                size: "20",
                                                elevation: 0
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-caption text-uppercase text-success" }, " TRACKING NUMBER CREATED "),
                                                  createVNode("div", { class: "app-timeline-title" }, toDisplayString(vehicle.driverName), 1),
                                                  createVNode("div", { class: "text-body-2 mb-1" }, " Sep 01, 7:53 AM ")
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VTimelineItem, {
                                                icon: "ri-checkbox-circle-line",
                                                "dot-color": "rgb(var(--v-theme-surface))",
                                                "icon-color": "success",
                                                "fill-dot": "",
                                                size: "20",
                                                elevation: 0
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-caption text-uppercase text-success" }, " OUT FOR DELIVERY "),
                                                  createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                  createVNode("div", { class: "text-body-2 mb-1" }, " Sep 03, 8:02 AM ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTimelineItem, {
                                                icon: "ri-map-pin-line",
                                                "dot-color": "rgb(var(--v-theme-surface))",
                                                "icon-color": "primary",
                                                "fill-dot": "",
                                                size: "20",
                                                elevation: 0
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-caption text-uppercase text-primary" }, " ARRIVED "),
                                                  createVNode("div", { class: "app-timeline-title" }, " Veronica Herman "),
                                                  createVNode("div", { class: "text-body-2" }, " Sep 04, 8:18 AM ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ], 512), [
                                        [vShow, showPanel.value[index]]
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
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
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-100" }, [
                    createVNode(_component_IconBtn, {
                      class: "d-lg-none navigation-toggle-btn rounded-sm",
                      variant: "elevated",
                      onClick: ($event) => isLeftSidebarOpen.value = true
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-menu-line" })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("div", {
                      id: "mapContainer",
                      class: "basemap"
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(carImgs.value, (car, index) => {
                      return openBlock(), createBlock("img", {
                        key: index,
                        ref_for: true,
                        ref_key: "refCars",
                        ref: refCars,
                        src: car,
                        alt: "car Img marker",
                        height: "42",
                        width: "20"
                      }, null, 8, ["src"]);
                    }), 128))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/logistics/fleet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
