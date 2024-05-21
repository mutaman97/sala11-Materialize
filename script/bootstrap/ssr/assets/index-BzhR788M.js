import { p as prefixWithPlus, a as avatarText } from "./formatters-DpL1jrjT.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, withModifiers, useSSRContext, nextTick, withAsyncContext, computed, resolveComponent, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { r as requiredValidator, e as emailValidator } from "./validators-CW3JK3pA.js";
import { _ as _sfc_main$2 } from "./AppDrawerHeaderSection-isEKlId-.js";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VBtn, _ as _export_sfc, a as VIcon } from "../ssr.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import "./helpers-DX2i3Kdq.js";
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
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
import "@antfu/utils";
import "ufo";
import "ofetch";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./VSlideGroup-Bvz86g7R.js";
const _sfc_main$1 = {
  __name: "AddNewUserDrawer",
  __ssrInlineRender: true,
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDrawerOpen",
    "userData"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isFormValid = ref(false);
    const refForm = ref();
    const fullName = ref("");
    const userName = ref("");
    const email = ref("");
    const company = ref("");
    const country = ref();
    const contact = ref("");
    const role = ref();
    const plan = ref();
    const status = ref();
    const closeNavigationDrawer = () => {
      emit("update:isDrawerOpen", false);
      nextTick(() => {
        var _a, _b;
        (_a = refForm.value) == null ? void 0 : _a.reset();
        (_b = refForm.value) == null ? void 0 : _b.resetValidation();
      });
    };
    const onSubmit = () => {
      var _a;
      (_a = refForm.value) == null ? void 0 : _a.validate().then(({ valid }) => {
        if (valid) {
          emit("userData", {
            id: 0,
            fullName: fullName.value,
            company: company.value,
            role: role.value,
            username: userName.value,
            country: country.value,
            contact: contact.value,
            email: email.value,
            currentPlan: plan.value,
            status: status.value,
            avatar: ""
          });
          emit("update:isDrawerOpen", false);
          nextTick(() => {
            var _a2, _b;
            (_a2 = refForm.value) == null ? void 0 : _a2.reset();
            (_b = refForm.value) == null ? void 0 : _b.resetValidation();
          });
        }
      });
    };
    const handleDrawerModelValueUpdate = (val) => {
      emit("update:isDrawerOpen", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$2;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        temporary: "",
        width: 400,
        location: "end",
        class: "scrollable-content",
        "model-value": props.isDrawerOpen,
        "onUpdate:modelValue": handleDrawerModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Add User",
              onCancel: closeNavigationDrawer
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, {
                                ref_key: "refForm",
                                ref: refForm,
                                modelValue: unref(isFormValid),
                                "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
                                onSubmit
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(fullName),
                                                  "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Full Name",
                                                  placeholder: "John Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(fullName),
                                                    "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Full Name",
                                                    placeholder: "John Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(userName),
                                                  "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Username",
                                                  placeholder: "Johndoe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(userName),
                                                    "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Username",
                                                    placeholder: "Johndoe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                  label: "Email",
                                                  placeholder: "johndoe@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                    label: "Email",
                                                    placeholder: "johndoe@email.com"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(company),
                                                  "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Company",
                                                  placeholder: "Pixinvent"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(company),
                                                    "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Company",
                                                    placeholder: "Pixinvent"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(country),
                                                  "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                  label: "Select Country",
                                                  placeholder: "Select Country",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: ["United States", "United Kingdom", "France"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(country),
                                                    "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                    label: "Select Country",
                                                    placeholder: "Select Country",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    items: ["United States", "United Kingdom", "France"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(contact),
                                                  "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                                  type: "number",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Contact",
                                                  placeholder: "+1-541-754-3010"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(contact),
                                                    "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                                    type: "number",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Contact",
                                                    placeholder: "+1-541-754-3010"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(role),
                                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                  label: "Select Role",
                                                  placeholder: "Select Role",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(role),
                                                    "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                    label: "Select Role",
                                                    placeholder: "Select Role",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(plan),
                                                  "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                                  label: "Select Plan",
                                                  placeholder: "Select Plan",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: ["Basic", "Company", "Enterprise", "Team"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(plan),
                                                    "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                                    label: "Select Plan",
                                                    placeholder: "Select Plan",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    items: ["Basic", "Company", "Enterprise", "Team"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(status),
                                                  "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                                  label: "Select Status",
                                                  placeholder: "Select Status",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(status),
                                                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                                    label: "Select Status",
                                                    placeholder: "Select Status",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "submit",
                                                  class: "me-4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Submit `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Submit ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "reset",
                                                  variant: "outlined",
                                                  color: "error",
                                                  onClick: closeNavigationDrawer
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Cancel `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Cancel ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    class: "me-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Submit ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    type: "reset",
                                                    variant: "outlined",
                                                    color: "error",
                                                    onClick: closeNavigationDrawer
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Cancel ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(fullName),
                                                  "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Full Name",
                                                  placeholder: "John Doe"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(userName),
                                                  "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Username",
                                                  placeholder: "Johndoe"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                  label: "Email",
                                                  placeholder: "johndoe@email.com"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(company),
                                                  "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Company",
                                                  placeholder: "Pixinvent"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(country),
                                                  "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                  label: "Select Country",
                                                  placeholder: "Select Country",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: ["United States", "United Kingdom", "France"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(contact),
                                                  "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                                  type: "number",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Contact",
                                                  placeholder: "+1-541-754-3010"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(role),
                                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                  label: "Select Role",
                                                  placeholder: "Select Role",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(plan),
                                                  "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                                  label: "Select Plan",
                                                  placeholder: "Select Plan",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: ["Basic", "Company", "Enterprise", "Team"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(status),
                                                  "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                                  label: "Select Status",
                                                  placeholder: "Select Status",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  class: "me-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Submit ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  type: "reset",
                                                  variant: "outlined",
                                                  color: "error",
                                                  onClick: closeNavigationDrawer
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Cancel ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(fullName),
                                                "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Full Name",
                                                placeholder: "John Doe"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(userName),
                                                "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Username",
                                                placeholder: "Johndoe"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                label: "Email",
                                                placeholder: "johndoe@email.com"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(company),
                                                "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Company",
                                                placeholder: "Pixinvent"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(country),
                                                "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                label: "Select Country",
                                                placeholder: "Select Country",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                items: ["United States", "United Kingdom", "France"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(contact),
                                                "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                                type: "number",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Contact",
                                                placeholder: "+1-541-754-3010"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(role),
                                                "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                label: "Select Role",
                                                placeholder: "Select Role",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(plan),
                                                "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                                label: "Select Plan",
                                                placeholder: "Select Plan",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                items: ["Basic", "Company", "Enterprise", "Team"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(status),
                                                "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                                label: "Select Status",
                                                placeholder: "Select Status",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                class: "me-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Submit ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                type: "reset",
                                                variant: "outlined",
                                                color: "error",
                                                onClick: closeNavigationDrawer
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancel ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  ref_key: "refForm",
                                  ref: refForm,
                                  modelValue: unref(isFormValid),
                                  "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
                                  onSubmit: withModifiers(onSubmit, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(fullName),
                                              "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Full Name",
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(userName),
                                              "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Username",
                                              placeholder: "Johndoe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                              label: "Email",
                                              placeholder: "johndoe@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(company),
                                              "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Company",
                                              placeholder: "Pixinvent"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(country),
                                              "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                              label: "Select Country",
                                              placeholder: "Select Country",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              items: ["United States", "United Kingdom", "France"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(contact),
                                              "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                              type: "number",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Contact",
                                              placeholder: "+1-541-754-3010"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(role),
                                              "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                              label: "Select Role",
                                              placeholder: "Select Role",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(plan),
                                              "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                              label: "Select Plan",
                                              placeholder: "Select Plan",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              items: ["Basic", "Company", "Enterprise", "Team"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(status),
                                              "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                              label: "Select Status",
                                              placeholder: "Select Status",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "me-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Submit ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              type: "reset",
                                              variant: "outlined",
                                              color: "error",
                                              onClick: closeNavigationDrawer
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel ")
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                ref_key: "refForm",
                                ref: refForm,
                                modelValue: unref(isFormValid),
                                "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
                                onSubmit: withModifiers(onSubmit, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(fullName),
                                            "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Full Name",
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(userName),
                                            "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Username",
                                            placeholder: "Johndoe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                            label: "Email",
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(company),
                                            "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Company",
                                            placeholder: "Pixinvent"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(country),
                                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                            label: "Select Country",
                                            placeholder: "Select Country",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            items: ["United States", "United Kingdom", "France"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(contact),
                                            "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                            type: "number",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Contact",
                                            placeholder: "+1-541-754-3010"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(role),
                                            "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                            label: "Select Role",
                                            placeholder: "Select Role",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(plan),
                                            "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                            label: "Select Plan",
                                            placeholder: "Select Plan",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            items: ["Basic", "Company", "Enterprise", "Team"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(status),
                                            "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                            label: "Select Status",
                                            placeholder: "Select Status",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "error",
                                            onClick: closeNavigationDrawer
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VCard, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              ref_key: "refForm",
                              ref: refForm,
                              modelValue: unref(isFormValid),
                              "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
                              onSubmit: withModifiers(onSubmit, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(fullName),
                                          "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Full Name",
                                          placeholder: "John Doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(userName),
                                          "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Username",
                                          placeholder: "Johndoe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(email),
                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                          label: "Email",
                                          placeholder: "johndoe@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(company),
                                          "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Company",
                                          placeholder: "Pixinvent"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(country),
                                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                          label: "Select Country",
                                          placeholder: "Select Country",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          items: ["United States", "United Kingdom", "France"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(contact),
                                          "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                          type: "number",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Contact",
                                          placeholder: "+1-541-754-3010"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(role),
                                          "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                          label: "Select Role",
                                          placeholder: "Select Role",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(plan),
                                          "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                          label: "Select Plan",
                                          placeholder: "Select Plan",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          items: ["Basic", "Company", "Enterprise", "Team"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(status),
                                          "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                          label: "Select Status",
                                          placeholder: "Select Status",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "me-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Submit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          type: "reset",
                                          variant: "outlined",
                                          color: "error",
                                          onClick: closeNavigationDrawer
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
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
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_AppDrawerHeaderSection, {
                title: "Add User",
                onCancel: closeNavigationDrawer
              }),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                default: withCtx(() => [
                  createVNode(VCard, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref_key: "refForm",
                            ref: refForm,
                            modelValue: unref(isFormValid),
                            "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
                            onSubmit: withModifiers(onSubmit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(fullName),
                                        "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Full Name",
                                        placeholder: "John Doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(userName),
                                        "onUpdate:modelValue": ($event) => isRef(userName) ? userName.value = $event : null,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Username",
                                        placeholder: "Johndoe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                        label: "Email",
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(company),
                                        "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Company",
                                        placeholder: "Pixinvent"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(country),
                                        "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                        label: "Select Country",
                                        placeholder: "Select Country",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        items: ["United States", "United Kingdom", "France"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(contact),
                                        "onUpdate:modelValue": ($event) => isRef(contact) ? contact.value = $event : null,
                                        type: "number",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Contact",
                                        placeholder: "+1-541-754-3010"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(role),
                                        "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                        label: "Select Role",
                                        placeholder: "Select Role",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        items: ["Admin", "Author", "Editor", "Maintainer", "Subscriber"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(plan),
                                        "onUpdate:modelValue": ($event) => isRef(plan) ? plan.value = $event : null,
                                        label: "Select Plan",
                                        placeholder: "Select Plan",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        items: ["Basic", "Company", "Enterprise", "Team"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(status),
                                        "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                        label: "Select Status",
                                        placeholder: "Select Status",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        items: [{ title: "Active", value: "Active" }, { title: "Inactive", value: "Inactive" }, { title: "Pending", value: "Pending" }]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "me-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Submit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        variant: "outlined",
                                        color: "error",
                                        onClick: closeNavigationDrawer
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel ")
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/list/AddNewUserDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedRole = ref();
    const selectedPlan = ref();
    const selectedStatus = ref();
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const selectedRows = ref([]);
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
    const plans = [
      {
        title: "Basic",
        value: "basic"
      },
      {
        title: "Company",
        value: "company"
      },
      {
        title: "Enterprise",
        value: "enterprise"
      },
      {
        title: "Team",
        value: "team"
      }
    ];
    const status = [
      {
        title: "Pending",
        value: "Pending"
      },
      {
        title: "Active",
        value: "Active"
      },
      {
        title: "Inactive",
        value: "Inactive"
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
        color: "success",
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
    const isAddNewUserDrawerVisible = ref(false);
    const addNewUser = async (userData) => {
      await $api("/apps/users", {
        method: "POST",
        body: userData
      });
      fetchUsers();
    };
    const deleteUser = async (id) => {
      await $api(`/apps/users/${id}`, { method: "DELETE" });
      const index2 = selectedRows.value.findIndex((row) => row === id);
      if (index2 !== -1)
        selectedRows.value.splice(index2, 1);
      fetchUsers();
    };
    const widgetData = ref([
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
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-547773ef><div class="d-flex mb-6" data-v-547773ef>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(widgetData), (data, id) => {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "3",
                sm: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex justify-space-between" data-v-547773ef${_scopeId4}><div class="d-flex flex-column gap-y-1" data-v-547773ef${_scopeId4}><span class="text-base text-high-emphasis" data-v-547773ef${_scopeId4}>${ssrInterpolate(data.title)}</span><h4 class="text-h4 d-flex align-center gap-2" data-v-547773ef${_scopeId4}>${ssrInterpolate(data.value)} <span class="${ssrRenderClass([data.change > 0 ? "text-success" : "text-error", "text-base font-weight-regular"])}" data-v-547773ef${_scopeId4}>(${ssrInterpolate(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change))}%)</span></h4><p class="text-sm mb-0" data-v-547773ef${_scopeId4}>${ssrInterpolate(data.desc)}</p></div>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: data.iconColor,
                                  variant: "tonal",
                                  rounded: "",
                                  size: "42"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: data.icon,
                                        size: "26"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "26"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                      createVNode("span", { class: "text-base text-high-emphasis" }, toDisplayString(data.title), 1),
                                      createVNode("h4", { class: "text-h4 d-flex align-center gap-2" }, [
                                        createTextVNode(toDisplayString(data.value) + " ", 1),
                                        createVNode("span", {
                                          class: ["text-base font-weight-regular", data.change > 0 ? "text-success" : "text-error"]
                                        }, "(" + toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "%)", 3)
                                      ]),
                                      createVNode("p", { class: "text-sm mb-0" }, toDisplayString(data.desc), 1)
                                    ]),
                                    createVNode(VAvatar, {
                                      color: data.iconColor,
                                      variant: "tonal",
                                      rounded: "",
                                      size: "42"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: data.icon,
                                          size: "26"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
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
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                    createVNode("span", { class: "text-base text-high-emphasis" }, toDisplayString(data.title), 1),
                                    createVNode("h4", { class: "text-h4 d-flex align-center gap-2" }, [
                                      createTextVNode(toDisplayString(data.value) + " ", 1),
                                      createVNode("span", {
                                        class: ["text-base font-weight-regular", data.change > 0 ? "text-success" : "text-error"]
                                      }, "(" + toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "%)", 3)
                                    ]),
                                    createVNode("p", { class: "text-sm mb-0" }, toDisplayString(data.desc), 1)
                                  ]),
                                  createVNode(VAvatar, {
                                    color: data.iconColor,
                                    variant: "tonal",
                                    rounded: "",
                                    size: "42"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: data.icon,
                                        size: "26"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
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
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                  createVNode("span", { class: "text-base text-high-emphasis" }, toDisplayString(data.title), 1),
                                  createVNode("h4", { class: "text-h4 d-flex align-center gap-2" }, [
                                    createTextVNode(toDisplayString(data.value) + " ", 1),
                                    createVNode("span", {
                                      class: ["text-base font-weight-regular", data.change > 0 ? "text-success" : "text-error"]
                                    }, "(" + toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "%)", 3)
                                  ]),
                                  createVNode("p", { class: "text-sm mb-0" }, toDisplayString(data.desc), 1)
                                ]),
                                createVNode(VAvatar, {
                                  color: data.iconColor,
                                  variant: "tonal",
                                  rounded: "",
                                  size: "42"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: data.icon,
                                      size: "26"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
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
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(widgetData), (data, id) => {
                return openBlock(), createBlock(VCol, {
                  key: id,
                  cols: "12",
                  md: "3",
                  sm: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between" }, [
                              createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                createVNode("span", { class: "text-base text-high-emphasis" }, toDisplayString(data.title), 1),
                                createVNode("h4", { class: "text-h4 d-flex align-center gap-2" }, [
                                  createTextVNode(toDisplayString(data.value) + " ", 1),
                                  createVNode("span", {
                                    class: ["text-base font-weight-regular", data.change > 0 ? "text-success" : "text-error"]
                                  }, "(" + toDisplayString(("prefixWithPlus" in _ctx ? _ctx.prefixWithPlus : unref(prefixWithPlus))(data.change)) + "%)", 3)
                                ]),
                                createVNode("p", { class: "text-sm mb-0" }, toDisplayString(data.desc), 1)
                              ]),
                              createVNode(VAvatar, {
                                color: data.iconColor,
                                variant: "tonal",
                                rounded: "",
                                size: "42"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: data.icon,
                                    size: "26"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"])
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
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Filters`);
                      } else {
                        return [
                          createTextVNode("Filters")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Filters")
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
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedRole),
                                "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                                label: "Select Role",
                                placeholder: "Select Role",
                                items: roles,
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedRole),
                                  "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                                  label: "Select Role",
                                  placeholder: "Select Role",
                                  items: roles,
                                  clearable: "",
                                  "clear-icon": "ri-close-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedPlan),
                                "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                                label: "Select Plan",
                                placeholder: "Select Plan",
                                items: plans,
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedPlan),
                                  "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                                  label: "Select Plan",
                                  placeholder: "Select Plan",
                                  items: plans,
                                  clearable: "",
                                  "clear-icon": "ri-close-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                label: "Select Status",
                                placeholder: "Select Status",
                                items: status,
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedStatus),
                                  "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                  label: "Select Status",
                                  placeholder: "Select Status",
                                  items: status,
                                  clearable: "",
                                  "clear-icon": "ri-close-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedRole),
                                "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                                label: "Select Role",
                                placeholder: "Select Role",
                                items: roles,
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedPlan),
                                "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                                label: "Select Plan",
                                placeholder: "Select Plan",
                                items: plans,
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                                label: "Select Status",
                                placeholder: "Select Status",
                                items: status,
                                clearable: "",
                                "clear-icon": "ri-close-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedRole),
                              "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                              label: "Select Role",
                              placeholder: "Select Role",
                              items: roles,
                              clearable: "",
                              "clear-icon": "ri-close-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedPlan),
                              "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                              label: "Select Plan",
                              placeholder: "Select Plan",
                              items: plans,
                              clearable: "",
                              "clear-icon": "ri-close-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedStatus),
                              "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                              label: "Select Status",
                              placeholder: "Select Status",
                              items: status,
                              clearable: "",
                              "clear-icon": "ri-close-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap gap-4 align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    color: "secondary",
                    "prepend-icon": "ri-upload-2-line"
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
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center gap-4 flex-wrap" data-v-547773ef${_scopeId2}><div class="app-user-search-filter" data-v-547773ef${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search User",
                    density: "compact"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VBtn, {
                    onClick: ($event) => isAddNewUserDrawerVisible.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add New User `);
                      } else {
                        return [
                          createTextVNode(" Add New User ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "outlined",
                      color: "secondary",
                      "prepend-icon": "ri-upload-2-line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Export ")
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode("div", { class: "d-flex align-center gap-4 flex-wrap" }, [
                      createVNode("div", { class: "app-user-search-filter" }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search User",
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VBtn, {
                        onClick: ($event) => isAddNewUserDrawerVisible.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add New User ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
              page: unref(page),
              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
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
                  _push3(`<div class="d-flex align-center" data-v-547773ef${_scopeId2}>`);
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
                          _push4(`<span data-v-547773ef${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
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
                  _push3(`<div class="d-flex flex-column" data-v-547773ef${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-user-view-id", params: { id: item.id } },
                    class: "text-link text-base font-weight-medium"
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
                  _push3(`<span class="text-sm text-medium-emphasis" data-v-547773ef${_scopeId2}>@${ssrInterpolate(item.username)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
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
                          class: "text-link text-base font-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.fullName), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("span", { class: "text-sm text-medium-emphasis" }, "@" + toDisplayString(item.username), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.role": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-2" data-v-547773ef${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: resolveUserRoleVariant(item.role).icon,
                    color: resolveUserRoleVariant(item.role).color,
                    size: "22"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-capitalize text-high-emphasis" data-v-547773ef${_scopeId2}>${ssrInterpolate(item.role)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-2" }, [
                      createVNode(VIcon, {
                        icon: resolveUserRoleVariant(item.role).icon,
                        color: resolveUserRoleVariant(item.role).color,
                        size: "22"
                      }, null, 8, ["icon", "color"]),
                      createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.role), 1)
                    ])
                  ];
                }
              }),
              "item.plan": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-capitalize text-high-emphasis" data-v-547773ef${_scopeId2}>${ssrInterpolate(item.currentPlan)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.currentPlan), 1)
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
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    size: "small",
                    color: "medium-emphasis"
                  }, {
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
                                          _push7(ssrRenderComponent(VIcon, { icon: "ri-download-line" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "ri-download-line" })
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
                                    _push6(ssrRenderComponent(VListItem, { link: "" }, {
                                      prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { icon: "ri-edit-box-line" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "ri-edit-box-line" })
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
                                  } else {
                                    return [
                                      createVNode(VListItem, { link: "" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-download-line" })
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
                                      }),
                                      createVNode(VListItem, { link: "" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-edit-box-line" })
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
                                        createVNode(VIcon, { icon: "ri-download-line" })
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
                                    }),
                                    createVNode(VListItem, { link: "" }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-edit-box-line" })
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
                                      createVNode(VIcon, { icon: "ri-download-line" })
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
                                  }),
                                  createVNode(VListItem, { link: "" }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-edit-box-line" })
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
                    createVNode(_component_IconBtn, {
                      size: "small",
                      color: "medium-emphasis"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-more-2-line" }),
                        createVNode(VMenu, { activator: "parent" }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-download-line" })
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
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-edit-box-line" })
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
                  _push3(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1" data-v-547773ef${_scopeId2}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base" data-v-547773ef${_scopeId2}> Rows Per Page: `);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(itemsPerPage),
                    "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                    class: "per-page-select",
                    variant: "plain",
                    items: [10, 20, 25, 50, 100]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0" data-v-547773ef${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalUsers)))}</p><div class="d-flex gap-x-2 align-center me-2" data-v-547773ef${_scopeId2}>`);
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
              createVNode(VCardItem, { class: "pb-4" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Filters")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedRole),
                            "onUpdate:modelValue": ($event) => isRef(selectedRole) ? selectedRole.value = $event : null,
                            label: "Select Role",
                            placeholder: "Select Role",
                            items: roles,
                            clearable: "",
                            "clear-icon": "ri-close-line"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedPlan),
                            "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                            label: "Select Plan",
                            placeholder: "Select Plan",
                            items: plans,
                            clearable: "",
                            "clear-icon": "ri-close-line"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedStatus),
                            "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                            label: "Select Status",
                            placeholder: "Select Status",
                            items: status,
                            clearable: "",
                            "clear-icon": "ri-close-line"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VCardText, { class: "d-flex flex-wrap gap-4 align-center" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "outlined",
                    color: "secondary",
                    "prepend-icon": "ri-upload-2-line"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Export ")
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode("div", { class: "d-flex align-center gap-4 flex-wrap" }, [
                    createVNode("div", { class: "app-user-search-filter" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search User",
                        density: "compact"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(VBtn, {
                      onClick: ($event) => isAddNewUserDrawerVisible.value = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add New User ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
                items: unref(users),
                "item-value": "id",
                "items-length": unref(totalUsers),
                headers,
                "show-select": "",
                class: "text-no-wrap rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "item.user": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center" }, [
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
                        class: "text-link text-base font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.fullName), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("span", { class: "text-sm text-medium-emphasis" }, "@" + toDisplayString(item.username), 1)
                    ])
                  ])
                ]),
                "item.role": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-2" }, [
                    createVNode(VIcon, {
                      icon: resolveUserRoleVariant(item.role).icon,
                      color: resolveUserRoleVariant(item.role).color,
                      size: "22"
                    }, null, 8, ["icon", "color"]),
                    createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.role), 1)
                  ])
                ]),
                "item.plan": withCtx(({ item }) => [
                  createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.currentPlan), 1)
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
                  createVNode(_component_IconBtn, {
                    size: "small",
                    color: "medium-emphasis"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-more-2-line" }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-download-line" })
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
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-edit-box-line" })
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
              }, 8, ["model-value", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        isDrawerOpen: unref(isAddNewUserDrawerVisible),
        "onUpdate:isDrawerOpen": ($event) => isRef(isAddNewUserDrawerVisible) ? isAddNewUserDrawerVisible.value = $event : null,
        onUserData: addNewUser
      }, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/user/list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-547773ef"]]);
export {
  index as default
};
