import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { ref, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext, resolveComponent, toDisplayString } from "vue";
import { _ as _sfc_main$3 } from "./MoreBtn-CtW8Gck8.js";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { r as requiredValidator } from "./validators-CW3JK3pA.js";
import { _ as _sfc_main$2 } from "./AppDrawerHeaderSection-isEKlId-.js";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Underline } from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VFileInput } from "./VFileInput-BDqHjtpV.js";
import { V as VBtn, a as VIcon, n as product1, o as product9, q as product10, r as product19, s as product12, v as product14, w as product17, x as product11, y as product2 } from "../ssr.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VList-Bay5Fixr.js";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./helpers-DX2i3Kdq.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./form-DJQTvsmB.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
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
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VPagination-BH_qhohv.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$1 = {
  __name: "EcommerceAddCategoryDrawer",
  __ssrInlineRender: true,
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:isDrawerOpen"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleDrawerModelValueUpdate = (val) => {
      emit("update:isDrawerOpen", val);
    };
    const editor = useEditor({
      content: "",
      extensions: [
        StarterKit,
        Image,
        Placeholder.configure({ placeholder: "Write a Comment..." }),
        Underline,
        Link.configure({ openOnClick: false })
      ]
    });
    const setLink = () => {
      var _a, _b, _c;
      const previousUrl = (_a = editor.value) == null ? void 0 : _a.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);
      if (url === null)
        return;
      if (url === "") {
        (_b = editor.value) == null ? void 0 : _b.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      (_c = editor.value) == null ? void 0 : _c.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };
    const addImage = () => {
      var _a;
      const url = window.prompt("URL");
      if (url)
        (_a = editor.value) == null ? void 0 : _a.chain().focus().setImage({ src: url }).run();
    };
    const refVForm = ref();
    const categoryTitle = ref();
    const categorySlug = ref();
    const categoryImg = ref();
    const parentCategory = ref();
    const parentStatus = ref();
    const resetForm = () => {
      var _a, _b;
      emit("update:isDrawerOpen", false);
      (_a = refVForm.value) == null ? void 0 : _a.reset();
      (_b = editor.value) == null ? void 0 : _b.commands.clearContent();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$2;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        "model-value": props.isDrawerOpen,
        temporary: "",
        location: "end",
        width: "370",
        class: "category-navigation-drawer scrollable-content",
        border: "none",
        "onUpdate:modelValue": handleDrawerModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Add Category",
              onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
                              _push5(ssrRenderComponent(unref(VForm), {
                                ref_key: "refVForm",
                                ref: refVForm,
                                onSubmit: () => {
                                }
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
                                                  modelValue: unref(categoryTitle),
                                                  "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                                  label: "Title",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Fashion"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(categoryTitle),
                                                    "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                                    label: "Title",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Fashion"
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
                                                  modelValue: unref(categorySlug),
                                                  "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                                  label: "Slug",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Trends fashion"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(categorySlug),
                                                    "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                                    label: "Slug",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Trends fashion"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VFileInput, {
                                                  modelValue: unref(categoryImg),
                                                  "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                                  "prepend-icon": "",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  density: "compact",
                                                  label: "No file chosen",
                                                  clearable: ""
                                                }, {
                                                  append: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, { variant: "outlined" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Choose `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Choose ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, { variant: "outlined" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Choose ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VFileInput, {
                                                    modelValue: unref(categoryImg),
                                                    "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                                    "prepend-icon": "",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    density: "compact",
                                                    label: "No file chosen",
                                                    clearable: ""
                                                  }, {
                                                    append: withCtx(() => [
                                                      createVNode(VBtn, { variant: "outlined" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Choose ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(parentCategory),
                                                  "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Parent Category",
                                                  placeholder: "Select Parent Category",
                                                  items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(parentCategory),
                                                    "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Parent Category",
                                                    placeholder: "Select Parent Category",
                                                    items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent8, _scopeId7));
                                                if (unref(editor)) {
                                                  _push8(`<div class="d-flex justify-end flex-wrap gap-x-2"${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-bold",
                                                    color: unref(editor).isActive("bold") ? "primary" : "",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    color: unref(editor).isActive("italic") ? "primary" : "",
                                                    icon: "ri-italic",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    color: unref(editor).isActive("underline") ? "primary" : "",
                                                    icon: "ri-underline",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).commands.toggleUnderline()
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    color: unref(editor).isActive("bulletList") ? "primary" : "",
                                                    icon: "ri-list-check",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    color: unref(editor).isActive("orderedList") ? "primary" : "",
                                                    icon: "ri-list-ordered-2",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-links-line",
                                                    size: "20",
                                                    onClick: setLink
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-image-line",
                                                    size: "20",
                                                    onClick: addImage
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                                    createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                                    unref(editor) ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "d-flex justify-end flex-wrap gap-x-2"
                                                    }, [
                                                      createVNode(VIcon, {
                                                        icon: "ri-bold",
                                                        color: unref(editor).isActive("bold") ? "primary" : "",
                                                        size: "20",
                                                        onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                                      }, null, 8, ["color", "onClick"]),
                                                      createVNode(VIcon, {
                                                        color: unref(editor).isActive("italic") ? "primary" : "",
                                                        icon: "ri-italic",
                                                        size: "20",
                                                        onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                                      }, null, 8, ["color", "onClick"]),
                                                      createVNode(VIcon, {
                                                        color: unref(editor).isActive("underline") ? "primary" : "",
                                                        icon: "ri-underline",
                                                        size: "20",
                                                        onClick: ($event) => unref(editor).commands.toggleUnderline()
                                                      }, null, 8, ["color", "onClick"]),
                                                      createVNode(VIcon, {
                                                        color: unref(editor).isActive("bulletList") ? "primary" : "",
                                                        icon: "ri-list-check",
                                                        size: "20",
                                                        onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                                      }, null, 8, ["color", "onClick"]),
                                                      createVNode(VIcon, {
                                                        color: unref(editor).isActive("orderedList") ? "primary" : "",
                                                        icon: "ri-list-ordered-2",
                                                        size: "20",
                                                        onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                                      }, null, 8, ["color", "onClick"]),
                                                      createVNode(VIcon, {
                                                        icon: "ri-links-line",
                                                        size: "20",
                                                        onClick: setLink
                                                      }),
                                                      createVNode(VIcon, {
                                                        icon: "ri-image-line",
                                                        size: "20",
                                                        onClick: addImage
                                                      })
                                                    ])) : createCommentVNode("", true)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(parentStatus),
                                                  "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Select Category Status",
                                                  label: "Parent Status",
                                                  items: ["Published", "Inactive", "Scheduled"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(parentStatus),
                                                    "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Select Category Status",
                                                    label: "Parent Status",
                                                    items: ["Published", "Inactive", "Scheduled"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex justify-start"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "submit",
                                                  color: "primary",
                                                  class: "me-4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Add `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Add ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "error",
                                                  variant: "outlined",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Discard `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Discard ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex justify-start" }, [
                                                    createVNode(VBtn, {
                                                      type: "submit",
                                                      color: "primary",
                                                      class: "me-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Add ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VBtn, {
                                                      color: "error",
                                                      variant: "outlined",
                                                      onClick: resetForm
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Discard ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
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
                                                  modelValue: unref(categoryTitle),
                                                  "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                                  label: "Title",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Fashion"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(categorySlug),
                                                  "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                                  label: "Slug",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Trends fashion"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VFileInput, {
                                                  modelValue: unref(categoryImg),
                                                  "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                                  "prepend-icon": "",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  density: "compact",
                                                  label: "No file chosen",
                                                  clearable: ""
                                                }, {
                                                  append: withCtx(() => [
                                                    createVNode(VBtn, { variant: "outlined" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Choose ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(parentCategory),
                                                  "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Parent Category",
                                                  placeholder: "Select Parent Category",
                                                  items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                                  createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                                  unref(editor) ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "d-flex justify-end flex-wrap gap-x-2"
                                                  }, [
                                                    createVNode(VIcon, {
                                                      icon: "ri-bold",
                                                      color: unref(editor).isActive("bold") ? "primary" : "",
                                                      size: "20",
                                                      onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                                    }, null, 8, ["color", "onClick"]),
                                                    createVNode(VIcon, {
                                                      color: unref(editor).isActive("italic") ? "primary" : "",
                                                      icon: "ri-italic",
                                                      size: "20",
                                                      onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                                    }, null, 8, ["color", "onClick"]),
                                                    createVNode(VIcon, {
                                                      color: unref(editor).isActive("underline") ? "primary" : "",
                                                      icon: "ri-underline",
                                                      size: "20",
                                                      onClick: ($event) => unref(editor).commands.toggleUnderline()
                                                    }, null, 8, ["color", "onClick"]),
                                                    createVNode(VIcon, {
                                                      color: unref(editor).isActive("bulletList") ? "primary" : "",
                                                      icon: "ri-list-check",
                                                      size: "20",
                                                      onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                                    }, null, 8, ["color", "onClick"]),
                                                    createVNode(VIcon, {
                                                      color: unref(editor).isActive("orderedList") ? "primary" : "",
                                                      icon: "ri-list-ordered-2",
                                                      size: "20",
                                                      onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                                    }, null, 8, ["color", "onClick"]),
                                                    createVNode(VIcon, {
                                                      icon: "ri-links-line",
                                                      size: "20",
                                                      onClick: setLink
                                                    }),
                                                    createVNode(VIcon, {
                                                      icon: "ri-image-line",
                                                      size: "20",
                                                      onClick: addImage
                                                    })
                                                  ])) : createCommentVNode("", true)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(parentStatus),
                                                  "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Select Category Status",
                                                  label: "Parent Status",
                                                  items: ["Published", "Inactive", "Scheduled"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex justify-start" }, [
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    color: "primary",
                                                    class: "me-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Add ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    color: "error",
                                                    variant: "outlined",
                                                    onClick: resetForm
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Discard ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(categoryTitle),
                                                "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                                label: "Title",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Fashion"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(categorySlug),
                                                "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                                label: "Slug",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Trends fashion"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VFileInput, {
                                                modelValue: unref(categoryImg),
                                                "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                                "prepend-icon": "",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                density: "compact",
                                                label: "No file chosen",
                                                clearable: ""
                                              }, {
                                                append: withCtx(() => [
                                                  createVNode(VBtn, { variant: "outlined" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Choose ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(parentCategory),
                                                "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Parent Category",
                                                placeholder: "Select Parent Category",
                                                items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                                createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                                unref(editor) ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "d-flex justify-end flex-wrap gap-x-2"
                                                }, [
                                                  createVNode(VIcon, {
                                                    icon: "ri-bold",
                                                    color: unref(editor).isActive("bold") ? "primary" : "",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                                  }, null, 8, ["color", "onClick"]),
                                                  createVNode(VIcon, {
                                                    color: unref(editor).isActive("italic") ? "primary" : "",
                                                    icon: "ri-italic",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                                  }, null, 8, ["color", "onClick"]),
                                                  createVNode(VIcon, {
                                                    color: unref(editor).isActive("underline") ? "primary" : "",
                                                    icon: "ri-underline",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).commands.toggleUnderline()
                                                  }, null, 8, ["color", "onClick"]),
                                                  createVNode(VIcon, {
                                                    color: unref(editor).isActive("bulletList") ? "primary" : "",
                                                    icon: "ri-list-check",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                                  }, null, 8, ["color", "onClick"]),
                                                  createVNode(VIcon, {
                                                    color: unref(editor).isActive("orderedList") ? "primary" : "",
                                                    icon: "ri-list-ordered-2",
                                                    size: "20",
                                                    onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                                  }, null, 8, ["color", "onClick"]),
                                                  createVNode(VIcon, {
                                                    icon: "ri-links-line",
                                                    size: "20",
                                                    onClick: setLink
                                                  }),
                                                  createVNode(VIcon, {
                                                    icon: "ri-image-line",
                                                    size: "20",
                                                    onClick: addImage
                                                  })
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(parentStatus),
                                                "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Select Category Status",
                                                label: "Parent Status",
                                                items: ["Published", "Inactive", "Scheduled"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex justify-start" }, [
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  color: "primary",
                                                  class: "me-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Add ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  color: "error",
                                                  variant: "outlined",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Discard ")
                                                  ]),
                                                  _: 1
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VForm), {
                                  ref_key: "refVForm",
                                  ref: refVForm,
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(categoryTitle),
                                              "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                              label: "Title",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Fashion"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(categorySlug),
                                              "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                              label: "Slug",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Trends fashion"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VFileInput, {
                                              modelValue: unref(categoryImg),
                                              "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                              "prepend-icon": "",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              density: "compact",
                                              label: "No file chosen",
                                              clearable: ""
                                            }, {
                                              append: withCtx(() => [
                                                createVNode(VBtn, { variant: "outlined" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Choose ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(parentCategory),
                                              "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Parent Category",
                                              placeholder: "Select Parent Category",
                                              items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                              createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                              unref(editor) ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "d-flex justify-end flex-wrap gap-x-2"
                                              }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-bold",
                                                  color: unref(editor).isActive("bold") ? "primary" : "",
                                                  size: "20",
                                                  onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                                }, null, 8, ["color", "onClick"]),
                                                createVNode(VIcon, {
                                                  color: unref(editor).isActive("italic") ? "primary" : "",
                                                  icon: "ri-italic",
                                                  size: "20",
                                                  onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                                }, null, 8, ["color", "onClick"]),
                                                createVNode(VIcon, {
                                                  color: unref(editor).isActive("underline") ? "primary" : "",
                                                  icon: "ri-underline",
                                                  size: "20",
                                                  onClick: ($event) => unref(editor).commands.toggleUnderline()
                                                }, null, 8, ["color", "onClick"]),
                                                createVNode(VIcon, {
                                                  color: unref(editor).isActive("bulletList") ? "primary" : "",
                                                  icon: "ri-list-check",
                                                  size: "20",
                                                  onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                                }, null, 8, ["color", "onClick"]),
                                                createVNode(VIcon, {
                                                  color: unref(editor).isActive("orderedList") ? "primary" : "",
                                                  icon: "ri-list-ordered-2",
                                                  size: "20",
                                                  onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                                }, null, 8, ["color", "onClick"]),
                                                createVNode(VIcon, {
                                                  icon: "ri-links-line",
                                                  size: "20",
                                                  onClick: setLink
                                                }),
                                                createVNode(VIcon, {
                                                  icon: "ri-image-line",
                                                  size: "20",
                                                  onClick: addImage
                                                })
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(parentStatus),
                                              "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Select Category Status",
                                              label: "Parent Status",
                                              items: ["Published", "Inactive", "Scheduled"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-start" }, [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                color: "primary",
                                                class: "me-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Add ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "error",
                                                variant: "outlined",
                                                onClick: resetForm
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Discard ")
                                                ]),
                                                _: 1
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
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(VForm), {
                                ref_key: "refVForm",
                                ref: refVForm,
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(categoryTitle),
                                            "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                            label: "Title",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Fashion"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(categorySlug),
                                            "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                            label: "Slug",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Trends fashion"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VFileInput, {
                                            modelValue: unref(categoryImg),
                                            "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                            "prepend-icon": "",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            density: "compact",
                                            label: "No file chosen",
                                            clearable: ""
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(VBtn, { variant: "outlined" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Choose ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(parentCategory),
                                            "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Parent Category",
                                            placeholder: "Select Parent Category",
                                            items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                            createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                            unref(editor) ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "d-flex justify-end flex-wrap gap-x-2"
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-bold",
                                                color: unref(editor).isActive("bold") ? "primary" : "",
                                                size: "20",
                                                onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                              }, null, 8, ["color", "onClick"]),
                                              createVNode(VIcon, {
                                                color: unref(editor).isActive("italic") ? "primary" : "",
                                                icon: "ri-italic",
                                                size: "20",
                                                onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                              }, null, 8, ["color", "onClick"]),
                                              createVNode(VIcon, {
                                                color: unref(editor).isActive("underline") ? "primary" : "",
                                                icon: "ri-underline",
                                                size: "20",
                                                onClick: ($event) => unref(editor).commands.toggleUnderline()
                                              }, null, 8, ["color", "onClick"]),
                                              createVNode(VIcon, {
                                                color: unref(editor).isActive("bulletList") ? "primary" : "",
                                                icon: "ri-list-check",
                                                size: "20",
                                                onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                              }, null, 8, ["color", "onClick"]),
                                              createVNode(VIcon, {
                                                color: unref(editor).isActive("orderedList") ? "primary" : "",
                                                icon: "ri-list-ordered-2",
                                                size: "20",
                                                onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                              }, null, 8, ["color", "onClick"]),
                                              createVNode(VIcon, {
                                                icon: "ri-links-line",
                                                size: "20",
                                                onClick: setLink
                                              }),
                                              createVNode(VIcon, {
                                                icon: "ri-image-line",
                                                size: "20",
                                                onClick: addImage
                                              })
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(parentStatus),
                                            "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Select Category Status",
                                            label: "Parent Status",
                                            items: ["Published", "Inactive", "Scheduled"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-start" }, [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              color: "primary",
                                              class: "me-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Add ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "error",
                                              variant: "outlined",
                                              onClick: resetForm
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Discard ")
                                              ]),
                                              _: 1
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
                              }, 8, ["onSubmit"])
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
                            createVNode(unref(VForm), {
                              ref_key: "refVForm",
                              ref: refVForm,
                              onSubmit: withModifiers(() => {
                              }, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(categoryTitle),
                                          "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                          label: "Title",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Fashion"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(categorySlug),
                                          "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                          label: "Slug",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Trends fashion"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VFileInput, {
                                          modelValue: unref(categoryImg),
                                          "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                          "prepend-icon": "",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          density: "compact",
                                          label: "No file chosen",
                                          clearable: ""
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(VBtn, { variant: "outlined" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Choose ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(parentCategory),
                                          "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Parent Category",
                                          placeholder: "Select Parent Category",
                                          items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                          createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                          unref(editor) ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "d-flex justify-end flex-wrap gap-x-2"
                                          }, [
                                            createVNode(VIcon, {
                                              icon: "ri-bold",
                                              color: unref(editor).isActive("bold") ? "primary" : "",
                                              size: "20",
                                              onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                            }, null, 8, ["color", "onClick"]),
                                            createVNode(VIcon, {
                                              color: unref(editor).isActive("italic") ? "primary" : "",
                                              icon: "ri-italic",
                                              size: "20",
                                              onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                            }, null, 8, ["color", "onClick"]),
                                            createVNode(VIcon, {
                                              color: unref(editor).isActive("underline") ? "primary" : "",
                                              icon: "ri-underline",
                                              size: "20",
                                              onClick: ($event) => unref(editor).commands.toggleUnderline()
                                            }, null, 8, ["color", "onClick"]),
                                            createVNode(VIcon, {
                                              color: unref(editor).isActive("bulletList") ? "primary" : "",
                                              icon: "ri-list-check",
                                              size: "20",
                                              onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                            }, null, 8, ["color", "onClick"]),
                                            createVNode(VIcon, {
                                              color: unref(editor).isActive("orderedList") ? "primary" : "",
                                              icon: "ri-list-ordered-2",
                                              size: "20",
                                              onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                            }, null, 8, ["color", "onClick"]),
                                            createVNode(VIcon, {
                                              icon: "ri-links-line",
                                              size: "20",
                                              onClick: setLink
                                            }),
                                            createVNode(VIcon, {
                                              icon: "ri-image-line",
                                              size: "20",
                                              onClick: addImage
                                            })
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(parentStatus),
                                          "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Select Category Status",
                                          label: "Parent Status",
                                          items: ["Published", "Inactive", "Scheduled"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-start" }, [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            color: "primary",
                                            class: "me-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Add ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "error",
                                            variant: "outlined",
                                            onClick: resetForm
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Discard ")
                                            ]),
                                            _: 1
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
                            }, 8, ["onSubmit"])
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
                title: "Add Category",
                onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
              }, null, 8, ["onCancel"]),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                default: withCtx(() => [
                  createVNode(VCard, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(unref(VForm), {
                            ref_key: "refVForm",
                            ref: refVForm,
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(categoryTitle),
                                        "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
                                        label: "Title",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Fashion"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(categorySlug),
                                        "onUpdate:modelValue": ($event) => isRef(categorySlug) ? categorySlug.value = $event : null,
                                        label: "Slug",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Trends fashion"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VFileInput, {
                                        modelValue: unref(categoryImg),
                                        "onUpdate:modelValue": ($event) => isRef(categoryImg) ? categoryImg.value = $event : null,
                                        "prepend-icon": "",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        density: "compact",
                                        label: "No file chosen",
                                        clearable: ""
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(VBtn, { variant: "outlined" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Choose ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(parentCategory),
                                        "onUpdate:modelValue": ($event) => isRef(parentCategory) ? parentCategory.value = $event : null,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Parent Category",
                                        placeholder: "Select Parent Category",
                                        items: ["HouseHold", "Management", "Electronics", "Office", "Accessories"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2" }, [
                                        createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"]),
                                        unref(editor) ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "d-flex justify-end flex-wrap gap-x-2"
                                        }, [
                                          createVNode(VIcon, {
                                            icon: "ri-bold",
                                            color: unref(editor).isActive("bold") ? "primary" : "",
                                            size: "20",
                                            onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                          }, null, 8, ["color", "onClick"]),
                                          createVNode(VIcon, {
                                            color: unref(editor).isActive("italic") ? "primary" : "",
                                            icon: "ri-italic",
                                            size: "20",
                                            onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                          }, null, 8, ["color", "onClick"]),
                                          createVNode(VIcon, {
                                            color: unref(editor).isActive("underline") ? "primary" : "",
                                            icon: "ri-underline",
                                            size: "20",
                                            onClick: ($event) => unref(editor).commands.toggleUnderline()
                                          }, null, 8, ["color", "onClick"]),
                                          createVNode(VIcon, {
                                            color: unref(editor).isActive("bulletList") ? "primary" : "",
                                            icon: "ri-list-check",
                                            size: "20",
                                            onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                          }, null, 8, ["color", "onClick"]),
                                          createVNode(VIcon, {
                                            color: unref(editor).isActive("orderedList") ? "primary" : "",
                                            icon: "ri-list-ordered-2",
                                            size: "20",
                                            onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                          }, null, 8, ["color", "onClick"]),
                                          createVNode(VIcon, {
                                            icon: "ri-links-line",
                                            size: "20",
                                            onClick: setLink
                                          }),
                                          createVNode(VIcon, {
                                            icon: "ri-image-line",
                                            size: "20",
                                            onClick: addImage
                                          })
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(parentStatus),
                                        "onUpdate:modelValue": ($event) => isRef(parentStatus) ? parentStatus.value = $event : null,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Select Category Status",
                                        label: "Parent Status",
                                        items: ["Published", "Inactive", "Scheduled"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-start" }, [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          color: "primary",
                                          class: "me-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Add ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "error",
                                          variant: "outlined",
                                          onClick: resetForm
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Discard ")
                                          ]),
                                          _: 1
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
                          }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/EcommerceAddCategoryDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const product25 = "/build/assets/product-25-D95TOBo2.png";
const product28 = "/build/assets/product-28-B1WMOflt.png";
const _sfc_main = {
  __name: "category-list",
  __ssrInlineRender: true,
  setup(__props) {
    const categoryData = [
      {
        categoryTitle: "Smart Phone",
        description: "Choose from wide range of smartphones online at best prices.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product1
      },
      {
        categoryTitle: "Clothing, Shoes, and jewellery",
        description: "Fashion for a wide selection of clothing, shoes, jewellery and watches.",
        totalProduct: 4689,
        totalEarning: 45627,
        image: product9
      },
      {
        categoryTitle: "Home and Kitchen",
        description: "Browse through the wide range of Home and kitchen products.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product10
      },
      {
        categoryTitle: "Beauty and Personal Care",
        description: "Explore beauty and personal care products, shop makeup and etc.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product19
      },
      {
        categoryTitle: "Books",
        description: "Over 25 million titles across categories such as business  and etc.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product25
      },
      {
        categoryTitle: "Games",
        description: "Every month, get exclusive in-game loot, free games, a free subscription.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product12
      },
      {
        categoryTitle: "Baby Products",
        description: "Buy baby products across different categories from top brands.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product14
      },
      {
        categoryTitle: "Growsari",
        description: "Shop grocery Items through at best prices in India.",
        totalProduct: 12548,
        totalEarning: 98784,
        image: product28
      },
      {
        categoryTitle: "Computer Accessories",
        description: "Enhance your computing experience with our range of computer accessories.",
        totalProduct: 9876,
        totalEarning: 65421,
        image: product17
      },
      {
        categoryTitle: "Fitness Tracker",
        description: "Monitor your health and fitness goals with our range of advanced fitness trackers.",
        totalProduct: 1987,
        totalEarning: 32067,
        image: product10
      },
      {
        categoryTitle: "Smart Home Devices",
        description: "Transform your home into a smart home with our innovative smart home devices.",
        totalProduct: 2345,
        totalEarning: 87654,
        image: product11
      },
      {
        categoryTitle: "Audio Speakers",
        description: "Immerse yourself in rich audio quality with our wide range of speakers.",
        totalProduct: 5678,
        totalEarning: 32145,
        image: product2
      }
    ];
    const headers = [
      {
        title: "Categories",
        key: "categoryTitle"
      },
      {
        title: "Total Products",
        key: "totalProduct",
        align: "end"
      },
      {
        title: "Total Earning",
        key: "totalEarning",
        align: "end"
      },
      {
        title: "Action",
        key: "actions",
        sortable: false
      }
    ];
    const itemsPerPage = ref(10);
    const searchQuery = ref("");
    const isAddProductDrawerOpen = ref(false);
    const page = ref(1);
    const updateOptions = (options) => {
      page.value = options.page;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_MoreBtn = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-md-space-between flex-wrap gap-4 justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search",
                    density: "compact",
                    style: { "max-inline-size": "280px", "min-inline-size": "200px" }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "ri-upload-2-line",
                    color: "secondary",
                    variant: "outlined"
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
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "ri-add-line",
                    onClick: ($event) => isAddProductDrawerOpen.value = !unref(isAddProductDrawerOpen)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add Category `);
                      } else {
                        return [
                          createTextVNode(" Add Category ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-md-space-between flex-wrap gap-4 justify-center" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search",
                        density: "compact",
                        style: { "max-inline-size": "280px", "min-inline-size": "200px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                        createVNode(VBtn, {
                          "prepend-icon": "ri-upload-2-line",
                          color: "secondary",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Export ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isAddProductDrawerOpen.value = !unref(isAddProductDrawerOpen)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add Category ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTable, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              headers,
              page: unref(page),
              items: categoryData,
              "item-value": "categoryTitle",
              search: unref(searchQuery),
              "show-select": "",
              class: "text-no-wrap category-table",
              "onUpdate:options": updateOptions
            }, {
              "item.actions": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-edit-box-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-edit-box-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MoreBtn, {
                    size: "small",
                    class: "text-medium-emphasis",
                    "menu-list": [
                      {
                        title: "Download",
                        value: "download",
                        prependIcon: "ri-download-line"
                      },
                      {
                        title: "Edit",
                        value: "edit",
                        prependIcon: "ri-pencil-line"
                      },
                      {
                        title: "Duplicate",
                        value: "duplicate",
                        prependIcon: "ri-stack-line"
                      }
                    ],
                    "item-props": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-edit-box-line" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MoreBtn, {
                      size: "small",
                      class: "text-medium-emphasis",
                      "menu-list": [
                        {
                          title: "Download",
                          value: "download",
                          prependIcon: "ri-download-line"
                        },
                        {
                          title: "Edit",
                          value: "edit",
                          prependIcon: "ri-pencil-line"
                        },
                        {
                          title: "Duplicate",
                          value: "duplicate",
                          prependIcon: "ri-stack-line"
                        }
                      ],
                      "item-props": ""
                    })
                  ];
                }
              }),
              "item.categoryTitle": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-x-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    variant: "tonal",
                    rounded: "",
                    size: "38"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.categoryTitle)} width="38" height="38"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: item.image,
                            alt: item.categoryTitle,
                            width: "38",
                            height: "38"
                          }, null, 8, ["src", "alt"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><p class="text-high-emphasis font-weight-medium mb-0"${_scopeId2}>${ssrInterpolate(item.categoryTitle)}</p><div class="text-body-2"${_scopeId2}>${ssrInterpolate(item.description)}</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-x-3" }, [
                      createVNode(VAvatar, {
                        variant: "tonal",
                        rounded: "",
                        size: "38"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: item.image,
                            alt: item.categoryTitle,
                            width: "38",
                            height: "38"
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-high-emphasis font-weight-medium mb-0" }, toDisplayString(item.categoryTitle), 1),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(item.description), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.totalEarning": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-end pe-4"${_scopeId2}>${ssrInterpolate(item.totalEarning.toLocaleString("en-IN", { style: "currency", currency: "USD" }))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-end pe-4" }, toDisplayString(item.totalEarning.toLocaleString("en-IN", { style: "currency", currency: "USD" })), 1)
                  ];
                }
              }),
              "item.totalProduct": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-end pe-4"${_scopeId2}>${ssrInterpolate(item.totalProduct.toLocaleString())}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-end pe-4" }, toDisplayString(item.totalProduct.toLocaleString()), 1)
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
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, categoryData.length))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                    disabled: unref(page) >= Math.ceil(categoryData.length / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(categoryData.length / unref(itemsPerPage)) ? page.value = Math.ceil(categoryData.length / unref(itemsPerPage)) : page.value++
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, categoryData.length)), 1),
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
                          disabled: unref(page) >= Math.ceil(categoryData.length / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(categoryData.length / unref(itemsPerPage)) ? page.value = Math.ceil(categoryData.length / unref(itemsPerPage)) : page.value++
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
                  createVNode("div", { class: "d-flex justify-md-space-between flex-wrap gap-4 justify-center" }, [
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search",
                      density: "compact",
                      style: { "max-inline-size": "280px", "min-inline-size": "200px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, {
                        "prepend-icon": "ri-upload-2-line",
                        color: "secondary",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Export ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        "prepend-icon": "ri-add-line",
                        onClick: ($event) => isAddProductDrawerOpen.value = !unref(isAddProductDrawerOpen)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add Category ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDataTable, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                headers,
                page: unref(page),
                items: categoryData,
                "item-value": "categoryTitle",
                search: unref(searchQuery),
                "show-select": "",
                class: "text-no-wrap category-table",
                "onUpdate:options": updateOptions
              }, {
                "item.actions": withCtx(() => [
                  createVNode(_component_IconBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-edit-box-line" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MoreBtn, {
                    size: "small",
                    class: "text-medium-emphasis",
                    "menu-list": [
                      {
                        title: "Download",
                        value: "download",
                        prependIcon: "ri-download-line"
                      },
                      {
                        title: "Edit",
                        value: "edit",
                        prependIcon: "ri-pencil-line"
                      },
                      {
                        title: "Duplicate",
                        value: "duplicate",
                        prependIcon: "ri-stack-line"
                      }
                    ],
                    "item-props": ""
                  })
                ]),
                "item.categoryTitle": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-x-3" }, [
                    createVNode(VAvatar, {
                      variant: "tonal",
                      rounded: "",
                      size: "38"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.image,
                          alt: item.categoryTitle,
                          width: "38",
                          height: "38"
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-high-emphasis font-weight-medium mb-0" }, toDisplayString(item.categoryTitle), 1),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(item.description), 1)
                    ])
                  ])
                ]),
                "item.totalEarning": withCtx(({ item }) => [
                  createVNode("div", { class: "text-end pe-4" }, toDisplayString(item.totalEarning.toLocaleString("en-IN", { style: "currency", currency: "USD" })), 1)
                ]),
                "item.totalProduct": withCtx(({ item }) => [
                  createVNode("div", { class: "text-end pe-4" }, toDisplayString(item.totalProduct.toLocaleString()), 1)
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
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, categoryData.length)), 1),
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
                        disabled: unref(page) >= Math.ceil(categoryData.length / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(categoryData.length / unref(itemsPerPage)) ? page.value = Math.ceil(categoryData.length / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["items-per-page", "onUpdate:itemsPerPage", "page", "search"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        isDrawerOpen: unref(isAddProductDrawerOpen),
        "onUpdate:isDrawerOpen": ($event) => isRef(isAddProductDrawerOpen) ? isAddProductDrawerOpen.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/product/category-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
