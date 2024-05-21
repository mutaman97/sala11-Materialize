import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { useSSRContext, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, isRef, createVNode, withAsyncContext, computed, resolveComponent, openBlock, createBlock, Fragment, renderList } from "vue";
import { _ as _sfc_main$2 } from "./DialogCloseBtn-h97PlnE6.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VBtn, a as VIcon } from "../ssr.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VAvatar-D2wIwigQ.js";
import "./form-DJQTvsmB.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
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
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "ufo";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VMenu-KUYgjPyD.js";
const _sfc_main$1 = {
  __name: "AddEditPermissionDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true
    },
    permissionName: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: [
    "update:isDialogVisible",
    "update:permissionName"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentPermissionName = ref("");
    const onReset = () => {
      emit("update:isDialogVisible", false);
      currentPermissionName.value = "";
    };
    const onSubmit = () => {
      emit("update:isDialogVisible", false);
      emit("update:permissionName", currentPermissionName.value);
    };
    watch(() => props, () => {
      currentPermissionName.value = props.permissionName;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$2;
      _push(ssrRenderComponent(VDialog, mergeProps({
        width: _ctx.$vuetify.display.smAndDown ? "auto" : 600,
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": onReset
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-8 pa-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: onReset
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "mt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}>${ssrInterpolate(props.permissionName ? "Edit" : "Add")} Permission </h4><p class="text-body-1"${_scopeId3}>${ssrInterpolate(props.permissionName ? "Edit" : "Add")} permission as per your requirements. </p></div>`);
                        _push4(ssrRenderComponent(VForm, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAlert, {
                                type: "warning",
                                title: "Warning!",
                                variant: "tonal",
                                class: "mb-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` By ${ssrInterpolate(props.permissionName ? "editing" : "adding")} the permission name, you might break the system permissions functionality. Please ensure you&#39;re absolutely certain before proceeding. `);
                                  } else {
                                    return [
                                      createTextVNode(" By " + toDisplayString(props.permissionName ? "editing" : "adding") + " the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding. ", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center gap-4 mb-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(currentPermissionName),
                                "onUpdate:modelValue": ($event) => isRef(currentPermissionName) ? currentPermissionName.value = $event : null,
                                density: "compact",
                                placeholder: "Enter Permission Name"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { onClick: onSubmit }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Update `);
                                  } else {
                                    return [
                                      createTextVNode(" Update ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(VCheckbox, { label: "Set as core permission" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VAlert, {
                                  type: "warning",
                                  title: "Warning!",
                                  variant: "tonal",
                                  class: "mb-6"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" By " + toDisplayString(props.permissionName ? "editing" : "adding") + " the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding. ", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(currentPermissionName),
                                    "onUpdate:modelValue": ($event) => isRef(currentPermissionName) ? currentPermissionName.value = $event : null,
                                    density: "compact",
                                    placeholder: "Enter Permission Name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, { onClick: onSubmit }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Update ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(VCheckbox, { label: "Set as core permission" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.permissionName ? "Edit" : "Add") + " Permission ", 1),
                            createVNode("p", { class: "text-body-1" }, toDisplayString(props.permissionName ? "Edit" : "Add") + " permission as per your requirements. ", 1)
                          ]),
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VAlert, {
                                type: "warning",
                                title: "Warning!",
                                variant: "tonal",
                                class: "mb-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" By " + toDisplayString(props.permissionName ? "editing" : "adding") + " the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding. ", 1)
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                                createVNode(VTextField, {
                                  modelValue: unref(currentPermissionName),
                                  "onUpdate:modelValue": ($event) => isRef(currentPermissionName) ? currentPermissionName.value = $event : null,
                                  density: "compact",
                                  placeholder: "Enter Permission Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, { onClick: onSubmit }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Update ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VCheckbox, { label: "Set as core permission" })
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
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: onReset
                    }),
                    createVNode(VCardText, { class: "mt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-6" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.permissionName ? "Edit" : "Add") + " Permission ", 1),
                          createVNode("p", { class: "text-body-1" }, toDisplayString(props.permissionName ? "Edit" : "Add") + " permission as per your requirements. ", 1)
                        ]),
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VAlert, {
                              type: "warning",
                              title: "Warning!",
                              variant: "tonal",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" By " + toDisplayString(props.permissionName ? "editing" : "adding") + " the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding. ", 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                              createVNode(VTextField, {
                                modelValue: unref(currentPermissionName),
                                "onUpdate:modelValue": ($event) => isRef(currentPermissionName) ? currentPermissionName.value = $event : null,
                                density: "compact",
                                placeholder: "Enter Permission Name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, { onClick: onSubmit }, {
                                default: withCtx(() => [
                                  createTextVNode(" Update ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(VCheckbox, { label: "Set as core permission" })
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
              createVNode(VCard, { class: "pa-sm-8 pa-5" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: onReset
                  }),
                  createVNode(VCardText, { class: "mt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.permissionName ? "Edit" : "Add") + " Permission ", 1),
                        createVNode("p", { class: "text-body-1" }, toDisplayString(props.permissionName ? "Edit" : "Add") + " permission as per your requirements. ", 1)
                      ]),
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          createVNode(VAlert, {
                            type: "warning",
                            title: "Warning!",
                            variant: "tonal",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" By " + toDisplayString(props.permissionName ? "editing" : "adding") + " the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding. ", 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                            createVNode(VTextField, {
                              modelValue: unref(currentPermissionName),
                              "onUpdate:modelValue": ($event) => isRef(currentPermissionName) ? currentPermissionName.value = $event : null,
                              density: "compact",
                              placeholder: "Enter Permission Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VBtn, { onClick: onSubmit }, {
                              default: withCtx(() => [
                                createTextVNode(" Update ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VCheckbox, { label: "Set as core permission" })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/AddEditPermissionDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headers = [
      {
        title: "Name",
        key: "name"
      },
      {
        title: "Assigned To",
        key: "assignedTo",
        sortable: false
      },
      {
        title: "Created Date",
        key: "createdDate",
        sortable: false
      },
      {
        title: "Actions",
        key: "actions",
        sortable: false
      }
    ];
    const search = ref("");
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
    const isPermissionDialogVisible = ref(false);
    const isAddPermissionDialogVisible = ref(false);
    const permissionName = ref("");
    const colors = {
      "support": {
        color: "info",
        text: "Support"
      },
      "users": {
        color: "success",
        text: "Users"
      },
      "manager": {
        color: "warning",
        text: "Manager"
      },
      "administrator": {
        color: "primary",
        text: "Administrator"
      },
      "restricted-user": {
        color: "error",
        text: "Restricted User"
      }
    };
    const { data: permissionsData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/permissions", {
      query: {
        q: search,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const permissions = computed(() => permissionsData.value.permissions);
    const totalPermissions = computed(() => permissionsData.value.totalPermissions);
    const editPermission = (name) => {
      isPermissionDialogVisible.value = true;
      permissionName.value = name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_AddEditPermissionDialog = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-sm-space-between justify-start gap-4 flex-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    density: "compact",
                    placeholder: "Search Permission",
                    style: { "max-inline-size": "15.625rem", "min-inline-size": "12rem" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    density: "default",
                    onClick: ($event) => isAddPermissionDialogVisible.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add Permission `);
                      } else {
                        return [
                          createTextVNode(" Add Permission ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      density: "compact",
                      placeholder: "Search Permission",
                      style: { "max-inline-size": "15.625rem", "min-inline-size": "12rem" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      density: "default",
                      onClick: ($event) => isAddPermissionDialogVisible.value = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add Permission ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTableServer, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              "items-length": unref(totalPermissions),
              "items-per-page-options": [
                { value: 5, title: "5" },
                { value: 10, title: "10" },
                { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }
              ],
              headers,
              items: unref(permissions),
              "item-value": "name",
              class: "text-no-wrap",
              "onUpdate:options": updateOptions
            }, {
              "item.assignedTo": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(item.assignedTo, (text) => {
                    _push3(ssrRenderComponent(VChip, {
                      key: text,
                      color: colors[text].color,
                      size: "small"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(colors[text].text)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(colors[text].text), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.assignedTo, (text) => {
                        return openBlock(), createBlock(VChip, {
                          key: text,
                          color: colors[text].color,
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(colors[text].text), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              "item.name": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 font-weight-regular"${_scopeId2}>${ssrInterpolate(item.name)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(item.name), 1)
                  ];
                }
              }),
              "item.createdDate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-body-1"${_scopeId2}>${ssrInterpolate(item.createdDate)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-body-1" }, toDisplayString(item.createdDate), 1)
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
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
                    onClick: ($event) => editPermission(item.name)
                  }, {
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
                } else {
                  return [
                    createVNode(_component_IconBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => editPermission(item.name)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-edit-box-line" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
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
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalPermissions)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                    disabled: unref(page) >= Math.ceil(unref(totalPermissions) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalPermissions) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalPermissions) / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalPermissions))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalPermissions) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalPermissions) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalPermissions) / unref(itemsPerPage)) : page.value++
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
              createVNode(VCardText, { class: "d-flex align-center justify-sm-space-between justify-start gap-4 flex-wrap" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    density: "compact",
                    placeholder: "Search Permission",
                    style: { "max-inline-size": "15.625rem", "min-inline-size": "12rem" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    density: "default",
                    onClick: ($event) => isAddPermissionDialogVisible.value = true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add Permission ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                "items-length": unref(totalPermissions),
                "items-per-page-options": [
                  { value: 5, title: "5" },
                  { value: 10, title: "10" },
                  { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }
                ],
                headers,
                items: unref(permissions),
                "item-value": "name",
                class: "text-no-wrap",
                "onUpdate:options": updateOptions
              }, {
                "item.assignedTo": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.assignedTo, (text) => {
                      return openBlock(), createBlock(VChip, {
                        key: text,
                        color: colors[text].color,
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(colors[text].text), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]);
                    }), 128))
                  ])
                ]),
                "item.name": withCtx(({ item }) => [
                  createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(item.name), 1)
                ]),
                "item.createdDate": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-1" }, toDisplayString(item.createdDate), 1)
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_IconBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => editPermission(item.name)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-edit-box-line" })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalPermissions))), 1),
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
                        disabled: unref(page) >= Math.ceil(unref(totalPermissions) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalPermissions) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalPermissions) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "items-length", "items-per-page-options", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AddEditPermissionDialog, {
        isDialogVisible: unref(isPermissionDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isPermissionDialogVisible) ? isPermissionDialogVisible.value = $event : null,
        "permission-name": unref(permissionName),
        "onUpdate:permissionName": ($event) => isRef(permissionName) ? permissionName.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddEditPermissionDialog, {
        isDialogVisible: unref(isAddPermissionDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isAddPermissionDialogVisible) ? isAddPermissionDialogVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/permissions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
