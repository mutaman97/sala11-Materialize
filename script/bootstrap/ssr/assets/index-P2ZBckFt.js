import { useSSRContext, ref, computed, watch, mergeProps, withCtx, unref, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, resolveComponent, createCommentVNode, withAsyncContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./DialogCloseBtn-h97PlnE6.js";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VBtn, c as avatar1, d as avatar2, e as avatar3, f as avatar4, h as avatar5, j as avatar6, i as avatar7, H as avatar8, I as avatar9, J as avatar10, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./form-DJQTvsmB.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
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
import "./helpers-DX2i3Kdq.js";
import "ufo";
import "ofetch";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./filter-BC4fOy6c.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main$3 = {
  __name: "AddEditRoleDialog",
  __ssrInlineRender: true,
  props: {
    rolePermissions: {
      type: Object,
      required: false,
      default: () => ({
        name: "",
        permissions: []
      })
    },
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDialogVisible",
    "update:rolePermissions"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const permissions = ref([
      {
        name: "User Management",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Content Management",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Disputes Management",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Database Management",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Financial Management",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Reporting",
        read: false,
        write: false,
        create: false
      },
      {
        name: "API Control",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Repository Management",
        read: false,
        write: false,
        create: false
      },
      {
        name: "Payroll",
        read: false,
        write: false,
        create: false
      }
    ]);
    const isSelectAll = ref(false);
    const role = ref("");
    const refPermissionForm = ref();
    const checkedCount = computed(() => {
      let counter = 0;
      permissions.value.forEach((permission) => {
        Object.entries(permission).forEach(([key, value]) => {
          if (key !== "name" && value)
            counter++;
        });
      });
      return counter;
    });
    const isIndeterminate = computed(() => checkedCount.value > 0 && checkedCount.value < permissions.value.length * 3);
    watch(isSelectAll, (val) => {
      permissions.value = permissions.value.map((permission) => ({
        ...permission,
        read: val,
        write: val,
        create: val
      }));
    });
    watch(isIndeterminate, () => {
      if (!isIndeterminate.value)
        isSelectAll.value = false;
    });
    watch(permissions, () => {
      if (checkedCount.value === permissions.value.length * 3)
        isSelectAll.value = true;
    }, { deep: true });
    watch(() => props, () => {
      if (props.rolePermissions && props.rolePermissions.permissions.length) {
        role.value = props.rolePermissions.name;
        permissions.value = permissions.value.map((permission) => {
          var _a;
          const rolePermission = (_a = props.rolePermissions) == null ? void 0 : _a.permissions.find((item) => item.name === permission.name);
          if (rolePermission) {
            return {
              ...permission,
              ...rolePermission
            };
          }
          return permission;
        });
      }
    });
    const onSubmit = () => {
      var _a;
      const rolePermissions = {
        name: role.value,
        permissions: permissions.value
      };
      emit("update:rolePermissions", rolePermissions);
      emit("update:isDialogVisible", false);
      isSelectAll.value = false;
      (_a = refPermissionForm.value) == null ? void 0 : _a.reset();
    };
    const onReset = () => {
      var _a;
      emit("update:isDialogVisible", false);
      isSelectAll.value = false;
      (_a = refPermissionForm.value) == null ? void 0 : _a.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      _push(ssrRenderComponent(VDialog, mergeProps({
        width: _ctx.$vuetify.display.smAndDown ? "auto" : 900,
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": onReset
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: onReset
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-10"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}>${ssrInterpolate(props.rolePermissions.name ? "Edit" : "Add")} Role </h4><p class="text-body-1"${_scopeId3}>${ssrInterpolate(props.rolePermissions.name ? "Edit" : "Add")} Role </p></div>`);
                        _push4(ssrRenderComponent(unref(VForm), {
                          ref_key: "refPermissionForm",
                          ref: refPermissionForm
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(role),
                                "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                label: "Role Name",
                                placeholder: "Enter Role Name"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5 my-6"${_scopeId4}> Role Permissions </h5>`);
                              _push5(ssrRenderComponent(VTable, { class: "permission-table text-no-wrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<tr${_scopeId5}><td class="text-h6"${_scopeId5}> Administrator Access </td><td colspan="3"${_scopeId5}><div class="d-flex justify-end"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(isSelectAll),
                                      "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                                      indeterminate: unref(isIndeterminate),
                                      "onUpdate:indeterminate": ($event) => isRef(isIndeterminate) ? isIndeterminate.value = $event : null,
                                      label: "Select All"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></td></tr><!--[-->`);
                                    ssrRenderList(unref(permissions), (permission) => {
                                      _push6(`<tr${_scopeId5}><td class="text-h6"${_scopeId5}>${ssrInterpolate(permission.name)}</td><td style="${ssrRenderStyle({ "inline-size": "5.75rem" })}"${_scopeId5}><div class="d-flex justify-end"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VCheckbox, {
                                        modelValue: permission.read,
                                        "onUpdate:modelValue": ($event) => permission.read = $event,
                                        label: "Read"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></td><td style="${ssrRenderStyle({ "inline-size": "5.75rem" })}"${_scopeId5}><div class="d-flex justify-end"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VCheckbox, {
                                        modelValue: permission.write,
                                        "onUpdate:modelValue": ($event) => permission.write = $event,
                                        label: "Write"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></td><td style="${ssrRenderStyle({ "inline-size": "5.75rem" })}"${_scopeId5}><div class="d-flex justify-end"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VCheckbox, {
                                        modelValue: permission.create,
                                        "onUpdate:modelValue": ($event) => permission.create = $event,
                                        label: "Create"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></td></tr>`);
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-h6" }, " Administrator Access "),
                                        createVNode("td", { colspan: "3" }, [
                                          createVNode("div", { class: "d-flex justify-end" }, [
                                            createVNode(VCheckbox, {
                                              modelValue: unref(isSelectAll),
                                              "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                                              indeterminate: unref(isIndeterminate),
                                              "onUpdate:indeterminate": ($event) => isRef(isIndeterminate) ? isIndeterminate.value = $event : null,
                                              label: "Select All"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onUpdate:indeterminate"])
                                          ])
                                        ])
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(permissions), (permission) => {
                                        return openBlock(), createBlock("tr", {
                                          key: permission.name
                                        }, [
                                          createVNode("td", { class: "text-h6" }, toDisplayString(permission.name), 1),
                                          createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                            createVNode("div", { class: "d-flex justify-end" }, [
                                              createVNode(VCheckbox, {
                                                modelValue: permission.read,
                                                "onUpdate:modelValue": ($event) => permission.read = $event,
                                                label: "Read"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                            createVNode("div", { class: "d-flex justify-end" }, [
                                              createVNode(VCheckbox, {
                                                modelValue: permission.write,
                                                "onUpdate:modelValue": ($event) => permission.write = $event,
                                                label: "Write"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                            createVNode("div", { class: "d-flex justify-end" }, [
                                              createVNode(VCheckbox, {
                                                modelValue: permission.create,
                                                "onUpdate:modelValue": ($event) => permission.create = $event,
                                                label: "Create"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ])
                                        ]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center justify-center gap-3 mt-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, { onClick: onSubmit }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Submit `);
                                  } else {
                                    return [
                                      createTextVNode(" Submit ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: onReset
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cancel `);
                                  } else {
                                    return [
                                      createTextVNode(" Cancel ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(role),
                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                  label: "Role Name",
                                  placeholder: "Enter Role Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("h5", { class: "text-h5 my-6" }, " Role Permissions "),
                                createVNode(VTable, { class: "permission-table text-no-wrap" }, {
                                  default: withCtx(() => [
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "text-h6" }, " Administrator Access "),
                                      createVNode("td", { colspan: "3" }, [
                                        createVNode("div", { class: "d-flex justify-end" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: unref(isSelectAll),
                                            "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                                            indeterminate: unref(isIndeterminate),
                                            "onUpdate:indeterminate": ($event) => isRef(isIndeterminate) ? isIndeterminate.value = $event : null,
                                            label: "Select All"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onUpdate:indeterminate"])
                                        ])
                                      ])
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(permissions), (permission) => {
                                      return openBlock(), createBlock("tr", {
                                        key: permission.name
                                      }, [
                                        createVNode("td", { class: "text-h6" }, toDisplayString(permission.name), 1),
                                        createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                          createVNode("div", { class: "d-flex justify-end" }, [
                                            createVNode(VCheckbox, {
                                              modelValue: permission.read,
                                              "onUpdate:modelValue": ($event) => permission.read = $event,
                                              label: "Read"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                          createVNode("div", { class: "d-flex justify-end" }, [
                                            createVNode(VCheckbox, {
                                              modelValue: permission.write,
                                              "onUpdate:modelValue": ($event) => permission.write = $event,
                                              label: "Write"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                          createVNode("div", { class: "d-flex justify-end" }, [
                                            createVNode(VCheckbox, {
                                              modelValue: permission.create,
                                              "onUpdate:modelValue": ($event) => permission.create = $event,
                                              label: "Create"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ])
                                      ]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex align-center justify-center gap-3 mt-6" }, [
                                  createVNode(VBtn, { onClick: onSubmit }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    onClick: onReset
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-10" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.rolePermissions.name ? "Edit" : "Add") + " Role ", 1),
                            createVNode("p", { class: "text-body-1" }, toDisplayString(props.rolePermissions.name ? "Edit" : "Add") + " Role ", 1)
                          ]),
                          createVNode(unref(VForm), {
                            ref_key: "refPermissionForm",
                            ref: refPermissionForm
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(role),
                                "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                label: "Role Name",
                                placeholder: "Enter Role Name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("h5", { class: "text-h5 my-6" }, " Role Permissions "),
                              createVNode(VTable, { class: "permission-table text-no-wrap" }, {
                                default: withCtx(() => [
                                  createVNode("tr", null, [
                                    createVNode("td", { class: "text-h6" }, " Administrator Access "),
                                    createVNode("td", { colspan: "3" }, [
                                      createVNode("div", { class: "d-flex justify-end" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: unref(isSelectAll),
                                          "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                                          indeterminate: unref(isIndeterminate),
                                          "onUpdate:indeterminate": ($event) => isRef(isIndeterminate) ? isIndeterminate.value = $event : null,
                                          label: "Select All"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onUpdate:indeterminate"])
                                      ])
                                    ])
                                  ]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(permissions), (permission) => {
                                    return openBlock(), createBlock("tr", {
                                      key: permission.name
                                    }, [
                                      createVNode("td", { class: "text-h6" }, toDisplayString(permission.name), 1),
                                      createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                        createVNode("div", { class: "d-flex justify-end" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: permission.read,
                                            "onUpdate:modelValue": ($event) => permission.read = $event,
                                            label: "Read"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                        createVNode("div", { class: "d-flex justify-end" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: permission.write,
                                            "onUpdate:modelValue": ($event) => permission.write = $event,
                                            label: "Write"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                        createVNode("div", { class: "d-flex justify-end" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: permission.create,
                                            "onUpdate:modelValue": ($event) => permission.create = $event,
                                            label: "Create"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex align-center justify-center gap-3 mt-6" }, [
                                createVNode(VBtn, { onClick: onSubmit }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  onClick: onReset
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 512)
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-10" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.rolePermissions.name ? "Edit" : "Add") + " Role ", 1),
                          createVNode("p", { class: "text-body-1" }, toDisplayString(props.rolePermissions.name ? "Edit" : "Add") + " Role ", 1)
                        ]),
                        createVNode(unref(VForm), {
                          ref_key: "refPermissionForm",
                          ref: refPermissionForm
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(role),
                              "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                              label: "Role Name",
                              placeholder: "Enter Role Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("h5", { class: "text-h5 my-6" }, " Role Permissions "),
                            createVNode(VTable, { class: "permission-table text-no-wrap" }, {
                              default: withCtx(() => [
                                createVNode("tr", null, [
                                  createVNode("td", { class: "text-h6" }, " Administrator Access "),
                                  createVNode("td", { colspan: "3" }, [
                                    createVNode("div", { class: "d-flex justify-end" }, [
                                      createVNode(VCheckbox, {
                                        modelValue: unref(isSelectAll),
                                        "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                                        indeterminate: unref(isIndeterminate),
                                        "onUpdate:indeterminate": ($event) => isRef(isIndeterminate) ? isIndeterminate.value = $event : null,
                                        label: "Select All"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onUpdate:indeterminate"])
                                    ])
                                  ])
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(permissions), (permission) => {
                                  return openBlock(), createBlock("tr", {
                                    key: permission.name
                                  }, [
                                    createVNode("td", { class: "text-h6" }, toDisplayString(permission.name), 1),
                                    createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                      createVNode("div", { class: "d-flex justify-end" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: permission.read,
                                          "onUpdate:modelValue": ($event) => permission.read = $event,
                                          label: "Read"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                      createVNode("div", { class: "d-flex justify-end" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: permission.write,
                                          "onUpdate:modelValue": ($event) => permission.write = $event,
                                          label: "Write"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                      createVNode("div", { class: "d-flex justify-end" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: permission.create,
                                          "onUpdate:modelValue": ($event) => permission.create = $event,
                                          label: "Create"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex align-center justify-center gap-3 mt-6" }, [
                              createVNode(VBtn, { onClick: onSubmit }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: onReset
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 512)
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
              createVNode(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: onReset
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-10" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.rolePermissions.name ? "Edit" : "Add") + " Role ", 1),
                        createVNode("p", { class: "text-body-1" }, toDisplayString(props.rolePermissions.name ? "Edit" : "Add") + " Role ", 1)
                      ]),
                      createVNode(unref(VForm), {
                        ref_key: "refPermissionForm",
                        ref: refPermissionForm
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(role),
                            "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                            label: "Role Name",
                            placeholder: "Enter Role Name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("h5", { class: "text-h5 my-6" }, " Role Permissions "),
                          createVNode(VTable, { class: "permission-table text-no-wrap" }, {
                            default: withCtx(() => [
                              createVNode("tr", null, [
                                createVNode("td", { class: "text-h6" }, " Administrator Access "),
                                createVNode("td", { colspan: "3" }, [
                                  createVNode("div", { class: "d-flex justify-end" }, [
                                    createVNode(VCheckbox, {
                                      modelValue: unref(isSelectAll),
                                      "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                                      indeterminate: unref(isIndeterminate),
                                      "onUpdate:indeterminate": ($event) => isRef(isIndeterminate) ? isIndeterminate.value = $event : null,
                                      label: "Select All"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onUpdate:indeterminate"])
                                  ])
                                ])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(permissions), (permission) => {
                                return openBlock(), createBlock("tr", {
                                  key: permission.name
                                }, [
                                  createVNode("td", { class: "text-h6" }, toDisplayString(permission.name), 1),
                                  createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                    createVNode("div", { class: "d-flex justify-end" }, [
                                      createVNode(VCheckbox, {
                                        modelValue: permission.read,
                                        "onUpdate:modelValue": ($event) => permission.read = $event,
                                        label: "Read"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                    createVNode("div", { class: "d-flex justify-end" }, [
                                      createVNode(VCheckbox, {
                                        modelValue: permission.write,
                                        "onUpdate:modelValue": ($event) => permission.write = $event,
                                        label: "Write"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("td", { style: { "inline-size": "5.75rem" } }, [
                                    createVNode("div", { class: "d-flex justify-end" }, [
                                      createVNode(VCheckbox, {
                                        modelValue: permission.create,
                                        "onUpdate:modelValue": ($event) => permission.create = $event,
                                        label: "Create"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex align-center justify-center gap-3 mt-6" }, [
                            createVNode(VBtn, { onClick: onSubmit }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              onClick: onReset
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/AddEditRoleDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const poseM = "/build/assets/pose_m1-CZvEC2-y.png";
const _sfc_main$2 = {
  __name: "RoleCards",
  __ssrInlineRender: true,
  setup(__props) {
    const roles = ref([
      {
        role: "Administrator",
        users: [
          avatar1,
          avatar2,
          avatar3,
          avatar4
        ],
        details: {
          name: "Administrator",
          permissions: [
            {
              name: "User Management",
              read: true,
              write: true,
              create: true
            },
            {
              name: "Disputes Management",
              read: true,
              write: true,
              create: true
            },
            {
              name: "API Control",
              read: true,
              write: true,
              create: true
            }
          ]
        }
      },
      {
        role: "Manager",
        users: [
          avatar1,
          avatar2,
          avatar3,
          avatar4,
          avatar5,
          avatar6,
          avatar7
        ],
        details: {
          name: "Manager",
          permissions: [
            {
              name: "Reporting",
              read: true,
              write: true,
              create: false
            },
            {
              name: "Payroll",
              read: true,
              write: true,
              create: true
            },
            {
              name: "User Management",
              read: true,
              write: true,
              create: true
            }
          ]
        }
      },
      {
        role: "Users",
        users: [
          avatar1,
          avatar2,
          avatar3,
          avatar4,
          avatar5
        ],
        details: {
          name: "Users",
          permissions: [
            {
              name: "User Management",
              read: true,
              write: false,
              create: false
            },
            {
              name: "Content Management",
              read: true,
              write: false,
              create: false
            },
            {
              name: "Disputes Management",
              read: true,
              write: false,
              create: false
            },
            {
              name: "Database Management",
              read: true,
              write: false,
              create: false
            }
          ]
        }
      },
      {
        role: "Support",
        users: [
          avatar1,
          avatar2,
          avatar3,
          avatar4,
          avatar5,
          avatar6
        ],
        details: {
          name: "Support",
          permissions: [
            {
              name: "Repository Management",
              read: true,
              write: true,
              create: false
            },
            {
              name: "Content Management",
              read: true,
              write: true,
              create: false
            },
            {
              name: "Database Management",
              read: true,
              write: true,
              create: false
            }
          ]
        }
      },
      {
        role: "Restricted User",
        users: [
          avatar1,
          avatar2,
          avatar3,
          avatar4,
          avatar5,
          avatar6,
          avatar7,
          avatar8,
          avatar9,
          avatar10
        ],
        details: {
          name: "Restricted User",
          permissions: [
            {
              name: "User Management",
              read: true,
              write: false,
              create: false
            },
            {
              name: "Content Management",
              read: true,
              write: false,
              create: false
            },
            {
              name: "Disputes Management",
              read: true,
              write: false,
              create: false
            },
            {
              name: "Database Management",
              read: true,
              write: false,
              create: false
            }
          ]
        }
      }
    ]);
    const isRoleDialogVisible = ref(false);
    const roleDetail = ref();
    const isAddRoleDialogVisible = ref(false);
    const editPermission = (value) => {
      isRoleDialogVisible.value = true;
      roleDetail.value = value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_AddEditRoleDialog = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(roles), (item) => {
              _push2(ssrRenderComponent(VCol, {
                key: item.role,
                cols: "12",
                sm: "6",
                lg: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "d-flex align-center pb-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>Total ${ssrInterpolate(item.users.length)} users</span>`);
                                _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                _push5(`<div class="v-avatar-group"${_scopeId4}><!--[-->`);
                                ssrRenderList(item.users, (user, index) => {
                                  _push5(`<!--[-->`);
                                  if (item.users.length > 4 && item.users.length !== 4 && index < 3) {
                                    _push5(ssrRenderComponent(VAvatar, {
                                      size: "40",
                                      image: user
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  if (item.users.length === 4) {
                                    _push5(ssrRenderComponent(VAvatar, {
                                      size: "40",
                                      image: user
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--]-->`);
                                });
                                _push5(`<!--]-->`);
                                if (item.users.length > 4) {
                                  _push5(ssrRenderComponent(VAvatar, {
                                    color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="text-high-emphasis"${_scopeId5}> +${ssrInterpolate(item.users.length - 3)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "text-high-emphasis" }, " +" + toDisplayString(item.users.length - 3), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("span", null, "Total " + toDisplayString(item.users.length) + " users", 1),
                                  createVNode(VSpacer),
                                  createVNode("div", { class: "v-avatar-group" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.users, (user, index) => {
                                      return openBlock(), createBlock(Fragment, { key: user }, [
                                        item.users.length > 4 && item.users.length !== 4 && index < 3 ? (openBlock(), createBlock(VAvatar, {
                                          key: 0,
                                          size: "40",
                                          image: user
                                        }, null, 8, ["image"])) : createCommentVNode("", true),
                                        item.users.length === 4 ? (openBlock(), createBlock(VAvatar, {
                                          key: 1,
                                          size: "40",
                                          image: user
                                        }, null, 8, ["image"])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 128)),
                                    item.users.length > 4 ? (openBlock(), createBlock(VAvatar, {
                                      key: 0,
                                      color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-high-emphasis" }, " +" + toDisplayString(item.users.length - 3), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : createCommentVNode("", true)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex justify-space-between align-end"${_scopeId4}><div${_scopeId4}><h5 class="text-h5 mb-1"${_scopeId4}>${ssrInterpolate(item.role)}</h5><a href="javascript:void(0)"${_scopeId4}> Edit Role </a></div>`);
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  color: "secondary",
                                  class: "mt-n2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-file-copy-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-file-copy-line" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex justify-space-between align-end" }, [
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(item.role), 1),
                                      createVNode("a", {
                                        href: "javascript:void(0)",
                                        onClick: ($event) => editPermission(item.details)
                                      }, " Edit Role ", 8, ["onClick"])
                                    ]),
                                    createVNode(_component_IconBtn, {
                                      color: "secondary",
                                      class: "mt-n2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-file-copy-line" })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "d-flex align-center pb-4" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Total " + toDisplayString(item.users.length) + " users", 1),
                                createVNode(VSpacer),
                                createVNode("div", { class: "v-avatar-group" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.users, (user, index) => {
                                    return openBlock(), createBlock(Fragment, { key: user }, [
                                      item.users.length > 4 && item.users.length !== 4 && index < 3 ? (openBlock(), createBlock(VAvatar, {
                                        key: 0,
                                        size: "40",
                                        image: user
                                      }, null, 8, ["image"])) : createCommentVNode("", true),
                                      item.users.length === 4 ? (openBlock(), createBlock(VAvatar, {
                                        key: 1,
                                        size: "40",
                                        image: user
                                      }, null, 8, ["image"])) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  item.users.length > 4 ? (openBlock(), createBlock(VAvatar, {
                                    key: 0,
                                    color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-high-emphasis" }, " +" + toDisplayString(item.users.length - 3), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-space-between align-end" }, [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(item.role), 1),
                                    createVNode("a", {
                                      href: "javascript:void(0)",
                                      onClick: ($event) => editPermission(item.details)
                                    }, " Edit Role ", 8, ["onClick"])
                                  ]),
                                  createVNode(_component_IconBtn, {
                                    color: "secondary",
                                    class: "mt-n2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-file-copy-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
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
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "d-flex align-center pb-4" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Total " + toDisplayString(item.users.length) + " users", 1),
                              createVNode(VSpacer),
                              createVNode("div", { class: "v-avatar-group" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.users, (user, index) => {
                                  return openBlock(), createBlock(Fragment, { key: user }, [
                                    item.users.length > 4 && item.users.length !== 4 && index < 3 ? (openBlock(), createBlock(VAvatar, {
                                      key: 0,
                                      size: "40",
                                      image: user
                                    }, null, 8, ["image"])) : createCommentVNode("", true),
                                    item.users.length === 4 ? (openBlock(), createBlock(VAvatar, {
                                      key: 1,
                                      size: "40",
                                      image: user
                                    }, null, 8, ["image"])) : createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                item.users.length > 4 ? (openBlock(), createBlock(VAvatar, {
                                  key: 0,
                                  color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-high-emphasis" }, " +" + toDisplayString(item.users.length - 3), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-end" }, [
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(item.role), 1),
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    onClick: ($event) => editPermission(item.details)
                                  }, " Edit Role ", 8, ["onClick"])
                                ]),
                                createVNode(_component_IconBtn, {
                                  color: "secondary",
                                  class: "mt-n2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-file-copy-line" })
                                  ]),
                                  _: 1
                                })
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "h-100",
                    ripple: false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          "no-gutters": "",
                          class: "h-100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "5",
                                class: "d-flex flex-column justify-end align-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img width="69"${ssrRenderAttr("src", unref(poseM))}${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        width: "69",
                                        src: unref(poseM)
                                      }, null, 8, ["src"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "7" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-end justify-end gap-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            size: "small",
                                            onClick: ($event) => isAddRoleDialogVisible.value = true
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Add Role `);
                                              } else {
                                                return [
                                                  createTextVNode(" Add Role ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<span class="text-end"${_scopeId6}>Add new role, if it doesn&#39;t exist.</span>`);
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              size: "small",
                                              onClick: ($event) => isAddRoleDialogVisible.value = true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Add Role ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode("span", { class: "text-end" }, "Add new role, if it doesn't exist.")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, { class: "d-flex flex-column align-end justify-end gap-4" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            size: "small",
                                            onClick: ($event) => isAddRoleDialogVisible.value = true
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Add Role ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode("span", { class: "text-end" }, "Add new role, if it doesn't exist.")
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
                                createVNode(VCol, {
                                  cols: "5",
                                  class: "d-flex flex-column justify-end align-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      width: "69",
                                      src: unref(poseM)
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "7" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "d-flex flex-column align-end justify-end gap-4" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          size: "small",
                                          onClick: ($event) => isAddRoleDialogVisible.value = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Add Role ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode("span", { class: "text-end" }, "Add new role, if it doesn't exist.")
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
                          createVNode(VRow, {
                            "no-gutters": "",
                            class: "h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "5",
                                class: "d-flex flex-column justify-end align-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    width: "69",
                                    src: unref(poseM)
                                  }, null, 8, ["src"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "7" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "d-flex flex-column align-end justify-end gap-4" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        size: "small",
                                        onClick: ($event) => isAddRoleDialogVisible.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Add Role ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode("span", { class: "text-end" }, "Add new role, if it doesn't exist.")
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
                  _push3(ssrRenderComponent(_component_AddEditRoleDialog, {
                    "is-dialog-visible": unref(isAddRoleDialogVisible),
                    "onUpdate:isDialogVisible": ($event) => isRef(isAddRoleDialogVisible) ? isAddRoleDialogVisible.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "h-100",
                      ripple: false
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          "no-gutters": "",
                          class: "h-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "5",
                              class: "d-flex flex-column justify-end align-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  width: "69",
                                  src: unref(poseM)
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "7" }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "d-flex flex-column align-end justify-end gap-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      size: "small",
                                      onClick: ($event) => isAddRoleDialogVisible.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Add Role ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("span", { class: "text-end" }, "Add new role, if it doesn't exist.")
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
                    createVNode(_component_AddEditRoleDialog, {
                      "is-dialog-visible": unref(isAddRoleDialogVisible),
                      "onUpdate:isDialogVisible": ($event) => isRef(isAddRoleDialogVisible) ? isAddRoleDialogVisible.value = $event : null
                    }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (item) => {
                return openBlock(), createBlock(VCol, {
                  key: item.role,
                  cols: "12",
                  sm: "6",
                  lg: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex align-center pb-4" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Total " + toDisplayString(item.users.length) + " users", 1),
                            createVNode(VSpacer),
                            createVNode("div", { class: "v-avatar-group" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.users, (user, index) => {
                                return openBlock(), createBlock(Fragment, { key: user }, [
                                  item.users.length > 4 && item.users.length !== 4 && index < 3 ? (openBlock(), createBlock(VAvatar, {
                                    key: 0,
                                    size: "40",
                                    image: user
                                  }, null, 8, ["image"])) : createCommentVNode("", true),
                                  item.users.length === 4 ? (openBlock(), createBlock(VAvatar, {
                                    key: 1,
                                    size: "40",
                                    image: user
                                  }, null, 8, ["image"])) : createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              item.users.length > 4 ? (openBlock(), createBlock(VAvatar, {
                                key: 0,
                                color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-high-emphasis" }, " +" + toDisplayString(item.users.length - 3), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between align-end" }, [
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(item.role), 1),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  onClick: ($event) => editPermission(item.details)
                                }, " Edit Role ", 8, ["onClick"])
                              ]),
                              createVNode(_component_IconBtn, {
                                color: "secondary",
                                class: "mt-n2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-file-copy-line" })
                                ]),
                                _: 1
                              })
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
              }), 128)),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "h-100",
                    ripple: false
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        "no-gutters": "",
                        class: "h-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "5",
                            class: "d-flex flex-column justify-end align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                width: "69",
                                src: unref(poseM)
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "7" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "d-flex flex-column align-end justify-end gap-4" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    size: "small",
                                    onClick: ($event) => isAddRoleDialogVisible.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add Role ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("span", { class: "text-end" }, "Add new role, if it doesn't exist.")
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
                  createVNode(_component_AddEditRoleDialog, {
                    "is-dialog-visible": unref(isAddRoleDialogVisible),
                    "onUpdate:isDialogVisible": ($event) => isRef(isAddRoleDialogVisible) ? isAddRoleDialogVisible.value = $event : null
                  }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AddEditRoleDialog, {
        "is-dialog-visible": unref(isRoleDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isRoleDialogVisible) ? isRoleDialogVisible.value = $event : null,
        "role-permissions": unref(roleDetail),
        "onUpdate:rolePermissions": ($event) => isRef(roleDetail) ? roleDetail.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/roles/RoleCards.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UserList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedRole = ref();
    const selectedPlan = ref();
    const selectedStatus = ref();
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
    const headers = [
      {
        title: "User",
        key: "user"
      },
      {
        title: "Email",
        key: "email"
      },
      {
        title: "Role",
        key: "role"
      },
      {
        title: "Plan",
        key: "plan"
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
    const {
      data: usersData,
      execute: fetchUsers
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/users", {
      query: {
        q: searchQuery,
        status: selectedStatus,
        plan: selectedPlan,
        role: selectedRole,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const users = computed(() => usersData.value.users);
    const totalUsers = computed(() => usersData.value.totalUsers);
    const roles = [
      {
        title: "Admin",
        value: "admin"
      },
      {
        title: "Author",
        value: "author"
      },
      {
        title: "Editor",
        value: "editor"
      },
      {
        title: "Maintainer",
        value: "maintainer"
      },
      {
        title: "Subscriber",
        value: "subscriber"
      }
    ];
    const resolveUserRoleVariant = (role) => {
      const roleLowerCase = role.toLowerCase();
      if (roleLowerCase === "subscriber")
        return {
          color: "success",
          icon: "ri-user-line"
        };
      if (roleLowerCase === "author")
        return {
          color: "error",
          icon: "ri-computer-line"
        };
      if (roleLowerCase === "maintainer")
        return {
          color: "info",
          icon: "ri-pie-chart-line"
        };
      if (roleLowerCase === "editor")
        return {
          color: "warning",
          icon: "ri-edit-box-line"
        };
      if (roleLowerCase === "admin")
        return {
          color: "primary",
          icon: "ri-vip-crown-line"
        };
      return {
        color: "primary",
        icon: "ri-user-line"
      };
    };
    const resolveUserStatusVariant = (stat) => {
      const statLowerCase = stat.toLowerCase();
      if (statLowerCase === "pending")
        return "warning";
      if (statLowerCase === "active")
        return "success";
      if (statLowerCase === "inactive")
        return "secondary";
      return "primary";
    };
    const deleteUser = async (id) => {
      await $api(`/apps/users/${id}`, { method: "DELETE" });
      const index = selectedRows.value.findIndex((row) => Number(row) === id);
      if (index !== -1)
        selectedRows.value.splice(index, 1);
      fetchUsers();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex justify-space-between flex-wrap gap-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    color: "secondary",
                    "prepend-icon": "ri-share-box-line"
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
                  _push3(`<div class="d-flex flex-wrap gap-4"${_scopeId2}><div style="${ssrRenderStyle({ "inline-size": "15.625rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search User",
                    density: "compact"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "inline-size": "9.25rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedRole),
                    "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                    placeholder: "Select Role",
                    items: roles,
                    density: "compact",
                    clearable: "",
                    "clear-icon": "ri-close-line"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "outlined",
                      color: "secondary",
                      "prepend-icon": "ri-share-box-line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Export ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                      createVNode("div", { style: { "inline-size": "15.625rem" } }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search User",
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { style: { "inline-size": "9.25rem" } }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedRole),
                          "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                          placeholder: "Select Role",
                          items: roles,
                          density: "compact",
                          clearable: "",
                          "clear-icon": "ri-close-line"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
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
              "items-per-page-options": [
                { value: 10, title: "10" },
                { value: 20, title: "20" },
                { value: 50, title: "50" },
                { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }
              ],
              items: unref(users),
              "item-value": "id",
              "items-length": unref(totalUsers),
              headers,
              "show-select": "",
              class: "text-no-wrap rounded-0",
              "onUpdate:options": updateOptions
            }, {
              "item.user": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    variant: !item.avatar ? "tonal" : void 0,
                    color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0,
                    class: "me-3"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (item.avatar) {
                          _push4(ssrRenderComponent(VImg, {
                            src: item.avatar
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                        }
                      } else {
                        return [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-user-view-id", params: { id: item.id } },
                    class: "text-link font-weight-medium text-base"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.fullName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.fullName), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-sm"${_scopeId2}>@${ssrInterpolate(item.username)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        variant: !item.avatar ? "tonal" : void 0,
                        color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                        ]),
                        _: 2
                      }, 1032, ["variant", "color"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_RouterLink, {
                          to: { name: "apps-user-view-id", params: { id: item.id } },
                          class: "text-link font-weight-medium text-base"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.fullName), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("span", { class: "text-sm" }, "@" + toDisplayString(item.username), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.role": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    size: "22",
                    icon: resolveUserRoleVariant(item.role).icon,
                    color: resolveUserRoleVariant(item.role).color
                  }, null, _parent3, _scopeId2));
                  _push3(`<h6 class="text-h6 text-capitalize font-weight-regular"${_scopeId2}>${ssrInterpolate(item.role)}</h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-2" }, [
                      createVNode(VIcon, {
                        size: "22",
                        icon: resolveUserRoleVariant(item.role).icon,
                        color: resolveUserRoleVariant(item.role).color
                      }, null, 8, ["icon", "color"]),
                      createVNode("h6", { class: "text-h6 text-capitalize font-weight-regular" }, toDisplayString(item.role), 1)
                    ])
                  ];
                }
              }),
              "item.plan": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 font-weight-regular text-capitalize"${_scopeId2}>${ssrInterpolate(item.currentPlan)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 font-weight-regular text-capitalize" }, toDisplayString(item.currentPlan), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: resolveUserStatusVariant(item.status),
                    size: "small",
                    class: "text-capitalize"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: resolveUserStatusVariant(item.status),
                      size: "small",
                      class: "text-capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => deleteUser(item.id)
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
                    to: { name: "apps-user-view-id", params: { id: item.id } }
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
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, { link: "" }, {
                                      prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            size: "20",
                                            icon: "ri-edit-box-line"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              size: "20",
                                              icon: "ri-edit-box-line"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Edit`);
                                              } else {
                                                return [
                                                  createTextVNode("Edit")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Edit")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItem, { link: "" }, {
                                      prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            size: "20",
                                            icon: "ri-download-line"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              size: "20",
                                              icon: "ri-download-line"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Download`);
                                              } else {
                                                return [
                                                  createTextVNode("Download")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Download")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, { link: "" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "20",
                                            icon: "ri-edit-box-line"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Edit")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, { link: "" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "20",
                                            icon: "ri-download-line"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Download")
                                            ]),
                                            _: 1
                                          })
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
                                    createVNode(VListItem, { link: "" }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "20",
                                          icon: "ri-edit-box-line"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Edit")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, { link: "" }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "20",
                                          icon: "ri-download-line"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Download")
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-more-2-line" }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, { link: "" }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "20",
                                        icon: "ri-edit-box-line"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, { link: "" }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "20",
                                        icon: "ri-download-line"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Download")
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => deleteUser(item.id)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_IconBtn, {
                      size: "small",
                      to: { name: "apps-user-view-id", params: { id: item.id } }
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
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-edit-box-line"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-download-line"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Download")
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
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalUsers)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                    disabled: unref(page) >= Math.ceil(unref(totalUsers) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalUsers) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalUsers) / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalUsers))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalUsers) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalUsers) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalUsers) / unref(itemsPerPage)) : page.value++
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
              createVNode(VCardText, { class: "d-flex justify-space-between flex-wrap gap-5" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "outlined",
                    color: "secondary",
                    "prepend-icon": "ri-share-box-line"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Export ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                    createVNode("div", { style: { "inline-size": "15.625rem" } }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search User",
                        density: "compact"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { style: { "inline-size": "9.25rem" } }, [
                      createVNode(VSelect, {
                        modelValue: unref(selectedRole),
                        "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                        placeholder: "Select Role",
                        items: roles,
                        density: "compact",
                        clearable: "",
                        "clear-icon": "ri-close-line"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                "items-per-page-options": [
                  { value: 10, title: "10" },
                  { value: 20, title: "20" },
                  { value: 50, title: "50" },
                  { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }
                ],
                items: unref(users),
                "item-value": "id",
                "items-length": unref(totalUsers),
                headers,
                "show-select": "",
                class: "text-no-wrap rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "item.user": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      variant: !item.avatar ? "tonal" : void 0,
                      color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0,
                      class: "me-3"
                    }, {
                      default: withCtx(() => [
                        item.avatar ? (openBlock(), createBlock(VImg, {
                          key: 0,
                          src: item.avatar
                        }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                      ]),
                      _: 2
                    }, 1032, ["variant", "color"]),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_RouterLink, {
                        to: { name: "apps-user-view-id", params: { id: item.id } },
                        class: "text-link font-weight-medium text-base"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.fullName), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("span", { class: "text-sm" }, "@" + toDisplayString(item.username), 1)
                    ])
                  ])
                ]),
                "item.role": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-2" }, [
                    createVNode(VIcon, {
                      size: "22",
                      icon: resolveUserRoleVariant(item.role).icon,
                      color: resolveUserRoleVariant(item.role).color
                    }, null, 8, ["icon", "color"]),
                    createVNode("h6", { class: "text-h6 text-capitalize font-weight-regular" }, toDisplayString(item.role), 1)
                  ])
                ]),
                "item.plan": withCtx(({ item }) => [
                  createVNode("h6", { class: "text-h6 font-weight-regular text-capitalize" }, toDisplayString(item.currentPlan), 1)
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: resolveUserStatusVariant(item.status),
                    size: "small",
                    class: "text-capitalize"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => deleteUser(item.id)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    to: { name: "apps-user-view-id", params: { id: item.id } }
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
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-edit-box-line"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-download-line"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Download")
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalUsers))), 1),
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
                        disabled: unref(page) >= Math.ceil(unref(totalUsers) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalUsers) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalUsers) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["model-value", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "items-per-page-options", "items", "items-length"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/roles/UserList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 mb-1"${_scopeId2}> Roles List </h4><p class="text-body-1 mb-0"${_scopeId2}> A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 mb-1" }, " Roles List "),
                    createVNode("p", { class: "text-body-1 mb-0" }, " A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 mt-6 mb-1"${_scopeId2}> Total users with their roles </h4><p class="text-body-1 mb-6"${_scopeId2}> Find all of your company&#39;s administrator accounts and their associate roles. </p>`);
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 mt-6 mb-1" }, " Total users with their roles "),
                    createVNode("p", { class: "text-body-1 mb-6" }, " Find all of your company's administrator accounts and their associate roles. "),
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4 mb-1" }, " Roles List "),
                  createVNode("p", { class: "text-body-1 mb-0" }, " A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ")
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4 mt-6 mb-1" }, " Total users with their roles "),
                  createVNode("p", { class: "text-body-1 mb-6" }, " Find all of your company's administrator accounts and their associate roles. "),
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/roles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
