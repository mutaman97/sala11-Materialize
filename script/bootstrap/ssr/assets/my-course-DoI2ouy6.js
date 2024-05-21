import { ref, withAsyncContext, computed, watch, resolveComponent, mergeProps, withCtx, unref, isRef, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { VideoPlayer } from "@videojs-player/vue";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { _ as _export_sfc, a as VIcon, g as VProgressLinear, V as VBtn } from "../ssr.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VPagination } from "./VPagination-BH_qhohv.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import "@vueuse/core";
import "destr";
import "ufo";
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
import "./VList-Bay5Fixr.js";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
import "./dialog-transition-CtM2qLK8.js";
import "./easing-BikAOx6-.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VInput-Bla8Vlgt.js";
/* empty css               */
import "./VSlideGroup-Bvz86g7R.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
const _sfc_main$1 = {
  __name: "AcademyMyCourses",
  __ssrInlineRender: true,
  props: {
    searchQuery: {
      type: String,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const itemsPerPage = ref(6);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const hideCompleted = ref(true);
    const label = ref("All Courses");
    const { data: coursesData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/academy/courses", {
      query: {
        q: () => props.searchQuery,
        hideCompleted,
        label,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const courses = computed(() => coursesData.value.courses);
    const totalCourse = computed(() => coursesData.value.total);
    watch([
      hideCompleted,
      label,
      () => props.searchQuery
    ], () => {
      page.value = 1;
    });
    const resolveChipColor = (tags) => {
      if (tags === "Web")
        return "primary";
      if (tags === "Art")
        return "success";
      if (tags === "UI/UX")
        return "error";
      if (tags === "Psychology")
        return "warning";
      if (tags === "Design")
        return "info";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(VCard, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between align-center flex-wrap gap-4 mb-6" data-v-f14e99c8${_scopeId2}><div data-v-f14e99c8${_scopeId2}><h5 class="text-h5" data-v-f14e99c8${_scopeId2}> My Courses </h5><div class="text-body-1" data-v-f14e99c8${_scopeId2}> Total 6 course you have purchased </div></div><div class="d-flex flex-wrap align-center gap-y-4 gap-x-6" data-v-f14e99c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(label),
                    "onUpdate:modelValue": ($event) => isRef(label) ? label.value = $event : null,
                    density: "compact",
                    items: [
                      { title: "Web", value: "web" },
                      { title: "Art", value: "art" },
                      { title: "UI/UX", value: "ui/ux" },
                      { title: "Psychology", value: "psychology" },
                      { title: "Design", value: "design" },
                      { title: "All Courses", value: "All Courses" }
                    ],
                    style: { "min-inline-size": "250px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(hideCompleted),
                    "onUpdate:modelValue": ($event) => isRef(hideCompleted) ? hideCompleted.value = $event : null,
                    label: "Hide Completed"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mb-6" data-v-f14e99c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(VRow, { class: "match-height" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(courses), (course) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "4",
                            sm: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="pa-2" data-v-f14e99c8${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VImg, {
                                        src: course.tutorImg,
                                        class: "cursor-pointer",
                                        onClick: () => _ctx.$router.push({ name: "apps-academy-course-details" })
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                      _push6(ssrRenderComponent(VCardText, { class: "pt-3" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex justify-space-between align-center mb-4" data-v-f14e99c8${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VChip, {
                                              variant: "tonal",
                                              color: resolveChipColor(course.tags),
                                              size: "small"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(course.tags)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(course.tags), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div class="d-flex align-center" data-v-f14e99c8${_scopeId6}><h6 class="text-h6 text-medium-emphasis me-1" data-v-f14e99c8${_scopeId6}>${ssrInterpolate(course.rating)}</h6>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "ri-star-fill",
                                              color: "warning",
                                              size: "24",
                                              class: "me-2"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="text-body-1" data-v-f14e99c8${_scopeId6}> (${ssrInterpolate(course.ratingCount)}) </div></div></div><h5 class="text-h5 mb-1" data-v-f14e99c8${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_RouterLink, {
                                              to: { name: "apps-academy-course-details" },
                                              class: "course-title"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(course.courseTitle)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(course.courseTitle), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</h5><p data-v-f14e99c8${_scopeId6}>${ssrInterpolate(course.desc)}</p>`);
                                            if (course.completedTasks !== course.totalTasks) {
                                              _push7(`<div class="d-flex align-center mb-1" data-v-f14e99c8${_scopeId6}>`);
                                              _push7(ssrRenderComponent(VIcon, {
                                                icon: "ri-time-line",
                                                size: "20",
                                                class: "me-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(`<div class="text-body-1 my-auto" data-v-f14e99c8${_scopeId6}>${ssrInterpolate(course.time)}</div></div>`);
                                            } else {
                                              _push7(`<div class="mb-2" data-v-f14e99c8${_scopeId6}>`);
                                              _push7(ssrRenderComponent(VIcon, {
                                                icon: "ri-check-line",
                                                color: "success",
                                                class: "me-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(`<span class="text-success text-body-1" data-v-f14e99c8${_scopeId6}>Completed</span></div>`);
                                            }
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              "model-value": course.completedTasks / course.totalTasks * 100,
                                              rounded: "",
                                              "rounded-bar": "",
                                              color: "primary",
                                              height: "8",
                                              class: "mb-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="d-flex flex-wrap gap-4" data-v-f14e99c8${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              variant: "outlined",
                                              color: "secondary",
                                              class: "flex-grow-1",
                                              to: { name: "apps-academy-course-details" }
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-refresh-line",
                                                    class: "flip-in-rtl"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: "ri-refresh-line",
                                                      class: "flip-in-rtl"
                                                    })
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Start Over `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Start Over ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            if (course.completedTasks !== course.totalTasks) {
                                              _push7(ssrRenderComponent(VBtn, {
                                                variant: "outlined",
                                                class: "flex-grow-1",
                                                to: { name: "apps-academy-course-details" }
                                              }, {
                                                append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VIcon, {
                                                      icon: "ri-arrow-right-line",
                                                      class: "flip-in-rtl"
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VIcon, {
                                                        icon: "ri-arrow-right-line",
                                                        class: "flip-in-rtl"
                                                      })
                                                    ];
                                                  }
                                                }),
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Continue `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Continue ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                                createVNode(VChip, {
                                                  variant: "tonal",
                                                  color: resolveChipColor(course.tags),
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(course.tags), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("div", { class: "d-flex align-center" }, [
                                                  createVNode("h6", { class: "text-h6 text-medium-emphasis me-1" }, toDisplayString(course.rating), 1),
                                                  createVNode(VIcon, {
                                                    icon: "ri-star-fill",
                                                    color: "warning",
                                                    size: "24",
                                                    class: "me-2"
                                                  }),
                                                  createVNode("div", { class: "text-body-1" }, " (" + toDisplayString(course.ratingCount) + ") ", 1)
                                                ])
                                              ]),
                                              createVNode("h5", { class: "text-h5 mb-1" }, [
                                                createVNode(_component_RouterLink, {
                                                  to: { name: "apps-academy-course-details" },
                                                  class: "course-title"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(course.courseTitle), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              createVNode("p", null, toDisplayString(course.desc), 1),
                                              course.completedTasks !== course.totalTasks ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "d-flex align-center mb-1"
                                              }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-time-line",
                                                  size: "20",
                                                  class: "me-1"
                                                }),
                                                createVNode("div", { class: "text-body-1 my-auto" }, toDisplayString(course.time), 1)
                                              ])) : (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "mb-2"
                                              }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-check-line",
                                                  color: "success",
                                                  class: "me-1"
                                                }),
                                                createVNode("span", { class: "text-success text-body-1" }, "Completed")
                                              ])),
                                              createVNode(VProgressLinear, {
                                                "model-value": course.completedTasks / course.totalTasks * 100,
                                                rounded: "",
                                                "rounded-bar": "",
                                                color: "primary",
                                                height: "8",
                                                class: "mb-4"
                                              }, null, 8, ["model-value"]),
                                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  color: "secondary",
                                                  class: "flex-grow-1",
                                                  to: { name: "apps-academy-course-details" }
                                                }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-refresh-line",
                                                      class: "flip-in-rtl"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createTextVNode(" Start Over ")
                                                  ]),
                                                  _: 1
                                                }),
                                                course.completedTasks !== course.totalTasks ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  variant: "outlined",
                                                  class: "flex-grow-1",
                                                  to: { name: "apps-academy-course-details" }
                                                }, {
                                                  append: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-arrow-right-line",
                                                      class: "flip-in-rtl"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createTextVNode(" Continue ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("div", { class: "pa-2" }, [
                                          createVNode(VImg, {
                                            src: course.tutorImg,
                                            class: "cursor-pointer",
                                            onClick: () => _ctx.$router.push({ name: "apps-academy-course-details" })
                                          }, null, 8, ["src", "onClick"])
                                        ]),
                                        createVNode(VCardText, { class: "pt-3" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                              createVNode(VChip, {
                                                variant: "tonal",
                                                color: resolveChipColor(course.tags),
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(course.tags), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode("h6", { class: "text-h6 text-medium-emphasis me-1" }, toDisplayString(course.rating), 1),
                                                createVNode(VIcon, {
                                                  icon: "ri-star-fill",
                                                  color: "warning",
                                                  size: "24",
                                                  class: "me-2"
                                                }),
                                                createVNode("div", { class: "text-body-1" }, " (" + toDisplayString(course.ratingCount) + ") ", 1)
                                              ])
                                            ]),
                                            createVNode("h5", { class: "text-h5 mb-1" }, [
                                              createVNode(_component_RouterLink, {
                                                to: { name: "apps-academy-course-details" },
                                                class: "course-title"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(course.courseTitle), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode("p", null, toDisplayString(course.desc), 1),
                                            course.completedTasks !== course.totalTasks ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "d-flex align-center mb-1"
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-time-line",
                                                size: "20",
                                                class: "me-1"
                                              }),
                                              createVNode("div", { class: "text-body-1 my-auto" }, toDisplayString(course.time), 1)
                                            ])) : (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "mb-2"
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-check-line",
                                                color: "success",
                                                class: "me-1"
                                              }),
                                              createVNode("span", { class: "text-success text-body-1" }, "Completed")
                                            ])),
                                            createVNode(VProgressLinear, {
                                              "model-value": course.completedTasks / course.totalTasks * 100,
                                              rounded: "",
                                              "rounded-bar": "",
                                              color: "primary",
                                              height: "8",
                                              class: "mb-4"
                                            }, null, 8, ["model-value"]),
                                            createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                color: "secondary",
                                                class: "flex-grow-1",
                                                to: { name: "apps-academy-course-details" }
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-refresh-line",
                                                    class: "flip-in-rtl"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createTextVNode(" Start Over ")
                                                ]),
                                                _: 1
                                              }),
                                              course.completedTasks !== course.totalTasks ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                variant: "outlined",
                                                class: "flex-grow-1",
                                                to: { name: "apps-academy-course-details" }
                                              }, {
                                                append: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-arrow-right-line",
                                                    class: "flip-in-rtl"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createTextVNode(" Continue ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ])
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
                                  createVNode(VCard, {
                                    flat: "",
                                    border: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "pa-2" }, [
                                        createVNode(VImg, {
                                          src: course.tutorImg,
                                          class: "cursor-pointer",
                                          onClick: () => _ctx.$router.push({ name: "apps-academy-course-details" })
                                        }, null, 8, ["src", "onClick"])
                                      ]),
                                      createVNode(VCardText, { class: "pt-3" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                            createVNode(VChip, {
                                              variant: "tonal",
                                              color: resolveChipColor(course.tags),
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(course.tags), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode("h6", { class: "text-h6 text-medium-emphasis me-1" }, toDisplayString(course.rating), 1),
                                              createVNode(VIcon, {
                                                icon: "ri-star-fill",
                                                color: "warning",
                                                size: "24",
                                                class: "me-2"
                                              }),
                                              createVNode("div", { class: "text-body-1" }, " (" + toDisplayString(course.ratingCount) + ") ", 1)
                                            ])
                                          ]),
                                          createVNode("h5", { class: "text-h5 mb-1" }, [
                                            createVNode(_component_RouterLink, {
                                              to: { name: "apps-academy-course-details" },
                                              class: "course-title"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(course.courseTitle), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode("p", null, toDisplayString(course.desc), 1),
                                          course.completedTasks !== course.totalTasks ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "d-flex align-center mb-1"
                                          }, [
                                            createVNode(VIcon, {
                                              icon: "ri-time-line",
                                              size: "20",
                                              class: "me-1"
                                            }),
                                            createVNode("div", { class: "text-body-1 my-auto" }, toDisplayString(course.time), 1)
                                          ])) : (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "mb-2"
                                          }, [
                                            createVNode(VIcon, {
                                              icon: "ri-check-line",
                                              color: "success",
                                              class: "me-1"
                                            }),
                                            createVNode("span", { class: "text-success text-body-1" }, "Completed")
                                          ])),
                                          createVNode(VProgressLinear, {
                                            "model-value": course.completedTasks / course.totalTasks * 100,
                                            rounded: "",
                                            "rounded-bar": "",
                                            color: "primary",
                                            height: "8",
                                            class: "mb-4"
                                          }, null, 8, ["model-value"]),
                                          createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "secondary",
                                              class: "flex-grow-1",
                                              to: { name: "apps-academy-course-details" }
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-refresh-line",
                                                  class: "flip-in-rtl"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createTextVNode(" Start Over ")
                                              ]),
                                              _: 1
                                            }),
                                            course.completedTasks !== course.totalTasks ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              variant: "outlined",
                                              class: "flex-grow-1",
                                              to: { name: "apps-academy-course-details" }
                                            }, {
                                              append: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-right-line",
                                                  class: "flip-in-rtl"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createTextVNode(" Continue ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ])
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
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                            return openBlock(), createBlock(VCol, {
                              key: course.id,
                              cols: "12",
                              md: "4",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-2" }, [
                                      createVNode(VImg, {
                                        src: course.tutorImg,
                                        class: "cursor-pointer",
                                        onClick: () => _ctx.$router.push({ name: "apps-academy-course-details" })
                                      }, null, 8, ["src", "onClick"])
                                    ]),
                                    createVNode(VCardText, { class: "pt-3" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                          createVNode(VChip, {
                                            variant: "tonal",
                                            color: resolveChipColor(course.tags),
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.tags), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode("h6", { class: "text-h6 text-medium-emphasis me-1" }, toDisplayString(course.rating), 1),
                                            createVNode(VIcon, {
                                              icon: "ri-star-fill",
                                              color: "warning",
                                              size: "24",
                                              class: "me-2"
                                            }),
                                            createVNode("div", { class: "text-body-1" }, " (" + toDisplayString(course.ratingCount) + ") ", 1)
                                          ])
                                        ]),
                                        createVNode("h5", { class: "text-h5 mb-1" }, [
                                          createVNode(_component_RouterLink, {
                                            to: { name: "apps-academy-course-details" },
                                            class: "course-title"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.courseTitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("p", null, toDisplayString(course.desc), 1),
                                        course.completedTasks !== course.totalTasks ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "d-flex align-center mb-1"
                                        }, [
                                          createVNode(VIcon, {
                                            icon: "ri-time-line",
                                            size: "20",
                                            class: "me-1"
                                          }),
                                          createVNode("div", { class: "text-body-1 my-auto" }, toDisplayString(course.time), 1)
                                        ])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "mb-2"
                                        }, [
                                          createVNode(VIcon, {
                                            icon: "ri-check-line",
                                            color: "success",
                                            class: "me-1"
                                          }),
                                          createVNode("span", { class: "text-success text-body-1" }, "Completed")
                                        ])),
                                        createVNode(VProgressLinear, {
                                          "model-value": course.completedTasks / course.totalTasks * 100,
                                          rounded: "",
                                          "rounded-bar": "",
                                          color: "primary",
                                          height: "8",
                                          class: "mb-4"
                                        }, null, 8, ["model-value"]),
                                        createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            color: "secondary",
                                            class: "flex-grow-1",
                                            to: { name: "apps-academy-course-details" }
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-refresh-line",
                                                class: "flip-in-rtl"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" Start Over ")
                                            ]),
                                            _: 1
                                          }),
                                          course.completedTasks !== course.totalTasks ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            variant: "outlined",
                                            class: "flex-grow-1",
                                            to: { name: "apps-academy-course-details" }
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-line",
                                                class: "flip-in-rtl"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" Continue ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VPagination, {
                    modelValue: unref(page),
                    "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                    rounded: "",
                    color: "primary",
                    length: Math.ceil(unref(totalCourse) / unref(itemsPerPage))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4 mb-6" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5" }, " My Courses "),
                        createVNode("div", { class: "text-body-1" }, " Total 6 course you have purchased ")
                      ]),
                      createVNode("div", { class: "d-flex flex-wrap align-center gap-y-4 gap-x-6" }, [
                        createVNode(VSelect, {
                          modelValue: unref(label),
                          "onUpdate:modelValue": ($event) => isRef(label) ? label.value = $event : null,
                          density: "compact",
                          items: [
                            { title: "Web", value: "web" },
                            { title: "Art", value: "art" },
                            { title: "UI/UX", value: "ui/ux" },
                            { title: "Psychology", value: "psychology" },
                            { title: "Design", value: "design" },
                            { title: "All Courses", value: "All Courses" }
                          ],
                          style: { "min-inline-size": "250px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VSwitch, {
                          modelValue: unref(hideCompleted),
                          "onUpdate:modelValue": ($event) => isRef(hideCompleted) ? hideCompleted.value = $event : null,
                          label: "Hide Completed"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(VRow, { class: "match-height" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                            return openBlock(), createBlock(VCol, {
                              key: course.id,
                              cols: "12",
                              md: "4",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-2" }, [
                                      createVNode(VImg, {
                                        src: course.tutorImg,
                                        class: "cursor-pointer",
                                        onClick: () => _ctx.$router.push({ name: "apps-academy-course-details" })
                                      }, null, 8, ["src", "onClick"])
                                    ]),
                                    createVNode(VCardText, { class: "pt-3" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                          createVNode(VChip, {
                                            variant: "tonal",
                                            color: resolveChipColor(course.tags),
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.tags), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode("h6", { class: "text-h6 text-medium-emphasis me-1" }, toDisplayString(course.rating), 1),
                                            createVNode(VIcon, {
                                              icon: "ri-star-fill",
                                              color: "warning",
                                              size: "24",
                                              class: "me-2"
                                            }),
                                            createVNode("div", { class: "text-body-1" }, " (" + toDisplayString(course.ratingCount) + ") ", 1)
                                          ])
                                        ]),
                                        createVNode("h5", { class: "text-h5 mb-1" }, [
                                          createVNode(_component_RouterLink, {
                                            to: { name: "apps-academy-course-details" },
                                            class: "course-title"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.courseTitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("p", null, toDisplayString(course.desc), 1),
                                        course.completedTasks !== course.totalTasks ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "d-flex align-center mb-1"
                                        }, [
                                          createVNode(VIcon, {
                                            icon: "ri-time-line",
                                            size: "20",
                                            class: "me-1"
                                          }),
                                          createVNode("div", { class: "text-body-1 my-auto" }, toDisplayString(course.time), 1)
                                        ])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "mb-2"
                                        }, [
                                          createVNode(VIcon, {
                                            icon: "ri-check-line",
                                            color: "success",
                                            class: "me-1"
                                          }),
                                          createVNode("span", { class: "text-success text-body-1" }, "Completed")
                                        ])),
                                        createVNode(VProgressLinear, {
                                          "model-value": course.completedTasks / course.totalTasks * 100,
                                          rounded: "",
                                          "rounded-bar": "",
                                          color: "primary",
                                          height: "8",
                                          class: "mb-4"
                                        }, null, 8, ["model-value"]),
                                        createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            color: "secondary",
                                            class: "flex-grow-1",
                                            to: { name: "apps-academy-course-details" }
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-refresh-line",
                                                class: "flip-in-rtl"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" Start Over ")
                                            ]),
                                            _: 1
                                          }),
                                          course.completedTasks !== course.totalTasks ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            variant: "outlined",
                                            class: "flex-grow-1",
                                            to: { name: "apps-academy-course-details" }
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-line",
                                                class: "flip-in-rtl"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" Continue ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VPagination, {
                      modelValue: unref(page),
                      "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                      rounded: "",
                      color: "primary",
                      length: Math.ceil(unref(totalCourse) / unref(itemsPerPage))
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4 mb-6" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5" }, " My Courses "),
                      createVNode("div", { class: "text-body-1" }, " Total 6 course you have purchased ")
                    ]),
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-y-4 gap-x-6" }, [
                      createVNode(VSelect, {
                        modelValue: unref(label),
                        "onUpdate:modelValue": ($event) => isRef(label) ? label.value = $event : null,
                        density: "compact",
                        items: [
                          { title: "Web", value: "web" },
                          { title: "Art", value: "art" },
                          { title: "UI/UX", value: "ui/ux" },
                          { title: "Psychology", value: "psychology" },
                          { title: "Design", value: "design" },
                          { title: "All Courses", value: "All Courses" }
                        ],
                        style: { "min-inline-size": "250px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VSwitch, {
                        modelValue: unref(hideCompleted),
                        "onUpdate:modelValue": ($event) => isRef(hideCompleted) ? hideCompleted.value = $event : null,
                        label: "Hide Completed"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(VRow, { class: "match-height" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                          return openBlock(), createBlock(VCol, {
                            key: course.id,
                            cols: "12",
                            md: "4",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-2" }, [
                                    createVNode(VImg, {
                                      src: course.tutorImg,
                                      class: "cursor-pointer",
                                      onClick: () => _ctx.$router.push({ name: "apps-academy-course-details" })
                                    }, null, 8, ["src", "onClick"])
                                  ]),
                                  createVNode(VCardText, { class: "pt-3" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                                        createVNode(VChip, {
                                          variant: "tonal",
                                          color: resolveChipColor(course.tags),
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(course.tags), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode("h6", { class: "text-h6 text-medium-emphasis me-1" }, toDisplayString(course.rating), 1),
                                          createVNode(VIcon, {
                                            icon: "ri-star-fill",
                                            color: "warning",
                                            size: "24",
                                            class: "me-2"
                                          }),
                                          createVNode("div", { class: "text-body-1" }, " (" + toDisplayString(course.ratingCount) + ") ", 1)
                                        ])
                                      ]),
                                      createVNode("h5", { class: "text-h5 mb-1" }, [
                                        createVNode(_component_RouterLink, {
                                          to: { name: "apps-academy-course-details" },
                                          class: "course-title"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(course.courseTitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("p", null, toDisplayString(course.desc), 1),
                                      course.completedTasks !== course.totalTasks ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "d-flex align-center mb-1"
                                      }, [
                                        createVNode(VIcon, {
                                          icon: "ri-time-line",
                                          size: "20",
                                          class: "me-1"
                                        }),
                                        createVNode("div", { class: "text-body-1 my-auto" }, toDisplayString(course.time), 1)
                                      ])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "mb-2"
                                      }, [
                                        createVNode(VIcon, {
                                          icon: "ri-check-line",
                                          color: "success",
                                          class: "me-1"
                                        }),
                                        createVNode("span", { class: "text-success text-body-1" }, "Completed")
                                      ])),
                                      createVNode(VProgressLinear, {
                                        "model-value": course.completedTasks / course.totalTasks * 100,
                                        rounded: "",
                                        "rounded-bar": "",
                                        color: "primary",
                                        height: "8",
                                        class: "mb-4"
                                      }, null, 8, ["model-value"]),
                                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "secondary",
                                          class: "flex-grow-1",
                                          to: { name: "apps-academy-course-details" }
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-refresh-line",
                                              class: "flip-in-rtl"
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createTextVNode(" Start Over ")
                                          ]),
                                          _: 1
                                        }),
                                        course.completedTasks !== course.totalTasks ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          variant: "outlined",
                                          class: "flex-grow-1",
                                          to: { name: "apps-academy-course-details" }
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              class: "flip-in-rtl"
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createTextVNode(" Continue ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(VPagination, {
                    modelValue: unref(page),
                    "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                    rounded: "",
                    color: "primary",
                    length: Math.ceil(unref(totalCourse) / unref(itemsPerPage))
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/academy/AcademyMyCourses.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AcademyMyCourses = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f14e99c8"]]);
const academyCourseIllustration1 = "/build/assets/academy-course-illustration1-3jA_I8wV.png";
const academyCourseIllustration2Dark = "/build/assets/academy-course-illustration2-dark-IMaG0sSw.png";
const academyCourseIllustration2Light = "/build/assets/academy-course-illustration2-light-P0fad4nP.png";
const boyAcademyIllustration = "/build/assets/boy-academy-illustration-BVzIsT0q.png";
const girlAcademyIllustration = "/build/assets/girl-academy-illustration-kjZ61HPl.png";
const guitarCoursePoster = "/build/assets/guitar-course-DmkmNfvn.png";
const singingCoursePoster = "/build/assets/singing-course-DzE60auW.png";
const _sfc_main = {
  __name: "my-course",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const academyCourseIllustration2 = useGenerateImageVariant(academyCourseIllustration2Light, academyCourseIllustration2Dark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "py-12 position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([_ctx.$vuetify.display.mdAndUp ? "w-50" : "w-100", "d-flex flex-column gap-y-4 mx-auto"])}"${_scopeId2}><h4 class="${ssrRenderClass([_ctx.$vuetify.display.mdAndUp ? "w-75" : "w-100", "text-h4 text-center text-wrap mx-auto"])}"${_scopeId2}> Education, talents, and career opportunities. <span class="text-primary"${_scopeId2}> All in one place.</span></h4><p class="text-center text-wrap text-body-1 mx-auto mb-0"${_scopeId2}> Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science. </p><div class="d-flex justify-center align-center gap-x-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    density: "compact",
                    placeholder: "Find your course",
                    style: { "max-inline-size": "318px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    icon: "ri-search-line",
                    class: "rounded"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><img${ssrRenderAttr("src", unref(academyCourseIllustration1))} class="illustration1 d-none d-md-block" height="180"${_scopeId2}><img${ssrRenderAttr("src", unref(academyCourseIllustration2))} class="illustration2 d-none d-md-block" height="124"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["d-flex flex-column gap-y-4 mx-auto", _ctx.$vuetify.display.mdAndUp ? "w-50" : "w-100"]
                    }, [
                      createVNode("h4", {
                        class: ["text-h4 text-center text-wrap mx-auto", _ctx.$vuetify.display.mdAndUp ? "w-75" : "w-100"]
                      }, [
                        createTextVNode(" Education, talents, and career opportunities. "),
                        createVNode("span", { class: "text-primary" }, " All in one place.")
                      ], 2),
                      createVNode("p", { class: "text-center text-wrap text-body-1 mx-auto mb-0" }, " Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science. "),
                      createVNode("div", { class: "d-flex justify-center align-center gap-x-4" }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          density: "compact",
                          placeholder: "Find your course",
                          style: { "max-inline-size": "318px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VBtn, {
                          color: "primary",
                          icon: "ri-search-line",
                          class: "rounded"
                        })
                      ])
                    ], 2),
                    createVNode("img", {
                      src: unref(academyCourseIllustration1),
                      class: "illustration1 d-none d-md-block",
                      height: "180"
                    }, null, 8, ["src"]),
                    createVNode("img", {
                      src: unref(academyCourseIllustration2),
                      class: "illustration2 d-none d-md-block",
                      height: "124"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "py-12 position-relative" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: ["d-flex flex-column gap-y-4 mx-auto", _ctx.$vuetify.display.mdAndUp ? "w-50" : "w-100"]
                  }, [
                    createVNode("h4", {
                      class: ["text-h4 text-center text-wrap mx-auto", _ctx.$vuetify.display.mdAndUp ? "w-75" : "w-100"]
                    }, [
                      createTextVNode(" Education, talents, and career opportunities. "),
                      createVNode("span", { class: "text-primary" }, " All in one place.")
                    ], 2),
                    createVNode("p", { class: "text-center text-wrap text-body-1 mx-auto mb-0" }, " Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science. "),
                    createVNode("div", { class: "d-flex justify-center align-center gap-x-4" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        density: "compact",
                        placeholder: "Find your course",
                        style: { "max-inline-size": "318px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, {
                        color: "primary",
                        icon: "ri-search-line",
                        class: "rounded"
                      })
                    ])
                  ], 2),
                  createVNode("img", {
                    src: unref(academyCourseIllustration1),
                    class: "illustration1 d-none d-md-block",
                    height: "180"
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    src: unref(academyCourseIllustration2),
                    class: "illustration2 d-none d-md-block",
                    height: "124"
                  }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AcademyMyCourses, { "search-query": unref(searchQuery) }, null, _parent));
      _push(`<div class="mb-6">`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    color: "rgba(var(--v-theme-info), 0.08)"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between"${_scopeId4}><div class="text-center text-sm-start"${_scopeId4}><h5 class="text-h5 text-info mb-2"${_scopeId4}> Earn a Certificate </h5><p class="text-body-1 text-high-emphasis mb-4"${_scopeId4}> Get the right professional certificate program for you. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "info",
                                size: "small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` View Programs `);
                                  } else {
                                    return [
                                      createTextVNode(" View Programs ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="text-center"${_scopeId4}><img${ssrRenderAttr("src", unref(boyAcademyIllustration))}${_scopeId4}></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                                  createVNode("div", { class: "text-center text-sm-start" }, [
                                    createVNode("h5", { class: "text-h5 text-info mb-2" }, " Earn a Certificate "),
                                    createVNode("p", { class: "text-body-1 text-high-emphasis mb-4" }, " Get the right professional certificate program for you. "),
                                    createVNode(VBtn, {
                                      color: "info",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" View Programs ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("img", { src: unref(boyAcademyIllustration) }, null, 8, ["src"])
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
                              createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                                createVNode("div", { class: "text-center text-sm-start" }, [
                                  createVNode("h5", { class: "text-h5 text-info mb-2" }, " Earn a Certificate "),
                                  createVNode("p", { class: "text-body-1 text-high-emphasis mb-4" }, " Get the right professional certificate program for you. "),
                                  createVNode(VBtn, {
                                    color: "info",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View Programs ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("img", { src: unref(boyAcademyIllustration) }, null, 8, ["src"])
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
                } else {
                  return [
                    createVNode(VCard, {
                      flat: "",
                      color: "rgba(var(--v-theme-info), 0.08)"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                              createVNode("div", { class: "text-center text-sm-start" }, [
                                createVNode("h5", { class: "text-h5 text-info mb-2" }, " Earn a Certificate "),
                                createVNode("p", { class: "text-body-1 text-high-emphasis mb-4" }, " Get the right professional certificate program for you. "),
                                createVNode(VBtn, {
                                  color: "info",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View Programs ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("img", { src: unref(boyAcademyIllustration) }, null, 8, ["src"])
                              ])
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    color: "rgba(var(--v-theme-error), 0.08)"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between"${_scopeId4}><div class="text-center text-sm-start"${_scopeId4}><h5 class="text-h5 text-error mb-2"${_scopeId4}> Best Rated Courses </h5><p class="text-body-1 text-high-emphasis text-wrap mb-4"${_scopeId4}> Enroll now in the most popular and best rated courses. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "error",
                                size: "small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` View Courses `);
                                  } else {
                                    return [
                                      createTextVNode(" View Courses ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="text-center"${_scopeId4}><img${ssrRenderAttr("src", unref(girlAcademyIllustration))}${_scopeId4}></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                                  createVNode("div", { class: "text-center text-sm-start" }, [
                                    createVNode("h5", { class: "text-h5 text-error mb-2" }, " Best Rated Courses "),
                                    createVNode("p", { class: "text-body-1 text-high-emphasis text-wrap mb-4" }, " Enroll now in the most popular and best rated courses. "),
                                    createVNode(VBtn, {
                                      color: "error",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" View Courses ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("img", { src: unref(girlAcademyIllustration) }, null, 8, ["src"])
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
                              createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                                createVNode("div", { class: "text-center text-sm-start" }, [
                                  createVNode("h5", { class: "text-h5 text-error mb-2" }, " Best Rated Courses "),
                                  createVNode("p", { class: "text-body-1 text-high-emphasis text-wrap mb-4" }, " Enroll now in the most popular and best rated courses. "),
                                  createVNode(VBtn, {
                                    color: "error",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View Courses ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("img", { src: unref(girlAcademyIllustration) }, null, 8, ["src"])
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
                } else {
                  return [
                    createVNode(VCard, {
                      flat: "",
                      color: "rgba(var(--v-theme-error), 0.08)"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                              createVNode("div", { class: "text-center text-sm-start" }, [
                                createVNode("h5", { class: "text-h5 text-error mb-2" }, " Best Rated Courses "),
                                createVNode("p", { class: "text-body-1 text-high-emphasis text-wrap mb-4" }, " Enroll now in the most popular and best rated courses. "),
                                createVNode(VBtn, {
                                  color: "error",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View Courses ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("img", { src: unref(girlAcademyIllustration) }, null, 8, ["src"])
                              ])
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    color: "rgba(var(--v-theme-info), 0.08)"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                            createVNode("div", { class: "text-center text-sm-start" }, [
                              createVNode("h5", { class: "text-h5 text-info mb-2" }, " Earn a Certificate "),
                              createVNode("p", { class: "text-body-1 text-high-emphasis mb-4" }, " Get the right professional certificate program for you. "),
                              createVNode(VBtn, {
                                color: "info",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Programs ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "text-center" }, [
                              createVNode("img", { src: unref(boyAcademyIllustration) }, null, 8, ["src"])
                            ])
                          ])
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
                  createVNode(VCard, {
                    flat: "",
                    color: "rgba(var(--v-theme-error), 0.08)"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between" }, [
                            createVNode("div", { class: "text-center text-sm-start" }, [
                              createVNode("h5", { class: "text-h5 text-error mb-2" }, " Best Rated Courses "),
                              createVNode("p", { class: "text-body-1 text-high-emphasis text-wrap mb-4" }, " Enroll now in the most popular and best rated courses. "),
                              createVNode(VBtn, {
                                color: "error",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Courses ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "text-center" }, [
                              createVNode("img", { src: unref(girlAcademyIllustration) }, null, 8, ["src"])
                            ])
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
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column align-center gap-y-4 h-100 justify-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                variant: "tonal",
                                size: "52",
                                rounded: "",
                                color: "primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-gift-line",
                                      size: "36"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-gift-line",
                                        size: "36"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<h4 class="text-h4"${_scopeId4}> Today&#39;s Free Courses </h4><p class="text-body-1 text-center mb-0"${_scopeId4}> We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! </p>`);
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Get Premium Courses`);
                                  } else {
                                    return [
                                      createTextVNode("Get Premium Courses")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column align-center gap-y-4 h-100 justify-center" }, [
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    size: "52",
                                    rounded: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-gift-line",
                                        size: "36"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h4", { class: "text-h4" }, " Today's Free Courses "),
                                  createVNode("p", { class: "text-body-1 text-center mb-0" }, " We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! "),
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Get Premium Courses")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="pa-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(VideoPlayer), {
                                      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                      poster: unref(singingCoursePoster),
                                      controls: "",
                                      "plays-inline": "",
                                      height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                      class: "w-100 rounded"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VCardText, { class: "pt-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h5 class="text-h5 mb-2"${_scopeId6}> Your First Singing Lesson </h5><p class="text-body-1 mb-0"${_scopeId6}> In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. </p>`);
                                        } else {
                                          return [
                                            createVNode("h5", { class: "text-h5 mb-2" }, " Your First Singing Lesson "),
                                            createVNode("p", { class: "text-body-1 mb-0" }, " In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "pa-2" }, [
                                        createVNode(unref(VideoPlayer), {
                                          src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                          poster: unref(singingCoursePoster),
                                          controls: "",
                                          "plays-inline": "",
                                          height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                          class: "w-100 rounded"
                                        }, null, 8, ["poster", "height"])
                                      ]),
                                      createVNode(VCardText, { class: "pt-3" }, {
                                        default: withCtx(() => [
                                          createVNode("h5", { class: "text-h5 mb-2" }, " Your First Singing Lesson "),
                                          createVNode("p", { class: "text-body-1 mb-0" }, " In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ")
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
                                createVNode(VCard, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-2" }, [
                                      createVNode(unref(VideoPlayer), {
                                        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                        poster: unref(singingCoursePoster),
                                        controls: "",
                                        "plays-inline": "",
                                        height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                        class: "w-100 rounded"
                                      }, null, 8, ["poster", "height"])
                                    ]),
                                    createVNode(VCardText, { class: "pt-3" }, {
                                      default: withCtx(() => [
                                        createVNode("h5", { class: "text-h5 mb-2" }, " Your First Singing Lesson "),
                                        createVNode("p", { class: "text-body-1 mb-0" }, " In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ")
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
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="pa-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(VideoPlayer), {
                                      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                      poster: unref(guitarCoursePoster),
                                      controls: "",
                                      "plays-inline": "",
                                      height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                      class: "w-100 rounded"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VCardText, { class: "pt-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h5 class="text-h5 mb-2"${_scopeId6}> Guitar for Beginners </h5><p class="text-body-1 mb-0"${_scopeId6}> The Fender Acoustic Guitar is best choice for beginners and professionals. </p>`);
                                        } else {
                                          return [
                                            createVNode("h5", { class: "text-h5 mb-2" }, " Guitar for Beginners "),
                                            createVNode("p", { class: "text-body-1 mb-0" }, " The Fender Acoustic Guitar is best choice for beginners and professionals. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "pa-2" }, [
                                        createVNode(unref(VideoPlayer), {
                                          src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                          poster: unref(guitarCoursePoster),
                                          controls: "",
                                          "plays-inline": "",
                                          height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                          class: "w-100 rounded"
                                        }, null, 8, ["poster", "height"])
                                      ]),
                                      createVNode(VCardText, { class: "pt-3" }, {
                                        default: withCtx(() => [
                                          createVNode("h5", { class: "text-h5 mb-2" }, " Guitar for Beginners "),
                                          createVNode("p", { class: "text-body-1 mb-0" }, " The Fender Acoustic Guitar is best choice for beginners and professionals. ")
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
                                createVNode(VCard, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-2" }, [
                                      createVNode(unref(VideoPlayer), {
                                        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                        poster: unref(guitarCoursePoster),
                                        controls: "",
                                        "plays-inline": "",
                                        height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                        class: "w-100 rounded"
                                      }, null, 8, ["poster", "height"])
                                    ]),
                                    createVNode(VCardText, { class: "pt-3" }, {
                                      default: withCtx(() => [
                                        createVNode("h5", { class: "text-h5 mb-2" }, " Guitar for Beginners "),
                                        createVNode("p", { class: "text-body-1 mb-0" }, " The Fender Acoustic Guitar is best choice for beginners and professionals. ")
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
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column align-center gap-y-4 h-100 justify-center" }, [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  size: "52",
                                  rounded: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-gift-line",
                                      size: "36"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("h4", { class: "text-h4" }, " Today's Free Courses "),
                                createVNode("p", { class: "text-body-1 text-center mb-0" }, " We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! "),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Get Premium Courses")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-2" }, [
                                    createVNode(unref(VideoPlayer), {
                                      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                      poster: unref(singingCoursePoster),
                                      controls: "",
                                      "plays-inline": "",
                                      height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                      class: "w-100 rounded"
                                    }, null, 8, ["poster", "height"])
                                  ]),
                                  createVNode(VCardText, { class: "pt-3" }, {
                                    default: withCtx(() => [
                                      createVNode("h5", { class: "text-h5 mb-2" }, " Your First Singing Lesson "),
                                      createVNode("p", { class: "text-body-1 mb-0" }, " In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ")
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
                            md: "4",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-2" }, [
                                    createVNode(unref(VideoPlayer), {
                                      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                      poster: unref(guitarCoursePoster),
                                      controls: "",
                                      "plays-inline": "",
                                      height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                      class: "w-100 rounded"
                                    }, null, 8, ["poster", "height"])
                                  ]),
                                  createVNode(VCardText, { class: "pt-3" }, {
                                    default: withCtx(() => [
                                      createVNode("h5", { class: "text-h5 mb-2" }, " Guitar for Beginners "),
                                      createVNode("p", { class: "text-body-1 mb-0" }, " The Fender Acoustic Guitar is best choice for beginners and professionals. ")
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column align-center gap-y-4 h-100 justify-center" }, [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                size: "52",
                                rounded: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-gift-line",
                                    size: "36"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("h4", { class: "text-h4" }, " Today's Free Courses "),
                              createVNode("p", { class: "text-body-1 text-center mb-0" }, " We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! "),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("Get Premium Courses")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "pa-2" }, [
                                  createVNode(unref(VideoPlayer), {
                                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                    poster: unref(singingCoursePoster),
                                    controls: "",
                                    "plays-inline": "",
                                    height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                    class: "w-100 rounded"
                                  }, null, 8, ["poster", "height"])
                                ]),
                                createVNode(VCardText, { class: "pt-3" }, {
                                  default: withCtx(() => [
                                    createVNode("h5", { class: "text-h5 mb-2" }, " Your First Singing Lesson "),
                                    createVNode("p", { class: "text-body-1 mb-0" }, " In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ")
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
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "pa-2" }, [
                                  createVNode(unref(VideoPlayer), {
                                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                    poster: unref(guitarCoursePoster),
                                    controls: "",
                                    "plays-inline": "",
                                    height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                    class: "w-100 rounded"
                                  }, null, 8, ["poster", "height"])
                                ]),
                                createVNode(VCardText, { class: "pt-3" }, {
                                  default: withCtx(() => [
                                    createVNode("h5", { class: "text-h5 mb-2" }, " Guitar for Beginners "),
                                    createVNode("p", { class: "text-body-1 mb-0" }, " The Fender Acoustic Guitar is best choice for beginners and professionals. ")
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column align-center gap-y-4 h-100 justify-center" }, [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              size: "52",
                              rounded: "",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-gift-line",
                                  size: "36"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("h4", { class: "text-h4" }, " Today's Free Courses "),
                            createVNode("p", { class: "text-body-1 text-center mb-0" }, " We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! "),
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode("Get Premium Courses")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-2" }, [
                                createVNode(unref(VideoPlayer), {
                                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                  poster: unref(singingCoursePoster),
                                  controls: "",
                                  "plays-inline": "",
                                  height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                  class: "w-100 rounded"
                                }, null, 8, ["poster", "height"])
                              ]),
                              createVNode(VCardText, { class: "pt-3" }, {
                                default: withCtx(() => [
                                  createVNode("h5", { class: "text-h5 mb-2" }, " Your First Singing Lesson "),
                                  createVNode("p", { class: "text-body-1 mb-0" }, " In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ")
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
                        md: "4",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-2" }, [
                                createVNode(unref(VideoPlayer), {
                                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                  poster: unref(guitarCoursePoster),
                                  controls: "",
                                  "plays-inline": "",
                                  height: _ctx.$vuetify.display.mdAndUp ? 200 : 150,
                                  class: "w-100 rounded"
                                }, null, 8, ["poster", "height"])
                              ]),
                              createVNode(VCardText, { class: "pt-3" }, {
                                default: withCtx(() => [
                                  createVNode("h5", { class: "text-h5 mb-2" }, " Guitar for Beginners "),
                                  createVNode("p", { class: "text-body-1 mb-0" }, " The Fender Acoustic Guitar is best choice for beginners and professionals. ")
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/academy/my-course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
