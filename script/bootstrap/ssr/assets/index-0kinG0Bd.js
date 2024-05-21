import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, openBlock, createBlock, withModifiers, createCommentVNode, useSSRContext, nextTick, Fragment, renderList, withKeys, withAsyncContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { r as requiredValidator } from "./validators-CW3JK3pA.js";
import { animations, remapNodes } from "@formkit/drag-and-drop";
import { dragAndDrop } from "@formkit/drag-and-drop/vue";
import { _ as _sfc_main$6 } from "./AppDateTimePicker-B0c_dYDs.js";
import { _ as _sfc_main$5 } from "./AppDrawerHeaderSection-isEKlId-.js";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { a as VIcon, V as VBtn, c as avatar1, d as avatar2, e as avatar3, f as avatar4, h as avatar5, j as avatar6, _ as _export_sfc } from "../ssr.js";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VFileInput } from "./VFileInput-BDqHjtpV.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { _ as _sfc_main$7 } from "./MoreBtn-CtW8Gck8.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList } from "./VList-Bay5Fixr.js";
import { onClickOutside } from "@vueuse/core";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import "./helpers-DX2i3Kdq.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
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
import "@antfu/utils";
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VSlideGroup-Bvz86g7R.js";
import "ofetch";
const _sfc_main$4 = {
  __name: "KanbanBoardEditDrawer",
  __ssrInlineRender: true,
  props: {
    kanbanItem: {
      type: null,
      required: false,
      default: () => ({
        item: {
          title: "",
          dueDate: "2022-01-01T00:00:00Z",
          labels: [],
          members: [],
          id: 0,
          attachments: 0,
          commentsCount: 0,
          image: "",
          comments: ""
        },
        boardId: 0,
        boardName: ""
      })
    },
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDrawerOpen",
    "update:kanbanItem",
    "deleteKanbanItem"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const refEditTaskForm = ref();
    const labelOptions = [
      "UX",
      "Image",
      "Code Review",
      "Dashboard",
      "Bug",
      "Charts & maps"
    ];
    const localKanbanItem = ref(JSON.parse(JSON.stringify(props.kanbanItem.item)));
    const handleDrawerModelValueUpdate = (val) => {
      var _a;
      emit("update:isDrawerOpen", val);
      if (!val)
        (_a = refEditTaskForm.value) == null ? void 0 : _a.reset();
    };
    watch(() => props.kanbanItem, () => {
      localKanbanItem.value = JSON.parse(JSON.stringify(props.kanbanItem.item));
    }, { deep: true });
    const updateKanbanItem = () => {
      var _a;
      (_a = refEditTaskForm.value) == null ? void 0 : _a.validate().then(async (valid) => {
        var _a2;
        if (valid.valid) {
          emit("update:kanbanItem", {
            item: localKanbanItem.value,
            boardId: props.kanbanItem.boardId,
            boardName: props.kanbanItem.boardName
          });
          emit("update:isDrawerOpen", false);
          await nextTick();
          (_a2 = refEditTaskForm.value) == null ? void 0 : _a2.reset();
        }
      });
    };
    const deleteKanbanItem = () => {
      emit("deleteKanbanItem", {
        item: localKanbanItem.value,
        boardId: props.kanbanItem.boardId,
        boardName: props.kanbanItem.boardName
      });
      emit("update:isDrawerOpen", false);
    };
    const resolveLabelColor = {
      "UX": "success",
      "Image": "warning",
      "Code Review": "info",
      "Dashboard": "primary",
      "Bug": "error",
      "Charts & maps": "primary"
    };
    const users = [
      {
        img: avatar1,
        name: "John Doe"
      },
      {
        img: avatar2,
        name: "Jane Smith"
      },
      {
        img: avatar3,
        name: "Robert Johnson"
      },
      {
        img: avatar4,
        name: "Lucy Brown"
      },
      {
        img: avatar5,
        name: "Mike White"
      },
      {
        img: avatar6,
        name: "Anna Black"
      }
    ];
    const fileAttached = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$5;
      const _component_AppDateTimePicker = _sfc_main$6;
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        location: "end",
        width: 370,
        temporary: "",
        border: "0",
        "model-value": props.isDrawerOpen,
        "onUpdate:modelValue": handleDrawerModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Edit Task",
              onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(PerfectScrollbar), {
              options: { wheelPropagation: false },
              style: { "block-size": "calc(100vh - 4rem)" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(localKanbanItem)) {
                    _push3(ssrRenderComponent(unref(VForm), {
                      ref_key: "refEditTaskForm",
                      ref: refEditTaskForm,
                      onSubmit: updateKanbanItem
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VTextField, {
                                              modelValue: unref(localKanbanItem).title,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                              label: "Title",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(localKanbanItem).title,
                                                "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                                label: "Title",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_AppDateTimePicker, {
                                              modelValue: unref(localKanbanItem).dueDate,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                              label: "Due date"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_AppDateTimePicker, {
                                                modelValue: unref(localKanbanItem).dueDate,
                                                "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                                label: "Due date"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSelect, {
                                              modelValue: unref(localKanbanItem).labels,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                              items: labelOptions,
                                              label: "Label",
                                              multiple: "",
                                              eager: ""
                                            }, {
                                              chip: withCtx(({ item }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VChip, {
                                                    color: resolveLabelColor[item.raw]
                                                  }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item.raw)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item.raw), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VChip, {
                                                      color: resolveLabelColor[item.raw]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.raw), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSelect, {
                                                modelValue: unref(localKanbanItem).labels,
                                                "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                                items: labelOptions,
                                                label: "Label",
                                                multiple: "",
                                                eager: ""
                                              }, {
                                                chip: withCtx(({ item }) => [
                                                  createVNode(VChip, {
                                                    color: resolveLabelColor[item.raw]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.raw), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p class="mb-1"${_scopeId6}> Assigned </p><div${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VSelect, {
                                              modelValue: unref(localKanbanItem).members,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                              items: users,
                                              "item-title": "name",
                                              "item-value": "name",
                                              multiple: "",
                                              "return-object": "",
                                              variant: "plain",
                                              "menu-props": {
                                                offset: 10
                                              },
                                              class: "assignee-select"
                                            }, {
                                              selection: withCtx(({ item }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VAvatar, { size: "26" }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VImg, {
                                                          src: item.raw.img
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VTooltip, { activator: "parent" }, {
                                                          default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.raw.name)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.raw.name), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VImg, {
                                                            src: item.raw.img
                                                          }, null, 8, ["src"]),
                                                          createVNode(VTooltip, { activator: "parent" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.raw.name), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VAvatar, { size: "26" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: item.raw.img
                                                        }, null, 8, ["src"]),
                                                        createVNode(VTooltip, { activator: "parent" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.raw.name), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_IconBtn, {
                                                    size: "26",
                                                    variant: "tonal",
                                                    class: "mt-1"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, {
                                                          size: "20",
                                                          icon: "ri-add-line"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, {
                                                            size: "20",
                                                            icon: "ri-add-line"
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_IconBtn, {
                                                      size: "26",
                                                      variant: "tonal",
                                                      class: "mt-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "20",
                                                          icon: "ri-add-line"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("p", { class: "mb-1" }, " Assigned "),
                                              createVNode("div", null, [
                                                createVNode(VSelect, {
                                                  modelValue: unref(localKanbanItem).members,
                                                  "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                                  items: users,
                                                  "item-title": "name",
                                                  "item-value": "name",
                                                  multiple: "",
                                                  "return-object": "",
                                                  variant: "plain",
                                                  "menu-props": {
                                                    offset: 10
                                                  },
                                                  class: "assignee-select"
                                                }, {
                                                  selection: withCtx(({ item }) => [
                                                    createVNode(VAvatar, { size: "26" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: item.raw.img
                                                        }, null, 8, ["src"]),
                                                        createVNode(VTooltip, { activator: "parent" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.raw.name), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  "prepend-inner": withCtx(() => [
                                                    createVNode(_component_IconBtn, {
                                                      size: "26",
                                                      variant: "tonal",
                                                      class: "mt-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "20",
                                                          icon: "ri-add-line"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VFileInput, {
                                              modelValue: unref(fileAttached),
                                              "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                              label: "Choose file",
                                              multiple: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VFileInput, {
                                                modelValue: unref(fileAttached),
                                                "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                                label: "Choose file",
                                                multiple: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VTextarea, {
                                              modelValue: unref(localKanbanItem).comments,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                              label: "Comment",
                                              placeholder: "Write a comment...",
                                              rows: "5",
                                              textarea: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextarea, {
                                                modelValue: unref(localKanbanItem).comments,
                                                "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                                label: "Comment",
                                                placeholder: "Write a comment...",
                                                rows: "5",
                                                textarea: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              type: "submit",
                                              class: "me-3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Update `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Update ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              color: "error",
                                              variant: "outlined",
                                              onClick: deleteKanbanItem
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Delete `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Delete ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                class: "me-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Update ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "error",
                                                variant: "outlined",
                                                onClick: deleteKanbanItem
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Delete ")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(localKanbanItem).title,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                              label: "Title",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: unref(localKanbanItem).dueDate,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                              label: "Due date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(localKanbanItem).labels,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                              items: labelOptions,
                                              label: "Label",
                                              multiple: "",
                                              eager: ""
                                            }, {
                                              chip: withCtx(({ item }) => [
                                                createVNode(VChip, {
                                                  color: resolveLabelColor[item.raw]
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.raw), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "mb-1" }, " Assigned "),
                                            createVNode("div", null, [
                                              createVNode(VSelect, {
                                                modelValue: unref(localKanbanItem).members,
                                                "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                                items: users,
                                                "item-title": "name",
                                                "item-value": "name",
                                                multiple: "",
                                                "return-object": "",
                                                variant: "plain",
                                                "menu-props": {
                                                  offset: 10
                                                },
                                                class: "assignee-select"
                                              }, {
                                                selection: withCtx(({ item }) => [
                                                  createVNode(VAvatar, { size: "26" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: item.raw.img
                                                      }, null, 8, ["src"]),
                                                      createVNode(VTooltip, { activator: "parent" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.raw.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                "prepend-inner": withCtx(() => [
                                                  createVNode(_component_IconBtn, {
                                                    size: "26",
                                                    variant: "tonal",
                                                    class: "mt-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        size: "20",
                                                        icon: "ri-add-line"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VFileInput, {
                                              modelValue: unref(fileAttached),
                                              "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                              label: "Choose file",
                                              multiple: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: unref(localKanbanItem).comments,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                              label: "Comment",
                                              placeholder: "Write a comment...",
                                              rows: "5",
                                              textarea: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "me-3"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Update ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "error",
                                              variant: "outlined",
                                              onClick: deleteKanbanItem
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Delete ")
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(localKanbanItem).title,
                                            "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                            label: "Title",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppDateTimePicker, {
                                            modelValue: unref(localKanbanItem).dueDate,
                                            "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                            label: "Due date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(localKanbanItem).labels,
                                            "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                            items: labelOptions,
                                            label: "Label",
                                            multiple: "",
                                            eager: ""
                                          }, {
                                            chip: withCtx(({ item }) => [
                                              createVNode(VChip, {
                                                color: resolveLabelColor[item.raw]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.raw), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "mb-1" }, " Assigned "),
                                          createVNode("div", null, [
                                            createVNode(VSelect, {
                                              modelValue: unref(localKanbanItem).members,
                                              "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                              items: users,
                                              "item-title": "name",
                                              "item-value": "name",
                                              multiple: "",
                                              "return-object": "",
                                              variant: "plain",
                                              "menu-props": {
                                                offset: 10
                                              },
                                              class: "assignee-select"
                                            }, {
                                              selection: withCtx(({ item }) => [
                                                createVNode(VAvatar, { size: "26" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: item.raw.img
                                                    }, null, 8, ["src"]),
                                                    createVNode(VTooltip, { activator: "parent" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.raw.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              "prepend-inner": withCtx(() => [
                                                createVNode(_component_IconBtn, {
                                                  size: "26",
                                                  variant: "tonal",
                                                  class: "mt-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      size: "20",
                                                      icon: "ri-add-line"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VFileInput, {
                                            modelValue: unref(fileAttached),
                                            "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                            label: "Choose file",
                                            multiple: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: unref(localKanbanItem).comments,
                                            "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                            label: "Comment",
                                            placeholder: "Write a comment...",
                                            rows: "5",
                                            textarea: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Update ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "error",
                                            variant: "outlined",
                                            onClick: deleteKanbanItem
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Delete ")
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(localKanbanItem).title,
                                          "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                          label: "Title",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppDateTimePicker, {
                                          modelValue: unref(localKanbanItem).dueDate,
                                          "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                          label: "Due date"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(localKanbanItem).labels,
                                          "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                          items: labelOptions,
                                          label: "Label",
                                          multiple: "",
                                          eager: ""
                                        }, {
                                          chip: withCtx(({ item }) => [
                                            createVNode(VChip, {
                                              color: resolveLabelColor[item.raw]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.raw), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "mb-1" }, " Assigned "),
                                        createVNode("div", null, [
                                          createVNode(VSelect, {
                                            modelValue: unref(localKanbanItem).members,
                                            "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                            items: users,
                                            "item-title": "name",
                                            "item-value": "name",
                                            multiple: "",
                                            "return-object": "",
                                            variant: "plain",
                                            "menu-props": {
                                              offset: 10
                                            },
                                            class: "assignee-select"
                                          }, {
                                            selection: withCtx(({ item }) => [
                                              createVNode(VAvatar, { size: "26" }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: item.raw.img
                                                  }, null, 8, ["src"]),
                                                  createVNode(VTooltip, { activator: "parent" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.raw.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            "prepend-inner": withCtx(() => [
                                              createVNode(_component_IconBtn, {
                                                size: "26",
                                                variant: "tonal",
                                                class: "mt-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "20",
                                                    icon: "ri-add-line"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VFileInput, {
                                          modelValue: unref(fileAttached),
                                          "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                          label: "Choose file",
                                          multiple: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: unref(localKanbanItem).comments,
                                          "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                          label: "Comment",
                                          placeholder: "Write a comment...",
                                          rows: "5",
                                          textarea: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "me-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Update ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "error",
                                          variant: "outlined",
                                          onClick: deleteKanbanItem
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Delete ")
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(localKanbanItem) ? (openBlock(), createBlock(unref(VForm), {
                      key: 0,
                      ref_key: "refEditTaskForm",
                      ref: refEditTaskForm,
                      onSubmit: withModifiers(updateKanbanItem, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(localKanbanItem).title,
                                      "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                      label: "Title",
                                      rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppDateTimePicker, {
                                      modelValue: unref(localKanbanItem).dueDate,
                                      "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                      label: "Due date"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(localKanbanItem).labels,
                                      "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                      items: labelOptions,
                                      label: "Label",
                                      multiple: "",
                                      eager: ""
                                    }, {
                                      chip: withCtx(({ item }) => [
                                        createVNode(VChip, {
                                          color: resolveLabelColor[item.raw]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.raw), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "mb-1" }, " Assigned "),
                                    createVNode("div", null, [
                                      createVNode(VSelect, {
                                        modelValue: unref(localKanbanItem).members,
                                        "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                        items: users,
                                        "item-title": "name",
                                        "item-value": "name",
                                        multiple: "",
                                        "return-object": "",
                                        variant: "plain",
                                        "menu-props": {
                                          offset: 10
                                        },
                                        class: "assignee-select"
                                      }, {
                                        selection: withCtx(({ item }) => [
                                          createVNode(VAvatar, { size: "26" }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: item.raw.img
                                              }, null, 8, ["src"]),
                                              createVNode(VTooltip, { activator: "parent" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.raw.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        "prepend-inner": withCtx(() => [
                                          createVNode(_component_IconBtn, {
                                            size: "26",
                                            variant: "tonal",
                                            class: "mt-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: "20",
                                                icon: "ri-add-line"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VFileInput, {
                                      modelValue: unref(fileAttached),
                                      "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                      label: "Choose file",
                                      multiple: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: unref(localKanbanItem).comments,
                                      "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                      label: "Comment",
                                      placeholder: "Write a comment...",
                                      rows: "5",
                                      textarea: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      type: "submit",
                                      class: "me-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Update ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "error",
                                      variant: "outlined",
                                      onClick: deleteKanbanItem
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Delete ")
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
                    }, 512)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppDrawerHeaderSection, {
                title: "Edit Task",
                onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
              }, null, 8, ["onCancel"]),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), {
                options: { wheelPropagation: false },
                style: { "block-size": "calc(100vh - 4rem)" }
              }, {
                default: withCtx(() => [
                  unref(localKanbanItem) ? (openBlock(), createBlock(unref(VForm), {
                    key: 0,
                    ref_key: "refEditTaskForm",
                    ref: refEditTaskForm,
                    onSubmit: withModifiers(updateKanbanItem, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(localKanbanItem).title,
                                    "onUpdate:modelValue": ($event) => unref(localKanbanItem).title = $event,
                                    label: "Title",
                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppDateTimePicker, {
                                    modelValue: unref(localKanbanItem).dueDate,
                                    "onUpdate:modelValue": ($event) => unref(localKanbanItem).dueDate = $event,
                                    label: "Due date"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(localKanbanItem).labels,
                                    "onUpdate:modelValue": ($event) => unref(localKanbanItem).labels = $event,
                                    items: labelOptions,
                                    label: "Label",
                                    multiple: "",
                                    eager: ""
                                  }, {
                                    chip: withCtx(({ item }) => [
                                      createVNode(VChip, {
                                        color: resolveLabelColor[item.raw]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.raw), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "mb-1" }, " Assigned "),
                                  createVNode("div", null, [
                                    createVNode(VSelect, {
                                      modelValue: unref(localKanbanItem).members,
                                      "onUpdate:modelValue": ($event) => unref(localKanbanItem).members = $event,
                                      items: users,
                                      "item-title": "name",
                                      "item-value": "name",
                                      multiple: "",
                                      "return-object": "",
                                      variant: "plain",
                                      "menu-props": {
                                        offset: 10
                                      },
                                      class: "assignee-select"
                                    }, {
                                      selection: withCtx(({ item }) => [
                                        createVNode(VAvatar, { size: "26" }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: item.raw.img
                                            }, null, 8, ["src"]),
                                            createVNode(VTooltip, { activator: "parent" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.raw.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      "prepend-inner": withCtx(() => [
                                        createVNode(_component_IconBtn, {
                                          size: "26",
                                          variant: "tonal",
                                          class: "mt-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: "20",
                                              icon: "ri-add-line"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VFileInput, {
                                    modelValue: unref(fileAttached),
                                    "onUpdate:modelValue": ($event) => isRef(fileAttached) ? fileAttached.value = $event : null,
                                    label: "Choose file",
                                    multiple: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    modelValue: unref(localKanbanItem).comments,
                                    "onUpdate:modelValue": ($event) => unref(localKanbanItem).comments = $event,
                                    label: "Comment",
                                    placeholder: "Write a comment...",
                                    rows: "5",
                                    textarea: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    type: "submit",
                                    class: "me-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Update ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "error",
                                    variant: "outlined",
                                    onClick: deleteKanbanItem
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Delete ")
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
                  }, 512)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/kanban/KanbanBoardEditDrawer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "KanbanCard",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    },
    boardId: {
      type: Number,
      required: true
    },
    boardName: {
      type: String,
      required: true
    }
  },
  emits: ["deleteKanbanItem"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const resolveLabelColor = {
      "UX": "success",
      "Image": "warning",
      "Code Review": "info",
      "Dashboard": "primary",
      "Bug": "error",
      "Charts & maps": "primary"
    };
    const moreOptions = [
      {
        title: "Copy Task link",
        link: true
      },
      {
        title: "Duplicate Task",
        link: true
      },
      {
        title: "Delete",
        onClick: () => {
          emit("deleteKanbanItem", {
            item: props.item,
            boardId: props.boardId,
            boardName: props.boardName
          });
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.item) {
        _push(ssrRenderComponent(VCard, mergeProps({
          ripple: false,
          link: false,
          class: "kanban-card position-relative"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-column gap-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-start gap-2" data-v-4d1b1d6b${_scopeId2}>`);
                    if (__props.item.labels && __props.item.labels.length) {
                      _push3(`<div class="d-flex flex-wrap gap-2" data-v-4d1b1d6b${_scopeId2}><!--[-->`);
                      ssrRenderList(__props.item.labels, (text) => {
                        _push3(ssrRenderComponent(VChip, {
                          key: text,
                          size: "small",
                          color: resolveLabelColor[text]
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(text)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(text), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VMenu, null, {
                      activator: withCtx(({ props: p, isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, mergeProps(p, {
                            icon: "ri-more-2-line",
                            class: "position-absolute more-options",
                            style: [{ "inset-block-start": "16px", "inset-inline-end": "10px" }, isActive ? "opacity: 1" : ""],
                            size: "20",
                            onClick: () => {
                            }
                          }), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, mergeProps(p, {
                              icon: "ri-more-2-line",
                              class: "position-absolute more-options",
                              style: [{ "inset-block-start": "16px", "inset-inline-end": "10px" }, isActive ? "opacity: 1" : ""],
                              size: "20",
                              onClick: withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["style", "onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, {
                            items: moreOptions,
                            "item-props": ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, {
                              items: moreOptions,
                              "item-props": ""
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (__props.item.image && __props.item.image.length) {
                      _push3(ssrRenderComponent(VImg, {
                        src: __props.item.image,
                        class: "rounded-lg"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-base text-high-emphasis mb-0" data-v-4d1b1d6b${_scopeId2}>${ssrInterpolate(__props.item.title)}</p><div class="task-footer d-flex align-center flex-wrap justify-space-between" data-v-4d1b1d6b${_scopeId2}>`);
                    if (__props.item.attachments || __props.item.commentsCount) {
                      _push3(`<div class="d-flex align-center gap-1 mt-2" data-v-4d1b1d6b${_scopeId2}>`);
                      if (__props.item.attachments) {
                        _push3(`<div class="d-flex align-center gap-1" data-v-4d1b1d6b${_scopeId2}>`);
                        _push3(ssrRenderComponent(VIcon, {
                          size: "20",
                          icon: "ri-attachment-2"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="me-3" data-v-4d1b1d6b${_scopeId2}>${ssrInterpolate(__props.item.attachments)}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (__props.item.commentsCount) {
                        _push3(`<div class="d-flex align-center gap-1" data-v-4d1b1d6b${_scopeId2}>`);
                        _push3(ssrRenderComponent(VIcon, {
                          size: "20",
                          icon: "ri-wechat-line"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span data-v-4d1b1d6b${_scopeId2}>${ssrInterpolate(__props.item.commentsCount)}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (__props.item.members && __props.item.members.length) {
                      _push3(`<div class="v-avatar-group mt-2" data-v-4d1b1d6b${_scopeId2}><!--[-->`);
                      ssrRenderList(__props.item.members, (avatar) => {
                        _push3(ssrRenderComponent(VAvatar, {
                          key: avatar.name,
                          size: "30"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VImg, {
                                src: avatar.img
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VTooltip, { activator: "parent" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(avatar.name)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(avatar.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VImg, {
                                  src: avatar.img
                                }, null, 8, ["src"]),
                                createVNode(VTooltip, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(avatar.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-start gap-2" }, [
                        __props.item.labels && __props.item.labels.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex flex-wrap gap-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.item.labels, (text) => {
                            return openBlock(), createBlock(VChip, {
                              key: text,
                              size: "small",
                              color: resolveLabelColor[text]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(text), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        createVNode(VSpacer),
                        createVNode(VMenu, null, {
                          activator: withCtx(({ props: p, isActive }) => [
                            createVNode(VIcon, mergeProps(p, {
                              icon: "ri-more-2-line",
                              class: "position-absolute more-options",
                              style: [{ "inset-block-start": "16px", "inset-inline-end": "10px" }, isActive ? "opacity: 1" : ""],
                              size: "20",
                              onClick: withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["style", "onClick"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VList, {
                              items: moreOptions,
                              "item-props": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      __props.item.image && __props.item.image.length ? (openBlock(), createBlock(VImg, {
                        key: 0,
                        src: __props.item.image,
                        class: "rounded-lg"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("p", { class: "text-base text-high-emphasis mb-0" }, toDisplayString(__props.item.title), 1),
                      createVNode("div", { class: "task-footer d-flex align-center flex-wrap justify-space-between" }, [
                        __props.item.attachments || __props.item.commentsCount ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex align-center gap-1 mt-2"
                        }, [
                          __props.item.attachments ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex align-center gap-1"
                          }, [
                            createVNode(VIcon, {
                              size: "20",
                              icon: "ri-attachment-2"
                            }),
                            createVNode("span", { class: "me-3" }, toDisplayString(__props.item.attachments), 1)
                          ])) : createCommentVNode("", true),
                          __props.item.commentsCount ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "d-flex align-center gap-1"
                          }, [
                            createVNode(VIcon, {
                              size: "20",
                              icon: "ri-wechat-line"
                            }),
                            createVNode("span", null, toDisplayString(__props.item.commentsCount), 1)
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        __props.item.members && __props.item.members.length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "v-avatar-group mt-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.item.members, (avatar) => {
                            return openBlock(), createBlock(VAvatar, {
                              key: avatar.name,
                              size: "30"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: avatar.img
                                }, null, 8, ["src"]),
                                createVNode(VTooltip, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(avatar.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "d-flex flex-column gap-2" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex align-start gap-2" }, [
                      __props.item.labels && __props.item.labels.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "d-flex flex-wrap gap-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.item.labels, (text) => {
                          return openBlock(), createBlock(VChip, {
                            key: text,
                            size: "small",
                            color: resolveLabelColor[text]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(text), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      createVNode(VSpacer),
                      createVNode(VMenu, null, {
                        activator: withCtx(({ props: p, isActive }) => [
                          createVNode(VIcon, mergeProps(p, {
                            icon: "ri-more-2-line",
                            class: "position-absolute more-options",
                            style: [{ "inset-block-start": "16px", "inset-inline-end": "10px" }, isActive ? "opacity: 1" : ""],
                            size: "20",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["style", "onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VList, {
                            items: moreOptions,
                            "item-props": ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    __props.item.image && __props.item.image.length ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: __props.item.image,
                      class: "rounded-lg"
                    }, null, 8, ["src"])) : createCommentVNode("", true),
                    createVNode("p", { class: "text-base text-high-emphasis mb-0" }, toDisplayString(__props.item.title), 1),
                    createVNode("div", { class: "task-footer d-flex align-center flex-wrap justify-space-between" }, [
                      __props.item.attachments || __props.item.commentsCount ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "d-flex align-center gap-1 mt-2"
                      }, [
                        __props.item.attachments ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex align-center gap-1"
                        }, [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-attachment-2"
                          }),
                          createVNode("span", { class: "me-3" }, toDisplayString(__props.item.attachments), 1)
                        ])) : createCommentVNode("", true),
                        __props.item.commentsCount ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex align-center gap-1"
                        }, [
                          createVNode(VIcon, {
                            size: "20",
                            icon: "ri-wechat-line"
                          }),
                          createVNode("span", null, toDisplayString(__props.item.commentsCount), 1)
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      __props.item.members && __props.item.members.length ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "v-avatar-group mt-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.item.members, (avatar) => {
                          return openBlock(), createBlock(VAvatar, {
                            key: avatar.name,
                            size: "30"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: avatar.img
                              }, null, 8, ["src"]),
                              createVNode(VTooltip, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(avatar.name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/kanban/KanbanCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const KanbanCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4d1b1d6b"]]);
const _sfc_main$2 = {
  __name: "KanbanItems",
  __ssrInlineRender: true,
  props: {
    kanbanIds: {
      type: Array,
      required: true
    },
    groupName: {
      type: String,
      required: true
    },
    boardName: {
      type: String,
      required: true
    },
    boardId: {
      type: Number,
      required: true
    },
    kanbanData: {
      type: null,
      required: true
    }
  },
  emits: [
    "renameBoard",
    "deleteBoard",
    "addNewItem",
    "editItem",
    "updateItemsState",
    "deleteItem"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const refKanbanBoard = ref();
    const localBoardName = ref(props.boardName);
    const localIds = ref(props.kanbanIds);
    const isAddNewFormVisible = ref(false);
    const isBoardNameEditing = ref(false);
    const refForm = ref();
    const newTaskTitle = ref("");
    const refKanbanBoardTitle = ref();
    const boardActions = [
      {
        title: "Rename",
        prependIcon: "ri-pencil-line",
        onClick: () => {
          isBoardNameEditing.value = true;
        }
      },
      {
        title: "Delete",
        prependIcon: "ri-delete-bin-7-line",
        onClick: () => emit("deleteBoard", props.boardId)
      }
    ];
    const renameBoard = () => {
      var _a;
      (_a = refKanbanBoardTitle.value) == null ? void 0 : _a.validate().then((valid) => {
        if (valid.valid) {
          emit("renameBoard", {
            oldName: props.boardName,
            newName: localBoardName.value,
            boardId: props.boardId
          });
          isBoardNameEditing.value = false;
        }
      });
    };
    const addNewItem = () => {
      var _a;
      (_a = refForm.value) == null ? void 0 : _a.validate().then((valid) => {
        if (valid.valid) {
          emit("addNewItem", {
            itemTitle: newTaskTitle.value,
            boardName: props.boardName,
            boardId: props.boardId
          });
          isAddNewFormVisible.value = false;
          newTaskTitle.value = "";
        }
      });
    };
    dragAndDrop({
      parent: refKanbanBoard,
      values: localIds,
      group: props.groupName,
      draggable: (child) => child.classList.contains("kanban-card"),
      plugins: [animations()]
    });
    watch(() => props, () => {
      localIds.value = props.kanbanIds;
    }, {
      immediate: true,
      deep: true
    });
    watch(localIds, () => {
      emit("updateItemsState", {
        boardId: props.boardId,
        ids: localIds.value
      });
      remapNodes(refKanbanBoard.value);
    }, { deep: true });
    const resolveItemUsingId = (id) => props.kanbanData.items.find((item) => item.id === id);
    const deleteItem = (item) => {
      emit("deleteItem", item);
    };
    const hideAddNewForm = () => {
      var _a;
      isAddNewFormVisible.value = false;
      (_a = refForm.value) == null ? void 0 : _a.reset();
    };
    onClickOutside(refForm, hideAddNewForm);
    onClickOutside(refKanbanBoardTitle, () => {
      isBoardNameEditing.value = false;
    });
    const hideResetBoardNameForm = () => {
      isBoardNameEditing.value = false;
      localBoardName.value = props.boardName;
    };
    const handleEnterKeydown = (event) => {
      if (event.key === "Enter" && !event.shiftKey)
        addNewItem();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "kanban-board" }, _attrs))}><div class="kanban-board-header pb-4">`);
      if (unref(isBoardNameEditing)) {
        _push(ssrRenderComponent(unref(VForm), {
          ref_key: "refKanbanBoardTitle",
          ref: refKanbanBoardTitle,
          onSubmit: renameBoard
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VTextField, {
                modelValue: unref(localBoardName),
                "onUpdate:modelValue": ($event) => isRef(localBoardName) ? localBoardName.value = $event : null,
                density: "compact",
                autofocus: "",
                variant: "underlined",
                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                "hide-details": "",
                class: "rename-board-title-input mt-n3",
                onKeydown: hideResetBoardNameForm
              }, {
                "append-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-center gap-1 h-100"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      size: "small",
                      variant: "text",
                      color: "success",
                      icon: "ri-check-line",
                      class: "cursor-pointer",
                      onClick: renameBoard
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VIcon, {
                      size: "small",
                      variant: "text",
                      color: "error",
                      icon: "ri-close-line",
                      class: "cursor-pointer",
                      onClick: hideResetBoardNameForm
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center gap-1 h-100" }, [
                        createVNode(VIcon, {
                          size: "small",
                          variant: "text",
                          color: "success",
                          icon: "ri-check-line",
                          class: "cursor-pointer",
                          onClick: renameBoard
                        }),
                        createVNode(VIcon, {
                          size: "small",
                          variant: "text",
                          color: "error",
                          icon: "ri-close-line",
                          class: "cursor-pointer",
                          onClick: hideResetBoardNameForm
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VTextField, {
                  modelValue: unref(localBoardName),
                  "onUpdate:modelValue": ($event) => isRef(localBoardName) ? localBoardName.value = $event : null,
                  density: "compact",
                  autofocus: "",
                  variant: "underlined",
                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                  "hide-details": "",
                  class: "rename-board-title-input mt-n3",
                  onKeydown: withKeys(hideResetBoardNameForm, ["esc"])
                }, {
                  "append-inner": withCtx(() => [
                    createVNode("div", { class: "d-flex align-center gap-1 h-100" }, [
                      createVNode(VIcon, {
                        size: "small",
                        variant: "text",
                        color: "success",
                        icon: "ri-check-line",
                        class: "cursor-pointer",
                        onClick: renameBoard
                      }),
                      createVNode(VIcon, {
                        size: "small",
                        variant: "text",
                        color: "error",
                        icon: "ri-close-line",
                        class: "cursor-pointer",
                        onClick: hideResetBoardNameForm
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="d-flex align-center justify-space-between"><h4 class="text-lg font-weight-medium text-truncate">${ssrInterpolate(__props.boardName)}</h4><div class="d-flex align-center">`);
        _push(ssrRenderComponent(VIcon, {
          class: "drag-handler",
          size: "20",
          icon: "ri-drag-move-fill"
        }, null, _parent));
        _push(ssrRenderComponent(_component_MoreBtn, {
          size: "x-small",
          "icon-size": "20",
          "menu-list": boardActions,
          "item-props": "",
          class: "text-high-emphasis"
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
      if (unref(localIds)) {
        _push(`<div class="${ssrRenderClass([unref(localIds).length ? "mb-4" : "", "kanban-board-drop-zone rounded d-flex flex-column gap-4"])}"><!--[-->`);
        ssrRenderList(unref(localIds), (id) => {
          _push(ssrRenderComponent(KanbanCard, {
            item: resolveItemUsingId(id),
            "board-id": props.boardId,
            "board-name": props.boardName,
            onDeleteKanbanItem: deleteItem,
            onClick: ($event) => emit("editItem", { item: resolveItemUsingId(id), boardId: props.boardId, boardName: props.boardName })
          }, null, _parent));
        });
        _push(`<!--]--><div class="add-new-form"><h6 class="text-base font-weight-medium cursor-pointer">`);
        _push(ssrRenderComponent(VIcon, {
          size: "15",
          icon: "ri-add-line"
        }, null, _parent));
        _push(` Add New </h6>`);
        if (unref(isAddNewFormVisible)) {
          _push(ssrRenderComponent(unref(VForm), {
            ref_key: "refForm",
            ref: refForm,
            class: "mt-4",
            "validate-on": "submit",
            onSubmit: addNewItem
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-4"${_scopeId}>`);
                _push2(ssrRenderComponent(VTextarea, {
                  modelValue: unref(newTaskTitle),
                  "onUpdate:modelValue": ($event) => isRef(newTaskTitle) ? newTaskTitle.value = $event : null,
                  density: "compact",
                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                  placeholder: "Add Content",
                  autofocus: "",
                  rows: "2",
                  onKeydown: [handleEnterKeydown, hideAddNewForm]
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="d-flex gap-3 flex-wrap"${_scopeId}>`);
                _push2(ssrRenderComponent(VBtn, {
                  size: "small",
                  type: "submit"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Add `);
                    } else {
                      return [
                        createTextVNode(" Add ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(VBtn, {
                  size: "small",
                  variant: "outlined",
                  color: "secondary",
                  onClick: hideAddNewForm
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Cancel `);
                    } else {
                      return [
                        createTextVNode(" Cancel ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(VTextarea, {
                      modelValue: unref(newTaskTitle),
                      "onUpdate:modelValue": ($event) => isRef(newTaskTitle) ? newTaskTitle.value = $event : null,
                      density: "compact",
                      rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                      placeholder: "Add Content",
                      autofocus: "",
                      rows: "2",
                      onKeydown: [
                        withKeys(handleEnterKeydown, ["enter"]),
                        withKeys(hideAddNewForm, ["esc"])
                      ]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                  ]),
                  createVNode("div", { class: "d-flex gap-3 flex-wrap" }, [
                    createVNode(VBtn, {
                      size: "small",
                      type: "submit"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      size: "small",
                      variant: "outlined",
                      color: "secondary",
                      onClick: hideAddNewForm
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/kanban/KanbanItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "KanbanBoard",
  __ssrInlineRender: true,
  props: {
    kanbanData: {
      type: null,
      required: true
    },
    groupName: {
      type: String,
      required: false,
      default: "kanban"
    }
  },
  emits: [
    "addNewBoard",
    "renameBoard",
    "deleteBoard",
    "addNewItem",
    "editItem",
    "deleteItem",
    "updateItemsState",
    "updateBoardState"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const kanbanWrapper = ref();
    const localKanbanData = ref(props.kanbanData.boards);
    const isKanbanBoardEditVisible = ref(false);
    const isAddNewFormVisible = ref(false);
    const refAddNewBoard = ref();
    const boardTitle = ref("");
    const editKanbanItem = ref();
    const addNewBoard = () => {
      var _a;
      (_a = refAddNewBoard.value) == null ? void 0 : _a.validate().then((valid) => {
        if (valid.valid) {
          emit("addNewBoard", boardTitle.value);
          isAddNewFormVisible.value = false;
          boardTitle.value = "";
        }
      });
    };
    const deleteBoard = (boardId) => {
      emit("deleteBoard", boardId);
    };
    const renameBoard = (boardName) => {
      emit("renameBoard", boardName);
    };
    const addNewItem = (item) => {
      emit("addNewItem", item);
    };
    const editKanbanItemFn = (item) => {
      if (item) {
        editKanbanItem.value = item;
        isKanbanBoardEditVisible.value = true;
      }
    };
    const updateStateFn = (kanbanState) => {
      emit("updateItemsState", kanbanState);
    };
    dragAndDrop({
      parent: kanbanWrapper,
      values: localKanbanData,
      dragHandle: ".drag-handler",
      plugins: [animations()]
    });
    watch(() => props, () => {
      localKanbanData.value = props.kanbanData.boards;
      remapNodes(kanbanWrapper.value);
    }, { deep: true });
    const emitUpdatedTaskFn = (item) => {
      emit("editItem", item);
    };
    const deleteKanbanItemFn = (item) => {
      emit("deleteItem", item);
    };
    watch(localKanbanData, () => {
      const getIds = localKanbanData.value.map((board) => board.id);
      emit("updateBoardState", getIds);
    }, { deep: true });
    const validateBoardTitle = () => {
      return props.kanbanData.boards.some((board) => boardTitle.value && board.title.toLowerCase() === boardTitle.value.toLowerCase()) ? "Board title already exists" : true;
    };
    const hideAddNewForm = () => {
      var _a;
      isAddNewFormVisible.value = false;
      (_a = refAddNewBoard.value) == null ? void 0 : _a.reset();
    };
    onClickOutside(refAddNewBoard, hideAddNewForm);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="kanban-main-wrapper d-flex gap-6 h-100"><div class="d-flex gap-6"><!--[-->`);
      ssrRenderList(unref(localKanbanData), (kb) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          "group-name": __props.groupName,
          "kanban-ids": kb.itemsIds,
          "board-name": kb.title,
          "board-id": kb.id,
          "kanban-items": __props.kanbanData.items,
          "kanban-data": __props.kanbanData,
          onDeleteBoard: deleteBoard,
          onRenameBoard: renameBoard,
          onAddNewItem: addNewItem,
          onEditItem: editKanbanItemFn,
          onUpdateItemsState: updateStateFn,
          onDeleteItem: deleteKanbanItemFn
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="add-new-form text-no-wrap" style="${ssrRenderStyle({ "inline-size": "10rem" })}"><h6 class="text-lg font-weight-medium cursor-pointer">`);
      _push(ssrRenderComponent(VIcon, {
        size: "18",
        icon: "ri-add-line"
      }, null, _parent));
      _push(` Add New </h6>`);
      if (unref(isAddNewFormVisible)) {
        _push(ssrRenderComponent(unref(VForm), {
          ref_key: "refAddNewBoard",
          ref: refAddNewBoard,
          class: "mt-4",
          "validate-on": "submit",
          onSubmit: addNewBoard
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(VTextField, {
                modelValue: unref(boardTitle),
                "onUpdate:modelValue": ($event) => isRef(boardTitle) ? boardTitle.value = $event : null,
                density: "compact",
                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), validateBoardTitle],
                autofocus: "",
                placeholder: "Add Board Title",
                onKeydown: hideAddNewForm
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="d-flex gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                size: "small",
                type: "submit"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Add `);
                  } else {
                    return [
                      createTextVNode(" Add ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                size: "small",
                variant: "outlined",
                color: "secondary",
                type: "reset",
                onClick: hideAddNewForm
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Cancel `);
                  } else {
                    return [
                      createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-4" }, [
                  createVNode(VTextField, {
                    modelValue: unref(boardTitle),
                    "onUpdate:modelValue": ($event) => isRef(boardTitle) ? boardTitle.value = $event : null,
                    density: "compact",
                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), validateBoardTitle],
                    autofocus: "",
                    placeholder: "Add Board Title",
                    onKeydown: withKeys(hideAddNewForm, ["esc"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                ]),
                createVNode("div", { class: "d-flex gap-3" }, [
                  createVNode(VBtn, {
                    size: "small",
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add ")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    size: "small",
                    variant: "outlined",
                    color: "secondary",
                    type: "reset",
                    onClick: hideAddNewForm
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        "is-drawer-open": unref(isKanbanBoardEditVisible),
        "onUpdate:isDrawerOpen": ($event) => isRef(isKanbanBoardEditVisible) ? isKanbanBoardEditVisible.value = $event : null,
        "kanban-item": unref(editKanbanItem),
        "onUpdate:kanbanItem": emitUpdatedTaskFn,
        onDeleteKanbanItem: deleteKanbanItemFn
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/kanban/KanbanBoard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: kanban,
      execute: refetchKanban
    } = ([__temp, __restore] = withAsyncContext(() => useApi("/apps/kanban")), __temp = await __temp, __restore(), __temp);
    const addNewBoard = async (newBoardName) => {
      await $api("/apps/kanban/board/add", {
        method: "POST",
        body: { title: newBoardName }
      });
      refetchKanban();
    };
    const deleteBoard = async (boardId) => {
      await $api(`/apps/kanban/board/${boardId}`, { method: "DELETE" });
      refetchKanban();
    };
    const renameTheBoard = async (kanbanBoard) => {
      await $api("/apps/kanban/board/rename", {
        method: "PUT",
        body: kanbanBoard
      });
      refetchKanban();
    };
    const addNewItem = async (newItem) => {
      await $api("/apps/kanban/item/add", {
        method: "POST",
        body: newItem
      });
      refetchKanban();
    };
    const editItemFn = async (editItem) => {
      await $api("/apps/kanban/item/update", {
        method: "PUT",
        body: editItem
      });
      refetchKanban();
    };
    const deleteItemFn = async (deleteItem) => {
      if (deleteItem.item && deleteItem.item.id) {
        await $api(`/apps/kanban/item/${deleteItem.item.id}`, {
          method: "DELETE",
          body: deleteItem
        });
        refetchKanban();
      }
    };
    const updateItemState = async (kanbanState) => {
      await $api("/apps/kanban/item/state-update", {
        method: "PUT",
        body: kanbanState
      });
    };
    const updateBoardState = async (kanbanBoardIds) => {
      await $api("/apps/kanban/board/state-update", {
        method: "PUT",
        body: kanbanBoardIds
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(kanban)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          "kanban-data": unref(kanban),
          onAddNewBoard: addNewBoard,
          onDeleteBoard: deleteBoard,
          onRenameBoard: renameTheBoard,
          onAddNewItem: addNewItem,
          onEditItem: editItemFn,
          onDeleteItem: deleteItemFn,
          onUpdateItemsState: updateItemState,
          onUpdateBoardState: updateBoardState
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/kanban/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
